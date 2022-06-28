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

var dependency_2 = _interopRequireWildcard(require("./../../../../proofs"));

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
    var commitment;

    (function (_commitment) {
      var v1;

      (function (_v) {
        var MerkleRoot = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MerkleRoot, _pb_1$Message);

          var _super = _createSuper(MerkleRoot);

          function MerkleRoot(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MerkleRoot);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("hash" in data && data.hash != undefined) {
                _this.hash = data.hash;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MerkleRoot, [{
            key: "hash",
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

              if (this.hash != null) {
                data.hash = this.hash;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.hash !== undefined) writer.writeBytes(1, this.hash);
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
              var message = new MerkleRoot({});

              if (data.hash != null) {
                message.hash = data.hash;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MerkleRoot();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
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
              return MerkleRoot.deserialize(bytes);
            }
          }]);
          return MerkleRoot;
        }(pb_1.Message);

        _v.MerkleRoot = MerkleRoot;

        var MerklePrefix = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(MerklePrefix, _pb_1$Message2);

          var _super2 = _createSuper(MerklePrefix);

          function MerklePrefix(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, MerklePrefix);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key_prefix" in data && data.key_prefix != undefined) {
                _this2.key_prefix = data.key_prefix;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(MerklePrefix, [{
            key: "key_prefix",
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

              if (this.key_prefix != null) {
                data.key_prefix = this.key_prefix;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key_prefix !== undefined) writer.writeBytes(1, this.key_prefix);
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
              var message = new MerklePrefix({});

              if (data.key_prefix != null) {
                message.key_prefix = data.key_prefix;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MerklePrefix();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.key_prefix = reader.readBytes();
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
              return MerklePrefix.deserialize(bytes);
            }
          }]);
          return MerklePrefix;
        }(pb_1.Message);

        _v.MerklePrefix = MerklePrefix;

        var MerklePath = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(MerklePath, _pb_1$Message3);

          var _super3 = _createSuper(MerklePath);

          function MerklePath(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, MerklePath);
            _this3 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key_path" in data && data.key_path != undefined) {
                _this3.key_path = data.key_path;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(MerklePath, [{
            key: "key_path",
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

              if (this.key_path != null) {
                data.key_path = this.key_path;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key_path !== undefined) writer.writeRepeatedString(1, this.key_path);
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
              var message = new MerklePath({});

              if (data.key_path != null) {
                message.key_path = data.key_path;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MerklePath();

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
              return MerklePath.deserialize(bytes);
            }
          }]);
          return MerklePath;
        }(pb_1.Message);

        _v.MerklePath = MerklePath;

        var MerkleProof = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(MerkleProof, _pb_1$Message4);

          var _super4 = _createSuper(MerkleProof);

          function MerkleProof(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, MerkleProof);
            _this4 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("proofs" in data && data.proofs != undefined) {
                _this4.proofs = data.proofs;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(MerkleProof, [{
            key: "proofs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ics23.CommitmentProof, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.proofs != null) {
                data.proofs = this.proofs.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.proofs !== undefined) writer.writeRepeatedMessage(1, this.proofs, function (item) {
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
              var message = new MerkleProof({});

              if (data.proofs != null) {
                message.proofs = data.proofs.map(function (item) {
                  return dependency_2.ics23.CommitmentProof.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MerkleProof();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.proofs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ics23.CommitmentProof.deserialize(reader), dependency_2.ics23.CommitmentProof);
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
              return MerkleProof.deserialize(bytes);
            }
          }]);
          return MerkleProof;
        }(pb_1.Message);

        _v.MerkleProof = MerkleProof;
      })(v1 || (v1 = _commitment.v1 || (_commitment.v1 = {})));
    })(commitment || (commitment = _core.commitment || (_core.commitment = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));