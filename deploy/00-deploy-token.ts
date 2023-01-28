import { DeployFunction} from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains ,VERIFICATION_BLOCK_CONFIRMATIONS, networkConfig } from "../helper-hardhat-config"
import verify from "../utils/verify"

const deployToken: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { hacker } = await getNamedAccounts()
    
    let args:any[] = []
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    
    log('---------------------------------------------------')
    
    
        
    const pina =   await deploy("Pina",{
            from: hacker,
            args: args,
            log: true,
            waitConfirmations: waitBlockConfirmations,
        })       
        log("Pina Token deployed!")
        log('---------------------------------------------------')
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying...")
        await verify(pina.address,args)
    }
}


export default deployToken
deployToken.tags = ["all", "pina"]