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
    var Http = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Http, _pb_1$Message);

      var _super = _createSuper(Http);

      function Http(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Http);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("rules" in data && data.rules != undefined) {
            _this.rules = data.rules;
          }

          if ("fully_decode_reserved_expansion" in data && data.fully_decode_reserved_expansion != undefined) {
            _this.fully_decode_reserved_expansion = data.fully_decode_reserved_expansion;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Http, [{
        key: "rules",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, HttpRule, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "fully_decode_reserved_expansion",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
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

          if (this.rules != null) {
            data.rules = this.rules.map(function (item) {
              return item.toObject();
            });
          }

          if (this.fully_decode_reserved_expansion != null) {
            data.fully_decode_reserved_expansion = this.fully_decode_reserved_expansion;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.rules !== undefined) writer.writeRepeatedMessage(1, this.rules, function (item) {
            return item.serialize(writer);
          });
          if (this.fully_decode_reserved_expansion !== undefined) writer.writeBool(2, this.fully_decode_reserved_expansion);
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
          var message = new Http({});

          if (data.rules != null) {
            message.rules = data.rules.map(function (item) {
              return HttpRule.fromObject(item);
            });
          }

          if (data.fully_decode_reserved_expansion != null) {
            message.fully_decode_reserved_expansion = data.fully_decode_reserved_expansion;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Http();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.rules, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, HttpRule.deserialize(reader), HttpRule);
                });
                break;

              case 2:
                message.fully_decode_reserved_expansion = reader.readBool();
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
          return Http.deserialize(bytes);
        }
      }]);
      return Http;
    }(pb_1.Message);

    _api.Http = Http;

    var HttpRule = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(HttpRule, _pb_1$Message2);

      var _super2 = _createSuper(HttpRule);

      function HttpRule(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, HttpRule);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [11], [[2, 3, 4, 5, 6, 8]]);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("selector" in data && data.selector != undefined) {
            _this2.selector = data.selector;
          }

          if ("get" in data && data.get != undefined) {
            _this2.get = data.get;
          }

          if ("put" in data && data.put != undefined) {
            _this2.put = data.put;
          }

          if ("post" in data && data.post != undefined) {
            _this2.post = data.post;
          }

          if ("delete" in data && data["delete"] != undefined) {
            _this2["delete"] = data["delete"];
          }

          if ("patch" in data && data.patch != undefined) {
            _this2.patch = data.patch;
          }

          if ("custom" in data && data.custom != undefined) {
            _this2.custom = data.custom;
          }

          if ("body" in data && data.body != undefined) {
            _this2.body = data.body;
          }

          if ("response_body" in data && data.response_body != undefined) {
            _this2.response_body = data.response_body;
          }

          if ("additional_bindings" in data && data.additional_bindings != undefined) {
            _this2.additional_bindings = data.additional_bindings;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(HttpRule, [{
        key: "selector",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "get",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setOneofField(this, 2, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "put",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setOneofField(this, 3, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "post",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setOneofField(this, 4, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "delete",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setOneofField(this, 5, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "patch",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setOneofField(this, 6, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "custom",
        get: function get() {
          return pb_1.Message.getWrapperField(this, CustomHttpPattern, 8);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 8, [2, 3, 4, 5, 6, 8], value);
        }
      }, {
        key: "body",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "response_body",
        get: function get() {
          return pb_1.Message.getField(this, 12);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 12, value);
        }
      }, {
        key: "additional_bindings",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, HttpRule, 11);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 11, value);
        }
      }, {
        key: "pattern",
        get: function get() {
          var cases = {
            0: "none",
            2: "get",
            3: "put",
            4: "post",
            5: "delete",
            6: "patch",
            8: "custom"
          };
          return cases[pb_1.Message.computeOneofCase(this, [2, 3, 4, 5, 6, 8])];
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

          if (this.selector != null) {
            data.selector = this.selector;
          }

          if (this.get != null) {
            data.get = this.get;
          }

          if (this.put != null) {
            data.put = this.put;
          }

          if (this.post != null) {
            data.post = this.post;
          }

          if (this["delete"] != null) {
            data["delete"] = this["delete"];
          }

          if (this.patch != null) {
            data.patch = this.patch;
          }

          if (this.custom != null) {
            data.custom = this.custom.toObject();
          }

          if (this.body != null) {
            data.body = this.body;
          }

          if (this.response_body != null) {
            data.response_body = this.response_body;
          }

          if (this.additional_bindings != null) {
            data.additional_bindings = this.additional_bindings.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this3 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.selector === "string" && this.selector.length) writer.writeString(1, this.selector);
          if (typeof this.get === "string" && this.get.length) writer.writeString(2, this.get);
          if (typeof this.put === "string" && this.put.length) writer.writeString(3, this.put);
          if (typeof this.post === "string" && this.post.length) writer.writeString(4, this.post);
          if (typeof this["delete"] === "string" && this["delete"].length) writer.writeString(5, this["delete"]);
          if (typeof this.patch === "string" && this.patch.length) writer.writeString(6, this.patch);
          if (this.custom !== undefined) writer.writeMessage(8, this.custom, function () {
            return _this3.custom.serialize(writer);
          });
          if (typeof this.body === "string" && this.body.length) writer.writeString(7, this.body);
          if (typeof this.response_body === "string" && this.response_body.length) writer.writeString(12, this.response_body);
          if (this.additional_bindings !== undefined) writer.writeRepeatedMessage(11, this.additional_bindings, function (item) {
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
          var message = new HttpRule({});

          if (data.selector != null) {
            message.selector = data.selector;
          }

          if (data.get != null) {
            message.get = data.get;
          }

          if (data.put != null) {
            message.put = data.put;
          }

          if (data.post != null) {
            message.post = data.post;
          }

          if (data["delete"] != null) {
            message["delete"] = data["delete"];
          }

          if (data.patch != null) {
            message.patch = data.patch;
          }

          if (data.custom != null) {
            message.custom = CustomHttpPattern.fromObject(data.custom);
          }

          if (data.body != null) {
            message.body = data.body;
          }

          if (data.response_body != null) {
            message.response_body = data.response_body;
          }

          if (data.additional_bindings != null) {
            message.additional_bindings = data.additional_bindings.map(function (item) {
              return HttpRule.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new HttpRule();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.selector = reader.readString();
                break;

              case 2:
                message.get = reader.readString();
                break;

              case 3:
                message.put = reader.readString();
                break;

              case 4:
                message.post = reader.readString();
                break;

              case 5:
                message["delete"] = reader.readString();
                break;

              case 6:
                message.patch = reader.readString();
                break;

              case 8:
                reader.readMessage(message.custom, function () {
                  return message.custom = CustomHttpPattern.deserialize(reader);
                });
                break;

              case 7:
                message.body = reader.readString();
                break;

              case 12:
                message.response_body = reader.readString();
                break;

              case 11:
                reader.readMessage(message.additional_bindings, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 11, HttpRule.deserialize(reader), HttpRule);
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
          return HttpRule.deserialize(bytes);
        }
      }]);
      return HttpRule;
    }(pb_1.Message);

    _api.HttpRule = HttpRule;

    var CustomHttpPattern = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(CustomHttpPattern, _pb_1$Message3);

      var _super3 = _createSuper(CustomHttpPattern);

      function CustomHttpPattern(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, CustomHttpPattern);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("kind" in data && data.kind != undefined) {
            _this4.kind = data.kind;
          }

          if ("path" in data && data.path != undefined) {
            _this4.path = data.path;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(CustomHttpPattern, [{
        key: "kind",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "path",
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

          if (this.kind != null) {
            data.kind = this.kind;
          }

          if (this.path != null) {
            data.path = this.path;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.kind === "string" && this.kind.length) writer.writeString(1, this.kind);
          if (typeof this.path === "string" && this.path.length) writer.writeString(2, this.path);
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
          var message = new CustomHttpPattern({});

          if (data.kind != null) {
            message.kind = data.kind;
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
              message = new CustomHttpPattern();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.kind = reader.readString();
                break;

              case 2:
                message.path = reader.readString();
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
          return CustomHttpPattern.deserialize(bytes);
        }
      }]);
      return CustomHttpPattern;
    }(pb_1.Message);

    _api.CustomHttpPattern = CustomHttpPattern;
  })(api || (api = _google.api || (_google.api = {})));
})(google || (exports.google = google = {}));