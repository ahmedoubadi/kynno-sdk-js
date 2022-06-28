"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTxMsgDelegate = createTxMsgDelegate;
exports.createTxMsgBeginRedelegate = createTxMsgBeginRedelegate;
exports.createTxMsgUndelegate = createTxMsgUndelegate;
exports.createTxMsgWithdrawDelegatorReward = createTxMsgWithdrawDelegatorReward;
exports.createTxMsgMultipleWithdrawDelegatorReward = createTxMsgMultipleWithdrawDelegatorReward;

var _proto = require("../proto");

var _eip = require("../eip712");

function createTxMsgDelegate(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_DELEGATE_TYPES);
  var msg = (0, _eip.createMsgDelegate)(sender.accountAddress, params.validatorAddress, params.amount, params.denom);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgDelegate)(sender.accountAddress, params.validatorAddress, params.amount, params.denom);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgBeginRedelegate(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_BEGIN_REDELEGATE_TYPES);
  var msg = (0, _eip.createMsgBeginRedelegate)(sender.accountAddress, params.validatorSrcAddress, params.validatorDstAddress, params.amount, params.denom);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgBeginRedelegate)(sender.accountAddress, params.validatorSrcAddress, params.validatorDstAddress, params.amount, params.denom);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgUndelegate(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_UNDELEGATE_TYPES);
  var msg = (0, _eip.createMsgUndelegate)(sender.accountAddress, params.validatorAddress, params.amount, params.denom);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgUndelegate)(sender.accountAddress, params.validatorAddress, params.amount, params.denom);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}

function createTxMsgWithdrawDelegatorReward(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_WITHDRAW_DELEGATOR_REWARD_TYPES);
  var msg = (0, _eip.createMsgWithdrawDelegatorReward)(sender.accountAddress, params.validatorAddress);
  var messages = (0, _eip.generateMessage)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msg);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var protoMessage = (0, _proto.createMsgWithdrawDelegatorReward)(sender.accountAddress, params.validatorAddress);
  var tx = (0, _proto.createTransaction)(protoMessage, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
} // Multiple WithdrawRewards


function createTxMsgMultipleWithdrawDelegatorReward(chain, sender, fee, memo, params) {
  // EIP712
  var feeObject = (0, _eip.generateFee)(fee.amount, fee.denom, fee.gas, sender.accountAddress);
  var types = (0, _eip.generateTypes)(_eip.MSG_WITHDRAW_DELEGATOR_REWARD_TYPES); // EIP712

  var msgs = []; // Cosmos

  var protoMsgs = [];
  params.validatorAddresses.forEach(function (validator) {
    msgs.push((0, _eip.createMsgWithdrawDelegatorReward)(sender.accountAddress, validator));
    protoMsgs.push((0, _proto.createMsgWithdrawDelegatorReward)(sender.accountAddress, validator));
  });
  var messages = (0, _eip.generateMessageWithMultipleTransactions)(sender.accountNumber.toString(), sender.sequence.toString(), chain.cosmosChainId, memo, feeObject, msgs);
  var eipToSign = (0, _eip.createEIP712)(types, chain.chainId, messages); // Cosmos

  var tx = (0, _proto.createTransactionWithMultipleMessages)(protoMsgs, memo, fee.amount, fee.denom, parseInt(fee.gas, 10), 'ethsecp256', sender.pubkey, sender.sequence, sender.accountNumber, chain.cosmosChainId);
  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign: eipToSign
  };
}