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

var dependency_2 = _interopRequireWildcard(require("./../../google/protobuf/duration"));

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
    var ConsensusParams = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(ConsensusParams, _pb_1$Message);

      var _super = _createSuper(ConsensusParams);

      function ConsensusParams(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, ConsensusParams);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("block" in data && data.block != undefined) {
            _this.block = data.block;
          }

          if ("evidence" in data && data.evidence != undefined) {
            _this.evidence = data.evidence;
          }

          if ("validator" in data && data.validator != undefined) {
            _this.validator = data.validator;
          }

          if ("version" in data && data.version != undefined) {
            _this.version = data.version;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(ConsensusParams, [{
        key: "block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockParams, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "evidence",
        get: function get() {
          return pb_1.Message.getWrapperField(this, EvidenceParams, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "validator",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ValidatorParams, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "version",
        get: function get() {
          return pb_1.Message.getWrapperField(this, VersionParams, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
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

          if (this.block != null) {
            data.block = this.block.toObject();
          }

          if (this.evidence != null) {
            data.evidence = this.evidence.toObject();
          }

          if (this.validator != null) {
            data.validator = this.validator.toObject();
          }

          if (this.version != null) {
            data.version = this.version.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this2 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.block !== undefined) writer.writeMessage(1, this.block, function () {
            return _this2.block.serialize(writer);
          });
          if (this.evidence !== undefined) writer.writeMessage(2, this.evidence, function () {
            return _this2.evidence.serialize(writer);
          });
          if (this.validator !== undefined) writer.writeMessage(3, this.validator, function () {
            return _this2.validator.serialize(writer);
          });
          if (this.version !== undefined) writer.writeMessage(4, this.version, function () {
            return _this2.version.serialize(writer);
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
          var message = new ConsensusParams({});

          if (data.block != null) {
            message.block = BlockParams.fromObject(data.block);
          }

          if (data.evidence != null) {
            message.evidence = EvidenceParams.fromObject(data.evidence);
          }

          if (data.validator != null) {
            message.validator = ValidatorParams.fromObject(data.validator);
          }

          if (data.version != null) {
            message.version = VersionParams.fromObject(data.version);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ConsensusParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.block, function () {
                  return message.block = BlockParams.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.evidence, function () {
                  return message.evidence = EvidenceParams.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.validator, function () {
                  return message.validator = ValidatorParams.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.version, function () {
                  return message.version = VersionParams.deserialize(reader);
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
          return ConsensusParams.deserialize(bytes);
        }
      }]);
      return ConsensusParams;
    }(pb_1.Message);

    _types.ConsensusParams = ConsensusParams;

    var BlockParams = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(BlockParams, _pb_1$Message2);

      var _super2 = _createSuper(BlockParams);

      function BlockParams(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, BlockParams);
        _this3 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("max_bytes" in data && data.max_bytes != undefined) {
            _this3.max_bytes = data.max_bytes;
          }

          if ("max_gas" in data && data.max_gas != undefined) {
            _this3.max_gas = data.max_gas;
          }

          if ("time_iota_ms" in data && data.time_iota_ms != undefined) {
            _this3.time_iota_ms = data.time_iota_ms;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(BlockParams, [{
        key: "max_bytes",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "max_gas",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "time_iota_ms",
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

          if (this.max_bytes != null) {
            data.max_bytes = this.max_bytes;
          }

          if (this.max_gas != null) {
            data.max_gas = this.max_gas;
          }

          if (this.time_iota_ms != null) {
            data.time_iota_ms = this.time_iota_ms;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.max_bytes !== undefined) writer.writeInt64(1, this.max_bytes);
          if (this.max_gas !== undefined) writer.writeInt64(2, this.max_gas);
          if (this.time_iota_ms !== undefined) writer.writeInt64(3, this.time_iota_ms);
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
          var message = new BlockParams({});

          if (data.max_bytes != null) {
            message.max_bytes = data.max_bytes;
          }

          if (data.max_gas != null) {
            message.max_gas = data.max_gas;
          }

          if (data.time_iota_ms != null) {
            message.time_iota_ms = data.time_iota_ms;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new BlockParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.max_bytes = reader.readInt64();
                break;

              case 2:
                message.max_gas = reader.readInt64();
                break;

              case 3:
                message.time_iota_ms = reader.readInt64();
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
          return BlockParams.deserialize(bytes);
        }
      }]);
      return BlockParams;
    }(pb_1.Message);

    _types.BlockParams = BlockParams;

    var EvidenceParams = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(EvidenceParams, _pb_1$Message3);

      var _super3 = _createSuper(EvidenceParams);

      function EvidenceParams(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, EvidenceParams);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("max_age_num_blocks" in data && data.max_age_num_blocks != undefined) {
            _this4.max_age_num_blocks = data.max_age_num_blocks;
          }

          if ("max_age_duration" in data && data.max_age_duration != undefined) {
            _this4.max_age_duration = data.max_age_duration;
          }

          if ("max_bytes" in data && data.max_bytes != undefined) {
            _this4.max_bytes = data.max_bytes;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(EvidenceParams, [{
        key: "max_age_num_blocks",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "max_age_duration",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "max_bytes",
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

          if (this.max_age_num_blocks != null) {
            data.max_age_num_blocks = this.max_age_num_blocks;
          }

          if (this.max_age_duration != null) {
            data.max_age_duration = this.max_age_duration.toObject();
          }

          if (this.max_bytes != null) {
            data.max_bytes = this.max_bytes;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this5 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.max_age_num_blocks !== undefined) writer.writeInt64(1, this.max_age_num_blocks);
          if (this.max_age_duration !== undefined) writer.writeMessage(2, this.max_age_duration, function () {
            return _this5.max_age_duration.serialize(writer);
          });
          if (this.max_bytes !== undefined) writer.writeInt64(3, this.max_bytes);
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
          var message = new EvidenceParams({});

          if (data.max_age_num_blocks != null) {
            message.max_age_num_blocks = data.max_age_num_blocks;
          }

          if (data.max_age_duration != null) {
            message.max_age_duration = dependency_2.google.protobuf.Duration.fromObject(data.max_age_duration);
          }

          if (data.max_bytes != null) {
            message.max_bytes = data.max_bytes;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EvidenceParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.max_age_num_blocks = reader.readInt64();
                break;

              case 2:
                reader.readMessage(message.max_age_duration, function () {
                  return message.max_age_duration = dependency_2.google.protobuf.Duration.deserialize(reader);
                });
                break;

              case 3:
                message.max_bytes = reader.readInt64();
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
          return EvidenceParams.deserialize(bytes);
        }
      }]);
      return EvidenceParams;
    }(pb_1.Message);

    _types.EvidenceParams = EvidenceParams;

    var ValidatorParams = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(ValidatorParams, _pb_1$Message4);

      var _super4 = _createSuper(ValidatorParams);

      function ValidatorParams(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, ValidatorParams);
        _this6 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("pub_key_types" in data && data.pub_key_types != undefined) {
            _this6.pub_key_types = data.pub_key_types;
          }
        }

        return _this6;
      }

      (0, _createClass2["default"])(ValidatorParams, [{
        key: "pub_key_types",
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

          if (this.pub_key_types != null) {
            data.pub_key_types = this.pub_key_types;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.pub_key_types !== undefined) writer.writeRepeatedString(1, this.pub_key_types);
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
          var message = new ValidatorParams({});

          if (data.pub_key_types != null) {
            message.pub_key_types = data.pub_key_types;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ValidatorParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
          return ValidatorParams.deserialize(bytes);
        }
      }]);
      return ValidatorParams;
    }(pb_1.Message);

    _types.ValidatorParams = ValidatorParams;

    var VersionParams = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(VersionParams, _pb_1$Message5);

      var _super5 = _createSuper(VersionParams);

      function VersionParams(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, VersionParams);
        _this7 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("app_version" in data && data.app_version != undefined) {
            _this7.app_version = data.app_version;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(VersionParams, [{
        key: "app_version",
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

          if (this.app_version != null) {
            data.app_version = this.app_version;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.app_version !== undefined) writer.writeUint64(1, this.app_version);
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
          var message = new VersionParams({});

          if (data.app_version != null) {
            message.app_version = data.app_version;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new VersionParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.app_version = reader.readUint64();
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
          return VersionParams.deserialize(bytes);
        }
      }]);
      return VersionParams;
    }(pb_1.Message);

    _types.VersionParams = VersionParams;

    var HashedParams = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(HashedParams, _pb_1$Message6);

      var _super6 = _createSuper(HashedParams);

      function HashedParams(data) {
        var _this8;

        (0, _classCallCheck2["default"])(this, HashedParams);
        _this8 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("block_max_bytes" in data && data.block_max_bytes != undefined) {
            _this8.block_max_bytes = data.block_max_bytes;
          }

          if ("block_max_gas" in data && data.block_max_gas != undefined) {
            _this8.block_max_gas = data.block_max_gas;
          }
        }

        return _this8;
      }

      (0, _createClass2["default"])(HashedParams, [{
        key: "block_max_bytes",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "block_max_gas",
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

          if (this.block_max_bytes != null) {
            data.block_max_bytes = this.block_max_bytes;
          }

          if (this.block_max_gas != null) {
            data.block_max_gas = this.block_max_gas;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.block_max_bytes !== undefined) writer.writeInt64(1, this.block_max_bytes);
          if (this.block_max_gas !== undefined) writer.writeInt64(2, this.block_max_gas);
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
          var message = new HashedParams({});

          if (data.block_max_bytes != null) {
            message.block_max_bytes = data.block_max_bytes;
          }

          if (data.block_max_gas != null) {
            message.block_max_gas = data.block_max_gas;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new HashedParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.block_max_bytes = reader.readInt64();
                break;

              case 2:
                message.block_max_gas = reader.readInt64();
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
          return HashedParams.deserialize(bytes);
        }
      }]);
      return HashedParams;
    }(pb_1.Message);

    _types.HashedParams = HashedParams;
  })(types || (types = _tendermint.types || (_tendermint.types = {})));
})(tendermint || (exports.tendermint = tendermint = {}));