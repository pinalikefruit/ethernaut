import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { CoinFlip, Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hacked", function() {
        let coinflip: CoinFlip
        let attack: Attack
        let accounts: SignerWithAddress[]
        let deployer: SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture("all")
            coinflip = await ethers.getContract("CoinFlip")
            attack = await ethers.getContract("Attack")

        })
        describe("Flip", function(){
            it("See consecutives flip", async()=> {
                let consecutives = (await coinflip.consecutiveWins()).toString()
                assert.equal(consecutives,"0")
            })
            it("Get ten consecutives successfully", async() => {
                let consecutives:number;
                do {
                let tx = await attack.start()
                tx.wait(1)
                consecutives = (await coinflip.consecutiveWins()).toNumber()
                } while (consecutives < 10)

                assert.equal(consecutives,10)
            })
        })
    })