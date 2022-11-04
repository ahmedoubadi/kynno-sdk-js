"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_3 = _interopRequireWildcard(require("./../../../cosmos/base/v1beta1/coin"));

var dependency_4 = _interopRequireWildcard(require("./genesis"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var inflation;

  (function (_inflation) {
    var v1;

    (function (_v) {
      var QueryPeriodRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryPeriodRequest, _pb_1$Message);

        var _super = _createSuper(QueryPeriodRequest);

        function QueryPeriodRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryPeriodRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this;
        }

        (0, _createClass2["default"])(QueryPeriodRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryPeriodRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryPeriodRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryPeriodRequest.deserialize(bytes);
          }
        }]);
        return QueryPeriodRequest;
      }(pb_1.Message);

      _v.QueryPeriodRequest = QueryPeriodRequest;

      var QueryPeriodResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryPeriodResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryPeriodResponse);

        function QueryPeriodResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryPeriodResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("period" in data && data.period != undefined) {
              _this2.period = data.period;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryPeriodResponse, [{
          key: "period",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.period != null) {
              data.period = this.period;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.period !== undefined) writer.writeUint64(1, this.period);
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryPeriodResponse({});

            if (data.period != null) {
              message.period = data.period;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryPeriodResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.period = reader.readUint64();
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryPeriodResponse.deserialize(bytes);
          }
        }]);
        return QueryPeriodResponse;
      }(pb_1.Message);

      _v.QueryPeriodResponse = QueryPeriodResponse;

      var QueryEpochMintProvisionRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryEpochMintProvisionRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryEpochMintProvisionRequest);

        function QueryEpochMintProvisionRequest(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryEpochMintProvisionRequest);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this3;
        }

        (0, _createClass2["default"])(QueryEpochMintProvisionRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryEpochMintProvisionRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryEpochMintProvisionRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryEpochMintProvisionRequest.deserialize(bytes);
          }
        }]);
        return QueryEpochMintProvisionRequest;
      }(pb_1.Message);

      _v.QueryEpochMintProvisionRequest = QueryEpochMintProvisionRequest;

      var QueryEpochMintProvisionResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryEpochMintProvisionResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryEpochMintProvisionResponse);

        function QueryEpochMintProvisionResponse(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryEpochMintProvisionResponse);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("epoch_mint_provision" in data && data.epoch_mint_provision != undefined) {
              _this4.epoch_mint_provision = data.epoch_mint_provision;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryEpochMintProvisionResponse, [{
          key: "epoch_mint_provision",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject) {
            function toObject() {
              return _toObject.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.epoch_mint_provision != null) {
              data.epoch_mint_provision = this.epoch_mint_provision.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.epoch_mint_provision !== undefined) writer.writeMessage(1, this.epoch_mint_provision, function () {
              return _this5.epoch_mint_provision.serialize(writer);
            });
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryEpochMintProvisionResponse({});

            if (data.epoch_mint_provision != null) {
              message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.epoch_mint_provision);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryEpochMintProvisionResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.epoch_mint_provision, function () {
                    return message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader);
                  });
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryEpochMintProvisionResponse.deserialize(bytes);
          }
        }]);
        return QueryEpochMintProvisionResponse;
      }(pb_1.Message);

      _v.QueryEpochMintProvisionResponse = QueryEpochMintProvisionResponse;

      var QuerySkippedEpochsRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QuerySkippedEpochsRequest, _pb_1$Message5);

        var _super5 = _createSuper(QuerySkippedEpochsRequest);

        function QuerySkippedEpochsRequest(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QuerySkippedEpochsRequest);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(QuerySkippedEpochsRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QuerySkippedEpochsRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QuerySkippedEpochsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QuerySkippedEpochsRequest.deserialize(bytes);
          }
        }]);
        return QuerySkippedEpochsRequest;
      }(pb_1.Message);

      _v.QuerySkippedEpochsRequest = QuerySkippedEpochsRequest;

      var QuerySkippedEpochsResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QuerySkippedEpochsResponse, _pb_1$Message6);

        var _super6 = _createSuper(QuerySkippedEpochsResponse);

        function QuerySkippedEpochsResponse(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, QuerySkippedEpochsResponse);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("skipped_epochs" in data && data.skipped_epochs != undefined) {
              _this7.skipped_epochs = data.skipped_epochs;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(QuerySkippedEpochsResponse, [{
          key: "skipped_epochs",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.skipped_epochs != null) {
              data.skipped_epochs = this.skipped_epochs;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.skipped_epochs !== undefined) writer.writeUint64(1, this.skipped_epochs);
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QuerySkippedEpochsResponse({});

            if (data.skipped_epochs != null) {
              message.skipped_epochs = data.skipped_epochs;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QuerySkippedEpochsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.skipped_epochs = reader.readUint64();
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QuerySkippedEpochsResponse.deserialize(bytes);
          }
        }]);
        return QuerySkippedEpochsResponse;
      }(pb_1.Message);

      _v.QuerySkippedEpochsResponse = QuerySkippedEpochsResponse;

      var QueryCirculatingSupplyRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryCirculatingSupplyRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryCirculatingSupplyRequest);

        function QueryCirculatingSupplyRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryCirculatingSupplyRequest);
          _this8 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this8;
        }

        (0, _createClass2["default"])(QueryCirculatingSupplyRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryCirculatingSupplyRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCirculatingSupplyRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryCirculatingSupplyRequest.deserialize(bytes);
          }
        }]);
        return QueryCirculatingSupplyRequest;
      }(pb_1.Message);

      _v.QueryCirculatingSupplyRequest = QueryCirculatingSupplyRequest;

      var QueryCirculatingSupplyResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryCirculatingSupplyResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryCirculatingSupplyResponse);

        function QueryCirculatingSupplyResponse(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, QueryCirculatingSupplyResponse);
          _this9 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("circulating_supply" in data && data.circulating_supply != undefined) {
              _this9.circulating_supply = data.circulating_supply;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(QueryCirculatingSupplyResponse, [{
          key: "circulating_supply",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject2) {
            function toObject() {
              return _toObject2.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject2.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.circulating_supply != null) {
              data.circulating_supply = this.circulating_supply.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this10 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.circulating_supply !== undefined) writer.writeMessage(1, this.circulating_supply, function () {
              return _this10.circulating_supply.serialize(writer);
            });
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryCirculatingSupplyResponse({});

            if (data.circulating_supply != null) {
              message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.circulating_supply);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCirculatingSupplyResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.circulating_supply, function () {
                    return message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader);
                  });
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryCirculatingSupplyResponse.deserialize(bytes);
          }
        }]);
        return QueryCirculatingSupplyResponse;
      }(pb_1.Message);

      _v.QueryCirculatingSupplyResponse = QueryCirculatingSupplyResponse;

      var QueryInflationRateRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryInflationRateRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryInflationRateRequest);

        function QueryInflationRateRequest(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, QueryInflationRateRequest);
          _this11 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this11;
        }

        (0, _createClass2["default"])(QueryInflationRateRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryInflationRateRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryInflationRateRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryInflationRateRequest.deserialize(bytes);
          }
        }]);
        return QueryInflationRateRequest;
      }(pb_1.Message);

      _v.QueryInflationRateRequest = QueryInflationRateRequest;

      var QueryInflationRateResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryInflationRateResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryInflationRateResponse);

        function QueryInflationRateResponse(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryInflationRateResponse);
          _this12 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("inflation_rate" in data && data.inflation_rate != undefined) {
              _this12.inflation_rate = data.inflation_rate;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryInflationRateResponse, [{
          key: "inflation_rate",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.inflation_rate != null) {
              data.inflation_rate = this.inflation_rate;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.inflation_rate === "string" && this.inflation_rate.length) writer.writeString(1, this.inflation_rate);
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryInflationRateResponse({});

            if (data.inflation_rate != null) {
              message.inflation_rate = data.inflation_rate;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryInflationRateResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.inflation_rate = reader.readString();
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryInflationRateResponse.deserialize(bytes);
          }
        }]);
        return QueryInflationRateResponse;
      }(pb_1.Message);

      _v.QueryInflationRateResponse = QueryInflationRateResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this13 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this13;
        }

        (0, _createClass2["default"])(QueryParamsRequest, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryParamsRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryParamsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryParamsRequest.deserialize(bytes);
          }
        }]);
        return QueryParamsRequest;
      }(pb_1.Message);

      _v.QueryParamsRequest = QueryParamsRequest;

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this14 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this14.params = data.params;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.kynno.inflation.v1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject3) {
            function toObject() {
              return _toObject3.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject3.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this15 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this15.params.serialize(writer);
            });
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new QueryParamsResponse({});

            if (data.params != null) {
              message.params = dependency_4.kynno.inflation.v1.Params.fromObject(data.params);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryParamsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.params, function () {
                    return message.params = dependency_4.kynno.inflation.v1.Params.deserialize(reader);
                  });
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return QueryParamsResponse.deserialize(bytes);
          }
        }]);
        return QueryParamsResponse;
      }(pb_1.Message);

      _v.QueryParamsResponse = QueryParamsResponse;

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Period: {
          path: "/kynno.inflation.v1.Query/Period",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryPeriodRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryPeriodResponse.deserialize(new Uint8Array(bytes));
          }
        },
        EpochMintProvision: {
          path: "/kynno.inflation.v1.Query/EpochMintProvision",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryEpochMintProvisionRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryEpochMintProvisionResponse.deserialize(new Uint8Array(bytes));
          }
        },
        SkippedEpochs: {
          path: "/kynno.inflation.v1.Query/SkippedEpochs",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QuerySkippedEpochsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QuerySkippedEpochsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        CirculatingSupply: {
          path: "/kynno.inflation.v1.Query/CirculatingSupply",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryCirculatingSupplyRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryCirculatingSupplyResponse.deserialize(new Uint8Array(bytes));
          }
        },
        InflationRate: {
          path: "/kynno.inflation.v1.Query/InflationRate",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryInflationRateRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryInflationRateResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/kynno.inflation.v1.Query/Params",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryParamsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryParamsResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super13 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _this16;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this16 = _super13.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "Period", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Period", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "EpochMintProvision", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "EpochMintProvision", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "SkippedEpochs", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "SkippedEpochs", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "CirculatingSupply", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "CirculatingSupply", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "InflationRate", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "InflationRate", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this16), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this16), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          return _this16;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v.QueryClient = QueryClient;
    })(v1 || (v1 = _inflation.v1 || (_inflation.v1 = {})));
  })(inflation || (inflation = _kynno.inflation || (_kynno.inflation = {})));
})(kynno || (exports.kynno = kynno = {}));