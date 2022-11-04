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

        var SnapshotItem = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(SnapshotItem, _pb_1$Message3);

          var _super3 = _createSuper(SnapshotItem);

          function SnapshotItem(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, SnapshotItem);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2, 3, 4]]);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("store" in data && data.store != undefined) {
                _this4.store = data.store;
              }

              if ("iavl" in data && data.iavl != undefined) {
                _this4.iavl = data.iavl;
              }

              if ("extension" in data && data.extension != undefined) {
                _this4.extension = data.extension;
              }

              if ("extension_payload" in data && data.extension_payload != undefined) {
                _this4.extension_payload = data.extension_payload;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(SnapshotItem, [{
            key: "store",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotStoreItem, 1);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 1, [1, 2, 3, 4], value);
            }
          }, {
            key: "iavl",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotIAVLItem, 2);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 2, [1, 2, 3, 4], value);
            }
          }, {
            key: "extension",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotExtensionMeta, 3);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 3, [1, 2, 3, 4], value);
            }
          }, {
            key: "extension_payload",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotExtensionPayload, 4);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 4, [1, 2, 3, 4], value);
            }
          }, {
            key: "item",
            get: function get() {
              var cases = {
                0: "none",
                1: "store",
                2: "iavl",
                3: "extension",
                4: "extension_payload"
              };
              return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
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

              if (this.store != null) {
                data.store = this.store.toObject();
              }

              if (this.iavl != null) {
                data.iavl = this.iavl.toObject();
              }

              if (this.extension != null) {
                data.extension = this.extension.toObject();
              }

              if (this.extension_payload != null) {
                data.extension_payload = this.extension_payload.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this5 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.store !== undefined) writer.writeMessage(1, this.store, function () {
                return _this5.store.serialize(writer);
              });
              if (this.iavl !== undefined) writer.writeMessage(2, this.iavl, function () {
                return _this5.iavl.serialize(writer);
              });
              if (this.extension !== undefined) writer.writeMessage(3, this.extension, function () {
                return _this5.extension.serialize(writer);
              });
              if (this.extension_payload !== undefined) writer.writeMessage(4, this.extension_payload, function () {
                return _this5.extension_payload.serialize(writer);
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
              var message = new SnapshotItem({});

              if (data.store != null) {
                message.store = SnapshotStoreItem.fromObject(data.store);
              }

              if (data.iavl != null) {
                message.iavl = SnapshotIAVLItem.fromObject(data.iavl);
              }

              if (data.extension != null) {
                message.extension = SnapshotExtensionMeta.fromObject(data.extension);
              }

              if (data.extension_payload != null) {
                message.extension_payload = SnapshotExtensionPayload.fromObject(data.extension_payload);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SnapshotItem();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.store, function () {
                      return message.store = SnapshotStoreItem.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.iavl, function () {
                      return message.iavl = SnapshotIAVLItem.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.extension, function () {
                      return message.extension = SnapshotExtensionMeta.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.extension_payload, function () {
                      return message.extension_payload = SnapshotExtensionPayload.deserialize(reader);
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
              return SnapshotItem.deserialize(bytes);
            }
          }]);
          return SnapshotItem;
        }(pb_1.Message);

        _v1beta.SnapshotItem = SnapshotItem;

        var SnapshotStoreItem = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(SnapshotStoreItem, _pb_1$Message4);

          var _super4 = _createSuper(SnapshotStoreItem);

          function SnapshotStoreItem(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, SnapshotStoreItem);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this6.name = data.name;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(SnapshotStoreItem, [{
            key: "name",
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

              if (this.name != null) {
                data.name = this.name;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
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
              var message = new SnapshotStoreItem({});

              if (data.name != null) {
                message.name = data.name;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SnapshotStoreItem();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
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
              return SnapshotStoreItem.deserialize(bytes);
            }
          }]);
          return SnapshotStoreItem;
        }(pb_1.Message);

        _v1beta.SnapshotStoreItem = SnapshotStoreItem;

        var SnapshotIAVLItem = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(SnapshotIAVLItem, _pb_1$Message5);

          var _super5 = _createSuper(SnapshotIAVLItem);

          function SnapshotIAVLItem(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, SnapshotIAVLItem);
            _this7 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this7.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this7.value = data.value;
              }

              if ("version" in data && data.version != undefined) {
                _this7.version = data.version;
              }

              if ("height" in data && data.height != undefined) {
                _this7.height = data.height;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(SnapshotIAVLItem, [{
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
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "height",
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

              if (this.key != null) {
                data.key = this.key;
              }

              if (this.value != null) {
                data.value = this.value;
              }

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.height != null) {
                data.height = this.height;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key !== undefined) writer.writeBytes(1, this.key);
              if (this.value !== undefined) writer.writeBytes(2, this.value);
              if (this.version !== undefined) writer.writeInt64(3, this.version);
              if (this.height !== undefined) writer.writeInt32(4, this.height);
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
              var message = new SnapshotIAVLItem({});

              if (data.key != null) {
                message.key = data.key;
              }

              if (data.value != null) {
                message.value = data.value;
              }

              if (data.version != null) {
                message.version = data.version;
              }

              if (data.height != null) {
                message.height = data.height;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SnapshotIAVLItem();

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
                    message.version = reader.readInt64();
                    break;

                  case 4:
                    message.height = reader.readInt32();
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
              return SnapshotIAVLItem.deserialize(bytes);
            }
          }]);
          return SnapshotIAVLItem;
        }(pb_1.Message);

        _v1beta.SnapshotIAVLItem = SnapshotIAVLItem;

        var SnapshotExtensionMeta = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(SnapshotExtensionMeta, _pb_1$Message6);

          var _super6 = _createSuper(SnapshotExtensionMeta);

          function SnapshotExtensionMeta(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, SnapshotExtensionMeta);
            _this8 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this8.name = data.name;
              }

              if ("format" in data && data.format != undefined) {
                _this8.format = data.format;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(SnapshotExtensionMeta, [{
            key: "name",
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
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.name != null) {
                data.name = this.name;
              }

              if (this.format != null) {
                data.format = this.format;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
              if (this.format !== undefined) writer.writeUint32(2, this.format);
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
              var message = new SnapshotExtensionMeta({});

              if (data.name != null) {
                message.name = data.name;
              }

              if (data.format != null) {
                message.format = data.format;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SnapshotExtensionMeta();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
                    break;

                  case 2:
                    message.format = reader.readUint32();
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
              return SnapshotExtensionMeta.deserialize(bytes);
            }
          }]);
          return SnapshotExtensionMeta;
        }(pb_1.Message);

        _v1beta.SnapshotExtensionMeta = SnapshotExtensionMeta;

        var SnapshotExtensionPayload = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(SnapshotExtensionPayload, _pb_1$Message7);

          var _super7 = _createSuper(SnapshotExtensionPayload);

          function SnapshotExtensionPayload(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, SnapshotExtensionPayload);
            _this9 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("payload" in data && data.payload != undefined) {
                _this9.payload = data.payload;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(SnapshotExtensionPayload, [{
            key: "payload",
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

              if (this.payload != null) {
                data.payload = this.payload;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.payload !== undefined) writer.writeBytes(1, this.payload);
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
              var message = new SnapshotExtensionPayload({});

              if (data.payload != null) {
                message.payload = data.payload;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SnapshotExtensionPayload();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.payload = reader.readBytes();
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
              return SnapshotExtensionPayload.deserialize(bytes);
            }
          }]);
          return SnapshotExtensionPayload;
        }(pb_1.Message);

        _v1beta.SnapshotExtensionPayload = SnapshotExtensionPayload;
      })(v1beta1 || (v1beta1 = _snapshots.v1beta1 || (_snapshots.v1beta1 = {})));
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));