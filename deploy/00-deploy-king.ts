import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config"

const deployKing: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
   
    //let args:string[] = []
    
    log('---------------------------------------------------')
    
    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying King contract ...")
        await deploy("King",{
            contract:"King",
            from: deployer,
            args: [],
            log: true,
            value: "1"
        })
       
        log("King contract deployed!")
        log('---------------------------------------------------')
    }
}

export default deployKing
deployKing.tags = ["all", "king"]