import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Dex, Hack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Dex unit attack", function(){
        let dex: Dex
        let hackContract: Hack
        let hack: Hack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            dex = await ethers.getContract("Dex")
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(hacker)
        })
        describe("try hack", function () {
            it("Check the price lower than 100", async() => {
                

            })
          
        })
    })