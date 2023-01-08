import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployDelegation: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    let args:string[] = [deployer]
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Delegate contract ...")
        const delegateContract = await deploy("Delegate Contract",{
            contract:"Delegate",
            from: deployer,
            args: args,
            log: true,
        })
       
        log("Delegate contract deployed!")
        log('---------------------------------------------------')
        args = [delegateContract.address]
        log("Deploying Delegation contract ...")
        await deploy("Delegation",{
            contract:"Delegation",
            from: deployer,
            args: args,
            log: true,
        })
        log("Delegation contract deployed!")
    }
}

export default deployDelegation
deployDelegation.tags = ["all", "Delegation"]