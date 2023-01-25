import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { Shop, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Shop.sol/Shop.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Shop hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let shop: Shop

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            shop = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Try hack Shop", function () {
            it("Check the price is now 0", async() => {
                const tx = await hack.attack()
                await tx.wait(1)
                let price:string = (await shop.price()).toString()
                assert.equal(price,"0")
            })
           
        })
        
    }) 