import { ethers } from "hardhat"
import abi from "../artifacts/contracts/"

const iface = new ethers.utils.Interface(abi.abi)
console.log(iface.format(ethers.utils.FormatTypes.full))