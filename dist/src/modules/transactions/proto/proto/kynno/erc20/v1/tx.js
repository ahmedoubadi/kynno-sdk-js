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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var erc20;

  (function (_erc) {
    var v1;

    (function (_v) {
      var MsgConvertCoin = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgConvertCoin, _pb_1$Message);

        var _super = _createSuper(MsgConvertCoin);

        function MsgConvertCoin(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgConvertCoin);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("coin" in data && data.coin != undefined) {
              _this.coin = data.coin;
            }

            if ("receiver" in data && data.receiver != undefined) {
              _this.receiver = data.receiver;
            }

            if ("sender" in data && data.sender != undefined) {
              _this.sender = data.sender;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgConvertCoin, [{
          key: "coin",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "receiver",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "sender",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
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

            if (this.coin != null) {
              data.coin = this.coin.toObject();
            }

            if (this.receiver != null) {
              data.receiver = this.receiver;
            }

            if (this.sender != null) {
              data.sender = this.sender;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.coin !== undefined) writer.writeMessage(1, this.coin, function () {
              return _this2.coin.serialize(writer);
            });
            if (typeof this.receiver === "string" && this.receiver.length) writer.writeString(2, this.receiver);
            if (typeof this.sender === "string" && this.sender.length) writer.writeString(3, this.sender);
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
            var message = new MsgConvertCoin({});

            if (data.coin != null) {
              message.coin = dependency_3.cosmos.base.v1beta1.Coin.fromObject(data.coin);
            }

            if (data.receiver != null) {
              message.receiver = data.receiver;
            }

            if (data.sender != null) {
              message.sender = data.sender;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgConvertCoin();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.coin, function () {
                    return message.coin = dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader);
                  });
                  break;

                case 2:
                  message.receiver = reader.readString();
                  break;

                case 3:
                  message.sender = reader.readString();
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
            return MsgConvertCoin.deserialize(bytes);
          }
        }]);
        return MsgConvertCoin;
      }(pb_1.Message);

      _v.MsgConvertCoin = MsgConvertCoin;

      var MsgConvertCoinResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgConvertCoinResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgConvertCoinResponse);

        function MsgConvertCoinResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgConvertCoinResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this3;
        }

        (0, _createClass2["default"])(MsgConvertCoinResponse, [{
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
            var message = new MsgConvertCoinResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgConvertCoinResponse();

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
            return MsgConvertCoinResponse.deserialize(bytes);
          }
        }]);
        return MsgConvertCoinResponse;
      }(pb_1.Message);

      _v.MsgConvertCoinResponse = MsgConvertCoinResponse;

      var MsgConvertERC20 = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgConvertERC20, _pb_1$Message3);

        var _super3 = _createSuper(MsgConvertERC20);

        function MsgConvertERC20(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgConvertERC20);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this4.contract_address = data.contract_address;
            }

            if ("amount" in data && data.amount != undefined) {
              _this4.amount = data.amount;
            }

            if ("receiver" in data && data.receiver != undefined) {
              _this4.receiver = data.receiver;
            }

            if ("sender" in data && data.sender != undefined) {
              _this4.sender = data.sender;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(MsgConvertERC20, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "receiver",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "sender",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.amount != null) {
              data.amount = this.amount;
            }

            if (this.receiver != null) {
              data.receiver = this.receiver;
            }

            if (this.sender != null) {
              data.sender = this.sender;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.amount === "string" && this.amount.length) writer.writeString(2, this.amount);
            if (typeof this.receiver === "string" && this.receiver.length) writer.writeString(3, this.receiver);
            if (typeof this.sender === "string" && this.sender.length) writer.writeString(4, this.sender);
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
            var message = new MsgConvertERC20({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.amount != null) {
              message.amount = data.amount;
            }

            if (data.receiver != null) {
              message.receiver = data.receiver;
            }

            if (data.sender != null) {
              message.sender = data.sender;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgConvertERC20();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.amount = reader.readString();
                  break;

                case 3:
                  message.receiver = reader.readString();
                  break;

                case 4:
                  message.sender = reader.readString();
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
            return MsgConvertERC20.deserialize(bytes);
          }
        }]);
        return MsgConvertERC20;
      }(pb_1.Message);

      _v.MsgConvertERC20 = MsgConvertERC20;

      var MsgConvertERC20Response = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgConvertERC20Response, _pb_1$Message4);

        var _super4 = _createSuper(MsgConvertERC20Response);

        function MsgConvertERC20Response(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgConvertERC20Response);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this5;
        }

        (0, _createClass2["default"])(MsgConvertERC20Response, [{
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
            var message = new MsgConvertERC20Response({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgConvertERC20Response();

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
            return MsgConvertERC20Response.deserialize(bytes);
          }
        }]);
        return MsgConvertERC20Response;
      }(pb_1.Message);

      _v.MsgConvertERC20Response = MsgConvertERC20Response;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        ConvertCoin: {
          path: "/kynno.erc20.v1.Msg/ConvertCoin",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgConvertCoin.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgConvertCoinResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ConvertERC20: {
          path: "/kynno.erc20.v1.Msg/ConvertERC20",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgConvertERC20.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgConvertERC20Response.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super5 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _this6;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this6 = _super5.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "ConvertCoin", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this6), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConvertCoin", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "ConvertERC20", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this6), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConvertERC20", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          return _this6;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v.MsgClient = MsgClient;
    })(v1 || (v1 = _erc.v1 || (_erc.v1 = {})));
  })(erc20 || (erc20 = _kynno.erc20 || (_kynno.erc20 = {})));
})(kynno || (exports.kynno = kynno = {}));