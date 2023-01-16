import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { GatekeeperOne, Hack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gatekeeper One unit attack", function(){
        let gatekeeperOne: GatekeeperOne
        let hackContract: Hack
        let hack: Hack
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            gatekeeperOne = await ethers.getContract("GatekeeperOne")
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(hacker)
        })
        describe("try hack", function () {
            it("Check is 0 address", async() => {
                const entrant:string = await gatekeeperOne.entrant()
                assert.equal(entrant,ethers.constants.AddressZero)
            })
            it("try to hack", async() => {
                const tx = await hack.attack("7414")
                await tx.wait()
                
                const entrant:string = await gatekeeperOne.entrant()
                assert.equal(entrant,hacker.address)
            })

            // it("Get gas use before 2", async() => {
            //     const transactionResponse = await hack.attack("1215")
            //     const transactionReceipt = await transactionResponse.wait()
            //     const { gasUsed } = transactionReceipt
            //     console.log(gasUsed.toNumber())
            //     const entrant:string = await gatekeeperOne.entrant()
            //     assert.equal(entrant,hacker.address)
            // })
            // it("try to get gas", async() => {
            //     for(let i = 100; i < 8191; i++){
            //         try {
            //             const tx = await hack.attack(i)
            //             tx.wait()
            //             console.log("gas" ,i)
            //             return
            //         } catch{

            //         }
            //     }
            // })
           
        })
    })
