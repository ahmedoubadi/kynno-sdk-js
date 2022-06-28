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

var dependency_1 = _interopRequireWildcard(require("./client"));

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
    var client;

    (function (_client) {
      var v1;

      (function (_v) {
        var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(GenesisState, _pb_1$Message);

          var _super = _createSuper(GenesisState);

          function GenesisState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, GenesisState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("clients" in data && data.clients != undefined) {
                _this.clients = data.clients;
              }

              if ("clients_consensus" in data && data.clients_consensus != undefined) {
                _this.clients_consensus = data.clients_consensus;
              }

              if ("clients_metadata" in data && data.clients_metadata != undefined) {
                _this.clients_metadata = data.clients_metadata;
              }

              if ("params" in data && data.params != undefined) {
                _this.params = data.params;
              }

              if ("create_localhost" in data && data.create_localhost != undefined) {
                _this.create_localhost = data.create_localhost;
              }

              if ("next_client_sequence" in data && data.next_client_sequence != undefined) {
                _this.next_client_sequence = data.next_client_sequence;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GenesisState, [{
            key: "clients",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.core.client.v1.IdentifiedClientState, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "clients_consensus",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.core.client.v1.ClientConsensusStates, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "clients_metadata",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, IdentifiedGenesisMetadata, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
          }, {
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Params, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "create_localhost",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "next_client_sequence",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
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

              if (this.clients != null) {
                data.clients = this.clients.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.clients_consensus != null) {
                data.clients_consensus = this.clients_consensus.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.clients_metadata != null) {
                data.clients_metadata = this.clients_metadata.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              if (this.create_localhost != null) {
                data.create_localhost = this.create_localhost;
              }

              if (this.next_client_sequence != null) {
                data.next_client_sequence = this.next_client_sequence;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.clients !== undefined) writer.writeRepeatedMessage(1, this.clients, function (item) {
                return item.serialize(writer);
              });
              if (this.clients_consensus !== undefined) writer.writeRepeatedMessage(2, this.clients_consensus, function (item) {
                return item.serialize(writer);
              });
              if (this.clients_metadata !== undefined) writer.writeRepeatedMessage(3, this.clients_metadata, function (item) {
                return item.serialize(writer);
              });
              if (this.params !== undefined) writer.writeMessage(4, this.params, function () {
                return _this2.params.serialize(writer);
              });
              if (this.create_localhost !== undefined) writer.writeBool(5, this.create_localhost);
              if (this.next_client_sequence !== undefined) writer.writeUint64(6, this.next_client_sequence);
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

              if (data.clients != null) {
                message.clients = data.clients.map(function (item) {
                  return dependency_1.ibc.core.client.v1.IdentifiedClientState.fromObject(item);
                });
              }

              if (data.clients_consensus != null) {
                message.clients_consensus = data.clients_consensus.map(function (item) {
                  return dependency_1.ibc.core.client.v1.ClientConsensusStates.fromObject(item);
                });
              }

              if (data.clients_metadata != null) {
                message.clients_metadata = data.clients_metadata.map(function (item) {
                  return IdentifiedGenesisMetadata.fromObject(item);
                });
              }

              if (data.params != null) {
                message.params = dependency_1.ibc.core.client.v1.Params.fromObject(data.params);
              }

              if (data.create_localhost != null) {
                message.create_localhost = data.create_localhost;
              }

              if (data.next_client_sequence != null) {
                message.next_client_sequence = data.next_client_sequence;
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
                    reader.readMessage(message.clients, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.ibc.core.client.v1.IdentifiedClientState.deserialize(reader), dependency_1.ibc.core.client.v1.IdentifiedClientState);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.clients_consensus, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ibc.core.client.v1.ClientConsensusStates.deserialize(reader), dependency_1.ibc.core.client.v1.ClientConsensusStates);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.clients_metadata, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, IdentifiedGenesisMetadata.deserialize(reader), IdentifiedGenesisMetadata);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.params, function () {
                      return message.params = dependency_1.ibc.core.client.v1.Params.deserialize(reader);
                    });
                    break;

                  case 5:
                    message.create_localhost = reader.readBool();
                    break;

                  case 6:
                    message.next_client_sequence = reader.readUint64();
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

        var GenesisMetadata = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(GenesisMetadata, _pb_1$Message2);

          var _super2 = _createSuper(GenesisMetadata);

          function GenesisMetadata(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, GenesisMetadata);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this3.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this3.value = data.value;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(GenesisMetadata, [{
            key: "key",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "value",
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

              if (this.key != null) {
                data.key = this.key;
              }

              if (this.value != null) {
                data.value = this.value;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key !== undefined) writer.writeBytes(1, this.key);
              if (this.value !== undefined) writer.writeBytes(2, this.value);
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
              var message = new GenesisMetadata({});

              if (data.key != null) {
                message.key = data.key;
              }

              if (data.value != null) {
                message.value = data.value;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GenesisMetadata();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.key = reader.readBytes();
                    break;

                  case 2:
                    message.value = reader.readBytes();
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
              return GenesisMetadata.deserialize(bytes);
            }
          }]);
          return GenesisMetadata;
        }(pb_1.Message);

        _v.GenesisMetadata = GenesisMetadata;

        var IdentifiedGenesisMetadata = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(IdentifiedGenesisMetadata, _pb_1$Message3);

          var _super3 = _createSuper(IdentifiedGenesisMetadata);

          function IdentifiedGenesisMetadata(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, IdentifiedGenesisMetadata);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this4.client_id = data.client_id;
              }

              if ("client_metadata" in data && data.client_metadata != undefined) {
                _this4.client_metadata = data.client_metadata;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(IdentifiedGenesisMetadata, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "client_metadata",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, GenesisMetadata, 2);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.client_metadata != null) {
                data.client_metadata = this.client_metadata.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.client_metadata !== undefined) writer.writeRepeatedMessage(2, this.client_metadata, function (item) {
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
              var message = new IdentifiedGenesisMetadata({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.client_metadata != null) {
                message.client_metadata = data.client_metadata.map(function (item) {
                  return GenesisMetadata.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new IdentifiedGenesisMetadata();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.client_metadata, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, GenesisMetadata.deserialize(reader), GenesisMetadata);
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
              return IdentifiedGenesisMetadata.deserialize(bytes);
            }
          }]);
          return IdentifiedGenesisMetadata;
        }(pb_1.Message);

        _v.IdentifiedGenesisMetadata = IdentifiedGenesisMetadata;
      })(v1 || (v1 = _client.v1 || (_client.v1 = {})));
    })(client || (client = _core.client || (_core.client = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));