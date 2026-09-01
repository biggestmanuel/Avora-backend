// TODO: wire up to Prisma Wallet model + lib/chains equivalents

export const walletService = {
  async getBalances(userId: string) {
    throw new Error("Not implemented");
  },

  async getAddresses(userId: string) {
    throw new Error("Not implemented");
  },

  async resolveAccountId(accountId: string) {
    // Returns wallet addresses/profile info tied to an Account ID
    throw new Error("Not implemented");
  },
};
