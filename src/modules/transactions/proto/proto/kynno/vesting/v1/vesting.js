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

var dependency_2 = _interopRequireWildcard(require("./../../../cosmos/vesting/v1beta1/vesting"));

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var vesting;

  (function (_vesting) {
    var v1;

    (function (_v) {
      var ClawbackVestingAccount = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(ClawbackVestingAccount, _pb_1$Message);

        var _super = _createSuper(ClawbackVestingAccount);

        function ClawbackVestingAccount(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, ClawbackVestingAccount);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4, 5], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
              _this.base_vesting_account = data.base_vesting_account;
            }

            if ("funder_address" in data && data.funder_address != undefined) {
              _this.funder_address = data.funder_address;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this.start_time = data.start_time;
            }

            if ("lockup_periods" in data && data.lockup_periods != undefined) {
              _this.lockup_periods = data.lockup_periods;
            }

            if ("vesting_periods" in data && data.vesting_periods != undefined) {
              _this.vesting_periods = data.vesting_periods;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(ClawbackVestingAccount, [{
          key: "base_vesting_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "funder_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "lockup_periods",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.vesting.v1beta1.Period, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "vesting_periods",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.vesting.v1beta1.Period, 5);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
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

            if (this.base_vesting_account != null) {
              data.base_vesting_account = this.base_vesting_account.toObject();
            }

            if (this.funder_address != null) {
              data.funder_address = this.funder_address;
            }

            if (this.start_time != null) {
              data.start_time = this.start_time.toObject();
            }

            if (this.lockup_periods != null) {
              data.lockup_periods = this.lockup_periods.map(function (item) {
                return item.toObject();
              });
            }

            if (this.vesting_periods != null) {
              data.vesting_periods = this.vesting_periods.map(function (item) {
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
            if (this.base_vesting_account !== undefined) writer.writeMessage(1, this.base_vesting_account, function () {
              return _this2.base_vesting_account.serialize(writer);
            });
            if (typeof this.funder_address === "string" && this.funder_address.length) writer.writeString(2, this.funder_address);
            if (this.start_time !== undefined) writer.writeMessage(3, this.start_time, function () {
              return _this2.start_time.serialize(writer);
            });
            if (this.lockup_periods !== undefined) writer.writeRepeatedMessage(4, this.lockup_periods, function (item) {
              return item.serialize(writer);
            });
            if (this.vesting_periods !== undefined) writer.writeRepeatedMessage(5, this.vesting_periods, function (item) {
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
            var message = new ClawbackVestingAccount({});

            if (data.base_vesting_account != null) {
              message.base_vesting_account = dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.fromObject(data.base_vesting_account);
            }

            if (data.funder_address != null) {
              message.funder_address = data.funder_address;
            }

            if (data.start_time != null) {
              message.start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.start_time);
            }

            if (data.lockup_periods != null) {
              message.lockup_periods = data.lockup_periods.map(function (item) {
                return dependency_2.cosmos.vesting.v1beta1.Period.fromObject(item);
              });
            }

            if (data.vesting_periods != null) {
              message.vesting_periods = data.vesting_periods.map(function (item) {
                return dependency_2.cosmos.vesting.v1beta1.Period.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ClawbackVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_vesting_account, function () {
                    return message.base_vesting_account = dependency_2.cosmos.vesting.v1beta1.BaseVestingAccount.deserialize(reader);
                  });
                  break;

                case 2:
                  message.funder_address = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.start_time, function () {
                    return message.start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.lockup_periods, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_2.cosmos.vesting.v1beta1.Period);
                  });
                  break;

                case 5:
                  reader.readMessage(message.vesting_periods, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_2.cosmos.vesting.v1beta1.Period);
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
            return ClawbackVestingAccount.deserialize(bytes);
          }
        }]);
        return ClawbackVestingAccount;
      }(pb_1.Message);

      _v.ClawbackVestingAccount = ClawbackVestingAccount;
    })(v1 || (v1 = _vesting.v1 || (_vesting.v1 = {})));
  })(vesting || (vesting = _kynno.vesting || (_kynno.vesting = {})));
})(kynno || (exports.kynno = kynno = {}));