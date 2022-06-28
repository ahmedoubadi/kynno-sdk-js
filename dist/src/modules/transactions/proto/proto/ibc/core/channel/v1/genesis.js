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

var dependency_2 = _interopRequireWildcard(require("./channel"));

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
        var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(GenesisState, _pb_1$Message);

          var _super = _createSuper(GenesisState);

          function GenesisState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, GenesisState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1, 2, 3, 4, 5, 6, 7], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("channels" in data && data.channels != undefined) {
                _this.channels = data.channels;
              }

              if ("acknowledgements" in data && data.acknowledgements != undefined) {
                _this.acknowledgements = data.acknowledgements;
              }

              if ("commitments" in data && data.commitments != undefined) {
                _this.commitments = data.commitments;
              }

              if ("receipts" in data && data.receipts != undefined) {
                _this.receipts = data.receipts;
              }

              if ("send_sequences" in data && data.send_sequences != undefined) {
                _this.send_sequences = data.send_sequences;
              }

              if ("recv_sequences" in data && data.recv_sequences != undefined) {
                _this.recv_sequences = data.recv_sequences;
              }

              if ("ack_sequences" in data && data.ack_sequences != undefined) {
                _this.ack_sequences = data.ack_sequences;
              }

              if ("next_channel_sequence" in data && data.next_channel_sequence != undefined) {
                _this.next_channel_sequence = data.next_channel_sequence;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GenesisState, [{
            key: "channels",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.channel.v1.IdentifiedChannel, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "acknowledgements",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.channel.v1.PacketState, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "commitments",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.channel.v1.PacketState, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
          }, {
            key: "receipts",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.channel.v1.PacketState, 4);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 4, value);
            }
          }, {
            key: "send_sequences",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, PacketSequence, 5);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 5, value);
            }
          }, {
            key: "recv_sequences",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, PacketSequence, 6);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 6, value);
            }
          }, {
            key: "ack_sequences",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, PacketSequence, 7);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 7, value);
            }
          }, {
            key: "next_channel_sequence",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
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

              if (this.channels != null) {
                data.channels = this.channels.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.acknowledgements != null) {
                data.acknowledgements = this.acknowledgements.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.commitments != null) {
                data.commitments = this.commitments.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.receipts != null) {
                data.receipts = this.receipts.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.send_sequences != null) {
                data.send_sequences = this.send_sequences.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.recv_sequences != null) {
                data.recv_sequences = this.recv_sequences.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.ack_sequences != null) {
                data.ack_sequences = this.ack_sequences.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.next_channel_sequence != null) {
                data.next_channel_sequence = this.next_channel_sequence;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.channels !== undefined) writer.writeRepeatedMessage(1, this.channels, function (item) {
                return item.serialize(writer);
              });
              if (this.acknowledgements !== undefined) writer.writeRepeatedMessage(2, this.acknowledgements, function (item) {
                return item.serialize(writer);
              });
              if (this.commitments !== undefined) writer.writeRepeatedMessage(3, this.commitments, function (item) {
                return item.serialize(writer);
              });
              if (this.receipts !== undefined) writer.writeRepeatedMessage(4, this.receipts, function (item) {
                return item.serialize(writer);
              });
              if (this.send_sequences !== undefined) writer.writeRepeatedMessage(5, this.send_sequences, function (item) {
                return item.serialize(writer);
              });
              if (this.recv_sequences !== undefined) writer.writeRepeatedMessage(6, this.recv_sequences, function (item) {
                return item.serialize(writer);
              });
              if (this.ack_sequences !== undefined) writer.writeRepeatedMessage(7, this.ack_sequences, function (item) {
                return item.serialize(writer);
              });
              if (this.next_channel_sequence !== undefined) writer.writeUint64(8, this.next_channel_sequence);
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

              if (data.channels != null) {
                message.channels = data.channels.map(function (item) {
                  return dependency_2.ibc.core.channel.v1.IdentifiedChannel.fromObject(item);
                });
              }

              if (data.acknowledgements != null) {
                message.acknowledgements = data.acknowledgements.map(function (item) {
                  return dependency_2.ibc.core.channel.v1.PacketState.fromObject(item);
                });
              }

              if (data.commitments != null) {
                message.commitments = data.commitments.map(function (item) {
                  return dependency_2.ibc.core.channel.v1.PacketState.fromObject(item);
                });
              }

              if (data.receipts != null) {
                message.receipts = data.receipts.map(function (item) {
                  return dependency_2.ibc.core.channel.v1.PacketState.fromObject(item);
                });
              }

              if (data.send_sequences != null) {
                message.send_sequences = data.send_sequences.map(function (item) {
                  return PacketSequence.fromObject(item);
                });
              }

              if (data.recv_sequences != null) {
                message.recv_sequences = data.recv_sequences.map(function (item) {
                  return PacketSequence.fromObject(item);
                });
              }

              if (data.ack_sequences != null) {
                message.ack_sequences = data.ack_sequences.map(function (item) {
                  return PacketSequence.fromObject(item);
                });
              }

              if (data.next_channel_sequence != null) {
                message.next_channel_sequence = data.next_channel_sequence;
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
                    reader.readMessage(message.channels, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.channel.v1.IdentifiedChannel.deserialize(reader), dependency_2.ibc.core.channel.v1.IdentifiedChannel);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.acknowledgements, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_2.ibc.core.channel.v1.PacketState);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.commitments, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_2.ibc.core.channel.v1.PacketState);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.receipts, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_2.ibc.core.channel.v1.PacketState);
                    });
                    break;

                  case 5:
                    reader.readMessage(message.send_sequences, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 5, PacketSequence.deserialize(reader), PacketSequence);
                    });
                    break;

                  case 6:
                    reader.readMessage(message.recv_sequences, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 6, PacketSequence.deserialize(reader), PacketSequence);
                    });
                    break;

                  case 7:
                    reader.readMessage(message.ack_sequences, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 7, PacketSequence.deserialize(reader), PacketSequence);
                    });
                    break;

                  case 8:
                    message.next_channel_sequence = reader.readUint64();
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

        var PacketSequence = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(PacketSequence, _pb_1$Message2);

          var _super2 = _createSuper(PacketSequence);

          function PacketSequence(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, PacketSequence);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this2.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this2.channel_id = data.channel_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this2.sequence = data.sequence;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(PacketSequence, [{
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

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
              var message = new PacketSequence({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PacketSequence();

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

                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return PacketSequence.deserialize(bytes);
            }
          }]);
          return PacketSequence;
        }(pb_1.Message);

        _v.PacketSequence = PacketSequence;
      })(v1 || (v1 = _channel.v1 || (_channel.v1 = {})));
    })(channel || (channel = _core.channel || (_core.channel = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));