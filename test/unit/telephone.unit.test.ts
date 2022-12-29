import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { Telephone, Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Telephone Hack", function() {
        let telephone: Telephone
        let attackContract: Attack
        let accounts: SignerWithAddress[]
        let attack: Attack
        let deployer: SignerWithAddress
        let hacker: SignerWithAddress
        
        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            
            await deployments.fixture("all")
            telephone = await ethers.getContract("Telephone")
            attackContract = await ethers.getContract("Attack")
            attack = attackContract.connect(hacker)
            
        })

        describe("Change ownershipt", function(){
            it("The principal owner is deployer", async() => {
                let owner = await telephone.owner()
                assert.equal(owner, deployer.address)
            })
            it("Claimed ownership of the contract", async() => {
                const tx = await attack.hack()
                tx.wait(1)
                // Check new owner 
                let newOwner = await telephone.owner()
                assert.equal(newOwner, hacker.address)

            })
        })
    })