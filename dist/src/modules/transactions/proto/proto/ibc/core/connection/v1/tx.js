"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var dependency_3 = _interopRequireWildcard(require("./../../client/v1/client"));

var dependency_4 = _interopRequireWildcard(require("./connection"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

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
        var MsgConnectionOpenInit = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MsgConnectionOpenInit, _pb_1$Message);

          var _super = _createSuper(MsgConnectionOpenInit);

          function MsgConnectionOpenInit(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenInit);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this.client_id = data.client_id;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this.counterparty = data.counterparty;
              }

              if ("version" in data && data.version != undefined) {
                _this.version = data.version;
              }

              if ("delay_period" in data && data.delay_period != undefined) {
                _this.delay_period = data.delay_period;
              }

              if ("signer" in data && data.signer != undefined) {
                _this.signer = data.signer;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MsgConnectionOpenInit, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.Counterparty, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "version",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.Version, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "delay_period",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "signer",
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

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.version != null) {
                data.version = this.version.toObject();
              }

              if (this.delay_period != null) {
                data.delay_period = this.delay_period;
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.counterparty !== undefined) writer.writeMessage(2, this.counterparty, function () {
                return _this2.counterparty.serialize(writer);
              });
              if (this.version !== undefined) writer.writeMessage(3, this.version, function () {
                return _this2.version.serialize(writer);
              });
              if (this.delay_period !== undefined) writer.writeUint64(4, this.delay_period);
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(5, this.signer);
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
              var message = new MsgConnectionOpenInit({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.counterparty != null) {
                message.counterparty = dependency_4.ibc.core.connection.v1.Counterparty.fromObject(data.counterparty);
              }

              if (data.version != null) {
                message.version = dependency_4.ibc.core.connection.v1.Version.fromObject(data.version);
              }

              if (data.delay_period != null) {
                message.delay_period = data.delay_period;
              }

              if (data.signer != null) {
                message.signer = data.signer;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenInit();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = dependency_4.ibc.core.connection.v1.Counterparty.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.version, function () {
                      return message.version = dependency_4.ibc.core.connection.v1.Version.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.delay_period = reader.readUint64();
                    break;

                  case 5:
                    message.signer = reader.readString();
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
              return MsgConnectionOpenInit.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenInit;
        }(pb_1.Message);

        _v.MsgConnectionOpenInit = MsgConnectionOpenInit;

        var MsgConnectionOpenInitResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(MsgConnectionOpenInitResponse, _pb_1$Message2);

          var _super2 = _createSuper(MsgConnectionOpenInitResponse);

          function MsgConnectionOpenInitResponse(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenInitResponse);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this3;
          }

          (0, _createClass2["default"])(MsgConnectionOpenInitResponse, [{
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
              var message = new MsgConnectionOpenInitResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenInitResponse();

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
              return MsgConnectionOpenInitResponse.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenInitResponse;
        }(pb_1.Message);

        _v.MsgConnectionOpenInitResponse = MsgConnectionOpenInitResponse;

        var MsgConnectionOpenTry = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(MsgConnectionOpenTry, _pb_1$Message3);

          var _super3 = _createSuper(MsgConnectionOpenTry);

          function MsgConnectionOpenTry(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenTry);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [6], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this4.client_id = data.client_id;
              }

              if ("previous_connection_id" in data && data.previous_connection_id != undefined) {
                _this4.previous_connection_id = data.previous_connection_id;
              }

              if ("client_state" in data && data.client_state != undefined) {
                _this4.client_state = data.client_state;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this4.counterparty = data.counterparty;
              }

              if ("delay_period" in data && data.delay_period != undefined) {
                _this4.delay_period = data.delay_period;
              }

              if ("counterparty_versions" in data && data.counterparty_versions != undefined) {
                _this4.counterparty_versions = data.counterparty_versions;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this4.proof_height = data.proof_height;
              }

              if ("proof_init" in data && data.proof_init != undefined) {
                _this4.proof_init = data.proof_init;
              }

              if ("proof_client" in data && data.proof_client != undefined) {
                _this4.proof_client = data.proof_client;
              }

              if ("proof_consensus" in data && data.proof_consensus != undefined) {
                _this4.proof_consensus = data.proof_consensus;
              }

              if ("consensus_height" in data && data.consensus_height != undefined) {
                _this4.consensus_height = data.consensus_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this4.signer = data.signer;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(MsgConnectionOpenTry, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "previous_connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.Counterparty, 4);
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
            key: "counterparty_versions",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ibc.core.connection.v1.Version, 6);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 6, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 7);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 7, value);
            }
          }, {
            key: "proof_init",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
            }
          }, {
            key: "proof_client",
            get: function get() {
              return pb_1.Message.getField(this, 9);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 9, value);
            }
          }, {
            key: "proof_consensus",
            get: function get() {
              return pb_1.Message.getField(this, 10);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 10, value);
            }
          }, {
            key: "consensus_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 11);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 11, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 12);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 12, value);
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

              if (this.previous_connection_id != null) {
                data.previous_connection_id = this.previous_connection_id;
              }

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.delay_period != null) {
                data.delay_period = this.delay_period;
              }

              if (this.counterparty_versions != null) {
                data.counterparty_versions = this.counterparty_versions.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              if (this.proof_init != null) {
                data.proof_init = this.proof_init;
              }

              if (this.proof_client != null) {
                data.proof_client = this.proof_client;
              }

              if (this.proof_consensus != null) {
                data.proof_consensus = this.proof_consensus;
              }

              if (this.consensus_height != null) {
                data.consensus_height = this.consensus_height.toObject();
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this5 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (typeof this.previous_connection_id === "string" && this.previous_connection_id.length) writer.writeString(2, this.previous_connection_id);
              if (this.client_state !== undefined) writer.writeMessage(3, this.client_state, function () {
                return _this5.client_state.serialize(writer);
              });
              if (this.counterparty !== undefined) writer.writeMessage(4, this.counterparty, function () {
                return _this5.counterparty.serialize(writer);
              });
              if (this.delay_period !== undefined) writer.writeUint64(5, this.delay_period);
              if (this.counterparty_versions !== undefined) writer.writeRepeatedMessage(6, this.counterparty_versions, function (item) {
                return item.serialize(writer);
              });
              if (this.proof_height !== undefined) writer.writeMessage(7, this.proof_height, function () {
                return _this5.proof_height.serialize(writer);
              });
              if (this.proof_init !== undefined) writer.writeBytes(8, this.proof_init);
              if (this.proof_client !== undefined) writer.writeBytes(9, this.proof_client);
              if (this.proof_consensus !== undefined) writer.writeBytes(10, this.proof_consensus);
              if (this.consensus_height !== undefined) writer.writeMessage(11, this.consensus_height, function () {
                return _this5.consensus_height.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(12, this.signer);
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
              var message = new MsgConnectionOpenTry({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.previous_connection_id != null) {
                message.previous_connection_id = data.previous_connection_id;
              }

              if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
              }

              if (data.counterparty != null) {
                message.counterparty = dependency_4.ibc.core.connection.v1.Counterparty.fromObject(data.counterparty);
              }

              if (data.delay_period != null) {
                message.delay_period = data.delay_period;
              }

              if (data.counterparty_versions != null) {
                message.counterparty_versions = data.counterparty_versions.map(function (item) {
                  return dependency_4.ibc.core.connection.v1.Version.fromObject(item);
                });
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              if (data.proof_init != null) {
                message.proof_init = data.proof_init;
              }

              if (data.proof_client != null) {
                message.proof_client = data.proof_client;
              }

              if (data.proof_consensus != null) {
                message.proof_consensus = data.proof_consensus;
              }

              if (data.consensus_height != null) {
                message.consensus_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.consensus_height);
              }

              if (data.signer != null) {
                message.signer = data.signer;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenTry();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    message.previous_connection_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = dependency_4.ibc.core.connection.v1.Counterparty.deserialize(reader);
                    });
                    break;

                  case 5:
                    message.delay_period = reader.readUint64();
                    break;

                  case 6:
                    reader.readMessage(message.counterparty_versions, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_4.ibc.core.connection.v1.Version.deserialize(reader), dependency_4.ibc.core.connection.v1.Version);
                    });
                    break;

                  case 7:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 8:
                    message.proof_init = reader.readBytes();
                    break;

                  case 9:
                    message.proof_client = reader.readBytes();
                    break;

                  case 10:
                    message.proof_consensus = reader.readBytes();
                    break;

                  case 11:
                    reader.readMessage(message.consensus_height, function () {
                      return message.consensus_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 12:
                    message.signer = reader.readString();
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
              return MsgConnectionOpenTry.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenTry;
        }(pb_1.Message);

        _v.MsgConnectionOpenTry = MsgConnectionOpenTry;

        var MsgConnectionOpenTryResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(MsgConnectionOpenTryResponse, _pb_1$Message4);

          var _super4 = _createSuper(MsgConnectionOpenTryResponse);

          function MsgConnectionOpenTryResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenTryResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this6;
          }

          (0, _createClass2["default"])(MsgConnectionOpenTryResponse, [{
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
              var message = new MsgConnectionOpenTryResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenTryResponse();

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
              return MsgConnectionOpenTryResponse.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenTryResponse;
        }(pb_1.Message);

        _v.MsgConnectionOpenTryResponse = MsgConnectionOpenTryResponse;

        var MsgConnectionOpenAck = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(MsgConnectionOpenAck, _pb_1$Message5);

          var _super5 = _createSuper(MsgConnectionOpenAck);

          function MsgConnectionOpenAck(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenAck);
            _this7 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this7.connection_id = data.connection_id;
              }

              if ("counterparty_connection_id" in data && data.counterparty_connection_id != undefined) {
                _this7.counterparty_connection_id = data.counterparty_connection_id;
              }

              if ("version" in data && data.version != undefined) {
                _this7.version = data.version;
              }

              if ("client_state" in data && data.client_state != undefined) {
                _this7.client_state = data.client_state;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this7.proof_height = data.proof_height;
              }

              if ("proof_try" in data && data.proof_try != undefined) {
                _this7.proof_try = data.proof_try;
              }

              if ("proof_client" in data && data.proof_client != undefined) {
                _this7.proof_client = data.proof_client;
              }

              if ("proof_consensus" in data && data.proof_consensus != undefined) {
                _this7.proof_consensus = data.proof_consensus;
              }

              if ("consensus_height" in data && data.consensus_height != undefined) {
                _this7.consensus_height = data.consensus_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this7.signer = data.signer;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(MsgConnectionOpenAck, [{
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "counterparty_connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "version",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.Version, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 5);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 5, value);
            }
          }, {
            key: "proof_try",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "proof_client",
            get: function get() {
              return pb_1.Message.getField(this, 7);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 7, value);
            }
          }, {
            key: "proof_consensus",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
            }
          }, {
            key: "consensus_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 9);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 9, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 10);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 10, value);
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.counterparty_connection_id != null) {
                data.counterparty_connection_id = this.counterparty_connection_id;
              }

              if (this.version != null) {
                data.version = this.version.toObject();
              }

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              if (this.proof_try != null) {
                data.proof_try = this.proof_try;
              }

              if (this.proof_client != null) {
                data.proof_client = this.proof_client;
              }

              if (this.proof_consensus != null) {
                data.proof_consensus = this.proof_consensus;
              }

              if (this.consensus_height != null) {
                data.consensus_height = this.consensus_height.toObject();
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
              if (typeof this.counterparty_connection_id === "string" && this.counterparty_connection_id.length) writer.writeString(2, this.counterparty_connection_id);
              if (this.version !== undefined) writer.writeMessage(3, this.version, function () {
                return _this8.version.serialize(writer);
              });
              if (this.client_state !== undefined) writer.writeMessage(4, this.client_state, function () {
                return _this8.client_state.serialize(writer);
              });
              if (this.proof_height !== undefined) writer.writeMessage(5, this.proof_height, function () {
                return _this8.proof_height.serialize(writer);
              });
              if (this.proof_try !== undefined) writer.writeBytes(6, this.proof_try);
              if (this.proof_client !== undefined) writer.writeBytes(7, this.proof_client);
              if (this.proof_consensus !== undefined) writer.writeBytes(8, this.proof_consensus);
              if (this.consensus_height !== undefined) writer.writeMessage(9, this.consensus_height, function () {
                return _this8.consensus_height.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(10, this.signer);
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
              var message = new MsgConnectionOpenAck({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.counterparty_connection_id != null) {
                message.counterparty_connection_id = data.counterparty_connection_id;
              }

              if (data.version != null) {
                message.version = dependency_4.ibc.core.connection.v1.Version.fromObject(data.version);
              }

              if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              if (data.proof_try != null) {
                message.proof_try = data.proof_try;
              }

              if (data.proof_client != null) {
                message.proof_client = data.proof_client;
              }

              if (data.proof_consensus != null) {
                message.proof_consensus = data.proof_consensus;
              }

              if (data.consensus_height != null) {
                message.consensus_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.consensus_height);
              }

              if (data.signer != null) {
                message.signer = data.signer;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenAck();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
                    break;

                  case 2:
                    message.counterparty_connection_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.version, function () {
                      return message.version = dependency_4.ibc.core.connection.v1.Version.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 5:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 6:
                    message.proof_try = reader.readBytes();
                    break;

                  case 7:
                    message.proof_client = reader.readBytes();
                    break;

                  case 8:
                    message.proof_consensus = reader.readBytes();
                    break;

                  case 9:
                    reader.readMessage(message.consensus_height, function () {
                      return message.consensus_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 10:
                    message.signer = reader.readString();
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
              return MsgConnectionOpenAck.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenAck;
        }(pb_1.Message);

        _v.MsgConnectionOpenAck = MsgConnectionOpenAck;

        var MsgConnectionOpenAckResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(MsgConnectionOpenAckResponse, _pb_1$Message6);

          var _super6 = _createSuper(MsgConnectionOpenAckResponse);

          function MsgConnectionOpenAckResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenAckResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this9;
          }

          (0, _createClass2["default"])(MsgConnectionOpenAckResponse, [{
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
              var message = new MsgConnectionOpenAckResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenAckResponse();

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
              return MsgConnectionOpenAckResponse.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenAckResponse;
        }(pb_1.Message);

        _v.MsgConnectionOpenAckResponse = MsgConnectionOpenAckResponse;

        var MsgConnectionOpenConfirm = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(MsgConnectionOpenConfirm, _pb_1$Message7);

          var _super7 = _createSuper(MsgConnectionOpenConfirm);

          function MsgConnectionOpenConfirm(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenConfirm);
            _this10 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this10.connection_id = data.connection_id;
              }

              if ("proof_ack" in data && data.proof_ack != undefined) {
                _this10.proof_ack = data.proof_ack;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this10.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this10.signer = data.signer;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(MsgConnectionOpenConfirm, [{
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "proof_ack",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.proof_ack != null) {
                data.proof_ack = this.proof_ack;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this11 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
              if (this.proof_ack !== undefined) writer.writeBytes(2, this.proof_ack);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this11.proof_height.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(4, this.signer);
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
              var message = new MsgConnectionOpenConfirm({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.proof_ack != null) {
                message.proof_ack = data.proof_ack;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              if (data.signer != null) {
                message.signer = data.signer;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenConfirm();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
                    break;

                  case 2:
                    message.proof_ack = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.signer = reader.readString();
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
              return MsgConnectionOpenConfirm.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenConfirm;
        }(pb_1.Message);

        _v.MsgConnectionOpenConfirm = MsgConnectionOpenConfirm;

        var MsgConnectionOpenConfirmResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(MsgConnectionOpenConfirmResponse, _pb_1$Message8);

          var _super8 = _createSuper(MsgConnectionOpenConfirmResponse);

          function MsgConnectionOpenConfirmResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, MsgConnectionOpenConfirmResponse);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this12;
          }

          (0, _createClass2["default"])(MsgConnectionOpenConfirmResponse, [{
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
              var message = new MsgConnectionOpenConfirmResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgConnectionOpenConfirmResponse();

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
              return MsgConnectionOpenConfirmResponse.deserialize(bytes);
            }
          }]);
          return MsgConnectionOpenConfirmResponse;
        }(pb_1.Message);

        _v.MsgConnectionOpenConfirmResponse = MsgConnectionOpenConfirmResponse;

        var UnimplementedMsgService = function UnimplementedMsgService() {
          (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
        };

        (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
          ConnectionOpenInit: {
            path: "/ibc.core.connection.v1.Msg/ConnectionOpenInit",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgConnectionOpenInit.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgConnectionOpenInitResponse.deserialize(new Uint8Array(bytes));
            }
          },
          ConnectionOpenTry: {
            path: "/ibc.core.connection.v1.Msg/ConnectionOpenTry",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgConnectionOpenTry.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgConnectionOpenTryResponse.deserialize(new Uint8Array(bytes));
            }
          },
          ConnectionOpenAck: {
            path: "/ibc.core.connection.v1.Msg/ConnectionOpenAck",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgConnectionOpenAck.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgConnectionOpenAckResponse.deserialize(new Uint8Array(bytes));
            }
          },
          ConnectionOpenConfirm: {
            path: "/ibc.core.connection.v1.Msg/ConnectionOpenConfirm",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgConnectionOpenConfirm.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgConnectionOpenConfirmResponse.deserialize(new Uint8Array(bytes));
            }
          }
        });
        _v.UnimplementedMsgService = UnimplementedMsgService;

        var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
          (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

          var _super9 = _createSuper(MsgClient);

          function MsgClient(address, credentials, _options) {
            var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this13;

            (0, _classCallCheck2["default"])(this, MsgClient);
            _this13 = _super9.call(this, address, credentials, _options);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "ConnectionOpenInit", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConnectionOpenInit", _thisSuper).call(_thisSuper, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "ConnectionOpenTry", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConnectionOpenTry", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "ConnectionOpenAck", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConnectionOpenAck", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "ConnectionOpenConfirm", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "ConnectionOpenConfirm", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
            });
            return _this13;
          }

          return MsgClient;
        }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

        _v.MsgClient = MsgClient;
      })(v1 || (v1 = _connection.v1 || (_connection.v1 = {})));
    })(connection || (connection = _core.connection || (_core.connection = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));