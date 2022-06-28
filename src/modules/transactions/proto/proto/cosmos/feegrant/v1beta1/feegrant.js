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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_4 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_5 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_6 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var feegrant;

  (function (_feegrant) {
    var v1beta1;

    (function (_v1beta) {
      var BasicAllowance = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(BasicAllowance, _pb_1$Message);

        var _super = _createSuper(BasicAllowance);

        function BasicAllowance(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, BasicAllowance);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("spend_limit" in data && data.spend_limit != undefined) {
              _this.spend_limit = data.spend_limit;
            }

            if ("expiration" in data && data.expiration != undefined) {
              _this.expiration = data.expiration;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(BasicAllowance, [{
          key: "spend_limit",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "expiration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.spend_limit != null) {
              data.spend_limit = this.spend_limit.map(function (item) {
                return item.toObject();
              });
            }

            if (this.expiration != null) {
              data.expiration = this.expiration.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.spend_limit !== undefined) writer.writeRepeatedMessage(1, this.spend_limit, function (item) {
              return item.serialize(writer);
            });
            if (this.expiration !== undefined) writer.writeMessage(2, this.expiration, function () {
              return _this2.expiration.serialize(writer);
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
            var message = new BasicAllowance({});

            if (data.spend_limit != null) {
              message.spend_limit = data.spend_limit.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.expiration != null) {
              message.expiration = dependency_5.google.protobuf.Timestamp.fromObject(data.expiration);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new BasicAllowance();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.spend_limit, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 2:
                  reader.readMessage(message.expiration, function () {
                    return message.expiration = dependency_5.google.protobuf.Timestamp.deserialize(reader);
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
            return BasicAllowance.deserialize(bytes);
          }
        }]);
        return BasicAllowance;
      }(pb_1.Message);

      _v1beta.BasicAllowance = BasicAllowance;

      var PeriodicAllowance = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(PeriodicAllowance, _pb_1$Message2);

        var _super2 = _createSuper(PeriodicAllowance);

        function PeriodicAllowance(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, PeriodicAllowance);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3, 4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("basic" in data && data.basic != undefined) {
              _this3.basic = data.basic;
            }

            if ("period" in data && data.period != undefined) {
              _this3.period = data.period;
            }

            if ("period_spend_limit" in data && data.period_spend_limit != undefined) {
              _this3.period_spend_limit = data.period_spend_limit;
            }

            if ("period_can_spend" in data && data.period_can_spend != undefined) {
              _this3.period_can_spend = data.period_can_spend;
            }

            if ("period_reset" in data && data.period_reset != undefined) {
              _this3.period_reset = data.period_reset;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(PeriodicAllowance, [{
          key: "basic",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BasicAllowance, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "period",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Duration, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "period_spend_limit",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "period_can_spend",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "period_reset",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 5);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
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

            if (this.basic != null) {
              data.basic = this.basic.toObject();
            }

            if (this.period != null) {
              data.period = this.period.toObject();
            }

            if (this.period_spend_limit != null) {
              data.period_spend_limit = this.period_spend_limit.map(function (item) {
                return item.toObject();
              });
            }

            if (this.period_can_spend != null) {
              data.period_can_spend = this.period_can_spend.map(function (item) {
                return item.toObject();
              });
            }

            if (this.period_reset != null) {
              data.period_reset = this.period_reset.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.basic !== undefined) writer.writeMessage(1, this.basic, function () {
              return _this4.basic.serialize(writer);
            });
            if (this.period !== undefined) writer.writeMessage(2, this.period, function () {
              return _this4.period.serialize(writer);
            });
            if (this.period_spend_limit !== undefined) writer.writeRepeatedMessage(3, this.period_spend_limit, function (item) {
              return item.serialize(writer);
            });
            if (this.period_can_spend !== undefined) writer.writeRepeatedMessage(4, this.period_can_spend, function (item) {
              return item.serialize(writer);
            });
            if (this.period_reset !== undefined) writer.writeMessage(5, this.period_reset, function () {
              return _this4.period_reset.serialize(writer);
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
            var message = new PeriodicAllowance({});

            if (data.basic != null) {
              message.basic = BasicAllowance.fromObject(data.basic);
            }

            if (data.period != null) {
              message.period = dependency_6.google.protobuf.Duration.fromObject(data.period);
            }

            if (data.period_spend_limit != null) {
              message.period_spend_limit = data.period_spend_limit.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.period_can_spend != null) {
              message.period_can_spend = data.period_can_spend.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.period_reset != null) {
              message.period_reset = dependency_5.google.protobuf.Timestamp.fromObject(data.period_reset);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new PeriodicAllowance();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.basic, function () {
                    return message.basic = BasicAllowance.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.period, function () {
                    return message.period = dependency_6.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.period_spend_limit, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 4:
                  reader.readMessage(message.period_can_spend, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 5:
                  reader.readMessage(message.period_reset, function () {
                    return message.period_reset = dependency_5.google.protobuf.Timestamp.deserialize(reader);
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
            return PeriodicAllowance.deserialize(bytes);
          }
        }]);
        return PeriodicAllowance;
      }(pb_1.Message);

      _v1beta.PeriodicAllowance = PeriodicAllowance;

      var AllowedMsgAllowance = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(AllowedMsgAllowance, _pb_1$Message3);

        var _super3 = _createSuper(AllowedMsgAllowance);

        function AllowedMsgAllowance(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, AllowedMsgAllowance);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("allowance" in data && data.allowance != undefined) {
              _this5.allowance = data.allowance;
            }

            if ("allowed_messages" in data && data.allowed_messages != undefined) {
              _this5.allowed_messages = data.allowed_messages;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(AllowedMsgAllowance, [{
          key: "allowance",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "allowed_messages",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
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

            if (this.allowance != null) {
              data.allowance = this.allowance.toObject();
            }

            if (this.allowed_messages != null) {
              data.allowed_messages = this.allowed_messages;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this6 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.allowance !== undefined) writer.writeMessage(1, this.allowance, function () {
              return _this6.allowance.serialize(writer);
            });
            if (this.allowed_messages !== undefined) writer.writeRepeatedString(2, this.allowed_messages);
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
            var message = new AllowedMsgAllowance({});

            if (data.allowance != null) {
              message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }

            if (data.allowed_messages != null) {
              message.allowed_messages = data.allowed_messages;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new AllowedMsgAllowance();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.allowance, function () {
                    return message.allowance = dependency_2.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 2:
                  pb_1.Message.addToRepeatedField(message, 2, reader.readString());
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
            return AllowedMsgAllowance.deserialize(bytes);
          }
        }]);
        return AllowedMsgAllowance;
      }(pb_1.Message);

      _v1beta.AllowedMsgAllowance = AllowedMsgAllowance;

      var Grant = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(Grant, _pb_1$Message4);

        var _super4 = _createSuper(Grant);

        function Grant(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, Grant);
          _this7 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("granter" in data && data.granter != undefined) {
              _this7.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this7.grantee = data.grantee;
            }

            if ("allowance" in data && data.allowance != undefined) {
              _this7.allowance = data.allowance;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(Grant, [{
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "grantee",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "allowance",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            if (this.allowance != null) {
              data.allowance = this.allowance.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this8 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(2, this.grantee);
            if (this.allowance !== undefined) writer.writeMessage(3, this.allowance, function () {
              return _this8.allowance.serialize(writer);
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
            var message = new Grant({});

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            if (data.allowance != null) {
              message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Grant();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.granter = reader.readString();
                  break;

                case 2:
                  message.grantee = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.allowance, function () {
                    return message.allowance = dependency_2.google.protobuf.Any.deserialize(reader);
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
            return Grant.deserialize(bytes);
          }
        }]);
        return Grant;
      }(pb_1.Message);

      _v1beta.Grant = Grant;
    })(v1beta1 || (v1beta1 = _feegrant.v1beta1 || (_feegrant.v1beta1 = {})));
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
})(cosmos || (exports.cosmos = cosmos = {}));