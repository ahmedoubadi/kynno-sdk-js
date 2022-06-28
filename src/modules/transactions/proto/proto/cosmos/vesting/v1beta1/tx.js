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
  var vesting;

  (function (_vesting) {
    var v1beta1;

    (function (_v1beta) {
      var MsgCreateVestingAccount = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgCreateVestingAccount, _pb_1$Message);

        var _super = _createSuper(MsgCreateVestingAccount);

        function MsgCreateVestingAccount(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgCreateVestingAccount);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("from_address" in data && data.from_address != undefined) {
              _this.from_address = data.from_address;
            }

            if ("to_address" in data && data.to_address != undefined) {
              _this.to_address = data.to_address;
            }

            if ("amount" in data && data.amount != undefined) {
              _this.amount = data.amount;
            }

            if ("end_time" in data && data.end_time != undefined) {
              _this.end_time = data.end_time;
            }

            if ("delayed" in data && data.delayed != undefined) {
              _this.delayed = data.delayed;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgCreateVestingAccount, [{
          key: "from_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "to_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "end_time",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "delayed",
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

            if (this.from_address != null) {
              data.from_address = this.from_address;
            }

            if (this.to_address != null) {
              data.to_address = this.to_address;
            }

            if (this.amount != null) {
              data.amount = this.amount.map(function (item) {
                return item.toObject();
              });
            }

            if (this.end_time != null) {
              data.end_time = this.end_time;
            }

            if (this.delayed != null) {
              data.delayed = this.delayed;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.from_address === "string" && this.from_address.length) writer.writeString(1, this.from_address);
            if (typeof this.to_address === "string" && this.to_address.length) writer.writeString(2, this.to_address);
            if (this.amount !== undefined) writer.writeRepeatedMessage(3, this.amount, function (item) {
              return item.serialize(writer);
            });
            if (this.end_time !== undefined) writer.writeInt64(4, this.end_time);
            if (this.delayed !== undefined) writer.writeBool(5, this.delayed);
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
            var message = new MsgCreateVestingAccount({});

            if (data.from_address != null) {
              message.from_address = data.from_address;
            }

            if (data.to_address != null) {
              message.to_address = data.to_address;
            }

            if (data.amount != null) {
              message.amount = data.amount.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.end_time != null) {
              message.end_time = data.end_time;
            }

            if (data.delayed != null) {
              message.delayed = data.delayed;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.from_address = reader.readString();
                  break;

                case 2:
                  message.to_address = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 4:
                  message.end_time = reader.readInt64();
                  break;

                case 5:
                  message.delayed = reader.readBool();
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
            return MsgCreateVestingAccount.deserialize(bytes);
          }
        }]);
        return MsgCreateVestingAccount;
      }(pb_1.Message);

      _v1beta.MsgCreateVestingAccount = MsgCreateVestingAccount;

      var MsgCreateVestingAccountResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgCreateVestingAccountResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgCreateVestingAccountResponse);

        function MsgCreateVestingAccountResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, MsgCreateVestingAccountResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this2;
        }

        (0, _createClass2["default"])(MsgCreateVestingAccountResponse, [{
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
            var message = new MsgCreateVestingAccountResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateVestingAccountResponse();

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
            return MsgCreateVestingAccountResponse.deserialize(bytes);
          }
        }]);
        return MsgCreateVestingAccountResponse;
      }(pb_1.Message);

      _v1beta.MsgCreateVestingAccountResponse = MsgCreateVestingAccountResponse;
    })(v1beta1 || (v1beta1 = _vesting.v1beta1 || (_vesting.v1beta1 = {})));
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
})(cosmos || (exports.cosmos = cosmos = {}));