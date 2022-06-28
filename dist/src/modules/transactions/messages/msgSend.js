"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessageSend = createMessageSend;

var _proto = require("../proto");

var _eip = require("../eip712");

function createMessageSend(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_SEND_TYPES);
  var msg = (0, _eip.createMsgSend)(params.amount, params.denom, sender.accountAddress, params.destinationAddress);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var msgSend = (0, _proto.createMsgSend)(sender.accountAddress, params.destinationAddress, params.amount, params.denom);
  var tx = (0, _proto.createTransaction)(msgSend, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}