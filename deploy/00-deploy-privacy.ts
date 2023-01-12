import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployPrivacy: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    const data1 = ethers.utils.id("password1")
    const data2 = ethers.utils.id("password2")
    const data3 = ethers.utils.id("password3")

    let args:any[] = [[data1,data2,data3]]
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying Elevator contract ...")
        await deploy("Privacy",{
            contract:"Privacy",
            from: deployer,
            args: args,
            log: true
        })
       
        log("Privacy contract deployed!")
        log('---------------------------------------------------')
    }
}


export default deployPrivacy
deployPrivacy.tags = ["all", "privacy"]