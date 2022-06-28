"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

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

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var snapshots;

    (function (_snapshots) {
      var v1beta1;

      (function (_v1beta) {
        var Snapshot = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(Snapshot, _pb_1$Message);

          var _super = _createSuper(Snapshot);

          function Snapshot(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, Snapshot);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("height" in data && data.height != undefined) {
                _this.height = data.height;
              }

              if ("format" in data && data.format != undefined) {
                _this.format = data.format;
              }

              if ("chunks" in data && data.chunks != undefined) {
                _this.chunks = data.chunks;
              }

              if ("hash" in data && data.hash != undefined) {
                _this.hash = data.hash;
              }

              if ("metadata" in data && data.metadata != undefined) {
                _this.metadata = data.metadata;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(Snapshot, [{
            key: "height",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "format",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "chunks",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "hash",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "metadata",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Metadata, 5);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 5, value);
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

              if (this.height != null) {
                data.height = this.height;
              }

              if (this.format != null) {
                data.format = this.format;
              }

              if (this.chunks != null) {
                data.chunks = this.chunks;
              }

              if (this.hash != null) {
                data.hash = this.hash;
              }

              if (this.metadata != null) {
                data.metadata = this.metadata.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.height !== undefined) writer.writeUint64(1, this.height);
              if (this.format !== undefined) writer.writeUint32(2, this.format);
              if (this.chunks !== undefined) writer.writeUint32(3, this.chunks);
              if (this.hash !== undefined) writer.writeBytes(4, this.hash);
              if (this.metadata !== undefined) writer.writeMessage(5, this.metadata, function () {
                return _this2.metadata.serialize(writer);
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
              var message = new Snapshot({});

              if (data.height != null) {
                message.height = data.height;
              }

              if (data.format != null) {
                message.format = data.format;
              }

              if (data.chunks != null) {
                message.chunks = data.chunks;
              }

              if (data.hash != null) {
                message.hash = data.hash;
              }

              if (data.metadata != null) {
                message.metadata = Metadata.fromObject(data.metadata);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Snapshot();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.height = reader.readUint64();
                    break;

                  case 2:
                    message.format = reader.readUint32();
                    break;

                  case 3:
                    message.chunks = reader.readUint32();
                    break;

                  case 4:
                    message.hash = reader.readBytes();
                    break;

                  case 5:
                    reader.readMessage(message.metadata, function () {
                      return message.metadata = Metadata.deserialize(reader);
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
              return Snapshot.deserialize(bytes);
            }
          }]);
          return Snapshot;
        }(pb_1.Message);

        _v1beta.Snapshot = Snapshot;

        var Metadata = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(Metadata, _pb_1$Message2);

          var _super2 = _createSuper(Metadata);

          function Metadata(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, Metadata);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("chunk_hashes" in data && data.chunk_hashes != undefined) {
                _this3.chunk_hashes = data.chunk_hashes;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(Metadata, [{
            key: "chunk_hashes",
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

              if (this.chunk_hashes != null) {
                data.chunk_hashes = this.chunk_hashes;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.chunk_hashes !== undefined) writer.writeRepeatedBytes(1, this.chunk_hashes);
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
              var message = new Metadata({});

              if (data.chunk_hashes != null) {
                message.chunk_hashes = data.chunk_hashes;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Metadata();

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
              return Metadata.deserialize(bytes);
            }
          }]);
          return Metadata;
        }(pb_1.Message);

        _v1beta.Metadata = Metadata;
      })(v1beta1 || (v1beta1 = _snapshots.v1beta1 || (_snapshots.v1beta1 = {})));
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));