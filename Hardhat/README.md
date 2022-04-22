# Table of contents
- [Table of contents](#table-of-contents)
- [OwO what's this?](#owo-whats-this)
  - [Notes](#notes)
  - [How to use .env](#how-to-use-env)
  - [Hardhat commands](#hardhat-commands)
  - [wave contract info](#wave-contract-info)
  - [instructions for re-deployment](#instructions-for-re-deployment)


**54 warnings**
-run  npm audit fix
# OwO what's this?
- First project in `build_space`


## Notes
- Ignore the error highlight in the contract `WavePortal`
- Create a variable like `SECRET_KEY="my secret key omg :O"`
- In the document where we want to use the variable import dotenv `require('dotenv').config();`
- use the variable available in the .env file `process.env.SECRET_KEY`

## How to use .env
- install the package `npm i dotenv`
- create some variables
- in the file where you want to use those variables `require('dotenv').config();`

## Hardhat commands
- npx hardhat accounts
  - print test accounts :D
- npx hardhat compile
  - Compile solidity files into Bytecode (for the EVM)
- npx hardhat clean
- npx hardhat test
- npx hardhat node
- node scripts/sample-script.js
- npx hardhat help

## wave contract info
Deploying contracts with account:  0x9f83523C25aC79Be71ea16F303c38FA7b792A5e8
Account balance:  1196487975421511172
WavePortal address:  0xb08c855C07FC1f88032b609d2B4c9C8eB9e46114

## instructions for re-deployment
- check everything is working whit `npx hardhat run scripts/run.js`
- re-deploy the contract (since changes canno be made) `npx hardhat run scripts/deploy.js --network rinkeby`
- update the *abi.json* on the front-end 