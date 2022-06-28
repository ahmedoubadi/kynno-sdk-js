# kynno-sdk-js

![Banner](https://uploads-ssl.webflow.com/62432f5b70f7252816baab31/62457f5efa0f221031e55228_Banner-1.jpg)
The kynno JavaScript SDK allows browsers and Node.js clients to interact with kynno. Core functionality and examples
are in the `test` folder.

- client - client that implements kynno transactions types, such as for transfers and staking,etc.
- crypto - core cryptographic functions.
- accounts - management of accounts and wallets, including seed and encrypted mnemonic generation, recover account by
  mnemonic or keystore, etc.

## Installation

Install the package via npm.

```bash
npm install https://github.com/ahmedoubadi/kynno-sdk-js.git
```

## Config

```typescript
interface ClientConfig {
    node: string,//address of a rpc node on kynno
    address: string,//address of a grpc node on kynno default http://localhost:1317
    nameContractAddress:string, // address to kynno nameservice contract
    provider:Provider,//the web3provider to sign transaction
    network: number, //[Number] 0: Mainnet, 1: Testnet
    chainId: string,
    gas?: string,
    fee?: {
        denom: string;
        amount: string;
    },//default fee for transactions
    bech32Prefix?: {
        AccAddr: string,
        AccPub: string,
        ValAddr: string,
        ValPub: string,
        ConsAddr: string,
        ConsPub: string,
    },
    rpcConfig?: AxiosRequestConfig// axios request config
}
```

## Client Setup

```typescript
import {newClient as kynnoSdkClient} from 'kynno-sdk-js';

const client = kynnoSdkClient(ClientConfig)
    .withRpcConfig({timeout: 15000});

```
## Client Usage
The following selected examples demonstrate basic client usage.

- query account
```typescript
const account: { accountAddress: string,sequence: number,accountNumber: number,pubkey:string } = client.account.queryAccount("Account address, could be kynno format or ethereum format")
```
### bank `src/modules/bank.ts`
- queryBalance
- queryAllBalances
- queryTotalSupply
- querySupplyOf
- queryParams
### auth `src/modules/auth.ts`
- queryParams
### distribution `src/modules/distribution.ts`
- queryParams
- queryValidatorOutstandingRewards
- queryValidatorCommission
- queryValidatorSlashes
- queryDelegationRewards
- queryDelegationTotalRewards
- queryDelegatorValidators
- queryDelegatorWithdrawAddress
- queryCommunityPool
### gov `src/modules/gov.ts`
- queryProposal
- queryProposals
- queryVote
- queryVotes
- queryDeposit
- queryDeposits
- queryTally
### nft `src/modules/nft.ts`
- querySupply
- queryOwner
- queryCollection
- queryDenom
- queryDenoms
- queryNFT
### nameservice `src/modules/nameservice.ts`
- createName
- resolve
- ownerOf
- transfer
- burn
- setValue
### slashing `src/modules/slashing.ts`
- queryParams
- querySigningInfo
### staking `src/modules/staking.ts`
- queryDelegation
- queryDelegations
- queryUnbondingDelegation
- queryDelegatorUnbondingDelegations
- queryRedelegation
- queryDelegatorValidators
- queryDelegatorValidator
- queryHistoricalInfo
- queryValidatorDelegations
- queryValidatorUnbondingDelegations
- queryValidator
- queryValidators
- queryPool
- queryParams
- createValidator
### tendermint `src/modules/tendermint.ts`
- queryBlock
- queryBlockResult
- queryTx
- queryValidators
- searchTxs
- queryNetInfo
### protobuf `src/modules/protobuf.ts`
- deserializeTx
- unpackMsg
- deserializeSignDoc
- deserializeTxRaw
- deserializeSigningInfo
- deserializePubkey

