import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Elevator, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Elevator.sol/Elevator.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Elevator hack staging", function () {
        let provider: any 
        let contractAddress: string
        let hacker:any
        let elevator:Elevator
        let wallet:any
        let hack: Hack
        let top: boolean
        let floor:string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            hacker = (await getNamedAccounts()).hacker
            
            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            
            hack = await ethers.getContract("Hack",hacker)
            elevator = new ethers.Contract(contractAddress,abi.abi,wallet)
            
            floor = "1"
            
        })
        describe("Try hack elevator", function () {
            it("Check is the floor isn't in the top",async() => {
                top = await elevator.top()
                assert.equal(top,false)
            })
            it("Deploy attack", async() => {
                const tx = await hack.attack(floor)
                await tx.wait(1)
        
                top = await elevator.top();
                assert.equal(top, true);
            })
        })
        
    })