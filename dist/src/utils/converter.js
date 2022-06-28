"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmosToEth = exports.ethToCosmos = exports.COSMOS = exports.osmosisToEth = exports.ethToOsmosis = exports.OSMOSIS = exports.kynnoToEth = exports.ethToKynno = exports.KYNNO = exports.ethermintToEth = exports.ethToEthermint = exports.ETHERMINT = exports.ETH = void 0;

var _cryptoAddrCodec = require("crypto-addr-codec");

var _bech = require("bech32");

function makeChecksummedHexDecoder(chainId) {
  return function (data) {
    var stripped = (0, _cryptoAddrCodec.stripHexPrefix)(data);

    if (!(0, _cryptoAddrCodec.isValidChecksumAddress)(data, chainId || null) && stripped !== stripped.toLowerCase() && stripped !== stripped.toUpperCase()) {
      throw Error('Invalid address checksum');
    }

    return Buffer.from((0, _cryptoAddrCodec.stripHexPrefix)(data), 'hex');
  };
}

function makeChecksummedHexEncoder(chainId) {
  return function (data) {
    return (0, _cryptoAddrCodec.toChecksumAddress)(data.toString('hex'), chainId || null);
  };
}

var hexChecksumChain = function hexChecksumChain(name, chainId) {
  return {
    decoder: makeChecksummedHexDecoder(chainId),
    encoder: makeChecksummedHexEncoder(chainId),
    name: name
  };
};

var ETH = hexChecksumChain('ETH');
exports.ETH = ETH;

function makeBech32Encoder(prefix) {
  return function (data) {
    return _bech.bech32.encode(prefix, _bech.bech32.toWords(data));
  };
}

function makeBech32Decoder(currentPrefix) {
  return function (data) {
    var _bech32$decode = _bech.bech32.decode(data),
        prefix = _bech32$decode.prefix,
        words = _bech32$decode.words;

    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format');
    }

    return Buffer.from(_bech.bech32.fromWords(words));
  };
}

var bech32Chain = function bech32Chain(name, prefix) {
  return {
    decoder: makeBech32Decoder(prefix),
    encoder: makeBech32Encoder(prefix),
    name: name
  };
};

var ETHERMINT = bech32Chain('ETHERMINT', 'ethm');
exports.ETHERMINT = ETHERMINT;

var ethToEthermint = function ethToEthermint(ethAddress) {
  var data = ETH.decoder(ethAddress);
  return ETHERMINT.encoder(data);
};

exports.ethToEthermint = ethToEthermint;

var ethermintToEth = function ethermintToEth(ethermintAddress) {
  var data = ETHERMINT.decoder(ethermintAddress);
  return ETH.encoder(data);
};

exports.ethermintToEth = ethermintToEth;
var KYNNO = bech32Chain('KYNNO', 'kynno');
exports.KYNNO = KYNNO;

var ethToKynno = function ethToKynno(ethAddress) {
  var data = ETH.decoder(ethAddress);
  return KYNNO.encoder(data);
};

exports.ethToKynno = ethToKynno;

var kynnoToEth = function kynnoToEth(kynnoAddress) {
  var data = KYNNO.decoder(kynnoAddress);
  return ETH.encoder(data);
};

exports.kynnoToEth = kynnoToEth;
var OSMOSIS = bech32Chain('OSMOSIS', 'osmo');
exports.OSMOSIS = OSMOSIS;

var ethToOsmosis = function ethToOsmosis(ethAddress) {
  var data = ETH.decoder(ethAddress);
  return OSMOSIS.encoder(data);
};

exports.ethToOsmosis = ethToOsmosis;

var osmosisToEth = function osmosisToEth(kynnoAddress) {
  var data = OSMOSIS.decoder(kynnoAddress);
  return ETH.encoder(data);
};

exports.osmosisToEth = osmosisToEth;
var COSMOS = bech32Chain('COSMOS', 'cosmos');
exports.COSMOS = COSMOS;

var ethToCosmos = function ethToCosmos(ethAddress) {
  var data = ETH.decoder(ethAddress);
  return COSMOS.encoder(data);
};

exports.ethToCosmos = ethToCosmos;

var cosmosToEth = function cosmosToEth(kynnoAddress) {
  var data = COSMOS.decoder(kynnoAddress);
  return ETH.encoder(data);
};

exports.cosmosToEth = cosmosToEth;