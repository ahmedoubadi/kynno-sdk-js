"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nft = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
var Nft = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Nft(client) {
    (0, _classCallCheck2["default"])(this, Nft);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Supply queries the total supply of a given denom or owner
   * @param denom_id
   * @param owner
   */


  (0, _createClass2["default"])(Nft, [{
    key: "querySupply",
    value: function querySupply(denom_id, owner) {
      if (!denom_id && !owner) {
        throw new _errors.SdkError("there must be one denom_id or owner");
      }

      var request = new types.nft_query_pb.QuerySupplyRequest();

      if (denom_id) {
        request.setDenomId(denom_id);
      }

      if (owner) {
        request.setOwner(owner);
      }

      return this.client.rpcClient.protoQuery('/kynno.nft.Query/Supply', request, types.nft_query_pb.QuerySupplyResponse);
    }
    /**
     * Owner queries the NFTs of the specified owner
     * @param owner
     * @param denom_id
     */

  }, {
    key: "queryOwner",
    value: function queryOwner(owner, denom_id) {
      if (!owner) {
        throw new _errors.SdkError("owner can ont be empty");
      }

      var request = new types.nft_query_pb.QueryOwnerRequest();
      request.setOwner(owner);

      if (denom_id) {
        request.setDenomId(denom_id);
      }

      return this.client.rpcClient.protoQuery('/kynno.nft.Query/Owner', request, types.nft_query_pb.QueryOwnerResponse);
    }
    /**
     * Collection queries the NFTs of the specified denom
     * @param denom_id
     */

  }, {
    key: "queryCollection",
    value: function queryCollection(denom_id) {
      if (!denom_id) {
        throw new _errors.SdkError("denom_id can ont be empty");
      }

      var request = new types.nft_query_pb.QueryCollectionRequest();
      request.setDenomId(denom_id);
      return this.client.rpcClient.protoQuery('/kynno.nft.Query/Collection', request, types.nft_query_pb.QueryCollectionResponse);
    }
    /**
     * Denom queries the definition of a given denom
     * @param denom_id
     */

  }, {
    key: "queryDenom",
    value: function queryDenom(denom_id) {
      if (!denom_id) {
        throw new _errors.SdkError("denom_id can ont be empty");
      }

      var request = new types.nft_query_pb.QueryDenomRequest();
      request.setDenomId(denom_id);
      return this.client.rpcClient.protoQuery('/kynno.nft.Query/Denom', request, types.nft_query_pb.QueryDenomResponse);
    }
    /**
     * Denoms queries all the denoms
     */

  }, {
    key: "queryDenoms",
    value: function queryDenoms() {
      var request = new types.nft_query_pb.QueryDenomsRequest();
      return this.client.rpcClient.protoQuery('/kynno.nft.Query/Denoms', request, types.nft_query_pb.QueryDenomsResponse);
    }
    /**
     * NFT queries the NFT for the given denom and token ID
     * @param denom_id
     * @param token_id
     */

  }, {
    key: "queryNFT",
    value: function queryNFT(denom_id, token_id) {
      if (!denom_id) {
        throw new _errors.SdkError("denom_id can ont be empty");
      }

      if (!token_id) {
        throw new _errors.SdkError("token_id can ont be empty");
      }

      var request = new types.nft_query_pb.QueryNFTRequest();
      request.setDenomId(denom_id);
      request.setTokenId(token_id);
      return this.client.rpcClient.protoQuery('/kynno.nft.Query/NFT', request, types.nft_query_pb.QueryNFTResponse);
    }
  }]);
  return Nft;
}();

exports.Nft = Nft;