"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var recovery;

  (function (_recovery) {
    var v1;

    (function (_v) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this2.params.serialize(writer);
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
            var message = new GenesisState({});

            if (data.params != null) {
              message.params = Params.fromObject(data.params);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenesisState();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.params, function () {
                    return message.params = Params.deserialize(reader);
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
            return GenesisState.deserialize(bytes);
          }
        }]);
        return GenesisState;
      }(pb_1.Message);

      _v.GenesisState = GenesisState;

      var Params = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Params, _pb_1$Message2);

        var _super2 = _createSuper(Params);

        function Params(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Params);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("enable_recovery" in data && data.enable_recovery != undefined) {
              _this3.enable_recovery = data.enable_recovery;
            }

            if ("packet_timeout_duration" in data && data.packet_timeout_duration != undefined) {
              _this3.packet_timeout_duration = data.packet_timeout_duration;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Params, [{
          key: "enable_recovery",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "packet_timeout_duration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.enable_recovery != null) {
              data.enable_recovery = this.enable_recovery;
            }

            if (this.packet_timeout_duration != null) {
              data.packet_timeout_duration = this.packet_timeout_duration.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.enable_recovery !== undefined) writer.writeBool(1, this.enable_recovery);
            if (this.packet_timeout_duration !== undefined) writer.writeMessage(2, this.packet_timeout_duration, function () {
              return _this4.packet_timeout_duration.serialize(writer);
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
            var message = new Params({});

            if (data.enable_recovery != null) {
              message.enable_recovery = data.enable_recovery;
            }

            if (data.packet_timeout_duration != null) {
              message.packet_timeout_duration = dependency_2.google.protobuf.Duration.fromObject(data.packet_timeout_duration);
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
                  message.enable_recovery = reader.readBool();
                  break;

                case 2:
                  reader.readMessage(message.packet_timeout_duration, function () {
                    return message.packet_timeout_duration = dependency_2.google.protobuf.Duration.deserialize(reader);
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
            return Params.deserialize(bytes);
          }
        }]);
        return Params;
      }(pb_1.Message);

      _v.Params = Params;
    })(v1 || (v1 = _recovery.v1 || (_recovery.v1 = {})));
  })(recovery || (recovery = _kynno.recovery || (_kynno.recovery = {})));
})(kynno || (exports.kynno = kynno = {}));