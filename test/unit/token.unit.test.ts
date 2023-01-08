import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { Delegation, Attack } from "../../typechain-types"
import { assert } from "chai"



!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token hack", function(){
        let delegation: Delegation
        let attackContract: Attack
       
        beforeEach(async() => {
            
            await deployments.fixture("all")
            delegation = await ethers.getContract("Delegation")
            attackContract = await ethers.getContract("Hack")
            

        })
        describe("Chek the owner", function () {
            it("Take the ownership",async() => {
                const owner = await delegation.owner()
                assert.equal(owner,attackContract.address)
            })
        })
    })