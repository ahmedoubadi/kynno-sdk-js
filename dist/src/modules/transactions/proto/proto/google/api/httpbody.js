"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.google = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_1 = _interopRequireWildcard(require("./../protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var google;
exports.google = google;

(function (_google) {
  var api;

  (function (_api) {
    var HttpBody = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(HttpBody, _pb_1$Message);

      var _super = _createSuper(HttpBody);

      function HttpBody(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, HttpBody);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [3], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("content_type" in data && data.content_type != undefined) {
            _this.content_type = data.content_type;
          }

          if ("data" in data && data.data != undefined) {
            _this.data = data.data;
          }

          if ("extensions" in data && data.extensions != undefined) {
            _this.extensions = data.extensions;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(HttpBody, [{
        key: "content_type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "extensions",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 3);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

          if (this.content_type != null) {
            data.content_type = this.content_type;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.extensions != null) {
            data.extensions = this.extensions.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.content_type === "string" && this.content_type.length) writer.writeString(1, this.content_type);
          if (this.data !== undefined) writer.writeBytes(2, this.data);
          if (this.extensions !== undefined) writer.writeRepeatedMessage(3, this.extensions, function (item) {
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
          var message = new HttpBody({});

          if (data.content_type != null) {
            message.content_type = data.content_type;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.extensions != null) {
            message.extensions = data.extensions.map(function (item) {
              return dependency_1.google.protobuf.Any.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new HttpBody();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.content_type = reader.readString();
                break;

              case 2:
                message.data = reader.readBytes();
                break;

              case 3:
                reader.readMessage(message.extensions, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any);
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
          return HttpBody.deserialize(bytes);
        }
      }]);
      return HttpBody;
    }(pb_1.Message);

    _api.HttpBody = HttpBody;
  })(api || (api = _google.api || (_google.api = {})));
})(google || (exports.google = google = {}));