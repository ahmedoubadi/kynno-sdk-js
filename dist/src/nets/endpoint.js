"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateEndpointAccount = generateEndpointAccount;
exports.generateEndpointBroadcast = generateEndpointBroadcast;

function generateEndpointAccount(address) {
  return "/cosmos/auth/v1beta1/accounts/".concat(address);
}

function generateEndpointBroadcast() {
  return "/cosmos/tx/v1beta1/txs";
}
/* eslint-disable camelcase */