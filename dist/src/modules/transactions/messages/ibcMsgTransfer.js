"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTxIBCMsgTransfer = createTxIBCMsgTransfer;

var _proto = require("../proto");

var _eip = require("../eip712");

function createTxIBCMsgTransfer(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.IBC_MSG_TRANSFER_TYPES);
  var msg = (0, _eip.createIBCMsgTransfer)(params.receiver, sender.accountAddress, params.sourceChannel, params.sourcePort, params.revisionHeight, params.revisionNumber, params.timeoutTimestamp, params.amount, params.denom);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var msgCosmos = (0, _proto.createIBCMsgTransfer)(params.sourcePort, params.sourceChannel, params.amount, params.denom, sender.accountAddress, params.receiver, params.revisionNumber, params.revisionHeight, params.timeoutTimestamp);
  var tx = (0, _proto.createTransaction)(msgCosmos, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}