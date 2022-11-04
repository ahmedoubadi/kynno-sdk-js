"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../errors");

var _axios = _interopRequireDefault(require("axios"));

var _endpoint = require("../nets/endpoint");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Account module is only used to query `Account data`
 *
 * @category Modules
 * @since v0.1
 */
var Account = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Account(client, config) {
    (0, _classCallCheck2["default"])(this, Account);
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
   * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
   *
   * **NOTE:** The first signature is the fee payer
   *
   * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
   * @param url Rpc address of kynno node
   *
   * @returns
   * @since v0.1
   */

  /**
   * Account returns account details based on address.
   * @param address defines the address to query for.
   */


  (0, _createClass2["default"])(Account, [{
    key: "queryAccount",
    value: function queryAccount(address) {
      if (address.split('0x').length == 2) {
        address = this.client.utils.toKynno(address);
      }

      var endpoint = (0, _endpoint.generateEndpointAccount)(address);
      return this.request(endpoint).then(function (res) {
        return res;
      });
    }
  }, {
    key: "request",
    value: function request(endpoint) {
      return this.instance.get(this.client.config.api + endpoint, this.config).then(function (response) {
        var res = response.data; // Internal error

        if (res.error) {
          throw new _errors.SdkError(res.error.message, res.error.code, "api_account");
        }

        return res;
      });
    }
  }]);
  return Account;
}();

exports.Account = Account;