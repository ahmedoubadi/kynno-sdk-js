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

var dependency_2 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var distribution;

  (function (_distribution) {
    var v1beta1;

    (function (_v1beta) {
      var Params = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Params, _pb_1$Message);

        var _super = _createSuper(Params);

        function Params(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Params);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("community_tax" in data && data.community_tax != undefined) {
              _this.community_tax = data.community_tax;
            }

            if ("base_proposer_reward" in data && data.base_proposer_reward != undefined) {
              _this.base_proposer_reward = data.base_proposer_reward;
            }

            if ("bonus_proposer_reward" in data && data.bonus_proposer_reward != undefined) {
              _this.bonus_proposer_reward = data.bonus_proposer_reward;
            }

            if ("withdraw_addr_enabled" in data && data.withdraw_addr_enabled != undefined) {
              _this.withdraw_addr_enabled = data.withdraw_addr_enabled;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Params, [{
          key: "community_tax",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "base_proposer_reward",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "bonus_proposer_reward",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "withdraw_addr_enabled",
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

            if (this.community_tax != null) {
              data.community_tax = this.community_tax;
            }

            if (this.base_proposer_reward != null) {
              data.base_proposer_reward = this.base_proposer_reward;
            }

            if (this.bonus_proposer_reward != null) {
              data.bonus_proposer_reward = this.bonus_proposer_reward;
            }

            if (this.withdraw_addr_enabled != null) {
              data.withdraw_addr_enabled = this.withdraw_addr_enabled;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.community_tax === "string" && this.community_tax.length) writer.writeString(1, this.community_tax);
            if (typeof this.base_proposer_reward === "string" && this.base_proposer_reward.length) writer.writeString(2, this.base_proposer_reward);
            if (typeof this.bonus_proposer_reward === "string" && this.bonus_proposer_reward.length) writer.writeString(3, this.bonus_proposer_reward);
            if (this.withdraw_addr_enabled !== undefined) writer.writeBool(4, this.withdraw_addr_enabled);
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

            if (data.community_tax != null) {
              message.community_tax = data.community_tax;
            }

            if (data.base_proposer_reward != null) {
              message.base_proposer_reward = data.base_proposer_reward;
            }

            if (data.bonus_proposer_reward != null) {
              message.bonus_proposer_reward = data.bonus_proposer_reward;
            }

            if (data.withdraw_addr_enabled != null) {
              message.withdraw_addr_enabled = data.withdraw_addr_enabled;
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
                  message.community_tax = reader.readString();
                  break;

                case 2:
                  message.base_proposer_reward = reader.readString();
                  break;

                case 3:
                  message.bonus_proposer_reward = reader.readString();
                  break;

                case 4:
                  message.withdraw_addr_enabled = reader.readBool();
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

      var ValidatorHistoricalRewards = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ValidatorHistoricalRewards, _pb_1$Message2);

        var _super2 = _createSuper(ValidatorHistoricalRewards);

        function ValidatorHistoricalRewards(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, ValidatorHistoricalRewards);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("cumulative_reward_ratio" in data && data.cumulative_reward_ratio != undefined) {
              _this2.cumulative_reward_ratio = data.cumulative_reward_ratio;
            }

            if ("reference_count" in data && data.reference_count != undefined) {
              _this2.reference_count = data.reference_count;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(ValidatorHistoricalRewards, [{
          key: "cumulative_reward_ratio",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "reference_count",
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

            if (this.cumulative_reward_ratio != null) {
              data.cumulative_reward_ratio = this.cumulative_reward_ratio.map(function (item) {
                return item.toObject();
              });
            }

            if (this.reference_count != null) {
              data.reference_count = this.reference_count;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.cumulative_reward_ratio !== undefined) writer.writeRepeatedMessage(1, this.cumulative_reward_ratio, function (item) {
              return item.serialize(writer);
            });
            if (this.reference_count !== undefined) writer.writeUint32(2, this.reference_count);
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
            var message = new ValidatorHistoricalRewards({});

            if (data.cumulative_reward_ratio != null) {
              message.cumulative_reward_ratio = data.cumulative_reward_ratio.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            if (data.reference_count != null) {
              message.reference_count = data.reference_count;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorHistoricalRewards();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.cumulative_reward_ratio, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
                  });
                  break;

                case 2:
                  message.reference_count = reader.readUint32();
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
            return ValidatorHistoricalRewards.deserialize(bytes);
          }
        }]);
        return ValidatorHistoricalRewards;
      }(pb_1.Message);

      _v1beta.ValidatorHistoricalRewards = ValidatorHistoricalRewards;

      var ValidatorCurrentRewards = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(ValidatorCurrentRewards, _pb_1$Message3);

        var _super3 = _createSuper(ValidatorCurrentRewards);

        function ValidatorCurrentRewards(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ValidatorCurrentRewards);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewards" in data && data.rewards != undefined) {
              _this3.rewards = data.rewards;
            }

            if ("period" in data && data.period != undefined) {
              _this3.period = data.period;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ValidatorCurrentRewards, [{
          key: "rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.rewards != null) {
              data.rewards = this.rewards.map(function (item) {
                return item.toObject();
              });
            }

            if (this.period != null) {
              data.period = this.period;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.rewards !== undefined) writer.writeRepeatedMessage(1, this.rewards, function (item) {
              return item.serialize(writer);
            });
            if (this.period !== undefined) writer.writeUint64(2, this.period);
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
            var message = new ValidatorCurrentRewards({});

            if (data.rewards != null) {
              message.rewards = data.rewards.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            if (data.period != null) {
              message.period = data.period;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorCurrentRewards();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
                  });
                  break;

                case 2:
                  message.period = reader.readUint64();
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
            return ValidatorCurrentRewards.deserialize(bytes);
          }
        }]);
        return ValidatorCurrentRewards;
      }(pb_1.Message);

      _v1beta.ValidatorCurrentRewards = ValidatorCurrentRewards;

      var ValidatorAccumulatedCommission = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(ValidatorAccumulatedCommission, _pb_1$Message4);

        var _super4 = _createSuper(ValidatorAccumulatedCommission);

        function ValidatorAccumulatedCommission(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, ValidatorAccumulatedCommission);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("commission" in data && data.commission != undefined) {
              _this4.commission = data.commission;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(ValidatorAccumulatedCommission, [{
          key: "commission",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.commission != null) {
              data.commission = this.commission.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.commission !== undefined) writer.writeRepeatedMessage(1, this.commission, function (item) {
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
            var message = new ValidatorAccumulatedCommission({});

            if (data.commission != null) {
              message.commission = data.commission.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorAccumulatedCommission();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.commission, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
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
            return ValidatorAccumulatedCommission.deserialize(bytes);
          }
        }]);
        return ValidatorAccumulatedCommission;
      }(pb_1.Message);

      _v1beta.ValidatorAccumulatedCommission = ValidatorAccumulatedCommission;

      var ValidatorOutstandingRewards = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(ValidatorOutstandingRewards, _pb_1$Message5);

        var _super5 = _createSuper(ValidatorOutstandingRewards);

        function ValidatorOutstandingRewards(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, ValidatorOutstandingRewards);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewards" in data && data.rewards != undefined) {
              _this5.rewards = data.rewards;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(ValidatorOutstandingRewards, [{
          key: "rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
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

            if (this.rewards != null) {
              data.rewards = this.rewards.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.rewards !== undefined) writer.writeRepeatedMessage(1, this.rewards, function (item) {
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
            var message = new ValidatorOutstandingRewards({});

            if (data.rewards != null) {
              message.rewards = data.rewards.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorOutstandingRewards();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
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
            return ValidatorOutstandingRewards.deserialize(bytes);
          }
        }]);
        return ValidatorOutstandingRewards;
      }(pb_1.Message);

      _v1beta.ValidatorOutstandingRewards = ValidatorOutstandingRewards;

      var ValidatorSlashEvent = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(ValidatorSlashEvent, _pb_1$Message6);

        var _super6 = _createSuper(ValidatorSlashEvent);

        function ValidatorSlashEvent(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, ValidatorSlashEvent);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_period" in data && data.validator_period != undefined) {
              _this6.validator_period = data.validator_period;
            }

            if ("fraction" in data && data.fraction != undefined) {
              _this6.fraction = data.fraction;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(ValidatorSlashEvent, [{
          key: "validator_period",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "fraction",
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

            if (this.validator_period != null) {
              data.validator_period = this.validator_period;
            }

            if (this.fraction != null) {
              data.fraction = this.fraction;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.validator_period !== undefined) writer.writeUint64(1, this.validator_period);
            if (typeof this.fraction === "string" && this.fraction.length) writer.writeString(2, this.fraction);
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
            var message = new ValidatorSlashEvent({});

            if (data.validator_period != null) {
              message.validator_period = data.validator_period;
            }

            if (data.fraction != null) {
              message.fraction = data.fraction;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorSlashEvent();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_period = reader.readUint64();
                  break;

                case 2:
                  message.fraction = reader.readString();
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
            return ValidatorSlashEvent.deserialize(bytes);
          }
        }]);
        return ValidatorSlashEvent;
      }(pb_1.Message);

      _v1beta.ValidatorSlashEvent = ValidatorSlashEvent;

      var ValidatorSlashEvents = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(ValidatorSlashEvents, _pb_1$Message7);

        var _super7 = _createSuper(ValidatorSlashEvents);

        function ValidatorSlashEvents(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, ValidatorSlashEvents);
          _this7 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_slash_events" in data && data.validator_slash_events != undefined) {
              _this7.validator_slash_events = data.validator_slash_events;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(ValidatorSlashEvents, [{
          key: "validator_slash_events",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorSlashEvent, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.validator_slash_events != null) {
              data.validator_slash_events = this.validator_slash_events.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.validator_slash_events !== undefined) writer.writeRepeatedMessage(1, this.validator_slash_events, function (item) {
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
            var message = new ValidatorSlashEvents({});

            if (data.validator_slash_events != null) {
              message.validator_slash_events = data.validator_slash_events.map(function (item) {
                return ValidatorSlashEvent.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorSlashEvents();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.validator_slash_events, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, ValidatorSlashEvent.deserialize(reader), ValidatorSlashEvent);
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
            return ValidatorSlashEvents.deserialize(bytes);
          }
        }]);
        return ValidatorSlashEvents;
      }(pb_1.Message);

      _v1beta.ValidatorSlashEvents = ValidatorSlashEvents;

      var FeePool = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(FeePool, _pb_1$Message8);

        var _super8 = _createSuper(FeePool);

        function FeePool(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, FeePool);
          _this8 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("community_pool" in data && data.community_pool != undefined) {
              _this8.community_pool = data.community_pool;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(FeePool, [{
          key: "community_pool",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject6) {
            function toObject() {
              return _toObject6.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject6.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.community_pool != null) {
              data.community_pool = this.community_pool.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.community_pool !== undefined) writer.writeRepeatedMessage(1, this.community_pool, function (item) {
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
            var message = new FeePool({});

            if (data.community_pool != null) {
              message.community_pool = data.community_pool.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new FeePool();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.community_pool, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
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
            return FeePool.deserialize(bytes);
          }
        }]);
        return FeePool;
      }(pb_1.Message);

      _v1beta.FeePool = FeePool;

      var CommunityPoolSpendProposal = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(CommunityPoolSpendProposal, _pb_1$Message9);

        var _super9 = _createSuper(CommunityPoolSpendProposal);

        function CommunityPoolSpendProposal(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, CommunityPoolSpendProposal);
          _this9 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this9.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this9.description = data.description;
            }

            if ("recipient" in data && data.recipient != undefined) {
              _this9.recipient = data.recipient;
            }

            if ("amount" in data && data.amount != undefined) {
              _this9.amount = data.amount;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(CommunityPoolSpendProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "recipient",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject7) {
            function toObject() {
              return _toObject7.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject7.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.recipient != null) {
              data.recipient = this.recipient;
            }

            if (this.amount != null) {
              data.amount = this.amount.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.recipient === "string" && this.recipient.length) writer.writeString(3, this.recipient);
            if (this.amount !== undefined) writer.writeRepeatedMessage(4, this.amount, function (item) {
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
            var message = new CommunityPoolSpendProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.recipient != null) {
              message.recipient = data.recipient;
            }

            if (data.amount != null) {
              message.amount = data.amount.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CommunityPoolSpendProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.recipient = reader.readString();
                  break;

                case 4:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
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
            return CommunityPoolSpendProposal.deserialize(bytes);
          }
        }]);
        return CommunityPoolSpendProposal;
      }(pb_1.Message);

      _v1beta.CommunityPoolSpendProposal = CommunityPoolSpendProposal;

      var DelegatorStartingInfo = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(DelegatorStartingInfo, _pb_1$Message10);

        var _super10 = _createSuper(DelegatorStartingInfo);

        function DelegatorStartingInfo(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, DelegatorStartingInfo);
          _this10 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("previous_period" in data && data.previous_period != undefined) {
              _this10.previous_period = data.previous_period;
            }

            if ("stake" in data && data.stake != undefined) {
              _this10.stake = data.stake;
            }

            if ("height" in data && data.height != undefined) {
              _this10.height = data.height;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(DelegatorStartingInfo, [{
          key: "previous_period",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "stake",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "height",
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

            if (this.previous_period != null) {
              data.previous_period = this.previous_period;
            }

            if (this.stake != null) {
              data.stake = this.stake;
            }

            if (this.height != null) {
              data.height = this.height;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.previous_period !== undefined) writer.writeUint64(1, this.previous_period);
            if (typeof this.stake === "string" && this.stake.length) writer.writeString(2, this.stake);
            if (this.height !== undefined) writer.writeUint64(3, this.height);
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
            var message = new DelegatorStartingInfo({});

            if (data.previous_period != null) {
              message.previous_period = data.previous_period;
            }

            if (data.stake != null) {
              message.stake = data.stake;
            }

            if (data.height != null) {
              message.height = data.height;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelegatorStartingInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.previous_period = reader.readUint64();
                  break;

                case 2:
                  message.stake = reader.readString();
                  break;

                case 3:
                  message.height = reader.readUint64();
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
            return DelegatorStartingInfo.deserialize(bytes);
          }
        }]);
        return DelegatorStartingInfo;
      }(pb_1.Message);

      _v1beta.DelegatorStartingInfo = DelegatorStartingInfo;

      var DelegationDelegatorReward = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(DelegationDelegatorReward, _pb_1$Message11);

        var _super11 = _createSuper(DelegationDelegatorReward);

        function DelegationDelegatorReward(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, DelegationDelegatorReward);
          _this11 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this11.validator_address = data.validator_address;
            }

            if ("reward" in data && data.reward != undefined) {
              _this11.reward = data.reward;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(DelegationDelegatorReward, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "reward",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject8) {
            function toObject() {
              return _toObject8.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject8.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.reward != null) {
              data.reward = this.reward.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.reward !== undefined) writer.writeRepeatedMessage(2, this.reward, function (item) {
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
            var message = new DelegationDelegatorReward({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.reward != null) {
              message.reward = data.reward.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelegationDelegatorReward();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.reward, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
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
            return DelegationDelegatorReward.deserialize(bytes);
          }
        }]);
        return DelegationDelegatorReward;
      }(pb_1.Message);

      _v1beta.DelegationDelegatorReward = DelegationDelegatorReward;

      var CommunityPoolSpendProposalWithDeposit = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(CommunityPoolSpendProposalWithDeposit, _pb_1$Message12);

        var _super12 = _createSuper(CommunityPoolSpendProposalWithDeposit);

        function CommunityPoolSpendProposalWithDeposit(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, CommunityPoolSpendProposalWithDeposit);
          _this12 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this12.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this12.description = data.description;
            }

            if ("recipient" in data && data.recipient != undefined) {
              _this12.recipient = data.recipient;
            }

            if ("amount" in data && data.amount != undefined) {
              _this12.amount = data.amount;
            }

            if ("deposit" in data && data.deposit != undefined) {
              _this12.deposit = data.deposit;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(CommunityPoolSpendProposalWithDeposit, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "recipient",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "deposit",
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.recipient != null) {
              data.recipient = this.recipient;
            }

            if (this.amount != null) {
              data.amount = this.amount;
            }

            if (this.deposit != null) {
              data.deposit = this.deposit;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.recipient === "string" && this.recipient.length) writer.writeString(3, this.recipient);
            if (typeof this.amount === "string" && this.amount.length) writer.writeString(4, this.amount);
            if (typeof this.deposit === "string" && this.deposit.length) writer.writeString(5, this.deposit);
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
            var message = new CommunityPoolSpendProposalWithDeposit({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.recipient != null) {
              message.recipient = data.recipient;
            }

            if (data.amount != null) {
              message.amount = data.amount;
            }

            if (data.deposit != null) {
              message.deposit = data.deposit;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CommunityPoolSpendProposalWithDeposit();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.recipient = reader.readString();
                  break;

                case 4:
                  message.amount = reader.readString();
                  break;

                case 5:
                  message.deposit = reader.readString();
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
            return CommunityPoolSpendProposalWithDeposit.deserialize(bytes);
          }
        }]);
        return CommunityPoolSpendProposalWithDeposit;
      }(pb_1.Message);

      _v1beta.CommunityPoolSpendProposalWithDeposit = CommunityPoolSpendProposalWithDeposit;
    })(v1beta1 || (v1beta1 = _distribution.v1beta1 || (_distribution.v1beta1 = {})));
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
})(cosmos || (exports.cosmos = cosmos = {}));