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

var dependency_1 = _interopRequireWildcard(require("./incentives"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var incentives;

  (function (_incentives) {
    var v1;

    (function (_v) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2, 3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("incentives" in data && data.incentives != undefined) {
              _this.incentives = data.incentives;
            }

            if ("gas_meters" in data && data.gas_meters != undefined) {
              _this.gas_meters = data.gas_meters;
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
          key: "incentives",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.kynno.incentives.v1.Incentive, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "gas_meters",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.kynno.incentives.v1.GasMeter, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.incentives != null) {
              data.incentives = this.incentives.map(function (item) {
                return item.toObject();
              });
            }

            if (this.gas_meters != null) {
              data.gas_meters = this.gas_meters.map(function (item) {
                return item.toObject();
              });
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
            if (this.incentives !== undefined) writer.writeRepeatedMessage(2, this.incentives, function (item) {
              return item.serialize(writer);
            });
            if (this.gas_meters !== undefined) writer.writeRepeatedMessage(3, this.gas_meters, function (item) {
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
            var message = new GenesisState({});

            if (data.params != null) {
              message.params = Params.fromObject(data.params);
            }

            if (data.incentives != null) {
              message.incentives = data.incentives.map(function (item) {
                return dependency_1.kynno.incentives.v1.Incentive.fromObject(item);
              });
            }

            if (data.gas_meters != null) {
              message.gas_meters = data.gas_meters.map(function (item) {
                return dependency_1.kynno.incentives.v1.GasMeter.fromObject(item);
              });
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
                  reader.readMessage(message.incentives, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.kynno.incentives.v1.Incentive.deserialize(reader), dependency_1.kynno.incentives.v1.Incentive);
                  });
                  break;

                case 3:
                  reader.readMessage(message.gas_meters, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.kynno.incentives.v1.GasMeter.deserialize(reader), dependency_1.kynno.incentives.v1.GasMeter);
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
            if ("enable_incentives" in data && data.enable_incentives != undefined) {
              _this3.enable_incentives = data.enable_incentives;
            }

            if ("allocation_limit" in data && data.allocation_limit != undefined) {
              _this3.allocation_limit = data.allocation_limit;
            }

            if ("incentives_epoch_identifier" in data && data.incentives_epoch_identifier != undefined) {
              _this3.incentives_epoch_identifier = data.incentives_epoch_identifier;
            }

            if ("reward_scaler" in data && data.reward_scaler != undefined) {
              _this3.reward_scaler = data.reward_scaler;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Params, [{
          key: "enable_incentives",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "allocation_limit",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "incentives_epoch_identifier",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "reward_scaler",
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

            if (this.enable_incentives != null) {
              data.enable_incentives = this.enable_incentives;
            }

            if (this.allocation_limit != null) {
              data.allocation_limit = this.allocation_limit;
            }

            if (this.incentives_epoch_identifier != null) {
              data.incentives_epoch_identifier = this.incentives_epoch_identifier;
            }

            if (this.reward_scaler != null) {
              data.reward_scaler = this.reward_scaler;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.enable_incentives !== undefined) writer.writeBool(1, this.enable_incentives);
            if (typeof this.allocation_limit === "string" && this.allocation_limit.length) writer.writeString(2, this.allocation_limit);
            if (typeof this.incentives_epoch_identifier === "string" && this.incentives_epoch_identifier.length) writer.writeString(3, this.incentives_epoch_identifier);
            if (typeof this.reward_scaler === "string" && this.reward_scaler.length) writer.writeString(4, this.reward_scaler);
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

            if (data.enable_incentives != null) {
              message.enable_incentives = data.enable_incentives;
            }

            if (data.allocation_limit != null) {
              message.allocation_limit = data.allocation_limit;
            }

            if (data.incentives_epoch_identifier != null) {
              message.incentives_epoch_identifier = data.incentives_epoch_identifier;
            }

            if (data.reward_scaler != null) {
              message.reward_scaler = data.reward_scaler;
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
                  message.enable_incentives = reader.readBool();
                  break;

                case 2:
                  message.allocation_limit = reader.readString();
                  break;

                case 3:
                  message.incentives_epoch_identifier = reader.readString();
                  break;

                case 4:
                  message.reward_scaler = reader.readString();
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
    })(v1 || (v1 = _incentives.v1 || (_incentives.v1 = {})));
  })(incentives || (incentives = _kynno.incentives || (_kynno.incentives = {})));
})(kynno || (exports.kynno = kynno = {}));