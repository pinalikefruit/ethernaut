import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Privacy } from "../../typechain-types"
import { assert } from "chai"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Privacy looking the passwaord", function(){
        let privacy: Privacy
        let provider: any

        beforeEach(async() => {
            await deployments.fixture("privacy")
            privacy = await ethers.getContract("Privacy")
            
            provider = waffle.provider
        })
        describe("try hack", function () {
            it("Check is locked!", async() => {
                const lock:boolean = await privacy.locked()
                assert.equal(lock,true)
            })
            it("Get the password", async() => {
                const password = await provider.getStorageAt(privacy.address, 5)
                // first 0x + 16 * 2
                let password16 = password.slice(0, 34);
                const tx = await privacy.unlock(password16)
                await tx.wait(1)
                const lock:boolean = await privacy.locked()
                assert.equal(lock,false)
            })
           
        })
    })
