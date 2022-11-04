"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _txRaw = require("./messages/txRaw");

var _staking = require("./messages/staking");

var _msgSend = require("./messages/msgSend");

var _ibcMsgTransfer = require("./messages/ibcMsgTransfer");

var _gov = require("./messages/gov");

var _nft = require("./messages/nft");

var _web3Extension = require("./messages/web3Extension");

var _axios = _interopRequireDefault(require("axios"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../../errors");

var _broadcast = require("../../nets/broadcast");

var _endpoint = require("../../nets/endpoint");

var _signTypedData2 = require("../../helper/sign-typed-data");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module implements Transaction related functions
 *
 * @category Modules
 * @since v0.1
 */
var Transaction = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Transaction(client, config) {
    (0, _classCallCheck2["default"])(this, Transaction);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "instance", void 0);
    (0, _defineProperty2["default"])(this, "config", void 0);
    this.client = client;

    if (is.empty(config)) {
      throw new _errors.SdkError('RpcClient Config not initialized');
    }

    if (is.empty(config.baseURL)) {
      throw new _errors.SdkError('baseURL of RpcClient cannot be empty');
    }

    if (is.empty(config.timeout)) {
      config.timeout = 2000; // Set default timeout
    }

    config.url = '/'; // Fixed url

    this.config = config;
    this.instance = _axios["default"].create(config);
  }
  /**
   * create Tx Raw EIP712
   * @param body TxBody
   * @param authInfo AuthInfo
   * @param extension MessageGenerated
   * @returns
   * @since v0.1
   */


  (0, _createClass2["default"])(Transaction, [{
    key: "_createTxRawEIP712",
    value: function _createTxRawEIP712(body, authInfo, extension) {
      return (0, _txRaw.createTxRawEIP712)(body, authInfo, extension);
    } // send tx

  }, {
    key: "_createMessageSend",
    value: function _createMessageSend(chain, sender, fee, memo, params) {
      return (0, _msgSend.createMessageSend)(chain, sender, fee, memo, params);
    } //issue new collection

  }, {
    key: "_createTxMsgIssueDenom",
    value: function _createTxMsgIssueDenom(chain, sender, fee, memo, params) {
      return (0, _nft.createTxMsgIssueDenom)(chain, sender, fee, memo, params);
    } // mint nft

  }, {
    key: "_createTxMsgMintNft",
    value: function _createTxMsgMintNft(chain, sender, fee, memo, params) {
      return (0, _nft.createTxMsgMintNft)(chain, sender, fee, memo, params);
    } // burn nft

  }, {
    key: "_createTxMsgBurnNft",
    value: function _createTxMsgBurnNft(chain, sender, fee, memo, params) {
      return (0, _nft.createTxMsgBurnNft)(chain, sender, fee, memo, params);
    } // burn nft

  }, {
    key: "_createTxMsgTransferNft",
    value: function _createTxMsgTransferNft(chain, sender, fee, memo, params) {
      return (0, _nft.createTxMsgTransferNft)(chain, sender, fee, memo, params);
    } // edite nft

  }, {
    key: "_createTxMsgEditeNft",
    value: function _createTxMsgEditeNft(chain, sender, fee, memo, params) {
      return (0, _nft.createTxMsgEditeNft)(chain, sender, fee, memo, params);
    } // stacking txs

  }, {
    key: "_createTxMsgDelegate",
    value: function _createTxMsgDelegate(chain, sender, fee, memo, params) {
      return (0, _staking.createTxMsgDelegate)(chain, sender, fee, memo, params);
    }
  }, {
    key: "_createTxMsgBeginRedelegate",
    value: function _createTxMsgBeginRedelegate(chain, sender, fee, memo, params) {
      return (0, _staking.createTxMsgBeginRedelegate)(chain, sender, fee, memo, params);
    }
  }, {
    key: "_createTxMsgUndelegate",
    value: function _createTxMsgUndelegate(chain, sender, fee, memo, params) {
      return (0, _staking.createTxMsgUndelegate)(chain, sender, fee, memo, params);
    }
  }, {
    key: "_createTxMsgWithdrawDelegatorReward",
    value: function _createTxMsgWithdrawDelegatorReward(chain, sender, fee, memo, params) {
      return (0, _staking.createTxMsgWithdrawDelegatorReward)(chain, sender, fee, memo, params);
    }
  }, {
    key: "_createTxMsgMultipleWithdrawDelegatorReward",
    value: function _createTxMsgMultipleWithdrawDelegatorReward(chain, sender, fee, memo, params) {
      return (0, _staking.createTxMsgMultipleWithdrawDelegatorReward)(chain, sender, fee, memo, params);
    } //ibc txs

  }, {
    key: "_createTxIBCMsgTransfer",
    value: function _createTxIBCMsgTransfer(chain, sender, fee, memo, params) {
      return (0, _ibcMsgTransfer.createTxIBCMsgTransfer)(chain, sender, fee, memo, params);
    } // governance txs

  }, {
    key: "_createTxMsgVote",
    value: function _createTxMsgVote(chain, sender, fee, memo, params) {
      return (0, _gov.createTxMsgVote)(chain, sender, fee, memo, params);
    }
  }, {
    key: "_signatureToWeb3Extension",
    value: function _signatureToWeb3Extension(chain, sender, hexFormattedSignature) {
      return (0, _web3Extension.signatureToWeb3Extension)(chain, sender, hexFormattedSignature);
    }
  }, {
    key: "_generatePostBodyBroadcast",
    value: function _generatePostBodyBroadcast(txRaw, broadcastMode) {
      return (0, _broadcast.generatePostBodyBroadcast)(txRaw, broadcastMode);
    }
  }, {
    key: "_broadcastTx",
    value: function _broadcastTx(txRaw, broadcastMode) {
      var endpoint = (0, _endpoint.generateEndpointBroadcast)();
      var data = (0, _broadcast.generatePostBodyBroadcast)(txRaw);
      return this.instance.post(this.client.config.api + endpoint, data, this.config).then(function (response) {
        var res = response.data; // Internal error

        if (res.error) {
          throw new _errors.SdkError(res.error.message, res.error.code, "api_broadcastTx");
        }

        return res;
      });
    }
  }, {
    key: "_signTypedData",
    value: function _signTypedData(_ref) {
      var privateKey = _ref.privateKey,
          data = _ref.data,
          version = _ref.version;
      return (0, _signTypedData2.signTypedData)({
        privateKey: privateKey,
        data: data,
        version: version
      });
    }
  }, {
    key: "_recoverTypedSignature",
    value: function _recoverTypedSignature(_ref2) {
      var data = _ref2.data,
          signature = _ref2.signature,
          version = _ref2.version;
      return (0, _signTypedData2.recoverTypedSignature)({
        data: data,
        signature: signature,
        version: version
      });
    }
  }]);
  return Transaction;
}();

exports.Transaction = Transaction;