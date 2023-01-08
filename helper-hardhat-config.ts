export interface networkConfigItem {
    name?: string
    contractAddress?: string
}

export interface networkConfigInfo {
    [key:number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: "localhost",
    },
    5: {
        name: "goerli",
        contractAddress: "0xCA93eDb64B2eFa7505514De4803E2F1960EA1928"
    },
    1: {
        name: "mainnet",
    },

}

export const developmentChains = ["localhost", "hardhat"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6