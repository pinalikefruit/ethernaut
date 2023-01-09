import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployForce: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    let args:string[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Force contract ...")
        await deploy("Force",{
            contract:"Force",
            from: deployer,
            args: args,
            log: true,
        })
       
        log("Force contract deployed!")
        log('---------------------------------------------------')
    }
}

export default deployForce
deployForce.tags = ["all", "force"]