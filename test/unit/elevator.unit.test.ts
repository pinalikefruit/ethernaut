import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Elevator, Hack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Elevator attack test", function(){
        let elevator: Elevator
        let hackContract:Hack
        let hack:Hack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress
        let deployer: SignerWithAddress
        let provider: any
        let top: boolean

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            await deployments.fixture("all")
            elevator = await ethers.getContract("Elevator")
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(hacker)
            
            provider = waffle.provider
            
        })
        describe("try hack", function () {
            it("Check is the floor isn't in the top", async() => {
                top = await elevator.top()
                assert.equal(top,false)
            })
            it("Deploy attack", async() => {
                const tx = await hack.attack("1")
                provider.waitForTransaction(tx.hash,1)
                top = await elevator.top()
                assert.equal(top,true)
            })
           
        })
    })
