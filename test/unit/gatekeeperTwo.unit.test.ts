import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { GatekeeperTwo } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gatekeeper Two unit attack", function(){
        let gatekeeperTwo: GatekeeperTwo
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            gatekeeperTwo = await ethers.getContract("GatekeeperTwo")
        })
        describe("try hack", function () {
            it("Check entrant is hacker address", async() => {
                const entrant:string = await gatekeeperTwo.entrant()
                assert.equal(entrant,hacker.address)
            })

        })
    })
