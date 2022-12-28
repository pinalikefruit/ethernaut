import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}  from "../helper-hardhat-config"
import verify from "../utils/verify"


const deployCoinFlip: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
){
    const { deployments, getNamedAccounts, network} = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args: any[] = []
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log('-------------------------------------------------------')
    const coinflip = await deploy("CoinFlip",{
        from: deployer,
        args:[],
        log:true,
        waitConfirmations: waitBlockConfirmations
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("verifying...")
        await verify(coinflip.address,[])
    }
}

export default deployCoinFlip
deployCoinFlip.tags = ["all","coinflip"]