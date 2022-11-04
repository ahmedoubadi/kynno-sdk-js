"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Distribution = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _helper = require("../helper");

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.kynno.io/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.1
 */
var Distribution = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Distribution(client) {
    (0, _classCallCheck2["default"])(this, Distribution);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Params queries params of the distribution module.
   */


  (0, _createClass2["default"])(Distribution, [{
    key: "queryParams",
    value: function queryParams() {
      var request = new types.distribution_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/Params', request, types.distribution_query_pb.QueryParamsResponse);
    }
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @param validator_address Bech32 address
     */

  }, {
    key: "queryValidatorOutstandingRewards",
    value: function queryValidatorOutstandingRewards(validator_address) {
      if (!validator_address) {
        throw new _errors.SdkError("validator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryValidatorOutstandingRewardsRequest();
      request.setValidatorAddress(validator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards', request, types.distribution_query_pb.QueryValidatorOutstandingRewardsResponse);
    }
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @param validator_address Bech32 address
     */

  }, {
    key: "queryValidatorCommission",
    value: function queryValidatorCommission(validator_address) {
      if (!validator_address) {
        throw new _errors.SdkError("validator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryValidatorCommissionRequest();
      request.setValidatorAddress(validator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorCommission', request, types.distribution_query_pb.QueryValidatorCommissionResponse);
    }
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @param validator_address defines the validator address to query for.
     * @param starting_height defines the optional starting height to query the slashes.
     * @param ending_height defines the optional ending height to query the slashes.
     * @param page_number 
     * @param page_size 
     */

  }, {
    key: "queryValidatorSlashes",
    value: function queryValidatorSlashes(validator_address) {
      var starting_height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ending_height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var page_number = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var page_size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;

      if (!validator_address) {
        throw new _errors.SdkError("validator_address can ont be empty");
      }

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.distribution_query_pb.QueryValidatorSlashesRequest();
      request.setValidatorAddress(validator_address);
      request.setPagination(pagination);

      if (starting_height) {
        request.setStartingHeight(starting_height);
      }

      if (ending_height) {
        request.setEndingHeight(ending_height);
      }

      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorSlashes', request, types.distribution_query_pb.QueryValidatorSlashesResponse);
    }
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @param validator_address defines the validator address to query for
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegationRewards",
    value: function queryDelegationRewards(validator_address, delegator_address) {
      if (!validator_address) {
        throw new _errors.SdkError("validator_address can ont be empty");
      }

      if (!delegator_address) {
        throw new _errors.SdkError("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegationRewardsRequest();
      request.setValidatorAddress(validator_address);
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationRewards', request, types.distribution_query_pb.QueryDelegationRewardsResponse);
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegationTotalRewards",
    value: function queryDelegationTotalRewards(delegator_address) {
      if (!delegator_address) {
        throw new _errors.SdkError("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegationTotalRewardsRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationTotalRewards', request, types.distribution_query_pb.QueryDelegationTotalRewardsResponse);
    }
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegatorValidators",
    value: function queryDelegatorValidators(delegator_address) {
      if (!delegator_address) {
        throw new _errors.SdkError("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegatorValidatorsRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorValidators', request, types.distribution_query_pb.QueryDelegatorValidatorsResponse);
    }
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegatorWithdrawAddress",
    value: function queryDelegatorWithdrawAddress(delegator_address) {
      if (!delegator_address) {
        throw new _errors.SdkError("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegatorWithdrawAddressRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress', request, types.distribution_query_pb.QueryDelegatorWithdrawAddressResponse);
    }
    /**
     * CommunityPool queries the community pool coins.
     */

  }, {
    key: "queryCommunityPool",
    value: function queryCommunityPool() {
      var request = new types.distribution_query_pb.QueryCommunityPoolRequest();
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/CommunityPool', request, types.distribution_query_pb.QueryCommunityPoolResponse);
    }
  }]);
  return Distribution;
}();

exports.Distribution = Distribution;