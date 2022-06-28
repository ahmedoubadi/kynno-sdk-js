"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ethermint = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_3 = _interopRequireWildcard(require("./feemarket"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ethermint;
exports.ethermint = ethermint;

(function (_ethermint) {
  var feemarket;

  (function (_feemarket) {
    var v1;

    (function (_v) {
      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message);

        var _super = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this;
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

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this2.params = data.params;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.ethermint.feemarket.v1.Params, 1);
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

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this3.params.serialize(writer);
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
              message.params = dependency_3.ethermint.feemarket.v1.Params.fromObject(data.params);
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
                    return message.params = dependency_3.ethermint.feemarket.v1.Params.deserialize(reader);
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

      var QueryBaseFeeRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryBaseFeeRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryBaseFeeRequest);

        function QueryBaseFeeRequest(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryBaseFeeRequest);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this4;
        }

        (0, _createClass2["default"])(QueryBaseFeeRequest, [{
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
            var message = new QueryBaseFeeRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBaseFeeRequest();

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
            return QueryBaseFeeRequest.deserialize(bytes);
          }
        }]);
        return QueryBaseFeeRequest;
      }(pb_1.Message);

      _v.QueryBaseFeeRequest = QueryBaseFeeRequest;

      var QueryBaseFeeResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryBaseFeeResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryBaseFeeResponse);

        function QueryBaseFeeResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryBaseFeeResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_fee" in data && data.base_fee != undefined) {
              _this5.base_fee = data.base_fee;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryBaseFeeResponse, [{
          key: "base_fee",
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

            if (this.base_fee != null) {
              data.base_fee = this.base_fee;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.base_fee === "string" && this.base_fee.length) writer.writeString(1, this.base_fee);
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
            var message = new QueryBaseFeeResponse({});

            if (data.base_fee != null) {
              message.base_fee = data.base_fee;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBaseFeeResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.base_fee = reader.readString();
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
            return QueryBaseFeeResponse.deserialize(bytes);
          }
        }]);
        return QueryBaseFeeResponse;
      }(pb_1.Message);

      _v.QueryBaseFeeResponse = QueryBaseFeeResponse;

      var QueryBlockGasRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryBlockGasRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryBlockGasRequest);

        function QueryBlockGasRequest(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryBlockGasRequest);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(QueryBlockGasRequest, [{
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
            var message = new QueryBlockGasRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBlockGasRequest();

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
            return QueryBlockGasRequest.deserialize(bytes);
          }
        }]);
        return QueryBlockGasRequest;
      }(pb_1.Message);

      _v.QueryBlockGasRequest = QueryBlockGasRequest;

      var QueryBlockGasResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryBlockGasResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryBlockGasResponse);

        function QueryBlockGasResponse(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, QueryBlockGasResponse);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("gas" in data && data.gas != undefined) {
              _this7.gas = data.gas;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(QueryBlockGasResponse, [{
          key: "gas",
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

            if (this.gas != null) {
              data.gas = this.gas;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.gas !== undefined) writer.writeInt64(1, this.gas);
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
            var message = new QueryBlockGasResponse({});

            if (data.gas != null) {
              message.gas = data.gas;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBlockGasResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.gas = reader.readInt64();
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
            return QueryBlockGasResponse.deserialize(bytes);
          }
        }]);
        return QueryBlockGasResponse;
      }(pb_1.Message);

      _v.QueryBlockGasResponse = QueryBlockGasResponse;
    })(v1 || (v1 = _feemarket.v1 || (_feemarket.v1 = {})));
  })(feemarket || (feemarket = _ethermint.feemarket || (_ethermint.feemarket = {})));
})(ethermint || (exports.ethermint = ethermint = {}));