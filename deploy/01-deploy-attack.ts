import { DeployFunction} from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains ,VERIFICATION_BLOCK_CONFIRMATIONS, networkConfig } from "../helper-hardhat-config"
import verify from "../utils/verify"
import abi from "../artifacts/contracts/King.sol/King.json"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = String(process.env.PRIVATE_KEY)

const deployAttack: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network, ethers} = hre
    const { deploy, log } = deployments
    const { hacker } = await getNamedAccounts()

    let contractAddress:string 
    let value:string
    if(developmentChains.includes(network.name)){
        const King = await deployments.get("King")
        contractAddress = King.address
        value = "1"
        
    } else {
        contractAddress = networkConfig[network.config.chainId!]["contractAddress"]!
        const provider =  new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
        const wallet  = new ethers.Wallet(PRIVATE_KEY,provider)
        const king = new ethers.Contract(contractAddress,abi.abi,wallet)
        value = (await king.prize()).toString()
    }
    log("--------------------------------------")
    log("Deploying Attack and waiting for confirmations...")
    const args: string[] = [contractAddress]
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log("---------------------------------------")
    const attack = await deploy("Attack", {
        from : hacker,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
        gasLimit:300000,
        value: value
    })
    
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(attack.address,args)
    }
}

export default deployAttack
deployAttack.tags = ["all","attack"]