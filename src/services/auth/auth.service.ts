// TODO: wire up to Prisma User model once prisma/schema.prisma is defined

export const authService = {
  async signup(input: { email: string; phone?: string; password: string }) {
    throw new Error("Not implemented");
  },

  async login(input: { email: string; password: string }) {
    throw new Error("Not implemented");
  },

  async verifyEmail(input: { userId: string; code: string }) {
    throw new Error("Not implemented");
  },

  async verifyPhone(input: { userId: string; code: string }) {
    throw new Error("Not implemented");
  },

  async requestPasswordReset(input: { email: string }) {
    throw new Error("Not implemented");
  },

  async resetPassword(input: { token: string; newPassword: string }) {
    throw new Error("Not implemented");
  },
};
