// Shared event names emitted over the websocket connection
export const WS_EVENTS = {
  TRANSACTION_UPDATED: "transaction:updated",
  BALANCE_UPDATED: "balance:updated",
  RAMP_UPDATED: "ramp:updated",
} as const;
