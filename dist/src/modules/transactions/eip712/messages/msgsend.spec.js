"use strict";

var _msgsend = require("./msgsend");

describe('msgSend tests', function () {
  it('createMsgSend', function () {
    expect((0, _msgsend.createMsgSend)('1', 'aphoton', 'ethm1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm', 'ethm1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm')).toStrictEqual({
      type: 'cosmos-sdk/MsgSend',
      value: {
        amount: [{
          amount: '1',
          denom: 'aphoton'
        }],
        from_address: 'ethm1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm',
        to_address: 'ethm1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm'
      }
    });
  });
});