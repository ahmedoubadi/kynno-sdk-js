"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_3 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var bank;

  (function (_bank) {
    var v1beta1;

    (function (_v1beta) {
      var Params = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Params, _pb_1$Message);

        var _super = _createSuper(Params);

        function Params(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Params);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("send_enabled" in data && data.send_enabled != undefined) {
              _this.send_enabled = data.send_enabled;
            }

            if ("default_send_enabled" in data && data.default_send_enabled != undefined) {
              _this.default_send_enabled = data.default_send_enabled;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Params, [{
          key: "send_enabled",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, SendEnabled, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "default_send_enabled",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
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

            if (this.send_enabled != null) {
              data.send_enabled = this.send_enabled.map(function (item) {
                return item.toObject();
              });
            }

            if (this.default_send_enabled != null) {
              data.default_send_enabled = this.default_send_enabled;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.send_enabled !== undefined) writer.writeRepeatedMessage(1, this.send_enabled, function (item) {
              return item.serialize(writer);
            });
            if (this.default_send_enabled !== undefined) writer.writeBool(2, this.default_send_enabled);
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
            var message = new Params({});

            if (data.send_enabled != null) {
              message.send_enabled = data.send_enabled.map(function (item) {
                return SendEnabled.fromObject(item);
              });
            }

            if (data.default_send_enabled != null) {
              message.default_send_enabled = data.default_send_enabled;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Params();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.send_enabled, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, SendEnabled.deserialize(reader), SendEnabled);
                  });
                  break;

                case 2:
                  message.default_send_enabled = reader.readBool();
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
            return Params.deserialize(bytes);
          }
        }]);
        return Params;
      }(pb_1.Message);

      _v1beta.Params = Params;

      var SendEnabled = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(SendEnabled, _pb_1$Message2);

        var _super2 = _createSuper(SendEnabled);

        function SendEnabled(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, SendEnabled);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this2.denom = data.denom;
            }

            if ("enabled" in data && data.enabled != undefined) {
              _this2.enabled = data.enabled;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(SendEnabled, [{
          key: "denom",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "enabled",
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

            if (this.denom != null) {
              data.denom = this.denom;
            }

            if (this.enabled != null) {
              data.enabled = this.enabled;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
            if (this.enabled !== undefined) writer.writeBool(2, this.enabled);
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
            var message = new SendEnabled({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            if (data.enabled != null) {
              message.enabled = data.enabled;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SendEnabled();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.denom = reader.readString();
                  break;

                case 2:
                  message.enabled = reader.readBool();
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
            return SendEnabled.deserialize(bytes);
          }
        }]);
        return SendEnabled;
      }(pb_1.Message);

      _v1beta.SendEnabled = SendEnabled;

      var Input = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(Input, _pb_1$Message3);

        var _super3 = _createSuper(Input);

        function Input(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Input);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this3.address = data.address;
            }

            if ("coins" in data && data.coins != undefined) {
              _this3.coins = data.coins;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Input, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "coins",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.coins != null) {
              data.coins = this.coins.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.coins !== undefined) writer.writeRepeatedMessage(2, this.coins, function (item) {
              return item.serialize(writer);
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
            var message = new Input({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.coins != null) {
              message.coins = data.coins.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Input();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.coins, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin);
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
            return Input.deserialize(bytes);
          }
        }]);
        return Input;
      }(pb_1.Message);

      _v1beta.Input = Input;

      var Output = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(Output, _pb_1$Message4);

        var _super4 = _createSuper(Output);

        function Output(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, Output);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this4.address = data.address;
            }

            if ("coins" in data && data.coins != undefined) {
              _this4.coins = data.coins;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(Output, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "coins",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.coins != null) {
              data.coins = this.coins.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.coins !== undefined) writer.writeRepeatedMessage(2, this.coins, function (item) {
              return item.serialize(writer);
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
            var message = new Output({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.coins != null) {
              message.coins = data.coins.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Output();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.coins, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin);
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
            return Output.deserialize(bytes);
          }
        }]);
        return Output;
      }(pb_1.Message);

      _v1beta.Output = Output;

      var Supply = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(Supply, _pb_1$Message5);

        var _super5 = _createSuper(Supply);

        function Supply(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, Supply);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("total" in data && data.total != undefined) {
              _this5.total = data.total;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(Supply, [{
          key: "total",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.total != null) {
              data.total = this.total.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.total !== undefined) writer.writeRepeatedMessage(1, this.total, function (item) {
              return item.serialize(writer);
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
            var message = new Supply({});

            if (data.total != null) {
              message.total = data.total.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Supply();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.total, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin);
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
            return Supply.deserialize(bytes);
          }
        }]);
        return Supply;
      }(pb_1.Message);

      _v1beta.Supply = Supply;

      var DenomUnit = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(DenomUnit, _pb_1$Message6);

        var _super6 = _createSuper(DenomUnit);

        function DenomUnit(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, DenomUnit);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this6.denom = data.denom;
            }

            if ("exponent" in data && data.exponent != undefined) {
              _this6.exponent = data.exponent;
            }

            if ("aliases" in data && data.aliases != undefined) {
              _this6.aliases = data.aliases;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(DenomUnit, [{
          key: "denom",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "exponent",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "aliases",
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

            if (this.denom != null) {
              data.denom = this.denom;
            }

            if (this.exponent != null) {
              data.exponent = this.exponent;
            }

            if (this.aliases != null) {
              data.aliases = this.aliases;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
            if (this.exponent !== undefined) writer.writeUint32(2, this.exponent);
            if (this.aliases !== undefined) writer.writeRepeatedString(3, this.aliases);
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
            var message = new DenomUnit({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            if (data.exponent != null) {
              message.exponent = data.exponent;
            }

            if (data.aliases != null) {
              message.aliases = data.aliases;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DenomUnit();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.denom = reader.readString();
                  break;

                case 2:
                  message.exponent = reader.readUint32();
                  break;

                case 3:
                  pb_1.Message.addToRepeatedField(message, 3, reader.readString());
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
            return DenomUnit.deserialize(bytes);
          }
        }]);
        return DenomUnit;
      }(pb_1.Message);

      _v1beta.DenomUnit = DenomUnit;

      var Metadata = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(Metadata, _pb_1$Message7);

        var _super7 = _createSuper(Metadata);

        function Metadata(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, Metadata);
          _this7 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("description" in data && data.description != undefined) {
              _this7.description = data.description;
            }

            if ("denom_units" in data && data.denom_units != undefined) {
              _this7.denom_units = data.denom_units;
            }

            if ("base" in data && data.base != undefined) {
              _this7.base = data.base;
            }

            if ("display" in data && data.display != undefined) {
              _this7.display = data.display;
            }

            if ("name" in data && data.name != undefined) {
              _this7.name = data.name;
            }

            if ("symbol" in data && data.symbol != undefined) {
              _this7.symbol = data.symbol;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(Metadata, [{
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "denom_units",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, DenomUnit, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "base",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "display",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "name",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "symbol",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
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

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.denom_units != null) {
              data.denom_units = this.denom_units.map(function (item) {
                return item.toObject();
              });
            }

            if (this.base != null) {
              data.base = this.base;
            }

            if (this.display != null) {
              data.display = this.display;
            }

            if (this.name != null) {
              data.name = this.name;
            }

            if (this.symbol != null) {
              data.symbol = this.symbol;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.description === "string" && this.description.length) writer.writeString(1, this.description);
            if (this.denom_units !== undefined) writer.writeRepeatedMessage(2, this.denom_units, function (item) {
              return item.serialize(writer);
            });
            if (typeof this.base === "string" && this.base.length) writer.writeString(3, this.base);
            if (typeof this.display === "string" && this.display.length) writer.writeString(4, this.display);
            if (typeof this.name === "string" && this.name.length) writer.writeString(5, this.name);
            if (typeof this.symbol === "string" && this.symbol.length) writer.writeString(6, this.symbol);
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
            var message = new Metadata({});

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.denom_units != null) {
              message.denom_units = data.denom_units.map(function (item) {
                return DenomUnit.fromObject(item);
              });
            }

            if (data.base != null) {
              message.base = data.base;
            }

            if (data.display != null) {
              message.display = data.display;
            }

            if (data.name != null) {
              message.name = data.name;
            }

            if (data.symbol != null) {
              message.symbol = data.symbol;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Metadata();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.description = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.denom_units, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, DenomUnit.deserialize(reader), DenomUnit);
                  });
                  break;

                case 3:
                  message.base = reader.readString();
                  break;

                case 4:
                  message.display = reader.readString();
                  break;

                case 5:
                  message.name = reader.readString();
                  break;

                case 6:
                  message.symbol = reader.readString();
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
            return Metadata.deserialize(bytes);
          }
        }]);
        return Metadata;
      }(pb_1.Message);

      _v1beta.Metadata = Metadata;
    })(v1beta1 || (v1beta1 = _bank.v1beta1 || (_bank.v1beta1 = {})));
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
})(cosmos || (exports.cosmos = cosmos = {}));