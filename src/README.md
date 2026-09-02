# Zomavi — Non-Custodial Wallet Key Generation delivery

I don't have your current on-disk file contents (I'm working from saved
project state, not your live repo), so these are **new/mergeable files**,
not diffs against your actual code. Review before dropping in.

## Frontend (account-id-wallet)

New files:
- `lib/wallet/keyGeneration.ts` — generates all keys/mnemonics for the 7 chains
- `lib/wallet/registerWallets.ts` — orchestrates generate → store → register → hydrate
- `lib/wallet/secureStorage.additions.ts` — **merge into** your existing `lib/storage/secureStorage.ts`

Install deps (frontend):
```
npx expo install expo-secure-store
npm install ethers bip39 ed25519-hd-key tweetnacl bs58 @ton/crypto @ton/ton tronweb
```
tronweb pulls in some Node-only deps — you already solved this class of issue
for the chain SDKs at boot (lazy-loading via `getChainModule()`), so import
`keyGeneration.ts` lazily too rather than at app root, same pattern.

Assumes existing `lib/api/client.ts` exports `apiClient` and
`stores/walletStore.ts` exposes a `setAddresses()` action — adjust the
import/call in `registerWallets.ts` if the real names differ.

## Backend (avora-backend)

New files:
- `src/services/wallet/registerWallets.service.ts`
- `src/controllers/wallet/registerWallets.controller.ts`
- `src/routes/wallet.routes.additions.ts` — **merge into** `src/routes/wallet.routes.ts`

**Prisma schema change required** — add a unique constraint on the Wallet
model if it isn't already there:
```prisma
model Wallet {
  // ...existing fields
  @@unique([userId, chain])
}
```
Then: `npx prisma generate && npx prisma migrate dev --name wallet_user_chain_unique`

Install deps (backend):
```
npm install zod
```
(zod is already in your deps per prior state — skip if already installed)

## Not done here (flagging, not guessing)
- Wiring auth middleware into the register route — left commented, use your
  existing `middleware/auth.middleware.ts`
- Real chain balance fetching — still stubbed per prior state, unaffected by this delivery
- Mnemonic backup/recovery UI flow (show-once seed phrase screen) — not built yet
