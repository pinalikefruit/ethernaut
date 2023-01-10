import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { King, Attack } from "../../typechain-types"
import { assert } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"



!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault", function(){
        let kingContract:King
        let accounts: SignerWithAddress[]
        let hacker: SignerWithAddress
        let attackContract:Attack

       
        beforeEach(async() => {
            accounts = await ethers.getSigners()
            hacker = accounts[1]
            await deployments.fixture("all")
            kingContract = await ethers.getContract("King")
            attackContract = await ethers.getContract("Attack")
            
        })
        describe("Check King", function () {
            it("Be the King", async() => {
                let actualKing = await kingContract._king()
                assert.equal(actualKing,attackContract.address)
            })
            it("Try to get the king with another account and failed ", async() => {
                try {
                    await hacker.sendTransaction({
                        from: hacker.address,
                        to: kingContract.address,
                        value: "1000000000000000"
                    });
                  } catch (error) {
                    // console.log(`Transaction failed: ${error}`);
                    assert(error.message.includes("reverted"), "Expected error message to include 'revert'");
                  }

            })          

        })
    })
