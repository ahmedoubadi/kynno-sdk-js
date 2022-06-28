"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../client/v1/genesis"));

var dependency_3 = _interopRequireWildcard(require("./../../connection/v1/genesis"));

var dependency_4 = _interopRequireWildcard(require("./../../channel/v1/genesis"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var core;

  (function (_core) {
    var types;

    (function (_types) {
      var v1;

      (function (_v) {
        var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(GenesisState, _pb_1$Message);

          var _super = _createSuper(GenesisState);

          function GenesisState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, GenesisState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_genesis" in data && data.client_genesis != undefined) {
                _this.client_genesis = data.client_genesis;
              }

              if ("connection_genesis" in data && data.connection_genesis != undefined) {
                _this.connection_genesis = data.connection_genesis;
              }

              if ("channel_genesis" in data && data.channel_genesis != undefined) {
                _this.channel_genesis = data.channel_genesis;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GenesisState, [{
            key: "client_genesis",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.GenesisState, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "connection_genesis",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.connection.v1.GenesisState, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "channel_genesis",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.channel.v1.GenesisState, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.client_genesis != null) {
                data.client_genesis = this.client_genesis.toObject();
              }

              if (this.connection_genesis != null) {
                data.connection_genesis = this.connection_genesis.toObject();
              }

              if (this.channel_genesis != null) {
                data.channel_genesis = this.channel_genesis.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.client_genesis !== undefined) writer.writeMessage(1, this.client_genesis, function () {
                return _this2.client_genesis.serialize(writer);
              });
              if (this.connection_genesis !== undefined) writer.writeMessage(2, this.connection_genesis, function () {
                return _this2.connection_genesis.serialize(writer);
              });
              if (this.channel_genesis !== undefined) writer.writeMessage(3, this.channel_genesis, function () {
                return _this2.channel_genesis.serialize(writer);
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

              if (data.client_genesis != null) {
                message.client_genesis = dependency_2.ibc.core.client.v1.GenesisState.fromObject(data.client_genesis);
              }

              if (data.connection_genesis != null) {
                message.connection_genesis = dependency_3.ibc.core.connection.v1.GenesisState.fromObject(data.connection_genesis);
              }

              if (data.channel_genesis != null) {
                message.channel_genesis = dependency_4.ibc.core.channel.v1.GenesisState.fromObject(data.channel_genesis);
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
                    reader.readMessage(message.client_genesis, function () {
                      return message.client_genesis = dependency_2.ibc.core.client.v1.GenesisState.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.connection_genesis, function () {
                      return message.connection_genesis = dependency_3.ibc.core.connection.v1.GenesisState.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.channel_genesis, function () {
                      return message.channel_genesis = dependency_4.ibc.core.channel.v1.GenesisState.deserialize(reader);
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

        _v.GenesisState = GenesisState;
      })(v1 || (v1 = _types.v1 || (_types.v1 = {})));
    })(types || (types = _core.types || (_core.types = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));