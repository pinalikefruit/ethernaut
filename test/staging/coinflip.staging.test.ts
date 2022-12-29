import { assert } from "chai"
import {network, ethers, getNamedAccounts } from "hardhat"
import { developmentChains, networkConfig} from "../../helper-hardhat-config"
import {  Attack,Telephone } from "../../typechain-types"
import "dotenv/config"
import abi from "../../artifacts/contracts/Telephone.sol/Telephone.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Coinflip Hack Staging", function (){
        let provider:any
        let hacker:any
        let attack: Attack
        let telephone: Telephone
        let addressContract: string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            
            attack = await ethers.getContract("Attack", hacker) 
            telephone = new ethers.Contract(addressContract, abi.abi,  hacker)
            
        })  
        describe("Hack", function() {
            it("Claimed ownership of the contract", async() => {
                const tx = await attack.hack()
                tx.wait(1)
                setTimeout(()=>{
                    console.log("Waiting......")
                }, 15000)
                // Check new owner 
                let newOwner = await telephone.owner()
                assert.equal(newOwner, hacker.address)

            })
          
        })
    })