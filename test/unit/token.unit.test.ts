import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { Token, Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"


!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token hack", function(){
        let token: Token
        let attackContract: Attack
        let attack: Attack
        let accounts: SignerWithAddress[]
        let deployer, hacker : SignerWithAddress

        beforeEach(async() => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            hacker = accounts[1]
            
            await deployments.fixture("all")
            token = await ethers.getContract("Token")
            attackContract = await ethers.getContract("Attack")
            attack = attackContract.connect(hacker)
            const tx = await token.transfer(hacker.address,"20")
            tx.wait(1)
        })
        describe("Tranfer all ", function () {
            it("Check start balance", async() => {
                let balance = (await token.balanceOf(hacker.address)).toString()
                assert.equal(balance,"20");
            })
            it("Out all money",async() => {
                const tx = await attack.attack()
                tx.wait(1)
                // Check new balance 
                let balance = (await token.balanceOf(hacker.address)).toString()
                let totalSupply = (await token.totalSupply()).toString()
                console.log(balance)
                assert.equal(balance, totalSupply)
            } )
        })
    })