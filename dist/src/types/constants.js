"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bech32Prefix_Cosmos = exports.Bech32Prefix_Kynno = exports.STD_DENOM = exports.keystoreStructure = exports.xchacha20NonceLength = exports.keystoreSaltPerfix = exports.doNotModify = exports.RpcMethods = exports.ChainNetwork = exports.Network = void 0;

/** Network type config */
var Network;
exports.Network = Network;

(function (Network) {
  Network[Network["Mainnet"] = 0] = "Mainnet";
  Network[Network["Testnet"] = 1] = "Testnet";
})(Network || (exports.Network = Network = {}));

var ChainNetwork;
exports.ChainNetwork = ChainNetwork;

(function (ChainNetwork) {
  ChainNetwork[ChainNetwork["Kynno"] = 0] = "Kynno";
  ChainNetwork[ChainNetwork["Cosmos"] = 1] = "Cosmos";
})(ChainNetwork || (exports.ChainNetwork = ChainNetwork = {}));

var RpcMethods;
exports.RpcMethods = RpcMethods;

(function (RpcMethods) {
  RpcMethods["BroadcastTxSync"] = "broadcast_tx_sync";
  RpcMethods["BroadcastTxAsync"] = "broadcast_tx_async";
  RpcMethods["BroadcastTxCommit"] = "broadcast_tx_commit";
  RpcMethods["AbciQuery"] = "abci_query";
  RpcMethods["Subscribe"] = "subscribe";
  RpcMethods["Unsubscribe"] = "unsubscribe";
  RpcMethods["UnsubscribeAll"] = "unsubscribe_all";
  RpcMethods["Health"] = "health";
  RpcMethods["Block"] = "block";
  RpcMethods["BlockResults"] = "block_results";
  RpcMethods["Tx"] = "tx";
  RpcMethods["TxSearch"] = "tx_search";
  RpcMethods["Validators"] = "validators";
  RpcMethods["NetInfo"] = "net_info";
})(RpcMethods || (exports.RpcMethods = RpcMethods = {}));

var doNotModify = '[do-not-modify]';
exports.doNotModify = doNotModify;
var keystoreSaltPerfix = '$2a$12$';
exports.keystoreSaltPerfix = keystoreSaltPerfix;
var xchacha20NonceLength = 24;
exports.xchacha20NonceLength = xchacha20NonceLength;
var keystoreStructure = {
  prefix: '-----BEGIN TENDERMINT PRIVATE KEY-----',
  suffix: '-----END TENDERMINT PRIVATE KEY-----'
};
exports.keystoreStructure = keystoreStructure;
var STD_DENOM = 'akynno';
exports.STD_DENOM = STD_DENOM;
var Bech32Prefix_Kynno = {
  AccAddr: 'kynno',
  AccPub: 'kynnopub',
  ValAddr: 'kynnovaloper',
  ValPub: 'kynnovaloperpub',
  ConsAddr: 'kynnovalcons',
  ConsPub: 'kynnovalconspub'
};
exports.Bech32Prefix_Kynno = Bech32Prefix_Kynno;
var Bech32Prefix_Cosmos = {
  AccAddr: 'cosmos',
  AccPub: 'cosmospub',
  ValAddr: 'cosmosvaloper',
  ValPub: 'cosmosvaloperpub',
  ConsAddr: 'cosmosvalcons',
  ConsPub: 'cosmosvalconspub'
};
exports.Bech32Prefix_Cosmos = Bech32Prefix_Cosmos;