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

var dependency_1 = _interopRequireWildcard(require("./../../../core/connection/v1/connection"));

var dependency_2 = _interopRequireWildcard(require("./../../../core/channel/v1/channel"));

var dependency_4 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var lightclients;

  (function (_lightclients) {
    var solomachine;

    (function (_solomachine) {
      var v1;

      (function (_v) {
        var DataType;

        (function (DataType) {
          DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
          DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
          DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
          DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
          DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
          DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
          DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
          DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
          DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
          DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
        })(DataType || (DataType = {}));

        _v.DataType = DataType;

        var ClientState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(ClientState, _pb_1$Message);

          var _super = _createSuper(ClientState);

          function ClientState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, ClientState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequence" in data && data.sequence != undefined) {
                _this.sequence = data.sequence;
              }

              if ("frozen_sequence" in data && data.frozen_sequence != undefined) {
                _this.frozen_sequence = data.frozen_sequence;
              }

              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this.consensus_state = data.consensus_state;
              }

              if ("allow_update_after_proposal" in data && data.allow_update_after_proposal != undefined) {
                _this.allow_update_after_proposal = data.allow_update_after_proposal;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(ClientState, [{
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "frozen_sequence",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ConsensusState, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "allow_update_after_proposal",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
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

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              if (this.frozen_sequence != null) {
                data.frozen_sequence = this.frozen_sequence;
              }

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
              }

              if (this.allow_update_after_proposal != null) {
                data.allow_update_after_proposal = this.allow_update_after_proposal;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.sequence !== undefined) writer.writeUint64(1, this.sequence);
              if (this.frozen_sequence !== undefined) writer.writeUint64(2, this.frozen_sequence);
              if (this.consensus_state !== undefined) writer.writeMessage(3, this.consensus_state, function () {
                return _this2.consensus_state.serialize(writer);
              });
              if (this.allow_update_after_proposal !== undefined) writer.writeBool(4, this.allow_update_after_proposal);
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
              var message = new ClientState({});

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              if (data.frozen_sequence != null) {
                message.frozen_sequence = data.frozen_sequence;
              }

              if (data.consensus_state != null) {
                message.consensus_state = ConsensusState.fromObject(data.consensus_state);
              }

              if (data.allow_update_after_proposal != null) {
                message.allow_update_after_proposal = data.allow_update_after_proposal;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequence = reader.readUint64();
                    break;

                  case 2:
                    message.frozen_sequence = reader.readUint64();
                    break;

                  case 3:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = ConsensusState.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.allow_update_after_proposal = reader.readBool();
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
              return ClientState.deserialize(bytes);
            }
          }]);
          return ClientState;
        }(pb_1.Message);

        _v.ClientState = ClientState;

        var ConsensusState = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(ConsensusState, _pb_1$Message2);

          var _super2 = _createSuper(ConsensusState);

          function ConsensusState(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, ConsensusState);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("public_key" in data && data.public_key != undefined) {
                _this3.public_key = data.public_key;
              }

              if ("diversifier" in data && data.diversifier != undefined) {
                _this3.diversifier = data.diversifier;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this3.timestamp = data.timestamp;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ConsensusState, [{
            key: "public_key",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "diversifier",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "timestamp",
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

              if (this.public_key != null) {
                data.public_key = this.public_key.toObject();
              }

              if (this.diversifier != null) {
                data.diversifier = this.diversifier;
              }

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.public_key !== undefined) writer.writeMessage(1, this.public_key, function () {
                return _this4.public_key.serialize(writer);
              });
              if (typeof this.diversifier === "string" && this.diversifier.length) writer.writeString(2, this.diversifier);
              if (this.timestamp !== undefined) writer.writeUint64(3, this.timestamp);
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
              var message = new ConsensusState({});

              if (data.public_key != null) {
                message.public_key = dependency_4.google.protobuf.Any.fromObject(data.public_key);
              }

              if (data.diversifier != null) {
                message.diversifier = data.diversifier;
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConsensusState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.public_key, function () {
                      return message.public_key = dependency_4.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.diversifier = reader.readString();
                    break;

                  case 3:
                    message.timestamp = reader.readUint64();
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
              return ConsensusState.deserialize(bytes);
            }
          }]);
          return ConsensusState;
        }(pb_1.Message);

        _v.ConsensusState = ConsensusState;

        var Header = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(Header, _pb_1$Message3);

          var _super3 = _createSuper(Header);

          function Header(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, Header);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequence" in data && data.sequence != undefined) {
                _this5.sequence = data.sequence;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this5.timestamp = data.timestamp;
              }

              if ("signature" in data && data.signature != undefined) {
                _this5.signature = data.signature;
              }

              if ("new_public_key" in data && data.new_public_key != undefined) {
                _this5.new_public_key = data.new_public_key;
              }

              if ("new_diversifier" in data && data.new_diversifier != undefined) {
                _this5.new_diversifier = data.new_diversifier;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(Header, [{
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "timestamp",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "signature",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "new_public_key",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "new_diversifier",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
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

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              if (this.signature != null) {
                data.signature = this.signature;
              }

              if (this.new_public_key != null) {
                data.new_public_key = this.new_public_key.toObject();
              }

              if (this.new_diversifier != null) {
                data.new_diversifier = this.new_diversifier;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this6 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.sequence !== undefined) writer.writeUint64(1, this.sequence);
              if (this.timestamp !== undefined) writer.writeUint64(2, this.timestamp);
              if (this.signature !== undefined) writer.writeBytes(3, this.signature);
              if (this.new_public_key !== undefined) writer.writeMessage(4, this.new_public_key, function () {
                return _this6.new_public_key.serialize(writer);
              });
              if (typeof this.new_diversifier === "string" && this.new_diversifier.length) writer.writeString(5, this.new_diversifier);
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
              var message = new Header({});

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              if (data.signature != null) {
                message.signature = data.signature;
              }

              if (data.new_public_key != null) {
                message.new_public_key = dependency_4.google.protobuf.Any.fromObject(data.new_public_key);
              }

              if (data.new_diversifier != null) {
                message.new_diversifier = data.new_diversifier;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Header();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequence = reader.readUint64();
                    break;

                  case 2:
                    message.timestamp = reader.readUint64();
                    break;

                  case 3:
                    message.signature = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.new_public_key, function () {
                      return message.new_public_key = dependency_4.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 5:
                    message.new_diversifier = reader.readString();
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
              return Header.deserialize(bytes);
            }
          }]);
          return Header;
        }(pb_1.Message);

        _v.Header = Header;

        var Misbehaviour = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(Misbehaviour, _pb_1$Message4);

          var _super4 = _createSuper(Misbehaviour);

          function Misbehaviour(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, Misbehaviour);
            _this7 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this7.client_id = data.client_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this7.sequence = data.sequence;
              }

              if ("signature_one" in data && data.signature_one != undefined) {
                _this7.signature_one = data.signature_one;
              }

              if ("signature_two" in data && data.signature_two != undefined) {
                _this7.signature_two = data.signature_two;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(Misbehaviour, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "signature_one",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SignatureAndData, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "signature_two",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SignatureAndData, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              if (this.signature_one != null) {
                data.signature_one = this.signature_one.toObject();
              }

              if (this.signature_two != null) {
                data.signature_two = this.signature_two.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.sequence !== undefined) writer.writeUint64(2, this.sequence);
              if (this.signature_one !== undefined) writer.writeMessage(3, this.signature_one, function () {
                return _this8.signature_one.serialize(writer);
              });
              if (this.signature_two !== undefined) writer.writeMessage(4, this.signature_two, function () {
                return _this8.signature_two.serialize(writer);
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
              var message = new Misbehaviour({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              if (data.signature_one != null) {
                message.signature_one = SignatureAndData.fromObject(data.signature_one);
              }

              if (data.signature_two != null) {
                message.signature_two = SignatureAndData.fromObject(data.signature_two);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Misbehaviour();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    message.sequence = reader.readUint64();
                    break;

                  case 3:
                    reader.readMessage(message.signature_one, function () {
                      return message.signature_one = SignatureAndData.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.signature_two, function () {
                      return message.signature_two = SignatureAndData.deserialize(reader);
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
              return Misbehaviour.deserialize(bytes);
            }
          }]);
          return Misbehaviour;
        }(pb_1.Message);

        _v.Misbehaviour = Misbehaviour;

        var SignatureAndData = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(SignatureAndData, _pb_1$Message5);

          var _super5 = _createSuper(SignatureAndData);

          function SignatureAndData(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, SignatureAndData);
            _this9 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("signature" in data && data.signature != undefined) {
                _this9.signature = data.signature;
              }

              if ("data_type" in data && data.data_type != undefined) {
                _this9.data_type = data.data_type;
              }

              if ("data" in data && data.data != undefined) {
                _this9.data = data.data;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this9.timestamp = data.timestamp;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(SignatureAndData, [{
            key: "signature",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "data_type",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "timestamp",
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

              if (this.signature != null) {
                data.signature = this.signature;
              }

              if (this.data_type != null) {
                data.data_type = this.data_type;
              }

              if (this.data != null) {
                data.data = this.data;
              }

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.signature !== undefined) writer.writeBytes(1, this.signature);
              if (this.data_type !== undefined) writer.writeEnum(2, this.data_type);
              if (this.data !== undefined) writer.writeBytes(3, this.data);
              if (this.timestamp !== undefined) writer.writeUint64(4, this.timestamp);
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
              var message = new SignatureAndData({});

              if (data.signature != null) {
                message.signature = data.signature;
              }

              if (data.data_type != null) {
                message.data_type = data.data_type;
              }

              if (data.data != null) {
                message.data = data.data;
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SignatureAndData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.signature = reader.readBytes();
                    break;

                  case 2:
                    message.data_type = reader.readEnum();
                    break;

                  case 3:
                    message.data = reader.readBytes();
                    break;

                  case 4:
                    message.timestamp = reader.readUint64();
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
              return SignatureAndData.deserialize(bytes);
            }
          }]);
          return SignatureAndData;
        }(pb_1.Message);

        _v.SignatureAndData = SignatureAndData;

        var TimestampedSignatureData = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(TimestampedSignatureData, _pb_1$Message6);

          var _super6 = _createSuper(TimestampedSignatureData);

          function TimestampedSignatureData(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, TimestampedSignatureData);
            _this10 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("signature_data" in data && data.signature_data != undefined) {
                _this10.signature_data = data.signature_data;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this10.timestamp = data.timestamp;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(TimestampedSignatureData, [{
            key: "signature_data",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "timestamp",
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

              if (this.signature_data != null) {
                data.signature_data = this.signature_data;
              }

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.signature_data !== undefined) writer.writeBytes(1, this.signature_data);
              if (this.timestamp !== undefined) writer.writeUint64(2, this.timestamp);
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
              var message = new TimestampedSignatureData({});

              if (data.signature_data != null) {
                message.signature_data = data.signature_data;
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new TimestampedSignatureData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.signature_data = reader.readBytes();
                    break;

                  case 2:
                    message.timestamp = reader.readUint64();
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
              return TimestampedSignatureData.deserialize(bytes);
            }
          }]);
          return TimestampedSignatureData;
        }(pb_1.Message);

        _v.TimestampedSignatureData = TimestampedSignatureData;

        var SignBytes = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(SignBytes, _pb_1$Message7);

          var _super7 = _createSuper(SignBytes);

          function SignBytes(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, SignBytes);
            _this11 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequence" in data && data.sequence != undefined) {
                _this11.sequence = data.sequence;
              }

              if ("timestamp" in data && data.timestamp != undefined) {
                _this11.timestamp = data.timestamp;
              }

              if ("diversifier" in data && data.diversifier != undefined) {
                _this11.diversifier = data.diversifier;
              }

              if ("data_type" in data && data.data_type != undefined) {
                _this11.data_type = data.data_type;
              }

              if ("data" in data && data.data != undefined) {
                _this11.data = data.data;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(SignBytes, [{
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "timestamp",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "diversifier",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "data_type",
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
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              if (this.timestamp != null) {
                data.timestamp = this.timestamp;
              }

              if (this.diversifier != null) {
                data.diversifier = this.diversifier;
              }

              if (this.data_type != null) {
                data.data_type = this.data_type;
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
              if (this.sequence !== undefined) writer.writeUint64(1, this.sequence);
              if (this.timestamp !== undefined) writer.writeUint64(2, this.timestamp);
              if (typeof this.diversifier === "string" && this.diversifier.length) writer.writeString(3, this.diversifier);
              if (this.data_type !== undefined) writer.writeEnum(4, this.data_type);
              if (this.data !== undefined) writer.writeBytes(5, this.data);
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
              var message = new SignBytes({});

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              if (data.timestamp != null) {
                message.timestamp = data.timestamp;
              }

              if (data.diversifier != null) {
                message.diversifier = data.diversifier;
              }

              if (data.data_type != null) {
                message.data_type = data.data_type;
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
                  message = new SignBytes();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequence = reader.readUint64();
                    break;

                  case 2:
                    message.timestamp = reader.readUint64();
                    break;

                  case 3:
                    message.diversifier = reader.readString();
                    break;

                  case 4:
                    message.data_type = reader.readEnum();
                    break;

                  case 5:
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
              return SignBytes.deserialize(bytes);
            }
          }]);
          return SignBytes;
        }(pb_1.Message);

        _v.SignBytes = SignBytes;

        var HeaderData = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(HeaderData, _pb_1$Message8);

          var _super8 = _createSuper(HeaderData);

          function HeaderData(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, HeaderData);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("new_pub_key" in data && data.new_pub_key != undefined) {
                _this12.new_pub_key = data.new_pub_key;
              }

              if ("new_diversifier" in data && data.new_diversifier != undefined) {
                _this12.new_diversifier = data.new_diversifier;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(HeaderData, [{
            key: "new_pub_key",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "new_diversifier",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
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

              if (this.new_pub_key != null) {
                data.new_pub_key = this.new_pub_key.toObject();
              }

              if (this.new_diversifier != null) {
                data.new_diversifier = this.new_diversifier;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this13 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.new_pub_key !== undefined) writer.writeMessage(1, this.new_pub_key, function () {
                return _this13.new_pub_key.serialize(writer);
              });
              if (typeof this.new_diversifier === "string" && this.new_diversifier.length) writer.writeString(2, this.new_diversifier);
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
              var message = new HeaderData({});

              if (data.new_pub_key != null) {
                message.new_pub_key = dependency_4.google.protobuf.Any.fromObject(data.new_pub_key);
              }

              if (data.new_diversifier != null) {
                message.new_diversifier = data.new_diversifier;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new HeaderData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.new_pub_key, function () {
                      return message.new_pub_key = dependency_4.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.new_diversifier = reader.readString();
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
              return HeaderData.deserialize(bytes);
            }
          }]);
          return HeaderData;
        }(pb_1.Message);

        _v.HeaderData = HeaderData;

        var ClientStateData = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(ClientStateData, _pb_1$Message9);

          var _super9 = _createSuper(ClientStateData);

          function ClientStateData(data) {
            var _this14;

            (0, _classCallCheck2["default"])(this, ClientStateData);
            _this14 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this14.path = data.path;
              }

              if ("client_state" in data && data.client_state != undefined) {
                _this14.client_state = data.client_state;
              }
            }

            return _this14;
          }

          (0, _createClass2["default"])(ClientStateData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this15 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.client_state !== undefined) writer.writeMessage(2, this.client_state, function () {
                return _this15.client_state.serialize(writer);
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
              var message = new ClientStateData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.client_state != null) {
                message.client_state = dependency_4.google.protobuf.Any.fromObject(data.client_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientStateData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_4.google.protobuf.Any.deserialize(reader);
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
              return ClientStateData.deserialize(bytes);
            }
          }]);
          return ClientStateData;
        }(pb_1.Message);

        _v.ClientStateData = ClientStateData;

        var ConsensusStateData = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(ConsensusStateData, _pb_1$Message10);

          var _super10 = _createSuper(ConsensusStateData);

          function ConsensusStateData(data) {
            var _this16;

            (0, _classCallCheck2["default"])(this, ConsensusStateData);
            _this16 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this16.path = data.path;
              }

              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this16.consensus_state = data.consensus_state;
              }
            }

            return _this16;
          }

          (0, _createClass2["default"])(ConsensusStateData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this17 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.consensus_state !== undefined) writer.writeMessage(2, this.consensus_state, function () {
                return _this17.consensus_state.serialize(writer);
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
              var message = new ConsensusStateData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.consensus_state != null) {
                message.consensus_state = dependency_4.google.protobuf.Any.fromObject(data.consensus_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConsensusStateData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_4.google.protobuf.Any.deserialize(reader);
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
              return ConsensusStateData.deserialize(bytes);
            }
          }]);
          return ConsensusStateData;
        }(pb_1.Message);

        _v.ConsensusStateData = ConsensusStateData;

        var ConnectionStateData = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(ConnectionStateData, _pb_1$Message11);

          var _super11 = _createSuper(ConnectionStateData);

          function ConnectionStateData(data) {
            var _this18;

            (0, _classCallCheck2["default"])(this, ConnectionStateData);
            _this18 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this18.path = data.path;
              }

              if ("connection" in data && data.connection != undefined) {
                _this18.connection = data.connection;
              }
            }

            return _this18;
          }

          (0, _createClass2["default"])(ConnectionStateData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "connection",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.connection.v1.ConnectionEnd, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.connection != null) {
                data.connection = this.connection.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this19 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.connection !== undefined) writer.writeMessage(2, this.connection, function () {
                return _this19.connection.serialize(writer);
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
              var message = new ConnectionStateData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.connection != null) {
                message.connection = dependency_1.ibc.core.connection.v1.ConnectionEnd.fromObject(data.connection);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConnectionStateData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    reader.readMessage(message.connection, function () {
                      return message.connection = dependency_1.ibc.core.connection.v1.ConnectionEnd.deserialize(reader);
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
              return ConnectionStateData.deserialize(bytes);
            }
          }]);
          return ConnectionStateData;
        }(pb_1.Message);

        _v.ConnectionStateData = ConnectionStateData;

        var ChannelStateData = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(ChannelStateData, _pb_1$Message12);

          var _super12 = _createSuper(ChannelStateData);

          function ChannelStateData(data) {
            var _this20;

            (0, _classCallCheck2["default"])(this, ChannelStateData);
            _this20 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this20.path = data.path;
              }

              if ("channel" in data && data.channel != undefined) {
                _this20.channel = data.channel;
              }
            }

            return _this20;
          }

          (0, _createClass2["default"])(ChannelStateData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.channel.v1.Channel, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.channel != null) {
                data.channel = this.channel.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this21 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.channel !== undefined) writer.writeMessage(2, this.channel, function () {
                return _this21.channel.serialize(writer);
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
              var message = new ChannelStateData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.channel != null) {
                message.channel = dependency_2.ibc.core.channel.v1.Channel.fromObject(data.channel);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ChannelStateData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    reader.readMessage(message.channel, function () {
                      return message.channel = dependency_2.ibc.core.channel.v1.Channel.deserialize(reader);
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
              return ChannelStateData.deserialize(bytes);
            }
          }]);
          return ChannelStateData;
        }(pb_1.Message);

        _v.ChannelStateData = ChannelStateData;

        var PacketCommitmentData = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(PacketCommitmentData, _pb_1$Message13);

          var _super13 = _createSuper(PacketCommitmentData);

          function PacketCommitmentData(data) {
            var _this22;

            (0, _classCallCheck2["default"])(this, PacketCommitmentData);
            _this22 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this22.path = data.path;
              }

              if ("commitment" in data && data.commitment != undefined) {
                _this22.commitment = data.commitment;
              }
            }

            return _this22;
          }

          (0, _createClass2["default"])(PacketCommitmentData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "commitment",
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.commitment != null) {
                data.commitment = this.commitment;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.commitment !== undefined) writer.writeBytes(2, this.commitment);
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
              var message = new PacketCommitmentData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.commitment != null) {
                message.commitment = data.commitment;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PacketCommitmentData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    message.commitment = reader.readBytes();
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
              return PacketCommitmentData.deserialize(bytes);
            }
          }]);
          return PacketCommitmentData;
        }(pb_1.Message);

        _v.PacketCommitmentData = PacketCommitmentData;

        var PacketAcknowledgementData = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(PacketAcknowledgementData, _pb_1$Message14);

          var _super14 = _createSuper(PacketAcknowledgementData);

          function PacketAcknowledgementData(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, PacketAcknowledgementData);
            _this23 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this23.path = data.path;
              }

              if ("acknowledgement" in data && data.acknowledgement != undefined) {
                _this23.acknowledgement = data.acknowledgement;
              }
            }

            return _this23;
          }

          (0, _createClass2["default"])(PacketAcknowledgementData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
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
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.acknowledgement != null) {
                data.acknowledgement = this.acknowledgement;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.acknowledgement !== undefined) writer.writeBytes(2, this.acknowledgement);
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
              var message = new PacketAcknowledgementData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.acknowledgement != null) {
                message.acknowledgement = data.acknowledgement;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PacketAcknowledgementData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    message.acknowledgement = reader.readBytes();
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
              return PacketAcknowledgementData.deserialize(bytes);
            }
          }]);
          return PacketAcknowledgementData;
        }(pb_1.Message);

        _v.PacketAcknowledgementData = PacketAcknowledgementData;

        var PacketReceiptAbsenceData = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(PacketReceiptAbsenceData, _pb_1$Message15);

          var _super15 = _createSuper(PacketReceiptAbsenceData);

          function PacketReceiptAbsenceData(data) {
            var _this24;

            (0, _classCallCheck2["default"])(this, PacketReceiptAbsenceData);
            _this24 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this24.path = data.path;
              }
            }

            return _this24;
          }

          (0, _createClass2["default"])(PacketReceiptAbsenceData, [{
            key: "path",
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

              if (this.path != null) {
                data.path = this.path;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
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
              var message = new PacketReceiptAbsenceData({});

              if (data.path != null) {
                message.path = data.path;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PacketReceiptAbsenceData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
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
              return PacketReceiptAbsenceData.deserialize(bytes);
            }
          }]);
          return PacketReceiptAbsenceData;
        }(pb_1.Message);

        _v.PacketReceiptAbsenceData = PacketReceiptAbsenceData;

        var NextSequenceRecvData = /*#__PURE__*/function (_pb_1$Message16) {
          (0, _inherits2["default"])(NextSequenceRecvData, _pb_1$Message16);

          var _super16 = _createSuper(NextSequenceRecvData);

          function NextSequenceRecvData(data) {
            var _this25;

            (0, _classCallCheck2["default"])(this, NextSequenceRecvData);
            _this25 = _super16.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this25.path = data.path;
              }

              if ("next_seq_recv" in data && data.next_seq_recv != undefined) {
                _this25.next_seq_recv = data.next_seq_recv;
              }
            }

            return _this25;
          }

          (0, _createClass2["default"])(NextSequenceRecvData, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "next_seq_recv",
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

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.next_seq_recv != null) {
                data.next_seq_recv = this.next_seq_recv;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.path !== undefined) writer.writeBytes(1, this.path);
              if (this.next_seq_recv !== undefined) writer.writeUint64(2, this.next_seq_recv);
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
              var message = new NextSequenceRecvData({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.next_seq_recv != null) {
                message.next_seq_recv = data.next_seq_recv;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new NextSequenceRecvData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readBytes();
                    break;

                  case 2:
                    message.next_seq_recv = reader.readUint64();
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
              return NextSequenceRecvData.deserialize(bytes);
            }
          }]);
          return NextSequenceRecvData;
        }(pb_1.Message);

        _v.NextSequenceRecvData = NextSequenceRecvData;
      })(v1 || (v1 = _solomachine.v1 || (_solomachine.v1 = {})));
    })(solomachine || (solomachine = _lightclients.solomachine || (_lightclients.solomachine = {})));
  })(lightclients || (lightclients = _ibc.lightclients || (_ibc.lightclients = {})));
})(ibc || (exports.ibc = ibc = {}));