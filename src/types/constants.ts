import { Bech32Prefix } from './types';

/** Network type config */
export enum Network {
  Mainnet = 0,
  Testnet = 1,
}

export enum ChainNetwork {
  Kynno = 0,
  Cosmos = 1
}

export enum RpcMethods {
  BroadcastTxSync = 'broadcast_tx_sync',
  BroadcastTxAsync = 'broadcast_tx_async',
  BroadcastTxCommit = 'broadcast_tx_commit',
  AbciQuery = 'abci_query',
  Subscribe = 'subscribe',
  Unsubscribe = 'unsubscribe',
  UnsubscribeAll = 'unsubscribe_all',
  Health = 'health',
  Block = 'block',
  BlockResults = 'block_results',
  Tx = 'tx',
  TxSearch = 'tx_search',
  Validators = 'validators',
  NetInfo = 'net_info',
}

export const doNotModify = '[do-not-modify]';

export const keystoreSaltPerfix = '$2a$12$';
export const xchacha20NonceLength = 24;
export const keystoreStructure = {
  prefix:'-----BEGIN TENDERMINT PRIVATE KEY-----',
  suffix:'-----END TENDERMINT PRIVATE KEY-----'
};

export const STD_DENOM = 'akynno';

export const Bech32Prefix_Kynno:Bech32Prefix = {
  AccAddr: 'kynno',
  AccPub: 'kynnopub',
  ValAddr: 'kynnovaloper',
  ValPub: 'kynnovaloperpub',
  ConsAddr: 'kynnovalcons',
  ConsPub: 'kynnovalconspub'
}

export const Bech32Prefix_Cosmos:Bech32Prefix = {
  AccAddr: 'cosmos',
  AccPub: 'cosmospub',
  ValAddr: 'cosmosvaloper',
  ValPub: 'cosmosvaloperpub',
  ConsAddr: 'cosmosvalcons',
  ConsPub: 'cosmosvalconspub',
}
