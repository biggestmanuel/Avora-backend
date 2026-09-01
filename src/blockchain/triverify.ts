// TODO: wire up to Tribridge/TriVerify SDK (tribridge.tech) once friend's API is ready
// Address-existence verification layer, used on top of each chain adapter's
// format-only isValidAddress() check during the Send flow's Safety Confirmation step.

import type { ChainName } from "../chains/index.js";

export interface AddressVerificationResult {
  address: string;
  chain: ChainName;
  formatValid: boolean;
  existsOnChain: boolean | null; // null until real check runs
}

export async function verifyAddressExists(
  address: string,
  chain: ChainName
): Promise<AddressVerificationResult> {
  throw new Error("Not implemented — pending TriVerify SDK integration");
}
