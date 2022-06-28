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

var dependency_3 = _interopRequireWildcard(require("./../../auth/v1beta1/auth"));

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
      var BaseVestingAccount = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(BaseVestingAccount, _pb_1$Message);

        var _super = _createSuper(BaseVestingAccount);

        function BaseVestingAccount(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, BaseVestingAccount);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_account" in data && data.base_account != undefined) {
              _this.base_account = data.base_account;
            }

            if ("original_vesting" in data && data.original_vesting != undefined) {
              _this.original_vesting = data.original_vesting;
            }

            if ("delegated_free" in data && data.delegated_free != undefined) {
              _this.delegated_free = data.delegated_free;
            }

            if ("delegated_vesting" in data && data.delegated_vesting != undefined) {
              _this.delegated_vesting = data.delegated_vesting;
            }

            if ("end_time" in data && data.end_time != undefined) {
              _this.end_time = data.end_time;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(BaseVestingAccount, [{
          key: "base_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.auth.v1beta1.BaseAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "original_vesting",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "delegated_free",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "delegated_vesting",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "end_time",
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

            if (this.base_account != null) {
              data.base_account = this.base_account.toObject();
            }

            if (this.original_vesting != null) {
              data.original_vesting = this.original_vesting.map(function (item) {
                return item.toObject();
              });
            }

            if (this.delegated_free != null) {
              data.delegated_free = this.delegated_free.map(function (item) {
                return item.toObject();
              });
            }

            if (this.delegated_vesting != null) {
              data.delegated_vesting = this.delegated_vesting.map(function (item) {
                return item.toObject();
              });
            }

            if (this.end_time != null) {
              data.end_time = this.end_time;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_account !== undefined) writer.writeMessage(1, this.base_account, function () {
              return _this2.base_account.serialize(writer);
            });
            if (this.original_vesting !== undefined) writer.writeRepeatedMessage(2, this.original_vesting, function (item) {
              return item.serialize(writer);
            });
            if (this.delegated_free !== undefined) writer.writeRepeatedMessage(3, this.delegated_free, function (item) {
              return item.serialize(writer);
            });
            if (this.delegated_vesting !== undefined) writer.writeRepeatedMessage(4, this.delegated_vesting, function (item) {
              return item.serialize(writer);
            });
            if (this.end_time !== undefined) writer.writeInt64(5, this.end_time);
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
            var message = new BaseVestingAccount({});

            if (data.base_account != null) {
              message.base_account = dependency_3.cosmos.auth.v1beta1.BaseAccount.fromObject(data.base_account);
            }

            if (data.original_vesting != null) {
              message.original_vesting = data.original_vesting.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.delegated_free != null) {
              message.delegated_free = data.delegated_free.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.delegated_vesting != null) {
              message.delegated_vesting = data.delegated_vesting.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.end_time != null) {
              message.end_time = data.end_time;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new BaseVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_account, function () {
                    return message.base_account = dependency_3.cosmos.auth.v1beta1.BaseAccount.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.original_vesting, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 3:
                  reader.readMessage(message.delegated_free, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 4:
                  reader.readMessage(message.delegated_vesting, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 5:
                  message.end_time = reader.readInt64();
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
            return BaseVestingAccount.deserialize(bytes);
          }
        }]);
        return BaseVestingAccount;
      }(pb_1.Message);

      _v1beta.BaseVestingAccount = BaseVestingAccount;

      var ContinuousVestingAccount = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ContinuousVestingAccount, _pb_1$Message2);

        var _super2 = _createSuper(ContinuousVestingAccount);

        function ContinuousVestingAccount(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ContinuousVestingAccount);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
              _this3.base_vesting_account = data.base_vesting_account;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this3.start_time = data.start_time;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ContinuousVestingAccount, [{
          key: "base_vesting_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "start_time",
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

            if (this.base_vesting_account != null) {
              data.base_vesting_account = this.base_vesting_account.toObject();
            }

            if (this.start_time != null) {
              data.start_time = this.start_time;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_vesting_account !== undefined) writer.writeMessage(1, this.base_vesting_account, function () {
              return _this4.base_vesting_account.serialize(writer);
            });
            if (this.start_time !== undefined) writer.writeInt64(2, this.start_time);
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
            var message = new ContinuousVestingAccount({});

            if (data.base_vesting_account != null) {
              message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }

            if (data.start_time != null) {
              message.start_time = data.start_time;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ContinuousVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_vesting_account, function () {
                    return message.base_vesting_account = BaseVestingAccount.deserialize(reader);
                  });
                  break;

                case 2:
                  message.start_time = reader.readInt64();
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
            return ContinuousVestingAccount.deserialize(bytes);
          }
        }]);
        return ContinuousVestingAccount;
      }(pb_1.Message);

      _v1beta.ContinuousVestingAccount = ContinuousVestingAccount;

      var DelayedVestingAccount = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(DelayedVestingAccount, _pb_1$Message3);

        var _super3 = _createSuper(DelayedVestingAccount);

        function DelayedVestingAccount(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, DelayedVestingAccount);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
              _this5.base_vesting_account = data.base_vesting_account;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(DelayedVestingAccount, [{
          key: "base_vesting_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.base_vesting_account != null) {
              data.base_vesting_account = this.base_vesting_account.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this6 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_vesting_account !== undefined) writer.writeMessage(1, this.base_vesting_account, function () {
              return _this6.base_vesting_account.serialize(writer);
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
            var message = new DelayedVestingAccount({});

            if (data.base_vesting_account != null) {
              message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelayedVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_vesting_account, function () {
                    return message.base_vesting_account = BaseVestingAccount.deserialize(reader);
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
            return DelayedVestingAccount.deserialize(bytes);
          }
        }]);
        return DelayedVestingAccount;
      }(pb_1.Message);

      _v1beta.DelayedVestingAccount = DelayedVestingAccount;

      var Period = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(Period, _pb_1$Message4);

        var _super4 = _createSuper(Period);

        function Period(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, Period);
          _this7 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("length" in data && data.length != undefined) {
              _this7.length = data.length;
            }

            if ("amount" in data && data.amount != undefined) {
              _this7.amount = data.amount;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(Period, [{
          key: "length",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.length != null) {
              data.length = this.length;
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
            if (this.length !== undefined) writer.writeInt64(1, this.length);
            if (this.amount !== undefined) writer.writeRepeatedMessage(2, this.amount, function (item) {
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
            var message = new Period({});

            if (data.length != null) {
              message.length = data.length;
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
                message = new Period();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.length = reader.readInt64();
                  break;

                case 2:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
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
            return Period.deserialize(bytes);
          }
        }]);
        return Period;
      }(pb_1.Message);

      _v1beta.Period = Period;

      var PeriodicVestingAccount = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(PeriodicVestingAccount, _pb_1$Message5);

        var _super5 = _createSuper(PeriodicVestingAccount);

        function PeriodicVestingAccount(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, PeriodicVestingAccount);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
              _this8.base_vesting_account = data.base_vesting_account;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this8.start_time = data.start_time;
            }

            if ("vesting_periods" in data && data.vesting_periods != undefined) {
              _this8.vesting_periods = data.vesting_periods;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(PeriodicVestingAccount, [{
          key: "base_vesting_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "start_time",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "vesting_periods",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, Period, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.base_vesting_account != null) {
              data.base_vesting_account = this.base_vesting_account.toObject();
            }

            if (this.start_time != null) {
              data.start_time = this.start_time;
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
            var _this9 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_vesting_account !== undefined) writer.writeMessage(1, this.base_vesting_account, function () {
              return _this9.base_vesting_account.serialize(writer);
            });
            if (this.start_time !== undefined) writer.writeInt64(2, this.start_time);
            if (this.vesting_periods !== undefined) writer.writeRepeatedMessage(3, this.vesting_periods, function (item) {
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
            var message = new PeriodicVestingAccount({});

            if (data.base_vesting_account != null) {
              message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }

            if (data.start_time != null) {
              message.start_time = data.start_time;
            }

            if (data.vesting_periods != null) {
              message.vesting_periods = data.vesting_periods.map(function (item) {
                return Period.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new PeriodicVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_vesting_account, function () {
                    return message.base_vesting_account = BaseVestingAccount.deserialize(reader);
                  });
                  break;

                case 2:
                  message.start_time = reader.readInt64();
                  break;

                case 3:
                  reader.readMessage(message.vesting_periods, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, Period.deserialize(reader), Period);
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
            return PeriodicVestingAccount.deserialize(bytes);
          }
        }]);
        return PeriodicVestingAccount;
      }(pb_1.Message);

      _v1beta.PeriodicVestingAccount = PeriodicVestingAccount;

      var PermanentLockedAccount = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(PermanentLockedAccount, _pb_1$Message6);

        var _super6 = _createSuper(PermanentLockedAccount);

        function PermanentLockedAccount(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, PermanentLockedAccount);
          _this10 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
              _this10.base_vesting_account = data.base_vesting_account;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(PermanentLockedAccount, [{
          key: "base_vesting_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.base_vesting_account != null) {
              data.base_vesting_account = this.base_vesting_account.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_vesting_account !== undefined) writer.writeMessage(1, this.base_vesting_account, function () {
              return _this11.base_vesting_account.serialize(writer);
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
            var message = new PermanentLockedAccount({});

            if (data.base_vesting_account != null) {
              message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new PermanentLockedAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_vesting_account, function () {
                    return message.base_vesting_account = BaseVestingAccount.deserialize(reader);
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
            return PermanentLockedAccount.deserialize(bytes);
          }
        }]);
        return PermanentLockedAccount;
      }(pb_1.Message);

      _v1beta.PermanentLockedAccount = PermanentLockedAccount;
    })(v1beta1 || (v1beta1 = _vesting.v1beta1 || (_vesting.v1beta1 = {})));
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
})(cosmos || (exports.cosmos = cosmos = {}));