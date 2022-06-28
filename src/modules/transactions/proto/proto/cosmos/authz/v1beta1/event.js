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
  var authz;

  (function (_authz) {
    var v1beta1;

    (function (_v1beta) {
      var EventGrant = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(EventGrant, _pb_1$Message);

        var _super = _createSuper(EventGrant);

        function EventGrant(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, EventGrant);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("msg_type_url" in data && data.msg_type_url != undefined) {
              _this.msg_type_url = data.msg_type_url;
            }

            if ("granter" in data && data.granter != undefined) {
              _this.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this.grantee = data.grantee;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(EventGrant, [{
          key: "msg_type_url",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "grantee",
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

            if (this.msg_type_url != null) {
              data.msg_type_url = this.msg_type_url;
            }

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.msg_type_url === "string" && this.msg_type_url.length) writer.writeString(2, this.msg_type_url);
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(3, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(4, this.grantee);
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
            var message = new EventGrant({});

            if (data.msg_type_url != null) {
              message.msg_type_url = data.msg_type_url;
            }

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EventGrant();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 2:
                  message.msg_type_url = reader.readString();
                  break;

                case 3:
                  message.granter = reader.readString();
                  break;

                case 4:
                  message.grantee = reader.readString();
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
            return EventGrant.deserialize(bytes);
          }
        }]);
        return EventGrant;
      }(pb_1.Message);

      _v1beta.EventGrant = EventGrant;

      var EventRevoke = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(EventRevoke, _pb_1$Message2);

        var _super2 = _createSuper(EventRevoke);

        function EventRevoke(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, EventRevoke);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("msg_type_url" in data && data.msg_type_url != undefined) {
              _this2.msg_type_url = data.msg_type_url;
            }

            if ("granter" in data && data.granter != undefined) {
              _this2.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this2.grantee = data.grantee;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(EventRevoke, [{
          key: "msg_type_url",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "grantee",
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

            if (this.msg_type_url != null) {
              data.msg_type_url = this.msg_type_url;
            }

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.msg_type_url === "string" && this.msg_type_url.length) writer.writeString(2, this.msg_type_url);
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(3, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(4, this.grantee);
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
            var message = new EventRevoke({});

            if (data.msg_type_url != null) {
              message.msg_type_url = data.msg_type_url;
            }

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EventRevoke();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 2:
                  message.msg_type_url = reader.readString();
                  break;

                case 3:
                  message.granter = reader.readString();
                  break;

                case 4:
                  message.grantee = reader.readString();
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
            return EventRevoke.deserialize(bytes);
          }
        }]);
        return EventRevoke;
      }(pb_1.Message);

      _v1beta.EventRevoke = EventRevoke;
    })(v1beta1 || (v1beta1 = _authz.v1beta1 || (_authz.v1beta1 = {})));
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
})(cosmos || (exports.cosmos = cosmos = {}));