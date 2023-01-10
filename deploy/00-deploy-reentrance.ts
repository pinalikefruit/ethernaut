import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployReentrance: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
   
    let args:any[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Reentrance contract ...")
        await deploy("Reentrance",{
            contract:"Reentrance",
            from: deployer,
            args: args,
            log: true
        })
       
        log("Reentrance contract deployed!")
        log('---------------------------------------------------')
    }
}

export default deployReentrance
deployReentrance.tags = ["all", "reentrance"]