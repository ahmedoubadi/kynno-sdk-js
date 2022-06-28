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

var dependency_2 = _interopRequireWildcard(require("./../../../../tendermint/abci/types"));

var dependency_3 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var abci;

    (function (_abci) {
      var v1beta1;

      (function (_v1beta) {
        var TxResponse = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(TxResponse, _pb_1$Message);

          var _super = _createSuper(TxResponse);

          function TxResponse(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, TxResponse);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [7, 13], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("height" in data && data.height != undefined) {
                _this.height = data.height;
              }

              if ("txhash" in data && data.txhash != undefined) {
                _this.txhash = data.txhash;
              }

              if ("codespace" in data && data.codespace != undefined) {
                _this.codespace = data.codespace;
              }

              if ("code" in data && data.code != undefined) {
                _this.code = data.code;
              }

              if ("data" in data && data.data != undefined) {
                _this.data = data.data;
              }

              if ("raw_log" in data && data.raw_log != undefined) {
                _this.raw_log = data.raw_log;
              }

              if ("logs" in data && data.logs != undefined) {
                _this.logs = data.logs;
              }

              if ("info" in data && data.info != undefined) {
                _this.info = data.info;
              }

              if ("gas_wanted" in data && data.gas_wanted != undefined) {
                _this.gas_wanted = data.gas_wanted;
              }

              if ("gas_used" in data && data.gas_used != undefined) {
                _this.gas_used = data.gas_used;
              }

              if ("tx" in data && data.tx != undefined) {
                _this.tx = data.tx;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this.timestamp = data.timestamp;
              }

              if ("events" in data && data.events != undefined) {
                _this.events = data.events;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(TxResponse, [{
            key: "height",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "txhash",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "codespace",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "code",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "raw_log",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "logs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, ABCIMessageLog, 7);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 7, value);
            }
          }, {
            key: "info",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
            }
          }, {
            key: "gas_wanted",
            get: function get() {
              return pb_1.Message.getField(this, 9);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 9, value);
            }
          }, {
            key: "gas_used",
            get: function get() {
              return pb_1.Message.getField(this, 10);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 10, value);
            }
          }, {
            key: "tx",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 11);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 11, value);
            }
          }, {
            key: "timestamp",
            get: function get() {
              return pb_1.Message.getField(this, 12);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 12, value);
            }
          }, {
            key: "events",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.tendermint.abci.Event, 13);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 13, value);
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

              if (this.height != null) {
                data.height = this.height;
              }

              if (this.txhash != null) {
                data.txhash = this.txhash;
              }

              if (this.codespace != null) {
                data.codespace = this.codespace;
              }

              if (this.code != null) {
                data.code = this.code;
              }

              if (this.data != null) {
                data.data = this.data;
              }

              if (this.raw_log != null) {
                data.raw_log = this.raw_log;
              }

              if (this.logs != null) {
                data.logs = this.logs.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.info != null) {
                data.info = this.info;
              }

              if (this.gas_wanted != null) {
                data.gas_wanted = this.gas_wanted;
              }

              if (this.gas_used != null) {
                data.gas_used = this.gas_used;
              }

              if (this.tx != null) {
                data.tx = this.tx.toObject();
              }

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              if (this.events != null) {
                data.events = this.events.map(function (item) {
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
              if (this.height !== undefined) writer.writeInt64(1, this.height);
              if (typeof this.txhash === "string" && this.txhash.length) writer.writeString(2, this.txhash);
              if (typeof this.codespace === "string" && this.codespace.length) writer.writeString(3, this.codespace);
              if (this.code !== undefined) writer.writeUint32(4, this.code);
              if (typeof this.data === "string" && this.data.length) writer.writeString(5, this.data);
              if (typeof this.raw_log === "string" && this.raw_log.length) writer.writeString(6, this.raw_log);
              if (this.logs !== undefined) writer.writeRepeatedMessage(7, this.logs, function (item) {
                return item.serialize(writer);
              });
              if (typeof this.info === "string" && this.info.length) writer.writeString(8, this.info);
              if (this.gas_wanted !== undefined) writer.writeInt64(9, this.gas_wanted);
              if (this.gas_used !== undefined) writer.writeInt64(10, this.gas_used);
              if (this.tx !== undefined) writer.writeMessage(11, this.tx, function () {
                return _this2.tx.serialize(writer);
              });
              if (typeof this.timestamp === "string" && this.timestamp.length) writer.writeString(12, this.timestamp);
              if (this.events !== undefined) writer.writeRepeatedMessage(13, this.events, function (item) {
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
              var message = new TxResponse({});

              if (data.height != null) {
                message.height = data.height;
              }

              if (data.txhash != null) {
                message.txhash = data.txhash;
              }

              if (data.codespace != null) {
                message.codespace = data.codespace;
              }

              if (data.code != null) {
                message.code = data.code;
              }

              if (data.data != null) {
                message.data = data.data;
              }

              if (data.raw_log != null) {
                message.raw_log = data.raw_log;
              }

              if (data.logs != null) {
                message.logs = data.logs.map(function (item) {
                  return ABCIMessageLog.fromObject(item);
                });
              }

              if (data.info != null) {
                message.info = data.info;
              }

              if (data.gas_wanted != null) {
                message.gas_wanted = data.gas_wanted;
              }

              if (data.gas_used != null) {
                message.gas_used = data.gas_used;
              }

              if (data.tx != null) {
                message.tx = dependency_3.google.protobuf.Any.fromObject(data.tx);
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              if (data.events != null) {
                message.events = data.events.map(function (item) {
                  return dependency_2.tendermint.abci.Event.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new TxResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.height = reader.readInt64();
                    break;

                  case 2:
                    message.txhash = reader.readString();
                    break;

                  case 3:
                    message.codespace = reader.readString();
                    break;

                  case 4:
                    message.code = reader.readUint32();
                    break;

                  case 5:
                    message.data = reader.readString();
                    break;

                  case 6:
                    message.raw_log = reader.readString();
                    break;

                  case 7:
                    reader.readMessage(message.logs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 7, ABCIMessageLog.deserialize(reader), ABCIMessageLog);
                    });
                    break;

                  case 8:
                    message.info = reader.readString();
                    break;

                  case 9:
                    message.gas_wanted = reader.readInt64();
                    break;

                  case 10:
                    message.gas_used = reader.readInt64();
                    break;

                  case 11:
                    reader.readMessage(message.tx, function () {
                      return message.tx = dependency_3.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 12:
                    message.timestamp = reader.readString();
                    break;

                  case 13:
                    reader.readMessage(message.events, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_2.tendermint.abci.Event.deserialize(reader), dependency_2.tendermint.abci.Event);
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
              return TxResponse.deserialize(bytes);
            }
          }]);
          return TxResponse;
        }(pb_1.Message);

        _v1beta.TxResponse = TxResponse;

        var ABCIMessageLog = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(ABCIMessageLog, _pb_1$Message2);

          var _super2 = _createSuper(ABCIMessageLog);

          function ABCIMessageLog(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, ABCIMessageLog);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("msg_index" in data && data.msg_index != undefined) {
                _this3.msg_index = data.msg_index;
              }

              if ("log" in data && data.log != undefined) {
                _this3.log = data.log;
              }

              if ("events" in data && data.events != undefined) {
                _this3.events = data.events;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ABCIMessageLog, [{
            key: "msg_index",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "log",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "events",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, StringEvent, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

              if (this.msg_index != null) {
                data.msg_index = this.msg_index;
              }

              if (this.log != null) {
                data.log = this.log;
              }

              if (this.events != null) {
                data.events = this.events.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.msg_index !== undefined) writer.writeUint32(1, this.msg_index);
              if (typeof this.log === "string" && this.log.length) writer.writeString(2, this.log);
              if (this.events !== undefined) writer.writeRepeatedMessage(3, this.events, function (item) {
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
              var message = new ABCIMessageLog({});

              if (data.msg_index != null) {
                message.msg_index = data.msg_index;
              }

              if (data.log != null) {
                message.log = data.log;
              }

              if (data.events != null) {
                message.events = data.events.map(function (item) {
                  return StringEvent.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ABCIMessageLog();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.msg_index = reader.readUint32();
                    break;

                  case 2:
                    message.log = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.events, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, StringEvent.deserialize(reader), StringEvent);
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
              return ABCIMessageLog.deserialize(bytes);
            }
          }]);
          return ABCIMessageLog;
        }(pb_1.Message);

        _v1beta.ABCIMessageLog = ABCIMessageLog;

        var StringEvent = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(StringEvent, _pb_1$Message3);

          var _super3 = _createSuper(StringEvent);

          function StringEvent(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, StringEvent);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("type" in data && data.type != undefined) {
                _this4.type = data.type;
              }

              if ("attributes" in data && data.attributes != undefined) {
                _this4.attributes = data.attributes;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(StringEvent, [{
            key: "type",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "attributes",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Attribute, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

              if (this.type != null) {
                data.type = this.type;
              }

              if (this.attributes != null) {
                data.attributes = this.attributes.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.type === "string" && this.type.length) writer.writeString(1, this.type);
              if (this.attributes !== undefined) writer.writeRepeatedMessage(2, this.attributes, function (item) {
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
              var message = new StringEvent({});

              if (data.type != null) {
                message.type = data.type;
              }

              if (data.attributes != null) {
                message.attributes = data.attributes.map(function (item) {
                  return Attribute.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new StringEvent();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.type = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.attributes, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, Attribute.deserialize(reader), Attribute);
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
              return StringEvent.deserialize(bytes);
            }
          }]);
          return StringEvent;
        }(pb_1.Message);

        _v1beta.StringEvent = StringEvent;

        var Attribute = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(Attribute, _pb_1$Message4);

          var _super4 = _createSuper(Attribute);

          function Attribute(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, Attribute);
            _this5 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this5.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this5.value = data.value;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(Attribute, [{
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
              if (typeof this.key === "string" && this.key.length) writer.writeString(1, this.key);
              if (typeof this.value === "string" && this.value.length) writer.writeString(2, this.value);
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
              var message = new Attribute({});

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
                  message = new Attribute();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.key = reader.readString();
                    break;

                  case 2:
                    message.value = reader.readString();
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
              return Attribute.deserialize(bytes);
            }
          }]);
          return Attribute;
        }(pb_1.Message);

        _v1beta.Attribute = Attribute;

        var GasInfo = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(GasInfo, _pb_1$Message5);

          var _super5 = _createSuper(GasInfo);

          function GasInfo(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, GasInfo);
            _this6 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("gas_wanted" in data && data.gas_wanted != undefined) {
                _this6.gas_wanted = data.gas_wanted;
              }

              if ("gas_used" in data && data.gas_used != undefined) {
                _this6.gas_used = data.gas_used;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(GasInfo, [{
            key: "gas_wanted",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "gas_used",
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

              if (this.gas_wanted != null) {
                data.gas_wanted = this.gas_wanted;
              }

              if (this.gas_used != null) {
                data.gas_used = this.gas_used;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.gas_wanted !== undefined) writer.writeUint64(1, this.gas_wanted);
              if (this.gas_used !== undefined) writer.writeUint64(2, this.gas_used);
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
              var message = new GasInfo({});

              if (data.gas_wanted != null) {
                message.gas_wanted = data.gas_wanted;
              }

              if (data.gas_used != null) {
                message.gas_used = data.gas_used;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GasInfo();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.gas_wanted = reader.readUint64();
                    break;

                  case 2:
                    message.gas_used = reader.readUint64();
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
              return GasInfo.deserialize(bytes);
            }
          }]);
          return GasInfo;
        }(pb_1.Message);

        _v1beta.GasInfo = GasInfo;

        var Result = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(Result, _pb_1$Message6);

          var _super6 = _createSuper(Result);

          function Result(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, Result);
            _this7 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("data" in data && data.data != undefined) {
                _this7.data = data.data;
              }

              if ("log" in data && data.log != undefined) {
                _this7.log = data.log;
              }

              if ("events" in data && data.events != undefined) {
                _this7.events = data.events;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(Result, [{
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "log",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "events",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.tendermint.abci.Event, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

              if (this.data != null) {
                data.data = this.data;
              }

              if (this.log != null) {
                data.log = this.log;
              }

              if (this.events != null) {
                data.events = this.events.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.data !== undefined) writer.writeBytes(1, this.data);
              if (typeof this.log === "string" && this.log.length) writer.writeString(2, this.log);
              if (this.events !== undefined) writer.writeRepeatedMessage(3, this.events, function (item) {
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
              var message = new Result({});

              if (data.data != null) {
                message.data = data.data;
              }

              if (data.log != null) {
                message.log = data.log;
              }

              if (data.events != null) {
                message.events = data.events.map(function (item) {
                  return dependency_2.tendermint.abci.Event.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Result();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.data = reader.readBytes();
                    break;

                  case 2:
                    message.log = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.events, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.tendermint.abci.Event.deserialize(reader), dependency_2.tendermint.abci.Event);
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
              return Result.deserialize(bytes);
            }
          }]);
          return Result;
        }(pb_1.Message);

        _v1beta.Result = Result;

        var SimulationResponse = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(SimulationResponse, _pb_1$Message7);

          var _super7 = _createSuper(SimulationResponse);

          function SimulationResponse(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, SimulationResponse);
            _this8 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("gas_info" in data && data.gas_info != undefined) {
                _this8.gas_info = data.gas_info;
              }

              if ("result" in data && data.result != undefined) {
                _this8.result = data.result;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(SimulationResponse, [{
            key: "gas_info",
            get: function get() {
              return pb_1.Message.getWrapperField(this, GasInfo, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "result",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Result, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.gas_info != null) {
                data.gas_info = this.gas_info.toObject();
              }

              if (this.result != null) {
                data.result = this.result.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this9 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.gas_info !== undefined) writer.writeMessage(1, this.gas_info, function () {
                return _this9.gas_info.serialize(writer);
              });
              if (this.result !== undefined) writer.writeMessage(2, this.result, function () {
                return _this9.result.serialize(writer);
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
              var message = new SimulationResponse({});

              if (data.gas_info != null) {
                message.gas_info = GasInfo.fromObject(data.gas_info);
              }

              if (data.result != null) {
                message.result = Result.fromObject(data.result);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SimulationResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.gas_info, function () {
                      return message.gas_info = GasInfo.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.result, function () {
                      return message.result = Result.deserialize(reader);
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
              return SimulationResponse.deserialize(bytes);
            }
          }]);
          return SimulationResponse;
        }(pb_1.Message);

        _v1beta.SimulationResponse = SimulationResponse;

        var MsgData = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(MsgData, _pb_1$Message8);

          var _super8 = _createSuper(MsgData);

          function MsgData(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, MsgData);
            _this10 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("msg_type" in data && data.msg_type != undefined) {
                _this10.msg_type = data.msg_type;
              }

              if ("data" in data && data.data != undefined) {
                _this10.data = data.data;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(MsgData, [{
            key: "msg_type",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "data",
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

              if (this.msg_type != null) {
                data.msg_type = this.msg_type;
              }

              if (this.data != null) {
                data.data = this.data;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.msg_type === "string" && this.msg_type.length) writer.writeString(1, this.msg_type);
              if (this.data !== undefined) writer.writeBytes(2, this.data);
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
              var message = new MsgData({});

              if (data.msg_type != null) {
                message.msg_type = data.msg_type;
              }

              if (data.data != null) {
                message.data = data.data;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.msg_type = reader.readString();
                    break;

                  case 2:
                    message.data = reader.readBytes();
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
              return MsgData.deserialize(bytes);
            }
          }]);
          return MsgData;
        }(pb_1.Message);

        _v1beta.MsgData = MsgData;

        var TxMsgData = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(TxMsgData, _pb_1$Message9);

          var _super9 = _createSuper(TxMsgData);

          function TxMsgData(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, TxMsgData);
            _this11 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("data" in data && data.data != undefined) {
                _this11.data = data.data;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(TxMsgData, [{
            key: "data",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, MsgData, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.data != null) {
                data.data = this.data.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.data !== undefined) writer.writeRepeatedMessage(1, this.data, function (item) {
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
              var message = new TxMsgData({});

              if (data.data != null) {
                message.data = data.data.map(function (item) {
                  return MsgData.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new TxMsgData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.data, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, MsgData.deserialize(reader), MsgData);
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
              return TxMsgData.deserialize(bytes);
            }
          }]);
          return TxMsgData;
        }(pb_1.Message);

        _v1beta.TxMsgData = TxMsgData;

        var SearchTxsResult = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(SearchTxsResult, _pb_1$Message10);

          var _super10 = _createSuper(SearchTxsResult);

          function SearchTxsResult(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, SearchTxsResult);
            _this12 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [6], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("total_count" in data && data.total_count != undefined) {
                _this12.total_count = data.total_count;
              }

              if ("count" in data && data.count != undefined) {
                _this12.count = data.count;
              }

              if ("page_number" in data && data.page_number != undefined) {
                _this12.page_number = data.page_number;
              }

              if ("page_total" in data && data.page_total != undefined) {
                _this12.page_total = data.page_total;
              }

              if ("limit" in data && data.limit != undefined) {
                _this12.limit = data.limit;
              }

              if ("txs" in data && data.txs != undefined) {
                _this12.txs = data.txs;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(SearchTxsResult, [{
            key: "total_count",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "count",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "page_number",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "page_total",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "limit",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "txs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, TxResponse, 6);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 6, value);
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

              if (this.total_count != null) {
                data.total_count = this.total_count;
              }

              if (this.count != null) {
                data.count = this.count;
              }

              if (this.page_number != null) {
                data.page_number = this.page_number;
              }

              if (this.page_total != null) {
                data.page_total = this.page_total;
              }

              if (this.limit != null) {
                data.limit = this.limit;
              }

              if (this.txs != null) {
                data.txs = this.txs.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.total_count !== undefined) writer.writeUint64(1, this.total_count);
              if (this.count !== undefined) writer.writeUint64(2, this.count);
              if (this.page_number !== undefined) writer.writeUint64(3, this.page_number);
              if (this.page_total !== undefined) writer.writeUint64(4, this.page_total);
              if (this.limit !== undefined) writer.writeUint64(5, this.limit);
              if (this.txs !== undefined) writer.writeRepeatedMessage(6, this.txs, function (item) {
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
              var message = new SearchTxsResult({});

              if (data.total_count != null) {
                message.total_count = data.total_count;
              }

              if (data.count != null) {
                message.count = data.count;
              }

              if (data.page_number != null) {
                message.page_number = data.page_number;
              }

              if (data.page_total != null) {
                message.page_total = data.page_total;
              }

              if (data.limit != null) {
                message.limit = data.limit;
              }

              if (data.txs != null) {
                message.txs = data.txs.map(function (item) {
                  return TxResponse.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SearchTxsResult();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.total_count = reader.readUint64();
                    break;

                  case 2:
                    message.count = reader.readUint64();
                    break;

                  case 3:
                    message.page_number = reader.readUint64();
                    break;

                  case 4:
                    message.page_total = reader.readUint64();
                    break;

                  case 5:
                    message.limit = reader.readUint64();
                    break;

                  case 6:
                    reader.readMessage(message.txs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 6, TxResponse.deserialize(reader), TxResponse);
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
              return SearchTxsResult.deserialize(bytes);
            }
          }]);
          return SearchTxsResult;
        }(pb_1.Message);

        _v1beta.SearchTxsResult = SearchTxsResult;
      })(v1beta1 || (v1beta1 = _abci.v1beta1 || (_abci.v1beta1 = {})));
    })(abci || (abci = _base.abci || (_base.abci = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));