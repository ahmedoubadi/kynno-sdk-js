"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

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

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var applications;

  (function (_applications) {
    var interchain_accounts;

    (function (_interchain_accounts) {
      var host;

      (function (_host) {
        var v1;

        (function (_v) {
          var Params = /*#__PURE__*/function (_pb_1$Message) {
            (0, _inherits2["default"])(Params, _pb_1$Message);

            var _super = _createSuper(Params);

            function Params(data) {
              var _this;

              (0, _classCallCheck2["default"])(this, Params);
              _this = _super.call(this);
              pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

              if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
                if ("host_enabled" in data && data.host_enabled != undefined) {
                  _this.host_enabled = data.host_enabled;
                }

                if ("allow_messages" in data && data.allow_messages != undefined) {
                  _this.allow_messages = data.allow_messages;
                }
              }

              return _this;
            }

            (0, _createClass2["default"])(Params, [{
              key: "host_enabled",
              get: function get() {
                return pb_1.Message.getField(this, 1);
              },
              set: function set(value) {
                pb_1.Message.setField(this, 1, value);
              }
            }, {
              key: "allow_messages",
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

                if (this.host_enabled != null) {
                  data.host_enabled = this.host_enabled;
                }

                if (this.allow_messages != null) {
                  data.allow_messages = this.allow_messages;
                }

                return data;
              }
            }, {
              key: "serialize",
              value: function serialize(w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.host_enabled !== undefined) writer.writeBool(1, this.host_enabled);
                if (this.allow_messages !== undefined) writer.writeRepeatedString(2, this.allow_messages);
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
                var message = new Params({});

                if (data.host_enabled != null) {
                  message.host_enabled = data.host_enabled;
                }

                if (data.allow_messages != null) {
                  message.allow_messages = data.allow_messages;
                }

                return message;
              }
            }, {
              key: "deserialize",
              value: function deserialize(bytes) {
                var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                    message = new Params();

                while (reader.nextField()) {
                  if (reader.isEndGroup()) break;

                  switch (reader.getFieldNumber()) {
                    case 1:
                      message.host_enabled = reader.readBool();
                      break;

                    case 2:
                      pb_1.Message.addToRepeatedField(message, 2, reader.readString());
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
                return Params.deserialize(bytes);
              }
            }]);
            return Params;
          }(pb_1.Message);

          _v.Params = Params;
        })(v1 || (v1 = _host.v1 || (_host.v1 = {})));
      })(host || (host = _interchain_accounts.host || (_interchain_accounts.host = {})));
    })(interchain_accounts || (interchain_accounts = _applications.interchain_accounts || (_applications.interchain_accounts = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));