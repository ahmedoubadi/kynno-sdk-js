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
      var Params = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Params, _pb_1$Message);

        var _super = _createSuper(Params);

        function Params(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Params);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("no_base_fee" in data && data.no_base_fee != undefined) {
              _this.no_base_fee = data.no_base_fee;
            }

            if ("base_fee_change_denominator" in data && data.base_fee_change_denominator != undefined) {
              _this.base_fee_change_denominator = data.base_fee_change_denominator;
            }

            if ("elasticity_multiplier" in data && data.elasticity_multiplier != undefined) {
              _this.elasticity_multiplier = data.elasticity_multiplier;
            }

            if ("enable_height" in data && data.enable_height != undefined) {
              _this.enable_height = data.enable_height;
            }

            if ("base_fee" in data && data.base_fee != undefined) {
              _this.base_fee = data.base_fee;
            }

            if ("min_gas_price" in data && data.min_gas_price != undefined) {
              _this.min_gas_price = data.min_gas_price;
            }

            if ("min_gas_multiplier" in data && data.min_gas_multiplier != undefined) {
              _this.min_gas_multiplier = data.min_gas_multiplier;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Params, [{
          key: "no_base_fee",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "base_fee_change_denominator",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "elasticity_multiplier",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "enable_height",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "base_fee",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "min_gas_price",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "min_gas_multiplier",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.no_base_fee != null) {
              data.no_base_fee = this.no_base_fee;
            }

            if (this.base_fee_change_denominator != null) {
              data.base_fee_change_denominator = this.base_fee_change_denominator;
            }

            if (this.elasticity_multiplier != null) {
              data.elasticity_multiplier = this.elasticity_multiplier;
            }

            if (this.enable_height != null) {
              data.enable_height = this.enable_height;
            }

            if (this.base_fee != null) {
              data.base_fee = this.base_fee;
            }

            if (this.min_gas_price != null) {
              data.min_gas_price = this.min_gas_price;
            }

            if (this.min_gas_multiplier != null) {
              data.min_gas_multiplier = this.min_gas_multiplier;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.no_base_fee !== undefined) writer.writeBool(1, this.no_base_fee);
            if (this.base_fee_change_denominator !== undefined) writer.writeUint32(2, this.base_fee_change_denominator);
            if (this.elasticity_multiplier !== undefined) writer.writeUint32(3, this.elasticity_multiplier);
            if (this.enable_height !== undefined) writer.writeInt64(5, this.enable_height);
            if (typeof this.base_fee === "string" && this.base_fee.length) writer.writeString(6, this.base_fee);
            if (typeof this.min_gas_price === "string" && this.min_gas_price.length) writer.writeString(7, this.min_gas_price);
            if (typeof this.min_gas_multiplier === "string" && this.min_gas_multiplier.length) writer.writeString(8, this.min_gas_multiplier);
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

            if (data.no_base_fee != null) {
              message.no_base_fee = data.no_base_fee;
            }

            if (data.base_fee_change_denominator != null) {
              message.base_fee_change_denominator = data.base_fee_change_denominator;
            }

            if (data.elasticity_multiplier != null) {
              message.elasticity_multiplier = data.elasticity_multiplier;
            }

            if (data.enable_height != null) {
              message.enable_height = data.enable_height;
            }

            if (data.base_fee != null) {
              message.base_fee = data.base_fee;
            }

            if (data.min_gas_price != null) {
              message.min_gas_price = data.min_gas_price;
            }

            if (data.min_gas_multiplier != null) {
              message.min_gas_multiplier = data.min_gas_multiplier;
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
                  message.no_base_fee = reader.readBool();
                  break;

                case 2:
                  message.base_fee_change_denominator = reader.readUint32();
                  break;

                case 3:
                  message.elasticity_multiplier = reader.readUint32();
                  break;

                case 5:
                  message.enable_height = reader.readInt64();
                  break;

                case 6:
                  message.base_fee = reader.readString();
                  break;

                case 7:
                  message.min_gas_price = reader.readString();
                  break;

                case 8:
                  message.min_gas_multiplier = reader.readString();
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

      _v.Params = Params;
    })(v1 || (v1 = _feemarket.v1 || (_feemarket.v1 = {})));
  })(feemarket || (feemarket = _ethermint.feemarket || (_ethermint.feemarket = {})));
})(ethermint || (exports.ethermint = ethermint = {}));