import crypto from "node:crypto";
import { prisma } from "../../config/database.js";
import { rampQueue } from "../../queues/ramp.queue.js";

export const rampService = {
  async deposit(userId: string, input: { amountNgn: string }) {
    const reference = `DEP-${crypto.randomUUID()}`;

    const rampTx = await prisma.rampTransaction.create({
      data: {
        userId,
        type: "DEPOSIT",
        amountNgn: input.amountNgn,
        provider: "bachs", // TODO: swap once Bachs integration is live; Paystack/Flutterwave as fallback
        reference,
        status: "PENDING",
      },
    });

    await rampQueue.add("process-ramp", { rampTransactionId: rampTx.id });
    return rampTx;
  },

  async withdraw(userId: string, input: { amountNgn: string }) {
    const reference = `WDR-${crypto.randomUUID()}`;

    const rampTx = await prisma.rampTransaction.create({
      data: {
        userId,
        type: "WITHDRAWAL",
        amountNgn: input.amountNgn,
        provider: "bachs",
        reference,
        status: "PENDING",
      },
    });

    await rampQueue.add("process-ramp", { rampTransactionId: rampTx.id });
    return rampTx;
  },

  async getStatus(userId: string, reference: string) {
    const rampTx = await prisma.rampTransaction.findFirst({ where: { reference, userId } });
    if (!rampTx) throw Object.assign(new Error("Ramp transaction not found"), { statusCode: 404 });
    return { reference: rampTx.reference, status: rampTx.status, type: rampTx.type };
  },
};
