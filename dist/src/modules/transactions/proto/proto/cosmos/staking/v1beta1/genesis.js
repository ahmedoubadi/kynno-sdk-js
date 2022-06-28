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

var dependency_2 = _interopRequireWildcard(require("./staking"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var staking;

  (function (_staking) {
    var v1beta1;

    (function (_v1beta) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [3, 4, 5, 6, 7], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("last_total_power" in data && data.last_total_power != undefined) {
              _this.last_total_power = data.last_total_power;
            }

            if ("last_validator_powers" in data && data.last_validator_powers != undefined) {
              _this.last_validator_powers = data.last_validator_powers;
            }

            if ("validators" in data && data.validators != undefined) {
              _this.validators = data.validators;
            }

            if ("delegations" in data && data.delegations != undefined) {
              _this.delegations = data.delegations;
            }

            if ("unbonding_delegations" in data && data.unbonding_delegations != undefined) {
              _this.unbonding_delegations = data.unbonding_delegations;
            }

            if ("redelegations" in data && data.redelegations != undefined) {
              _this.redelegations = data.redelegations;
            }

            if ("exported" in data && data.exported != undefined) {
              _this.exported = data.exported;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.staking.v1beta1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "last_total_power",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "last_validator_powers",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, LastValidatorPower, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "validators",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Validator, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "delegations",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Delegation, 5);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
          }
        }, {
          key: "unbonding_delegations",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.UnbondingDelegation, 6);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
          }
        }, {
          key: "redelegations",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.staking.v1beta1.Redelegation, 7);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
          }
        }, {
          key: "exported",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
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

            if (this.last_total_power != null) {
              data.last_total_power = this.last_total_power;
            }

            if (this.last_validator_powers != null) {
              data.last_validator_powers = this.last_validator_powers.map(function (item) {
                return item.toObject();
              });
            }

            if (this.validators != null) {
              data.validators = this.validators.map(function (item) {
                return item.toObject();
              });
            }

            if (this.delegations != null) {
              data.delegations = this.delegations.map(function (item) {
                return item.toObject();
              });
            }

            if (this.unbonding_delegations != null) {
              data.unbonding_delegations = this.unbonding_delegations.map(function (item) {
                return item.toObject();
              });
            }

            if (this.redelegations != null) {
              data.redelegations = this.redelegations.map(function (item) {
                return item.toObject();
              });
            }

            if (this.exported != null) {
              data.exported = this.exported;
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
            if (this.last_total_power !== undefined) writer.writeBytes(2, this.last_total_power);
            if (this.last_validator_powers !== undefined) writer.writeRepeatedMessage(3, this.last_validator_powers, function (item) {
              return item.serialize(writer);
            });
            if (this.validators !== undefined) writer.writeRepeatedMessage(4, this.validators, function (item) {
              return item.serialize(writer);
            });
            if (this.delegations !== undefined) writer.writeRepeatedMessage(5, this.delegations, function (item) {
              return item.serialize(writer);
            });
            if (this.unbonding_delegations !== undefined) writer.writeRepeatedMessage(6, this.unbonding_delegations, function (item) {
              return item.serialize(writer);
            });
            if (this.redelegations !== undefined) writer.writeRepeatedMessage(7, this.redelegations, function (item) {
              return item.serialize(writer);
            });
            if (this.exported !== undefined) writer.writeBool(8, this.exported);
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
              message.params = dependency_2.cosmos.staking.v1beta1.Params.fromObject(data.params);
            }

            if (data.last_total_power != null) {
              message.last_total_power = data.last_total_power;
            }

            if (data.last_validator_powers != null) {
              message.last_validator_powers = data.last_validator_powers.map(function (item) {
                return LastValidatorPower.fromObject(item);
              });
            }

            if (data.validators != null) {
              message.validators = data.validators.map(function (item) {
                return dependency_2.cosmos.staking.v1beta1.Validator.fromObject(item);
              });
            }

            if (data.delegations != null) {
              message.delegations = data.delegations.map(function (item) {
                return dependency_2.cosmos.staking.v1beta1.Delegation.fromObject(item);
              });
            }

            if (data.unbonding_delegations != null) {
              message.unbonding_delegations = data.unbonding_delegations.map(function (item) {
                return dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item);
              });
            }

            if (data.redelegations != null) {
              message.redelegations = data.redelegations.map(function (item) {
                return dependency_2.cosmos.staking.v1beta1.Redelegation.fromObject(item);
              });
            }

            if (data.exported != null) {
              message.exported = data.exported;
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
                    return message.params = dependency_2.cosmos.staking.v1beta1.Params.deserialize(reader);
                  });
                  break;

                case 2:
                  message.last_total_power = reader.readBytes();
                  break;

                case 3:
                  reader.readMessage(message.last_validator_powers, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, LastValidatorPower.deserialize(reader), LastValidatorPower);
                  });
                  break;

                case 4:
                  reader.readMessage(message.validators, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Validator);
                  });
                  break;

                case 5:
                  reader.readMessage(message.delegations, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.cosmos.staking.v1beta1.Delegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Delegation);
                  });
                  break;

                case 6:
                  reader.readMessage(message.unbonding_delegations, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.UnbondingDelegation);
                  });
                  break;

                case 7:
                  reader.readMessage(message.redelegations, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_2.cosmos.staking.v1beta1.Redelegation.deserialize(reader), dependency_2.cosmos.staking.v1beta1.Redelegation);
                  });
                  break;

                case 8:
                  message.exported = reader.readBool();
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

      _v1beta.GenesisState = GenesisState;

      var LastValidatorPower = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(LastValidatorPower, _pb_1$Message2);

        var _super2 = _createSuper(LastValidatorPower);

        function LastValidatorPower(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, LastValidatorPower);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this3.address = data.address;
            }

            if ("power" in data && data.power != undefined) {
              _this3.power = data.power;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(LastValidatorPower, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "power",
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

            if (this.power != null) {
              data.power = this.power;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.power !== undefined) writer.writeInt64(2, this.power);
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
            var message = new LastValidatorPower({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.power != null) {
              message.power = data.power;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new LastValidatorPower();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  message.power = reader.readInt64();
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
            return LastValidatorPower.deserialize(bytes);
          }
        }]);
        return LastValidatorPower;
      }(pb_1.Message);

      _v1beta.LastValidatorPower = LastValidatorPower;
    })(v1beta1 || (v1beta1 = _staking.v1beta1 || (_staking.v1beta1 = {})));
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
})(cosmos || (exports.cosmos = cosmos = {}));