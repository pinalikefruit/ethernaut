import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Attack } from "../../typechain-types"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
 
developmentChains.includes(network.name)
    ? describe.skip
    : describe("Force hack staging", function () {
        let provider: any 
        let addressContract: string
        let hacker:any
        let attack:Attack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker = (await getNamedAccounts()).hacker
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            attack = await ethers.getContract("Attack",hacker)

        })
        describe("Send ether", function () {
            it("Check inital balance of force contract",async() => {
                const balance = (await provider.getBalance(addressContract)).toString();
                assert.equal(balance,"0")
            })
            it("Check inital balance of attack contract",async() => {
                const balance = (await provider.getBalance(attack.address)).toString();
                assert.equal(balance,"1")
            })
            it("Send force ethers", async() => {
                const tx = await attack.attack(addressContract)
                await provider.waitForTransaction(tx.hash,1)
                const balance = (await provider.getBalance(addressContract)).toString();
                assert.equal(balance,"1")
            })
        })
    })