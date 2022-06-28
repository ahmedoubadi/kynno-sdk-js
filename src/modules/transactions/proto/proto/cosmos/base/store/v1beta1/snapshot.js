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
    var store;

    (function (_store) {
      var v1beta1;

      (function (_v1beta) {
        var SnapshotItem = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(SnapshotItem, _pb_1$Message);

          var _super = _createSuper(SnapshotItem);

          function SnapshotItem(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, SnapshotItem);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("store" in data && data.store != undefined) {
                _this.store = data.store;
              }

              if ("iavl" in data && data.iavl != undefined) {
                _this.iavl = data.iavl;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(SnapshotItem, [{
            key: "store",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotStoreItem, 1);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
            }
          }, {
            key: "iavl",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SnapshotIAVLItem, 2);
            },
            set: function set(value) {
              pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
            }
          }, {
            key: "item",
            get: function get() {
              var cases = {
                0: "none",
                1: "store",
                2: "iavl"
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

              if (this.store != null) {
                data.store = this.store.toObject();
              }

              if (this.iavl != null) {
                data.iavl = this.iavl.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.store !== undefined) writer.writeMessage(1, this.store, function () {
                return _this2.store.serialize(writer);
              });
              if (this.iavl !== undefined) writer.writeMessage(2, this.iavl, function () {
                return _this2.iavl.serialize(writer);
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

        var SnapshotStoreItem = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(SnapshotStoreItem, _pb_1$Message2);

          var _super2 = _createSuper(SnapshotStoreItem);

          function SnapshotStoreItem(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, SnapshotStoreItem);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this3.name = data.name;
              }
            }

            return _this3;
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

        var SnapshotIAVLItem = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(SnapshotIAVLItem, _pb_1$Message3);

          var _super3 = _createSuper(SnapshotIAVLItem);

          function SnapshotIAVLItem(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, SnapshotIAVLItem);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this4.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this4.value = data.value;
              }

              if ("version" in data && data.version != undefined) {
                _this4.version = data.version;
              }

              if ("height" in data && data.height != undefined) {
                _this4.height = data.height;
              }
            }

            return _this4;
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
      })(v1beta1 || (v1beta1 = _store.v1beta1 || (_store.v1beta1 = {})));
    })(store || (store = _base.store || (_base.store = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));