"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgDelegate = createMsgDelegate;
exports.createMsgBeginRedelegate = createMsgBeginRedelegate;
exports.createMsgUndelegate = createMsgUndelegate;
exports.createMsgWithdrawDelegatorReward = createMsgWithdrawDelegatorReward;

var staking = _interopRequireWildcard(require("../proto/cosmos/staking/v1beta1/tx"));

var coin = _interopRequireWildcard(require("../proto/cosmos/base/v1beta1/coin"));

var dist = _interopRequireWildcard(require("../proto/cosmos/distribution/v1beta1/tx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createMsgDelegate(delegatorAddress, validatorAddress, amount, denom) {
  var value = new coin.cosmos.base.v1beta1.Coin({
    denom: denom,
    amount: amount
  });
  var message = new staking.cosmos.staking.v1beta1.MsgDelegate({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount: value
  });
  return {
    message: message,
    path: 'cosmos.staking.v1beta1.MsgDelegate'
  };
}

function createMsgBeginRedelegate(delegatorAddress, validatorSrcAddress, validatorDstAddress, amount, denom) {
  var value = new coin.cosmos.base.v1beta1.Coin({
    denom: denom,
    amount: amount
  });
  var message = new staking.cosmos.staking.v1beta1.MsgBeginRedelegate({
    delegator_address: delegatorAddress,
    validator_src_address: validatorSrcAddress,
    validator_dst_address: validatorDstAddress,
    amount: value
  });
  return {
    message: message,
    path: 'cosmos.staking.v1beta1.MsgBeginRedelegate'
  };
}

function createMsgUndelegate(delegatorAddress, validatorAddress, amount, denom) {
  var value = new coin.cosmos.base.v1beta1.Coin({
    denom: denom,
    amount: amount
  });
  var message = new staking.cosmos.staking.v1beta1.MsgUndelegate({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount: value
  });
  return {
    message: message,
    path: 'cosmos.staking.v1beta1.MsgUndelegate'
  };
}

function createMsgWithdrawDelegatorReward(delegatorAddress, validatorAddress) {
  var message = new dist.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress
  });
  return {
    message: message,
    path: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
  };
}