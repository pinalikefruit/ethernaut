import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Preservation, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Preservation.sol/Preservation.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Preservation hack staging", function () {
        let provider: any 
        let contractAddress: string
        let preservation:Preservation
        let preservationContract: Preservation
        let wallet:any
        let hack: Hack
        let hackContract:Hack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(wallet)

            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            preservation = new ethers.Contract(contractAddress,abi.abi,provider) 
            preservationContract = preservation.connect(wallet)           
        })
        describe("Try hack Preservation", function () {
            it("Check is address is different owner", async() => {
                const owner:string = await preservation.owner()
                assert.notEqual(owner,wallet.address)
            })
            it("Get the ownership", async() => {
                const tx = await hack.attack()
                await tx.wait(1)
                const owner:string = await preservation.owner()
                assert.equal(owner,wallet.address)
            })
        })
        
    })