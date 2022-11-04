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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_4 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

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
      var GenericAuthorization = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenericAuthorization, _pb_1$Message);

        var _super = _createSuper(GenericAuthorization);

        function GenericAuthorization(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenericAuthorization);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("msg" in data && data.msg != undefined) {
              _this.msg = data.msg;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenericAuthorization, [{
          key: "msg",
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

            if (this.msg != null) {
              data.msg = this.msg;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.msg === "string" && this.msg.length) writer.writeString(1, this.msg);
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
            var message = new GenericAuthorization({});

            if (data.msg != null) {
              message.msg = data.msg;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenericAuthorization();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.msg = reader.readString();
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
            return GenericAuthorization.deserialize(bytes);
          }
        }]);
        return GenericAuthorization;
      }(pb_1.Message);

      _v1beta.GenericAuthorization = GenericAuthorization;

      var Grant = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Grant, _pb_1$Message2);

        var _super2 = _createSuper(Grant);

        function Grant(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, Grant);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("authorization" in data && data.authorization != undefined) {
              _this2.authorization = data.authorization;
            }

            if ("expiration" in data && data.expiration != undefined) {
              _this2.expiration = data.expiration;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(Grant, [{
          key: "authorization",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "expiration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.authorization != null) {
              data.authorization = this.authorization.toObject();
            }

            if (this.expiration != null) {
              data.expiration = this.expiration.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.authorization !== undefined) writer.writeMessage(1, this.authorization, function () {
              return _this3.authorization.serialize(writer);
            });
            if (this.expiration !== undefined) writer.writeMessage(2, this.expiration, function () {
              return _this3.expiration.serialize(writer);
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
            var message = new Grant({});

            if (data.authorization != null) {
              message.authorization = dependency_4.google.protobuf.Any.fromObject(data.authorization);
            }

            if (data.expiration != null) {
              message.expiration = dependency_2.google.protobuf.Timestamp.fromObject(data.expiration);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Grant();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.authorization, function () {
                    return message.authorization = dependency_4.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.expiration, function () {
                    return message.expiration = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
            return Grant.deserialize(bytes);
          }
        }]);
        return Grant;
      }(pb_1.Message);

      _v1beta.Grant = Grant;

      var GrantAuthorization = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(GrantAuthorization, _pb_1$Message3);

        var _super3 = _createSuper(GrantAuthorization);

        function GrantAuthorization(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, GrantAuthorization);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("granter" in data && data.granter != undefined) {
              _this4.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this4.grantee = data.grantee;
            }

            if ("authorization" in data && data.authorization != undefined) {
              _this4.authorization = data.authorization;
            }

            if ("expiration" in data && data.expiration != undefined) {
              _this4.expiration = data.expiration;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(GrantAuthorization, [{
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "grantee",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "authorization",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "expiration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            if (this.authorization != null) {
              data.authorization = this.authorization.toObject();
            }

            if (this.expiration != null) {
              data.expiration = this.expiration.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(2, this.grantee);
            if (this.authorization !== undefined) writer.writeMessage(3, this.authorization, function () {
              return _this5.authorization.serialize(writer);
            });
            if (this.expiration !== undefined) writer.writeMessage(4, this.expiration, function () {
              return _this5.expiration.serialize(writer);
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
            var message = new GrantAuthorization({});

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            if (data.authorization != null) {
              message.authorization = dependency_4.google.protobuf.Any.fromObject(data.authorization);
            }

            if (data.expiration != null) {
              message.expiration = dependency_2.google.protobuf.Timestamp.fromObject(data.expiration);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GrantAuthorization();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.granter = reader.readString();
                  break;

                case 2:
                  message.grantee = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.authorization, function () {
                    return message.authorization = dependency_4.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.expiration, function () {
                    return message.expiration = dependency_2.google.protobuf.Timestamp.deserialize(reader);
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
            return GrantAuthorization.deserialize(bytes);
          }
        }]);
        return GrantAuthorization;
      }(pb_1.Message);

      _v1beta.GrantAuthorization = GrantAuthorization;
    })(v1beta1 || (v1beta1 = _authz.v1beta1 || (_authz.v1beta1 = {})));
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
})(cosmos || (exports.cosmos = cosmos = {}));