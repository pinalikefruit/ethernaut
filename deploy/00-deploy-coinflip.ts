import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import {
    developmentChains
}  from "../helper-hardhat-config"



const deployCoinFlip: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    log('-------------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Coinflip...")
        await deploy("CoinFlip",{
            contract: "CoinFlip",
            from: deployer,
            args:[],
            log:true,
        })
        log("Coinflip deployed!")
    }
}

export default deployCoinFlip
deployCoinFlip.tags = ["all","coinflip"]