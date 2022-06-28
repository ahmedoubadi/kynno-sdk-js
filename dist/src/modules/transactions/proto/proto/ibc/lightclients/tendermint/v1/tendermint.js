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

var dependency_1 = _interopRequireWildcard(require("./../../../../tendermint/types/validator"));

var dependency_2 = _interopRequireWildcard(require("./../../../../tendermint/types/types"));

var dependency_3 = _interopRequireWildcard(require("./../../../../proofs"));

var dependency_4 = _interopRequireWildcard(require("./../../../../google/protobuf/duration"));

var dependency_5 = _interopRequireWildcard(require("./../../../../google/protobuf/timestamp"));

var dependency_6 = _interopRequireWildcard(require("./../../../core/client/v1/client"));

var dependency_7 = _interopRequireWildcard(require("./../../../core/commitment/v1/commitment"));

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
    var tendermint;

    (function (_tendermint) {
      var v1;

      (function (_v) {
        var ClientState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(ClientState, _pb_1$Message);

          var _super = _createSuper(ClientState);

          function ClientState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, ClientState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [8, 9], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("chain_id" in data && data.chain_id != undefined) {
                _this.chain_id = data.chain_id;
              }

              if ("trust_level" in data && data.trust_level != undefined) {
                _this.trust_level = data.trust_level;
              }

              if ("trusting_period" in data && data.trusting_period != undefined) {
                _this.trusting_period = data.trusting_period;
              }

              if ("unbonding_period" in data && data.unbonding_period != undefined) {
                _this.unbonding_period = data.unbonding_period;
              }

              if ("max_clock_drift" in data && data.max_clock_drift != undefined) {
                _this.max_clock_drift = data.max_clock_drift;
              }

              if ("frozen_height" in data && data.frozen_height != undefined) {
                _this.frozen_height = data.frozen_height;
              }

              if ("latest_height" in data && data.latest_height != undefined) {
                _this.latest_height = data.latest_height;
              }

              if ("proof_specs" in data && data.proof_specs != undefined) {
                _this.proof_specs = data.proof_specs;
              }

              if ("upgrade_path" in data && data.upgrade_path != undefined) {
                _this.upgrade_path = data.upgrade_path;
              }

              if ("allow_update_after_expiry" in data && data.allow_update_after_expiry != undefined) {
                _this.allow_update_after_expiry = data.allow_update_after_expiry;
              }

              if ("allow_update_after_misbehaviour" in data && data.allow_update_after_misbehaviour != undefined) {
                _this.allow_update_after_misbehaviour = data.allow_update_after_misbehaviour;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(ClientState, [{
            key: "chain_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "trust_level",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Fraction, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "trusting_period",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "unbonding_period",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "max_clock_drift",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Duration, 5);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 5, value);
            }
          }, {
            key: "frozen_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 6);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 6, value);
            }
          }, {
            key: "latest_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 7);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 7, value);
            }
          }, {
            key: "proof_specs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ics23.ProofSpec, 8);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 8, value);
            }
          }, {
            key: "upgrade_path",
            get: function get() {
              return pb_1.Message.getField(this, 9);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 9, value);
            }
          }, {
            key: "allow_update_after_expiry",
            get: function get() {
              return pb_1.Message.getField(this, 10);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 10, value);
            }
          }, {
            key: "allow_update_after_misbehaviour",
            get: function get() {
              return pb_1.Message.getField(this, 11);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 11, value);
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

              if (this.chain_id != null) {
                data.chain_id = this.chain_id;
              }

              if (this.trust_level != null) {
                data.trust_level = this.trust_level.toObject();
              }

              if (this.trusting_period != null) {
                data.trusting_period = this.trusting_period.toObject();
              }

              if (this.unbonding_period != null) {
                data.unbonding_period = this.unbonding_period.toObject();
              }

              if (this.max_clock_drift != null) {
                data.max_clock_drift = this.max_clock_drift.toObject();
              }

              if (this.frozen_height != null) {
                data.frozen_height = this.frozen_height.toObject();
              }

              if (this.latest_height != null) {
                data.latest_height = this.latest_height.toObject();
              }

              if (this.proof_specs != null) {
                data.proof_specs = this.proof_specs.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.upgrade_path != null) {
                data.upgrade_path = this.upgrade_path;
              }

              if (this.allow_update_after_expiry != null) {
                data.allow_update_after_expiry = this.allow_update_after_expiry;
              }

              if (this.allow_update_after_misbehaviour != null) {
                data.allow_update_after_misbehaviour = this.allow_update_after_misbehaviour;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(1, this.chain_id);
              if (this.trust_level !== undefined) writer.writeMessage(2, this.trust_level, function () {
                return _this2.trust_level.serialize(writer);
              });
              if (this.trusting_period !== undefined) writer.writeMessage(3, this.trusting_period, function () {
                return _this2.trusting_period.serialize(writer);
              });
              if (this.unbonding_period !== undefined) writer.writeMessage(4, this.unbonding_period, function () {
                return _this2.unbonding_period.serialize(writer);
              });
              if (this.max_clock_drift !== undefined) writer.writeMessage(5, this.max_clock_drift, function () {
                return _this2.max_clock_drift.serialize(writer);
              });
              if (this.frozen_height !== undefined) writer.writeMessage(6, this.frozen_height, function () {
                return _this2.frozen_height.serialize(writer);
              });
              if (this.latest_height !== undefined) writer.writeMessage(7, this.latest_height, function () {
                return _this2.latest_height.serialize(writer);
              });
              if (this.proof_specs !== undefined) writer.writeRepeatedMessage(8, this.proof_specs, function (item) {
                return item.serialize(writer);
              });
              if (this.upgrade_path !== undefined) writer.writeRepeatedString(9, this.upgrade_path);
              if (this.allow_update_after_expiry !== undefined) writer.writeBool(10, this.allow_update_after_expiry);
              if (this.allow_update_after_misbehaviour !== undefined) writer.writeBool(11, this.allow_update_after_misbehaviour);
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

              if (data.chain_id != null) {
                message.chain_id = data.chain_id;
              }

              if (data.trust_level != null) {
                message.trust_level = Fraction.fromObject(data.trust_level);
              }

              if (data.trusting_period != null) {
                message.trusting_period = dependency_4.google.protobuf.Duration.fromObject(data.trusting_period);
              }

              if (data.unbonding_period != null) {
                message.unbonding_period = dependency_4.google.protobuf.Duration.fromObject(data.unbonding_period);
              }

              if (data.max_clock_drift != null) {
                message.max_clock_drift = dependency_4.google.protobuf.Duration.fromObject(data.max_clock_drift);
              }

              if (data.frozen_height != null) {
                message.frozen_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.frozen_height);
              }

              if (data.latest_height != null) {
                message.latest_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.latest_height);
              }

              if (data.proof_specs != null) {
                message.proof_specs = data.proof_specs.map(function (item) {
                  return dependency_3.ics23.ProofSpec.fromObject(item);
                });
              }

              if (data.upgrade_path != null) {
                message.upgrade_path = data.upgrade_path;
              }

              if (data.allow_update_after_expiry != null) {
                message.allow_update_after_expiry = data.allow_update_after_expiry;
              }

              if (data.allow_update_after_misbehaviour != null) {
                message.allow_update_after_misbehaviour = data.allow_update_after_misbehaviour;
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
                    message.chain_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.trust_level, function () {
                      return message.trust_level = Fraction.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.trusting_period, function () {
                      return message.trusting_period = dependency_4.google.protobuf.Duration.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.unbonding_period, function () {
                      return message.unbonding_period = dependency_4.google.protobuf.Duration.deserialize(reader);
                    });
                    break;

                  case 5:
                    reader.readMessage(message.max_clock_drift, function () {
                      return message.max_clock_drift = dependency_4.google.protobuf.Duration.deserialize(reader);
                    });
                    break;

                  case 6:
                    reader.readMessage(message.frozen_height, function () {
                      return message.frozen_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 7:
                    reader.readMessage(message.latest_height, function () {
                      return message.latest_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 8:
                    reader.readMessage(message.proof_specs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_3.ics23.ProofSpec.deserialize(reader), dependency_3.ics23.ProofSpec);
                    });
                    break;

                  case 9:
                    pb_1.Message.addToRepeatedField(message, 9, reader.readString());
                    break;

                  case 10:
                    message.allow_update_after_expiry = reader.readBool();
                    break;

                  case 11:
                    message.allow_update_after_misbehaviour = reader.readBool();
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
              if ("timestamp" in data && data.timestamp != undefined) {
                _this3.timestamp = data.timestamp;
              }

              if ("root" in data && data.root != undefined) {
                _this3.root = data.root;
              }

              if ("next_validators_hash" in data && data.next_validators_hash != undefined) {
                _this3.next_validators_hash = data.next_validators_hash;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ConsensusState, [{
            key: "timestamp",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "root",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_7.ibc.core.commitment.v1.MerkleRoot, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "next_validators_hash",
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

              if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
              }

              if (this.root != null) {
                data.root = this.root.toObject();
              }

              if (this.next_validators_hash != null) {
                data.next_validators_hash = this.next_validators_hash;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.timestamp !== undefined) writer.writeMessage(1, this.timestamp, function () {
                return _this4.timestamp.serialize(writer);
              });
              if (this.root !== undefined) writer.writeMessage(2, this.root, function () {
                return _this4.root.serialize(writer);
              });
              if (this.next_validators_hash !== undefined) writer.writeBytes(3, this.next_validators_hash);
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

              if (data.timestamp != null) {
                message.timestamp = dependency_5.google.protobuf.Timestamp.fromObject(data.timestamp);
              }

              if (data.root != null) {
                message.root = dependency_7.ibc.core.commitment.v1.MerkleRoot.fromObject(data.root);
              }

              if (data.next_validators_hash != null) {
                message.next_validators_hash = data.next_validators_hash;
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
                    reader.readMessage(message.timestamp, function () {
                      return message.timestamp = dependency_5.google.protobuf.Timestamp.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.root, function () {
                      return message.root = dependency_7.ibc.core.commitment.v1.MerkleRoot.deserialize(reader);
                    });
                    break;

                  case 3:
                    message.next_validators_hash = reader.readBytes();
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

        var Misbehaviour = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(Misbehaviour, _pb_1$Message3);

          var _super3 = _createSuper(Misbehaviour);

          function Misbehaviour(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, Misbehaviour);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this5.client_id = data.client_id;
              }

              if ("header_1" in data && data.header_1 != undefined) {
                _this5.header_1 = data.header_1;
              }

              if ("header_2" in data && data.header_2 != undefined) {
                _this5.header_2 = data.header_2;
              }
            }

            return _this5;
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
            key: "header_1",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Header, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "header_2",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Header, 3);
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

              if (this.header_1 != null) {
                data.header_1 = this.header_1.toObject();
              }

              if (this.header_2 != null) {
                data.header_2 = this.header_2.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this6 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.header_1 !== undefined) writer.writeMessage(2, this.header_1, function () {
                return _this6.header_1.serialize(writer);
              });
              if (this.header_2 !== undefined) writer.writeMessage(3, this.header_2, function () {
                return _this6.header_2.serialize(writer);
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

              if (data.header_1 != null) {
                message.header_1 = Header.fromObject(data.header_1);
              }

              if (data.header_2 != null) {
                message.header_2 = Header.fromObject(data.header_2);
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
                    reader.readMessage(message.header_1, function () {
                      return message.header_1 = Header.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.header_2, function () {
                      return message.header_2 = Header.deserialize(reader);
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

        var Header = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(Header, _pb_1$Message4);

          var _super4 = _createSuper(Header);

          function Header(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, Header);
            _this7 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("signed_header" in data && data.signed_header != undefined) {
                _this7.signed_header = data.signed_header;
              }

              if ("validator_set" in data && data.validator_set != undefined) {
                _this7.validator_set = data.validator_set;
              }

              if ("trusted_height" in data && data.trusted_height != undefined) {
                _this7.trusted_height = data.trusted_height;
              }

              if ("trusted_validators" in data && data.trusted_validators != undefined) {
                _this7.trusted_validators = data.trusted_validators;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(Header, [{
            key: "signed_header",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.SignedHeader, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "validator_set",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.tendermint.types.ValidatorSet, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "trusted_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "trusted_validators",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.tendermint.types.ValidatorSet, 4);
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

              if (this.signed_header != null) {
                data.signed_header = this.signed_header.toObject();
              }

              if (this.validator_set != null) {
                data.validator_set = this.validator_set.toObject();
              }

              if (this.trusted_height != null) {
                data.trusted_height = this.trusted_height.toObject();
              }

              if (this.trusted_validators != null) {
                data.trusted_validators = this.trusted_validators.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.signed_header !== undefined) writer.writeMessage(1, this.signed_header, function () {
                return _this8.signed_header.serialize(writer);
              });
              if (this.validator_set !== undefined) writer.writeMessage(2, this.validator_set, function () {
                return _this8.validator_set.serialize(writer);
              });
              if (this.trusted_height !== undefined) writer.writeMessage(3, this.trusted_height, function () {
                return _this8.trusted_height.serialize(writer);
              });
              if (this.trusted_validators !== undefined) writer.writeMessage(4, this.trusted_validators, function () {
                return _this8.trusted_validators.serialize(writer);
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
              var message = new Header({});

              if (data.signed_header != null) {
                message.signed_header = dependency_2.tendermint.types.SignedHeader.fromObject(data.signed_header);
              }

              if (data.validator_set != null) {
                message.validator_set = dependency_1.tendermint.types.ValidatorSet.fromObject(data.validator_set);
              }

              if (data.trusted_height != null) {
                message.trusted_height = dependency_6.ibc.core.client.v1.Height.fromObject(data.trusted_height);
              }

              if (data.trusted_validators != null) {
                message.trusted_validators = dependency_1.tendermint.types.ValidatorSet.fromObject(data.trusted_validators);
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
                    reader.readMessage(message.signed_header, function () {
                      return message.signed_header = dependency_2.tendermint.types.SignedHeader.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.validator_set, function () {
                      return message.validator_set = dependency_1.tendermint.types.ValidatorSet.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.trusted_height, function () {
                      return message.trusted_height = dependency_6.ibc.core.client.v1.Height.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.trusted_validators, function () {
                      return message.trusted_validators = dependency_1.tendermint.types.ValidatorSet.deserialize(reader);
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
              return Header.deserialize(bytes);
            }
          }]);
          return Header;
        }(pb_1.Message);

        _v.Header = Header;

        var Fraction = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(Fraction, _pb_1$Message5);

          var _super5 = _createSuper(Fraction);

          function Fraction(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, Fraction);
            _this9 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("numerator" in data && data.numerator != undefined) {
                _this9.numerator = data.numerator;
              }

              if ("denominator" in data && data.denominator != undefined) {
                _this9.denominator = data.denominator;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(Fraction, [{
            key: "numerator",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "denominator",
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

              if (this.numerator != null) {
                data.numerator = this.numerator;
              }

              if (this.denominator != null) {
                data.denominator = this.denominator;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.numerator !== undefined) writer.writeUint64(1, this.numerator);
              if (this.denominator !== undefined) writer.writeUint64(2, this.denominator);
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
              var message = new Fraction({});

              if (data.numerator != null) {
                message.numerator = data.numerator;
              }

              if (data.denominator != null) {
                message.denominator = data.denominator;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Fraction();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.numerator = reader.readUint64();
                    break;

                  case 2:
                    message.denominator = reader.readUint64();
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
              return Fraction.deserialize(bytes);
            }
          }]);
          return Fraction;
        }(pb_1.Message);

        _v.Fraction = Fraction;
      })(v1 || (v1 = _tendermint.v1 || (_tendermint.v1 = {})));
    })(tendermint || (tendermint = _lightclients.tendermint || (_lightclients.tendermint = {})));
  })(lightclients || (lightclients = _ibc.lightclients || (_ibc.lightclients = {})));
})(ibc || (exports.ibc = ibc = {}));