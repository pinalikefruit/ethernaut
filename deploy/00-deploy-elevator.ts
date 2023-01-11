import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployElevator: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
   
    let args:any[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Elevator contract ...")
        await deploy("Elevator",{
            contract:"Elevator",
            from: deployer,
            args: args,
            log: true
        })
       
        log("Elevator contract deployed!")
        log('---------------------------------------------------')
    }
}

export default deployElevator
deployElevator.tags = ["all", "elevator"]