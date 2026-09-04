import { verifyOnChain, Chain } from '@tribridge/triverify';
import { verifyOnChainFallback, FallbackChain } from './evmFallback.js';

/**
 * Lowercase ChainId used across the app (matches constants/chains.ts).
 * Routes to TriVerify for the 6 chains it supports, and the local
 * fallback for bsc/base until TriVerify adds them natively.
 */
export type ChainId = 'eth' | 'bsc' | 'base' | 'polygon' | 'sol' | 'tron' | 'ton';

const TRIVERIFY_CHAIN_MAP: Partial<Record<ChainId, Chain>> = {
  eth: Chain.Ethereum,
  polygon: Chain.Polygon,
  sol: Chain.Solana,
  tron: Chain.Tron,
  ton: Chain.Ton,
};

const FALLBACK_CHAINS: ChainId[] = ['bsc', 'base'];

export async function verifyAddressOnChain(address: string, chainId: ChainId) {
  if (FALLBACK_CHAINS.includes(chainId)) {
    return verifyOnChainFallback(address, chainId as FallbackChain);
  }

  const triverifyChain = TRIVERIFY_CHAIN_MAP[chainId];
  if (!triverifyChain) {
    throw new Error(`Unsupported chain: ${chainId}`);
  }

  return verifyOnChain(address, triverifyChain);
}
