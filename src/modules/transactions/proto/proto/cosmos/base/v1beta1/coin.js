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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var v1beta1;

    (function (_v1beta) {
      var Coin = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Coin, _pb_1$Message);

        var _super = _createSuper(Coin);

        function Coin(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Coin);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this.denom = data.denom;
            }

            if ("amount" in data && data.amount != undefined) {
              _this.amount = data.amount;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Coin, [{
          key: "denom",
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.denom != null) {
              data.denom = this.denom;
            }

            if (this.amount != null) {
              data.amount = this.amount;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
            if (typeof this.amount === "string" && this.amount.length) writer.writeString(2, this.amount);
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
            var message = new Coin({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            if (data.amount != null) {
              message.amount = data.amount;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Coin();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.denom = reader.readString();
                  break;

                case 2:
                  message.amount = reader.readString();
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
            return Coin.deserialize(bytes);
          }
        }]);
        return Coin;
      }(pb_1.Message);

      _v1beta.Coin = Coin;

      var DecCoin = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(DecCoin, _pb_1$Message2);

        var _super2 = _createSuper(DecCoin);

        function DecCoin(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, DecCoin);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this2.denom = data.denom;
            }

            if ("amount" in data && data.amount != undefined) {
              _this2.amount = data.amount;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(DecCoin, [{
          key: "denom",
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.denom != null) {
              data.denom = this.denom;
            }

            if (this.amount != null) {
              data.amount = this.amount;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
            if (typeof this.amount === "string" && this.amount.length) writer.writeString(2, this.amount);
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
            var message = new DecCoin({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            if (data.amount != null) {
              message.amount = data.amount;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DecCoin();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.denom = reader.readString();
                  break;

                case 2:
                  message.amount = reader.readString();
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
            return DecCoin.deserialize(bytes);
          }
        }]);
        return DecCoin;
      }(pb_1.Message);

      _v1beta.DecCoin = DecCoin;

      var IntProto = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(IntProto, _pb_1$Message3);

        var _super3 = _createSuper(IntProto);

        function IntProto(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, IntProto);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("int" in data && data["int"] != undefined) {
              _this3["int"] = data["int"];
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(IntProto, [{
          key: "int",
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

            if (this["int"] != null) {
              data["int"] = this["int"];
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this["int"] === "string" && this["int"].length) writer.writeString(1, this["int"]);
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
            var message = new IntProto({});

            if (data["int"] != null) {
              message["int"] = data["int"];
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new IntProto();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message["int"] = reader.readString();
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
            return IntProto.deserialize(bytes);
          }
        }]);
        return IntProto;
      }(pb_1.Message);

      _v1beta.IntProto = IntProto;

      var DecProto = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(DecProto, _pb_1$Message4);

        var _super4 = _createSuper(DecProto);

        function DecProto(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, DecProto);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("dec" in data && data.dec != undefined) {
              _this4.dec = data.dec;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(DecProto, [{
          key: "dec",
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

            if (this.dec != null) {
              data.dec = this.dec;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.dec === "string" && this.dec.length) writer.writeString(1, this.dec);
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
            var message = new DecProto({});

            if (data.dec != null) {
              message.dec = data.dec;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DecProto();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.dec = reader.readString();
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
            return DecProto.deserialize(bytes);
          }
        }]);
        return DecProto;
      }(pb_1.Message);

      _v1beta.DecProto = DecProto;
    })(v1beta1 || (v1beta1 = _base.v1beta1 || (_base.v1beta1 = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));