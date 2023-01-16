import { assert } from "chai"
import { network, ethers} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { GatekeeperOne, Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/GatekeeperOne.sol/GatekeeperOne.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gatekeeper hack staging", function () {
        let provider: any 
        let contractAddress: string
        let gatekeeperOne:GatekeeperOne
        let wallet:any
        let hack: Hack
        let hackContract:Hack

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)

            hackContract = await ethers.getContract("Hack")
            hack = hackContract.connect(wallet)
           
            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            gatekeeperOne = new ethers.Contract(contractAddress,abi.abi,wallet)            
        })
        describe("Try hack Gatekeeper One", function () {
            it("Check is 0 address",async() => {
                const entrant:string = (await gatekeeperOne.entrant()).toString()
                assert.equal(entrant,ethers.constants.AddressZero)
            })
            it("Pass to the Gate One!", async() => {
                const tx = await hack.attack("7244")
                await tx.wait(1)
                const entrant:string = await gatekeeperOne.entrant()
                assert.equal(entrant,wallet.address)
            })
        })
        
    })