import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Vault } from "../../typechain-types"
import abi from "../../artifacts/contracts/Vault.sol/Vault.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault hack staging", function () {
        let provider: any 
        let addressContract: string
        let hacker:any
        let vault:Vault
        let value:boolean
        let wallet:any

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            hacker = (await getNamedAccounts()).hacker
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!

            vault = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Inside the vault", function () {
            it("Check vault is locked!",async() => {
                value = await vault.locked()
                assert.equal(value,true)
            })
            it("Get the password",async() => {
                const password = await provider.getStorageAt(addressContract,1)
                const tx = await vault.unlock(password)
                await provider.waitForTransaction(tx.hash,1)
                value = await vault.locked()
                assert.equal(value,false);
            })
            
        })
    })