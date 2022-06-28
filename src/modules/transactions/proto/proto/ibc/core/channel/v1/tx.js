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

var dependency_2 = _interopRequireWildcard(require("./../../client/v1/client"));

var dependency_3 = _interopRequireWildcard(require("./channel"));

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
    var channel;

    (function (_channel) {
      var v1;

      (function (_v) {
        var MsgChannelOpenInit = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MsgChannelOpenInit, _pb_1$Message);

          var _super = _createSuper(MsgChannelOpenInit);

          function MsgChannelOpenInit(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenInit);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this.port_id = data.port_id;
              }

              if ("channel" in data && data.channel != undefined) {
                _this.channel = data.channel;
              }

              if ("signer" in data && data.signer != undefined) {
                _this.signer = data.signer;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MsgChannelOpenInit, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 2);
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel != null) {
                data.channel = this.channel.toObject();
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
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (this.channel !== undefined) writer.writeMessage(2, this.channel, function () {
                return _this2.channel.serialize(writer);
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
              var message = new MsgChannelOpenInit({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel != null) {
                message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
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
                  message = new MsgChannelOpenInit();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.channel, function () {
                      return message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader);
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
              return MsgChannelOpenInit.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenInit;
        }(pb_1.Message);

        _v.MsgChannelOpenInit = MsgChannelOpenInit;

        var MsgChannelOpenInitResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(MsgChannelOpenInitResponse, _pb_1$Message2);

          var _super2 = _createSuper(MsgChannelOpenInitResponse);

          function MsgChannelOpenInitResponse(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenInitResponse);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("channel_id" in data && data.channel_id != undefined) {
                _this3.channel_id = data.channel_id;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(MsgChannelOpenInitResponse, [{
            key: "channel_id",
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

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(1, this.channel_id);
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
              var message = new MsgChannelOpenInitResponse({});

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelOpenInitResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
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
              return MsgChannelOpenInitResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenInitResponse;
        }(pb_1.Message);

        _v.MsgChannelOpenInitResponse = MsgChannelOpenInitResponse;

        var MsgChannelOpenTry = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(MsgChannelOpenTry, _pb_1$Message3);

          var _super3 = _createSuper(MsgChannelOpenTry);

          function MsgChannelOpenTry(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenTry);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this4.port_id = data.port_id;
              }

              if ("previous_channel_id" in data && data.previous_channel_id != undefined) {
                _this4.previous_channel_id = data.previous_channel_id;
              }

              if ("channel" in data && data.channel != undefined) {
                _this4.channel = data.channel;
              }

              if ("counterparty_version" in data && data.counterparty_version != undefined) {
                _this4.counterparty_version = data.counterparty_version;
              }

              if ("proof_init" in data && data.proof_init != undefined) {
                _this4.proof_init = data.proof_init;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this4.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this4.signer = data.signer;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(MsgChannelOpenTry, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "previous_channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "channel",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "counterparty_version",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "proof_init",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 6);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 6, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 7);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 7, value);
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.previous_channel_id != null) {
                data.previous_channel_id = this.previous_channel_id;
              }

              if (this.channel != null) {
                data.channel = this.channel.toObject();
              }

              if (this.counterparty_version != null) {
                data.counterparty_version = this.counterparty_version;
              }

              if (this.proof_init != null) {
                data.proof_init = this.proof_init;
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
              var _this5 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.previous_channel_id === "string" && this.previous_channel_id.length) writer.writeString(2, this.previous_channel_id);
              if (this.channel !== undefined) writer.writeMessage(3, this.channel, function () {
                return _this5.channel.serialize(writer);
              });
              if (typeof this.counterparty_version === "string" && this.counterparty_version.length) writer.writeString(4, this.counterparty_version);
              if (this.proof_init !== undefined) writer.writeBytes(5, this.proof_init);
              if (this.proof_height !== undefined) writer.writeMessage(6, this.proof_height, function () {
                return _this5.proof_height.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(7, this.signer);
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
              var message = new MsgChannelOpenTry({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.previous_channel_id != null) {
                message.previous_channel_id = data.previous_channel_id;
              }

              if (data.channel != null) {
                message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
              }

              if (data.counterparty_version != null) {
                message.counterparty_version = data.counterparty_version;
              }

              if (data.proof_init != null) {
                message.proof_init = data.proof_init;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgChannelOpenTry();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.previous_channel_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.channel, function () {
                      return message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.counterparty_version = reader.readString();
                    break;

                  case 5:
                    message.proof_init = reader.readBytes();
                    break;

                  case 6:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 7:
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
              return MsgChannelOpenTry.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenTry;
        }(pb_1.Message);

        _v.MsgChannelOpenTry = MsgChannelOpenTry;

        var MsgChannelOpenTryResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(MsgChannelOpenTryResponse, _pb_1$Message4);

          var _super4 = _createSuper(MsgChannelOpenTryResponse);

          function MsgChannelOpenTryResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenTryResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this6;
          }

          (0, _createClass2["default"])(MsgChannelOpenTryResponse, [{
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
              var message = new MsgChannelOpenTryResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelOpenTryResponse();

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
              return MsgChannelOpenTryResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenTryResponse;
        }(pb_1.Message);

        _v.MsgChannelOpenTryResponse = MsgChannelOpenTryResponse;

        var MsgChannelOpenAck = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(MsgChannelOpenAck, _pb_1$Message5);

          var _super5 = _createSuper(MsgChannelOpenAck);

          function MsgChannelOpenAck(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenAck);
            _this7 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this7.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this7.channel_id = data.channel_id;
              }

              if ("counterparty_channel_id" in data && data.counterparty_channel_id != undefined) {
                _this7.counterparty_channel_id = data.counterparty_channel_id;
              }

              if ("counterparty_version" in data && data.counterparty_version != undefined) {
                _this7.counterparty_version = data.counterparty_version;
              }

              if ("proof_try" in data && data.proof_try != undefined) {
                _this7.proof_try = data.proof_try;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this7.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this7.signer = data.signer;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(MsgChannelOpenAck, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "counterparty_channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "counterparty_version",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "proof_try",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 6);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 6, value);
            }
          }, {
            key: "signer",
            get: function get() {
              return pb_1.Message.getField(this, 7);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 7, value);
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.counterparty_channel_id != null) {
                data.counterparty_channel_id = this.counterparty_channel_id;
              }

              if (this.counterparty_version != null) {
                data.counterparty_version = this.counterparty_version;
              }

              if (this.proof_try != null) {
                data.proof_try = this.proof_try;
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
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (typeof this.counterparty_channel_id === "string" && this.counterparty_channel_id.length) writer.writeString(3, this.counterparty_channel_id);
              if (typeof this.counterparty_version === "string" && this.counterparty_version.length) writer.writeString(4, this.counterparty_version);
              if (this.proof_try !== undefined) writer.writeBytes(5, this.proof_try);
              if (this.proof_height !== undefined) writer.writeMessage(6, this.proof_height, function () {
                return _this8.proof_height.serialize(writer);
              });
              if (typeof this.signer === "string" && this.signer.length) writer.writeString(7, this.signer);
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
              var message = new MsgChannelOpenAck({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.counterparty_channel_id != null) {
                message.counterparty_channel_id = data.counterparty_channel_id;
              }

              if (data.counterparty_version != null) {
                message.counterparty_version = data.counterparty_version;
              }

              if (data.proof_try != null) {
                message.proof_try = data.proof_try;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgChannelOpenAck();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.counterparty_channel_id = reader.readString();
                    break;

                  case 4:
                    message.counterparty_version = reader.readString();
                    break;

                  case 5:
                    message.proof_try = reader.readBytes();
                    break;

                  case 6:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 7:
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
              return MsgChannelOpenAck.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenAck;
        }(pb_1.Message);

        _v.MsgChannelOpenAck = MsgChannelOpenAck;

        var MsgChannelOpenAckResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(MsgChannelOpenAckResponse, _pb_1$Message6);

          var _super6 = _createSuper(MsgChannelOpenAckResponse);

          function MsgChannelOpenAckResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenAckResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this9;
          }

          (0, _createClass2["default"])(MsgChannelOpenAckResponse, [{
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
              var message = new MsgChannelOpenAckResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelOpenAckResponse();

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
              return MsgChannelOpenAckResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenAckResponse;
        }(pb_1.Message);

        _v.MsgChannelOpenAckResponse = MsgChannelOpenAckResponse;

        var MsgChannelOpenConfirm = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(MsgChannelOpenConfirm, _pb_1$Message7);

          var _super7 = _createSuper(MsgChannelOpenConfirm);

          function MsgChannelOpenConfirm(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenConfirm);
            _this10 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this10.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this10.channel_id = data.channel_id;
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

          (0, _createClass2["default"])(MsgChannelOpenConfirm, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_ack",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
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
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.proof_ack !== undefined) writer.writeBytes(3, this.proof_ack);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this11.proof_height.serialize(writer);
              });
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
              var message = new MsgChannelOpenConfirm({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.proof_ack != null) {
                message.proof_ack = data.proof_ack;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgChannelOpenConfirm();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.proof_ack = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
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
              return MsgChannelOpenConfirm.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenConfirm;
        }(pb_1.Message);

        _v.MsgChannelOpenConfirm = MsgChannelOpenConfirm;

        var MsgChannelOpenConfirmResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(MsgChannelOpenConfirmResponse, _pb_1$Message8);

          var _super8 = _createSuper(MsgChannelOpenConfirmResponse);

          function MsgChannelOpenConfirmResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, MsgChannelOpenConfirmResponse);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this12;
          }

          (0, _createClass2["default"])(MsgChannelOpenConfirmResponse, [{
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
              var message = new MsgChannelOpenConfirmResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelOpenConfirmResponse();

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
              return MsgChannelOpenConfirmResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelOpenConfirmResponse;
        }(pb_1.Message);

        _v.MsgChannelOpenConfirmResponse = MsgChannelOpenConfirmResponse;

        var MsgChannelCloseInit = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(MsgChannelCloseInit, _pb_1$Message9);

          var _super9 = _createSuper(MsgChannelCloseInit);

          function MsgChannelCloseInit(data) {
            var _this13;

            (0, _classCallCheck2["default"])(this, MsgChannelCloseInit);
            _this13 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this13.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this13.channel_id = data.channel_id;
              }

              if ("signer" in data && data.signer != undefined) {
                _this13.signer = data.signer;
              }
            }

            return _this13;
          }

          (0, _createClass2["default"])(MsgChannelCloseInit, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
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
            value: function toObject() {
              var data = {};

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
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
              var message = new MsgChannelCloseInit({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
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
                  message = new MsgChannelCloseInit();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
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
              return MsgChannelCloseInit.deserialize(bytes);
            }
          }]);
          return MsgChannelCloseInit;
        }(pb_1.Message);

        _v.MsgChannelCloseInit = MsgChannelCloseInit;

        var MsgChannelCloseInitResponse = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(MsgChannelCloseInitResponse, _pb_1$Message10);

          var _super10 = _createSuper(MsgChannelCloseInitResponse);

          function MsgChannelCloseInitResponse(data) {
            var _this14;

            (0, _classCallCheck2["default"])(this, MsgChannelCloseInitResponse);
            _this14 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this14;
          }

          (0, _createClass2["default"])(MsgChannelCloseInitResponse, [{
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
              var message = new MsgChannelCloseInitResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelCloseInitResponse();

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
              return MsgChannelCloseInitResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelCloseInitResponse;
        }(pb_1.Message);

        _v.MsgChannelCloseInitResponse = MsgChannelCloseInitResponse;

        var MsgChannelCloseConfirm = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(MsgChannelCloseConfirm, _pb_1$Message11);

          var _super11 = _createSuper(MsgChannelCloseConfirm);

          function MsgChannelCloseConfirm(data) {
            var _this15;

            (0, _classCallCheck2["default"])(this, MsgChannelCloseConfirm);
            _this15 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this15.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this15.channel_id = data.channel_id;
              }

              if ("proof_init" in data && data.proof_init != undefined) {
                _this15.proof_init = data.proof_init;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this15.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this15.signer = data.signer;
              }
            }

            return _this15;
          }

          (0, _createClass2["default"])(MsgChannelCloseConfirm, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_init",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.proof_init != null) {
                data.proof_init = this.proof_init;
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
              var _this16 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.proof_init !== undefined) writer.writeBytes(3, this.proof_init);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this16.proof_height.serialize(writer);
              });
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
              var message = new MsgChannelCloseConfirm({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.proof_init != null) {
                message.proof_init = data.proof_init;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgChannelCloseConfirm();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.proof_init = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
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
              return MsgChannelCloseConfirm.deserialize(bytes);
            }
          }]);
          return MsgChannelCloseConfirm;
        }(pb_1.Message);

        _v.MsgChannelCloseConfirm = MsgChannelCloseConfirm;

        var MsgChannelCloseConfirmResponse = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(MsgChannelCloseConfirmResponse, _pb_1$Message12);

          var _super12 = _createSuper(MsgChannelCloseConfirmResponse);

          function MsgChannelCloseConfirmResponse(data) {
            var _this17;

            (0, _classCallCheck2["default"])(this, MsgChannelCloseConfirmResponse);
            _this17 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this17;
          }

          (0, _createClass2["default"])(MsgChannelCloseConfirmResponse, [{
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
              var message = new MsgChannelCloseConfirmResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgChannelCloseConfirmResponse();

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
              return MsgChannelCloseConfirmResponse.deserialize(bytes);
            }
          }]);
          return MsgChannelCloseConfirmResponse;
        }(pb_1.Message);

        _v.MsgChannelCloseConfirmResponse = MsgChannelCloseConfirmResponse;

        var MsgRecvPacket = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(MsgRecvPacket, _pb_1$Message13);

          var _super13 = _createSuper(MsgRecvPacket);

          function MsgRecvPacket(data) {
            var _this18;

            (0, _classCallCheck2["default"])(this, MsgRecvPacket);
            _this18 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("packet" in data && data.packet != undefined) {
                _this18.packet = data.packet;
              }

              if ("proof_commitment" in data && data.proof_commitment != undefined) {
                _this18.proof_commitment = data.proof_commitment;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this18.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this18.signer = data.signer;
              }
            }

            return _this18;
          }

          (0, _createClass2["default"])(MsgRecvPacket, [{
            key: "packet",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "proof_commitment",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
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

              if (this.packet != null) {
                data.packet = this.packet.toObject();
              }

              if (this.proof_commitment != null) {
                data.proof_commitment = this.proof_commitment;
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
              var _this19 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.packet !== undefined) writer.writeMessage(1, this.packet, function () {
                return _this19.packet.serialize(writer);
              });
              if (this.proof_commitment !== undefined) writer.writeBytes(2, this.proof_commitment);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this19.proof_height.serialize(writer);
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
              var message = new MsgRecvPacket({});

              if (data.packet != null) {
                message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
              }

              if (data.proof_commitment != null) {
                message.proof_commitment = data.proof_commitment;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgRecvPacket();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.packet, function () {
                      return message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof_commitment = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
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
              return MsgRecvPacket.deserialize(bytes);
            }
          }]);
          return MsgRecvPacket;
        }(pb_1.Message);

        _v.MsgRecvPacket = MsgRecvPacket;

        var MsgRecvPacketResponse = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(MsgRecvPacketResponse, _pb_1$Message14);

          var _super14 = _createSuper(MsgRecvPacketResponse);

          function MsgRecvPacketResponse(data) {
            var _this20;

            (0, _classCallCheck2["default"])(this, MsgRecvPacketResponse);
            _this20 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this20;
          }

          (0, _createClass2["default"])(MsgRecvPacketResponse, [{
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
              var message = new MsgRecvPacketResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgRecvPacketResponse();

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
              return MsgRecvPacketResponse.deserialize(bytes);
            }
          }]);
          return MsgRecvPacketResponse;
        }(pb_1.Message);

        _v.MsgRecvPacketResponse = MsgRecvPacketResponse;

        var MsgTimeout = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(MsgTimeout, _pb_1$Message15);

          var _super15 = _createSuper(MsgTimeout);

          function MsgTimeout(data) {
            var _this21;

            (0, _classCallCheck2["default"])(this, MsgTimeout);
            _this21 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("packet" in data && data.packet != undefined) {
                _this21.packet = data.packet;
              }

              if ("proof_unreceived" in data && data.proof_unreceived != undefined) {
                _this21.proof_unreceived = data.proof_unreceived;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this21.proof_height = data.proof_height;
              }

              if ("next_sequence_recv" in data && data.next_sequence_recv != undefined) {
                _this21.next_sequence_recv = data.next_sequence_recv;
              }

              if ("signer" in data && data.signer != undefined) {
                _this21.signer = data.signer;
              }
            }

            return _this21;
          }

          (0, _createClass2["default"])(MsgTimeout, [{
            key: "packet",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "proof_unreceived",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "next_sequence_recv",
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
            value: function (_toObject7) {
              function toObject() {
                return _toObject7.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject7.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.packet != null) {
                data.packet = this.packet.toObject();
              }

              if (this.proof_unreceived != null) {
                data.proof_unreceived = this.proof_unreceived;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              if (this.next_sequence_recv != null) {
                data.next_sequence_recv = this.next_sequence_recv;
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this22 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.packet !== undefined) writer.writeMessage(1, this.packet, function () {
                return _this22.packet.serialize(writer);
              });
              if (this.proof_unreceived !== undefined) writer.writeBytes(2, this.proof_unreceived);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this22.proof_height.serialize(writer);
              });
              if (this.next_sequence_recv !== undefined) writer.writeUint64(4, this.next_sequence_recv);
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
              var message = new MsgTimeout({});

              if (data.packet != null) {
                message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
              }

              if (data.proof_unreceived != null) {
                message.proof_unreceived = data.proof_unreceived;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              if (data.next_sequence_recv != null) {
                message.next_sequence_recv = data.next_sequence_recv;
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
                  message = new MsgTimeout();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.packet, function () {
                      return message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof_unreceived = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.next_sequence_recv = reader.readUint64();
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
              return MsgTimeout.deserialize(bytes);
            }
          }]);
          return MsgTimeout;
        }(pb_1.Message);

        _v.MsgTimeout = MsgTimeout;

        var MsgTimeoutResponse = /*#__PURE__*/function (_pb_1$Message16) {
          (0, _inherits2["default"])(MsgTimeoutResponse, _pb_1$Message16);

          var _super16 = _createSuper(MsgTimeoutResponse);

          function MsgTimeoutResponse(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, MsgTimeoutResponse);
            _this23 = _super16.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this23;
          }

          (0, _createClass2["default"])(MsgTimeoutResponse, [{
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
              var message = new MsgTimeoutResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgTimeoutResponse();

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
              return MsgTimeoutResponse.deserialize(bytes);
            }
          }]);
          return MsgTimeoutResponse;
        }(pb_1.Message);

        _v.MsgTimeoutResponse = MsgTimeoutResponse;

        var MsgTimeoutOnClose = /*#__PURE__*/function (_pb_1$Message17) {
          (0, _inherits2["default"])(MsgTimeoutOnClose, _pb_1$Message17);

          var _super17 = _createSuper(MsgTimeoutOnClose);

          function MsgTimeoutOnClose(data) {
            var _this24;

            (0, _classCallCheck2["default"])(this, MsgTimeoutOnClose);
            _this24 = _super17.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("packet" in data && data.packet != undefined) {
                _this24.packet = data.packet;
              }

              if ("proof_unreceived" in data && data.proof_unreceived != undefined) {
                _this24.proof_unreceived = data.proof_unreceived;
              }

              if ("proof_close" in data && data.proof_close != undefined) {
                _this24.proof_close = data.proof_close;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this24.proof_height = data.proof_height;
              }

              if ("next_sequence_recv" in data && data.next_sequence_recv != undefined) {
                _this24.next_sequence_recv = data.next_sequence_recv;
              }

              if ("signer" in data && data.signer != undefined) {
                _this24.signer = data.signer;
              }
            }

            return _this24;
          }

          (0, _createClass2["default"])(MsgTimeoutOnClose, [{
            key: "packet",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "proof_unreceived",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_close",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "next_sequence_recv",
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
            value: function (_toObject8) {
              function toObject() {
                return _toObject8.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject8.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.packet != null) {
                data.packet = this.packet.toObject();
              }

              if (this.proof_unreceived != null) {
                data.proof_unreceived = this.proof_unreceived;
              }

              if (this.proof_close != null) {
                data.proof_close = this.proof_close;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              if (this.next_sequence_recv != null) {
                data.next_sequence_recv = this.next_sequence_recv;
              }

              if (this.signer != null) {
                data.signer = this.signer;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this25 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.packet !== undefined) writer.writeMessage(1, this.packet, function () {
                return _this25.packet.serialize(writer);
              });
              if (this.proof_unreceived !== undefined) writer.writeBytes(2, this.proof_unreceived);
              if (this.proof_close !== undefined) writer.writeBytes(3, this.proof_close);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this25.proof_height.serialize(writer);
              });
              if (this.next_sequence_recv !== undefined) writer.writeUint64(5, this.next_sequence_recv);
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
              var message = new MsgTimeoutOnClose({});

              if (data.packet != null) {
                message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
              }

              if (data.proof_unreceived != null) {
                message.proof_unreceived = data.proof_unreceived;
              }

              if (data.proof_close != null) {
                message.proof_close = data.proof_close;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              if (data.next_sequence_recv != null) {
                message.next_sequence_recv = data.next_sequence_recv;
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
                  message = new MsgTimeoutOnClose();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.packet, function () {
                      return message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof_unreceived = reader.readBytes();
                    break;

                  case 3:
                    message.proof_close = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 5:
                    message.next_sequence_recv = reader.readUint64();
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
              return MsgTimeoutOnClose.deserialize(bytes);
            }
          }]);
          return MsgTimeoutOnClose;
        }(pb_1.Message);

        _v.MsgTimeoutOnClose = MsgTimeoutOnClose;

        var MsgTimeoutOnCloseResponse = /*#__PURE__*/function (_pb_1$Message18) {
          (0, _inherits2["default"])(MsgTimeoutOnCloseResponse, _pb_1$Message18);

          var _super18 = _createSuper(MsgTimeoutOnCloseResponse);

          function MsgTimeoutOnCloseResponse(data) {
            var _this26;

            (0, _classCallCheck2["default"])(this, MsgTimeoutOnCloseResponse);
            _this26 = _super18.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this26;
          }

          (0, _createClass2["default"])(MsgTimeoutOnCloseResponse, [{
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
              var message = new MsgTimeoutOnCloseResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgTimeoutOnCloseResponse();

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
              return MsgTimeoutOnCloseResponse.deserialize(bytes);
            }
          }]);
          return MsgTimeoutOnCloseResponse;
        }(pb_1.Message);

        _v.MsgTimeoutOnCloseResponse = MsgTimeoutOnCloseResponse;

        var MsgAcknowledgement = /*#__PURE__*/function (_pb_1$Message19) {
          (0, _inherits2["default"])(MsgAcknowledgement, _pb_1$Message19);

          var _super19 = _createSuper(MsgAcknowledgement);

          function MsgAcknowledgement(data) {
            var _this27;

            (0, _classCallCheck2["default"])(this, MsgAcknowledgement);
            _this27 = _super19.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("packet" in data && data.packet != undefined) {
                _this27.packet = data.packet;
              }

              if ("acknowledgement" in data && data.acknowledgement != undefined) {
                _this27.acknowledgement = data.acknowledgement;
              }

              if ("proof_acked" in data && data.proof_acked != undefined) {
                _this27.proof_acked = data.proof_acked;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this27.proof_height = data.proof_height;
              }

              if ("signer" in data && data.signer != undefined) {
                _this27.signer = data.signer;
              }
            }

            return _this27;
          }

          (0, _createClass2["default"])(MsgAcknowledgement, [{
            key: "packet",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Packet, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "acknowledgement",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_acked",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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
            value: function (_toObject9) {
              function toObject() {
                return _toObject9.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject9.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.packet != null) {
                data.packet = this.packet.toObject();
              }

              if (this.acknowledgement != null) {
                data.acknowledgement = this.acknowledgement;
              }

              if (this.proof_acked != null) {
                data.proof_acked = this.proof_acked;
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
              var _this28 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.packet !== undefined) writer.writeMessage(1, this.packet, function () {
                return _this28.packet.serialize(writer);
              });
              if (this.acknowledgement !== undefined) writer.writeBytes(2, this.acknowledgement);
              if (this.proof_acked !== undefined) writer.writeBytes(3, this.proof_acked);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this28.proof_height.serialize(writer);
              });
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
              var message = new MsgAcknowledgement({});

              if (data.packet != null) {
                message.packet = dependency_3.ibc.core.channel.v1.Packet.fromObject(data.packet);
              }

              if (data.acknowledgement != null) {
                message.acknowledgement = data.acknowledgement;
              }

              if (data.proof_acked != null) {
                message.proof_acked = data.proof_acked;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
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
                  message = new MsgAcknowledgement();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.packet, function () {
                      return message.packet = dependency_3.ibc.core.channel.v1.Packet.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.acknowledgement = reader.readBytes();
                    break;

                  case 3:
                    message.proof_acked = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
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
              return MsgAcknowledgement.deserialize(bytes);
            }
          }]);
          return MsgAcknowledgement;
        }(pb_1.Message);

        _v.MsgAcknowledgement = MsgAcknowledgement;

        var MsgAcknowledgementResponse = /*#__PURE__*/function (_pb_1$Message20) {
          (0, _inherits2["default"])(MsgAcknowledgementResponse, _pb_1$Message20);

          var _super20 = _createSuper(MsgAcknowledgementResponse);

          function MsgAcknowledgementResponse(data) {
            var _this29;

            (0, _classCallCheck2["default"])(this, MsgAcknowledgementResponse);
            _this29 = _super20.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this29;
          }

          (0, _createClass2["default"])(MsgAcknowledgementResponse, [{
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
              var message = new MsgAcknowledgementResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgAcknowledgementResponse();

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
              return MsgAcknowledgementResponse.deserialize(bytes);
            }
          }]);
          return MsgAcknowledgementResponse;
        }(pb_1.Message);

        _v.MsgAcknowledgementResponse = MsgAcknowledgementResponse;
      })(v1 || (v1 = _channel.v1 || (_channel.v1 = {})));
    })(channel || (channel = _core.channel || (_core.channel = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));