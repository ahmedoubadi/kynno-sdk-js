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
  var crisis;

  (function (_crisis) {
    var v1beta1;

    (function (_v1beta) {
      var MsgVerifyInvariant = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgVerifyInvariant, _pb_1$Message);

        var _super = _createSuper(MsgVerifyInvariant);

        function MsgVerifyInvariant(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgVerifyInvariant);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("sender" in data && data.sender != undefined) {
              _this.sender = data.sender;
            }

            if ("invariant_module_name" in data && data.invariant_module_name != undefined) {
              _this.invariant_module_name = data.invariant_module_name;
            }

            if ("invariant_route" in data && data.invariant_route != undefined) {
              _this.invariant_route = data.invariant_route;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgVerifyInvariant, [{
          key: "sender",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "invariant_module_name",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "invariant_route",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.sender != null) {
              data.sender = this.sender;
            }

            if (this.invariant_module_name != null) {
              data.invariant_module_name = this.invariant_module_name;
            }

            if (this.invariant_route != null) {
              data.invariant_route = this.invariant_route;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.sender === "string" && this.sender.length) writer.writeString(1, this.sender);
            if (typeof this.invariant_module_name === "string" && this.invariant_module_name.length) writer.writeString(2, this.invariant_module_name);
            if (typeof this.invariant_route === "string" && this.invariant_route.length) writer.writeString(3, this.invariant_route);
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
            var message = new MsgVerifyInvariant({});

            if (data.sender != null) {
              message.sender = data.sender;
            }

            if (data.invariant_module_name != null) {
              message.invariant_module_name = data.invariant_module_name;
            }

            if (data.invariant_route != null) {
              message.invariant_route = data.invariant_route;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVerifyInvariant();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.sender = reader.readString();
                  break;

                case 2:
                  message.invariant_module_name = reader.readString();
                  break;

                case 3:
                  message.invariant_route = reader.readString();
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
            return MsgVerifyInvariant.deserialize(bytes);
          }
        }]);
        return MsgVerifyInvariant;
      }(pb_1.Message);

      _v1beta.MsgVerifyInvariant = MsgVerifyInvariant;

      var MsgVerifyInvariantResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgVerifyInvariantResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgVerifyInvariantResponse);

        function MsgVerifyInvariantResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, MsgVerifyInvariantResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this2;
        }

        (0, _createClass2["default"])(MsgVerifyInvariantResponse, [{
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
            var message = new MsgVerifyInvariantResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVerifyInvariantResponse();

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
            return MsgVerifyInvariantResponse.deserialize(bytes);
          }
        }]);
        return MsgVerifyInvariantResponse;
      }(pb_1.Message);

      _v1beta.MsgVerifyInvariantResponse = MsgVerifyInvariantResponse;
    })(v1beta1 || (v1beta1 = _crisis.v1beta1 || (_crisis.v1beta1 = {})));
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
})(cosmos || (exports.cosmos = cosmos = {}));