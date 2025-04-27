# Hardhat Counter Contract

A simple Hardhat project for deploying a `Counter` smart contract to the **Lisk Sepolia** testnet.  
The `Counter` contract allows you to increment, decrement, and retrieve a stored count.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- Wallet with Lisk Sepolia testnet funds
- `.env` file containing your private key:
  ```bash
  PRIVATE_KEY=0xYourPrivateKey

## CLone and install dependencies

- git clone https://github.com/JosephOkumu/contract-hardhat.git
- cd contract-hardhat
- npm install

## Compile the contract
```bash
npx hardhat compile
```
## Deploy the contract

```bash
npx hardhat run scripts/deploy.js --network liskSepolia
```
