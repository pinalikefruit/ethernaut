import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Preservation, Hack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Preservation One unit attack", function(){
        let preservation: Preservation
        let hackContract: Hack
        let hack: Hack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            preservation = await ethers.getContract("Preservation")
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(hacker)
        })
        describe("try hack", function () {
            it("Check is address is different owner", async() => {
                const owner:string = await preservation.owner()
                assert.notEqual(owner,hacker.address)
            })
            it("Get the ownership", async() => {
                const tx = await hack.attack()
                await tx.wait(1)
                const owner:string = await preservation.owner()
                assert.equal(owner,hacker.address)
            })

           
        })
    })
