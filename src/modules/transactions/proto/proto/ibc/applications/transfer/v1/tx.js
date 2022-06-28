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

var dependency_2 = _interopRequireWildcard(require("./../../../../cosmos/base/v1beta1/coin"));

var dependency_3 = _interopRequireWildcard(require("./../../../core/client/v1/client"));

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
    var transfer;

    (function (_transfer) {
      var v1;

      (function (_v) {
        var MsgTransfer = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MsgTransfer, _pb_1$Message);

          var _super = _createSuper(MsgTransfer);

          function MsgTransfer(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MsgTransfer);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("source_port" in data && data.source_port != undefined) {
                _this.source_port = data.source_port;
              }

              if ("source_channel" in data && data.source_channel != undefined) {
                _this.source_channel = data.source_channel;
              }

              if ("token" in data && data.token != undefined) {
                _this.token = data.token;
              }

              if ("sender" in data && data.sender != undefined) {
                _this.sender = data.sender;
              }

              if ("receiver" in data && data.receiver != undefined) {
                _this.receiver = data.receiver;
              }

              if ("timeout_height" in data && data.timeout_height != undefined) {
                _this.timeout_height = data.timeout_height;
              }

              if ("timeout_timestamp" in data && data.timeout_timestamp != undefined) {
                _this.timeout_timestamp = data.timeout_timestamp;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MsgTransfer, [{
            key: "source_port",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "source_channel",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "token",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "sender",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "receiver",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "timeout_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 6);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 6, value);
            }
          }, {
            key: "timeout_timestamp",
            get: function get() {
              return pb_1.Message.getField(this, 7);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 7, value);
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

              if (this.source_port != null) {
                data.source_port = this.source_port;
              }

              if (this.source_channel != null) {
                data.source_channel = this.source_channel;
              }

              if (this.token != null) {
                data.token = this.token.toObject();
              }

              if (this.sender != null) {
                data.sender = this.sender;
              }

              if (this.receiver != null) {
                data.receiver = this.receiver;
              }

              if (this.timeout_height != null) {
                data.timeout_height = this.timeout_height.toObject();
              }

              if (this.timeout_timestamp != null) {
                data.timeout_timestamp = this.timeout_timestamp;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.source_port === "string" && this.source_port.length) writer.writeString(1, this.source_port);
              if (typeof this.source_channel === "string" && this.source_channel.length) writer.writeString(2, this.source_channel);
              if (this.token !== undefined) writer.writeMessage(3, this.token, function () {
                return _this2.token.serialize(writer);
              });
              if (typeof this.sender === "string" && this.sender.length) writer.writeString(4, this.sender);
              if (typeof this.receiver === "string" && this.receiver.length) writer.writeString(5, this.receiver);
              if (this.timeout_height !== undefined) writer.writeMessage(6, this.timeout_height, function () {
                return _this2.timeout_height.serialize(writer);
              });
              if (this.timeout_timestamp !== undefined) writer.writeUint64(7, this.timeout_timestamp);
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
              var message = new MsgTransfer({});

              if (data.source_port != null) {
                message.source_port = data.source_port;
              }

              if (data.source_channel != null) {
                message.source_channel = data.source_channel;
              }

              if (data.token != null) {
                message.token = dependency_2.cosmos.base.v1beta1.Coin.fromObject(data.token);
              }

              if (data.sender != null) {
                message.sender = data.sender;
              }

              if (data.receiver != null) {
                message.receiver = data.receiver;
              }

              if (data.timeout_height != null) {
                message.timeout_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.timeout_height);
              }

              if (data.timeout_timestamp != null) {
                message.timeout_timestamp = data.timeout_timestamp;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgTransfer();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.source_port = reader.readString();
                    break;

                  case 2:
                    message.source_channel = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.token, function () {
                      return message.token = dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.sender = reader.readString();
                    break;

                  case 5:
                    message.receiver = reader.readString();
                    break;

                  case 6:
                    reader.readMessage(message.timeout_height, function () {
                      return message.timeout_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 7:
                    message.timeout_timestamp = reader.readUint64();
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
              return MsgTransfer.deserialize(bytes);
            }
          }]);
          return MsgTransfer;
        }(pb_1.Message);

        _v.MsgTransfer = MsgTransfer;

        var MsgTransferResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(MsgTransferResponse, _pb_1$Message2);

          var _super2 = _createSuper(MsgTransferResponse);

          function MsgTransferResponse(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, MsgTransferResponse);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this3;
          }

          (0, _createClass2["default"])(MsgTransferResponse, [{
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
              var message = new MsgTransferResponse({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgTransferResponse();

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
              return MsgTransferResponse.deserialize(bytes);
            }
          }]);
          return MsgTransferResponse;
        }(pb_1.Message);

        _v.MsgTransferResponse = MsgTransferResponse;
      })(v1 || (v1 = _transfer.v1 || (_transfer.v1 = {})));
    })(transfer || (transfer = _applications.transfer || (_applications.transfer = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));