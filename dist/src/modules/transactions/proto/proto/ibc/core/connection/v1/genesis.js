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

var dependency_2 = _interopRequireWildcard(require("./connection"));

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
    var connection;

    (function (_connection) {
      var v1;

      (function (_v) {
        var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(GenesisState, _pb_1$Message);

          var _super = _createSuper(GenesisState);

          function GenesisState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, GenesisState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1, 2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connections" in data && data.connections != undefined) {
                _this.connections = data.connections;
              }

              if ("client_connection_paths" in data && data.client_connection_paths != undefined) {
                _this.client_connection_paths = data.client_connection_paths;
              }

              if ("next_connection_sequence" in data && data.next_connection_sequence != undefined) {
                _this.next_connection_sequence = data.next_connection_sequence;
              }

              if ("params" in data && data.params != undefined) {
                _this.params = data.params;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GenesisState, [{
            key: "connections",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.connection.v1.IdentifiedConnection, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "client_connection_paths",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.connection.v1.ConnectionPaths, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "next_connection_sequence",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.connection.v1.Params, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.connections != null) {
                data.connections = this.connections.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.client_connection_paths != null) {
                data.client_connection_paths = this.client_connection_paths.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.next_connection_sequence != null) {
                data.next_connection_sequence = this.next_connection_sequence;
              }

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.connections !== undefined) writer.writeRepeatedMessage(1, this.connections, function (item) {
                return item.serialize(writer);
              });
              if (this.client_connection_paths !== undefined) writer.writeRepeatedMessage(2, this.client_connection_paths, function (item) {
                return item.serialize(writer);
              });
              if (this.next_connection_sequence !== undefined) writer.writeUint64(3, this.next_connection_sequence);
              if (this.params !== undefined) writer.writeMessage(4, this.params, function () {
                return _this2.params.serialize(writer);
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

              if (data.connections != null) {
                message.connections = data.connections.map(function (item) {
                  return dependency_2.ibc.core.connection.v1.IdentifiedConnection.fromObject(item);
                });
              }

              if (data.client_connection_paths != null) {
                message.client_connection_paths = data.client_connection_paths.map(function (item) {
                  return dependency_2.ibc.core.connection.v1.ConnectionPaths.fromObject(item);
                });
              }

              if (data.next_connection_sequence != null) {
                message.next_connection_sequence = data.next_connection_sequence;
              }

              if (data.params != null) {
                message.params = dependency_2.ibc.core.connection.v1.Params.fromObject(data.params);
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
                    reader.readMessage(message.connections, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.connection.v1.IdentifiedConnection.deserialize(reader), dependency_2.ibc.core.connection.v1.IdentifiedConnection);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.client_connection_paths, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.ibc.core.connection.v1.ConnectionPaths.deserialize(reader), dependency_2.ibc.core.connection.v1.ConnectionPaths);
                    });
                    break;

                  case 3:
                    message.next_connection_sequence = reader.readUint64();
                    break;

                  case 4:
                    reader.readMessage(message.params, function () {
                      return message.params = dependency_2.ibc.core.connection.v1.Params.deserialize(reader);
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
      })(v1 || (v1 = _connection.v1 || (_connection.v1 = {})));
    })(connection || (connection = _core.connection || (_core.connection = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));