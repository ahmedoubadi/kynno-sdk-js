"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBodyWithMultipleMessages = createBodyWithMultipleMessages;
exports.createBody = createBody;
exports.createFee = createFee;
exports.createSignerInfo = createSignerInfo;
exports.createAuthInfo = createAuthInfo;
exports.createSigDoc = createSigDoc;
exports.createTransactionWithMultipleMessages = createTransactionWithMultipleMessages;
exports.createTransaction = createTransaction;
exports.protoTxNamespace = exports.LEGACY_AMINO = exports.SIGN_DIRECT = void 0;

var _sha = require("sha3");

var tx = _interopRequireWildcard(require("../proto/cosmos/tx/v1beta1/tx"));

var signing = _interopRequireWildcard(require("../proto/cosmos/tx/signing/v1beta1/signing"));

var coin = _interopRequireWildcard(require("../proto/cosmos/base/v1beta1/coin"));

var eth = _interopRequireWildcard(require("../proto/ethermint/crypto/v1/ethsecp256k1/keys"));

var secp = _interopRequireWildcard(require("../proto/cosmos/crypto/secp256k1/keys"));

var _utils = require("../messages/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SIGN_DIRECT = signing.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
exports.SIGN_DIRECT = SIGN_DIRECT;
var LEGACY_AMINO = signing.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
exports.LEGACY_AMINO = LEGACY_AMINO;
var protoTxNamespace; // TODO: messages should be typed as proto message. A types package is needed to export that type without problems

exports.protoTxNamespace = protoTxNamespace;

(function (_protoTxNamespace) {
  /* global cosmos */

  /* eslint no-undef: "error" */
  var txn = tx.cosmos.tx.v1beta1;
})(protoTxNamespace || (exports.protoTxNamespace = protoTxNamespace = {}));

function createBodyWithMultipleMessages(messages, memo) {
  var content = [];
  messages.forEach(function (message) {
    content.push((0, _utils.createAnyMessage)(message));
  });
  return new tx.cosmos.tx.v1beta1.TxBody({
    messages: content,
    memo: memo
  });
}

function createBody(message, memo) {
  return createBodyWithMultipleMessages([message], memo);
}

function createFee(fee, denom, gasLimit) {
  return new tx.cosmos.tx.v1beta1.Fee({
    amount: [new coin.cosmos.base.v1beta1.Coin({
      denom: denom,
      amount: fee
    })],
    gas_limit: gasLimit
  });
}

function createSignerInfo(algo, publicKey, sequence, mode) {
  var pubkey; // NOTE: secp256k1 is going to be removed from evmos

  if (algo === 'secp256k1') {
    pubkey = {
      message: new secp.cosmos.crypto.secp256k1.PubKey({
        key: publicKey
      }),
      path: 'cosmos.crypto.secp256k1.PubKey'
    };
  } else {
    // NOTE: assume ethsecp256k1 by default because after mainnet is the only one that is going to be supported
    pubkey = {
      message: new eth.ethermint.crypto.v1.ethsecp256k1.PubKey({
        key: publicKey
      }),
      path: 'ethermint.crypto.v1.ethsecp256k1.PubKey'
    };
  }

  var signerInfo = new tx.cosmos.tx.v1beta1.SignerInfo({
    public_key: (0, _utils.createAnyMessage)(pubkey),
    mode_info: new tx.cosmos.tx.v1beta1.ModeInfo({
      single: new tx.cosmos.tx.v1beta1.ModeInfo.Single({
        mode: mode
      })
    }),
    sequence: sequence
  });
  return signerInfo;
}

function createAuthInfo(signerInfo, fee) {
  return new tx.cosmos.tx.v1beta1.AuthInfo({
    signer_infos: [signerInfo],
    fee: fee
  });
}

function createSigDoc(bodyBytes, authInfoBytes, chainId, accountNumber) {
  return new tx.cosmos.tx.v1beta1.SignDoc({
    body_bytes: bodyBytes,
    auth_info_bytes: authInfoBytes,
    chain_id: chainId,
    account_number: accountNumber
  });
} // TODO: messages should be typed as proto message. A types package is needed to export that type without problems


function createTransactionWithMultipleMessages(messages, memo, fee, denom, gasLimit, algo, pubKey, sequence, accountNumber, chainId) {
  var body = createBodyWithMultipleMessages(messages, memo);
  var feeMessage = createFee(fee, denom, gasLimit);
  var pubKeyDecoded = Buffer.from(pubKey, 'base64'); // AMINO

  var signInfoAmino = createSignerInfo(algo, new Uint8Array(pubKeyDecoded), sequence, LEGACY_AMINO);
  var authInfoAmino = createAuthInfo(signInfoAmino, feeMessage);
  var signDocAmino = createSigDoc(body.serializeBinary(), authInfoAmino.serializeBinary(), chainId, accountNumber);
  var hashAmino = new _sha.Keccak(256);
  hashAmino.update(Buffer.from(signDocAmino.serializeBinary()));
  var toSignAmino = hashAmino.digest('binary'); // SignDirect

  var signInfoDirect = createSignerInfo(algo, new Uint8Array(pubKeyDecoded), sequence, SIGN_DIRECT);
  var authInfoDirect = createAuthInfo(signInfoDirect, feeMessage);
  var signDocDirect = createSigDoc(body.serializeBinary(), authInfoDirect.serializeBinary(), chainId, accountNumber);
  var hashDirect = new _sha.Keccak(256);
  hashDirect.update(Buffer.from(signDocDirect.serializeBinary()));
  var toSignDirect = hashDirect.digest('binary');
  return {
    legacyAmino: {
      body: body,
      authInfo: authInfoAmino,
      signBytes: toSignAmino.toString('base64')
    },
    signDirect: {
      body: body,
      authInfo: authInfoDirect,
      signBytes: toSignDirect.toString('base64')
    }
  };
}

function createTransaction(message, memo, fee, denom, gasLimit, algo, pubKey, sequence, accountNumber, chainId) {
  return createTransactionWithMultipleMessages([message], memo, fee, denom, gasLimit, algo, pubKey, sequence, accountNumber, chainId);
}