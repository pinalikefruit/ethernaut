import { assert } from "chai"
import { network, ethers, getNamedAccounts } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { GatekeeperTwo } from "../../typechain-types"
import abi from "../../artifacts/contracts/GatekeeperTwo.sol/GatekeeperTwo.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Gatekeeper hack staging", function () {
        let provider: any 
        let contractAddress: string
        let gatekeeperTwo:GatekeeperTwo
        let hacker:string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker = (await getNamedAccounts()).hacker
                       
            contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
            gatekeeperTwo = new ethers.Contract(contractAddress,abi.abi,provider)            
        })
        describe("Try hack Gatekeeper Two", function () {
            it("Pass to the Gate Two!", async() => {
                const entrant:string = await gatekeeperTwo.entrant()
                assert.equal(entrant,hacker)
            })
        })
        
    })