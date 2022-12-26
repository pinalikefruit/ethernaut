import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}  from "../helper-hardhat-config"
import verify from "../utils/verify"


const deployFallback: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log('-------------------------------------------------------')
    const fallback = await deploy("Fallback",{
        from: deployer,
        args:[],
        log:true,
        waitConfirmations: waitBlockConfirmations
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(fallback.address,[])
    }
}

export default deployFallback
deployFallback.tags = ["all","fallback"]