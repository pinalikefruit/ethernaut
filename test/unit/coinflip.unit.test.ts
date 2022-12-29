import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { CoinFlip, Attack } from "../../typechain-types"
import { assert } from "chai"


!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hacked", function() {
        let coinflip: CoinFlip
        let attack: Attack
        
        beforeEach(async() => {
            
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