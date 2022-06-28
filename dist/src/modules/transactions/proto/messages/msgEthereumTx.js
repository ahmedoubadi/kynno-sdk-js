"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bytesToMsgEthereumTx = bytesToMsgEthereumTx;
exports.bytesToLegacyTx = bytesToLegacyTx;
exports.bytesToAccessListTx = bytesToAccessListTx;
exports.bytesToDynamicFeeTx = bytesToDynamicFeeTx;

var ethermint = _interopRequireWildcard(require("../proto/ethermint/evm/v1/tx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function bytesToMsgEthereumTx(bytes) {
  return ethermint.ethermint.evm.v1.MsgEthereumTx.deserialize(bytes);
}

function bytesToLegacyTx(bytes) {
  return ethermint.ethermint.evm.v1.LegacyTx.deserialize(bytes);
}

function bytesToAccessListTx(bytes) {
  return ethermint.ethermint.evm.v1.AccessListTx.deserialize(bytes);
}

function bytesToDynamicFeeTx(bytes) {
  return ethermint.ethermint.evm.v1.DynamicFeeTx.deserialize(bytes);
}