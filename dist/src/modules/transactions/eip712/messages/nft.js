"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgIssueDenom = createMsgIssueDenom;
exports.createMsgMintNft = createMsgMintNft;
exports.createMsgBurnNft = createMsgBurnNft;
exports.createMsgEditeNft = createMsgEditeNft;
exports.createMsgTransferNft = createMsgTransferNft;
exports.MSG_TRANSFER_NFT_TYPES = exports.MSG_EDITE_NFT_TYPES = exports.MSG_BURN_NFT_TYPES = exports.MSG_MINT_NFT_TYPES = exports.MSG_ISSUEDENOM_TYPES = void 0;
var MSG_ISSUEDENOM_TYPES = {
  MsgValue: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'schema',
    type: 'string'
  }, {
    name: 'sender',
    type: 'string'
  }, {
    name: 'symbol',
    type: 'string'
  }, {
    name: 'mint_restricted',
    type: 'bool'
  }, {
    name: 'update_restricted',
    type: 'bool'
  }, {
    name: 'description',
    type: 'string'
  }, {
    name: 'uri',
    type: 'string'
  }, {
    name: 'uri_hash',
    type: 'string'
  }, {
    name: 'data',
    type: 'string'
  }]
};
exports.MSG_ISSUEDENOM_TYPES = MSG_ISSUEDENOM_TYPES;

function createMsgIssueDenom(id, name, schema, sender, symbol, mint_restricted, update_restricted, description, uri, uri_hash, data) {
  return {
    type: "kynno/nft/MsgIssueDenom",
    value: {
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
    }
  };
}

var MSG_MINT_NFT_TYPES = {
  MsgValue: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'denom_id',
    type: 'string'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'uri',
    type: 'string'
  }, {
    name: 'data',
    type: 'string'
  }, {
    name: 'sender',
    type: 'string'
  }, {
    name: 'recipient',
    type: 'string'
  }, {
    name: 'uri_hash',
    type: 'string'
  }]
};
exports.MSG_MINT_NFT_TYPES = MSG_MINT_NFT_TYPES;

function createMsgMintNft(id, denom_id, name, uri, data, sender, recipient, uri_hash) {
  return {
    type: "kynno/nft/MsgMintNFT",
    value: {
      id: id,
      denom_id: denom_id,
      name: name,
      uri: uri,
      data: data,
      sender: sender,
      recipient: recipient,
      uri_hash: uri_hash
    }
  };
}

var MSG_BURN_NFT_TYPES = {
  MsgValue: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'denom_id',
    type: 'string'
  }, {
    name: 'sender',
    type: 'string'
  }]
};
exports.MSG_BURN_NFT_TYPES = MSG_BURN_NFT_TYPES;

function createMsgBurnNft(id, denom_id, sender) {
  return {
    type: "kynno/nft/MsgBurnNFT",
    value: {
      id: id,
      denom_id: denom_id,
      sender: sender
    }
  };
}

var MSG_EDITE_NFT_TYPES = {
  MsgValue: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'denom_id',
    type: 'string'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'uri',
    type: 'string'
  }, {
    name: 'data',
    type: 'string'
  }, {
    name: 'sender',
    type: 'string'
  }, {
    name: 'uri_hash',
    type: 'string'
  }]
};
exports.MSG_EDITE_NFT_TYPES = MSG_EDITE_NFT_TYPES;

function createMsgEditeNft(id, denom_id, name, uri, data, sender, uri_hash) {
  return {
    type: "kynno/nft/MsgEditeNFT",
    value: {
      id: id,
      denom_id: denom_id,
      name: name,
      uri: uri,
      data: data,
      sender: sender,
      uri_hash: uri_hash
    }
  };
}

var MSG_TRANSFER_NFT_TYPES = {
  MsgValue: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'denom_id',
    type: 'string'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'uri',
    type: 'string'
  }, {
    name: 'data',
    type: 'string'
  }, {
    name: 'sender',
    type: 'string'
  }, {
    name: 'recipient',
    type: 'string'
  }, {
    name: 'uri_hash',
    type: 'string'
  }]
};
exports.MSG_TRANSFER_NFT_TYPES = MSG_TRANSFER_NFT_TYPES;

function createMsgTransferNft(id, denom_id, name, uri, data, sender, recipient, uri_hash) {
  return {
    type: "kynno/nft/MsgTransferNFT",
    value: {
      id: id,
      denom_id: denom_id,
      name: name,
      uri: uri,
      data: data,
      sender: sender,
      recipient: recipient,
      uri_hash: uri_hash
    }
  };
}