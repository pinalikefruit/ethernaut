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
        contractAddress: "0x2a232e97219Daa59b3c296C18E7563d95d2EA68D"
        
    },
    1: {
        name: "mainnet",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
