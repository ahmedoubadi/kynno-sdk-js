"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgVote = createMsgVote;
exports.MSG_VOTE_TYPES = void 0;
var MSG_VOTE_TYPES = {
  MsgValue: [{
    name: 'proposal_id',
    type: 'uint64'
  }, {
    name: 'voter',
    type: 'string'
  }, {
    name: 'option',
    type: 'int32'
  }]
};
exports.MSG_VOTE_TYPES = MSG_VOTE_TYPES;

function createMsgVote(proposalId, option, sender) {
  return {
    type: 'cosmos-sdk/MsgVote',
    value: {
      proposal_id: proposalId,
      voter: sender,
      option: option
    }
  };
}