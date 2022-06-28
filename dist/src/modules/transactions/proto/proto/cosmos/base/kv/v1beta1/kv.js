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
    var kv;

    (function (_kv) {
      var v1beta1;

      (function (_v1beta) {
        var Pairs = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(Pairs, _pb_1$Message);

          var _super = _createSuper(Pairs);

          function Pairs(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, Pairs);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pairs" in data && data.pairs != undefined) {
                _this.pairs = data.pairs;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(Pairs, [{
            key: "pairs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Pair, 1);
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

              if (this.pairs != null) {
                data.pairs = this.pairs.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.pairs !== undefined) writer.writeRepeatedMessage(1, this.pairs, function (item) {
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
              var message = new Pairs({});

              if (data.pairs != null) {
                message.pairs = data.pairs.map(function (item) {
                  return Pair.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Pairs();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.pairs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, Pair.deserialize(reader), Pair);
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
              return Pairs.deserialize(bytes);
            }
          }]);
          return Pairs;
        }(pb_1.Message);

        _v1beta.Pairs = Pairs;

        var Pair = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(Pair, _pb_1$Message2);

          var _super2 = _createSuper(Pair);

          function Pair(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, Pair);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this2.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this2.value = data.value;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(Pair, [{
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
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.key != null) {
                data.key = this.key;
              }

              if (this.value != null) {
                data.value = this.value;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key !== undefined) writer.writeBytes(1, this.key);
              if (this.value !== undefined) writer.writeBytes(2, this.value);
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
              var message = new Pair({});

              if (data.key != null) {
                message.key = data.key;
              }

              if (data.value != null) {
                message.value = data.value;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Pair();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.key = reader.readBytes();
                    break;

                  case 2:
                    message.value = reader.readBytes();
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
              return Pair.deserialize(bytes);
            }
          }]);
          return Pair;
        }(pb_1.Message);

        _v1beta.Pair = Pair;
      })(v1beta1 || (v1beta1 = _kv.v1beta1 || (_kv.v1beta1 = {})));
    })(kv || (kv = _base.kv || (_base.kv = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));