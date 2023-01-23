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
        contractAddress: "<CONTRACT_ADDRESS>"
    },
    31337: {
        name: "localhost",
    },
}

export const developmentChains = ["localhost", "hardhat"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6