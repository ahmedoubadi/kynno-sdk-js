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

var dependency_2 = _interopRequireWildcard(require("./inflation"));

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
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("period" in data && data.period != undefined) {
              _this.period = data.period;
            }

            if ("epoch_identifier" in data && data.epoch_identifier != undefined) {
              _this.epoch_identifier = data.epoch_identifier;
            }

            if ("epochs_per_period" in data && data.epochs_per_period != undefined) {
              _this.epochs_per_period = data.epochs_per_period;
            }

            if ("skipped_epochs" in data && data.skipped_epochs != undefined) {
              _this.skipped_epochs = data.skipped_epochs;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "period",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "epoch_identifier",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "epochs_per_period",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "skipped_epochs",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
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

            if (this.period != null) {
              data.period = this.period;
            }

            if (this.epoch_identifier != null) {
              data.epoch_identifier = this.epoch_identifier;
            }

            if (this.epochs_per_period != null) {
              data.epochs_per_period = this.epochs_per_period;
            }

            if (this.skipped_epochs != null) {
              data.skipped_epochs = this.skipped_epochs;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this2.params.serialize(writer);
            });
            if (this.period !== undefined) writer.writeUint64(2, this.period);
            if (typeof this.epoch_identifier === "string" && this.epoch_identifier.length) writer.writeString(3, this.epoch_identifier);
            if (this.epochs_per_period !== undefined) writer.writeInt64(4, this.epochs_per_period);
            if (this.skipped_epochs !== undefined) writer.writeUint64(5, this.skipped_epochs);
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
            var message = new GenesisState({});

            if (data.params != null) {
              message.params = Params.fromObject(data.params);
            }

            if (data.period != null) {
              message.period = data.period;
            }

            if (data.epoch_identifier != null) {
              message.epoch_identifier = data.epoch_identifier;
            }

            if (data.epochs_per_period != null) {
              message.epochs_per_period = data.epochs_per_period;
            }

            if (data.skipped_epochs != null) {
              message.skipped_epochs = data.skipped_epochs;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenesisState();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.params, function () {
                    return message.params = Params.deserialize(reader);
                  });
                  break;

                case 2:
                  message.period = reader.readUint64();
                  break;

                case 3:
                  message.epoch_identifier = reader.readString();
                  break;

                case 4:
                  message.epochs_per_period = reader.readInt64();
                  break;

                case 5:
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
            return GenesisState.deserialize(bytes);
          }
        }]);
        return GenesisState;
      }(pb_1.Message);

      _v.GenesisState = GenesisState;

      var Params = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Params, _pb_1$Message2);

        var _super2 = _createSuper(Params);

        function Params(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Params);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("mint_denom" in data && data.mint_denom != undefined) {
              _this3.mint_denom = data.mint_denom;
            }

            if ("exponential_calculation" in data && data.exponential_calculation != undefined) {
              _this3.exponential_calculation = data.exponential_calculation;
            }

            if ("inflation_distribution" in data && data.inflation_distribution != undefined) {
              _this3.inflation_distribution = data.inflation_distribution;
            }

            if ("enable_inflation" in data && data.enable_inflation != undefined) {
              _this3.enable_inflation = data.enable_inflation;
            }
          }

          return _this3;
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
          key: "exponential_calculation",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.kynno.inflation.v1.ExponentialCalculation, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "inflation_distribution",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.kynno.inflation.v1.InflationDistribution, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "enable_inflation",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
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

            if (this.mint_denom != null) {
              data.mint_denom = this.mint_denom;
            }

            if (this.exponential_calculation != null) {
              data.exponential_calculation = this.exponential_calculation.toObject();
            }

            if (this.inflation_distribution != null) {
              data.inflation_distribution = this.inflation_distribution.toObject();
            }

            if (this.enable_inflation != null) {
              data.enable_inflation = this.enable_inflation;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.mint_denom === "string" && this.mint_denom.length) writer.writeString(1, this.mint_denom);
            if (this.exponential_calculation !== undefined) writer.writeMessage(2, this.exponential_calculation, function () {
              return _this4.exponential_calculation.serialize(writer);
            });
            if (this.inflation_distribution !== undefined) writer.writeMessage(3, this.inflation_distribution, function () {
              return _this4.inflation_distribution.serialize(writer);
            });
            if (this.enable_inflation !== undefined) writer.writeBool(4, this.enable_inflation);
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

            if (data.exponential_calculation != null) {
              message.exponential_calculation = dependency_2.kynno.inflation.v1.ExponentialCalculation.fromObject(data.exponential_calculation);
            }

            if (data.inflation_distribution != null) {
              message.inflation_distribution = dependency_2.kynno.inflation.v1.InflationDistribution.fromObject(data.inflation_distribution);
            }

            if (data.enable_inflation != null) {
              message.enable_inflation = data.enable_inflation;
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
                  reader.readMessage(message.exponential_calculation, function () {
                    return message.exponential_calculation = dependency_2.kynno.inflation.v1.ExponentialCalculation.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.inflation_distribution, function () {
                    return message.inflation_distribution = dependency_2.kynno.inflation.v1.InflationDistribution.deserialize(reader);
                  });
                  break;

                case 4:
                  message.enable_inflation = reader.readBool();
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
    })(v1 || (v1 = _inflation.v1 || (_inflation.v1 = {})));
  })(inflation || (inflation = _kynno.inflation || (_kynno.inflation = {})));
})(kynno || (exports.kynno = kynno = {}));