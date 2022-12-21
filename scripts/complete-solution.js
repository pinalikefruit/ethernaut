const { ethers } = require('ethers')
require('dotenv').config()

// Connect to Goerli testnet
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
const PRIVATE_KEY = process.env.PRIVATE_KEY
const wallet = new ethers.Wallet(PRIVATE_KEY,provider)

// Contract Information
const INSTANCE_ADDRESS = '<INTANCE_ADDRESS>'
const ABI = [
    "function info() pure returns (string)",
    "function info1() pure returns (string)",
    "function info2(string) pure returns(string)",
    "function infoNum() view returns (uint)",
    "function info42() pure returns (string)",
    "function theMethodName() view returns(string)" ,
    "function method7123949() pure returns (string)",
    "function password() view returns(string)",
    "function authenticate(string)",
    "function getCleared() view returns (bool)",
]

// Instance contract
const contract = new ethers.Contract(INSTANCE_ADDRESS, ABI, provider)
const contractConnect = contract.connect(wallet)

const main = async() => {

    let lock = await contractConnect.getCleared()
    console.log(`The contract is unlocked ? ${lock}`)
    console.log('------------------------------')
    console.log('Get information with info() function:')
    let info =  await contract.info()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log('info1() function:')
    info = await contract.info1()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log(`Send 'hello' in info2()`)
    info = await contract.info2("hello")
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log(`What is the method number? `)
    info = (await contract.infoNum()).toString()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log(`function info42() `)
    info = await contract.info42()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log(`Active the function theMethodName() `)
    info = await contract.theMethodName()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log(`function method7123949() `)
    info = await contract.method7123949()
    console.log(`R: ${info}`)
    console.log('------------------------------')
    console.log('Shot to password variable:')
    const password = await contract.password()
    console.log(`The password is ${password}`)
    console.log('------------------------------')
    console.log('Send password for authentication')
    const tx = await contractConnect.authenticate(password)
    console.log(`...unlocking ......`)
    tx.wait(1)
    console.log('------------------------------')
    lock = await contract.getCleared()
    console.log(`The contract now is unlocked ? ${lock}`)
    console.log('------------------------------')    
}

main()