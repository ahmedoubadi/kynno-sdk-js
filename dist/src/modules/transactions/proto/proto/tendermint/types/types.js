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

var dependency_3 = _interopRequireWildcard(require("./../crypto/proof"));

var dependency_4 = _interopRequireWildcard(require("./../version/types"));

var dependency_5 = _interopRequireWildcard(require("./validator"));

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
    var BlockIDFlag;

    (function (BlockIDFlag) {
      BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
      BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
      BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
      BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    })(BlockIDFlag || (BlockIDFlag = {}));

    _types.BlockIDFlag = BlockIDFlag;
    var SignedMsgType;

    (function (SignedMsgType) {
      SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
      SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
      SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
      SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    })(SignedMsgType || (SignedMsgType = {}));

    _types.SignedMsgType = SignedMsgType;

    var PartSetHeader = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(PartSetHeader, _pb_1$Message);

      var _super = _createSuper(PartSetHeader);

      function PartSetHeader(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, PartSetHeader);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("total" in data && data.total != undefined) {
            _this.total = data.total;
          }

          if ("hash" in data && data.hash != undefined) {
            _this.hash = data.hash;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(PartSetHeader, [{
        key: "total",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "hash",
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

          if (this.total != null) {
            data.total = this.total;
          }

          if (this.hash != null) {
            data.hash = this.hash;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.total !== undefined) writer.writeUint32(1, this.total);
          if (this.hash !== undefined) writer.writeBytes(2, this.hash);
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
          var message = new PartSetHeader({});

          if (data.total != null) {
            message.total = data.total;
          }

          if (data.hash != null) {
            message.hash = data.hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new PartSetHeader();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.total = reader.readUint32();
                break;

              case 2:
                message.hash = reader.readBytes();
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
          return PartSetHeader.deserialize(bytes);
        }
      }]);
      return PartSetHeader;
    }(pb_1.Message);

    _types.PartSetHeader = PartSetHeader;

    var Part = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(Part, _pb_1$Message2);

      var _super2 = _createSuper(Part);

      function Part(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, Part);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("index" in data && data.index != undefined) {
            _this2.index = data.index;
          }

          if ("bytes" in data && data.bytes != undefined) {
            _this2.bytes = data.bytes;
          }

          if ("proof" in data && data.proof != undefined) {
            _this2.proof = data.proof;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(Part, [{
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "bytes",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "proof",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.crypto.Proof, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
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

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.bytes != null) {
            data.bytes = this.bytes;
          }

          if (this.proof != null) {
            data.proof = this.proof.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this3 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.index !== undefined) writer.writeUint32(1, this.index);
          if (this.bytes !== undefined) writer.writeBytes(2, this.bytes);
          if (this.proof !== undefined) writer.writeMessage(3, this.proof, function () {
            return _this3.proof.serialize(writer);
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
          var message = new Part({});

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.bytes != null) {
            message.bytes = data.bytes;
          }

          if (data.proof != null) {
            message.proof = dependency_3.tendermint.crypto.Proof.fromObject(data.proof);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Part();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.index = reader.readUint32();
                break;

              case 2:
                message.bytes = reader.readBytes();
                break;

              case 3:
                reader.readMessage(message.proof, function () {
                  return message.proof = dependency_3.tendermint.crypto.Proof.deserialize(reader);
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
          return Part.deserialize(bytes);
        }
      }]);
      return Part;
    }(pb_1.Message);

    _types.Part = Part;

    var BlockID = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(BlockID, _pb_1$Message3);

      var _super3 = _createSuper(BlockID);

      function BlockID(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, BlockID);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("hash" in data && data.hash != undefined) {
            _this4.hash = data.hash;
          }

          if ("part_set_header" in data && data.part_set_header != undefined) {
            _this4.part_set_header = data.part_set_header;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(BlockID, [{
        key: "hash",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "part_set_header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, PartSetHeader, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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

          if (this.hash != null) {
            data.hash = this.hash;
          }

          if (this.part_set_header != null) {
            data.part_set_header = this.part_set_header.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this5 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.hash !== undefined) writer.writeBytes(1, this.hash);
          if (this.part_set_header !== undefined) writer.writeMessage(2, this.part_set_header, function () {
            return _this5.part_set_header.serialize(writer);
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
          var message = new BlockID({});

          if (data.hash != null) {
            message.hash = data.hash;
          }

          if (data.part_set_header != null) {
            message.part_set_header = PartSetHeader.fromObject(data.part_set_header);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new BlockID();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.hash = reader.readBytes();
                break;

              case 2:
                reader.readMessage(message.part_set_header, function () {
                  return message.part_set_header = PartSetHeader.deserialize(reader);
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
          return BlockID.deserialize(bytes);
        }
      }]);
      return BlockID;
    }(pb_1.Message);

    _types.BlockID = BlockID;

    var Header = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(Header, _pb_1$Message4);

      var _super4 = _createSuper(Header);

      function Header(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, Header);
        _this6 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("version" in data && data.version != undefined) {
            _this6.version = data.version;
          }

          if ("chain_id" in data && data.chain_id != undefined) {
            _this6.chain_id = data.chain_id;
          }

          if ("height" in data && data.height != undefined) {
            _this6.height = data.height;
          }

          if ("time" in data && data.time != undefined) {
            _this6.time = data.time;
          }

          if ("last_block_id" in data && data.last_block_id != undefined) {
            _this6.last_block_id = data.last_block_id;
          }

          if ("last_commit_hash" in data && data.last_commit_hash != undefined) {
            _this6.last_commit_hash = data.last_commit_hash;
          }

          if ("data_hash" in data && data.data_hash != undefined) {
            _this6.data_hash = data.data_hash;
          }

          if ("validators_hash" in data && data.validators_hash != undefined) {
            _this6.validators_hash = data.validators_hash;
          }

          if ("next_validators_hash" in data && data.next_validators_hash != undefined) {
            _this6.next_validators_hash = data.next_validators_hash;
          }

          if ("consensus_hash" in data && data.consensus_hash != undefined) {
            _this6.consensus_hash = data.consensus_hash;
          }

          if ("app_hash" in data && data.app_hash != undefined) {
            _this6.app_hash = data.app_hash;
          }

          if ("last_results_hash" in data && data.last_results_hash != undefined) {
            _this6.last_results_hash = data.last_results_hash;
          }

          if ("evidence_hash" in data && data.evidence_hash != undefined) {
            _this6.evidence_hash = data.evidence_hash;
          }

          if ("proposer_address" in data && data.proposer_address != undefined) {
            _this6.proposer_address = data.proposer_address;
          }
        }

        return _this6;
      }

      (0, _createClass2["default"])(Header, [{
        key: "version",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.tendermint.version.Consensus, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "chain_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "time",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
        }
      }, {
        key: "last_block_id",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockID, 5);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 5, value);
        }
      }, {
        key: "last_commit_hash",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "data_hash",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "validators_hash",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "next_validators_hash",
        get: function get() {
          return pb_1.Message.getField(this, 9);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 9, value);
        }
      }, {
        key: "consensus_hash",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
      }, {
        key: "app_hash",
        get: function get() {
          return pb_1.Message.getField(this, 11);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 11, value);
        }
      }, {
        key: "last_results_hash",
        get: function get() {
          return pb_1.Message.getField(this, 12);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 12, value);
        }
      }, {
        key: "evidence_hash",
        get: function get() {
          return pb_1.Message.getField(this, 13);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 13, value);
        }
      }, {
        key: "proposer_address",
        get: function get() {
          return pb_1.Message.getField(this, 14);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 14, value);
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

          if (this.version != null) {
            data.version = this.version.toObject();
          }

          if (this.chain_id != null) {
            data.chain_id = this.chain_id;
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.time != null) {
            data.time = this.time.toObject();
          }

          if (this.last_block_id != null) {
            data.last_block_id = this.last_block_id.toObject();
          }

          if (this.last_commit_hash != null) {
            data.last_commit_hash = this.last_commit_hash;
          }

          if (this.data_hash != null) {
            data.data_hash = this.data_hash;
          }

          if (this.validators_hash != null) {
            data.validators_hash = this.validators_hash;
          }

          if (this.next_validators_hash != null) {
            data.next_validators_hash = this.next_validators_hash;
          }

          if (this.consensus_hash != null) {
            data.consensus_hash = this.consensus_hash;
          }

          if (this.app_hash != null) {
            data.app_hash = this.app_hash;
          }

          if (this.last_results_hash != null) {
            data.last_results_hash = this.last_results_hash;
          }

          if (this.evidence_hash != null) {
            data.evidence_hash = this.evidence_hash;
          }

          if (this.proposer_address != null) {
            data.proposer_address = this.proposer_address;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this7 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.version !== undefined) writer.writeMessage(1, this.version, function () {
            return _this7.version.serialize(writer);
          });
          if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(2, this.chain_id);
          if (this.height !== undefined) writer.writeInt64(3, this.height);
          if (this.time !== undefined) writer.writeMessage(4, this.time, function () {
            return _this7.time.serialize(writer);
          });
          if (this.last_block_id !== undefined) writer.writeMessage(5, this.last_block_id, function () {
            return _this7.last_block_id.serialize(writer);
          });
          if (this.last_commit_hash !== undefined) writer.writeBytes(6, this.last_commit_hash);
          if (this.data_hash !== undefined) writer.writeBytes(7, this.data_hash);
          if (this.validators_hash !== undefined) writer.writeBytes(8, this.validators_hash);
          if (this.next_validators_hash !== undefined) writer.writeBytes(9, this.next_validators_hash);
          if (this.consensus_hash !== undefined) writer.writeBytes(10, this.consensus_hash);
          if (this.app_hash !== undefined) writer.writeBytes(11, this.app_hash);
          if (this.last_results_hash !== undefined) writer.writeBytes(12, this.last_results_hash);
          if (this.evidence_hash !== undefined) writer.writeBytes(13, this.evidence_hash);
          if (this.proposer_address !== undefined) writer.writeBytes(14, this.proposer_address);
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

          if (data.version != null) {
            message.version = dependency_4.tendermint.version.Consensus.fromObject(data.version);
          }

          if (data.chain_id != null) {
            message.chain_id = data.chain_id;
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.time != null) {
            message.time = dependency_2.google.protobuf.Timestamp.fromObject(data.time);
          }

          if (data.last_block_id != null) {
            message.last_block_id = BlockID.fromObject(data.last_block_id);
          }

          if (data.last_commit_hash != null) {
            message.last_commit_hash = data.last_commit_hash;
          }

          if (data.data_hash != null) {
            message.data_hash = data.data_hash;
          }

          if (data.validators_hash != null) {
            message.validators_hash = data.validators_hash;
          }

          if (data.next_validators_hash != null) {
            message.next_validators_hash = data.next_validators_hash;
          }

          if (data.consensus_hash != null) {
            message.consensus_hash = data.consensus_hash;
          }

          if (data.app_hash != null) {
            message.app_hash = data.app_hash;
          }

          if (data.last_results_hash != null) {
            message.last_results_hash = data.last_results_hash;
          }

          if (data.evidence_hash != null) {
            message.evidence_hash = data.evidence_hash;
          }

          if (data.proposer_address != null) {
            message.proposer_address = data.proposer_address;
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
                reader.readMessage(message.version, function () {
                  return message.version = dependency_4.tendermint.version.Consensus.deserialize(reader);
                });
                break;

              case 2:
                message.chain_id = reader.readString();
                break;

              case 3:
                message.height = reader.readInt64();
                break;

              case 4:
                reader.readMessage(message.time, function () {
                  return message.time = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 5:
                reader.readMessage(message.last_block_id, function () {
                  return message.last_block_id = BlockID.deserialize(reader);
                });
                break;

              case 6:
                message.last_commit_hash = reader.readBytes();
                break;

              case 7:
                message.data_hash = reader.readBytes();
                break;

              case 8:
                message.validators_hash = reader.readBytes();
                break;

              case 9:
                message.next_validators_hash = reader.readBytes();
                break;

              case 10:
                message.consensus_hash = reader.readBytes();
                break;

              case 11:
                message.app_hash = reader.readBytes();
                break;

              case 12:
                message.last_results_hash = reader.readBytes();
                break;

              case 13:
                message.evidence_hash = reader.readBytes();
                break;

              case 14:
                message.proposer_address = reader.readBytes();
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

    _types.Header = Header;

    var Data = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(Data, _pb_1$Message5);

      var _super5 = _createSuper(Data);

      function Data(data) {
        var _this8;

        (0, _classCallCheck2["default"])(this, Data);
        _this8 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("txs" in data && data.txs != undefined) {
            _this8.txs = data.txs;
          }
        }

        return _this8;
      }

      (0, _createClass2["default"])(Data, [{
        key: "txs",
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

          if (this.txs != null) {
            data.txs = this.txs;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.txs !== undefined) writer.writeRepeatedBytes(1, this.txs);
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
          var message = new Data({});

          if (data.txs != null) {
            message.txs = data.txs;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Data();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
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
          return Data.deserialize(bytes);
        }
      }]);
      return Data;
    }(pb_1.Message);

    _types.Data = Data;

    var Vote = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(Vote, _pb_1$Message6);

      var _super6 = _createSuper(Vote);

      function Vote(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, Vote);
        _this9 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("type" in data && data.type != undefined) {
            _this9.type = data.type;
          }

          if ("height" in data && data.height != undefined) {
            _this9.height = data.height;
          }

          if ("round" in data && data.round != undefined) {
            _this9.round = data.round;
          }

          if ("block_id" in data && data.block_id != undefined) {
            _this9.block_id = data.block_id;
          }

          if ("timestamp" in data && data.timestamp != undefined) {
            _this9.timestamp = data.timestamp;
          }

          if ("validator_address" in data && data.validator_address != undefined) {
            _this9.validator_address = data.validator_address;
          }

          if ("validator_index" in data && data.validator_index != undefined) {
            _this9.validator_index = data.validator_index;
          }

          if ("signature" in data && data.signature != undefined) {
            _this9.signature = data.signature;
          }
        }

        return _this9;
      }

      (0, _createClass2["default"])(Vote, [{
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "round",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "block_id",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockID, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
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
        key: "validator_address",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "validator_index",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "signature",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
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

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.round != null) {
            data.round = this.round;
          }

          if (this.block_id != null) {
            data.block_id = this.block_id.toObject();
          }

          if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
          }

          if (this.validator_address != null) {
            data.validator_address = this.validator_address;
          }

          if (this.validator_index != null) {
            data.validator_index = this.validator_index;
          }

          if (this.signature != null) {
            data.signature = this.signature;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this10 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.type !== undefined) writer.writeEnum(1, this.type);
          if (this.height !== undefined) writer.writeInt64(2, this.height);
          if (this.round !== undefined) writer.writeInt32(3, this.round);
          if (this.block_id !== undefined) writer.writeMessage(4, this.block_id, function () {
            return _this10.block_id.serialize(writer);
          });
          if (this.timestamp !== undefined) writer.writeMessage(5, this.timestamp, function () {
            return _this10.timestamp.serialize(writer);
          });
          if (this.validator_address !== undefined) writer.writeBytes(6, this.validator_address);
          if (this.validator_index !== undefined) writer.writeInt32(7, this.validator_index);
          if (this.signature !== undefined) writer.writeBytes(8, this.signature);
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
          var message = new Vote({});

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.round != null) {
            message.round = data.round;
          }

          if (data.block_id != null) {
            message.block_id = BlockID.fromObject(data.block_id);
          }

          if (data.timestamp != null) {
            message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
          }

          if (data.validator_address != null) {
            message.validator_address = data.validator_address;
          }

          if (data.validator_index != null) {
            message.validator_index = data.validator_index;
          }

          if (data.signature != null) {
            message.signature = data.signature;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Vote();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.type = reader.readEnum();
                break;

              case 2:
                message.height = reader.readInt64();
                break;

              case 3:
                message.round = reader.readInt32();
                break;

              case 4:
                reader.readMessage(message.block_id, function () {
                  return message.block_id = BlockID.deserialize(reader);
                });
                break;

              case 5:
                reader.readMessage(message.timestamp, function () {
                  return message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 6:
                message.validator_address = reader.readBytes();
                break;

              case 7:
                message.validator_index = reader.readInt32();
                break;

              case 8:
                message.signature = reader.readBytes();
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
          return Vote.deserialize(bytes);
        }
      }]);
      return Vote;
    }(pb_1.Message);

    _types.Vote = Vote;

    var Commit = /*#__PURE__*/function (_pb_1$Message7) {
      (0, _inherits2["default"])(Commit, _pb_1$Message7);

      var _super7 = _createSuper(Commit);

      function Commit(data) {
        var _this11;

        (0, _classCallCheck2["default"])(this, Commit);
        _this11 = _super7.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [4], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("height" in data && data.height != undefined) {
            _this11.height = data.height;
          }

          if ("round" in data && data.round != undefined) {
            _this11.round = data.round;
          }

          if ("block_id" in data && data.block_id != undefined) {
            _this11.block_id = data.block_id;
          }

          if ("signatures" in data && data.signatures != undefined) {
            _this11.signatures = data.signatures;
          }
        }

        return _this11;
      }

      (0, _createClass2["default"])(Commit, [{
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "round",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "block_id",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockID, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "signatures",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, CommitSig, 4);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 4, value);
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

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.round != null) {
            data.round = this.round;
          }

          if (this.block_id != null) {
            data.block_id = this.block_id.toObject();
          }

          if (this.signatures != null) {
            data.signatures = this.signatures.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this12 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.height !== undefined) writer.writeInt64(1, this.height);
          if (this.round !== undefined) writer.writeInt32(2, this.round);
          if (this.block_id !== undefined) writer.writeMessage(3, this.block_id, function () {
            return _this12.block_id.serialize(writer);
          });
          if (this.signatures !== undefined) writer.writeRepeatedMessage(4, this.signatures, function (item) {
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
          var message = new Commit({});

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.round != null) {
            message.round = data.round;
          }

          if (data.block_id != null) {
            message.block_id = BlockID.fromObject(data.block_id);
          }

          if (data.signatures != null) {
            message.signatures = data.signatures.map(function (item) {
              return CommitSig.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Commit();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.height = reader.readInt64();
                break;

              case 2:
                message.round = reader.readInt32();
                break;

              case 3:
                reader.readMessage(message.block_id, function () {
                  return message.block_id = BlockID.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.signatures, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, CommitSig.deserialize(reader), CommitSig);
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
          return Commit.deserialize(bytes);
        }
      }]);
      return Commit;
    }(pb_1.Message);

    _types.Commit = Commit;

    var CommitSig = /*#__PURE__*/function (_pb_1$Message8) {
      (0, _inherits2["default"])(CommitSig, _pb_1$Message8);

      var _super8 = _createSuper(CommitSig);

      function CommitSig(data) {
        var _this13;

        (0, _classCallCheck2["default"])(this, CommitSig);
        _this13 = _super8.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("block_id_flag" in data && data.block_id_flag != undefined) {
            _this13.block_id_flag = data.block_id_flag;
          }

          if ("validator_address" in data && data.validator_address != undefined) {
            _this13.validator_address = data.validator_address;
          }

          if ("timestamp" in data && data.timestamp != undefined) {
            _this13.timestamp = data.timestamp;
          }

          if ("signature" in data && data.signature != undefined) {
            _this13.signature = data.signature;
          }
        }

        return _this13;
      }

      (0, _createClass2["default"])(CommitSig, [{
        key: "block_id_flag",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "validator_address",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "timestamp",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "signature",
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

          if (this.block_id_flag != null) {
            data.block_id_flag = this.block_id_flag;
          }

          if (this.validator_address != null) {
            data.validator_address = this.validator_address;
          }

          if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
          }

          if (this.signature != null) {
            data.signature = this.signature;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this14 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.block_id_flag !== undefined) writer.writeEnum(1, this.block_id_flag);
          if (this.validator_address !== undefined) writer.writeBytes(2, this.validator_address);
          if (this.timestamp !== undefined) writer.writeMessage(3, this.timestamp, function () {
            return _this14.timestamp.serialize(writer);
          });
          if (this.signature !== undefined) writer.writeBytes(4, this.signature);
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
          var message = new CommitSig({});

          if (data.block_id_flag != null) {
            message.block_id_flag = data.block_id_flag;
          }

          if (data.validator_address != null) {
            message.validator_address = data.validator_address;
          }

          if (data.timestamp != null) {
            message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
          }

          if (data.signature != null) {
            message.signature = data.signature;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new CommitSig();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.block_id_flag = reader.readEnum();
                break;

              case 2:
                message.validator_address = reader.readBytes();
                break;

              case 3:
                reader.readMessage(message.timestamp, function () {
                  return message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 4:
                message.signature = reader.readBytes();
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
          return CommitSig.deserialize(bytes);
        }
      }]);
      return CommitSig;
    }(pb_1.Message);

    _types.CommitSig = CommitSig;

    var Proposal = /*#__PURE__*/function (_pb_1$Message9) {
      (0, _inherits2["default"])(Proposal, _pb_1$Message9);

      var _super9 = _createSuper(Proposal);

      function Proposal(data) {
        var _this15;

        (0, _classCallCheck2["default"])(this, Proposal);
        _this15 = _super9.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("type" in data && data.type != undefined) {
            _this15.type = data.type;
          }

          if ("height" in data && data.height != undefined) {
            _this15.height = data.height;
          }

          if ("round" in data && data.round != undefined) {
            _this15.round = data.round;
          }

          if ("pol_round" in data && data.pol_round != undefined) {
            _this15.pol_round = data.pol_round;
          }

          if ("block_id" in data && data.block_id != undefined) {
            _this15.block_id = data.block_id;
          }

          if ("timestamp" in data && data.timestamp != undefined) {
            _this15.timestamp = data.timestamp;
          }

          if ("signature" in data && data.signature != undefined) {
            _this15.signature = data.signature;
          }
        }

        return _this15;
      }

      (0, _createClass2["default"])(Proposal, [{
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "round",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "pol_round",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "block_id",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockID, 5);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 5, value);
        }
      }, {
        key: "timestamp",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 6);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 6, value);
        }
      }, {
        key: "signature",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
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

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.round != null) {
            data.round = this.round;
          }

          if (this.pol_round != null) {
            data.pol_round = this.pol_round;
          }

          if (this.block_id != null) {
            data.block_id = this.block_id.toObject();
          }

          if (this.timestamp != null) {
            data.timestamp = this.timestamp.toObject();
          }

          if (this.signature != null) {
            data.signature = this.signature;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this16 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.type !== undefined) writer.writeEnum(1, this.type);
          if (this.height !== undefined) writer.writeInt64(2, this.height);
          if (this.round !== undefined) writer.writeInt32(3, this.round);
          if (this.pol_round !== undefined) writer.writeInt32(4, this.pol_round);
          if (this.block_id !== undefined) writer.writeMessage(5, this.block_id, function () {
            return _this16.block_id.serialize(writer);
          });
          if (this.timestamp !== undefined) writer.writeMessage(6, this.timestamp, function () {
            return _this16.timestamp.serialize(writer);
          });
          if (this.signature !== undefined) writer.writeBytes(7, this.signature);
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
          var message = new Proposal({});

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.round != null) {
            message.round = data.round;
          }

          if (data.pol_round != null) {
            message.pol_round = data.pol_round;
          }

          if (data.block_id != null) {
            message.block_id = BlockID.fromObject(data.block_id);
          }

          if (data.timestamp != null) {
            message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
          }

          if (data.signature != null) {
            message.signature = data.signature;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Proposal();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.type = reader.readEnum();
                break;

              case 2:
                message.height = reader.readInt64();
                break;

              case 3:
                message.round = reader.readInt32();
                break;

              case 4:
                message.pol_round = reader.readInt32();
                break;

              case 5:
                reader.readMessage(message.block_id, function () {
                  return message.block_id = BlockID.deserialize(reader);
                });
                break;

              case 6:
                reader.readMessage(message.timestamp, function () {
                  return message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 7:
                message.signature = reader.readBytes();
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
          return Proposal.deserialize(bytes);
        }
      }]);
      return Proposal;
    }(pb_1.Message);

    _types.Proposal = Proposal;

    var SignedHeader = /*#__PURE__*/function (_pb_1$Message10) {
      (0, _inherits2["default"])(SignedHeader, _pb_1$Message10);

      var _super10 = _createSuper(SignedHeader);

      function SignedHeader(data) {
        var _this17;

        (0, _classCallCheck2["default"])(this, SignedHeader);
        _this17 = _super10.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("header" in data && data.header != undefined) {
            _this17.header = data.header;
          }

          if ("commit" in data && data.commit != undefined) {
            _this17.commit = data.commit;
          }
        }

        return _this17;
      }

      (0, _createClass2["default"])(SignedHeader, [{
        key: "header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Header, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "commit",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Commit, 2);
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

          if (this.header != null) {
            data.header = this.header.toObject();
          }

          if (this.commit != null) {
            data.commit = this.commit.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this18 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.header !== undefined) writer.writeMessage(1, this.header, function () {
            return _this18.header.serialize(writer);
          });
          if (this.commit !== undefined) writer.writeMessage(2, this.commit, function () {
            return _this18.commit.serialize(writer);
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
          var message = new SignedHeader({});

          if (data.header != null) {
            message.header = Header.fromObject(data.header);
          }

          if (data.commit != null) {
            message.commit = Commit.fromObject(data.commit);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new SignedHeader();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.header, function () {
                  return message.header = Header.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.commit, function () {
                  return message.commit = Commit.deserialize(reader);
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
          return SignedHeader.deserialize(bytes);
        }
      }]);
      return SignedHeader;
    }(pb_1.Message);

    _types.SignedHeader = SignedHeader;

    var LightBlock = /*#__PURE__*/function (_pb_1$Message11) {
      (0, _inherits2["default"])(LightBlock, _pb_1$Message11);

      var _super11 = _createSuper(LightBlock);

      function LightBlock(data) {
        var _this19;

        (0, _classCallCheck2["default"])(this, LightBlock);
        _this19 = _super11.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("signed_header" in data && data.signed_header != undefined) {
            _this19.signed_header = data.signed_header;
          }

          if ("validator_set" in data && data.validator_set != undefined) {
            _this19.validator_set = data.validator_set;
          }
        }

        return _this19;
      }

      (0, _createClass2["default"])(LightBlock, [{
        key: "signed_header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, SignedHeader, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "validator_set",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_5.tendermint.types.ValidatorSet, 2);
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

          if (this.signed_header != null) {
            data.signed_header = this.signed_header.toObject();
          }

          if (this.validator_set != null) {
            data.validator_set = this.validator_set.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this20 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.signed_header !== undefined) writer.writeMessage(1, this.signed_header, function () {
            return _this20.signed_header.serialize(writer);
          });
          if (this.validator_set !== undefined) writer.writeMessage(2, this.validator_set, function () {
            return _this20.validator_set.serialize(writer);
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
          var message = new LightBlock({});

          if (data.signed_header != null) {
            message.signed_header = SignedHeader.fromObject(data.signed_header);
          }

          if (data.validator_set != null) {
            message.validator_set = dependency_5.tendermint.types.ValidatorSet.fromObject(data.validator_set);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new LightBlock();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.signed_header, function () {
                  return message.signed_header = SignedHeader.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.validator_set, function () {
                  return message.validator_set = dependency_5.tendermint.types.ValidatorSet.deserialize(reader);
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
          return LightBlock.deserialize(bytes);
        }
      }]);
      return LightBlock;
    }(pb_1.Message);

    _types.LightBlock = LightBlock;

    var BlockMeta = /*#__PURE__*/function (_pb_1$Message12) {
      (0, _inherits2["default"])(BlockMeta, _pb_1$Message12);

      var _super12 = _createSuper(BlockMeta);

      function BlockMeta(data) {
        var _this21;

        (0, _classCallCheck2["default"])(this, BlockMeta);
        _this21 = _super12.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("block_id" in data && data.block_id != undefined) {
            _this21.block_id = data.block_id;
          }

          if ("block_size" in data && data.block_size != undefined) {
            _this21.block_size = data.block_size;
          }

          if ("header" in data && data.header != undefined) {
            _this21.header = data.header;
          }

          if ("num_txs" in data && data.num_txs != undefined) {
            _this21.num_txs = data.num_txs;
          }
        }

        return _this21;
      }

      (0, _createClass2["default"])(BlockMeta, [{
        key: "block_id",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockID, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "block_size",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Header, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "num_txs",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject10) {
          function toObject() {
            return _toObject10.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject10.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.block_id != null) {
            data.block_id = this.block_id.toObject();
          }

          if (this.block_size != null) {
            data.block_size = this.block_size;
          }

          if (this.header != null) {
            data.header = this.header.toObject();
          }

          if (this.num_txs != null) {
            data.num_txs = this.num_txs;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this22 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.block_id !== undefined) writer.writeMessage(1, this.block_id, function () {
            return _this22.block_id.serialize(writer);
          });
          if (this.block_size !== undefined) writer.writeInt64(2, this.block_size);
          if (this.header !== undefined) writer.writeMessage(3, this.header, function () {
            return _this22.header.serialize(writer);
          });
          if (this.num_txs !== undefined) writer.writeInt64(4, this.num_txs);
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
          var message = new BlockMeta({});

          if (data.block_id != null) {
            message.block_id = BlockID.fromObject(data.block_id);
          }

          if (data.block_size != null) {
            message.block_size = data.block_size;
          }

          if (data.header != null) {
            message.header = Header.fromObject(data.header);
          }

          if (data.num_txs != null) {
            message.num_txs = data.num_txs;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new BlockMeta();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.block_id, function () {
                  return message.block_id = BlockID.deserialize(reader);
                });
                break;

              case 2:
                message.block_size = reader.readInt64();
                break;

              case 3:
                reader.readMessage(message.header, function () {
                  return message.header = Header.deserialize(reader);
                });
                break;

              case 4:
                message.num_txs = reader.readInt64();
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
          return BlockMeta.deserialize(bytes);
        }
      }]);
      return BlockMeta;
    }(pb_1.Message);

    _types.BlockMeta = BlockMeta;

    var TxProof = /*#__PURE__*/function (_pb_1$Message13) {
      (0, _inherits2["default"])(TxProof, _pb_1$Message13);

      var _super13 = _createSuper(TxProof);

      function TxProof(data) {
        var _this23;

        (0, _classCallCheck2["default"])(this, TxProof);
        _this23 = _super13.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("root_hash" in data && data.root_hash != undefined) {
            _this23.root_hash = data.root_hash;
          }

          if ("data" in data && data.data != undefined) {
            _this23.data = data.data;
          }

          if ("proof" in data && data.proof != undefined) {
            _this23.proof = data.proof;
          }
        }

        return _this23;
      }

      (0, _createClass2["default"])(TxProof, [{
        key: "root_hash",
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
        key: "proof",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.crypto.Proof, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject11) {
          function toObject() {
            return _toObject11.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject11.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.root_hash != null) {
            data.root_hash = this.root_hash;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.proof != null) {
            data.proof = this.proof.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this24 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.root_hash !== undefined) writer.writeBytes(1, this.root_hash);
          if (this.data !== undefined) writer.writeBytes(2, this.data);
          if (this.proof !== undefined) writer.writeMessage(3, this.proof, function () {
            return _this24.proof.serialize(writer);
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
          var message = new TxProof({});

          if (data.root_hash != null) {
            message.root_hash = data.root_hash;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.proof != null) {
            message.proof = dependency_3.tendermint.crypto.Proof.fromObject(data.proof);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new TxProof();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.root_hash = reader.readBytes();
                break;

              case 2:
                message.data = reader.readBytes();
                break;

              case 3:
                reader.readMessage(message.proof, function () {
                  return message.proof = dependency_3.tendermint.crypto.Proof.deserialize(reader);
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
          return TxProof.deserialize(bytes);
        }
      }]);
      return TxProof;
    }(pb_1.Message);

    _types.TxProof = TxProof;
  })(types || (types = _tendermint.types || (_tendermint.types = {})));
})(tendermint || (exports.tendermint = tendermint = {}));