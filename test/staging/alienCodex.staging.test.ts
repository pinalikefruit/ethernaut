import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { AlienCodex, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/AlienCodex.sol/ALienCodex.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Alien Codex hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let owner: string
        let alienCodex: AlienCodex

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            alienCodex = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Try hack Magic Number", function () {
            it("Check the owner isn't the hacker", async() => {
                owner = await alienCodex.owner()
                assert.notEqual(owner, wallet.address)
            })
            it("Change the owner to the hacker", async() => {
                const tx = await hack.attack()
                await tx.wait(1)
                owner = await alienCodex.owner()
                assert.equal(owner,wallet.address)
            })
           
        })
        
    }) 