"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ics23 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ics23;
exports.ics23 = ics23;

(function (_ics) {
  var HashOp;

  (function (HashOp) {
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
  })(HashOp || (HashOp = {}));

  _ics.HashOp = HashOp;
  var LengthOp;

  (function (LengthOp) {
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  })(LengthOp || (LengthOp = {}));

  _ics.LengthOp = LengthOp;

  var ExistenceProof = /*#__PURE__*/function (_pb_1$Message) {
    (0, _inherits2["default"])(ExistenceProof, _pb_1$Message);

    var _super = _createSuper(ExistenceProof);

    function ExistenceProof(data) {
      var _this;

      (0, _classCallCheck2["default"])(this, ExistenceProof);
      _this = _super.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("key" in data && data.key != undefined) {
          _this.key = data.key;
        }

        if ("value" in data && data.value != undefined) {
          _this.value = data.value;
        }

        if ("leaf" in data && data.leaf != undefined) {
          _this.leaf = data.leaf;
        }

        if ("path" in data && data.path != undefined) {
          _this.path = data.path;
        }
      }

      return _this;
    }

    (0, _createClass2["default"])(ExistenceProof, [{
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
      key: "leaf",
      get: function get() {
        return pb_1.Message.getWrapperField(this, LeafOp, 3);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 3, value);
      }
    }, {
      key: "path",
      get: function get() {
        return pb_1.Message.getRepeatedWrapperField(this, InnerOp, 4);
      },
      set: function set(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
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

        if (this.key != null) {
          data.key = this.key;
        }

        if (this.value != null) {
          data.value = this.value;
        }

        if (this.leaf != null) {
          data.leaf = this.leaf.toObject();
        }

        if (this.path != null) {
          data.path = this.path.map(function (item) {
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
        if (this.key !== undefined) writer.writeBytes(1, this.key);
        if (this.value !== undefined) writer.writeBytes(2, this.value);
        if (this.leaf !== undefined) writer.writeMessage(3, this.leaf, function () {
          return _this2.leaf.serialize(writer);
        });
        if (this.path !== undefined) writer.writeRepeatedMessage(4, this.path, function (item) {
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
        var message = new ExistenceProof({});

        if (data.key != null) {
          message.key = data.key;
        }

        if (data.value != null) {
          message.value = data.value;
        }

        if (data.leaf != null) {
          message.leaf = LeafOp.fromObject(data.leaf);
        }

        if (data.path != null) {
          message.path = data.path.map(function (item) {
            return InnerOp.fromObject(item);
          });
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new ExistenceProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.key = reader.readBytes();
              break;

            case 2:
              message.value = reader.readBytes();
              break;

            case 3:
              reader.readMessage(message.leaf, function () {
                return message.leaf = LeafOp.deserialize(reader);
              });
              break;

            case 4:
              reader.readMessage(message.path, function () {
                return pb_1.Message.addToRepeatedWrapperField(message, 4, InnerOp.deserialize(reader), InnerOp);
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
        return ExistenceProof.deserialize(bytes);
      }
    }]);
    return ExistenceProof;
  }(pb_1.Message);

  _ics.ExistenceProof = ExistenceProof;

  var NonExistenceProof = /*#__PURE__*/function (_pb_1$Message2) {
    (0, _inherits2["default"])(NonExistenceProof, _pb_1$Message2);

    var _super2 = _createSuper(NonExistenceProof);

    function NonExistenceProof(data) {
      var _this3;

      (0, _classCallCheck2["default"])(this, NonExistenceProof);
      _this3 = _super2.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("key" in data && data.key != undefined) {
          _this3.key = data.key;
        }

        if ("left" in data && data.left != undefined) {
          _this3.left = data.left;
        }

        if ("right" in data && data.right != undefined) {
          _this3.right = data.right;
        }
      }

      return _this3;
    }

    (0, _createClass2["default"])(NonExistenceProof, [{
      key: "key",
      get: function get() {
        return pb_1.Message.getField(this, 1);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 1, value);
      }
    }, {
      key: "left",
      get: function get() {
        return pb_1.Message.getWrapperField(this, ExistenceProof, 2);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 2, value);
      }
    }, {
      key: "right",
      get: function get() {
        return pb_1.Message.getWrapperField(this, ExistenceProof, 3);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 3, value);
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

        if (this.key != null) {
          data.key = this.key;
        }

        if (this.left != null) {
          data.left = this.left.toObject();
        }

        if (this.right != null) {
          data.right = this.right.toObject();
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this4 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined) writer.writeBytes(1, this.key);
        if (this.left !== undefined) writer.writeMessage(2, this.left, function () {
          return _this4.left.serialize(writer);
        });
        if (this.right !== undefined) writer.writeMessage(3, this.right, function () {
          return _this4.right.serialize(writer);
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
        var message = new NonExistenceProof({});

        if (data.key != null) {
          message.key = data.key;
        }

        if (data.left != null) {
          message.left = ExistenceProof.fromObject(data.left);
        }

        if (data.right != null) {
          message.right = ExistenceProof.fromObject(data.right);
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new NonExistenceProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.key = reader.readBytes();
              break;

            case 2:
              reader.readMessage(message.left, function () {
                return message.left = ExistenceProof.deserialize(reader);
              });
              break;

            case 3:
              reader.readMessage(message.right, function () {
                return message.right = ExistenceProof.deserialize(reader);
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
        return NonExistenceProof.deserialize(bytes);
      }
    }]);
    return NonExistenceProof;
  }(pb_1.Message);

  _ics.NonExistenceProof = NonExistenceProof;

  var CommitmentProof = /*#__PURE__*/function (_pb_1$Message3) {
    (0, _inherits2["default"])(CommitmentProof, _pb_1$Message3);

    var _super3 = _createSuper(CommitmentProof);

    function CommitmentProof(data) {
      var _this5;

      (0, _classCallCheck2["default"])(this, CommitmentProof);
      _this5 = _super3.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2, 3, 4]]);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("exist" in data && data.exist != undefined) {
          _this5.exist = data.exist;
        }

        if ("nonexist" in data && data.nonexist != undefined) {
          _this5.nonexist = data.nonexist;
        }

        if ("batch" in data && data.batch != undefined) {
          _this5.batch = data.batch;
        }

        if ("compressed" in data && data.compressed != undefined) {
          _this5.compressed = data.compressed;
        }
      }

      return _this5;
    }

    (0, _createClass2["default"])(CommitmentProof, [{
      key: "exist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, ExistenceProof, 1);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 1, [1, 2, 3, 4], value);
      }
    }, {
      key: "nonexist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, NonExistenceProof, 2);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 2, [1, 2, 3, 4], value);
      }
    }, {
      key: "batch",
      get: function get() {
        return pb_1.Message.getWrapperField(this, BatchProof, 3);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 3, [1, 2, 3, 4], value);
      }
    }, {
      key: "compressed",
      get: function get() {
        return pb_1.Message.getWrapperField(this, CompressedBatchProof, 4);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 4, [1, 2, 3, 4], value);
      }
    }, {
      key: "proof",
      get: function get() {
        var cases = {
          0: "none",
          1: "exist",
          2: "nonexist",
          3: "batch",
          4: "compressed"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
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

        if (this.exist != null) {
          data.exist = this.exist.toObject();
        }

        if (this.nonexist != null) {
          data.nonexist = this.nonexist.toObject();
        }

        if (this.batch != null) {
          data.batch = this.batch.toObject();
        }

        if (this.compressed != null) {
          data.compressed = this.compressed.toObject();
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this6 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.exist !== undefined) writer.writeMessage(1, this.exist, function () {
          return _this6.exist.serialize(writer);
        });
        if (this.nonexist !== undefined) writer.writeMessage(2, this.nonexist, function () {
          return _this6.nonexist.serialize(writer);
        });
        if (this.batch !== undefined) writer.writeMessage(3, this.batch, function () {
          return _this6.batch.serialize(writer);
        });
        if (this.compressed !== undefined) writer.writeMessage(4, this.compressed, function () {
          return _this6.compressed.serialize(writer);
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
        var message = new CommitmentProof({});

        if (data.exist != null) {
          message.exist = ExistenceProof.fromObject(data.exist);
        }

        if (data.nonexist != null) {
          message.nonexist = NonExistenceProof.fromObject(data.nonexist);
        }

        if (data.batch != null) {
          message.batch = BatchProof.fromObject(data.batch);
        }

        if (data.compressed != null) {
          message.compressed = CompressedBatchProof.fromObject(data.compressed);
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new CommitmentProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.exist, function () {
                return message.exist = ExistenceProof.deserialize(reader);
              });
              break;

            case 2:
              reader.readMessage(message.nonexist, function () {
                return message.nonexist = NonExistenceProof.deserialize(reader);
              });
              break;

            case 3:
              reader.readMessage(message.batch, function () {
                return message.batch = BatchProof.deserialize(reader);
              });
              break;

            case 4:
              reader.readMessage(message.compressed, function () {
                return message.compressed = CompressedBatchProof.deserialize(reader);
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
        return CommitmentProof.deserialize(bytes);
      }
    }]);
    return CommitmentProof;
  }(pb_1.Message);

  _ics.CommitmentProof = CommitmentProof;

  var LeafOp = /*#__PURE__*/function (_pb_1$Message4) {
    (0, _inherits2["default"])(LeafOp, _pb_1$Message4);

    var _super4 = _createSuper(LeafOp);

    function LeafOp(data) {
      var _this7;

      (0, _classCallCheck2["default"])(this, LeafOp);
      _this7 = _super4.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("hash" in data && data.hash != undefined) {
          _this7.hash = data.hash;
        }

        if ("prehash_key" in data && data.prehash_key != undefined) {
          _this7.prehash_key = data.prehash_key;
        }

        if ("prehash_value" in data && data.prehash_value != undefined) {
          _this7.prehash_value = data.prehash_value;
        }

        if ("length" in data && data.length != undefined) {
          _this7.length = data.length;
        }

        if ("prefix" in data && data.prefix != undefined) {
          _this7.prefix = data.prefix;
        }
      }

      return _this7;
    }

    (0, _createClass2["default"])(LeafOp, [{
      key: "hash",
      get: function get() {
        return pb_1.Message.getField(this, 1);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 1, value);
      }
    }, {
      key: "prehash_key",
      get: function get() {
        return pb_1.Message.getField(this, 2);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 2, value);
      }
    }, {
      key: "prehash_value",
      get: function get() {
        return pb_1.Message.getField(this, 3);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 3, value);
      }
    }, {
      key: "length",
      get: function get() {
        return pb_1.Message.getField(this, 4);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 4, value);
      }
    }, {
      key: "prefix",
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

        if (this.hash != null) {
          data.hash = this.hash;
        }

        if (this.prehash_key != null) {
          data.prehash_key = this.prehash_key;
        }

        if (this.prehash_value != null) {
          data.prehash_value = this.prehash_value;
        }

        if (this.length != null) {
          data.length = this.length;
        }

        if (this.prefix != null) {
          data.prefix = this.prefix;
        }

        return data;
      }
    }, {
      key: "serialize",
      value: function serialize(w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.hash !== undefined) writer.writeEnum(1, this.hash);
        if (this.prehash_key !== undefined) writer.writeEnum(2, this.prehash_key);
        if (this.prehash_value !== undefined) writer.writeEnum(3, this.prehash_value);
        if (this.length !== undefined) writer.writeEnum(4, this.length);
        if (this.prefix !== undefined) writer.writeBytes(5, this.prefix);
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
        var message = new LeafOp({});

        if (data.hash != null) {
          message.hash = data.hash;
        }

        if (data.prehash_key != null) {
          message.prehash_key = data.prehash_key;
        }

        if (data.prehash_value != null) {
          message.prehash_value = data.prehash_value;
        }

        if (data.length != null) {
          message.length = data.length;
        }

        if (data.prefix != null) {
          message.prefix = data.prefix;
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new LeafOp();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.hash = reader.readEnum();
              break;

            case 2:
              message.prehash_key = reader.readEnum();
              break;

            case 3:
              message.prehash_value = reader.readEnum();
              break;

            case 4:
              message.length = reader.readEnum();
              break;

            case 5:
              message.prefix = reader.readBytes();
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
        return LeafOp.deserialize(bytes);
      }
    }]);
    return LeafOp;
  }(pb_1.Message);

  _ics.LeafOp = LeafOp;

  var InnerOp = /*#__PURE__*/function (_pb_1$Message5) {
    (0, _inherits2["default"])(InnerOp, _pb_1$Message5);

    var _super5 = _createSuper(InnerOp);

    function InnerOp(data) {
      var _this8;

      (0, _classCallCheck2["default"])(this, InnerOp);
      _this8 = _super5.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("hash" in data && data.hash != undefined) {
          _this8.hash = data.hash;
        }

        if ("prefix" in data && data.prefix != undefined) {
          _this8.prefix = data.prefix;
        }

        if ("suffix" in data && data.suffix != undefined) {
          _this8.suffix = data.suffix;
        }
      }

      return _this8;
    }

    (0, _createClass2["default"])(InnerOp, [{
      key: "hash",
      get: function get() {
        return pb_1.Message.getField(this, 1);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 1, value);
      }
    }, {
      key: "prefix",
      get: function get() {
        return pb_1.Message.getField(this, 2);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 2, value);
      }
    }, {
      key: "suffix",
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

        if (this.hash != null) {
          data.hash = this.hash;
        }

        if (this.prefix != null) {
          data.prefix = this.prefix;
        }

        if (this.suffix != null) {
          data.suffix = this.suffix;
        }

        return data;
      }
    }, {
      key: "serialize",
      value: function serialize(w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.hash !== undefined) writer.writeEnum(1, this.hash);
        if (this.prefix !== undefined) writer.writeBytes(2, this.prefix);
        if (this.suffix !== undefined) writer.writeBytes(3, this.suffix);
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
        var message = new InnerOp({});

        if (data.hash != null) {
          message.hash = data.hash;
        }

        if (data.prefix != null) {
          message.prefix = data.prefix;
        }

        if (data.suffix != null) {
          message.suffix = data.suffix;
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new InnerOp();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.hash = reader.readEnum();
              break;

            case 2:
              message.prefix = reader.readBytes();
              break;

            case 3:
              message.suffix = reader.readBytes();
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
        return InnerOp.deserialize(bytes);
      }
    }]);
    return InnerOp;
  }(pb_1.Message);

  _ics.InnerOp = InnerOp;

  var ProofSpec = /*#__PURE__*/function (_pb_1$Message6) {
    (0, _inherits2["default"])(ProofSpec, _pb_1$Message6);

    var _super6 = _createSuper(ProofSpec);

    function ProofSpec(data) {
      var _this9;

      (0, _classCallCheck2["default"])(this, ProofSpec);
      _this9 = _super6.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("leaf_spec" in data && data.leaf_spec != undefined) {
          _this9.leaf_spec = data.leaf_spec;
        }

        if ("inner_spec" in data && data.inner_spec != undefined) {
          _this9.inner_spec = data.inner_spec;
        }

        if ("max_depth" in data && data.max_depth != undefined) {
          _this9.max_depth = data.max_depth;
        }

        if ("min_depth" in data && data.min_depth != undefined) {
          _this9.min_depth = data.min_depth;
        }
      }

      return _this9;
    }

    (0, _createClass2["default"])(ProofSpec, [{
      key: "leaf_spec",
      get: function get() {
        return pb_1.Message.getWrapperField(this, LeafOp, 1);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 1, value);
      }
    }, {
      key: "inner_spec",
      get: function get() {
        return pb_1.Message.getWrapperField(this, InnerSpec, 2);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 2, value);
      }
    }, {
      key: "max_depth",
      get: function get() {
        return pb_1.Message.getField(this, 3);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 3, value);
      }
    }, {
      key: "min_depth",
      get: function get() {
        return pb_1.Message.getField(this, 4);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 4, value);
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

        if (this.leaf_spec != null) {
          data.leaf_spec = this.leaf_spec.toObject();
        }

        if (this.inner_spec != null) {
          data.inner_spec = this.inner_spec.toObject();
        }

        if (this.max_depth != null) {
          data.max_depth = this.max_depth;
        }

        if (this.min_depth != null) {
          data.min_depth = this.min_depth;
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this10 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.leaf_spec !== undefined) writer.writeMessage(1, this.leaf_spec, function () {
          return _this10.leaf_spec.serialize(writer);
        });
        if (this.inner_spec !== undefined) writer.writeMessage(2, this.inner_spec, function () {
          return _this10.inner_spec.serialize(writer);
        });
        if (this.max_depth !== undefined) writer.writeInt32(3, this.max_depth);
        if (this.min_depth !== undefined) writer.writeInt32(4, this.min_depth);
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
        var message = new ProofSpec({});

        if (data.leaf_spec != null) {
          message.leaf_spec = LeafOp.fromObject(data.leaf_spec);
        }

        if (data.inner_spec != null) {
          message.inner_spec = InnerSpec.fromObject(data.inner_spec);
        }

        if (data.max_depth != null) {
          message.max_depth = data.max_depth;
        }

        if (data.min_depth != null) {
          message.min_depth = data.min_depth;
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new ProofSpec();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.leaf_spec, function () {
                return message.leaf_spec = LeafOp.deserialize(reader);
              });
              break;

            case 2:
              reader.readMessage(message.inner_spec, function () {
                return message.inner_spec = InnerSpec.deserialize(reader);
              });
              break;

            case 3:
              message.max_depth = reader.readInt32();
              break;

            case 4:
              message.min_depth = reader.readInt32();
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
        return ProofSpec.deserialize(bytes);
      }
    }]);
    return ProofSpec;
  }(pb_1.Message);

  _ics.ProofSpec = ProofSpec;

  var InnerSpec = /*#__PURE__*/function (_pb_1$Message7) {
    (0, _inherits2["default"])(InnerSpec, _pb_1$Message7);

    var _super7 = _createSuper(InnerSpec);

    function InnerSpec(data) {
      var _this11;

      (0, _classCallCheck2["default"])(this, InnerSpec);
      _this11 = _super7.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [1], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("child_order" in data && data.child_order != undefined) {
          _this11.child_order = data.child_order;
        }

        if ("child_size" in data && data.child_size != undefined) {
          _this11.child_size = data.child_size;
        }

        if ("min_prefix_length" in data && data.min_prefix_length != undefined) {
          _this11.min_prefix_length = data.min_prefix_length;
        }

        if ("max_prefix_length" in data && data.max_prefix_length != undefined) {
          _this11.max_prefix_length = data.max_prefix_length;
        }

        if ("empty_child" in data && data.empty_child != undefined) {
          _this11.empty_child = data.empty_child;
        }

        if ("hash" in data && data.hash != undefined) {
          _this11.hash = data.hash;
        }
      }

      return _this11;
    }

    (0, _createClass2["default"])(InnerSpec, [{
      key: "child_order",
      get: function get() {
        return pb_1.Message.getField(this, 1);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 1, value);
      }
    }, {
      key: "child_size",
      get: function get() {
        return pb_1.Message.getField(this, 2);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 2, value);
      }
    }, {
      key: "min_prefix_length",
      get: function get() {
        return pb_1.Message.getField(this, 3);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 3, value);
      }
    }, {
      key: "max_prefix_length",
      get: function get() {
        return pb_1.Message.getField(this, 4);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 4, value);
      }
    }, {
      key: "empty_child",
      get: function get() {
        return pb_1.Message.getField(this, 5);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 5, value);
      }
    }, {
      key: "hash",
      get: function get() {
        return pb_1.Message.getField(this, 6);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 6, value);
      }
    }, {
      key: "toObject",
      value: function toObject() {
        var data = {};

        if (this.child_order != null) {
          data.child_order = this.child_order;
        }

        if (this.child_size != null) {
          data.child_size = this.child_size;
        }

        if (this.min_prefix_length != null) {
          data.min_prefix_length = this.min_prefix_length;
        }

        if (this.max_prefix_length != null) {
          data.max_prefix_length = this.max_prefix_length;
        }

        if (this.empty_child != null) {
          data.empty_child = this.empty_child;
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
        if (this.child_order !== undefined) writer.writePackedInt32(1, this.child_order);
        if (this.child_size !== undefined) writer.writeInt32(2, this.child_size);
        if (this.min_prefix_length !== undefined) writer.writeInt32(3, this.min_prefix_length);
        if (this.max_prefix_length !== undefined) writer.writeInt32(4, this.max_prefix_length);
        if (this.empty_child !== undefined) writer.writeBytes(5, this.empty_child);
        if (this.hash !== undefined) writer.writeEnum(6, this.hash);
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
        var message = new InnerSpec({});

        if (data.child_order != null) {
          message.child_order = data.child_order;
        }

        if (data.child_size != null) {
          message.child_size = data.child_size;
        }

        if (data.min_prefix_length != null) {
          message.min_prefix_length = data.min_prefix_length;
        }

        if (data.max_prefix_length != null) {
          message.max_prefix_length = data.max_prefix_length;
        }

        if (data.empty_child != null) {
          message.empty_child = data.empty_child;
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
            message = new InnerSpec();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.child_order = reader.readPackedInt32();
              break;

            case 2:
              message.child_size = reader.readInt32();
              break;

            case 3:
              message.min_prefix_length = reader.readInt32();
              break;

            case 4:
              message.max_prefix_length = reader.readInt32();
              break;

            case 5:
              message.empty_child = reader.readBytes();
              break;

            case 6:
              message.hash = reader.readEnum();
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
        return InnerSpec.deserialize(bytes);
      }
    }]);
    return InnerSpec;
  }(pb_1.Message);

  _ics.InnerSpec = InnerSpec;

  var BatchProof = /*#__PURE__*/function (_pb_1$Message8) {
    (0, _inherits2["default"])(BatchProof, _pb_1$Message8);

    var _super8 = _createSuper(BatchProof);

    function BatchProof(data) {
      var _this12;

      (0, _classCallCheck2["default"])(this, BatchProof);
      _this12 = _super8.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [1], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("entries" in data && data.entries != undefined) {
          _this12.entries = data.entries;
        }
      }

      return _this12;
    }

    (0, _createClass2["default"])(BatchProof, [{
      key: "entries",
      get: function get() {
        return pb_1.Message.getRepeatedWrapperField(this, BatchEntry, 1);
      },
      set: function set(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

        if (this.entries != null) {
          data.entries = this.entries.map(function (item) {
            return item.toObject();
          });
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.entries !== undefined) writer.writeRepeatedMessage(1, this.entries, function (item) {
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
        var message = new BatchProof({});

        if (data.entries != null) {
          message.entries = data.entries.map(function (item) {
            return BatchEntry.fromObject(item);
          });
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new BatchProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.entries, function () {
                return pb_1.Message.addToRepeatedWrapperField(message, 1, BatchEntry.deserialize(reader), BatchEntry);
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
        return BatchProof.deserialize(bytes);
      }
    }]);
    return BatchProof;
  }(pb_1.Message);

  _ics.BatchProof = BatchProof;

  var BatchEntry = /*#__PURE__*/function (_pb_1$Message9) {
    (0, _inherits2["default"])(BatchEntry, _pb_1$Message9);

    var _super9 = _createSuper(BatchEntry);

    function BatchEntry(data) {
      var _this13;

      (0, _classCallCheck2["default"])(this, BatchEntry);
      _this13 = _super9.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("exist" in data && data.exist != undefined) {
          _this13.exist = data.exist;
        }

        if ("nonexist" in data && data.nonexist != undefined) {
          _this13.nonexist = data.nonexist;
        }
      }

      return _this13;
    }

    (0, _createClass2["default"])(BatchEntry, [{
      key: "exist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, ExistenceProof, 1);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
      }
    }, {
      key: "nonexist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, NonExistenceProof, 2);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
      }
    }, {
      key: "proof",
      get: function get() {
        var cases = {
          0: "none",
          1: "exist",
          2: "nonexist"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
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

        if (this.exist != null) {
          data.exist = this.exist.toObject();
        }

        if (this.nonexist != null) {
          data.nonexist = this.nonexist.toObject();
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this14 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.exist !== undefined) writer.writeMessage(1, this.exist, function () {
          return _this14.exist.serialize(writer);
        });
        if (this.nonexist !== undefined) writer.writeMessage(2, this.nonexist, function () {
          return _this14.nonexist.serialize(writer);
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
        var message = new BatchEntry({});

        if (data.exist != null) {
          message.exist = ExistenceProof.fromObject(data.exist);
        }

        if (data.nonexist != null) {
          message.nonexist = NonExistenceProof.fromObject(data.nonexist);
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new BatchEntry();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.exist, function () {
                return message.exist = ExistenceProof.deserialize(reader);
              });
              break;

            case 2:
              reader.readMessage(message.nonexist, function () {
                return message.nonexist = NonExistenceProof.deserialize(reader);
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
        return BatchEntry.deserialize(bytes);
      }
    }]);
    return BatchEntry;
  }(pb_1.Message);

  _ics.BatchEntry = BatchEntry;

  var CompressedBatchProof = /*#__PURE__*/function (_pb_1$Message10) {
    (0, _inherits2["default"])(CompressedBatchProof, _pb_1$Message10);

    var _super10 = _createSuper(CompressedBatchProof);

    function CompressedBatchProof(data) {
      var _this15;

      (0, _classCallCheck2["default"])(this, CompressedBatchProof);
      _this15 = _super10.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [1, 2], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("entries" in data && data.entries != undefined) {
          _this15.entries = data.entries;
        }

        if ("lookup_inners" in data && data.lookup_inners != undefined) {
          _this15.lookup_inners = data.lookup_inners;
        }
      }

      return _this15;
    }

    (0, _createClass2["default"])(CompressedBatchProof, [{
      key: "entries",
      get: function get() {
        return pb_1.Message.getRepeatedWrapperField(this, CompressedBatchEntry, 1);
      },
      set: function set(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
      }
    }, {
      key: "lookup_inners",
      get: function get() {
        return pb_1.Message.getRepeatedWrapperField(this, InnerOp, 2);
      },
      set: function set(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

        if (this.entries != null) {
          data.entries = this.entries.map(function (item) {
            return item.toObject();
          });
        }

        if (this.lookup_inners != null) {
          data.lookup_inners = this.lookup_inners.map(function (item) {
            return item.toObject();
          });
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.entries !== undefined) writer.writeRepeatedMessage(1, this.entries, function (item) {
          return item.serialize(writer);
        });
        if (this.lookup_inners !== undefined) writer.writeRepeatedMessage(2, this.lookup_inners, function (item) {
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
        var message = new CompressedBatchProof({});

        if (data.entries != null) {
          message.entries = data.entries.map(function (item) {
            return CompressedBatchEntry.fromObject(item);
          });
        }

        if (data.lookup_inners != null) {
          message.lookup_inners = data.lookup_inners.map(function (item) {
            return InnerOp.fromObject(item);
          });
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new CompressedBatchProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.entries, function () {
                return pb_1.Message.addToRepeatedWrapperField(message, 1, CompressedBatchEntry.deserialize(reader), CompressedBatchEntry);
              });
              break;

            case 2:
              reader.readMessage(message.lookup_inners, function () {
                return pb_1.Message.addToRepeatedWrapperField(message, 2, InnerOp.deserialize(reader), InnerOp);
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
        return CompressedBatchProof.deserialize(bytes);
      }
    }]);
    return CompressedBatchProof;
  }(pb_1.Message);

  _ics.CompressedBatchProof = CompressedBatchProof;

  var CompressedBatchEntry = /*#__PURE__*/function (_pb_1$Message11) {
    (0, _inherits2["default"])(CompressedBatchEntry, _pb_1$Message11);

    var _super11 = _createSuper(CompressedBatchEntry);

    function CompressedBatchEntry(data) {
      var _this16;

      (0, _classCallCheck2["default"])(this, CompressedBatchEntry);
      _this16 = _super11.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("exist" in data && data.exist != undefined) {
          _this16.exist = data.exist;
        }

        if ("nonexist" in data && data.nonexist != undefined) {
          _this16.nonexist = data.nonexist;
        }
      }

      return _this16;
    }

    (0, _createClass2["default"])(CompressedBatchEntry, [{
      key: "exist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, CompressedExistenceProof, 1);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
      }
    }, {
      key: "nonexist",
      get: function get() {
        return pb_1.Message.getWrapperField(this, CompressedNonExistenceProof, 2);
      },
      set: function set(value) {
        pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
      }
    }, {
      key: "proof",
      get: function get() {
        var cases = {
          0: "none",
          1: "exist",
          2: "nonexist"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
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

        if (this.exist != null) {
          data.exist = this.exist.toObject();
        }

        if (this.nonexist != null) {
          data.nonexist = this.nonexist.toObject();
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this17 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.exist !== undefined) writer.writeMessage(1, this.exist, function () {
          return _this17.exist.serialize(writer);
        });
        if (this.nonexist !== undefined) writer.writeMessage(2, this.nonexist, function () {
          return _this17.nonexist.serialize(writer);
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
        var message = new CompressedBatchEntry({});

        if (data.exist != null) {
          message.exist = CompressedExistenceProof.fromObject(data.exist);
        }

        if (data.nonexist != null) {
          message.nonexist = CompressedNonExistenceProof.fromObject(data.nonexist);
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new CompressedBatchEntry();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              reader.readMessage(message.exist, function () {
                return message.exist = CompressedExistenceProof.deserialize(reader);
              });
              break;

            case 2:
              reader.readMessage(message.nonexist, function () {
                return message.nonexist = CompressedNonExistenceProof.deserialize(reader);
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
        return CompressedBatchEntry.deserialize(bytes);
      }
    }]);
    return CompressedBatchEntry;
  }(pb_1.Message);

  _ics.CompressedBatchEntry = CompressedBatchEntry;

  var CompressedExistenceProof = /*#__PURE__*/function (_pb_1$Message12) {
    (0, _inherits2["default"])(CompressedExistenceProof, _pb_1$Message12);

    var _super12 = _createSuper(CompressedExistenceProof);

    function CompressedExistenceProof(data) {
      var _this18;

      (0, _classCallCheck2["default"])(this, CompressedExistenceProof);
      _this18 = _super12.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [4], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("key" in data && data.key != undefined) {
          _this18.key = data.key;
        }

        if ("value" in data && data.value != undefined) {
          _this18.value = data.value;
        }

        if ("leaf" in data && data.leaf != undefined) {
          _this18.leaf = data.leaf;
        }

        if ("path" in data && data.path != undefined) {
          _this18.path = data.path;
        }
      }

      return _this18;
    }

    (0, _createClass2["default"])(CompressedExistenceProof, [{
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
      key: "leaf",
      get: function get() {
        return pb_1.Message.getWrapperField(this, LeafOp, 3);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 3, value);
      }
    }, {
      key: "path",
      get: function get() {
        return pb_1.Message.getField(this, 4);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 4, value);
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

        if (this.key != null) {
          data.key = this.key;
        }

        if (this.value != null) {
          data.value = this.value;
        }

        if (this.leaf != null) {
          data.leaf = this.leaf.toObject();
        }

        if (this.path != null) {
          data.path = this.path;
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this19 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined) writer.writeBytes(1, this.key);
        if (this.value !== undefined) writer.writeBytes(2, this.value);
        if (this.leaf !== undefined) writer.writeMessage(3, this.leaf, function () {
          return _this19.leaf.serialize(writer);
        });
        if (this.path !== undefined) writer.writePackedInt32(4, this.path);
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
        var message = new CompressedExistenceProof({});

        if (data.key != null) {
          message.key = data.key;
        }

        if (data.value != null) {
          message.value = data.value;
        }

        if (data.leaf != null) {
          message.leaf = LeafOp.fromObject(data.leaf);
        }

        if (data.path != null) {
          message.path = data.path;
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new CompressedExistenceProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.key = reader.readBytes();
              break;

            case 2:
              message.value = reader.readBytes();
              break;

            case 3:
              reader.readMessage(message.leaf, function () {
                return message.leaf = LeafOp.deserialize(reader);
              });
              break;

            case 4:
              message.path = reader.readPackedInt32();
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
        return CompressedExistenceProof.deserialize(bytes);
      }
    }]);
    return CompressedExistenceProof;
  }(pb_1.Message);

  _ics.CompressedExistenceProof = CompressedExistenceProof;

  var CompressedNonExistenceProof = /*#__PURE__*/function (_pb_1$Message13) {
    (0, _inherits2["default"])(CompressedNonExistenceProof, _pb_1$Message13);

    var _super13 = _createSuper(CompressedNonExistenceProof);

    function CompressedNonExistenceProof(data) {
      var _this20;

      (0, _classCallCheck2["default"])(this, CompressedNonExistenceProof);
      _this20 = _super13.call(this);
      pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

      if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
        if ("key" in data && data.key != undefined) {
          _this20.key = data.key;
        }

        if ("left" in data && data.left != undefined) {
          _this20.left = data.left;
        }

        if ("right" in data && data.right != undefined) {
          _this20.right = data.right;
        }
      }

      return _this20;
    }

    (0, _createClass2["default"])(CompressedNonExistenceProof, [{
      key: "key",
      get: function get() {
        return pb_1.Message.getField(this, 1);
      },
      set: function set(value) {
        pb_1.Message.setField(this, 1, value);
      }
    }, {
      key: "left",
      get: function get() {
        return pb_1.Message.getWrapperField(this, CompressedExistenceProof, 2);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 2, value);
      }
    }, {
      key: "right",
      get: function get() {
        return pb_1.Message.getWrapperField(this, CompressedExistenceProof, 3);
      },
      set: function set(value) {
        pb_1.Message.setWrapperField(this, 3, value);
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

        if (this.key != null) {
          data.key = this.key;
        }

        if (this.left != null) {
          data.left = this.left.toObject();
        }

        if (this.right != null) {
          data.right = this.right.toObject();
        }

        return data;
      })
    }, {
      key: "serialize",
      value: function serialize(w) {
        var _this21 = this;

        var writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined) writer.writeBytes(1, this.key);
        if (this.left !== undefined) writer.writeMessage(2, this.left, function () {
          return _this21.left.serialize(writer);
        });
        if (this.right !== undefined) writer.writeMessage(3, this.right, function () {
          return _this21.right.serialize(writer);
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
        var message = new CompressedNonExistenceProof({});

        if (data.key != null) {
          message.key = data.key;
        }

        if (data.left != null) {
          message.left = CompressedExistenceProof.fromObject(data.left);
        }

        if (data.right != null) {
          message.right = CompressedExistenceProof.fromObject(data.right);
        }

        return message;
      }
    }, {
      key: "deserialize",
      value: function deserialize(bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
            message = new CompressedNonExistenceProof();

        while (reader.nextField()) {
          if (reader.isEndGroup()) break;

          switch (reader.getFieldNumber()) {
            case 1:
              message.key = reader.readBytes();
              break;

            case 2:
              reader.readMessage(message.left, function () {
                return message.left = CompressedExistenceProof.deserialize(reader);
              });
              break;

            case 3:
              reader.readMessage(message.right, function () {
                return message.right = CompressedExistenceProof.deserialize(reader);
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
        return CompressedNonExistenceProof.deserialize(bytes);
      }
    }]);
    return CompressedNonExistenceProof;
  }(pb_1.Message);

  _ics.CompressedNonExistenceProof = CompressedNonExistenceProof;
})(ics23 || (exports.ics23 = ics23 = {}));