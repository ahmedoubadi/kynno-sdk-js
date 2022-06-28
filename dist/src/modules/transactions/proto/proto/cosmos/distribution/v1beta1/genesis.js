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

var dependency_3 = _interopRequireWildcard(require("./distribution"));

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
      var DelegatorWithdrawInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(DelegatorWithdrawInfo, _pb_1$Message);

        var _super = _createSuper(DelegatorWithdrawInfo);

        function DelegatorWithdrawInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, DelegatorWithdrawInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this.delegator_address = data.delegator_address;
            }

            if ("withdraw_address" in data && data.withdraw_address != undefined) {
              _this.withdraw_address = data.withdraw_address;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(DelegatorWithdrawInfo, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "withdraw_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.withdraw_address != null) {
              data.withdraw_address = this.withdraw_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length) writer.writeString(2, this.withdraw_address);
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
            var message = new DelegatorWithdrawInfo({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.withdraw_address != null) {
              message.withdraw_address = data.withdraw_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelegatorWithdrawInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.withdraw_address = reader.readString();
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
            return DelegatorWithdrawInfo.deserialize(bytes);
          }
        }]);
        return DelegatorWithdrawInfo;
      }(pb_1.Message);

      _v1beta.DelegatorWithdrawInfo = DelegatorWithdrawInfo;

      var ValidatorOutstandingRewardsRecord = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ValidatorOutstandingRewardsRecord, _pb_1$Message2);

        var _super2 = _createSuper(ValidatorOutstandingRewardsRecord);

        function ValidatorOutstandingRewardsRecord(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, ValidatorOutstandingRewardsRecord);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this2.validator_address = data.validator_address;
            }

            if ("outstanding_rewards" in data && data.outstanding_rewards != undefined) {
              _this2.outstanding_rewards = data.outstanding_rewards;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(ValidatorOutstandingRewardsRecord, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "outstanding_rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.outstanding_rewards != null) {
              data.outstanding_rewards = this.outstanding_rewards.map(function (item) {
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
            if (this.outstanding_rewards !== undefined) writer.writeRepeatedMessage(2, this.outstanding_rewards, function (item) {
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
            var message = new ValidatorOutstandingRewardsRecord({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.outstanding_rewards != null) {
              message.outstanding_rewards = data.outstanding_rewards.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorOutstandingRewardsRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.outstanding_rewards, function () {
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
            return ValidatorOutstandingRewardsRecord.deserialize(bytes);
          }
        }]);
        return ValidatorOutstandingRewardsRecord;
      }(pb_1.Message);

      _v1beta.ValidatorOutstandingRewardsRecord = ValidatorOutstandingRewardsRecord;

      var ValidatorAccumulatedCommissionRecord = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(ValidatorAccumulatedCommissionRecord, _pb_1$Message3);

        var _super3 = _createSuper(ValidatorAccumulatedCommissionRecord);

        function ValidatorAccumulatedCommissionRecord(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ValidatorAccumulatedCommissionRecord);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this3.validator_address = data.validator_address;
            }

            if ("accumulated" in data && data.accumulated != undefined) {
              _this3.accumulated = data.accumulated;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ValidatorAccumulatedCommissionRecord, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "accumulated",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.accumulated != null) {
              data.accumulated = this.accumulated.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.accumulated !== undefined) writer.writeMessage(2, this.accumulated, function () {
              return _this4.accumulated.serialize(writer);
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
            var message = new ValidatorAccumulatedCommissionRecord({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.accumulated != null) {
              message.accumulated = dependency_3.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.fromObject(data.accumulated);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorAccumulatedCommissionRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.accumulated, function () {
                    return message.accumulated = dependency_3.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.deserialize(reader);
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
            return ValidatorAccumulatedCommissionRecord.deserialize(bytes);
          }
        }]);
        return ValidatorAccumulatedCommissionRecord;
      }(pb_1.Message);

      _v1beta.ValidatorAccumulatedCommissionRecord = ValidatorAccumulatedCommissionRecord;

      var ValidatorHistoricalRewardsRecord = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(ValidatorHistoricalRewardsRecord, _pb_1$Message4);

        var _super4 = _createSuper(ValidatorHistoricalRewardsRecord);

        function ValidatorHistoricalRewardsRecord(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, ValidatorHistoricalRewardsRecord);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this5.validator_address = data.validator_address;
            }

            if ("period" in data && data.period != undefined) {
              _this5.period = data.period;
            }

            if ("rewards" in data && data.rewards != undefined) {
              _this5.rewards = data.rewards;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(ValidatorHistoricalRewardsRecord, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
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
          key: "rewards",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.ValidatorHistoricalRewards, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.period != null) {
              data.period = this.period;
            }

            if (this.rewards != null) {
              data.rewards = this.rewards.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this6 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.period !== undefined) writer.writeUint64(2, this.period);
            if (this.rewards !== undefined) writer.writeMessage(3, this.rewards, function () {
              return _this6.rewards.serialize(writer);
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
            var message = new ValidatorHistoricalRewardsRecord({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.period != null) {
              message.period = data.period;
            }

            if (data.rewards != null) {
              message.rewards = dependency_3.cosmos.distribution.v1beta1.ValidatorHistoricalRewards.fromObject(data.rewards);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorHistoricalRewardsRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  message.period = reader.readUint64();
                  break;

                case 3:
                  reader.readMessage(message.rewards, function () {
                    return message.rewards = dependency_3.cosmos.distribution.v1beta1.ValidatorHistoricalRewards.deserialize(reader);
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
            return ValidatorHistoricalRewardsRecord.deserialize(bytes);
          }
        }]);
        return ValidatorHistoricalRewardsRecord;
      }(pb_1.Message);

      _v1beta.ValidatorHistoricalRewardsRecord = ValidatorHistoricalRewardsRecord;

      var ValidatorCurrentRewardsRecord = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(ValidatorCurrentRewardsRecord, _pb_1$Message5);

        var _super5 = _createSuper(ValidatorCurrentRewardsRecord);

        function ValidatorCurrentRewardsRecord(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, ValidatorCurrentRewardsRecord);
          _this7 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this7.validator_address = data.validator_address;
            }

            if ("rewards" in data && data.rewards != undefined) {
              _this7.rewards = data.rewards;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(ValidatorCurrentRewardsRecord, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "rewards",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.ValidatorCurrentRewards, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.rewards != null) {
              data.rewards = this.rewards.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this8 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.rewards !== undefined) writer.writeMessage(2, this.rewards, function () {
              return _this8.rewards.serialize(writer);
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
            var message = new ValidatorCurrentRewardsRecord({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.rewards != null) {
              message.rewards = dependency_3.cosmos.distribution.v1beta1.ValidatorCurrentRewards.fromObject(data.rewards);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorCurrentRewardsRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.rewards, function () {
                    return message.rewards = dependency_3.cosmos.distribution.v1beta1.ValidatorCurrentRewards.deserialize(reader);
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
            return ValidatorCurrentRewardsRecord.deserialize(bytes);
          }
        }]);
        return ValidatorCurrentRewardsRecord;
      }(pb_1.Message);

      _v1beta.ValidatorCurrentRewardsRecord = ValidatorCurrentRewardsRecord;

      var DelegatorStartingInfoRecord = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(DelegatorStartingInfoRecord, _pb_1$Message6);

        var _super6 = _createSuper(DelegatorStartingInfoRecord);

        function DelegatorStartingInfoRecord(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, DelegatorStartingInfoRecord);
          _this9 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this9.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this9.validator_address = data.validator_address;
            }

            if ("starting_info" in data && data.starting_info != undefined) {
              _this9.starting_info = data.starting_info;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(DelegatorStartingInfoRecord, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "starting_info",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.DelegatorStartingInfo, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.starting_info != null) {
              data.starting_info = this.starting_info.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this10 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (this.starting_info !== undefined) writer.writeMessage(3, this.starting_info, function () {
              return _this10.starting_info.serialize(writer);
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
            var message = new DelegatorStartingInfoRecord({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.starting_info != null) {
              message.starting_info = dependency_3.cosmos.distribution.v1beta1.DelegatorStartingInfo.fromObject(data.starting_info);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelegatorStartingInfoRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.starting_info, function () {
                    return message.starting_info = dependency_3.cosmos.distribution.v1beta1.DelegatorStartingInfo.deserialize(reader);
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
            return DelegatorStartingInfoRecord.deserialize(bytes);
          }
        }]);
        return DelegatorStartingInfoRecord;
      }(pb_1.Message);

      _v1beta.DelegatorStartingInfoRecord = DelegatorStartingInfoRecord;

      var ValidatorSlashEventRecord = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(ValidatorSlashEventRecord, _pb_1$Message7);

        var _super7 = _createSuper(ValidatorSlashEventRecord);

        function ValidatorSlashEventRecord(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, ValidatorSlashEventRecord);
          _this11 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this11.validator_address = data.validator_address;
            }

            if ("height" in data && data.height != undefined) {
              _this11.height = data.height;
            }

            if ("period" in data && data.period != undefined) {
              _this11.period = data.period;
            }

            if ("validator_slash_event" in data && data.validator_slash_event != undefined) {
              _this11.validator_slash_event = data.validator_slash_event;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(ValidatorSlashEventRecord, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "height",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "period",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "validator_slash_event",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.ValidatorSlashEvent, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.height != null) {
              data.height = this.height;
            }

            if (this.period != null) {
              data.period = this.period;
            }

            if (this.validator_slash_event != null) {
              data.validator_slash_event = this.validator_slash_event.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this12 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.height !== undefined) writer.writeUint64(2, this.height);
            if (this.period !== undefined) writer.writeUint64(3, this.period);
            if (this.validator_slash_event !== undefined) writer.writeMessage(4, this.validator_slash_event, function () {
              return _this12.validator_slash_event.serialize(writer);
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
            var message = new ValidatorSlashEventRecord({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.height != null) {
              message.height = data.height;
            }

            if (data.period != null) {
              message.period = data.period;
            }

            if (data.validator_slash_event != null) {
              message.validator_slash_event = dependency_3.cosmos.distribution.v1beta1.ValidatorSlashEvent.fromObject(data.validator_slash_event);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorSlashEventRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  message.height = reader.readUint64();
                  break;

                case 3:
                  message.period = reader.readUint64();
                  break;

                case 4:
                  reader.readMessage(message.validator_slash_event, function () {
                    return message.validator_slash_event = dependency_3.cosmos.distribution.v1beta1.ValidatorSlashEvent.deserialize(reader);
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
            return ValidatorSlashEventRecord.deserialize(bytes);
          }
        }]);
        return ValidatorSlashEventRecord;
      }(pb_1.Message);

      _v1beta.ValidatorSlashEventRecord = ValidatorSlashEventRecord;

      var GenesisState = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message8);

        var _super8 = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [3, 5, 6, 7, 8, 9, 10], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this13.params = data.params;
            }

            if ("fee_pool" in data && data.fee_pool != undefined) {
              _this13.fee_pool = data.fee_pool;
            }

            if ("delegator_withdraw_infos" in data && data.delegator_withdraw_infos != undefined) {
              _this13.delegator_withdraw_infos = data.delegator_withdraw_infos;
            }

            if ("previous_proposer" in data && data.previous_proposer != undefined) {
              _this13.previous_proposer = data.previous_proposer;
            }

            if ("outstanding_rewards" in data && data.outstanding_rewards != undefined) {
              _this13.outstanding_rewards = data.outstanding_rewards;
            }

            if ("validator_accumulated_commissions" in data && data.validator_accumulated_commissions != undefined) {
              _this13.validator_accumulated_commissions = data.validator_accumulated_commissions;
            }

            if ("validator_historical_rewards" in data && data.validator_historical_rewards != undefined) {
              _this13.validator_historical_rewards = data.validator_historical_rewards;
            }

            if ("validator_current_rewards" in data && data.validator_current_rewards != undefined) {
              _this13.validator_current_rewards = data.validator_current_rewards;
            }

            if ("delegator_starting_infos" in data && data.delegator_starting_infos != undefined) {
              _this13.delegator_starting_infos = data.delegator_starting_infos;
            }

            if ("validator_slash_events" in data && data.validator_slash_events != undefined) {
              _this13.validator_slash_events = data.validator_slash_events;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "fee_pool",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.distribution.v1beta1.FeePool, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "delegator_withdraw_infos",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, DelegatorWithdrawInfo, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "previous_proposer",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "outstanding_rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorOutstandingRewardsRecord, 5);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
          }
        }, {
          key: "validator_accumulated_commissions",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorAccumulatedCommissionRecord, 6);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
          }
        }, {
          key: "validator_historical_rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorHistoricalRewardsRecord, 7);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
          }
        }, {
          key: "validator_current_rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorCurrentRewardsRecord, 8);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
          }
        }, {
          key: "delegator_starting_infos",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, DelegatorStartingInfoRecord, 9);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 9, value);
          }
        }, {
          key: "validator_slash_events",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorSlashEventRecord, 10);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 10, value);
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

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            if (this.fee_pool != null) {
              data.fee_pool = this.fee_pool.toObject();
            }

            if (this.delegator_withdraw_infos != null) {
              data.delegator_withdraw_infos = this.delegator_withdraw_infos.map(function (item) {
                return item.toObject();
              });
            }

            if (this.previous_proposer != null) {
              data.previous_proposer = this.previous_proposer;
            }

            if (this.outstanding_rewards != null) {
              data.outstanding_rewards = this.outstanding_rewards.map(function (item) {
                return item.toObject();
              });
            }

            if (this.validator_accumulated_commissions != null) {
              data.validator_accumulated_commissions = this.validator_accumulated_commissions.map(function (item) {
                return item.toObject();
              });
            }

            if (this.validator_historical_rewards != null) {
              data.validator_historical_rewards = this.validator_historical_rewards.map(function (item) {
                return item.toObject();
              });
            }

            if (this.validator_current_rewards != null) {
              data.validator_current_rewards = this.validator_current_rewards.map(function (item) {
                return item.toObject();
              });
            }

            if (this.delegator_starting_infos != null) {
              data.delegator_starting_infos = this.delegator_starting_infos.map(function (item) {
                return item.toObject();
              });
            }

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
            var _this14 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this14.params.serialize(writer);
            });
            if (this.fee_pool !== undefined) writer.writeMessage(2, this.fee_pool, function () {
              return _this14.fee_pool.serialize(writer);
            });
            if (this.delegator_withdraw_infos !== undefined) writer.writeRepeatedMessage(3, this.delegator_withdraw_infos, function (item) {
              return item.serialize(writer);
            });
            if (typeof this.previous_proposer === "string" && this.previous_proposer.length) writer.writeString(4, this.previous_proposer);
            if (this.outstanding_rewards !== undefined) writer.writeRepeatedMessage(5, this.outstanding_rewards, function (item) {
              return item.serialize(writer);
            });
            if (this.validator_accumulated_commissions !== undefined) writer.writeRepeatedMessage(6, this.validator_accumulated_commissions, function (item) {
              return item.serialize(writer);
            });
            if (this.validator_historical_rewards !== undefined) writer.writeRepeatedMessage(7, this.validator_historical_rewards, function (item) {
              return item.serialize(writer);
            });
            if (this.validator_current_rewards !== undefined) writer.writeRepeatedMessage(8, this.validator_current_rewards, function (item) {
              return item.serialize(writer);
            });
            if (this.delegator_starting_infos !== undefined) writer.writeRepeatedMessage(9, this.delegator_starting_infos, function (item) {
              return item.serialize(writer);
            });
            if (this.validator_slash_events !== undefined) writer.writeRepeatedMessage(10, this.validator_slash_events, function (item) {
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
              message.params = dependency_3.cosmos.distribution.v1beta1.Params.fromObject(data.params);
            }

            if (data.fee_pool != null) {
              message.fee_pool = dependency_3.cosmos.distribution.v1beta1.FeePool.fromObject(data.fee_pool);
            }

            if (data.delegator_withdraw_infos != null) {
              message.delegator_withdraw_infos = data.delegator_withdraw_infos.map(function (item) {
                return DelegatorWithdrawInfo.fromObject(item);
              });
            }

            if (data.previous_proposer != null) {
              message.previous_proposer = data.previous_proposer;
            }

            if (data.outstanding_rewards != null) {
              message.outstanding_rewards = data.outstanding_rewards.map(function (item) {
                return ValidatorOutstandingRewardsRecord.fromObject(item);
              });
            }

            if (data.validator_accumulated_commissions != null) {
              message.validator_accumulated_commissions = data.validator_accumulated_commissions.map(function (item) {
                return ValidatorAccumulatedCommissionRecord.fromObject(item);
              });
            }

            if (data.validator_historical_rewards != null) {
              message.validator_historical_rewards = data.validator_historical_rewards.map(function (item) {
                return ValidatorHistoricalRewardsRecord.fromObject(item);
              });
            }

            if (data.validator_current_rewards != null) {
              message.validator_current_rewards = data.validator_current_rewards.map(function (item) {
                return ValidatorCurrentRewardsRecord.fromObject(item);
              });
            }

            if (data.delegator_starting_infos != null) {
              message.delegator_starting_infos = data.delegator_starting_infos.map(function (item) {
                return DelegatorStartingInfoRecord.fromObject(item);
              });
            }

            if (data.validator_slash_events != null) {
              message.validator_slash_events = data.validator_slash_events.map(function (item) {
                return ValidatorSlashEventRecord.fromObject(item);
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
                    return message.params = dependency_3.cosmos.distribution.v1beta1.Params.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.fee_pool, function () {
                    return message.fee_pool = dependency_3.cosmos.distribution.v1beta1.FeePool.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.delegator_withdraw_infos, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, DelegatorWithdrawInfo.deserialize(reader), DelegatorWithdrawInfo);
                  });
                  break;

                case 4:
                  message.previous_proposer = reader.readString();
                  break;

                case 5:
                  reader.readMessage(message.outstanding_rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 5, ValidatorOutstandingRewardsRecord.deserialize(reader), ValidatorOutstandingRewardsRecord);
                  });
                  break;

                case 6:
                  reader.readMessage(message.validator_accumulated_commissions, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 6, ValidatorAccumulatedCommissionRecord.deserialize(reader), ValidatorAccumulatedCommissionRecord);
                  });
                  break;

                case 7:
                  reader.readMessage(message.validator_historical_rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 7, ValidatorHistoricalRewardsRecord.deserialize(reader), ValidatorHistoricalRewardsRecord);
                  });
                  break;

                case 8:
                  reader.readMessage(message.validator_current_rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 8, ValidatorCurrentRewardsRecord.deserialize(reader), ValidatorCurrentRewardsRecord);
                  });
                  break;

                case 9:
                  reader.readMessage(message.delegator_starting_infos, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 9, DelegatorStartingInfoRecord.deserialize(reader), DelegatorStartingInfoRecord);
                  });
                  break;

                case 10:
                  reader.readMessage(message.validator_slash_events, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 10, ValidatorSlashEventRecord.deserialize(reader), ValidatorSlashEventRecord);
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

      _v1beta.GenesisState = GenesisState;
    })(v1beta1 || (v1beta1 = _distribution.v1beta1 || (_distribution.v1beta1 = {})));
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
})(cosmos || (exports.cosmos = cosmos = {}));