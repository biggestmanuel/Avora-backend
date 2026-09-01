import type { ChainAdapter } from "../chain.types.js";

// TODO: implement using tronweb
export const tronAdapter: ChainAdapter = {
  chain: "TRON",

  isValidAddress(address: string): boolean {
    // Tron addresses start with T, base58, 34 chars
    return /^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(address);
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
