import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployVault: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const data = ethers.utils.id("password")
    let args:string[] = [data]
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Vault contract ...")
        await deploy("Vault",{
            contract:"Vault",
            from: deployer,
            args: args,
            log: true,
        })
       
        log("Vault contract deployed!")
        log('---------------------------------------------------')
    }
}

export default deployVault
deployVault.tags = ["all", "vault"]