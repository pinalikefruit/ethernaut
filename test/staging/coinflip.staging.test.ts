import { assert } from "chai"
import {network, ethers, deployments} from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { CoinFlip, Attack } from "../../typechain-types"
import abiAttack from "../../artifacts/contracts/Attack.sol/Attack.json"
import abiCoinFlip from "../../artifacts/contracts/CoinFlip.sol/CoinFlip.json"
import "dotenv/config"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)


developmentChains.includes(network.name)
    ? describe.skip
    : describe("Coinflip Hack Staging", function (){
        let provider:any
        let hacker:any
        // const coinFlipAddress:string = networkConfig[network.config.chainId!]["contractAddress"]!
        // const coinFlipABI = abiCoinFlip.abi
        // let coinflip: CoinFlip
        // let coinflipContract: CoinFlip
        let attack: Attack
        let attackContract: Attack
        

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            hacker  = new ethers.Wallet(PRIVATE_KEY,provider)
            console.log("here good!")
            attackContract = new ethers.Contract("0x99BfA09e2D2F76559aBdf640f220EFBD1C182e47", abiAttack.abi,provider)
            // coinflipContract = new ethers.Contract("0x2a232e97219Daa59b3c296C18E7563d95d2EA68D",coinFlipABI,provider)
            
            // await deployments.fixture("attack")
            // attackContract = await ethers.getContract("Attack")
            attack  = attackContract.connect(hacker)
            console.log("here good!", attack.address)
            
        })  
        describe("Hack", function() {
            [1,2,3,4,5,6,7,8,9,10].forEach( async(value)=> {
                it("Get 10 consecutives", async() => {
               
                    // Enter flip 
                    console.log('Setting attack ... ')
                    let consecutives:number;
                    
                    
                    // setTimeout(async() => {
                    //         await attack.start({gasLimit: 100000,  gasPrice: ethers.utils.parseUnits("10.0", "gwei")})
                    // }, 25000)
                    const tx = await attack.start({gasLimit: 100000,  gasPrice: ethers.utils.parseUnits("10.0", "gwei")})
                    tx.wait(1)
                    
                    consecutives = (await attack.wins()).toNumber()
                    //entering for the second
                    console.log("Consecutives",consecutives)
                   
                
                })
            })
            
        })
    })