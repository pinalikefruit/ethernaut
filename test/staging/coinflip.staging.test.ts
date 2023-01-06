import { assert } from "chai"
import {network, ethers, getNamedAccounts } from "hardhat"
import { developmentChains} from "../../helper-hardhat-config"
import {  Attack } from "../../typechain-types"

import "dotenv/config"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Coinflip Hack Staging", function (){
        let provider:any
        let hacker:any
        let attack: Attack
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hacker = (await getNamedAccounts()).hacker
            attack = await ethers.getContract("Attack", hacker) 
            
        })  
        describe("Hack", function() {
            [1,2,3,4,5,6,7,8,9,10].forEach( async(value)=> {
                it("Get 10 consecutives", async() => {
               
                    // Enter flip 
                    console.log(`Flip coin ${value}`)
                    let consecutives:number;
                    
                    const tx = await attack.start({gasLimit: 100000,  gasPrice: ethers.utils.parseUnits("10.0", "gwei")})
                    await provider.waitForTransaction(tx.hash)
                    
                    consecutives = (await attack.wins()).toNumber()  + 1
                    console.log("Consecutives",consecutives)
                   
                })
            })
            it("at least 10 consecutive", async() => {
                let consecutives:number;
                this.timeout(10000);
                consecutives = (await attack.wins()).toNumber()
                assert.equal(consecutives, 10)
            })
        })
    })
