"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgSend = createMsgSend;
exports.MSG_SEND_TYPES = void 0;
var MSG_SEND_TYPES = {
  MsgValue: [{
    name: 'from_address',
    type: 'string'
  }, {
    name: 'to_address',
    type: 'string'
  }, {
    name: 'amount',
    type: 'TypeAmount[]'
  }],
  TypeAmount: [{
    name: 'denom',
    type: 'string'
  }, {
    name: 'amount',
    type: 'string'
  }]
};
exports.MSG_SEND_TYPES = MSG_SEND_TYPES;

function createMsgSend(amount, denom, fromAddress, toAddress) {
  return {
    type: 'cosmos-sdk/MsgSend',
    value: {
      amount: [{
        amount: amount,
        denom: denom
      }],
      from_address: fromAddress,
      to_address: toAddress
    }
  };
}