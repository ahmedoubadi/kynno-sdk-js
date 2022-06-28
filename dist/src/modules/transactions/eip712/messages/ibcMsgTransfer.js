"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIBCMsgTransfer = createIBCMsgTransfer;
exports.IBC_MSG_TRANSFER_TYPES = void 0;
var IBC_MSG_TRANSFER_TYPES = {
  MsgValue: [{
    name: 'source_port',
    type: 'string'
  }, {
    name: 'source_channel',
    type: 'string'
  }, {
    name: 'token',
    type: 'TypeToken'
  }, {
    name: 'sender',
    type: 'string'
  }, {
    name: 'receiver',
    type: 'string'
  }, {
    name: 'timeout_height',
    type: 'TypeTimeoutHeight'
  }, {
    name: 'timeout_timestamp',
    type: 'uint64'
  }],
  TypeToken: [{
    name: 'denom',
    type: 'string'
  }, {
    name: 'amount',
    type: 'string'
  }],
  TypeTimeoutHeight: [{
    name: 'revision_number',
    type: 'uint64'
  }, {
    name: 'revision_height',
    type: 'uint64'
  }]
};
exports.IBC_MSG_TRANSFER_TYPES = IBC_MSG_TRANSFER_TYPES;

function createIBCMsgTransfer(receiver, sender, sourceChannel, sourcePort, revisionHeight, revisionNumber, timeoutTimestamp, amount, denom) {
  /* eslint-disable camelcase */
  return {
    type: 'cosmos-sdk/MsgTransfer',
    value: {
      receiver: receiver,
      sender: sender,
      source_channel: sourceChannel,
      source_port: sourcePort,
      timeout_height: {
        revision_height: revisionHeight.toString(),
        revision_number: revisionNumber.toString()
      },
      timeout_timestamp: timeoutTimestamp,
      token: {
        amount: amount,
        denom: denom
      }
    }
  };
}