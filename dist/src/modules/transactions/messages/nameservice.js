"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTxMsgIssueName = createTxMsgIssueName;

var _proto = require("../proto");

var _eip = require("../eip712");

var _nameservice = require("../eip712/messages/nameservice");

function createTxMsgIssueName(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_ISSUENAME_TYPES);
  var msg = (0, _nameservice.createMsgIssueName)(sender, params.name);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgIssueName)(sender, params.name);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}