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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var feegrant;

  (function (_feegrant) {
    var v1beta1;

    (function (_v1beta) {
      var MsgGrantAllowance = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgGrantAllowance, _pb_1$Message);

        var _super = _createSuper(MsgGrantAllowance);

        function MsgGrantAllowance(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgGrantAllowance);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("granter" in data && data.granter != undefined) {
              _this.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this.grantee = data.grantee;
            }

            if ("allowance" in data && data.allowance != undefined) {
              _this.allowance = data.allowance;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgGrantAllowance, [{
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
          key: "allowance",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            if (this.allowance != null) {
              data.allowance = this.allowance.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(2, this.grantee);
            if (this.allowance !== undefined) writer.writeMessage(3, this.allowance, function () {
              return _this2.allowance.serialize(writer);
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
            var message = new MsgGrantAllowance({});

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            if (data.allowance != null) {
              message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgGrantAllowance();

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
                  reader.readMessage(message.allowance, function () {
                    return message.allowance = dependency_2.google.protobuf.Any.deserialize(reader);
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
            return MsgGrantAllowance.deserialize(bytes);
          }
        }]);
        return MsgGrantAllowance;
      }(pb_1.Message);

      _v1beta.MsgGrantAllowance = MsgGrantAllowance;

      var MsgGrantAllowanceResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgGrantAllowanceResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgGrantAllowanceResponse);

        function MsgGrantAllowanceResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgGrantAllowanceResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this3;
        }

        (0, _createClass2["default"])(MsgGrantAllowanceResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgGrantAllowanceResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgGrantAllowanceResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgGrantAllowanceResponse.deserialize(bytes);
          }
        }]);
        return MsgGrantAllowanceResponse;
      }(pb_1.Message);

      _v1beta.MsgGrantAllowanceResponse = MsgGrantAllowanceResponse;

      var MsgRevokeAllowance = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgRevokeAllowance, _pb_1$Message3);

        var _super3 = _createSuper(MsgRevokeAllowance);

        function MsgRevokeAllowance(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgRevokeAllowance);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("granter" in data && data.granter != undefined) {
              _this4.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this4.grantee = data.grantee;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(MsgRevokeAllowance, [{
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
          key: "toObject",
          value: function toObject() {
            var data = {};

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
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(2, this.grantee);
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
            var message = new MsgRevokeAllowance({});

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
                message = new MsgRevokeAllowance();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.granter = reader.readString();
                  break;

                case 2:
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
            return MsgRevokeAllowance.deserialize(bytes);
          }
        }]);
        return MsgRevokeAllowance;
      }(pb_1.Message);

      _v1beta.MsgRevokeAllowance = MsgRevokeAllowance;

      var MsgRevokeAllowanceResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgRevokeAllowanceResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgRevokeAllowanceResponse);

        function MsgRevokeAllowanceResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgRevokeAllowanceResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this5;
        }

        (0, _createClass2["default"])(MsgRevokeAllowanceResponse, [{
          key: "toObject",
          value: function toObject() {
            var data = {};
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
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
            var message = new MsgRevokeAllowanceResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgRevokeAllowanceResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return MsgRevokeAllowanceResponse.deserialize(bytes);
          }
        }]);
        return MsgRevokeAllowanceResponse;
      }(pb_1.Message);

      _v1beta.MsgRevokeAllowanceResponse = MsgRevokeAllowanceResponse;
    })(v1beta1 || (v1beta1 = _feegrant.v1beta1 || (_feegrant.v1beta1 = {})));
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
})(cosmos || (exports.cosmos = cosmos = {}));