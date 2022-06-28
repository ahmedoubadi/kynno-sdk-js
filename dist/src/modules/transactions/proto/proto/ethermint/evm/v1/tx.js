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

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_5 = _interopRequireWildcard(require("./evm"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

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
      var MsgEthereumTx = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgEthereumTx, _pb_1$Message);

        var _super = _createSuper(MsgEthereumTx);

        function MsgEthereumTx(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgEthereumTx);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("data" in data && data.data != undefined) {
              _this.data = data.data;
            }

            if ("size" in data && data.size != undefined) {
              _this.size = data.size;
            }

            if ("hash" in data && data.hash != undefined) {
              _this.hash = data.hash;
            }

            if ("from" in data && data.from != undefined) {
              _this.from = data.from;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgEthereumTx, [{
          key: "data",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "size",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "hash",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "from",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
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

            if (this.data != null) {
              data.data = this.data.toObject();
            }

            if (this.size != null) {
              data.size = this.size;
            }

            if (this.hash != null) {
              data.hash = this.hash;
            }

            if (this.from != null) {
              data.from = this.from;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.data !== undefined) writer.writeMessage(1, this.data, function () {
              return _this2.data.serialize(writer);
            });
            if (this.size !== undefined) writer.writeDouble(2, this.size);
            if (typeof this.hash === "string" && this.hash.length) writer.writeString(3, this.hash);
            if (typeof this.from === "string" && this.from.length) writer.writeString(4, this.from);
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
            var message = new MsgEthereumTx({});

            if (data.data != null) {
              message.data = dependency_3.google.protobuf.Any.fromObject(data.data);
            }

            if (data.size != null) {
              message.size = data.size;
            }

            if (data.hash != null) {
              message.hash = data.hash;
            }

            if (data.from != null) {
              message.from = data.from;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgEthereumTx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.data, function () {
                    return message.data = dependency_3.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 2:
                  message.size = reader.readDouble();
                  break;

                case 3:
                  message.hash = reader.readString();
                  break;

                case 4:
                  message.from = reader.readString();
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
            return MsgEthereumTx.deserialize(bytes);
          }
        }]);
        return MsgEthereumTx;
      }(pb_1.Message);

      _v.MsgEthereumTx = MsgEthereumTx;

      var LegacyTx = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(LegacyTx, _pb_1$Message2);

        var _super2 = _createSuper(LegacyTx);

        function LegacyTx(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, LegacyTx);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("nonce" in data && data.nonce != undefined) {
              _this3.nonce = data.nonce;
            }

            if ("gas_price" in data && data.gas_price != undefined) {
              _this3.gas_price = data.gas_price;
            }

            if ("gas" in data && data.gas != undefined) {
              _this3.gas = data.gas;
            }

            if ("to" in data && data.to != undefined) {
              _this3.to = data.to;
            }

            if ("value" in data && data.value != undefined) {
              _this3.value = data.value;
            }

            if ("data" in data && data.data != undefined) {
              _this3.data = data.data;
            }

            if ("v" in data && data.v != undefined) {
              _this3.v = data.v;
            }

            if ("r" in data && data.r != undefined) {
              _this3.r = data.r;
            }

            if ("s" in data && data.s != undefined) {
              _this3.s = data.s;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(LegacyTx, [{
          key: "nonce",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "gas_price",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "gas",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "to",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "value",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "data",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "v",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "r",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "s",
          get: function get() {
            return pb_1.Message.getField(this, 9);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 9, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.nonce != null) {
              data.nonce = this.nonce;
            }

            if (this.gas_price != null) {
              data.gas_price = this.gas_price;
            }

            if (this.gas != null) {
              data.gas = this.gas;
            }

            if (this.to != null) {
              data.to = this.to;
            }

            if (this.value != null) {
              data.value = this.value;
            }

            if (this.data != null) {
              data.data = this.data;
            }

            if (this.v != null) {
              data.v = this.v;
            }

            if (this.r != null) {
              data.r = this.r;
            }

            if (this.s != null) {
              data.s = this.s;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.nonce !== undefined) writer.writeUint64(1, this.nonce);
            if (typeof this.gas_price === "string" && this.gas_price.length) writer.writeString(2, this.gas_price);
            if (this.gas !== undefined) writer.writeUint64(3, this.gas);
            if (typeof this.to === "string" && this.to.length) writer.writeString(4, this.to);
            if (typeof this.value === "string" && this.value.length) writer.writeString(5, this.value);
            if (this.data !== undefined) writer.writeBytes(6, this.data);
            if (this.v !== undefined) writer.writeBytes(7, this.v);
            if (this.r !== undefined) writer.writeBytes(8, this.r);
            if (this.s !== undefined) writer.writeBytes(9, this.s);
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
            var message = new LegacyTx({});

            if (data.nonce != null) {
              message.nonce = data.nonce;
            }

            if (data.gas_price != null) {
              message.gas_price = data.gas_price;
            }

            if (data.gas != null) {
              message.gas = data.gas;
            }

            if (data.to != null) {
              message.to = data.to;
            }

            if (data.value != null) {
              message.value = data.value;
            }

            if (data.data != null) {
              message.data = data.data;
            }

            if (data.v != null) {
              message.v = data.v;
            }

            if (data.r != null) {
              message.r = data.r;
            }

            if (data.s != null) {
              message.s = data.s;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new LegacyTx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.nonce = reader.readUint64();
                  break;

                case 2:
                  message.gas_price = reader.readString();
                  break;

                case 3:
                  message.gas = reader.readUint64();
                  break;

                case 4:
                  message.to = reader.readString();
                  break;

                case 5:
                  message.value = reader.readString();
                  break;

                case 6:
                  message.data = reader.readBytes();
                  break;

                case 7:
                  message.v = reader.readBytes();
                  break;

                case 8:
                  message.r = reader.readBytes();
                  break;

                case 9:
                  message.s = reader.readBytes();
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
            return LegacyTx.deserialize(bytes);
          }
        }]);
        return LegacyTx;
      }(pb_1.Message);

      _v.LegacyTx = LegacyTx;

      var AccessListTx = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(AccessListTx, _pb_1$Message3);

        var _super3 = _createSuper(AccessListTx);

        function AccessListTx(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, AccessListTx);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [8], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("chain_id" in data && data.chain_id != undefined) {
              _this4.chain_id = data.chain_id;
            }

            if ("nonce" in data && data.nonce != undefined) {
              _this4.nonce = data.nonce;
            }

            if ("gas_price" in data && data.gas_price != undefined) {
              _this4.gas_price = data.gas_price;
            }

            if ("gas" in data && data.gas != undefined) {
              _this4.gas = data.gas;
            }

            if ("to" in data && data.to != undefined) {
              _this4.to = data.to;
            }

            if ("value" in data && data.value != undefined) {
              _this4.value = data.value;
            }

            if ("data" in data && data.data != undefined) {
              _this4.data = data.data;
            }

            if ("accesses" in data && data.accesses != undefined) {
              _this4.accesses = data.accesses;
            }

            if ("v" in data && data.v != undefined) {
              _this4.v = data.v;
            }

            if ("r" in data && data.r != undefined) {
              _this4.r = data.r;
            }

            if ("s" in data && data.s != undefined) {
              _this4.s = data.s;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(AccessListTx, [{
          key: "chain_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "nonce",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "gas_price",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "gas",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "to",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "value",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "data",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "accesses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.AccessTuple, 8);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
          }
        }, {
          key: "v",
          get: function get() {
            return pb_1.Message.getField(this, 9);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 9, value);
          }
        }, {
          key: "r",
          get: function get() {
            return pb_1.Message.getField(this, 10);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 10, value);
          }
        }, {
          key: "s",
          get: function get() {
            return pb_1.Message.getField(this, 11);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 11, value);
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

            if (this.chain_id != null) {
              data.chain_id = this.chain_id;
            }

            if (this.nonce != null) {
              data.nonce = this.nonce;
            }

            if (this.gas_price != null) {
              data.gas_price = this.gas_price;
            }

            if (this.gas != null) {
              data.gas = this.gas;
            }

            if (this.to != null) {
              data.to = this.to;
            }

            if (this.value != null) {
              data.value = this.value;
            }

            if (this.data != null) {
              data.data = this.data;
            }

            if (this.accesses != null) {
              data.accesses = this.accesses.map(function (item) {
                return item.toObject();
              });
            }

            if (this.v != null) {
              data.v = this.v;
            }

            if (this.r != null) {
              data.r = this.r;
            }

            if (this.s != null) {
              data.s = this.s;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(1, this.chain_id);
            if (this.nonce !== undefined) writer.writeUint64(2, this.nonce);
            if (typeof this.gas_price === "string" && this.gas_price.length) writer.writeString(3, this.gas_price);
            if (this.gas !== undefined) writer.writeUint64(4, this.gas);
            if (typeof this.to === "string" && this.to.length) writer.writeString(5, this.to);
            if (typeof this.value === "string" && this.value.length) writer.writeString(6, this.value);
            if (this.data !== undefined) writer.writeBytes(7, this.data);
            if (this.accesses !== undefined) writer.writeRepeatedMessage(8, this.accesses, function (item) {
              return item.serialize(writer);
            });
            if (this.v !== undefined) writer.writeBytes(9, this.v);
            if (this.r !== undefined) writer.writeBytes(10, this.r);
            if (this.s !== undefined) writer.writeBytes(11, this.s);
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
            var message = new AccessListTx({});

            if (data.chain_id != null) {
              message.chain_id = data.chain_id;
            }

            if (data.nonce != null) {
              message.nonce = data.nonce;
            }

            if (data.gas_price != null) {
              message.gas_price = data.gas_price;
            }

            if (data.gas != null) {
              message.gas = data.gas;
            }

            if (data.to != null) {
              message.to = data.to;
            }

            if (data.value != null) {
              message.value = data.value;
            }

            if (data.data != null) {
              message.data = data.data;
            }

            if (data.accesses != null) {
              message.accesses = data.accesses.map(function (item) {
                return dependency_5.ethermint.evm.v1.AccessTuple.fromObject(item);
              });
            }

            if (data.v != null) {
              message.v = data.v;
            }

            if (data.r != null) {
              message.r = data.r;
            }

            if (data.s != null) {
              message.s = data.s;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new AccessListTx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.chain_id = reader.readString();
                  break;

                case 2:
                  message.nonce = reader.readUint64();
                  break;

                case 3:
                  message.gas_price = reader.readString();
                  break;

                case 4:
                  message.gas = reader.readUint64();
                  break;

                case 5:
                  message.to = reader.readString();
                  break;

                case 6:
                  message.value = reader.readString();
                  break;

                case 7:
                  message.data = reader.readBytes();
                  break;

                case 8:
                  reader.readMessage(message.accesses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_5.ethermint.evm.v1.AccessTuple.deserialize(reader), dependency_5.ethermint.evm.v1.AccessTuple);
                  });
                  break;

                case 9:
                  message.v = reader.readBytes();
                  break;

                case 10:
                  message.r = reader.readBytes();
                  break;

                case 11:
                  message.s = reader.readBytes();
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
            return AccessListTx.deserialize(bytes);
          }
        }]);
        return AccessListTx;
      }(pb_1.Message);

      _v.AccessListTx = AccessListTx;

      var DynamicFeeTx = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(DynamicFeeTx, _pb_1$Message4);

        var _super4 = _createSuper(DynamicFeeTx);

        function DynamicFeeTx(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, DynamicFeeTx);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [9], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("chain_id" in data && data.chain_id != undefined) {
              _this5.chain_id = data.chain_id;
            }

            if ("nonce" in data && data.nonce != undefined) {
              _this5.nonce = data.nonce;
            }

            if ("gas_tip_cap" in data && data.gas_tip_cap != undefined) {
              _this5.gas_tip_cap = data.gas_tip_cap;
            }

            if ("gas_fee_cap" in data && data.gas_fee_cap != undefined) {
              _this5.gas_fee_cap = data.gas_fee_cap;
            }

            if ("gas" in data && data.gas != undefined) {
              _this5.gas = data.gas;
            }

            if ("to" in data && data.to != undefined) {
              _this5.to = data.to;
            }

            if ("value" in data && data.value != undefined) {
              _this5.value = data.value;
            }

            if ("data" in data && data.data != undefined) {
              _this5.data = data.data;
            }

            if ("accesses" in data && data.accesses != undefined) {
              _this5.accesses = data.accesses;
            }

            if ("v" in data && data.v != undefined) {
              _this5.v = data.v;
            }

            if ("r" in data && data.r != undefined) {
              _this5.r = data.r;
            }

            if ("s" in data && data.s != undefined) {
              _this5.s = data.s;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(DynamicFeeTx, [{
          key: "chain_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "nonce",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "gas_tip_cap",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "gas_fee_cap",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "gas",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "to",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "value",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "data",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "accesses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.AccessTuple, 9);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 9, value);
          }
        }, {
          key: "v",
          get: function get() {
            return pb_1.Message.getField(this, 10);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 10, value);
          }
        }, {
          key: "r",
          get: function get() {
            return pb_1.Message.getField(this, 11);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 11, value);
          }
        }, {
          key: "s",
          get: function get() {
            return pb_1.Message.getField(this, 12);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 12, value);
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

            if (this.chain_id != null) {
              data.chain_id = this.chain_id;
            }

            if (this.nonce != null) {
              data.nonce = this.nonce;
            }

            if (this.gas_tip_cap != null) {
              data.gas_tip_cap = this.gas_tip_cap;
            }

            if (this.gas_fee_cap != null) {
              data.gas_fee_cap = this.gas_fee_cap;
            }

            if (this.gas != null) {
              data.gas = this.gas;
            }

            if (this.to != null) {
              data.to = this.to;
            }

            if (this.value != null) {
              data.value = this.value;
            }

            if (this.data != null) {
              data.data = this.data;
            }

            if (this.accesses != null) {
              data.accesses = this.accesses.map(function (item) {
                return item.toObject();
              });
            }

            if (this.v != null) {
              data.v = this.v;
            }

            if (this.r != null) {
              data.r = this.r;
            }

            if (this.s != null) {
              data.s = this.s;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(1, this.chain_id);
            if (this.nonce !== undefined) writer.writeUint64(2, this.nonce);
            if (typeof this.gas_tip_cap === "string" && this.gas_tip_cap.length) writer.writeString(3, this.gas_tip_cap);
            if (typeof this.gas_fee_cap === "string" && this.gas_fee_cap.length) writer.writeString(4, this.gas_fee_cap);
            if (this.gas !== undefined) writer.writeUint64(5, this.gas);
            if (typeof this.to === "string" && this.to.length) writer.writeString(6, this.to);
            if (typeof this.value === "string" && this.value.length) writer.writeString(7, this.value);
            if (this.data !== undefined) writer.writeBytes(8, this.data);
            if (this.accesses !== undefined) writer.writeRepeatedMessage(9, this.accesses, function (item) {
              return item.serialize(writer);
            });
            if (this.v !== undefined) writer.writeBytes(10, this.v);
            if (this.r !== undefined) writer.writeBytes(11, this.r);
            if (this.s !== undefined) writer.writeBytes(12, this.s);
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
            var message = new DynamicFeeTx({});

            if (data.chain_id != null) {
              message.chain_id = data.chain_id;
            }

            if (data.nonce != null) {
              message.nonce = data.nonce;
            }

            if (data.gas_tip_cap != null) {
              message.gas_tip_cap = data.gas_tip_cap;
            }

            if (data.gas_fee_cap != null) {
              message.gas_fee_cap = data.gas_fee_cap;
            }

            if (data.gas != null) {
              message.gas = data.gas;
            }

            if (data.to != null) {
              message.to = data.to;
            }

            if (data.value != null) {
              message.value = data.value;
            }

            if (data.data != null) {
              message.data = data.data;
            }

            if (data.accesses != null) {
              message.accesses = data.accesses.map(function (item) {
                return dependency_5.ethermint.evm.v1.AccessTuple.fromObject(item);
              });
            }

            if (data.v != null) {
              message.v = data.v;
            }

            if (data.r != null) {
              message.r = data.r;
            }

            if (data.s != null) {
              message.s = data.s;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DynamicFeeTx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.chain_id = reader.readString();
                  break;

                case 2:
                  message.nonce = reader.readUint64();
                  break;

                case 3:
                  message.gas_tip_cap = reader.readString();
                  break;

                case 4:
                  message.gas_fee_cap = reader.readString();
                  break;

                case 5:
                  message.gas = reader.readUint64();
                  break;

                case 6:
                  message.to = reader.readString();
                  break;

                case 7:
                  message.value = reader.readString();
                  break;

                case 8:
                  message.data = reader.readBytes();
                  break;

                case 9:
                  reader.readMessage(message.accesses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_5.ethermint.evm.v1.AccessTuple.deserialize(reader), dependency_5.ethermint.evm.v1.AccessTuple);
                  });
                  break;

                case 10:
                  message.v = reader.readBytes();
                  break;

                case 11:
                  message.r = reader.readBytes();
                  break;

                case 12:
                  message.s = reader.readBytes();
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
            return DynamicFeeTx.deserialize(bytes);
          }
        }]);
        return DynamicFeeTx;
      }(pb_1.Message);

      _v.DynamicFeeTx = DynamicFeeTx;

      var ExtensionOptionsEthereumTx = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(ExtensionOptionsEthereumTx, _pb_1$Message5);

        var _super5 = _createSuper(ExtensionOptionsEthereumTx);

        function ExtensionOptionsEthereumTx(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, ExtensionOptionsEthereumTx);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(ExtensionOptionsEthereumTx, [{
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
            var message = new ExtensionOptionsEthereumTx({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ExtensionOptionsEthereumTx();

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
            return ExtensionOptionsEthereumTx.deserialize(bytes);
          }
        }]);
        return ExtensionOptionsEthereumTx;
      }(pb_1.Message);

      _v.ExtensionOptionsEthereumTx = ExtensionOptionsEthereumTx;

      var MsgEthereumTxResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgEthereumTxResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgEthereumTxResponse);

        function MsgEthereumTxResponse(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, MsgEthereumTxResponse);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hash" in data && data.hash != undefined) {
              _this7.hash = data.hash;
            }

            if ("logs" in data && data.logs != undefined) {
              _this7.logs = data.logs;
            }

            if ("ret" in data && data.ret != undefined) {
              _this7.ret = data.ret;
            }

            if ("vm_error" in data && data.vm_error != undefined) {
              _this7.vm_error = data.vm_error;
            }

            if ("gas_used" in data && data.gas_used != undefined) {
              _this7.gas_used = data.gas_used;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(MsgEthereumTxResponse, [{
          key: "hash",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "logs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.ethermint.evm.v1.Log, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "ret",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "vm_error",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "gas_used",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
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

            if (this.hash != null) {
              data.hash = this.hash;
            }

            if (this.logs != null) {
              data.logs = this.logs.map(function (item) {
                return item.toObject();
              });
            }

            if (this.ret != null) {
              data.ret = this.ret;
            }

            if (this.vm_error != null) {
              data.vm_error = this.vm_error;
            }

            if (this.gas_used != null) {
              data.gas_used = this.gas_used;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.hash === "string" && this.hash.length) writer.writeString(1, this.hash);
            if (this.logs !== undefined) writer.writeRepeatedMessage(2, this.logs, function (item) {
              return item.serialize(writer);
            });
            if (this.ret !== undefined) writer.writeBytes(3, this.ret);
            if (typeof this.vm_error === "string" && this.vm_error.length) writer.writeString(4, this.vm_error);
            if (this.gas_used !== undefined) writer.writeUint64(5, this.gas_used);
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
            var message = new MsgEthereumTxResponse({});

            if (data.hash != null) {
              message.hash = data.hash;
            }

            if (data.logs != null) {
              message.logs = data.logs.map(function (item) {
                return dependency_5.ethermint.evm.v1.Log.fromObject(item);
              });
            }

            if (data.ret != null) {
              message.ret = data.ret;
            }

            if (data.vm_error != null) {
              message.vm_error = data.vm_error;
            }

            if (data.gas_used != null) {
              message.gas_used = data.gas_used;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgEthereumTxResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.hash = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.logs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.ethermint.evm.v1.Log.deserialize(reader), dependency_5.ethermint.evm.v1.Log);
                  });
                  break;

                case 3:
                  message.ret = reader.readBytes();
                  break;

                case 4:
                  message.vm_error = reader.readString();
                  break;

                case 5:
                  message.gas_used = reader.readUint64();
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
            return MsgEthereumTxResponse.deserialize(bytes);
          }
        }]);
        return MsgEthereumTxResponse;
      }(pb_1.Message);

      _v.MsgEthereumTxResponse = MsgEthereumTxResponse;
    })(v1 || (v1 = _evm.v1 || (_evm.v1 = {})));
  })(evm || (evm = _ethermint.evm || (_ethermint.evm = {})));
})(ethermint || (exports.ethermint = ethermint = {}));