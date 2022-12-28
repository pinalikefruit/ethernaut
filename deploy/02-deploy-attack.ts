import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS, networkConfig
}  from "../helper-hardhat-config"
import verify from "../utils/verify"


const deployAttack: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    let chainId = network.config.chainId
    let addressCoinFlip:string
    
    if(chainId == 31337) {
        const CoinFlip = await deployments.get("CoinFlip")
        addressCoinFlip = CoinFlip.address
    } else {
        addressCoinFlip = networkConfig[network.config.chainId!]["contractAddress"]!
    }
     
    const args: any[] = [addressCoinFlip]
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log('-------------------------------------------------------')
    const attack = await deploy("Attack",{
        from: deployer,
        args:args,
        log:true,
        waitConfirmations: waitBlockConfirmations
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(attack.address,args)
    }
}

export default deployAttack
deployAttack.tags = ["all","attack"]