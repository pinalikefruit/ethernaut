import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments, waffle } from "hardhat"
import { Vault } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"



!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault", function(){
        let provider: any
        let vault:Vault
        let vaultContract:Vault
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress

       
        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("vault")
            vaultContract = await ethers.getContract("Vault")
            vault = vaultContract.connect(hacker)
            
            provider = waffle.provider;
        })
        describe("Inside the vault", function () {
            it("Check vault is locked!", async() => {
                const value:boolean = await vault.locked()
                assert.equal(value,true)
            })
            it("Get the password",async() => {
                const password = await provider.getStorageAt(vaultContract.address, 1)
                const tx = await vault.unlock(password)
                tx.wait(1)
                const value:boolean = await vault.locked()
                assert.equal(value,false)
            })

        })
    })