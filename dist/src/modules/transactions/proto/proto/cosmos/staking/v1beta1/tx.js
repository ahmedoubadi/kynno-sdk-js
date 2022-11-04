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

var dependency_1 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_5 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_6 = _interopRequireWildcard(require("./staking"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

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
      var MsgCreateValidator = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgCreateValidator, _pb_1$Message);

        var _super = _createSuper(MsgCreateValidator);

        function MsgCreateValidator(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgCreateValidator);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("description" in data && data.description != undefined) {
              _this.description = data.description;
            }

            if ("commission" in data && data.commission != undefined) {
              _this.commission = data.commission;
            }

            if ("min_self_delegation" in data && data.min_self_delegation != undefined) {
              _this.min_self_delegation = data.min_self_delegation;
            }

            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this.validator_address = data.validator_address;
            }

            if ("pubkey" in data && data.pubkey != undefined) {
              _this.pubkey = data.pubkey;
            }

            if ("value" in data && data.value != undefined) {
              _this.value = data.value;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgCreateValidator, [{
          key: "description",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.cosmos.staking.v1beta1.Description, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "commission",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.cosmos.staking.v1beta1.CommissionRates, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "min_self_delegation",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "pubkey",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 6);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 6, value);
          }
        }, {
          key: "value",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 7);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 7, value);
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

            if (this.description != null) {
              data.description = this.description.toObject();
            }

            if (this.commission != null) {
              data.commission = this.commission.toObject();
            }

            if (this.min_self_delegation != null) {
              data.min_self_delegation = this.min_self_delegation;
            }

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.pubkey != null) {
              data.pubkey = this.pubkey.toObject();
            }

            if (this.value != null) {
              data.value = this.value.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.description !== undefined) writer.writeMessage(1, this.description, function () {
              return _this2.description.serialize(writer);
            });
            if (this.commission !== undefined) writer.writeMessage(2, this.commission, function () {
              return _this2.commission.serialize(writer);
            });
            if (typeof this.min_self_delegation === "string" && this.min_self_delegation.length) writer.writeString(3, this.min_self_delegation);
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(4, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(5, this.validator_address);
            if (this.pubkey !== undefined) writer.writeMessage(6, this.pubkey, function () {
              return _this2.pubkey.serialize(writer);
            });
            if (this.value !== undefined) writer.writeMessage(7, this.value, function () {
              return _this2.value.serialize(writer);
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
            var message = new MsgCreateValidator({});

            if (data.description != null) {
              message.description = dependency_6.cosmos.staking.v1beta1.Description.fromObject(data.description);
            }

            if (data.commission != null) {
              message.commission = dependency_6.cosmos.staking.v1beta1.CommissionRates.fromObject(data.commission);
            }

            if (data.min_self_delegation != null) {
              message.min_self_delegation = data.min_self_delegation;
            }

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.pubkey != null) {
              message.pubkey = dependency_1.google.protobuf.Any.fromObject(data.pubkey);
            }

            if (data.value != null) {
              message.value = dependency_5.cosmos.base.v1beta1.Coin.fromObject(data.value);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateValidator();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.description, function () {
                    return message.description = dependency_6.cosmos.staking.v1beta1.Description.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.commission, function () {
                    return message.commission = dependency_6.cosmos.staking.v1beta1.CommissionRates.deserialize(reader);
                  });
                  break;

                case 3:
                  message.min_self_delegation = reader.readString();
                  break;

                case 4:
                  message.delegator_address = reader.readString();
                  break;

                case 5:
                  message.validator_address = reader.readString();
                  break;

                case 6:
                  reader.readMessage(message.pubkey, function () {
                    return message.pubkey = dependency_1.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 7:
                  reader.readMessage(message.value, function () {
                    return message.value = dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return MsgCreateValidator.deserialize(bytes);
          }
        }]);
        return MsgCreateValidator;
      }(pb_1.Message);

      _v1beta.MsgCreateValidator = MsgCreateValidator;

      var MsgCreateValidatorResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgCreateValidatorResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgCreateValidatorResponse);

        function MsgCreateValidatorResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgCreateValidatorResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this3;
        }

        (0, _createClass2["default"])(MsgCreateValidatorResponse, [{
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
            var message = new MsgCreateValidatorResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateValidatorResponse();

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
            return MsgCreateValidatorResponse.deserialize(bytes);
          }
        }]);
        return MsgCreateValidatorResponse;
      }(pb_1.Message);

      _v1beta.MsgCreateValidatorResponse = MsgCreateValidatorResponse;

      var MsgEditValidator = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgEditValidator, _pb_1$Message3);

        var _super3 = _createSuper(MsgEditValidator);

        function MsgEditValidator(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgEditValidator);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("description" in data && data.description != undefined) {
              _this4.description = data.description;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this4.validator_address = data.validator_address;
            }

            if ("commission_rate" in data && data.commission_rate != undefined) {
              _this4.commission_rate = data.commission_rate;
            }

            if ("min_self_delegation" in data && data.min_self_delegation != undefined) {
              _this4.min_self_delegation = data.min_self_delegation;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(MsgEditValidator, [{
          key: "description",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.cosmos.staking.v1beta1.Description, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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
          key: "commission_rate",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "min_self_delegation",
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

            if (this.description != null) {
              data.description = this.description.toObject();
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.commission_rate != null) {
              data.commission_rate = this.commission_rate;
            }

            if (this.min_self_delegation != null) {
              data.min_self_delegation = this.min_self_delegation;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.description !== undefined) writer.writeMessage(1, this.description, function () {
              return _this5.description.serialize(writer);
            });
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (typeof this.commission_rate === "string" && this.commission_rate.length) writer.writeString(3, this.commission_rate);
            if (typeof this.min_self_delegation === "string" && this.min_self_delegation.length) writer.writeString(4, this.min_self_delegation);
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
            var message = new MsgEditValidator({});

            if (data.description != null) {
              message.description = dependency_6.cosmos.staking.v1beta1.Description.fromObject(data.description);
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.commission_rate != null) {
              message.commission_rate = data.commission_rate;
            }

            if (data.min_self_delegation != null) {
              message.min_self_delegation = data.min_self_delegation;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgEditValidator();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.description, function () {
                    return message.description = dependency_6.cosmos.staking.v1beta1.Description.deserialize(reader);
                  });
                  break;

                case 2:
                  message.validator_address = reader.readString();
                  break;

                case 3:
                  message.commission_rate = reader.readString();
                  break;

                case 4:
                  message.min_self_delegation = reader.readString();
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
            return MsgEditValidator.deserialize(bytes);
          }
        }]);
        return MsgEditValidator;
      }(pb_1.Message);

      _v1beta.MsgEditValidator = MsgEditValidator;

      var MsgEditValidatorResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgEditValidatorResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgEditValidatorResponse);

        function MsgEditValidatorResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MsgEditValidatorResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(MsgEditValidatorResponse, [{
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
            var message = new MsgEditValidatorResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgEditValidatorResponse();

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
            return MsgEditValidatorResponse.deserialize(bytes);
          }
        }]);
        return MsgEditValidatorResponse;
      }(pb_1.Message);

      _v1beta.MsgEditValidatorResponse = MsgEditValidatorResponse;

      var MsgDelegate = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(MsgDelegate, _pb_1$Message5);

        var _super5 = _createSuper(MsgDelegate);

        function MsgDelegate(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, MsgDelegate);
          _this7 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this7.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this7.validator_address = data.validator_address;
            }

            if ("amount" in data && data.amount != undefined) {
              _this7.amount = data.amount;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(MsgDelegate, [{
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
          key: "amount",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 3);
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.amount != null) {
              data.amount = this.amount.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this8 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (this.amount !== undefined) writer.writeMessage(3, this.amount, function () {
              return _this8.amount.serialize(writer);
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
            var message = new MsgDelegate({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.amount != null) {
              message.amount = dependency_5.cosmos.base.v1beta1.Coin.fromObject(data.amount);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgDelegate();

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
                  reader.readMessage(message.amount, function () {
                    return message.amount = dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return MsgDelegate.deserialize(bytes);
          }
        }]);
        return MsgDelegate;
      }(pb_1.Message);

      _v1beta.MsgDelegate = MsgDelegate;

      var MsgDelegateResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgDelegateResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgDelegateResponse);

        function MsgDelegateResponse(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, MsgDelegateResponse);
          _this9 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this9;
        }

        (0, _createClass2["default"])(MsgDelegateResponse, [{
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
            var message = new MsgDelegateResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgDelegateResponse();

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
            return MsgDelegateResponse.deserialize(bytes);
          }
        }]);
        return MsgDelegateResponse;
      }(pb_1.Message);

      _v1beta.MsgDelegateResponse = MsgDelegateResponse;

      var MsgBeginRedelegate = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(MsgBeginRedelegate, _pb_1$Message7);

        var _super7 = _createSuper(MsgBeginRedelegate);

        function MsgBeginRedelegate(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, MsgBeginRedelegate);
          _this10 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this10.delegator_address = data.delegator_address;
            }

            if ("validator_src_address" in data && data.validator_src_address != undefined) {
              _this10.validator_src_address = data.validator_src_address;
            }

            if ("validator_dst_address" in data && data.validator_dst_address != undefined) {
              _this10.validator_dst_address = data.validator_dst_address;
            }

            if ("amount" in data && data.amount != undefined) {
              _this10.amount = data.amount;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(MsgBeginRedelegate, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_src_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "validator_dst_address",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_src_address != null) {
              data.validator_src_address = this.validator_src_address;
            }

            if (this.validator_dst_address != null) {
              data.validator_dst_address = this.validator_dst_address;
            }

            if (this.amount != null) {
              data.amount = this.amount.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_src_address === "string" && this.validator_src_address.length) writer.writeString(2, this.validator_src_address);
            if (typeof this.validator_dst_address === "string" && this.validator_dst_address.length) writer.writeString(3, this.validator_dst_address);
            if (this.amount !== undefined) writer.writeMessage(4, this.amount, function () {
              return _this11.amount.serialize(writer);
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
            var message = new MsgBeginRedelegate({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_src_address != null) {
              message.validator_src_address = data.validator_src_address;
            }

            if (data.validator_dst_address != null) {
              message.validator_dst_address = data.validator_dst_address;
            }

            if (data.amount != null) {
              message.amount = dependency_5.cosmos.base.v1beta1.Coin.fromObject(data.amount);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgBeginRedelegate();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_src_address = reader.readString();
                  break;

                case 3:
                  message.validator_dst_address = reader.readString();
                  break;

                case 4:
                  reader.readMessage(message.amount, function () {
                    return message.amount = dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return MsgBeginRedelegate.deserialize(bytes);
          }
        }]);
        return MsgBeginRedelegate;
      }(pb_1.Message);

      _v1beta.MsgBeginRedelegate = MsgBeginRedelegate;

      var MsgBeginRedelegateResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(MsgBeginRedelegateResponse, _pb_1$Message8);

        var _super8 = _createSuper(MsgBeginRedelegateResponse);

        function MsgBeginRedelegateResponse(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, MsgBeginRedelegateResponse);
          _this12 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("completion_time" in data && data.completion_time != undefined) {
              _this12.completion_time = data.completion_time;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(MsgBeginRedelegateResponse, [{
          key: "completion_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.completion_time != null) {
              data.completion_time = this.completion_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this13 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.completion_time !== undefined) writer.writeMessage(1, this.completion_time, function () {
              return _this13.completion_time.serialize(writer);
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
            var message = new MsgBeginRedelegateResponse({});

            if (data.completion_time != null) {
              message.completion_time = dependency_2.google.protobuf.Timestamp.fromObject(data.completion_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgBeginRedelegateResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.completion_time, function () {
                    return message.completion_time = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
            return MsgBeginRedelegateResponse.deserialize(bytes);
          }
        }]);
        return MsgBeginRedelegateResponse;
      }(pb_1.Message);

      _v1beta.MsgBeginRedelegateResponse = MsgBeginRedelegateResponse;

      var MsgUndelegate = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(MsgUndelegate, _pb_1$Message9);

        var _super9 = _createSuper(MsgUndelegate);

        function MsgUndelegate(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, MsgUndelegate);
          _this14 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this14.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this14.validator_address = data.validator_address;
            }

            if ("amount" in data && data.amount != undefined) {
              _this14.amount = data.amount;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(MsgUndelegate, [{
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
          key: "amount",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.amount != null) {
              data.amount = this.amount.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this15 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (this.amount !== undefined) writer.writeMessage(3, this.amount, function () {
              return _this15.amount.serialize(writer);
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
            var message = new MsgUndelegate({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.amount != null) {
              message.amount = dependency_5.cosmos.base.v1beta1.Coin.fromObject(data.amount);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUndelegate();

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
                  reader.readMessage(message.amount, function () {
                    return message.amount = dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return MsgUndelegate.deserialize(bytes);
          }
        }]);
        return MsgUndelegate;
      }(pb_1.Message);

      _v1beta.MsgUndelegate = MsgUndelegate;

      var MsgUndelegateResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(MsgUndelegateResponse, _pb_1$Message10);

        var _super10 = _createSuper(MsgUndelegateResponse);

        function MsgUndelegateResponse(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, MsgUndelegateResponse);
          _this16 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("completion_time" in data && data.completion_time != undefined) {
              _this16.completion_time = data.completion_time;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(MsgUndelegateResponse, [{
          key: "completion_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.completion_time != null) {
              data.completion_time = this.completion_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this17 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.completion_time !== undefined) writer.writeMessage(1, this.completion_time, function () {
              return _this17.completion_time.serialize(writer);
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
            var message = new MsgUndelegateResponse({});

            if (data.completion_time != null) {
              message.completion_time = dependency_2.google.protobuf.Timestamp.fromObject(data.completion_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUndelegateResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.completion_time, function () {
                    return message.completion_time = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
            return MsgUndelegateResponse.deserialize(bytes);
          }
        }]);
        return MsgUndelegateResponse;
      }(pb_1.Message);

      _v1beta.MsgUndelegateResponse = MsgUndelegateResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        CreateValidator: {
          path: "/cosmos.staking.v1beta1.Msg/CreateValidator",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgCreateValidator.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgCreateValidatorResponse.deserialize(new Uint8Array(bytes));
          }
        },
        EditValidator: {
          path: "/cosmos.staking.v1beta1.Msg/EditValidator",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgEditValidator.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgEditValidatorResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Delegate: {
          path: "/cosmos.staking.v1beta1.Msg/Delegate",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgDelegate.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgDelegateResponse.deserialize(new Uint8Array(bytes));
          }
        },
        BeginRedelegate: {
          path: "/cosmos.staking.v1beta1.Msg/BeginRedelegate",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgBeginRedelegate.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgBeginRedelegateResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Undelegate: {
          path: "/cosmos.staking.v1beta1.Msg/Undelegate",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgUndelegate.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgUndelegateResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super11 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _this18;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this18 = _super11.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this18), "CreateValidator", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this18), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "CreateValidator", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this18), "EditValidator", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this18), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "EditValidator", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this18), "Delegate", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this18), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "Delegate", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this18), "BeginRedelegate", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this18), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "BeginRedelegate", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this18), "Undelegate", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this18), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "Undelegate", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          return _this18;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v1beta.MsgClient = MsgClient;
    })(v1beta1 || (v1beta1 = _staking.v1beta1 || (_staking.v1beta1 = {})));
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
})(cosmos || (exports.cosmos = cosmos = {}));