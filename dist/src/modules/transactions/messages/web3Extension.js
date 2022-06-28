"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signatureToWeb3Extension = signatureToWeb3Extension;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _proto = require("../proto");

function signatureToWeb3Extension(chain, sender, hexFormattedSignature) {
  var signature = hexFormattedSignature;
  var temp = hexFormattedSignature.split('0x');

  if (temp.length === 2) {
    ;

    var _temp = (0, _slicedToArray2["default"])(temp, 2);

    signature = _temp[1];
  }

  return (0, _proto.createWeb3Extension)(chain.chainId, sender.accountAddress, Uint8Array.from(Buffer.from(signature, 'hex')));
}