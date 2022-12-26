import { developmentChains } from "../../helper-hardhat-config"
import { network, ethers, deployments } from "hardhat"
import { Fallback } from "../../typechain-types"
import { assert, expect } from "chai"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Fallback Hacked", function() {
        let fallback: Fallback
        let fallbackContract: Fallback
        let player: SignerWithAddress
    })