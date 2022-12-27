import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Fallout } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hacked", function() {
        let fallout: Fallout
        let falloutContract: Fallout
        let accounts: SignerWithAddress[]
        let deployer: SignerWithAddress
        let hacker : SignerWithAddress
        let MIN_AMOUNT = 1

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            await deployments.fixture("fallout")
            falloutContract = await ethers.getContract("Fallout")
            fallout = falloutContract.connect(hacker)

        })
        describe("Ownership", function(){
            it("The principal owner is deployer", async()=> {
                let owner = await falloutContract.owner()
                assert.equal(owner,ethers.constants.AddressZero)
            })
            it("You claim ownership of the contract", async() => {
                // Insert into contribute list
                let tx1 = await fallout.Fal1out({value: MIN_AMOUNT})
                tx1.wait(1)
                // Check new owner
                let newOwner = await fallout.owner()
                assert.equal(newOwner,hacker.address)
            })
        })
    })