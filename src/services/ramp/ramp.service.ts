// TODO: wire up to Bachs (NGN on/off-ramp) via lib/ramp equivalent

export const rampService = {
  async deposit(input: { userId: string; amountNgn: string }) {
    throw new Error("Not implemented");
  },

  async withdraw(input: { userId: string; amountNgn: string; bankAccount: string }) {
    throw new Error("Not implemented");
  },

  async getStatus(reference: string) {
    throw new Error("Not implemented");
  },
};
