"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ibc = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _helper = require("../helper");

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module implements IBC related functions
 *
 *
 * @category Modules
 * @since v0.1
 */
var Ibc = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Ibc(client) {
    (0, _classCallCheck2["default"])(this, Ibc);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * DenomTrace queries a denomination trace information.
   * @param hash (in hex format) of the denomination trace information.
   */


  (0, _createClass2["default"])(Ibc, [{
    key: "queryDenomTrace",
    value: function queryDenomTrace(hash) {
      if (!hash) {
        throw new _errors.SdkError("hash can ont be empty");
      }

      var request = new types.ibc_transfer_query_pb.QueryDenomTraceRequest();
      request.setHash(hash);
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/DenomTrace', request, types.ibc_transfer_query_pb.QueryDenomTraceResponse);
    }
    /**
     * DenomTraces queries all denomination traces.
     */

  }, {
    key: "queryDenomTraces",
    value: function queryDenomTraces() {
      var page_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.ibc_transfer_query_pb.QueryDenomTracesRequest();
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/DenomTraces', request, types.ibc_transfer_query_pb.QueryDenomTracesResponse);
    }
    /**
     * Params queries all parameters of the ibc-transfer module.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.ibc_transfer_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/Params', request, types.ibc_transfer_query_pb.QueryParamsResponse);
    }
    /**
     * Channels queries all the IBC channels of a chain.
     */

  }, {
    key: "queryChannels",
    value: function queryChannels() {
      var page_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.ibc_channel_query_pb.QueryChannelsRequest();
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/ibc.core.channel.v1.Query/Channels', request, types.ibc_channel_query_pb.QueryChannelsResponse);
    }
  }]);
  return Ibc;
}();

exports.Ibc = Ibc;