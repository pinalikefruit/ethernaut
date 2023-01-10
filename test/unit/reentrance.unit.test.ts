import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Reentrance, Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Reentrance unit test", function(){
        let reentrance: Reentrance
        let attackContract:Attack
        let attack:Attack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress
        let deployer: SignerWithAddress
        let provider: any

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            await deployments.fixture("all")
            reentrance = await ethers.getContract("Reentrance")
            attackContract = await ethers.getContract("Attack")
            attack = attackContract.connect(hacker)
            
            await reentrance.donate(deployer.address,{value:"10"})
            provider = waffle.provider
            
        })
        describe("try hack", function () {
            it("Check the balance", async() => {
                let balance = (await provider.getBalance(reentrance.address)).toString()
                assert.equal(balance, "10")
            })
            it("Deploy attack", async() => {
                const tx = await attack.attack({value:"6"})
                tx.wait(1)
                let balance = (await provider.getBalance(attack.address)).toString()
                assert.equal(balance,"16");
            })
        })
    })
