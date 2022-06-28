"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgIssueName = createMsgIssueName;
exports.MSG_ISSUENAME_TYPES = void 0;
var MSG_ISSUENAME_TYPES = {
  MsgValue: [{
    name: 'creator',
    type: 'string'
  }, {
    name: 'name',
    type: 'string'
  }]
};
exports.MSG_ISSUENAME_TYPES = MSG_ISSUENAME_TYPES;

function createMsgIssueName(sender, name) {
  return {
    type: "kynno/nameservice/MsgCreateName",
    value: {
      creator: sender.accountAddress,
      name: name
    }
  };
}