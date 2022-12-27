export interface networkConfigItem {
    name?: string
    contractAddress?:string

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
        contractAddress: "<INSERT_CONTRACT_ADDRESS>"
        
    },
    1: {
        name: "mainnet",
    },
}

export const developmentChains = ["hardhat", "localhost"]

