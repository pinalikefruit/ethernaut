import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { Denial, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Denial.sol/Denial.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Denial hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let partner: string
        let denial: Denial

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            denial = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Try hack Denial", function () {
            it("Check the owner isn't the hacker", async() => {
                partner = await denial.partner()
                assert.notEqual(partner, hack.address)
            })
           
        })
        
    }) 