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

var dependency_2 = _interopRequireWildcard(require("./../controller/v1/controller"));

var dependency_3 = _interopRequireWildcard(require("./../host/v1/host"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var applications;

  (function (_applications) {
    var interchain_accounts;

    (function (_interchain_accounts) {
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
              if ("controller_genesis_state" in data && data.controller_genesis_state != undefined) {
                _this.controller_genesis_state = data.controller_genesis_state;
              }

              if ("host_genesis_state" in data && data.host_genesis_state != undefined) {
                _this.host_genesis_state = data.host_genesis_state;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GenesisState, [{
            key: "controller_genesis_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ControllerGenesisState, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "host_genesis_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, HostGenesisState, 2);
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

              if (this.controller_genesis_state != null) {
                data.controller_genesis_state = this.controller_genesis_state.toObject();
              }

              if (this.host_genesis_state != null) {
                data.host_genesis_state = this.host_genesis_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.controller_genesis_state !== undefined) writer.writeMessage(1, this.controller_genesis_state, function () {
                return _this2.controller_genesis_state.serialize(writer);
              });
              if (this.host_genesis_state !== undefined) writer.writeMessage(2, this.host_genesis_state, function () {
                return _this2.host_genesis_state.serialize(writer);
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

              if (data.controller_genesis_state != null) {
                message.controller_genesis_state = ControllerGenesisState.fromObject(data.controller_genesis_state);
              }

              if (data.host_genesis_state != null) {
                message.host_genesis_state = HostGenesisState.fromObject(data.host_genesis_state);
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
                    reader.readMessage(message.controller_genesis_state, function () {
                      return message.controller_genesis_state = ControllerGenesisState.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.host_genesis_state, function () {
                      return message.host_genesis_state = HostGenesisState.deserialize(reader);
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

        var ControllerGenesisState = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(ControllerGenesisState, _pb_1$Message2);

          var _super2 = _createSuper(ControllerGenesisState);

          function ControllerGenesisState(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, ControllerGenesisState);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("active_channels" in data && data.active_channels != undefined) {
                _this3.active_channels = data.active_channels;
              }

              if ("interchain_accounts" in data && data.interchain_accounts != undefined) {
                _this3.interchain_accounts = data.interchain_accounts;
              }

              if ("ports" in data && data.ports != undefined) {
                _this3.ports = data.ports;
              }

              if ("params" in data && data.params != undefined) {
                _this3.params = data.params;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ControllerGenesisState, [{
            key: "active_channels",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, ActiveChannel, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "interchain_accounts",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, RegisteredInterchainAccount, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "ports",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.applications.interchain_accounts.controller.v1.Params, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.active_channels != null) {
                data.active_channels = this.active_channels.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.interchain_accounts != null) {
                data.interchain_accounts = this.interchain_accounts.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.ports != null) {
                data.ports = this.ports;
              }

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.active_channels !== undefined) writer.writeRepeatedMessage(1, this.active_channels, function (item) {
                return item.serialize(writer);
              });
              if (this.interchain_accounts !== undefined) writer.writeRepeatedMessage(2, this.interchain_accounts, function (item) {
                return item.serialize(writer);
              });
              if (this.ports !== undefined) writer.writeRepeatedString(3, this.ports);
              if (this.params !== undefined) writer.writeMessage(4, this.params, function () {
                return _this4.params.serialize(writer);
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
              var message = new ControllerGenesisState({});

              if (data.active_channels != null) {
                message.active_channels = data.active_channels.map(function (item) {
                  return ActiveChannel.fromObject(item);
                });
              }

              if (data.interchain_accounts != null) {
                message.interchain_accounts = data.interchain_accounts.map(function (item) {
                  return RegisteredInterchainAccount.fromObject(item);
                });
              }

              if (data.ports != null) {
                message.ports = data.ports;
              }

              if (data.params != null) {
                message.params = dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.fromObject(data.params);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ControllerGenesisState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.active_channels, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, ActiveChannel.deserialize(reader), ActiveChannel);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.interchain_accounts, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, RegisteredInterchainAccount.deserialize(reader), RegisteredInterchainAccount);
                    });
                    break;

                  case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;

                  case 4:
                    reader.readMessage(message.params, function () {
                      return message.params = dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.deserialize(reader);
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
              return ControllerGenesisState.deserialize(bytes);
            }
          }]);
          return ControllerGenesisState;
        }(pb_1.Message);

        _v.ControllerGenesisState = ControllerGenesisState;

        var HostGenesisState = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(HostGenesisState, _pb_1$Message3);

          var _super3 = _createSuper(HostGenesisState);

          function HostGenesisState(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, HostGenesisState);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [1, 2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("active_channels" in data && data.active_channels != undefined) {
                _this5.active_channels = data.active_channels;
              }

              if ("interchain_accounts" in data && data.interchain_accounts != undefined) {
                _this5.interchain_accounts = data.interchain_accounts;
              }

              if ("port" in data && data.port != undefined) {
                _this5.port = data.port;
              }

              if ("params" in data && data.params != undefined) {
                _this5.params = data.params;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(HostGenesisState, [{
            key: "active_channels",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, ActiveChannel, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "interchain_accounts",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, RegisteredInterchainAccount, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "port",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.interchain_accounts.host.v1.Params, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.active_channels != null) {
                data.active_channels = this.active_channels.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.interchain_accounts != null) {
                data.interchain_accounts = this.interchain_accounts.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.port != null) {
                data.port = this.port;
              }

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this6 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.active_channels !== undefined) writer.writeRepeatedMessage(1, this.active_channels, function (item) {
                return item.serialize(writer);
              });
              if (this.interchain_accounts !== undefined) writer.writeRepeatedMessage(2, this.interchain_accounts, function (item) {
                return item.serialize(writer);
              });
              if (typeof this.port === "string" && this.port.length) writer.writeString(3, this.port);
              if (this.params !== undefined) writer.writeMessage(4, this.params, function () {
                return _this6.params.serialize(writer);
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
              var message = new HostGenesisState({});

              if (data.active_channels != null) {
                message.active_channels = data.active_channels.map(function (item) {
                  return ActiveChannel.fromObject(item);
                });
              }

              if (data.interchain_accounts != null) {
                message.interchain_accounts = data.interchain_accounts.map(function (item) {
                  return RegisteredInterchainAccount.fromObject(item);
                });
              }

              if (data.port != null) {
                message.port = data.port;
              }

              if (data.params != null) {
                message.params = dependency_3.ibc.applications.interchain_accounts.host.v1.Params.fromObject(data.params);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new HostGenesisState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.active_channels, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, ActiveChannel.deserialize(reader), ActiveChannel);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.interchain_accounts, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, RegisteredInterchainAccount.deserialize(reader), RegisteredInterchainAccount);
                    });
                    break;

                  case 3:
                    message.port = reader.readString();
                    break;

                  case 4:
                    reader.readMessage(message.params, function () {
                      return message.params = dependency_3.ibc.applications.interchain_accounts.host.v1.Params.deserialize(reader);
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
              return HostGenesisState.deserialize(bytes);
            }
          }]);
          return HostGenesisState;
        }(pb_1.Message);

        _v.HostGenesisState = HostGenesisState;

        var ActiveChannel = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(ActiveChannel, _pb_1$Message4);

          var _super4 = _createSuper(ActiveChannel);

          function ActiveChannel(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, ActiveChannel);
            _this7 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this7.connection_id = data.connection_id;
              }

              if ("port_id" in data && data.port_id != undefined) {
                _this7.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this7.channel_id = data.channel_id;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(ActiveChannel, [{
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "channel_id",
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(2, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(3, this.channel_id);
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
              var message = new ActiveChannel({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ActiveChannel();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
                    break;

                  case 2:
                    message.port_id = reader.readString();
                    break;

                  case 3:
                    message.channel_id = reader.readString();
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
              return ActiveChannel.deserialize(bytes);
            }
          }]);
          return ActiveChannel;
        }(pb_1.Message);

        _v.ActiveChannel = ActiveChannel;

        var RegisteredInterchainAccount = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(RegisteredInterchainAccount, _pb_1$Message5);

          var _super5 = _createSuper(RegisteredInterchainAccount);

          function RegisteredInterchainAccount(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, RegisteredInterchainAccount);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this8.connection_id = data.connection_id;
              }

              if ("port_id" in data && data.port_id != undefined) {
                _this8.port_id = data.port_id;
              }

              if ("account_address" in data && data.account_address != undefined) {
                _this8.account_address = data.account_address;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(RegisteredInterchainAccount, [{
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "account_address",
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.account_address != null) {
                data.account_address = this.account_address;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(2, this.port_id);
              if (typeof this.account_address === "string" && this.account_address.length) writer.writeString(3, this.account_address);
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
              var message = new RegisteredInterchainAccount({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.account_address != null) {
                message.account_address = data.account_address;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new RegisteredInterchainAccount();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
                    break;

                  case 2:
                    message.port_id = reader.readString();
                    break;

                  case 3:
                    message.account_address = reader.readString();
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
              return RegisteredInterchainAccount.deserialize(bytes);
            }
          }]);
          return RegisteredInterchainAccount;
        }(pb_1.Message);

        _v.RegisteredInterchainAccount = RegisteredInterchainAccount;
      })(v1 || (v1 = _interchain_accounts.v1 || (_interchain_accounts.v1 = {})));
    })(interchain_accounts || (interchain_accounts = _applications.interchain_accounts || (_applications.interchain_accounts = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));