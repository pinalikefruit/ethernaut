import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { Hack } from "../../typechain-types"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Motorbiker hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let implemetationAddress: string
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            implemetationAddress = networkConfig[network.config.chainId!]["implemetationAddress"]!
            
        })
        describe("Try hack the Motorbike", function () {
            // Get the implementation address
            // it("Get the address implementation ", async() => {
            //     const implementation = await provider.getStorageAt(addressContract,"0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc")
            //     console.log(implementation)
            // })
            it("Init attack ", async() => {
                const tx = await hack.attack()
                await tx.wait(1)
            })
            
            
        })
        
    }) 