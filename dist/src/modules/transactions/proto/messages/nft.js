"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgIssueDenom = createMsgIssueDenom;
exports.createMsgMintNft = createMsgMintNft;
exports.createMsgBurnNft = createMsgBurnNft;
exports.createMsgEditeNft = createMsgEditeNft;
exports.createMsgTransferNft = createMsgTransferNft;

var nft = _interopRequireWildcard(require("../proto/kynno/nft/tx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createMsgIssueDenom(id, name, schema, sender, symbol, mint_restricted, update_restricted, description, uri, uri_hash, data) {
  var message = new nft.kynno.nft.MsgIssueDenom({
    id: id,
    name: name,
    schema: schema,
    sender: sender.accountAddress,
    symbol: symbol,
    mint_restricted: mint_restricted,
    update_restricted: update_restricted,
    description: description,
    uri: uri,
    uri_hash: uri_hash,
    data: data
  });
  return {
    message: message,
    path: 'kynno.nft.MsgIssueDenom'
  };
}

function createMsgMintNft(id, denom_id, name, uri, data, sender, recipient, uri_hash) {
  var message = new nft.kynno.nft.MsgMintNFT({
    id: id,
    denom_id: denom_id,
    name: name,
    uri: uri,
    data: data,
    sender: sender,
    recipient: recipient,
    uri_hash: uri_hash
  });
  return {
    message: message,
    path: 'kynno.nft.MsgMintNFT'
  };
}

function createMsgBurnNft(id, denom_id, sender) {
  var message = new nft.kynno.nft.MsgBurnNFT({
    id: id,
    denom_id: denom_id,
    sender: sender
  });
  return {
    message: message,
    path: 'kynno.nft.MsgBurnNFT'
  };
}

function createMsgEditeNft(id, denom_id, name, uri, data, sender, uri_hash) {
  var message = new nft.kynno.nft.MsgEditNFT({
    id: id,
    denom_id: denom_id,
    name: name,
    uri: uri,
    data: data,
    sender: sender,
    uri_hash: uri_hash
  });
  return {
    message: message,
    path: 'kynno.nft.MsgEditNFT'
  };
}

function createMsgTransferNft(id, denom_id, name, uri, data, sender, recipient, uri_hash) {
  var message = new nft.kynno.nft.MsgTransferNFT({
    id: id,
    denom_id: denom_id,
    name: name,
    uri: uri,
    data: data,
    sender: sender,
    recipient: recipient,
    uri_hash: uri_hash
  });
  return {
    message: message,
    path: 'kynno.nft.MsgTransferNFT'
  };
}