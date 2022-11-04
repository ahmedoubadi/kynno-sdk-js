"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bank = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 *
 * [More Details](https://www.kynno.io/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.1
 */
var Bank = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Bank(client) {
    (0, _classCallCheck2["default"])(this, Bank);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Balance queries the balance of a single coin for a single account.
   * @param address is the address to query balances for.
   * @param denom is the coin denom to query balances for.
   */


  (0, _createClass2["default"])(Bank, [{
    key: "queryBalance",
    value: function queryBalance(address, denom) {
      if (!address) {
        throw new _errors.SdkError("address can ont be empty");
      }

      if (!denom) {
        throw new _errors.SdkError("denom can ont be empty");
      }

      var request = new types.bank_query_pb.QueryBalanceRequest();
      request.setAddress(address);
      request.setDenom(denom);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Balance', request, types.bank_query_pb.QueryBalanceResponse);
    }
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @param address is the address to query balances for.
     */

  }, {
    key: "queryAllBalances",
    value: function queryAllBalances(address, height) {
      if (!address) {
        throw new _errors.SdkError("address can ont be empty");
      }

      var request = new types.bank_query_pb.QueryAllBalancesRequest();
      request.setAddress(address);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/AllBalances', request, types.bank_query_pb.QueryAllBalancesResponse, height);
    }
    /**
     * TotalSupply queries the total supply of all coins.
     */

  }, {
    key: "queryTotalSupply",
    value: function queryTotalSupply() {
      var request = new types.bank_query_pb.QueryTotalSupplyRequest();
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/TotalSupply', request, types.bank_query_pb.QueryTotalSupplyResponse);
    }
    /**
     * SupplyOf queries the supply of a single coin.
     * @param denom is the coin denom to query balances for.
     */

  }, {
    key: "querySupplyOf",
    value: function querySupplyOf(denom) {
      if (!denom) {
        throw new _errors.SdkError("denom can ont be empty");
      }

      var request = new types.bank_query_pb.QuerySupplyOfRequest();
      request.setDenom(denom);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/SupplyOf', request, types.bank_query_pb.QuerySupplyOfResponse);
    }
    /**
     * Params queries the parameters of x/bank module.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.bank_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Params', request, types.bank_query_pb.QueryParamsResponse);
    }
  }]);
  return Bank;
}();

exports.Bank = Bank;