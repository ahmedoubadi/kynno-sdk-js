"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

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
      var MsgSetWithdrawAddress = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgSetWithdrawAddress, _pb_1$Message);

        var _super = _createSuper(MsgSetWithdrawAddress);

        function MsgSetWithdrawAddress(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgSetWithdrawAddress);
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

        (0, _createClass2["default"])(MsgSetWithdrawAddress, [{
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
            var message = new MsgSetWithdrawAddress({});

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
                message = new MsgSetWithdrawAddress();

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
            return MsgSetWithdrawAddress.deserialize(bytes);
          }
        }]);
        return MsgSetWithdrawAddress;
      }(pb_1.Message);

      _v1beta.MsgSetWithdrawAddress = MsgSetWithdrawAddress;

      var MsgSetWithdrawAddressResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgSetWithdrawAddressResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgSetWithdrawAddressResponse);

        function MsgSetWithdrawAddressResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, MsgSetWithdrawAddressResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this2;
        }

        (0, _createClass2["default"])(MsgSetWithdrawAddressResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgSetWithdrawAddressResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgSetWithdrawAddressResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgSetWithdrawAddressResponse.deserialize(bytes);
          }
        }]);
        return MsgSetWithdrawAddressResponse;
      }(pb_1.Message);

      _v1beta.MsgSetWithdrawAddressResponse = MsgSetWithdrawAddressResponse;

      var MsgWithdrawDelegatorReward = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgWithdrawDelegatorReward, _pb_1$Message3);

        var _super3 = _createSuper(MsgWithdrawDelegatorReward);

        function MsgWithdrawDelegatorReward(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorReward);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this3.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this3.validator_address = data.validator_address;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(MsgWithdrawDelegatorReward, [{
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
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
            var message = new MsgWithdrawDelegatorReward({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgWithdrawDelegatorReward();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
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
            return MsgWithdrawDelegatorReward.deserialize(bytes);
          }
        }]);
        return MsgWithdrawDelegatorReward;
      }(pb_1.Message);

      _v1beta.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;

      var MsgWithdrawDelegatorRewardResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgWithdrawDelegatorRewardResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgWithdrawDelegatorRewardResponse);

        function MsgWithdrawDelegatorRewardResponse(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorRewardResponse);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this4;
        }

        (0, _createClass2["default"])(MsgWithdrawDelegatorRewardResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgWithdrawDelegatorRewardResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgWithdrawDelegatorRewardResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgWithdrawDelegatorRewardResponse.deserialize(bytes);
          }
        }]);
        return MsgWithdrawDelegatorRewardResponse;
      }(pb_1.Message);

      _v1beta.MsgWithdrawDelegatorRewardResponse = MsgWithdrawDelegatorRewardResponse;

      var MsgWithdrawValidatorCommission = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(MsgWithdrawValidatorCommission, _pb_1$Message5);

        var _super5 = _createSuper(MsgWithdrawValidatorCommission);

        function MsgWithdrawValidatorCommission(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgWithdrawValidatorCommission);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this5.validator_address = data.validator_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(MsgWithdrawValidatorCommission, [{
          key: "validator_address",
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
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
            var message = new MsgWithdrawValidatorCommission({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgWithdrawValidatorCommission();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
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
            return MsgWithdrawValidatorCommission.deserialize(bytes);
          }
        }]);
        return MsgWithdrawValidatorCommission;
      }(pb_1.Message);

      _v1beta.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;

      var MsgWithdrawValidatorCommissionResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgWithdrawValidatorCommissionResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgWithdrawValidatorCommissionResponse);

        function MsgWithdrawValidatorCommissionResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MsgWithdrawValidatorCommissionResponse);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(MsgWithdrawValidatorCommissionResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgWithdrawValidatorCommissionResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgWithdrawValidatorCommissionResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgWithdrawValidatorCommissionResponse.deserialize(bytes);
          }
        }]);
        return MsgWithdrawValidatorCommissionResponse;
      }(pb_1.Message);

      _v1beta.MsgWithdrawValidatorCommissionResponse = MsgWithdrawValidatorCommissionResponse;

      var MsgFundCommunityPool = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(MsgFundCommunityPool, _pb_1$Message7);

        var _super7 = _createSuper(MsgFundCommunityPool);

        function MsgFundCommunityPool(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, MsgFundCommunityPool);
          _this7 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("amount" in data && data.amount != undefined) {
              _this7.amount = data.amount;
            }

            if ("depositor" in data && data.depositor != undefined) {
              _this7.depositor = data.depositor;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(MsgFundCommunityPool, [{
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "depositor",
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

            if (this.amount != null) {
              data.amount = this.amount.map(function (item) {
                return item.toObject();
              });
            }

            if (this.depositor != null) {
              data.depositor = this.depositor;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.amount !== undefined) writer.writeRepeatedMessage(1, this.amount, function (item) {
              return item.serialize(writer);
            });
            if (typeof this.depositor === "string" && this.depositor.length) writer.writeString(2, this.depositor);
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
            var message = new MsgFundCommunityPool({});

            if (data.amount != null) {
              message.amount = data.amount.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.depositor != null) {
              message.depositor = data.depositor;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgFundCommunityPool();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 2:
                  message.depositor = reader.readString();
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
            return MsgFundCommunityPool.deserialize(bytes);
          }
        }]);
        return MsgFundCommunityPool;
      }(pb_1.Message);

      _v1beta.MsgFundCommunityPool = MsgFundCommunityPool;

      var MsgFundCommunityPoolResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(MsgFundCommunityPoolResponse, _pb_1$Message8);

        var _super8 = _createSuper(MsgFundCommunityPoolResponse);

        function MsgFundCommunityPoolResponse(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, MsgFundCommunityPoolResponse);
          _this8 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this8;
        }

        (0, _createClass2["default"])(MsgFundCommunityPoolResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgFundCommunityPoolResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgFundCommunityPoolResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgFundCommunityPoolResponse.deserialize(bytes);
          }
        }]);
        return MsgFundCommunityPoolResponse;
      }(pb_1.Message);

      _v1beta.MsgFundCommunityPoolResponse = MsgFundCommunityPoolResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        SetWithdrawAddress: {
          path: "/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgSetWithdrawAddress.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgSetWithdrawAddressResponse.deserialize(new Uint8Array(bytes));
          }
        },
        WithdrawDelegatorReward: {
          path: "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgWithdrawDelegatorReward.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgWithdrawDelegatorRewardResponse.deserialize(new Uint8Array(bytes));
          }
        },
        WithdrawValidatorCommission: {
          path: "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgWithdrawValidatorCommission.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgWithdrawValidatorCommissionResponse.deserialize(new Uint8Array(bytes));
          }
        },
        FundCommunityPool: {
          path: "/cosmos.distribution.v1beta1.Msg/FundCommunityPool",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgFundCommunityPool.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgFundCommunityPoolResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super9 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this9;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this9 = _super9.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "SetWithdrawAddress", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this9), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "SetWithdrawAddress", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "WithdrawDelegatorReward", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this9), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "WithdrawDelegatorReward", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "WithdrawValidatorCommission", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this9), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "WithdrawValidatorCommission", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "FundCommunityPool", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this9), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "FundCommunityPool", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          return _this9;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v1beta.MsgClient = MsgClient;
    })(v1beta1 || (v1beta1 = _distribution.v1beta1 || (_distribution.v1beta1 = {})));
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
})(cosmos || (exports.cosmos = cosmos = {}));