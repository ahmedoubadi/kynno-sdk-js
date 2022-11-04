"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ethermint = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../../cosmos/base/query/v1beta1/pagination"));

var dependency_4 = _interopRequireWildcard(require("./evm"));

var dependency_5 = _interopRequireWildcard(require("./tx"));

var dependency_6 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ethermint;
exports.ethermint = ethermint;

(function (_ethermint) {
  var evm;

  (function (_evm) {
    var v1;

    (function (_v) {
      var QueryAccountRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryAccountRequest, _pb_1$Message);

        var _super = _createSuper(QueryAccountRequest);

        function QueryAccountRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryAccountRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this.address = data.address;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryAccountRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
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
            var message = new QueryAccountRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAccountRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QueryAccountRequest.deserialize(bytes);
          }
        }]);
        return QueryAccountRequest;
      }(pb_1.Message);

      _v.QueryAccountRequest = QueryAccountRequest;

      var QueryAccountResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryAccountResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryAccountResponse);

        function QueryAccountResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryAccountResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("balance" in data && data.balance != undefined) {
              _this2.balance = data.balance;
            }

            if ("code_hash" in data && data.code_hash != undefined) {
              _this2.code_hash = data.code_hash;
            }

            if ("nonce" in data && data.nonce != undefined) {
              _this2.nonce = data.nonce;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryAccountResponse, [{
          key: "balance",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "code_hash",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "nonce",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.balance != null) {
              data.balance = this.balance;
            }

            if (this.code_hash != null) {
              data.code_hash = this.code_hash;
            }

            if (this.nonce != null) {
              data.nonce = this.nonce;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.balance === "string" && this.balance.length) writer.writeString(1, this.balance);
            if (typeof this.code_hash === "string" && this.code_hash.length) writer.writeString(2, this.code_hash);
            if (this.nonce !== undefined) writer.writeUint64(3, this.nonce);
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
            var message = new QueryAccountResponse({});

            if (data.balance != null) {
              message.balance = data.balance;
            }

            if (data.code_hash != null) {
              message.code_hash = data.code_hash;
            }

            if (data.nonce != null) {
              message.nonce = data.nonce;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAccountResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.balance = reader.readString();
                  break;

                case 2:
                  message.code_hash = reader.readString();
                  break;

                case 3:
                  message.nonce = reader.readUint64();
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
            return QueryAccountResponse.deserialize(bytes);
          }
        }]);
        return QueryAccountResponse;
      }(pb_1.Message);

      _v.QueryAccountResponse = QueryAccountResponse;

      var QueryCosmosAccountRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryCosmosAccountRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryCosmosAccountRequest);

        function QueryCosmosAccountRequest(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryCosmosAccountRequest);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this3.address = data.address;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryCosmosAccountRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
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
            var message = new QueryCosmosAccountRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCosmosAccountRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QueryCosmosAccountRequest.deserialize(bytes);
          }
        }]);
        return QueryCosmosAccountRequest;
      }(pb_1.Message);

      _v.QueryCosmosAccountRequest = QueryCosmosAccountRequest;

      var QueryCosmosAccountResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryCosmosAccountResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryCosmosAccountResponse);

        function QueryCosmosAccountResponse(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryCosmosAccountResponse);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("cosmos_address" in data && data.cosmos_address != undefined) {
              _this4.cosmos_address = data.cosmos_address;
            }

            if ("sequence" in data && data.sequence != undefined) {
              _this4.sequence = data.sequence;
            }

            if ("account_number" in data && data.account_number != undefined) {
              _this4.account_number = data.account_number;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryCosmosAccountResponse, [{
          key: "cosmos_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "sequence",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "account_number",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.cosmos_address != null) {
              data.cosmos_address = this.cosmos_address;
            }

            if (this.sequence != null) {
              data.sequence = this.sequence;
            }

            if (this.account_number != null) {
              data.account_number = this.account_number;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.cosmos_address === "string" && this.cosmos_address.length) writer.writeString(1, this.cosmos_address);
            if (this.sequence !== undefined) writer.writeUint64(2, this.sequence);
            if (this.account_number !== undefined) writer.writeUint64(3, this.account_number);
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
            var message = new QueryCosmosAccountResponse({});

            if (data.cosmos_address != null) {
              message.cosmos_address = data.cosmos_address;
            }

            if (data.sequence != null) {
              message.sequence = data.sequence;
            }

            if (data.account_number != null) {
              message.account_number = data.account_number;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCosmosAccountResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.cosmos_address = reader.readString();
                  break;

                case 2:
                  message.sequence = reader.readUint64();
                  break;

                case 3:
                  message.account_number = reader.readUint64();
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
            return QueryCosmosAccountResponse.deserialize(bytes);
          }
        }]);
        return QueryCosmosAccountResponse;
      }(pb_1.Message);

      _v.QueryCosmosAccountResponse = QueryCosmosAccountResponse;

      var QueryValidatorAccountRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryValidatorAccountRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryValidatorAccountRequest);

        function QueryValidatorAccountRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryValidatorAccountRequest);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("cons_address" in data && data.cons_address != undefined) {
              _this5.cons_address = data.cons_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryValidatorAccountRequest, [{
          key: "cons_address",
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

            if (this.cons_address != null) {
              data.cons_address = this.cons_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.cons_address === "string" && this.cons_address.length) writer.writeString(1, this.cons_address);
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
            var message = new QueryValidatorAccountRequest({});

            if (data.cons_address != null) {
              message.cons_address = data.cons_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorAccountRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.cons_address = reader.readString();
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
            return QueryValidatorAccountRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorAccountRequest;
      }(pb_1.Message);

      _v.QueryValidatorAccountRequest = QueryValidatorAccountRequest;

      var QueryValidatorAccountResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryValidatorAccountResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryValidatorAccountResponse);

        function QueryValidatorAccountResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryValidatorAccountResponse);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("account_address" in data && data.account_address != undefined) {
              _this6.account_address = data.account_address;
            }

            if ("sequence" in data && data.sequence != undefined) {
              _this6.sequence = data.sequence;
            }

            if ("account_number" in data && data.account_number != undefined) {
              _this6.account_number = data.account_number;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryValidatorAccountResponse, [{
          key: "account_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "sequence",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "account_number",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.account_address != null) {
              data.account_address = this.account_address;
            }

            if (this.sequence != null) {
              data.sequence = this.sequence;
            }

            if (this.account_number != null) {
              data.account_number = this.account_number;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.account_address === "string" && this.account_address.length) writer.writeString(1, this.account_address);
            if (this.sequence !== undefined) writer.writeUint64(2, this.sequence);
            if (this.account_number !== undefined) writer.writeUint64(3, this.account_number);
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
            var message = new QueryValidatorAccountResponse({});

            if (data.account_address != null) {
              message.account_address = data.account_address;
            }

            if (data.sequence != null) {
              message.sequence = data.sequence;
            }

            if (data.account_number != null) {
              message.account_number = data.account_number;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorAccountResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.account_address = reader.readString();
                  break;

                case 2:
                  message.sequence = reader.readUint64();
                  break;

                case 3:
                  message.account_number = reader.readUint64();
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
            return QueryValidatorAccountResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorAccountResponse;
      }(pb_1.Message);

      _v.QueryValidatorAccountResponse = QueryValidatorAccountResponse;

      var QueryBalanceRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryBalanceRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryBalanceRequest);

        function QueryBalanceRequest(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, QueryBalanceRequest);
          _this7 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this7.address = data.address;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(QueryBalanceRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
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
            var message = new QueryBalanceRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBalanceRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QueryBalanceRequest.deserialize(bytes);
          }
        }]);
        return QueryBalanceRequest;
      }(pb_1.Message);

      _v.QueryBalanceRequest = QueryBalanceRequest;

      var QueryBalanceResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryBalanceResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryBalanceResponse);

        function QueryBalanceResponse(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryBalanceResponse);
          _this8 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("balance" in data && data.balance != undefined) {
              _this8.balance = data.balance;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryBalanceResponse, [{
          key: "balance",
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

            if (this.balance != null) {
              data.balance = this.balance;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.balance === "string" && this.balance.length) writer.writeString(1, this.balance);
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
            var message = new QueryBalanceResponse({});

            if (data.balance != null) {
              message.balance = data.balance;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBalanceResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.balance = reader.readString();
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
            return QueryBalanceResponse.deserialize(bytes);
          }
        }]);
        return QueryBalanceResponse;
      }(pb_1.Message);

      _v.QueryBalanceResponse = QueryBalanceResponse;

      var QueryStorageRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryStorageRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryStorageRequest);

        function QueryStorageRequest(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, QueryStorageRequest);
          _this9 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this9.address = data.address;
            }

            if ("key" in data && data.key != undefined) {
              _this9.key = data.key;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(QueryStorageRequest, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "key",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.key != null) {
              data.key = this.key;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (typeof this.key === "string" && this.key.length) writer.writeString(2, this.key);
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
            var message = new QueryStorageRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.key != null) {
              message.key = data.key;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryStorageRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  message.key = reader.readString();
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
            return QueryStorageRequest.deserialize(bytes);
          }
        }]);
        return QueryStorageRequest;
      }(pb_1.Message);

      _v.QueryStorageRequest = QueryStorageRequest;

      var QueryStorageResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryStorageResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryStorageResponse);

        function QueryStorageResponse(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, QueryStorageResponse);
          _this10 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("value" in data && data.value != undefined) {
              _this10.value = data.value;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(QueryStorageResponse, [{
          key: "value",
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

            if (this.value != null) {
              data.value = this.value;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.value === "string" && this.value.length) writer.writeString(1, this.value);
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
            var message = new QueryStorageResponse({});

            if (data.value != null) {
              message.value = data.value;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryStorageResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.value = reader.readString();
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
            return QueryStorageResponse.deserialize(bytes);
          }
        }]);
        return QueryStorageResponse;
      }(pb_1.Message);

      _v.QueryStorageResponse = QueryStorageResponse;

      var QueryCodeRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryCodeRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryCodeRequest);

        function QueryCodeRequest(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, QueryCodeRequest);
          _this11 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this11.address = data.address;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(QueryCodeRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
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
            var message = new QueryCodeRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCodeRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QueryCodeRequest.deserialize(bytes);
          }
        }]);
        return QueryCodeRequest;
      }(pb_1.Message);

      _v.QueryCodeRequest = QueryCodeRequest;

      var QueryCodeResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryCodeResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryCodeResponse);

        function QueryCodeResponse(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryCodeResponse);
          _this12 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("code" in data && data.code != undefined) {
              _this12.code = data.code;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryCodeResponse, [{
          key: "code",
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

            if (this.code != null) {
              data.code = this.code;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.code !== undefined) writer.writeBytes(1, this.code);
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
            var message = new QueryCodeResponse({});

            if (data.code != null) {
              message.code = data.code;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCodeResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.code = reader.readBytes();
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
            return QueryCodeResponse.deserialize(bytes);
          }
        }]);
        return QueryCodeResponse;
      }(pb_1.Message);

      _v.QueryCodeResponse = QueryCodeResponse;

      var QueryTxLogsRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryTxLogsRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryTxLogsRequest);

        function QueryTxLogsRequest(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryTxLogsRequest);
          _this13 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hash" in data && data.hash != undefined) {
              _this13.hash = data.hash;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this13.pagination = data.pagination;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(QueryTxLogsRequest, [{
          key: "hash",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.hash != null) {
              data.hash = this.hash;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this14 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.hash === "string" && this.hash.length) writer.writeString(1, this.hash);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this14.pagination.serialize(writer);
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
            var message = new QueryTxLogsRequest({});

            if (data.hash != null) {
              message.hash = data.hash;
            }

            if (data.pagination != null) {
              message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTxLogsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.hash = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
            return QueryTxLogsRequest.deserialize(bytes);
          }
        }]);
        return QueryTxLogsRequest;
      }(pb_1.Message);

      _v.QueryTxLogsRequest = QueryTxLogsRequest;

      var QueryTxLogsResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryTxLogsResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryTxLogsResponse);

        function QueryTxLogsResponse(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, QueryTxLogsResponse);
          _this15 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("logs" in data && data.logs != undefined) {
              _this15.logs = data.logs;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this15.pagination = data.pagination;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(QueryTxLogsResponse, [{
          key: "logs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ethermint.evm.v1.Log, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.logs != null) {
              data.logs = this.logs.map(function (item) {
                return item.toObject();
              });
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this16 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.logs !== undefined) writer.writeRepeatedMessage(1, this.logs, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this16.pagination.serialize(writer);
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
            var message = new QueryTxLogsResponse({});

            if (data.logs != null) {
              message.logs = data.logs.map(function (item) {
                return dependency_4.ethermint.evm.v1.Log.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTxLogsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.logs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.ethermint.evm.v1.Log.deserialize(reader), dependency_4.ethermint.evm.v1.Log);
                  });
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return QueryTxLogsResponse.deserialize(bytes);
          }
        }]);
        return QueryTxLogsResponse;
      }(pb_1.Message);

      _v.QueryTxLogsResponse = QueryTxLogsResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message15);

        var _super15 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this17 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this17;
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

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message16);

        var _super16 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this18;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this18 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this18.params = data.params;
            }
          }

          return _this18;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.Params, 1);
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
            var _this19 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this19.params.serialize(writer);
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
              message.params = dependency_4.ethermint.evm.v1.Params.fromObject(data.params);
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
                    return message.params = dependency_4.ethermint.evm.v1.Params.deserialize(reader);
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

      var EthCallRequest = /*#__PURE__*/function (_pb_1$Message17) {
        (0, _inherits2["default"])(EthCallRequest, _pb_1$Message17);

        var _super17 = _createSuper(EthCallRequest);

        function EthCallRequest(data) {
          var _this20;

          (0, _classCallCheck2["default"])(this, EthCallRequest);
          _this20 = _super17.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("args" in data && data.args != undefined) {
              _this20.args = data.args;
            }

            if ("gas_cap" in data && data.gas_cap != undefined) {
              _this20.gas_cap = data.gas_cap;
            }
          }

          return _this20;
        }

        (0, _createClass2["default"])(EthCallRequest, [{
          key: "args",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "gas_cap",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.args != null) {
              data.args = this.args;
            }

            if (this.gas_cap != null) {
              data.gas_cap = this.gas_cap;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.args !== undefined) writer.writeBytes(1, this.args);
            if (this.gas_cap !== undefined) writer.writeUint64(2, this.gas_cap);
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
            var message = new EthCallRequest({});

            if (data.args != null) {
              message.args = data.args;
            }

            if (data.gas_cap != null) {
              message.gas_cap = data.gas_cap;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EthCallRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.args = reader.readBytes();
                  break;

                case 2:
                  message.gas_cap = reader.readUint64();
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
            return EthCallRequest.deserialize(bytes);
          }
        }]);
        return EthCallRequest;
      }(pb_1.Message);

      _v.EthCallRequest = EthCallRequest;

      var EstimateGasResponse = /*#__PURE__*/function (_pb_1$Message18) {
        (0, _inherits2["default"])(EstimateGasResponse, _pb_1$Message18);

        var _super18 = _createSuper(EstimateGasResponse);

        function EstimateGasResponse(data) {
          var _this21;

          (0, _classCallCheck2["default"])(this, EstimateGasResponse);
          _this21 = _super18.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("gas" in data && data.gas != undefined) {
              _this21.gas = data.gas;
            }
          }

          return _this21;
        }

        (0, _createClass2["default"])(EstimateGasResponse, [{
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
            if (this.gas !== undefined) writer.writeUint64(1, this.gas);
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
            var message = new EstimateGasResponse({});

            if (data.gas != null) {
              message.gas = data.gas;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EstimateGasResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.gas = reader.readUint64();
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
            return EstimateGasResponse.deserialize(bytes);
          }
        }]);
        return EstimateGasResponse;
      }(pb_1.Message);

      _v.EstimateGasResponse = EstimateGasResponse;

      var QueryTraceTxRequest = /*#__PURE__*/function (_pb_1$Message19) {
        (0, _inherits2["default"])(QueryTraceTxRequest, _pb_1$Message19);

        var _super19 = _createSuper(QueryTraceTxRequest);

        function QueryTraceTxRequest(data) {
          var _this22;

          (0, _classCallCheck2["default"])(this, QueryTraceTxRequest);
          _this22 = _super19.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("msg" in data && data.msg != undefined) {
              _this22.msg = data.msg;
            }

            if ("trace_config" in data && data.trace_config != undefined) {
              _this22.trace_config = data.trace_config;
            }

            if ("predecessors" in data && data.predecessors != undefined) {
              _this22.predecessors = data.predecessors;
            }

            if ("block_number" in data && data.block_number != undefined) {
              _this22.block_number = data.block_number;
            }

            if ("block_hash" in data && data.block_hash != undefined) {
              _this22.block_hash = data.block_hash;
            }

            if ("block_time" in data && data.block_time != undefined) {
              _this22.block_time = data.block_time;
            }
          }

          return _this22;
        }

        (0, _createClass2["default"])(QueryTraceTxRequest, [{
          key: "msg",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "trace_config",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.TraceConfig, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "predecessors",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "block_number",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "block_hash",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "block_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Timestamp, 7);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 7, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject4) {
            function toObject() {
              return _toObject4.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject4.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.msg != null) {
              data.msg = this.msg.toObject();
            }

            if (this.trace_config != null) {
              data.trace_config = this.trace_config.toObject();
            }

            if (this.predecessors != null) {
              data.predecessors = this.predecessors.map(function (item) {
                return item.toObject();
              });
            }

            if (this.block_number != null) {
              data.block_number = this.block_number;
            }

            if (this.block_hash != null) {
              data.block_hash = this.block_hash;
            }

            if (this.block_time != null) {
              data.block_time = this.block_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this23 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.msg !== undefined) writer.writeMessage(1, this.msg, function () {
              return _this23.msg.serialize(writer);
            });
            if (this.trace_config !== undefined) writer.writeMessage(3, this.trace_config, function () {
              return _this23.trace_config.serialize(writer);
            });
            if (this.predecessors !== undefined) writer.writeRepeatedMessage(4, this.predecessors, function (item) {
              return item.serialize(writer);
            });
            if (this.block_number !== undefined) writer.writeInt64(5, this.block_number);
            if (typeof this.block_hash === "string" && this.block_hash.length) writer.writeString(6, this.block_hash);
            if (this.block_time !== undefined) writer.writeMessage(7, this.block_time, function () {
              return _this23.block_time.serialize(writer);
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
            var message = new QueryTraceTxRequest({});

            if (data.msg != null) {
              message.msg = dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(data.msg);
            }

            if (data.trace_config != null) {
              message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.fromObject(data.trace_config);
            }

            if (data.predecessors != null) {
              message.predecessors = data.predecessors.map(function (item) {
                return dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(item);
              });
            }

            if (data.block_number != null) {
              message.block_number = data.block_number;
            }

            if (data.block_hash != null) {
              message.block_hash = data.block_hash;
            }

            if (data.block_time != null) {
              message.block_time = dependency_6.google.protobuf.Timestamp.fromObject(data.block_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTraceTxRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.msg, function () {
                    return message.msg = dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.trace_config, function () {
                    return message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.predecessors, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader), dependency_5.ethermint.evm.v1.MsgEthereumTx);
                  });
                  break;

                case 5:
                  message.block_number = reader.readInt64();
                  break;

                case 6:
                  message.block_hash = reader.readString();
                  break;

                case 7:
                  reader.readMessage(message.block_time, function () {
                    return message.block_time = dependency_6.google.protobuf.Timestamp.deserialize(reader);
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
            return QueryTraceTxRequest.deserialize(bytes);
          }
        }]);
        return QueryTraceTxRequest;
      }(pb_1.Message);

      _v.QueryTraceTxRequest = QueryTraceTxRequest;

      var QueryTraceTxResponse = /*#__PURE__*/function (_pb_1$Message20) {
        (0, _inherits2["default"])(QueryTraceTxResponse, _pb_1$Message20);

        var _super20 = _createSuper(QueryTraceTxResponse);

        function QueryTraceTxResponse(data) {
          var _this24;

          (0, _classCallCheck2["default"])(this, QueryTraceTxResponse);
          _this24 = _super20.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("data" in data && data.data != undefined) {
              _this24.data = data.data;
            }
          }

          return _this24;
        }

        (0, _createClass2["default"])(QueryTraceTxResponse, [{
          key: "data",
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

            if (this.data != null) {
              data.data = this.data;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.data !== undefined) writer.writeBytes(1, this.data);
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
            var message = new QueryTraceTxResponse({});

            if (data.data != null) {
              message.data = data.data;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTraceTxResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.data = reader.readBytes();
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
            return QueryTraceTxResponse.deserialize(bytes);
          }
        }]);
        return QueryTraceTxResponse;
      }(pb_1.Message);

      _v.QueryTraceTxResponse = QueryTraceTxResponse;

      var QueryTraceBlockRequest = /*#__PURE__*/function (_pb_1$Message21) {
        (0, _inherits2["default"])(QueryTraceBlockRequest, _pb_1$Message21);

        var _super21 = _createSuper(QueryTraceBlockRequest);

        function QueryTraceBlockRequest(data) {
          var _this25;

          (0, _classCallCheck2["default"])(this, QueryTraceBlockRequest);
          _this25 = _super21.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("txs" in data && data.txs != undefined) {
              _this25.txs = data.txs;
            }

            if ("trace_config" in data && data.trace_config != undefined) {
              _this25.trace_config = data.trace_config;
            }

            if ("block_number" in data && data.block_number != undefined) {
              _this25.block_number = data.block_number;
            }

            if ("block_hash" in data && data.block_hash != undefined) {
              _this25.block_hash = data.block_hash;
            }

            if ("block_time" in data && data.block_time != undefined) {
              _this25.block_time = data.block_time;
            }
          }

          return _this25;
        }

        (0, _createClass2["default"])(QueryTraceBlockRequest, [{
          key: "txs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.MsgEthereumTx, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "trace_config",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.ethermint.evm.v1.TraceConfig, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "block_number",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "block_hash",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "block_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Timestamp, 7);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 7, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject5) {
            function toObject() {
              return _toObject5.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject5.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.txs != null) {
              data.txs = this.txs.map(function (item) {
                return item.toObject();
              });
            }

            if (this.trace_config != null) {
              data.trace_config = this.trace_config.toObject();
            }

            if (this.block_number != null) {
              data.block_number = this.block_number;
            }

            if (this.block_hash != null) {
              data.block_hash = this.block_hash;
            }

            if (this.block_time != null) {
              data.block_time = this.block_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this26 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.txs !== undefined) writer.writeRepeatedMessage(1, this.txs, function (item) {
              return item.serialize(writer);
            });
            if (this.trace_config !== undefined) writer.writeMessage(3, this.trace_config, function () {
              return _this26.trace_config.serialize(writer);
            });
            if (this.block_number !== undefined) writer.writeInt64(5, this.block_number);
            if (typeof this.block_hash === "string" && this.block_hash.length) writer.writeString(6, this.block_hash);
            if (this.block_time !== undefined) writer.writeMessage(7, this.block_time, function () {
              return _this26.block_time.serialize(writer);
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
            var message = new QueryTraceBlockRequest({});

            if (data.txs != null) {
              message.txs = data.txs.map(function (item) {
                return dependency_5.ethermint.evm.v1.MsgEthereumTx.fromObject(item);
              });
            }

            if (data.trace_config != null) {
              message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.fromObject(data.trace_config);
            }

            if (data.block_number != null) {
              message.block_number = data.block_number;
            }

            if (data.block_hash != null) {
              message.block_hash = data.block_hash;
            }

            if (data.block_time != null) {
              message.block_time = dependency_6.google.protobuf.Timestamp.fromObject(data.block_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTraceBlockRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.txs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.ethermint.evm.v1.MsgEthereumTx.deserialize(reader), dependency_5.ethermint.evm.v1.MsgEthereumTx);
                  });
                  break;

                case 3:
                  reader.readMessage(message.trace_config, function () {
                    return message.trace_config = dependency_4.ethermint.evm.v1.TraceConfig.deserialize(reader);
                  });
                  break;

                case 5:
                  message.block_number = reader.readInt64();
                  break;

                case 6:
                  message.block_hash = reader.readString();
                  break;

                case 7:
                  reader.readMessage(message.block_time, function () {
                    return message.block_time = dependency_6.google.protobuf.Timestamp.deserialize(reader);
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
            return QueryTraceBlockRequest.deserialize(bytes);
          }
        }]);
        return QueryTraceBlockRequest;
      }(pb_1.Message);

      _v.QueryTraceBlockRequest = QueryTraceBlockRequest;

      var QueryTraceBlockResponse = /*#__PURE__*/function (_pb_1$Message22) {
        (0, _inherits2["default"])(QueryTraceBlockResponse, _pb_1$Message22);

        var _super22 = _createSuper(QueryTraceBlockResponse);

        function QueryTraceBlockResponse(data) {
          var _this27;

          (0, _classCallCheck2["default"])(this, QueryTraceBlockResponse);
          _this27 = _super22.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("data" in data && data.data != undefined) {
              _this27.data = data.data;
            }
          }

          return _this27;
        }

        (0, _createClass2["default"])(QueryTraceBlockResponse, [{
          key: "data",
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

            if (this.data != null) {
              data.data = this.data;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.data !== undefined) writer.writeBytes(1, this.data);
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
            var message = new QueryTraceBlockResponse({});

            if (data.data != null) {
              message.data = data.data;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTraceBlockResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.data = reader.readBytes();
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
            return QueryTraceBlockResponse.deserialize(bytes);
          }
        }]);
        return QueryTraceBlockResponse;
      }(pb_1.Message);

      _v.QueryTraceBlockResponse = QueryTraceBlockResponse;

      var QueryBaseFeeRequest = /*#__PURE__*/function (_pb_1$Message23) {
        (0, _inherits2["default"])(QueryBaseFeeRequest, _pb_1$Message23);

        var _super23 = _createSuper(QueryBaseFeeRequest);

        function QueryBaseFeeRequest(data) {
          var _this28;

          (0, _classCallCheck2["default"])(this, QueryBaseFeeRequest);
          _this28 = _super23.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this28;
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

      var QueryBaseFeeResponse = /*#__PURE__*/function (_pb_1$Message24) {
        (0, _inherits2["default"])(QueryBaseFeeResponse, _pb_1$Message24);

        var _super24 = _createSuper(QueryBaseFeeResponse);

        function QueryBaseFeeResponse(data) {
          var _this29;

          (0, _classCallCheck2["default"])(this, QueryBaseFeeResponse);
          _this29 = _super24.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_fee" in data && data.base_fee != undefined) {
              _this29.base_fee = data.base_fee;
            }
          }

          return _this29;
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

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Account: {
          path: "/ethermint.evm.v1.Query/Account",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryAccountRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryAccountResponse.deserialize(new Uint8Array(bytes));
          }
        },
        CosmosAccount: {
          path: "/ethermint.evm.v1.Query/CosmosAccount",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryCosmosAccountRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryCosmosAccountResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ValidatorAccount: {
          path: "/ethermint.evm.v1.Query/ValidatorAccount",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorAccountRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorAccountResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Balance: {
          path: "/ethermint.evm.v1.Query/Balance",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryBalanceRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryBalanceResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Storage: {
          path: "/ethermint.evm.v1.Query/Storage",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryStorageRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryStorageResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Code: {
          path: "/ethermint.evm.v1.Query/Code",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryCodeRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryCodeResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/ethermint.evm.v1.Query/Params",
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
        },
        EthCall: {
          path: "/ethermint.evm.v1.Query/EthCall",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return EthCallRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return dependency_5.ethermint.evm.v1.MsgEthereumTxResponse.deserialize(new Uint8Array(bytes));
          }
        },
        EstimateGas: {
          path: "/ethermint.evm.v1.Query/EstimateGas",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return EthCallRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return EstimateGasResponse.deserialize(new Uint8Array(bytes));
          }
        },
        TraceTx: {
          path: "/ethermint.evm.v1.Query/TraceTx",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryTraceTxRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryTraceTxResponse.deserialize(new Uint8Array(bytes));
          }
        },
        TraceBlock: {
          path: "/ethermint.evm.v1.Query/TraceBlock",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryTraceBlockRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryTraceBlockResponse.deserialize(new Uint8Array(bytes));
          }
        },
        BaseFee: {
          path: "/ethermint.evm.v1.Query/BaseFee",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryBaseFeeRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryBaseFeeResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super25 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _thisSuper7, _thisSuper8, _thisSuper9, _thisSuper10, _thisSuper11, _thisSuper12, _this30;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this30 = _super25.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "Account", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Account", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "CosmosAccount", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "CosmosAccount", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "ValidatorAccount", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorAccount", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "Balance", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Balance", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "Storage", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Storage", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "Code", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Code", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper7 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper7).call(_thisSuper7, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "EthCall", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper8 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "EthCall", _thisSuper8).call(_thisSuper8, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "EstimateGas", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper9 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "EstimateGas", _thisSuper9).call(_thisSuper9, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "TraceTx", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper10 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "TraceTx", _thisSuper10).call(_thisSuper10, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "TraceBlock", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper11 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "TraceBlock", _thisSuper11).call(_thisSuper11, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this30), "BaseFee", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper12 = (0, _assertThisInitialized2["default"])(_this30), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "BaseFee", _thisSuper12).call(_thisSuper12, message, metadata, options, callback);
          });
          return _this30;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v.QueryClient = QueryClient;
    })(v1 || (v1 = _evm.v1 || (_evm.v1 = {})));
  })(evm || (evm = _ethermint.evm || (_ethermint.evm = {})));
})(ethermint || (exports.ethermint = ethermint = {}));