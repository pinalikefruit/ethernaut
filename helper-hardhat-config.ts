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
        contractAddress: "0xb7381f8EFdc366c1d7F2F1F2Eeb2B56975DDa69B"
    },
    31337: {
        name: "localhost",
    },
}

export const developmentChains = ["localhost", "hardhat"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6