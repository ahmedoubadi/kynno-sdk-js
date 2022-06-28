"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgDelegate = createMsgDelegate;
exports.createMsgBeginRedelegate = createMsgBeginRedelegate;
exports.createMsgUndelegate = createMsgUndelegate;
exports.createMsgWithdrawDelegatorReward = createMsgWithdrawDelegatorReward;
exports.MSG_WITHDRAW_DELEGATOR_REWARD_TYPES = exports.MSG_UNDELEGATE_TYPES = exports.MSG_BEGIN_REDELEGATE_TYPES = exports.MSG_DELEGATE_TYPES = void 0;
var MSG_DELEGATE_TYPES = {
  MsgValue: [{
    name: 'delegator_address',
    type: 'string'
  }, {
    name: 'validator_address',
    type: 'string'
  }, {
    name: 'amount',
    type: 'TypeAmount'
  }],
  TypeAmount: [{
    name: 'denom',
    type: 'string'
  }, {
    name: 'amount',
    type: 'string'
  }]
};
exports.MSG_DELEGATE_TYPES = MSG_DELEGATE_TYPES;

function createMsgDelegate(delegatorAddress, validatorAddress, amount, denom) {
  return {
    type: 'cosmos-sdk/MsgDelegate',
    value: {
      amount: {
        amount: amount,
        denom: denom
      },
      delegator_address: delegatorAddress,
      validator_address: validatorAddress
    }
  };
}

var MSG_BEGIN_REDELEGATE_TYPES = {
  MsgValue: [{
    name: 'delegator_address',
    type: 'string'
  }, {
    name: 'validator_src_address',
    type: 'string'
  }, {
    name: 'validator_dst_address',
    type: 'string'
  }, {
    name: 'amount',
    type: 'TypeAmount'
  }],
  TypeAmount: [{
    name: 'denom',
    type: 'string'
  }, {
    name: 'amount',
    type: 'string'
  }]
};
exports.MSG_BEGIN_REDELEGATE_TYPES = MSG_BEGIN_REDELEGATE_TYPES;

function createMsgBeginRedelegate(delegatorAddress, validatorSrcAddress, validatorDstAddress, amount, denom) {
  return {
    type: 'cosmos-sdk/MsgBeginRedelegate',
    value: {
      amount: {
        amount: amount,
        denom: denom
      },
      delegator_address: delegatorAddress,
      validator_src_address: validatorSrcAddress,
      validator_dst_address: validatorDstAddress
    }
  };
}

var MSG_UNDELEGATE_TYPES = {
  MsgValue: [{
    name: 'delegator_address',
    type: 'string'
  }, {
    name: 'validator_address',
    type: 'string'
  }, {
    name: 'amount',
    type: 'TypeAmount'
  }],
  TypeAmount: [{
    name: 'denom',
    type: 'string'
  }, {
    name: 'amount',
    type: 'string'
  }]
};
exports.MSG_UNDELEGATE_TYPES = MSG_UNDELEGATE_TYPES;

function createMsgUndelegate(delegatorAddress, validatorAddress, amount, denom) {
  return {
    type: 'cosmos-sdk/MsgUndelegate',
    value: {
      amount: {
        amount: amount,
        denom: denom
      },
      delegator_address: delegatorAddress,
      validator_address: validatorAddress
    }
  };
}

var MSG_WITHDRAW_DELEGATOR_REWARD_TYPES = {
  MsgValue: [{
    name: 'delegator_address',
    type: 'string'
  }, {
    name: 'validator_address',
    type: 'string'
  }]
};
/* eslint-disable camelcase */

exports.MSG_WITHDRAW_DELEGATOR_REWARD_TYPES = MSG_WITHDRAW_DELEGATOR_REWARD_TYPES;

function createMsgWithdrawDelegatorReward(delegatorAddress, validatorAddress) {
  return {
    type: 'cosmos-sdk/MsgWithdrawDelegationReward',
    value: {
      delegator_address: delegatorAddress,
      validator_address: validatorAddress
    }
  };
}