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

var dependency_2 = _interopRequireWildcard(require("./../../../core/client/v1/client"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var lightclients;

  (function (_lightclients) {
    var localhost;

    (function (_localhost) {
      var v1;

      (function (_v) {
        var ClientState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(ClientState, _pb_1$Message);

          var _super = _createSuper(ClientState);

          function ClientState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, ClientState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("chain_id" in data && data.chain_id != undefined) {
                _this.chain_id = data.chain_id;
              }

              if ("height" in data && data.height != undefined) {
                _this.height = data.height;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(ClientState, [{
            key: "chain_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 2);
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

              if (this.chain_id != null) {
                data.chain_id = this.chain_id;
              }

              if (this.height != null) {
                data.height = this.height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(1, this.chain_id);
              if (this.height !== undefined) writer.writeMessage(2, this.height, function () {
                return _this2.height.serialize(writer);
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
              var message = new ClientState({});

              if (data.chain_id != null) {
                message.chain_id = data.chain_id;
              }

              if (data.height != null) {
                message.height = dependency_2.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.chain_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
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
              return ClientState.deserialize(bytes);
            }
          }]);
          return ClientState;
        }(pb_1.Message);

        _v.ClientState = ClientState;
      })(v1 || (v1 = _localhost.v1 || (_localhost.v1 = {})));
    })(localhost || (localhost = _lightclients.localhost || (_lightclients.localhost = {})));
  })(lightclients || (lightclients = _ibc.lightclients || (_ibc.lightclients = {})));
})(ibc || (exports.ibc = ibc = {}));