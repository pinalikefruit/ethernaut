import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { GoodSamaritan , Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/GoodSamaritan.sol/GoodSamaritan.json"
import abiCoin from "../../artifacts/contracts/GoodSamaritan.sol/Coin.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("GoodSamaritan hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let samaritan: GoodSamaritan

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            samaritan = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        
        describe("Try hack GoodSamaritan", function () {
            it("Get all amount", async() => {
                const tx = await hack.attack()
                await tx.wait(1)

                let addressCoin = await samaritan.coin()
                const coin = new ethers.Contract(addressCoin,abiCoin.abi,wallet)
                const balance = (await coin.balances(hack.address)).toString()
                assert.equal(balance,"1000000")

            })
            
           
        })
    })
        
    