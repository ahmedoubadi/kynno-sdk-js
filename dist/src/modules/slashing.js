"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slashing = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errors = require("../errors");

var _utils = require("../utils");

/**
 * In Proof-of-Stake blockchain, validators will get block provisions by staking their token.
 * But if they failed to keep online, they will be punished by slashing a small portion of their staked tokens.
 * The offline validators will be removed from the validator set and put into jail, which means their voting power is zero.
 * During the jail period, these nodes are not even validator candidates. Once the jail period ends, they can send [[unjail]] transactions to free themselves and become validator candidates again.
 *
 * [More Details](https://www.kynno.io/docs/features/slashing.html)
 *
 * @category Modules
 */
var Slashing = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Slashing(client) {
    (0, _classCallCheck2["default"])(this, Slashing);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query on-chain parameters of Slashing
   * @returns
   * @since v1.0
   */


  (0, _createClass2["default"])(Slashing, [{
    key: "queryParams",
    value: function queryParams() {
      // return this.client.rpcClient.abciQuery<types.SlashingParams>(
      //   'custom/slashing/parameters'
      // );
      throw new _errors.SdkError('Not supported', _errors.CODES.Internal);
    }
    /**
     * Query a validator's signing information
     * @param bech32ConsAddress Bech32 prefixed validator consensus address
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.1
     */

  }, {
    key: "querySigningInfo",
    value: function querySigningInfo(bech32ConsAddress, height) {
      var _this = this;

      var key = _utils.StoreKeys.getSigningInfoKey(bech32ConsAddress);

      return this.client.rpcClient.queryStore(key, 'slashing', height).then(function (res) {
        if (!res || !res.response || !res.response.value) {
          throw new _errors.SdkError('Validator not found');
        }

        return _this.client.protobuf.deserializeSigningInfo(res.response.value);
      });
    }
  }]);
  return Slashing;
}();

exports.Slashing = Slashing;