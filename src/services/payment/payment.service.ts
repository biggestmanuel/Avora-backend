// TODO: wire up to Prisma PaymentRequest model

export const paymentService = {
  async createRequest(input: {
    userId: string;
    asset: string;
    amount?: string;
  }) {
    throw new Error("Not implemented");
  },

  async getRequest(requestId: string) {
    throw new Error("Not implemented");
  },
};
