// TODO: wire up to Prisma User/AccountId models

export const accountService = {
  async getProfile(userId: string) {
    throw new Error("Not implemented");
  },

  async createAccountId(userId: string) {
    // Generates a unique 10-digit Account ID for the user
    throw new Error("Not implemented");
  },

  async getByAccountId(accountId: string) {
    throw new Error("Not implemented");
  },

  async updateSettings(userId: string, settings: Record<string, unknown>) {
    throw new Error("Not implemented");
  },
};
