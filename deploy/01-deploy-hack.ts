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
        const mock = await deployments.get("PuzzleWallet")
        contractAddress = mock.address        
    } else {
        contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
    }
    log("--------------------------------------")
    log("Deploying Hack and waiting for confirmations...")
    const args: any[] = [contractAddress]
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log("---------------------------------------")
    const hack = await deploy("Hack", {
        from : hacker,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })
    
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying...")
        await verify(hack.address,args)
    }
}

export default deployHack
deployHack.tags = ["all","hack"]