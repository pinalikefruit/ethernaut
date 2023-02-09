import { assert } from "chai"
import { network, ethers } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { PuzzleProxy , Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/PuzzleWallet.sol/PuzzleProxy.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Puzzle hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let puzzle: PuzzleProxy

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            puzzle = new ethers.Contract(addressContract,abi.abi,wallet)
        })
        describe("Try hack the Puzzle", function () {
            it("Get the admin ", async() => {
                const tx = await hack.attack({value: (ethers.utils.parseUnits("0.001")).toString()})
                await tx.wait(1)
                const admin = (await puzzle.admin()).toString()
                assert.equal(admin,wallet.address)
            })
            
        })
        
    }) 