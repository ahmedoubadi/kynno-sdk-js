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

var dependency_2 = _interopRequireWildcard(require("./types"));

var dependency_3 = _interopRequireWildcard(require("./evidence"));

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
    var Block = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Block, _pb_1$Message);

      var _super = _createSuper(Block);

      function Block(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Block);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("header" in data && data.header != undefined) {
            _this.header = data.header;
          }

          if ("data" in data && data.data != undefined) {
            _this.data = data.data;
          }

          if ("evidence" in data && data.evidence != undefined) {
            _this.evidence = data.evidence;
          }

          if ("last_commit" in data && data.last_commit != undefined) {
            _this.last_commit = data.last_commit;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Block, [{
        key: "header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Header, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Data, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "evidence",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.EvidenceList, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "last_commit",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Commit, 4);
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

          if (this.header != null) {
            data.header = this.header.toObject();
          }

          if (this.data != null) {
            data.data = this.data.toObject();
          }

          if (this.evidence != null) {
            data.evidence = this.evidence.toObject();
          }

          if (this.last_commit != null) {
            data.last_commit = this.last_commit.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this2 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.header !== undefined) writer.writeMessage(1, this.header, function () {
            return _this2.header.serialize(writer);
          });
          if (this.data !== undefined) writer.writeMessage(2, this.data, function () {
            return _this2.data.serialize(writer);
          });
          if (this.evidence !== undefined) writer.writeMessage(3, this.evidence, function () {
            return _this2.evidence.serialize(writer);
          });
          if (this.last_commit !== undefined) writer.writeMessage(4, this.last_commit, function () {
            return _this2.last_commit.serialize(writer);
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
          var message = new Block({});

          if (data.header != null) {
            message.header = dependency_2.tendermint.types.Header.fromObject(data.header);
          }

          if (data.data != null) {
            message.data = dependency_2.tendermint.types.Data.fromObject(data.data);
          }

          if (data.evidence != null) {
            message.evidence = dependency_3.tendermint.types.EvidenceList.fromObject(data.evidence);
          }

          if (data.last_commit != null) {
            message.last_commit = dependency_2.tendermint.types.Commit.fromObject(data.last_commit);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Block();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.header, function () {
                  return message.header = dependency_2.tendermint.types.Header.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.data, function () {
                  return message.data = dependency_2.tendermint.types.Data.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.evidence, function () {
                  return message.evidence = dependency_3.tendermint.types.EvidenceList.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.last_commit, function () {
                  return message.last_commit = dependency_2.tendermint.types.Commit.deserialize(reader);
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
          return Block.deserialize(bytes);
        }
      }]);
      return Block;
    }(pb_1.Message);

    _types.Block = Block;
  })(types || (types = _tendermint.types || (_tendermint.types = {})));
})(tendermint || (exports.tendermint = tendermint = {}));