import type { ChainAdapter } from "../chain.types.js";

// TODO: implement using @ton/ton + @ton/crypto
export const tonAdapter: ChainAdapter = {
  chain: "TON",

  isValidAddress(address: string): boolean {
    // TON addresses are base64/base64url, 48 chars
    return /^[A-Za-z0-9_-]{48}$/.test(address);
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
