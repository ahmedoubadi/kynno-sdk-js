import { Bech32Prefix } from './types';
/** Network type config */
export declare enum Network {
    Mainnet = 0,
    Testnet = 1
}
export declare enum ChainNetwork {
    Kynno = 0,
    Cosmos = 1
}
export declare enum RpcMethods {
    BroadcastTxSync = "broadcast_tx_sync",
    BroadcastTxAsync = "broadcast_tx_async",
    BroadcastTxCommit = "broadcast_tx_commit",
    AbciQuery = "abci_query",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    UnsubscribeAll = "unsubscribe_all",
    Health = "health",
    Block = "block",
    BlockResults = "block_results",
    Tx = "tx",
    TxSearch = "tx_search",
    Validators = "validators",
    NetInfo = "net_info"
}
export declare const doNotModify = "[do-not-modify]";
export declare const keystoreSaltPerfix = "$2a$12$";
export declare const xchacha20NonceLength = 24;
export declare const keystoreStructure: {
    prefix: string;
    suffix: string;
};
export declare const STD_DENOM = "akynno";
export declare const Bech32Prefix_Kynno: Bech32Prefix;
export declare const Bech32Prefix_Cosmos: Bech32Prefix;
