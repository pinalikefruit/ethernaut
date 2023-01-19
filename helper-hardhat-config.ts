export interface networkConfigItem {
    name?: string
    contractAddress?: string
}

export interface networkConfigInfo {
    [key:number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    1: {
        name: "mainnet",
    },
    5: {
        name: "goerli",
        contractAddress: "0x1E15774bAc3CbCd7f9EDfDA65a6A8cd52cFc73EE"
    },
    31337: {
        name: "localhost",
    },
}

export const developmentChains = ["localhost", "hardhat"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6