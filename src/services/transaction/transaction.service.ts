// TODO: wire up to Prisma Transaction model, chains/, and gas abstraction

export const transactionService = {
  async send(input: {
    userId: string;
    recipientAccountId: string;
    asset: string;
    amount: string;
    network?: string;
  }) {
    throw new Error("Not implemented");
  },

  async list(userId: string, pagination: { page: number; limit: number }) {
    throw new Error("Not implemented");
  },

  async getById(userId: string, transactionId: string) {
    throw new Error("Not implemented");
  },

  async getStatus(userId: string, transactionId: string) {
    throw new Error("Not implemented");
  },
};
