import { JsonRpcProvider, isAddress } from 'ethers';

/**
 * Fallback on-chain verification for EVM chains not covered by TriVerify
 * (currently: BSC, Base). Mirrors TriVerify's VerifyResult shape so callers
 * can treat both sources interchangeably.
 *
 * Once TriVerify adds Bsc/Base to its Chain enum, this file can be deleted
 * and callers switched back to verifyOnChain() from '@tribridge/triverify'.
 */

export type FallbackChain = 'bsc' | 'base';

export type AddressType = 'wallet' | 'contract' | 'unknown';

export interface FallbackVerifyResult {
  address: string;
  chain: FallbackChain;
  exists: boolean;
  active: boolean;
  type: AddressType;
  balance?: string;
  transactionCount?: number;
  source: string;
  error?: string;
  supported: true;
}

const DEFAULT_RPC_URLS: Record<FallbackChain, string> = {
  bsc: 'https://bsc-dataseed.binance.org',
  base: 'https://mainnet.base.org',
};

export interface FallbackVerifyOptions {
  rpcUrl?: string;
  timeoutMs?: number;
}

export async function verifyOnChainFallback(
  address: string,
  chain: FallbackChain,
  options: FallbackVerifyOptions = {},
): Promise<FallbackVerifyResult> {
  const rpcUrl = options.rpcUrl ?? DEFAULT_RPC_URLS[chain];
  const timeoutMs = options.timeoutMs ?? 8000;

  const base: Omit<FallbackVerifyResult, 'exists' | 'active' | 'type' | 'error'> = {
    address,
    chain,
    source: rpcUrl,
    supported: true,
  };

  // Format check first — same rule TriVerify uses: syntactically valid
  // EVM address is treated as a usable account regardless of on-chain state.
  if (!isAddress(address)) {
    return {
      ...base,
      exists: false,
      active: false,
      type: 'unknown',
      error: 'invalid_address_format',
    };
  }

  const provider = new JsonRpcProvider(rpcUrl);

  try {
    const result = await withTimeout(
      Promise.all([
        provider.getCode(address),
        provider.getTransactionCount(address),
        provider.getBalance(address),
      ]),
      timeoutMs,
    );

    const [code, txCount, balance] = result;
    const isContract = code !== '0x';
    const active = isContract || txCount > 0 || balance > 0n;

    return {
      ...base,
      exists: true,
      active,
      type: isContract ? 'contract' : 'wallet',
      balance: balance.toString(),
      transactionCount: txCount,
    };
  } catch (err) {
    return {
      ...base,
      exists: false,
      active: false,
      type: 'unknown',
      error: err instanceof Error ? err.message : 'rpc_error',
    };
  }
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('rpc_timeout')), ms),
    ),
  ]);
}
