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
    var client;

    (function (_client) {
      var v1;

      (function (_v) {
        var MsgCreateClient = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MsgCreateClient, _pb_1$Message);

          var _super = _createSuper(MsgCreateClient);

          function MsgCreateClient(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MsgCreateClient);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_state" in data && data.client_state != undefined) {
                _this.client_state = data.client_state;
              }

              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this.consensus_state = data.consensus_state;
              }

              if ("signer" in data && data.signer != undefined) {
                _this.signer = data.signer;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MsgCreateClient, [{
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
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

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
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
              if (this.client_state !== undefined) writer.writeMessage(1, this.client_state, function () {
                return _this2.client_state.serialize(writer);
              });
              if (this.consensus_state !== undefined) writer.writeMessage(2, this.consensus_state, function () {
                return _this2.consensus_state.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(3, this.signer);
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
              var message = new MsgCreateClient({});

              if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
              }

              if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
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
                  message = new MsgCreateClient();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 3:
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
              return MsgCreateClient.deserialize(bytes);
            }
          }]);
          return MsgCreateClient;
        }(pb_1.Message);

        _v.MsgCreateClient = MsgCreateClient;

        var MsgCreateClientResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(MsgCreateClientResponse, _pb_1$Message2);

          var _super2 = _createSuper(MsgCreateClientResponse);

          function MsgCreateClientResponse(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, MsgCreateClientResponse);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this3;
          }

          (0, _createClass2["default"])(MsgCreateClientResponse, [{
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
              var message = new MsgCreateClientResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgCreateClientResponse();

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
              return MsgCreateClientResponse.deserialize(bytes);
            }
          }]);
          return MsgCreateClientResponse;
        }(pb_1.Message);

        _v.MsgCreateClientResponse = MsgCreateClientResponse;

        var MsgUpdateClient = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(MsgUpdateClient, _pb_1$Message3);

          var _super3 = _createSuper(MsgUpdateClient);

          function MsgUpdateClient(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, MsgUpdateClient);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this4.client_id = data.client_id;
              }

              if ("header" in data && data.header != undefined) {
                _this4.header = data.header;
              }

              if ("signer" in data && data.signer != undefined) {
                _this4.signer = data.signer;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(MsgUpdateClient, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "header",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
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

              if (this.header != null) {
                data.header = this.header.toObject();
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
              if (this.header !== undefined) writer.writeMessage(2, this.header, function () {
                return _this5.header.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(3, this.signer);
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
              var message = new MsgUpdateClient({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.header != null) {
                message.header = dependency_2.google.protobuf.Any.fromObject(data.header);
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
                  message = new MsgUpdateClient();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.header, function () {
                      return message.header = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 3:
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
              return MsgUpdateClient.deserialize(bytes);
            }
          }]);
          return MsgUpdateClient;
        }(pb_1.Message);

        _v.MsgUpdateClient = MsgUpdateClient;

        var MsgUpdateClientResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(MsgUpdateClientResponse, _pb_1$Message4);

          var _super4 = _createSuper(MsgUpdateClientResponse);

          function MsgUpdateClientResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, MsgUpdateClientResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this6;
          }

          (0, _createClass2["default"])(MsgUpdateClientResponse, [{
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
              var message = new MsgUpdateClientResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgUpdateClientResponse();

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
              return MsgUpdateClientResponse.deserialize(bytes);
            }
          }]);
          return MsgUpdateClientResponse;
        }(pb_1.Message);

        _v.MsgUpdateClientResponse = MsgUpdateClientResponse;

        var MsgUpgradeClient = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(MsgUpgradeClient, _pb_1$Message5);

          var _super5 = _createSuper(MsgUpgradeClient);

          function MsgUpgradeClient(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, MsgUpgradeClient);
            _this7 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this7.client_id = data.client_id;
              }

              if ("client_state" in data && data.client_state != undefined) {
                _this7.client_state = data.client_state;
              }

              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this7.consensus_state = data.consensus_state;
              }

              if ("proof_upgrade_client" in data && data.proof_upgrade_client != undefined) {
                _this7.proof_upgrade_client = data.proof_upgrade_client;
              }

              if ("proof_upgrade_consensus_state" in data && data.proof_upgrade_consensus_state != undefined) {
                _this7.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
              }

              if ("signer" in data && data.signer != undefined) {
                _this7.signer = data.signer;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(MsgUpgradeClient, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "proof_upgrade_client",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "proof_upgrade_consensus_state",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
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

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
              }

              if (this.proof_upgrade_client != null) {
                data.proof_upgrade_client = this.proof_upgrade_client;
              }

              if (this.proof_upgrade_consensus_state != null) {
                data.proof_upgrade_consensus_state = this.proof_upgrade_consensus_state;
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
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.client_state !== undefined) writer.writeMessage(2, this.client_state, function () {
                return _this8.client_state.serialize(writer);
              });
              if (this.consensus_state !== undefined) writer.writeMessage(3, this.consensus_state, function () {
                return _this8.consensus_state.serialize(writer);
              });
              if (this.proof_upgrade_client !== undefined) writer.writeBytes(4, this.proof_upgrade_client);
              if (this.proof_upgrade_consensus_state !== undefined) writer.writeBytes(5, this.proof_upgrade_consensus_state);
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(6, this.signer);
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
              var message = new MsgUpgradeClient({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
              }

              if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
              }

              if (data.proof_upgrade_client != null) {
                message.proof_upgrade_client = data.proof_upgrade_client;
              }

              if (data.proof_upgrade_consensus_state != null) {
                message.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
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
                  message = new MsgUpgradeClient();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.proof_upgrade_client = reader.readBytes();
                    break;

                  case 5:
                    message.proof_upgrade_consensus_state = reader.readBytes();
                    break;

                  case 6:
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
              return MsgUpgradeClient.deserialize(bytes);
            }
          }]);
          return MsgUpgradeClient;
        }(pb_1.Message);

        _v.MsgUpgradeClient = MsgUpgradeClient;

        var MsgUpgradeClientResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(MsgUpgradeClientResponse, _pb_1$Message6);

          var _super6 = _createSuper(MsgUpgradeClientResponse);

          function MsgUpgradeClientResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, MsgUpgradeClientResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this9;
          }

          (0, _createClass2["default"])(MsgUpgradeClientResponse, [{
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
              var message = new MsgUpgradeClientResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgUpgradeClientResponse();

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
              return MsgUpgradeClientResponse.deserialize(bytes);
            }
          }]);
          return MsgUpgradeClientResponse;
        }(pb_1.Message);

        _v.MsgUpgradeClientResponse = MsgUpgradeClientResponse;

        var MsgSubmitMisbehaviour = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(MsgSubmitMisbehaviour, _pb_1$Message7);

          var _super7 = _createSuper(MsgSubmitMisbehaviour);

          function MsgSubmitMisbehaviour(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, MsgSubmitMisbehaviour);
            _this10 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this10.client_id = data.client_id;
              }

              if ("misbehaviour" in data && data.misbehaviour != undefined) {
                _this10.misbehaviour = data.misbehaviour;
              }

              if ("signer" in data && data.signer != undefined) {
                _this10.signer = data.signer;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(MsgSubmitMisbehaviour, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "misbehaviour",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.misbehaviour != null) {
                data.misbehaviour = this.misbehaviour.toObject();
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
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.misbehaviour !== undefined) writer.writeMessage(2, this.misbehaviour, function () {
                return _this11.misbehaviour.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(3, this.signer);
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
              var message = new MsgSubmitMisbehaviour({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.misbehaviour != null) {
                message.misbehaviour = dependency_2.google.protobuf.Any.fromObject(data.misbehaviour);
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
                  message = new MsgSubmitMisbehaviour();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.misbehaviour, function () {
                      return message.misbehaviour = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 3:
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
              return MsgSubmitMisbehaviour.deserialize(bytes);
            }
          }]);
          return MsgSubmitMisbehaviour;
        }(pb_1.Message);

        _v.MsgSubmitMisbehaviour = MsgSubmitMisbehaviour;

        var MsgSubmitMisbehaviourResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(MsgSubmitMisbehaviourResponse, _pb_1$Message8);

          var _super8 = _createSuper(MsgSubmitMisbehaviourResponse);

          function MsgSubmitMisbehaviourResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, MsgSubmitMisbehaviourResponse);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this12;
          }

          (0, _createClass2["default"])(MsgSubmitMisbehaviourResponse, [{
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
              var message = new MsgSubmitMisbehaviourResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgSubmitMisbehaviourResponse();

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
              return MsgSubmitMisbehaviourResponse.deserialize(bytes);
            }
          }]);
          return MsgSubmitMisbehaviourResponse;
        }(pb_1.Message);

        _v.MsgSubmitMisbehaviourResponse = MsgSubmitMisbehaviourResponse;

        var UnimplementedMsgService = function UnimplementedMsgService() {
          (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
        };

        (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
          CreateClient: {
            path: "/ibc.core.client.v1.Msg/CreateClient",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgCreateClient.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgCreateClientResponse.deserialize(new Uint8Array(bytes));
            }
          },
          UpdateClient: {
            path: "/ibc.core.client.v1.Msg/UpdateClient",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgUpdateClient.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgUpdateClientResponse.deserialize(new Uint8Array(bytes));
            }
          },
          UpgradeClient: {
            path: "/ibc.core.client.v1.Msg/UpgradeClient",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgUpgradeClient.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgUpgradeClientResponse.deserialize(new Uint8Array(bytes));
            }
          },
          SubmitMisbehaviour: {
            path: "/ibc.core.client.v1.Msg/SubmitMisbehaviour",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return MsgSubmitMisbehaviour.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return MsgSubmitMisbehaviourResponse.deserialize(new Uint8Array(bytes));
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
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "CreateClient", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "CreateClient", _thisSuper).call(_thisSuper, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "UpdateClient", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "UpdateClient", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "UpgradeClient", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "UpgradeClient", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "SubmitMisbehaviour", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "SubmitMisbehaviour", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
            });
            return _this13;
          }

          return MsgClient;
        }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

        _v.MsgClient = MsgClient;
      })(v1 || (v1 = _client.v1 || (_client.v1 = {})));
    })(client || (client = _core.client || (_core.client = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));