import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Denial, Hack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Denial unit attack", function(){
        let denial: Denial
        let hackContract: Hack
        let hack: Hack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            denial = await ethers.getContract("Denial")
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(hacker)
        })
        describe("try hack", function () {
            it("Check the patner is the hacker", async() => {
                const partner:string = await denial.partner()
                assert.equal(partner,hackContract.address)
            })
          
        })
    })