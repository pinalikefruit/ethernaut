export interface networkConfigItem {
    name?: string
    contractAddress?: string

  }
  
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}


export const networkConfig: networkConfigInfo = {
    31337: {
        name: "localhost",
    },
    
    5: {
        name: "goerli",
        contractAddress: "0x77e443e2a13DE32EAE246f2253dCDB67b1728A3c"
        
    },
    1: {
        name: "mainnet",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
