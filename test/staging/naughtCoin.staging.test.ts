import { assert } from "chai"
import { network, ethers, getNamedAccounts } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { NaughtCoin, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/NaughtCoin.sol/NaughtCoin.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Naught Coin hack staging", function () {
        let provider: any 
        let contractAddress: string
        let naughtCoin:NaughtCoin
        let naughtCoinContract: NaughtCoin
        let wallet:any
        let hack: Hack
        let hackContract:Hack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(wallet)

            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            naughtCoin = new ethers.Contract(contractAddress,abi.abi,provider) 
            naughtCoinContract = naughtCoin.connect(wallet)           
        })
        describe("Try hack Naught Coin", function () {
            it("Transfer all the money", async() => {
                const tx1 = await hack.attack()
                tx1.wait(1)
                let balance = (await (naughtCoinContract.balanceOf(hack.address))).toString()
                assert.equal(balance,"0")
            })
        })
        
    })