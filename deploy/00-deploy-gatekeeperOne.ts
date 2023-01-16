import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployGateKeeperOne: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    let args:any[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying GatekeeperOne contract ...")
        await deploy("GatekeeperOne",{
            contract:"GatekeeperOne",
            from: deployer,
            args: args,
            log: true
        })
       
        log("GatekeeperOne contract deployed!")
        log('---------------------------------------------------')
    }
}


export default deployGateKeeperOne
deployGateKeeperOne.tags = ["all", "gatekeeperOne"]