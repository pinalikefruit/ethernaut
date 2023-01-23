import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { Hack } from "../../typechain-types"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Magic Number hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let hackContract:Hack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(wallet)         
        })
        describe("Try hack Magic Number", function () {
            it("Try hack", async() => {
                let getMagicNumber = (await hack.checkMagicNumber()).toString()
                assert.equal(getMagicNumber,"42")
            })
        })
        
    })