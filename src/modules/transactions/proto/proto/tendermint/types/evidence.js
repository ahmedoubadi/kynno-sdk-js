"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tendermint = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../google/protobuf/timestamp"));

var dependency_3 = _interopRequireWildcard(require("./types"));

var dependency_4 = _interopRequireWildcard(require("./validator"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var tendermint;
exports.tendermint = tendermint;

(function (_tendermint) {
  var types;

  (function (_types) {
    var Evidence = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Evidence, _pb_1$Message);

      var _super = _createSuper(Evidence);

      function Evidence(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Evidence);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("duplicate_vote_evidence" in data && data.duplicate_vote_evidence != undefined) {
            _this.duplicate_vote_evidence = data.duplicate_vote_evidence;
          }

          if ("light_client_attack_evidence" in data && data.light_client_attack_evidence != undefined) {
            _this.light_client_attack_evidence = data.light_client_attack_evidence;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Evidence, [{
        key: "duplicate_vote_evidence",
        get: function get() {
          return pb_1.Message.getWrapperField(this, DuplicateVoteEvidence, 1);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
        }
      }, {
        key: "light_client_attack_evidence",
        get: function get() {
          return pb_1.Message.getWrapperField(this, LightClientAttackEvidence, 2);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
        }
      }, {
        key: "sum",
        get: function get() {
          var cases = {
            0: "none",
            1: "duplicate_vote_evidence",
            2: "light_client_attack_evidence"
          };
          return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
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

          if (this.duplicate_vote_evidence != null) {
            data.duplicate_vote_evidence = this.duplicate_vote_evidence.toObject();
          }

          if (this.light_client_attack_evidence != null) {
            data.light_client_attack_evidence = this.light_client_attack_evidence.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this2 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.duplicate_vote_evidence !== undefined) writer.writeMessage(1, this.duplicate_vote_evidence, function () {
            return _this2.duplicate_vote_evidence.serialize(writer);
          });
          if (this.light_client_attack_evidence !== undefined) writer.writeMessage(2, this.light_client_attack_evidence, function () {
            return _this2.light_client_attack_evidence.serialize(writer);
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
          var message = new Evidence({});

          if (data.duplicate_vote_evidence != null) {
            message.duplicate_vote_evidence = DuplicateVoteEvidence.fromObject(data.duplicate_vote_evidence);
          }

          if (data.light_client_attack_evidence != null) {
            message.light_client_attack_evidence = LightClientAttackEvidence.fromObject(data.light_client_attack_evidence);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Evidence();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.duplicate_vote_evidence, function () {
                  return message.duplicate_vote_evidence = DuplicateVoteEvidence.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.light_client_attack_evidence, function () {
                  return message.light_client_attack_evidence = LightClientAttackEvidence.deserialize(reader);
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
          return Evidence.deserialize(bytes);
        }
      }]);
      return Evidence;
    }(pb_1.Message);

    _types.Evidence = Evidence;

    var DuplicateVoteEvidence = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(DuplicateVoteEvidence, _pb_1$Message2);

      var _super2 = _createSuper(DuplicateVoteEvidence);

      function DuplicateVoteEvidence(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, DuplicateVoteEvidence);
        _this3 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("vote_a" in data && data.vote_a != undefined) {
            _this3.vote_a = data.vote_a;
          }

          if ("vote_b" in data && data.vote_b != undefined) {
            _this3.vote_b = data.vote_b;
          }

          if ("total_voting_power" in data && data.total_voting_power != undefined) {
            _this3.total_voting_power = data.total_voting_power;
          }

          if ("validator_power" in data && data.validator_power != undefined) {
            _this3.validator_power = data.validator_power;
          }

          if ("timestamp" in data && data.timestamp != undefined) {
            _this3.timestamp = data.timestamp;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(DuplicateVoteEvidence, [{
        key: "vote_a",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.Vote, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "vote_b",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.Vote, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "total_voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "validator_power",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "timestamp",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 5);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 5, value);
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

          if (this.vote_a != null) {
            data.vote_a = this.vote_a.toObject();
          }

          if (this.vote_b != null) {
            data.vote_b = this.vote_b.toObject();
          }

          if (this.total_voting_power != null) {
            data.total_voting_power = this.total_voting_power;
          }

          if (this.validator_power != null) {
            data.validator_power = this.validator_power;
          }

          if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this4 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.vote_a !== undefined) writer.writeMessage(1, this.vote_a, function () {
            return _this4.vote_a.serialize(writer);
          });
          if (this.vote_b !== undefined) writer.writeMessage(2, this.vote_b, function () {
            return _this4.vote_b.serialize(writer);
          });
          if (this.total_voting_power !== undefined) writer.writeInt64(3, this.total_voting_power);
          if (this.validator_power !== undefined) writer.writeInt64(4, this.validator_power);
          if (this.timestamp !== undefined) writer.writeMessage(5, this.timestamp, function () {
            return _this4.timestamp.serialize(writer);
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
          var message = new DuplicateVoteEvidence({});

          if (data.vote_a != null) {
            message.vote_a = dependency_3.tendermint.types.Vote.fromObject(data.vote_a);
          }

          if (data.vote_b != null) {
            message.vote_b = dependency_3.tendermint.types.Vote.fromObject(data.vote_b);
          }

          if (data.total_voting_power != null) {
            message.total_voting_power = data.total_voting_power;
          }

          if (data.validator_power != null) {
            message.validator_power = data.validator_power;
          }

          if (data.timestamp != null) {
            message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new DuplicateVoteEvidence();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.vote_a, function () {
                  return message.vote_a = dependency_3.tendermint.types.Vote.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.vote_b, function () {
                  return message.vote_b = dependency_3.tendermint.types.Vote.deserialize(reader);
                });
                break;

              case 3:
                message.total_voting_power = reader.readInt64();
                break;

              case 4:
                message.validator_power = reader.readInt64();
                break;

              case 5:
                reader.readMessage(message.timestamp, function () {
                  return message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
          return DuplicateVoteEvidence.deserialize(bytes);
        }
      }]);
      return DuplicateVoteEvidence;
    }(pb_1.Message);

    _types.DuplicateVoteEvidence = DuplicateVoteEvidence;

    var LightClientAttackEvidence = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(LightClientAttackEvidence, _pb_1$Message3);

      var _super3 = _createSuper(LightClientAttackEvidence);

      function LightClientAttackEvidence(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, LightClientAttackEvidence);
        _this5 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [3], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("conflicting_block" in data && data.conflicting_block != undefined) {
            _this5.conflicting_block = data.conflicting_block;
          }

          if ("common_height" in data && data.common_height != undefined) {
            _this5.common_height = data.common_height;
          }

          if ("byzantine_validators" in data && data.byzantine_validators != undefined) {
            _this5.byzantine_validators = data.byzantine_validators;
          }

          if ("total_voting_power" in data && data.total_voting_power != undefined) {
            _this5.total_voting_power = data.total_voting_power;
          }

          if ("timestamp" in data && data.timestamp != undefined) {
            _this5.timestamp = data.timestamp;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(LightClientAttackEvidence, [{
        key: "conflicting_block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.LightBlock, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "common_height",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "byzantine_validators",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, dependency_4.tendermint.types.Validator, 3);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
      }, {
        key: "total_voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "timestamp",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 5);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 5, value);
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

          if (this.conflicting_block != null) {
            data.conflicting_block = this.conflicting_block.toObject();
          }

          if (this.common_height != null) {
            data.common_height = this.common_height;
          }

          if (this.byzantine_validators != null) {
            data.byzantine_validators = this.byzantine_validators.map(function (item) {
              return item.toObject();
            });
          }

          if (this.total_voting_power != null) {
            data.total_voting_power = this.total_voting_power;
          }

          if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this6 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.conflicting_block !== undefined) writer.writeMessage(1, this.conflicting_block, function () {
            return _this6.conflicting_block.serialize(writer);
          });
          if (this.common_height !== undefined) writer.writeInt64(2, this.common_height);
          if (this.byzantine_validators !== undefined) writer.writeRepeatedMessage(3, this.byzantine_validators, function (item) {
            return item.serialize(writer);
          });
          if (this.total_voting_power !== undefined) writer.writeInt64(4, this.total_voting_power);
          if (this.timestamp !== undefined) writer.writeMessage(5, this.timestamp, function () {
            return _this6.timestamp.serialize(writer);
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
          var message = new LightClientAttackEvidence({});

          if (data.conflicting_block != null) {
            message.conflicting_block = dependency_3.tendermint.types.LightBlock.fromObject(data.conflicting_block);
          }

          if (data.common_height != null) {
            message.common_height = data.common_height;
          }

          if (data.byzantine_validators != null) {
            message.byzantine_validators = data.byzantine_validators.map(function (item) {
              return dependency_4.tendermint.types.Validator.fromObject(item);
            });
          }

          if (data.total_voting_power != null) {
            message.total_voting_power = data.total_voting_power;
          }

          if (data.timestamp != null) {
            message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new LightClientAttackEvidence();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.conflicting_block, function () {
                  return message.conflicting_block = dependency_3.tendermint.types.LightBlock.deserialize(reader);
                });
                break;

              case 2:
                message.common_height = reader.readInt64();
                break;

              case 3:
                reader.readMessage(message.byzantine_validators, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_4.tendermint.types.Validator.deserialize(reader), dependency_4.tendermint.types.Validator);
                });
                break;

              case 4:
                message.total_voting_power = reader.readInt64();
                break;

              case 5:
                reader.readMessage(message.timestamp, function () {
                  return message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
          return LightClientAttackEvidence.deserialize(bytes);
        }
      }]);
      return LightClientAttackEvidence;
    }(pb_1.Message);

    _types.LightClientAttackEvidence = LightClientAttackEvidence;

    var EvidenceList = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(EvidenceList, _pb_1$Message4);

      var _super4 = _createSuper(EvidenceList);

      function EvidenceList(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, EvidenceList);
        _this7 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("evidence" in data && data.evidence != undefined) {
            _this7.evidence = data.evidence;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(EvidenceList, [{
        key: "evidence",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Evidence, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

          if (this.evidence != null) {
            data.evidence = this.evidence.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.evidence !== undefined) writer.writeRepeatedMessage(1, this.evidence, function (item) {
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
          var message = new EvidenceList({});

          if (data.evidence != null) {
            message.evidence = data.evidence.map(function (item) {
              return Evidence.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EvidenceList();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.evidence, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, Evidence.deserialize(reader), Evidence);
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
          return EvidenceList.deserialize(bytes);
        }
      }]);
      return EvidenceList;
    }(pb_1.Message);

    _types.EvidenceList = EvidenceList;
  })(types || (types = _tendermint.types || (_tendermint.types = {})));
})(tendermint || (exports.tendermint = tendermint = {}));