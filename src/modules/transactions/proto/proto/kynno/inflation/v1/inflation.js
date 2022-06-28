"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

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

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var inflation;

  (function (_inflation) {
    var v1;

    (function (_v) {
      var InflationDistribution = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(InflationDistribution, _pb_1$Message);

        var _super = _createSuper(InflationDistribution);

        function InflationDistribution(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, InflationDistribution);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("staking_rewards" in data && data.staking_rewards != undefined) {
              _this.staking_rewards = data.staking_rewards;
            }

            if ("usage_incentives" in data && data.usage_incentives != undefined) {
              _this.usage_incentives = data.usage_incentives;
            }

            if ("community_pool" in data && data.community_pool != undefined) {
              _this.community_pool = data.community_pool;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(InflationDistribution, [{
          key: "staking_rewards",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "usage_incentives",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "community_pool",
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

            if (this.staking_rewards != null) {
              data.staking_rewards = this.staking_rewards;
            }

            if (this.usage_incentives != null) {
              data.usage_incentives = this.usage_incentives;
            }

            if (this.community_pool != null) {
              data.community_pool = this.community_pool;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.staking_rewards === "string" && this.staking_rewards.length) writer.writeString(1, this.staking_rewards);
            if (typeof this.usage_incentives === "string" && this.usage_incentives.length) writer.writeString(2, this.usage_incentives);
            if (typeof this.community_pool === "string" && this.community_pool.length) writer.writeString(3, this.community_pool);
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
            var message = new InflationDistribution({});

            if (data.staking_rewards != null) {
              message.staking_rewards = data.staking_rewards;
            }

            if (data.usage_incentives != null) {
              message.usage_incentives = data.usage_incentives;
            }

            if (data.community_pool != null) {
              message.community_pool = data.community_pool;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new InflationDistribution();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.staking_rewards = reader.readString();
                  break;

                case 2:
                  message.usage_incentives = reader.readString();
                  break;

                case 3:
                  message.community_pool = reader.readString();
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
            return InflationDistribution.deserialize(bytes);
          }
        }]);
        return InflationDistribution;
      }(pb_1.Message);

      _v.InflationDistribution = InflationDistribution;

      var ExponentialCalculation = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ExponentialCalculation, _pb_1$Message2);

        var _super2 = _createSuper(ExponentialCalculation);

        function ExponentialCalculation(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, ExponentialCalculation);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("a" in data && data.a != undefined) {
              _this2.a = data.a;
            }

            if ("r" in data && data.r != undefined) {
              _this2.r = data.r;
            }

            if ("c" in data && data.c != undefined) {
              _this2.c = data.c;
            }

            if ("bonding_target" in data && data.bonding_target != undefined) {
              _this2.bonding_target = data.bonding_target;
            }

            if ("max_variance" in data && data.max_variance != undefined) {
              _this2.max_variance = data.max_variance;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(ExponentialCalculation, [{
          key: "a",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "r",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "c",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "bonding_target",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "max_variance",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.a != null) {
              data.a = this.a;
            }

            if (this.r != null) {
              data.r = this.r;
            }

            if (this.c != null) {
              data.c = this.c;
            }

            if (this.bonding_target != null) {
              data.bonding_target = this.bonding_target;
            }

            if (this.max_variance != null) {
              data.max_variance = this.max_variance;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.a === "string" && this.a.length) writer.writeString(1, this.a);
            if (typeof this.r === "string" && this.r.length) writer.writeString(2, this.r);
            if (typeof this.c === "string" && this.c.length) writer.writeString(3, this.c);
            if (typeof this.bonding_target === "string" && this.bonding_target.length) writer.writeString(4, this.bonding_target);
            if (typeof this.max_variance === "string" && this.max_variance.length) writer.writeString(5, this.max_variance);
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
            var message = new ExponentialCalculation({});

            if (data.a != null) {
              message.a = data.a;
            }

            if (data.r != null) {
              message.r = data.r;
            }

            if (data.c != null) {
              message.c = data.c;
            }

            if (data.bonding_target != null) {
              message.bonding_target = data.bonding_target;
            }

            if (data.max_variance != null) {
              message.max_variance = data.max_variance;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ExponentialCalculation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.a = reader.readString();
                  break;

                case 2:
                  message.r = reader.readString();
                  break;

                case 3:
                  message.c = reader.readString();
                  break;

                case 4:
                  message.bonding_target = reader.readString();
                  break;

                case 5:
                  message.max_variance = reader.readString();
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
            return ExponentialCalculation.deserialize(bytes);
          }
        }]);
        return ExponentialCalculation;
      }(pb_1.Message);

      _v.ExponentialCalculation = ExponentialCalculation;
    })(v1 || (v1 = _inflation.v1 || (_inflation.v1 = {})));
  })(inflation || (inflation = _kynno.inflation || (_kynno.inflation = {})));
})(kynno || (exports.kynno = kynno = {}));