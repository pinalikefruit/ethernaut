const { ethers } = require('ethers')
require('dotenv').config()

// Connect to Goerli testnet
const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC_URL)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

// Contract Information
const INSTANCE_ADDRESS = '<INTANCE_ADDRESS>'
const ABI = [
    "function password() view returns(string)",
    "function authenticate(string)"
]

// Instance contract
const contract = new ethers.Contract(INSTANCE_ADDRESS, ABI, provider)
const contractConnect = contract.connect(wallet)

const main = async() => {
    // The password variable is available in the contract 
    console.log('Shot to password variable:')
    const password = await contract.password()
    console.log(`The password is ${password}`)
    console.log('------------------------------')
    console.log('Send password for authentication')
    await contractConnect.authenticate(password)
    console.log(`...unlocking ......`)
    tx.wait(1)
    console.log('Unlock')
}

main()