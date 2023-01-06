import { DeployFunction} from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains ,VERIFICATION_BLOCK_CONFIRMATIONS, networkConfig } from "../helper-hardhat-config"
import verify from "../utils/verify"

const deployAttack: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { hacker } = await getNamedAccounts()

    let addressToken:string 

    if(developmentChains.includes(network.name)){
        const Token = await deployments.get("Token")
        addressToken = Token.address
    } else {
        addressToken = networkConfig[network.config.chainId!]["contractAddress"]!
    }

    log("--------------------------------------")
    log("Deploying Attack and waiting for confirmations...")
    const args: string[] = [addressToken]
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log("---------------------------------------")
    const attack = await deploy("Attack", {
        from : hacker,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations
    })
    
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(attack.address,args)
    }
}

export default deployAttack
deployAttack.tags = ["all","attack"]