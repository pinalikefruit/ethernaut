import { assert } from "chai"
import { network, ethers, getNamedAccounts } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Attack, Token } from "../../typechain-types"
import "dotenv/config"
import abi from "../../artifacts/contracts/Token.sol/Token.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token hack staging", function () {
        let provider: any 
        let hacker: any 
        let attack: Attack
        let token: Token
        let addressContract: string

        beforeEach(async() => {
            provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
            hacker = (await getNamedAccounts()).hacker
            
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            
            attack = await ethers.getContract("Attack",hacker)
            token = new ethers.Contract(addressContract,abi.abi, hacker)

        })
        describe("Hack", function() {
            it("Check start balance", async() => {
                let balance = (await token.balanceOf(hacker.address)).toString()
                assert.equal(balance,"20");
            })
            it("Out all money",async() => {
                const tx = await attack.attack()
                await provider.waitForTransaction(tx.hash,1)
                
                let balance = (await token.balanceOf(hacker.address)).toString()
                let totalSupply = (await token.totalSupply()).toString()
                assert.equal(balance, totalSupply)
            } )
        })
    })