import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Privacy } from "../../typechain-types"
import abi from "../../artifacts/contracts/Privacy.sol/Privacy.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Privacy hack staging", function () {
        let provider: any 
        let contractAddress: string
        let privacy:Privacy
        let wallet:any

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)

            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            privacy = new ethers.Contract(contractAddress,abi.abi,wallet)            
        })
        describe("Try hack elevator", function () {
            it("Check is locked!",async() => {
                const lock:boolean = await privacy.locked()
                assert.equal(lock,true)
            })
            it("Unlocked!", async() => {
                let password = await provider.getStorageAt(privacy.address,5)
                password = password.slice(0,34)
                const tx = await privacy.unlock(password)
                await tx.wait(1)

                const lock:boolean = await privacy.locked()
                assert.equal(lock,false)
            })
        })
        
    })