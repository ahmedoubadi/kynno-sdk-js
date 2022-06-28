"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePostBodyBroadcast = generatePostBodyBroadcast;
exports.BroadcastMode = void 0;
var BroadcastMode;
exports.BroadcastMode = BroadcastMode;

(function (BroadcastMode) {
  BroadcastMode["Unspecified"] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode["Block"] = "BROADCAST_MODE_BLOCK";
  BroadcastMode["Sync"] = "BROADCAST_MODE_SYNC";
  BroadcastMode["Async"] = "BROADCAST_MODE_ASYNC";
})(BroadcastMode || (exports.BroadcastMode = BroadcastMode = {}));

function generatePostBodyBroadcast(txRaw) {
  var broadcastMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BroadcastMode.Sync;
  return "{ \"tx_bytes\": [".concat(txRaw.message.serializeBinary().toString(), "], \"mode\": \"").concat(broadcastMode, "\" }");
}
/* eslint-disable camelcase */