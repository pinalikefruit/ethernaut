import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { MagicNum, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/MagicNum.sol/MagicNum.json"
import abiI from "../../artifacts/contracts/Hack.sol/IMagicNum.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Preservation hack staging", function () {
        let provider: any 
        let contractAddress: string
        let magicNum:MagicNum
        let magicNumContract: MagicNum
        let wallet:any
        let hack: Hack
        let hackContract:Hack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(wallet)

            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            magicNum = new ethers.Contract(contractAddress,abi.abi,provider) 
            magicNumContract = magicNum.connect(wallet)           
        })
        describe("Try hack Magic Number", function () {
            it("Try hack", async() => {
                // let address:any
                // const tx = await hack.attack()
                // await tx.wait(1)
                // await hack.on("Deploy_Success", (event:any) => {
                //     address = event.args.contractAddress;
                    
                // });
                let address = "0xe8365D14d1036d81fb5Da92444BeBAbE21989B16"
                const tx2  = await magicNumContract.setSolver(address)
                await tx2.wait(1)
                let Ialways = new ethers.Contract(address,abiI.abi,provider) 
                let getNumber = (await Ialways.whatIsTheMeaningOfLife()).toString()
                assert.equal(getNumber,"42")
            })
        })
        
    })