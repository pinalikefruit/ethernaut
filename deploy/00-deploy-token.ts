import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployToken: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = ["21000000"]
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Token contract ...")
        await deploy("Token",{
            contract:"Token",
            from: deployer,
            args:args,
            log: true,
        })
        log("Token contract deployed!")
    }
}

export default deployToken
deployToken.tags = ["all", "token"]