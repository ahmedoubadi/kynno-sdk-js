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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var evidence;

  (function (_evidence) {
    var v1beta1;

    (function (_v1beta) {
      var Equivocation = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Equivocation, _pb_1$Message);

        var _super = _createSuper(Equivocation);

        function Equivocation(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Equivocation);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("height" in data && data.height != undefined) {
              _this.height = data.height;
            }

            if ("time" in data && data.time != undefined) {
              _this.time = data.time;
            }

            if ("power" in data && data.power != undefined) {
              _this.power = data.power;
            }

            if ("consensus_address" in data && data.consensus_address != undefined) {
              _this.consensus_address = data.consensus_address;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Equivocation, [{
          key: "height",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "power",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "consensus_address",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
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

            if (this.height != null) {
              data.height = this.height;
            }

            if (this.time != null) {
              data.time = this.time.toObject();
            }

            if (this.power != null) {
              data.power = this.power;
            }

            if (this.consensus_address != null) {
              data.consensus_address = this.consensus_address;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined) writer.writeInt64(1, this.height);
            if (this.time !== undefined) writer.writeMessage(2, this.time, function () {
              return _this2.time.serialize(writer);
            });
            if (this.power !== undefined) writer.writeInt64(3, this.power);
            if (typeof this.consensus_address === "string" && this.consensus_address.length) writer.writeString(4, this.consensus_address);
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
            var message = new Equivocation({});

            if (data.height != null) {
              message.height = data.height;
            }

            if (data.time != null) {
              message.time = dependency_2.google.protobuf.Timestamp.fromObject(data.time);
            }

            if (data.power != null) {
              message.power = data.power;
            }

            if (data.consensus_address != null) {
              message.consensus_address = data.consensus_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Equivocation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.height = reader.readInt64();
                  break;

                case 2:
                  reader.readMessage(message.time, function () {
                    return message.time = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  message.power = reader.readInt64();
                  break;

                case 4:
                  message.consensus_address = reader.readString();
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
            return Equivocation.deserialize(bytes);
          }
        }]);
        return Equivocation;
      }(pb_1.Message);

      _v1beta.Equivocation = Equivocation;
    })(v1beta1 || (v1beta1 = _evidence.v1beta1 || (_evidence.v1beta1 = {})));
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
})(cosmos || (exports.cosmos = cosmos = {}));