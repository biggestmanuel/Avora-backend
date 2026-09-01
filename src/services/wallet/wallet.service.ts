import { prisma } from "../../config/database.js";
import { getChainAdapter, type ChainName } from "../../chains/index.js";
import { logger } from "../../config/logger.js";

export const walletService = {
  async getBalances(userId: string) {
    const wallets = await prisma.wallet.findMany({ where: { userId } });

    // Chain adapters' getBalance() isn't implemented yet (needs RPC wiring per chain),
    // so we return each wallet with balance: null rather than fail the whole request.
    const results = await Promise.all(
      wallets.map(async (wallet) => {
        try {
          const adapter = await getChainAdapter(wallet.chain as ChainName);
          const balance = await adapter.getBalance(wallet.address);
          return { chain: wallet.chain, address: wallet.address, balance };
        } catch (err) {
          logger.warn({ chain: wallet.chain, err }, "Balance fetch not yet available for chain");
          return { chain: wallet.chain, address: wallet.address, balance: null };
        }
      })
    );

    return results;
  },

  async getAddresses(userId: string) {
    return prisma.wallet.findMany({
      where: { userId },
      select: { chain: true, address: true },
    });
  },

  async resolveAccountId(accountId: string) {
    const record = await prisma.accountId.findUnique({
      where: { accountId },
      include: { user: { include: { wallets: true } } },
    });
    if (!record) throw Object.assign(new Error("Account ID not found"), { statusCode: 404 });

    return {
      accountId: record.accountId,
      name: record.user.name,
      photoUrl: record.user.photoUrl,
      wallets: record.user.wallets.map((w) => ({ chain: w.chain, address: w.address })),
    };
  },
};
