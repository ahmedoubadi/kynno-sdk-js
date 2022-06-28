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

var dependency_3 = _interopRequireWildcard(require("./bank"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var bank;

  (function (_bank) {
    var v1beta1;

    (function (_v1beta) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("balances" in data && data.balances != undefined) {
              _this.balances = data.balances;
            }

            if ("supply" in data && data.supply != undefined) {
              _this.supply = data.supply;
            }

            if ("denom_metadata" in data && data.denom_metadata != undefined) {
              _this.denom_metadata = data.denom_metadata;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.bank.v1beta1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "balances",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, Balance, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "supply",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "denom_metadata",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Metadata, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
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

            if (this.balances != null) {
              data.balances = this.balances.map(function (item) {
                return item.toObject();
              });
            }

            if (this.supply != null) {
              data.supply = this.supply.map(function (item) {
                return item.toObject();
              });
            }

            if (this.denom_metadata != null) {
              data.denom_metadata = this.denom_metadata.map(function (item) {
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
            if (this.balances !== undefined) writer.writeRepeatedMessage(2, this.balances, function (item) {
              return item.serialize(writer);
            });
            if (this.supply !== undefined) writer.writeRepeatedMessage(3, this.supply, function (item) {
              return item.serialize(writer);
            });
            if (this.denom_metadata !== undefined) writer.writeRepeatedMessage(4, this.denom_metadata, function (item) {
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
              message.params = dependency_3.cosmos.bank.v1beta1.Params.fromObject(data.params);
            }

            if (data.balances != null) {
              message.balances = data.balances.map(function (item) {
                return Balance.fromObject(item);
              });
            }

            if (data.supply != null) {
              message.supply = data.supply.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.denom_metadata != null) {
              message.denom_metadata = data.denom_metadata.map(function (item) {
                return dependency_3.cosmos.bank.v1beta1.Metadata.fromObject(item);
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
                    return message.params = dependency_3.cosmos.bank.v1beta1.Params.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.balances, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, Balance.deserialize(reader), Balance);
                  });
                  break;

                case 3:
                  reader.readMessage(message.supply, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 4:
                  reader.readMessage(message.denom_metadata, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_3.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Metadata);
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

      var Balance = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Balance, _pb_1$Message2);

        var _super2 = _createSuper(Balance);

        function Balance(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Balance);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this3.address = data.address;
            }

            if ("coins" in data && data.coins != undefined) {
              _this3.coins = data.coins;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Balance, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "coins",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.coins != null) {
              data.coins = this.coins.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.coins !== undefined) writer.writeRepeatedMessage(2, this.coins, function (item) {
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
            var message = new Balance({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.coins != null) {
              message.coins = data.coins.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Balance();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.coins, function () {
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
            return Balance.deserialize(bytes);
          }
        }]);
        return Balance;
      }(pb_1.Message);

      _v1beta.Balance = Balance;
    })(v1beta1 || (v1beta1 = _bank.v1beta1 || (_bank.v1beta1 = {})));
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
})(cosmos || (exports.cosmos = cosmos = {}));