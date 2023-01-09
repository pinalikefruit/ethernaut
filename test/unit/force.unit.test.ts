import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"



!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Send force ether", function(){
        
        let attackContract: Attack
        let attack: Attack
        let provider: any
        let force:any
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress
       
        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            attackContract = await ethers.getContract("Attack")
            attack = attackContract.connect(hacker)
            force = await ethers.getContract("Force")
            provider = waffle.provider;
        })
        describe("Send ether", function () {
            it("Check inital balance of force contract",async() => {
                const balance = (await provider.getBalance(force.address)).toString();
                assert.equal(balance,"0")
            })
            it("Check inital balance of attack contract",async() => {
                const balance = (await provider.getBalance(attackContract.address)).toString();
                assert.equal(balance,"1")
            })
            it("Send force ethers", async() => {
                const tx = await attack.attack(force.address)
                tx.wait(1)
                const balance = (await provider.getBalance(force.address)).toString();
                assert.equal(balance,"1")
            })
        })
    })