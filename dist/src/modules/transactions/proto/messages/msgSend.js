"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgSend = createMsgSend;

var bank = _interopRequireWildcard(require("../proto/cosmos/bank/v1beta1/tx"));

var coin = _interopRequireWildcard(require("../proto/cosmos/base/v1beta1/coin"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createMsgSend(fromAddress, toAddress, amount, denom) {
  var value = new coin.cosmos.base.v1beta1.Coin({
    denom: denom,
    amount: amount
  });
  var message = new bank.cosmos.bank.v1beta1.MsgSend({
    from_address: fromAddress,
    to_address: toAddress,
    amount: [value]
  });
  return {
    message: message,
    path: 'cosmos.bank.v1beta1.MsgSend'
  };
}