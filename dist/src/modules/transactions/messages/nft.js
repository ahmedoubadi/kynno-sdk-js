"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTxMsgIssueDenom = createTxMsgIssueDenom;
exports.createTxMsgMintNft = createTxMsgMintNft;
exports.createTxMsgTransferNft = createTxMsgTransferNft;
exports.createTxMsgBurnNft = createTxMsgBurnNft;
exports.createTxMsgEditeNft = createTxMsgEditeNft;

var _proto = require("../proto");

var _eip = require("../eip712");

var _nft = require("../eip712/messages/nft");

function createTxMsgIssueDenom(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_ISSUEDENOM_TYPES);
  var msg = (0, _nft.createMsgIssueDenom)(params.id, params.name, params.schema, sender, params.symbol, params.mint_restricted, params.update_restricted, params.description, params.uri, params.uri_hash, params.data);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgIssueDenom)(params.id, params.name, params.schema, sender, params.symbol, params.mint_restricted, params.update_restricted, params.description, params.uri, params.uri_hash, params.data);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgMintNft(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_MINT_NFT_TYPES);
  var msg = (0, _nft.createMsgMintNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.recipient, params.uri_hash);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgMintNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.recipient, params.uri_hash);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgTransferNft(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_TRANSFER_NFT_TYPES);
  var msg = (0, _nft.createMsgTransferNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.recipient, params.uri_hash);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgTransferNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.recipient, params.uri_hash);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgBurnNft(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_BURN_NFT_TYPES);
  var msg = (0, _nft.createMsgBurnNft)(params.id, params.denom_id, params.sender);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgBurnNft)(params.id, params.denom_id, params.sender);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgEditeNft(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_EDITE_NFT_TYPES);
  var msg = (0, _nft.createMsgEditeNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.uri_hash);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgEditeNft)(params.id, params.denom_id, params.name, params.uri, params.data, params.sender, params.uri_hash);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}