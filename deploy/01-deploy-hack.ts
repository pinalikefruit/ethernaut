import { DeployFunction} from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains ,VERIFICATION_BLOCK_CONFIRMATIONS, networkConfig } from "../helper-hardhat-config"
import verify from "../utils/verify"

const deployHack: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { hacker } = await getNamedAccounts()

    let contractAddress:string 

    if(developmentChains.includes(network.name)){
        const GatekeeperOne = await deployments.get("GatekeeperOne")
        contractAddress = GatekeeperOne.address        
    } else {
        contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
    }
    log("--------------------------------------")
    log("Deploying Hack and waiting for confirmations...")
    const args: string[] = [contractAddress]
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log("---------------------------------------")
    const hack = await deploy("Hack", {
        from : hacker,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
        // gasLimit:300000,
    })
    
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(hack.address,args)
    }
}

export default deployHack
deployHack.tags = ["all","hack"]