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
        var CommitInfo = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(CommitInfo, _pb_1$Message);

          var _super = _createSuper(CommitInfo);

          function CommitInfo(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, CommitInfo);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("version" in data && data.version != undefined) {
                _this.version = data.version;
              }

              if ("store_infos" in data && data.store_infos != undefined) {
                _this.store_infos = data.store_infos;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(CommitInfo, [{
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "store_infos",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, StoreInfo, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.store_infos != null) {
                data.store_infos = this.store_infos.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.version !== undefined) writer.writeInt64(1, this.version);
              if (this.store_infos !== undefined) writer.writeRepeatedMessage(2, this.store_infos, function (item) {
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
              var message = new CommitInfo({});

              if (data.version != null) {
                message.version = data.version;
              }

              if (data.store_infos != null) {
                message.store_infos = data.store_infos.map(function (item) {
                  return StoreInfo.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new CommitInfo();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.version = reader.readInt64();
                    break;

                  case 2:
                    reader.readMessage(message.store_infos, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, StoreInfo.deserialize(reader), StoreInfo);
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
              return CommitInfo.deserialize(bytes);
            }
          }]);
          return CommitInfo;
        }(pb_1.Message);

        _v1beta.CommitInfo = CommitInfo;

        var StoreInfo = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(StoreInfo, _pb_1$Message2);

          var _super2 = _createSuper(StoreInfo);

          function StoreInfo(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, StoreInfo);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this2.name = data.name;
              }

              if ("commit_id" in data && data.commit_id != undefined) {
                _this2.commit_id = data.commit_id;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(StoreInfo, [{
            key: "name",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "commit_id",
            get: function get() {
              return pb_1.Message.getWrapperField(this, CommitID, 2);
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

              if (this.name != null) {
                data.name = this.name;
              }

              if (this.commit_id != null) {
                data.commit_id = this.commit_id.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this3 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
              if (this.commit_id !== undefined) writer.writeMessage(2, this.commit_id, function () {
                return _this3.commit_id.serialize(writer);
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
              var message = new StoreInfo({});

              if (data.name != null) {
                message.name = data.name;
              }

              if (data.commit_id != null) {
                message.commit_id = CommitID.fromObject(data.commit_id);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new StoreInfo();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.commit_id, function () {
                      return message.commit_id = CommitID.deserialize(reader);
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
              return StoreInfo.deserialize(bytes);
            }
          }]);
          return StoreInfo;
        }(pb_1.Message);

        _v1beta.StoreInfo = StoreInfo;

        var CommitID = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(CommitID, _pb_1$Message3);

          var _super3 = _createSuper(CommitID);

          function CommitID(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, CommitID);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("version" in data && data.version != undefined) {
                _this4.version = data.version;
              }

              if ("hash" in data && data.hash != undefined) {
                _this4.hash = data.hash;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(CommitID, [{
            key: "version",
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

              if (this.version != null) {
                data.version = this.version;
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
              if (this.version !== undefined) writer.writeInt64(1, this.version);
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
              var message = new CommitID({});

              if (data.version != null) {
                message.version = data.version;
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
                  message = new CommitID();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.version = reader.readInt64();
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
              return CommitID.deserialize(bytes);
            }
          }]);
          return CommitID;
        }(pb_1.Message);

        _v1beta.CommitID = CommitID;
      })(v1beta1 || (v1beta1 = _store.v1beta1 || (_store.v1beta1 = {})));
    })(store || (store = _base.store || (_base.store = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));