import type { ChainAdapter } from "../chain.types.js";

// TODO: implement using @solana/web3.js
export const solanaAdapter: ChainAdapter = {
  chain: "SOL",

  isValidAddress(address: string): boolean {
    // Base58, 32-44 chars
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
  },

  async getBalance(address, asset) {
    throw new Error("Not implemented");
  },

  async buildTransaction(input) {
    throw new Error("Not implemented");
  },

  async sendTransaction(signedTx) {
    throw new Error("Not implemented");
  },

  async getTransactionStatus(txHash) {
    throw new Error("Not implemented");
  },

  async estimateFee(input) {
    throw new Error("Not implemented");
  },
};
