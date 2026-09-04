import { verifyAddressOnChain } from './src/blockchain/verify.js';

verifyAddressOnChain('0x000000000000000000000000000000000000dEaD', 'base')
  .then(console.log)
  .catch(console.error);
