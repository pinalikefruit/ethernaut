import { assert } from "chai"
import { network, ethers, getNamedAccounts} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { King, Attack } from "../../typechain-types"
import abi from "../../artifacts/contracts/King.sol/King.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("King hack staging", function () {
        let provider: any 
        let addressContract: string
        let hacker:any
        let king:King
        let wallet:any
        let attack: Attack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            hacker = (await getNamedAccounts()).hacker
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            attack = await ethers.getContract("Attack",hacker)
            king = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Be The King Forever", function () {
            it("Check the king",async() => {
                let actualKing = await king._king()
                assert.equal(actualKing,attack.address)
            })        
        })
         it("Try to get the king with another account and failed ", async() => {
                try {
                    let value = await king.prize()
                    await wallet.sendTransaction({
                        from: wallet.address,
                        to: addressContract,
                        value: value
                    });
                  } catch (error) {
                    // console.log(`Transaction failed: ${error}`);
                    assert(error.message.includes("reverted"), "Expected error message to include 'revert'");
                  }

            })
    })