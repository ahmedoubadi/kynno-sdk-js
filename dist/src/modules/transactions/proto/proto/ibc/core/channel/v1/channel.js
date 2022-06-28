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
        var State;

        (function (State) {
          State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
          State[State["STATE_INIT"] = 1] = "STATE_INIT";
          State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
          State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
          State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
        })(State || (State = {}));

        _v.State = State;
        var Order;

        (function (Order) {
          Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
          Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
          Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
        })(Order || (Order = {}));

        _v.Order = Order;

        var Channel = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(Channel, _pb_1$Message);

          var _super = _createSuper(Channel);

          function Channel(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, Channel);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("state" in data && data.state != undefined) {
                _this.state = data.state;
              }

              if ("ordering" in data && data.ordering != undefined) {
                _this.ordering = data.ordering;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this.counterparty = data.counterparty;
              }

              if ("connection_hops" in data && data.connection_hops != undefined) {
                _this.connection_hops = data.connection_hops;
              }

              if ("version" in data && data.version != undefined) {
                _this.version = data.version;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(Channel, [{
            key: "state",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "ordering",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Counterparty, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "connection_hops",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "version",
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

              if (this.state != null) {
                data.state = this.state;
              }

              if (this.ordering != null) {
                data.ordering = this.ordering;
              }

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.connection_hops != null) {
                data.connection_hops = this.connection_hops;
              }

              if (this.version != null) {
                data.version = this.version;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.state !== undefined) writer.writeEnum(1, this.state);
              if (this.ordering !== undefined) writer.writeEnum(2, this.ordering);
              if (this.counterparty !== undefined) writer.writeMessage(3, this.counterparty, function () {
                return _this2.counterparty.serialize(writer);
              });
              if (this.connection_hops !== undefined) writer.writeRepeatedString(4, this.connection_hops);
              if (typeof this.version === "string" && this.version.length) writer.writeString(5, this.version);
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
              var message = new Channel({});

              if (data.state != null) {
                message.state = data.state;
              }

              if (data.ordering != null) {
                message.ordering = data.ordering;
              }

              if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
              }

              if (data.connection_hops != null) {
                message.connection_hops = data.connection_hops;
              }

              if (data.version != null) {
                message.version = data.version;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Channel();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.state = reader.readEnum();
                    break;

                  case 2:
                    message.ordering = reader.readEnum();
                    break;

                  case 3:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = Counterparty.deserialize(reader);
                    });
                    break;

                  case 4:
                    pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                    break;

                  case 5:
                    message.version = reader.readString();
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
              return Channel.deserialize(bytes);
            }
          }]);
          return Channel;
        }(pb_1.Message);

        _v.Channel = Channel;

        var IdentifiedChannel = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(IdentifiedChannel, _pb_1$Message2);

          var _super2 = _createSuper(IdentifiedChannel);

          function IdentifiedChannel(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, IdentifiedChannel);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [4], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("state" in data && data.state != undefined) {
                _this3.state = data.state;
              }

              if ("ordering" in data && data.ordering != undefined) {
                _this3.ordering = data.ordering;
              }

              if ("counterparty" in data && data.counterparty != undefined) {
                _this3.counterparty = data.counterparty;
              }

              if ("connection_hops" in data && data.connection_hops != undefined) {
                _this3.connection_hops = data.connection_hops;
              }

              if ("version" in data && data.version != undefined) {
                _this3.version = data.version;
              }

              if ("port_id" in data && data.port_id != undefined) {
                _this3.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this3.channel_id = data.channel_id;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(IdentifiedChannel, [{
            key: "state",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "ordering",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "counterparty",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Counterparty, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "connection_hops",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "channel_id",
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

              if (this.state != null) {
                data.state = this.state;
              }

              if (this.ordering != null) {
                data.ordering = this.ordering;
              }

              if (this.counterparty != null) {
                data.counterparty = this.counterparty.toObject();
              }

              if (this.connection_hops != null) {
                data.connection_hops = this.connection_hops;
              }

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.state !== undefined) writer.writeEnum(1, this.state);
              if (this.ordering !== undefined) writer.writeEnum(2, this.ordering);
              if (this.counterparty !== undefined) writer.writeMessage(3, this.counterparty, function () {
                return _this4.counterparty.serialize(writer);
              });
              if (this.connection_hops !== undefined) writer.writeRepeatedString(4, this.connection_hops);
              if (typeof this.version === "string" && this.version.length) writer.writeString(5, this.version);
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(6, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(7, this.channel_id);
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
              var message = new IdentifiedChannel({});

              if (data.state != null) {
                message.state = data.state;
              }

              if (data.ordering != null) {
                message.ordering = data.ordering;
              }

              if (data.counterparty != null) {
                message.counterparty = Counterparty.fromObject(data.counterparty);
              }

              if (data.connection_hops != null) {
                message.connection_hops = data.connection_hops;
              }

              if (data.version != null) {
                message.version = data.version;
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
                  message = new IdentifiedChannel();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.state = reader.readEnum();
                    break;

                  case 2:
                    message.ordering = reader.readEnum();
                    break;

                  case 3:
                    reader.readMessage(message.counterparty, function () {
                      return message.counterparty = Counterparty.deserialize(reader);
                    });
                    break;

                  case 4:
                    pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                    break;

                  case 5:
                    message.version = reader.readString();
                    break;

                  case 6:
                    message.port_id = reader.readString();
                    break;

                  case 7:
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
              return IdentifiedChannel.deserialize(bytes);
            }
          }]);
          return IdentifiedChannel;
        }(pb_1.Message);

        _v.IdentifiedChannel = IdentifiedChannel;

        var Counterparty = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(Counterparty, _pb_1$Message3);

          var _super3 = _createSuper(Counterparty);

          function Counterparty(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, Counterparty);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this5.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this5.channel_id = data.channel_id;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(Counterparty, [{
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
            key: "toObject",
            value: function toObject() {
              var data = {};

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
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
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
                  message = new Counterparty();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
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
              return Counterparty.deserialize(bytes);
            }
          }]);
          return Counterparty;
        }(pb_1.Message);

        _v.Counterparty = Counterparty;

        var Packet = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(Packet, _pb_1$Message4);

          var _super4 = _createSuper(Packet);

          function Packet(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, Packet);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequence" in data && data.sequence != undefined) {
                _this6.sequence = data.sequence;
              }

              if ("source_port" in data && data.source_port != undefined) {
                _this6.source_port = data.source_port;
              }

              if ("source_channel" in data && data.source_channel != undefined) {
                _this6.source_channel = data.source_channel;
              }

              if ("destination_port" in data && data.destination_port != undefined) {
                _this6.destination_port = data.destination_port;
              }

              if ("destination_channel" in data && data.destination_channel != undefined) {
                _this6.destination_channel = data.destination_channel;
              }

              if ("data" in data && data.data != undefined) {
                _this6.data = data.data;
              }

              if ("timeout_height" in data && data.timeout_height != undefined) {
                _this6.timeout_height = data.timeout_height;
              }

              if ("timeout_timestamp" in data && data.timeout_timestamp != undefined) {
                _this6.timeout_timestamp = data.timeout_timestamp;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(Packet, [{
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "source_port",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "source_channel",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "destination_port",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "destination_channel",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "timeout_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 7);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 7, value);
            }
          }, {
            key: "timeout_timestamp",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
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

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              if (this.source_port != null) {
                data.source_port = this.source_port;
              }

              if (this.source_channel != null) {
                data.source_channel = this.source_channel;
              }

              if (this.destination_port != null) {
                data.destination_port = this.destination_port;
              }

              if (this.destination_channel != null) {
                data.destination_channel = this.destination_channel;
              }

              if (this.data != null) {
                data.data = this.data;
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
              var _this7 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.sequence !== undefined) writer.writeUint64(1, this.sequence);
              if (typeof this.source_port === "string" && this.source_port.length) writer.writeString(2, this.source_port);
              if (typeof this.source_channel === "string" && this.source_channel.length) writer.writeString(3, this.source_channel);
              if (typeof this.destination_port === "string" && this.destination_port.length) writer.writeString(4, this.destination_port);
              if (typeof this.destination_channel === "string" && this.destination_channel.length) writer.writeString(5, this.destination_channel);
              if (this.data !== undefined) writer.writeBytes(6, this.data);
              if (this.timeout_height !== undefined) writer.writeMessage(7, this.timeout_height, function () {
                return _this7.timeout_height.serialize(writer);
              });
              if (this.timeout_timestamp !== undefined) writer.writeUint64(8, this.timeout_timestamp);
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
              var message = new Packet({});

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              if (data.source_port != null) {
                message.source_port = data.source_port;
              }

              if (data.source_channel != null) {
                message.source_channel = data.source_channel;
              }

              if (data.destination_port != null) {
                message.destination_port = data.destination_port;
              }

              if (data.destination_channel != null) {
                message.destination_channel = data.destination_channel;
              }

              if (data.data != null) {
                message.data = data.data;
              }

              if (data.timeout_height != null) {
                message.timeout_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.timeout_height);
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
                  message = new Packet();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequence = reader.readUint64();
                    break;

                  case 2:
                    message.source_port = reader.readString();
                    break;

                  case 3:
                    message.source_channel = reader.readString();
                    break;

                  case 4:
                    message.destination_port = reader.readString();
                    break;

                  case 5:
                    message.destination_channel = reader.readString();
                    break;

                  case 6:
                    message.data = reader.readBytes();
                    break;

                  case 7:
                    reader.readMessage(message.timeout_height, function () {
                      return message.timeout_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 8:
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
              return Packet.deserialize(bytes);
            }
          }]);
          return Packet;
        }(pb_1.Message);

        _v.Packet = Packet;

        var PacketState = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(PacketState, _pb_1$Message5);

          var _super5 = _createSuper(PacketState);

          function PacketState(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, PacketState);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this8.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this8.channel_id = data.channel_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this8.sequence = data.sequence;
              }

              if ("data" in data && data.data != undefined) {
                _this8.data = data.data;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(PacketState, [{
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
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
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

              if (this.sequence != null) {
                data.sequence = this.sequence;
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
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
              if (this.data !== undefined) writer.writeBytes(4, this.data);
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
              var message = new PacketState({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
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
                  message = new PacketState();

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
                    message.sequence = reader.readUint64();
                    break;

                  case 4:
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
              return PacketState.deserialize(bytes);
            }
          }]);
          return PacketState;
        }(pb_1.Message);

        _v.PacketState = PacketState;

        var Acknowledgement = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(Acknowledgement, _pb_1$Message6);

          var _super6 = _createSuper(Acknowledgement);

          function Acknowledgement(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, Acknowledgement);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], [[21, 22]]);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("result" in data && data.result != undefined) {
                _this9.result = data.result;
              }

              if ("error" in data && data.error != undefined) {
                _this9.error = data.error;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(Acknowledgement, [{
            key: "result",
            get: function get() {
              return pb_1.Message.getField(this, 21);
            },
            set: function set(value) {
              pb_1.Message.setOneofField(this, 21, [21, 22], value);
            }
          }, {
            key: "error",
            get: function get() {
              return pb_1.Message.getField(this, 22);
            },
            set: function set(value) {
              pb_1.Message.setOneofField(this, 22, [21, 22], value);
            }
          }, {
            key: "response",
            get: function get() {
              var cases = {
                0: "none",
                21: "result",
                22: "error"
              };
              return cases[pb_1.Message.computeOneofCase(this, [21, 22])];
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.result != null) {
                data.result = this.result;
              }

              if (this.error != null) {
                data.error = this.error;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.result !== undefined) writer.writeBytes(21, this.result);
              if (typeof this.error === "string" && this.error.length) writer.writeString(22, this.error);
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
              var message = new Acknowledgement({});

              if (data.result != null) {
                message.result = data.result;
              }

              if (data.error != null) {
                message.error = data.error;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Acknowledgement();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 21:
                    message.result = reader.readBytes();
                    break;

                  case 22:
                    message.error = reader.readString();
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
              return Acknowledgement.deserialize(bytes);
            }
          }]);
          return Acknowledgement;
        }(pb_1.Message);

        _v.Acknowledgement = Acknowledgement;
      })(v1 || (v1 = _channel.v1 || (_channel.v1 = {})));
    })(channel || (channel = _core.channel || (_core.channel = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));