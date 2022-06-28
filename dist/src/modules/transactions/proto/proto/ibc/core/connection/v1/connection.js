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

var dependency_2 = _interopRequireWildcard(require("./../../commitment/v1/commitment"));

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
        var State;

        (function (State) {
          State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
          State[State["STATE_INIT"] = 1] = "STATE_INIT";
          State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
          State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
        })(State || (State = {}));

        _v.State = State;

        var ConnectionEnd = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(ConnectionEnd, _pb_1$Message);

          var _super = _createSuper(ConnectionEnd);

          function ConnectionEnd(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, ConnectionEnd);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this.client_id = data.client_id;
              }

              if ("versions" in data && data.versions != undefined) {
                _this.versions = data.versions;
              }

              if ("state" in data && data.state != undefined) {
                _this.state = data.state;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this.counterparty = data.counterparty;
              }

              if ("delay_period" in data && data.delay_period != undefined) {
                _this.delay_period = data.delay_period;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(ConnectionEnd, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "versions",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Version, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "state",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Counterparty, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "delay_period",
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.versions != null) {
                data.versions = this.versions.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.state != null) {
                data.state = this.state;
              }

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.delay_period != null) {
                data.delay_period = this.delay_period;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.versions !== undefined) writer.writeRepeatedMessage(2, this.versions, function (item) {
                return item.serialize(writer);
              });
              if (this.state !== undefined) writer.writeEnum(3, this.state);
              if (this.counterparty !== undefined) writer.writeMessage(4, this.counterparty, function () {
                return _this2.counterparty.serialize(writer);
              });
              if (this.delay_period !== undefined) writer.writeUint64(5, this.delay_period);
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
              var message = new ConnectionEnd({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.versions != null) {
                message.versions = data.versions.map(function (item) {
                  return Version.fromObject(item);
                });
              }

              if (data.state != null) {
                message.state = data.state;
              }

              if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
              }

              if (data.delay_period != null) {
                message.delay_period = data.delay_period;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConnectionEnd();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.versions, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, Version.deserialize(reader), Version);
                    });
                    break;

                  case 3:
                    message.state = reader.readEnum();
                    break;

                  case 4:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = Counterparty.deserialize(reader);
                    });
                    break;

                  case 5:
                    message.delay_period = reader.readUint64();
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
              return ConnectionEnd.deserialize(bytes);
            }
          }]);
          return ConnectionEnd;
        }(pb_1.Message);

        _v.ConnectionEnd = ConnectionEnd;

        var IdentifiedConnection = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(IdentifiedConnection, _pb_1$Message2);

          var _super2 = _createSuper(IdentifiedConnection);

          function IdentifiedConnection(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, IdentifiedConnection);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("id" in data && data.id != undefined) {
                _this3.id = data.id;
              }

              if ("client_id" in data && data.client_id != undefined) {
                _this3.client_id = data.client_id;
              }

              if ("versions" in data && data.versions != undefined) {
                _this3.versions = data.versions;
              }

              if ("state" in data && data.state != undefined) {
                _this3.state = data.state;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this3.counterparty = data.counterparty;
              }

              if ("delay_period" in data && data.delay_period != undefined) {
                _this3.delay_period = data.delay_period;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(IdentifiedConnection, [{
            key: "id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "versions",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Version, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
          }, {
            key: "state",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Counterparty, 5);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 5, value);
            }
          }, {
            key: "delay_period",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
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

              if (this.id != null) {
                data.id = this.id;
              }

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.versions != null) {
                data.versions = this.versions.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.state != null) {
                data.state = this.state;
              }

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.delay_period != null) {
                data.delay_period = this.delay_period;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(2, this.client_id);
              if (this.versions !== undefined) writer.writeRepeatedMessage(3, this.versions, function (item) {
                return item.serialize(writer);
              });
              if (this.state !== undefined) writer.writeEnum(4, this.state);
              if (this.counterparty !== undefined) writer.writeMessage(5, this.counterparty, function () {
                return _this4.counterparty.serialize(writer);
              });
              if (this.delay_period !== undefined) writer.writeUint64(6, this.delay_period);
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
              var message = new IdentifiedConnection({});

              if (data.id != null) {
                message.id = data.id;
              }

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.versions != null) {
                message.versions = data.versions.map(function (item) {
                  return Version.fromObject(item);
                });
              }

              if (data.state != null) {
                message.state = data.state;
              }

              if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
              }

              if (data.delay_period != null) {
                message.delay_period = data.delay_period;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new IdentifiedConnection();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.id = reader.readString();
                    break;

                  case 2:
                    message.client_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.versions, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, Version.deserialize(reader), Version);
                    });
                    break;

                  case 4:
                    message.state = reader.readEnum();
                    break;

                  case 5:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = Counterparty.deserialize(reader);
                    });
                    break;

                  case 6:
                    message.delay_period = reader.readUint64();
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
              return IdentifiedConnection.deserialize(bytes);
            }
          }]);
          return IdentifiedConnection;
        }(pb_1.Message);

        _v.IdentifiedConnection = IdentifiedConnection;

        var Counterparty = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(Counterparty, _pb_1$Message3);

          var _super3 = _createSuper(Counterparty);

          function Counterparty(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, Counterparty);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this5.client_id = data.client_id;
              }

              if ("connection_id" in data && data.connection_id != undefined) {
                _this5.connection_id = data.connection_id;
              }

              if ("prefix" in data && data.prefix != undefined) {
                _this5.prefix = data.prefix;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(Counterparty, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "prefix",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.commitment.v1.MerklePrefix, 3);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.prefix != null) {
                data.prefix = this.prefix.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this6 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(2, this.connection_id);
              if (this.prefix !== undefined) writer.writeMessage(3, this.prefix, function () {
                return _this6.prefix.serialize(writer);
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
              var message = new Counterparty({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.prefix != null) {
                message.prefix = dependency_2.ibc.core.commitment.v1.MerklePrefix.fromObject(data.prefix);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Counterparty();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    message.connection_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.prefix, function () {
                      return message.prefix = dependency_2.ibc.core.commitment.v1.MerklePrefix.deserialize(reader);
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
              return Counterparty.deserialize(bytes);
            }
          }]);
          return Counterparty;
        }(pb_1.Message);

        _v.Counterparty = Counterparty;

        var ClientPaths = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(ClientPaths, _pb_1$Message4);

          var _super4 = _createSuper(ClientPaths);

          function ClientPaths(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, ClientPaths);
            _this7 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("paths" in data && data.paths != undefined) {
                _this7.paths = data.paths;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(ClientPaths, [{
            key: "paths",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.paths != null) {
                data.paths = this.paths;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.paths !== undefined) writer.writeRepeatedString(1, this.paths);
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
              var message = new ClientPaths({});

              if (data.paths != null) {
                message.paths = data.paths;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientPaths();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
              return ClientPaths.deserialize(bytes);
            }
          }]);
          return ClientPaths;
        }(pb_1.Message);

        _v.ClientPaths = ClientPaths;

        var ConnectionPaths = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(ConnectionPaths, _pb_1$Message5);

          var _super5 = _createSuper(ConnectionPaths);

          function ConnectionPaths(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, ConnectionPaths);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this8.client_id = data.client_id;
              }

              if ("paths" in data && data.paths != undefined) {
                _this8.paths = data.paths;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(ConnectionPaths, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "paths",
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.paths != null) {
                data.paths = this.paths;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.paths !== undefined) writer.writeRepeatedString(2, this.paths);
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
              var message = new ConnectionPaths({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.paths != null) {
                message.paths = data.paths;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConnectionPaths();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
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
              return ConnectionPaths.deserialize(bytes);
            }
          }]);
          return ConnectionPaths;
        }(pb_1.Message);

        _v.ConnectionPaths = ConnectionPaths;

        var Version = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(Version, _pb_1$Message6);

          var _super6 = _createSuper(Version);

          function Version(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, Version);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("identifier" in data && data.identifier != undefined) {
                _this9.identifier = data.identifier;
              }

              if ("features" in data && data.features != undefined) {
                _this9.features = data.features;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(Version, [{
            key: "identifier",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "features",
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

              if (this.identifier != null) {
                data.identifier = this.identifier;
              }

              if (this.features != null) {
                data.features = this.features;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.identifier === "string" && this.identifier.length) writer.writeString(1, this.identifier);
              if (this.features !== undefined) writer.writeRepeatedString(2, this.features);
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
              var message = new Version({});

              if (data.identifier != null) {
                message.identifier = data.identifier;
              }

              if (data.features != null) {
                message.features = data.features;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Version();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.identifier = reader.readString();
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
              return Version.deserialize(bytes);
            }
          }]);
          return Version;
        }(pb_1.Message);

        _v.Version = Version;

        var Params = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(Params, _pb_1$Message7);

          var _super7 = _createSuper(Params);

          function Params(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, Params);
            _this10 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("max_expected_time_per_block" in data && data.max_expected_time_per_block != undefined) {
                _this10.max_expected_time_per_block = data.max_expected_time_per_block;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(Params, [{
            key: "max_expected_time_per_block",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.max_expected_time_per_block != null) {
                data.max_expected_time_per_block = this.max_expected_time_per_block;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.max_expected_time_per_block !== undefined) writer.writeUint64(1, this.max_expected_time_per_block);
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
              var message = new Params({});

              if (data.max_expected_time_per_block != null) {
                message.max_expected_time_per_block = data.max_expected_time_per_block;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Params();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.max_expected_time_per_block = reader.readUint64();
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
              return Params.deserialize(bytes);
            }
          }]);
          return Params;
        }(pb_1.Message);

        _v.Params = Params;
      })(v1 || (v1 = _connection.v1 || (_connection.v1 = {})));
    })(connection || (connection = _core.connection || (_core.connection = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));