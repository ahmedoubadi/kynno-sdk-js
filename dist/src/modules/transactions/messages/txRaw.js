"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTxRawEIP712 = createTxRawEIP712;

var _proto = require("../proto");

function createTxRawEIP712(body, authInfo, extension) {
  body.extension_options.push((0, _proto.createAnyMessage)(extension));
  return (0, _proto.createTxRaw)(body.serializeBinary(), authInfo.serializeBinary(), [new Uint8Array()]);
}