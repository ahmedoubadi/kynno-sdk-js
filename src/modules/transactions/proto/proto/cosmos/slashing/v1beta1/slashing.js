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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var slashing;

  (function (_slashing) {
    var v1beta1;

    (function (_v1beta) {
      var ValidatorSigningInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(ValidatorSigningInfo, _pb_1$Message);

        var _super = _createSuper(ValidatorSigningInfo);

        function ValidatorSigningInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, ValidatorSigningInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this.address = data.address;
            }

            if ("start_height" in data && data.start_height != undefined) {
              _this.start_height = data.start_height;
            }

            if ("index_offset" in data && data.index_offset != undefined) {
              _this.index_offset = data.index_offset;
            }

            if ("jailed_until" in data && data.jailed_until != undefined) {
              _this.jailed_until = data.jailed_until;
            }

            if ("tombstoned" in data && data.tombstoned != undefined) {
              _this.tombstoned = data.tombstoned;
            }

            if ("missed_blocks_counter" in data && data.missed_blocks_counter != undefined) {
              _this.missed_blocks_counter = data.missed_blocks_counter;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(ValidatorSigningInfo, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "start_height",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "index_offset",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "jailed_until",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
          }
        }, {
          key: "tombstoned",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "missed_blocks_counter",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.start_height != null) {
              data.start_height = this.start_height;
            }

            if (this.index_offset != null) {
              data.index_offset = this.index_offset;
            }

            if (this.jailed_until != null) {
              data.jailed_until = this.jailed_until.toObject();
            }

            if (this.tombstoned != null) {
              data.tombstoned = this.tombstoned;
            }

            if (this.missed_blocks_counter != null) {
              data.missed_blocks_counter = this.missed_blocks_counter;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.start_height !== undefined) writer.writeInt64(2, this.start_height);
            if (this.index_offset !== undefined) writer.writeInt64(3, this.index_offset);
            if (this.jailed_until !== undefined) writer.writeMessage(4, this.jailed_until, function () {
              return _this2.jailed_until.serialize(writer);
            });
            if (this.tombstoned !== undefined) writer.writeBool(5, this.tombstoned);
            if (this.missed_blocks_counter !== undefined) writer.writeInt64(6, this.missed_blocks_counter);
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
            var message = new ValidatorSigningInfo({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.start_height != null) {
              message.start_height = data.start_height;
            }

            if (data.index_offset != null) {
              message.index_offset = data.index_offset;
            }

            if (data.jailed_until != null) {
              message.jailed_until = dependency_3.google.protobuf.Timestamp.fromObject(data.jailed_until);
            }

            if (data.tombstoned != null) {
              message.tombstoned = data.tombstoned;
            }

            if (data.missed_blocks_counter != null) {
              message.missed_blocks_counter = data.missed_blocks_counter;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorSigningInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  message.start_height = reader.readInt64();
                  break;

                case 3:
                  message.index_offset = reader.readInt64();
                  break;

                case 4:
                  reader.readMessage(message.jailed_until, function () {
                    return message.jailed_until = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 5:
                  message.tombstoned = reader.readBool();
                  break;

                case 6:
                  message.missed_blocks_counter = reader.readInt64();
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
            return ValidatorSigningInfo.deserialize(bytes);
          }
        }]);
        return ValidatorSigningInfo;
      }(pb_1.Message);

      _v1beta.ValidatorSigningInfo = ValidatorSigningInfo;

      var Params = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Params, _pb_1$Message2);

        var _super2 = _createSuper(Params);

        function Params(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Params);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("signed_blocks_window" in data && data.signed_blocks_window != undefined) {
              _this3.signed_blocks_window = data.signed_blocks_window;
            }

            if ("min_signed_per_window" in data && data.min_signed_per_window != undefined) {
              _this3.min_signed_per_window = data.min_signed_per_window;
            }

            if ("downtime_jail_duration" in data && data.downtime_jail_duration != undefined) {
              _this3.downtime_jail_duration = data.downtime_jail_duration;
            }

            if ("slash_fraction_double_sign" in data && data.slash_fraction_double_sign != undefined) {
              _this3.slash_fraction_double_sign = data.slash_fraction_double_sign;
            }

            if ("slash_fraction_downtime" in data && data.slash_fraction_downtime != undefined) {
              _this3.slash_fraction_downtime = data.slash_fraction_downtime;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Params, [{
          key: "signed_blocks_window",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "min_signed_per_window",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "downtime_jail_duration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "slash_fraction_double_sign",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "slash_fraction_downtime",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
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

            if (this.signed_blocks_window != null) {
              data.signed_blocks_window = this.signed_blocks_window;
            }

            if (this.min_signed_per_window != null) {
              data.min_signed_per_window = this.min_signed_per_window;
            }

            if (this.downtime_jail_duration != null) {
              data.downtime_jail_duration = this.downtime_jail_duration.toObject();
            }

            if (this.slash_fraction_double_sign != null) {
              data.slash_fraction_double_sign = this.slash_fraction_double_sign;
            }

            if (this.slash_fraction_downtime != null) {
              data.slash_fraction_downtime = this.slash_fraction_downtime;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.signed_blocks_window !== undefined) writer.writeInt64(1, this.signed_blocks_window);
            if (this.min_signed_per_window !== undefined) writer.writeBytes(2, this.min_signed_per_window);
            if (this.downtime_jail_duration !== undefined) writer.writeMessage(3, this.downtime_jail_duration, function () {
              return _this4.downtime_jail_duration.serialize(writer);
            });
            if (this.slash_fraction_double_sign !== undefined) writer.writeBytes(4, this.slash_fraction_double_sign);
            if (this.slash_fraction_downtime !== undefined) writer.writeBytes(5, this.slash_fraction_downtime);
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

            if (data.signed_blocks_window != null) {
              message.signed_blocks_window = data.signed_blocks_window;
            }

            if (data.min_signed_per_window != null) {
              message.min_signed_per_window = data.min_signed_per_window;
            }

            if (data.downtime_jail_duration != null) {
              message.downtime_jail_duration = dependency_2.google.protobuf.Duration.fromObject(data.downtime_jail_duration);
            }

            if (data.slash_fraction_double_sign != null) {
              message.slash_fraction_double_sign = data.slash_fraction_double_sign;
            }

            if (data.slash_fraction_downtime != null) {
              message.slash_fraction_downtime = data.slash_fraction_downtime;
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
                  message.signed_blocks_window = reader.readInt64();
                  break;

                case 2:
                  message.min_signed_per_window = reader.readBytes();
                  break;

                case 3:
                  reader.readMessage(message.downtime_jail_duration, function () {
                    return message.downtime_jail_duration = dependency_2.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 4:
                  message.slash_fraction_double_sign = reader.readBytes();
                  break;

                case 5:
                  message.slash_fraction_downtime = reader.readBytes();
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

      _v1beta.Params = Params;
    })(v1beta1 || (v1beta1 = _slashing.v1beta1 || (_slashing.v1beta1 = {})));
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
})(cosmos || (exports.cosmos = cosmos = {}));