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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var tendermint;
exports.tendermint = tendermint;

(function (_tendermint) {
  var crypto;

  (function (_crypto) {
    var Proof = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Proof, _pb_1$Message);

      var _super = _createSuper(Proof);

      function Proof(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Proof);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("total" in data && data.total != undefined) {
            _this.total = data.total;
          }

          if ("index" in data && data.index != undefined) {
            _this.index = data.index;
          }

          if ("leaf_hash" in data && data.leaf_hash != undefined) {
            _this.leaf_hash = data.leaf_hash;
          }

          if ("aunts" in data && data.aunts != undefined) {
            _this.aunts = data.aunts;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Proof, [{
        key: "total",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "leaf_hash",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "aunts",
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

          if (this.total != null) {
            data.total = this.total;
          }

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.leaf_hash != null) {
            data.leaf_hash = this.leaf_hash;
          }

          if (this.aunts != null) {
            data.aunts = this.aunts;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.total !== undefined) writer.writeInt64(1, this.total);
          if (this.index !== undefined) writer.writeInt64(2, this.index);
          if (this.leaf_hash !== undefined) writer.writeBytes(3, this.leaf_hash);
          if (this.aunts !== undefined) writer.writeRepeatedBytes(4, this.aunts);
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
          var message = new Proof({});

          if (data.total != null) {
            message.total = data.total;
          }

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.leaf_hash != null) {
            message.leaf_hash = data.leaf_hash;
          }

          if (data.aunts != null) {
            message.aunts = data.aunts;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Proof();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.total = reader.readInt64();
                break;

              case 2:
                message.index = reader.readInt64();
                break;

              case 3:
                message.leaf_hash = reader.readBytes();
                break;

              case 4:
                pb_1.Message.addToRepeatedField(message, 4, reader.readBytes());
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
          return Proof.deserialize(bytes);
        }
      }]);
      return Proof;
    }(pb_1.Message);

    _crypto.Proof = Proof;

    var ValueOp = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(ValueOp, _pb_1$Message2);

      var _super2 = _createSuper(ValueOp);

      function ValueOp(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, ValueOp);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("key" in data && data.key != undefined) {
            _this2.key = data.key;
          }

          if ("proof" in data && data.proof != undefined) {
            _this2.proof = data.proof;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(ValueOp, [{
        key: "key",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "proof",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Proof, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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
          if (this.key !== undefined) writer.writeBytes(1, this.key);
          if (this.proof !== undefined) writer.writeMessage(2, this.proof, function () {
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
          var message = new ValueOp({});

          if (data.key != null) {
            message.key = data.key;
          }

          if (data.proof != null) {
            message.proof = Proof.fromObject(data.proof);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ValueOp();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.key = reader.readBytes();
                break;

              case 2:
                reader.readMessage(message.proof, function () {
                  return message.proof = Proof.deserialize(reader);
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
          return ValueOp.deserialize(bytes);
        }
      }]);
      return ValueOp;
    }(pb_1.Message);

    _crypto.ValueOp = ValueOp;

    var DominoOp = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(DominoOp, _pb_1$Message3);

      var _super3 = _createSuper(DominoOp);

      function DominoOp(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, DominoOp);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("key" in data && data.key != undefined) {
            _this4.key = data.key;
          }

          if ("input" in data && data.input != undefined) {
            _this4.input = data.input;
          }

          if ("output" in data && data.output != undefined) {
            _this4.output = data.output;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(DominoOp, [{
        key: "key",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "input",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "output",
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

          if (this.key != null) {
            data.key = this.key;
          }

          if (this.input != null) {
            data.input = this.input;
          }

          if (this.output != null) {
            data.output = this.output;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.key === "string" && this.key.length) writer.writeString(1, this.key);
          if (typeof this.input === "string" && this.input.length) writer.writeString(2, this.input);
          if (typeof this.output === "string" && this.output.length) writer.writeString(3, this.output);
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
          var message = new DominoOp({});

          if (data.key != null) {
            message.key = data.key;
          }

          if (data.input != null) {
            message.input = data.input;
          }

          if (data.output != null) {
            message.output = data.output;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new DominoOp();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.key = reader.readString();
                break;

              case 2:
                message.input = reader.readString();
                break;

              case 3:
                message.output = reader.readString();
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
          return DominoOp.deserialize(bytes);
        }
      }]);
      return DominoOp;
    }(pb_1.Message);

    _crypto.DominoOp = DominoOp;

    var ProofOp = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(ProofOp, _pb_1$Message4);

      var _super4 = _createSuper(ProofOp);

      function ProofOp(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, ProofOp);
        _this5 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("type" in data && data.type != undefined) {
            _this5.type = data.type;
          }

          if ("key" in data && data.key != undefined) {
            _this5.key = data.key;
          }

          if ("data" in data && data.data != undefined) {
            _this5.data = data.data;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(ProofOp, [{
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "key",
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
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.key != null) {
            data.key = this.key;
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
          if (typeof this.type === "string" && this.type.length) writer.writeString(1, this.type);
          if (this.key !== undefined) writer.writeBytes(2, this.key);
          if (this.data !== undefined) writer.writeBytes(3, this.data);
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
          var message = new ProofOp({});

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.key != null) {
            message.key = data.key;
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
              message = new ProofOp();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.type = reader.readString();
                break;

              case 2:
                message.key = reader.readBytes();
                break;

              case 3:
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
          return ProofOp.deserialize(bytes);
        }
      }]);
      return ProofOp;
    }(pb_1.Message);

    _crypto.ProofOp = ProofOp;

    var ProofOps = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(ProofOps, _pb_1$Message5);

      var _super5 = _createSuper(ProofOps);

      function ProofOps(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, ProofOps);
        _this6 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("ops" in data && data.ops != undefined) {
            _this6.ops = data.ops;
          }
        }

        return _this6;
      }

      (0, _createClass2["default"])(ProofOps, [{
        key: "ops",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, ProofOp, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

          if (this.ops != null) {
            data.ops = this.ops.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.ops !== undefined) writer.writeRepeatedMessage(1, this.ops, function (item) {
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
          var message = new ProofOps({});

          if (data.ops != null) {
            message.ops = data.ops.map(function (item) {
              return ProofOp.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ProofOps();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.ops, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, ProofOp.deserialize(reader), ProofOp);
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
          return ProofOps.deserialize(bytes);
        }
      }]);
      return ProofOps;
    }(pb_1.Message);

    _crypto.ProofOps = ProofOps;
  })(crypto || (crypto = _tendermint.crypto || (_tendermint.crypto = {})));
})(tendermint || (exports.tendermint = tendermint = {}));