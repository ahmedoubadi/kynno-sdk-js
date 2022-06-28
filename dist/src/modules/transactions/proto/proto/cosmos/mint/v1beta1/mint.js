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
  var mint;

  (function (_mint) {
    var v1beta1;

    (function (_v1beta) {
      var Minter = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Minter, _pb_1$Message);

        var _super = _createSuper(Minter);

        function Minter(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Minter);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("inflation" in data && data.inflation != undefined) {
              _this.inflation = data.inflation;
            }

            if ("annual_provisions" in data && data.annual_provisions != undefined) {
              _this.annual_provisions = data.annual_provisions;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Minter, [{
          key: "inflation",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "annual_provisions",
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

            if (this.inflation != null) {
              data.inflation = this.inflation;
            }

            if (this.annual_provisions != null) {
              data.annual_provisions = this.annual_provisions;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.inflation === "string" && this.inflation.length) writer.writeString(1, this.inflation);
            if (typeof this.annual_provisions === "string" && this.annual_provisions.length) writer.writeString(2, this.annual_provisions);
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
            var message = new Minter({});

            if (data.inflation != null) {
              message.inflation = data.inflation;
            }

            if (data.annual_provisions != null) {
              message.annual_provisions = data.annual_provisions;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Minter();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.inflation = reader.readString();
                  break;

                case 2:
                  message.annual_provisions = reader.readString();
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
            return Minter.deserialize(bytes);
          }
        }]);
        return Minter;
      }(pb_1.Message);

      _v1beta.Minter = Minter;

      var Params = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Params, _pb_1$Message2);

        var _super2 = _createSuper(Params);

        function Params(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, Params);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("mint_denom" in data && data.mint_denom != undefined) {
              _this2.mint_denom = data.mint_denom;
            }

            if ("inflation_rate_change" in data && data.inflation_rate_change != undefined) {
              _this2.inflation_rate_change = data.inflation_rate_change;
            }

            if ("inflation_max" in data && data.inflation_max != undefined) {
              _this2.inflation_max = data.inflation_max;
            }

            if ("inflation_min" in data && data.inflation_min != undefined) {
              _this2.inflation_min = data.inflation_min;
            }

            if ("goal_bonded" in data && data.goal_bonded != undefined) {
              _this2.goal_bonded = data.goal_bonded;
            }

            if ("blocks_per_year" in data && data.blocks_per_year != undefined) {
              _this2.blocks_per_year = data.blocks_per_year;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(Params, [{
          key: "mint_denom",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "inflation_rate_change",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "inflation_max",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "inflation_min",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "goal_bonded",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "blocks_per_year",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.mint_denom != null) {
              data.mint_denom = this.mint_denom;
            }

            if (this.inflation_rate_change != null) {
              data.inflation_rate_change = this.inflation_rate_change;
            }

            if (this.inflation_max != null) {
              data.inflation_max = this.inflation_max;
            }

            if (this.inflation_min != null) {
              data.inflation_min = this.inflation_min;
            }

            if (this.goal_bonded != null) {
              data.goal_bonded = this.goal_bonded;
            }

            if (this.blocks_per_year != null) {
              data.blocks_per_year = this.blocks_per_year;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.mint_denom === "string" && this.mint_denom.length) writer.writeString(1, this.mint_denom);
            if (typeof this.inflation_rate_change === "string" && this.inflation_rate_change.length) writer.writeString(2, this.inflation_rate_change);
            if (typeof this.inflation_max === "string" && this.inflation_max.length) writer.writeString(3, this.inflation_max);
            if (typeof this.inflation_min === "string" && this.inflation_min.length) writer.writeString(4, this.inflation_min);
            if (typeof this.goal_bonded === "string" && this.goal_bonded.length) writer.writeString(5, this.goal_bonded);
            if (this.blocks_per_year !== undefined) writer.writeUint64(6, this.blocks_per_year);
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

            if (data.mint_denom != null) {
              message.mint_denom = data.mint_denom;
            }

            if (data.inflation_rate_change != null) {
              message.inflation_rate_change = data.inflation_rate_change;
            }

            if (data.inflation_max != null) {
              message.inflation_max = data.inflation_max;
            }

            if (data.inflation_min != null) {
              message.inflation_min = data.inflation_min;
            }

            if (data.goal_bonded != null) {
              message.goal_bonded = data.goal_bonded;
            }

            if (data.blocks_per_year != null) {
              message.blocks_per_year = data.blocks_per_year;
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
                  message.mint_denom = reader.readString();
                  break;

                case 2:
                  message.inflation_rate_change = reader.readString();
                  break;

                case 3:
                  message.inflation_max = reader.readString();
                  break;

                case 4:
                  message.inflation_min = reader.readString();
                  break;

                case 5:
                  message.goal_bonded = reader.readString();
                  break;

                case 6:
                  message.blocks_per_year = reader.readUint64();
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
    })(v1beta1 || (v1beta1 = _mint.v1beta1 || (_mint.v1beta1 = {})));
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
})(cosmos || (exports.cosmos = cosmos = {}));