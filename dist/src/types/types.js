"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PubkeyType = exports.TxType = exports.Msg = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _helper = require("../helper");

var _errors = require("../errors");

/** 
 * Base Msg
 * @hidden
 */
var Msg = /*#__PURE__*/function () {
  function Msg(type) {
    (0, _classCallCheck2["default"])(this, Msg);
    (0, _defineProperty2["default"])(this, "type", void 0);
    (0, _defineProperty2["default"])(this, "value", void 0);
    this.type = type;
  }

  (0, _createClass2["default"])(Msg, [{
    key: "getModel",
    value: function getModel() {
      throw new _errors.SdkError("not implement", _errors.CODES.Internal);
    }
  }, {
    key: "pack",
    value: function pack() {
      var msg = this.getModel();
      return _helper.TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
    }
    /**
     * unpack protobuf tx message
     * @type {[type]}
     * returns protobuf message instance
     */

  }, {
    key: "unpack",
    value: function unpack(msgValue) {
      if (!msgValue) {
        throw new _errors.SdkError("msgValue can not be empty", _errors.CODES.Internal);
      }

      var msg = this.constructor.getModelClass().deserializeBinary(Buffer.from(msgValue, 'base64'));

      if (msg) {
        return msg;
      } else {
        throw new _errors.SdkError("unpack message fail", _errors.CODES.FailedUnpackingProtobufMessagFromAny);
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      throw new _errors.SdkError("not implement", _errors.CODES.Internal);
    }
  }]);
  return Msg;
}();

exports.Msg = Msg;
var TxType;
/** 
 * Base Tx
 * @hidden
 */

exports.TxType = TxType;

(function (TxType) {
  TxType["MsgSend"] = "cosmos.bank.v1beta1.MsgSend";
  TxType["MsgMultiSend"] = "cosmos.bank.v1beta1.MsgMultiSend";
  TxType["MsgDelegate"] = "cosmos.staking.v1beta1.MsgDelegate";
  TxType["MsgUndelegate"] = "cosmos.staking.v1beta1.MsgUndelegate";
  TxType["MsgBeginRedelegate"] = "cosmos.staking.v1beta1.MsgBeginRedelegate";
  TxType["MsgWithdrawDelegatorReward"] = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  TxType["MsgSetWithdrawAddress"] = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  TxType["MsgWithdrawValidatorCommission"] = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  TxType["MsgFundCommunityPool"] = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
  TxType["MsgIssueDenom"] = "kynno.nft.MsgIssueDenom";
  TxType["MsgTransferNFT"] = "kynno.nft.MsgTransferNFT";
  TxType["MsgEditNFT"] = "kynno.nft.MsgEditNFT";
  TxType["MsgMintNFT"] = "kynno.nft.MsgMintNFT";
  TxType["MsgBurnNFT"] = "kynno.nft.MsgBurnNFT";
  TxType["MsgIssueToken"] = "kynno.token.MsgIssueToken";
  TxType["MsgEditToken"] = "kynno.token.MsgEditToken";
  TxType["MsgMintToken"] = "kynno.token.MsgMintToken";
  TxType["MsgTransferTokenOwner"] = "kynno.token.MsgTransferTokenOwner";
  TxType["MsgSubmitProposal"] = "cosmos.gov.v1beta1.MsgSubmitProposal";
  TxType["MsgVote"] = "cosmos.gov.v1beta1.MsgVote";
  TxType["MsgDeposit"] = "cosmos.gov.v1beta1.MsgDeposit";
  TxType["MsgTransfer"] = "ibc.applications.transfer.v1.MsgTransfer";
})(TxType || (exports.TxType = TxType = {}));

/** 
 * Base Pubkey Type
 * @hidden
 */
var PubkeyType;
/** Tag struct */

exports.PubkeyType = PubkeyType;

(function (PubkeyType) {
  PubkeyType["secp256k1"] = "secp256k1";
  PubkeyType["ed25519"] = "ed25519";
  PubkeyType["sm2"] = "sm2";
})(PubkeyType || (exports.PubkeyType = PubkeyType = {}));