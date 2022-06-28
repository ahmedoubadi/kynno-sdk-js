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

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_4 = _interopRequireWildcard(require("./claims"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var claims;

  (function (_claims) {
    var v1;

    (function (_v) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("claims_records" in data && data.claims_records != undefined) {
              _this.claims_records = data.claims_records;
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
          key: "claims_records",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.kynno.claims.v1.ClaimsRecordAddress, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.claims_records != null) {
              data.claims_records = this.claims_records.map(function (item) {
                return item.toObject();
              });
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
            if (this.claims_records !== undefined) writer.writeRepeatedMessage(2, this.claims_records, function (item) {
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
            var message = new GenesisState({});

            if (data.params != null) {
              message.params = Params.fromObject(data.params);
            }

            if (data.claims_records != null) {
              message.claims_records = data.claims_records.map(function (item) {
                return dependency_4.kynno.claims.v1.ClaimsRecordAddress.fromObject(item);
              });
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

                case 2:
                  reader.readMessage(message.claims_records, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.kynno.claims.v1.ClaimsRecordAddress.deserialize(reader), dependency_4.kynno.claims.v1.ClaimsRecordAddress);
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
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [6, 7], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("enable_claims" in data && data.enable_claims != undefined) {
              _this3.enable_claims = data.enable_claims;
            }

            if ("airdrop_start_time" in data && data.airdrop_start_time != undefined) {
              _this3.airdrop_start_time = data.airdrop_start_time;
            }

            if ("duration_until_decay" in data && data.duration_until_decay != undefined) {
              _this3.duration_until_decay = data.duration_until_decay;
            }

            if ("duration_of_decay" in data && data.duration_of_decay != undefined) {
              _this3.duration_of_decay = data.duration_of_decay;
            }

            if ("claims_denom" in data && data.claims_denom != undefined) {
              _this3.claims_denom = data.claims_denom;
            }

            if ("authorized_channels" in data && data.authorized_channels != undefined) {
              _this3.authorized_channels = data.authorized_channels;
            }

            if ("evm_channels" in data && data.evm_channels != undefined) {
              _this3.evm_channels = data.evm_channels;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Params, [{
          key: "enable_claims",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "airdrop_start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "duration_until_decay",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "duration_of_decay",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
          }
        }, {
          key: "claims_denom",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "authorized_channels",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "evm_channels",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
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

            if (this.enable_claims != null) {
              data.enable_claims = this.enable_claims;
            }

            if (this.airdrop_start_time != null) {
              data.airdrop_start_time = this.airdrop_start_time.toObject();
            }

            if (this.duration_until_decay != null) {
              data.duration_until_decay = this.duration_until_decay.toObject();
            }

            if (this.duration_of_decay != null) {
              data.duration_of_decay = this.duration_of_decay.toObject();
            }

            if (this.claims_denom != null) {
              data.claims_denom = this.claims_denom;
            }

            if (this.authorized_channels != null) {
              data.authorized_channels = this.authorized_channels;
            }

            if (this.evm_channels != null) {
              data.evm_channels = this.evm_channels;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.enable_claims !== undefined) writer.writeBool(1, this.enable_claims);
            if (this.airdrop_start_time !== undefined) writer.writeMessage(2, this.airdrop_start_time, function () {
              return _this4.airdrop_start_time.serialize(writer);
            });
            if (this.duration_until_decay !== undefined) writer.writeMessage(3, this.duration_until_decay, function () {
              return _this4.duration_until_decay.serialize(writer);
            });
            if (this.duration_of_decay !== undefined) writer.writeMessage(4, this.duration_of_decay, function () {
              return _this4.duration_of_decay.serialize(writer);
            });
            if (typeof this.claims_denom === "string" && this.claims_denom.length) writer.writeString(5, this.claims_denom);
            if (this.authorized_channels !== undefined) writer.writeRepeatedString(6, this.authorized_channels);
            if (this.evm_channels !== undefined) writer.writeRepeatedString(7, this.evm_channels);
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

            if (data.enable_claims != null) {
              message.enable_claims = data.enable_claims;
            }

            if (data.airdrop_start_time != null) {
              message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.airdrop_start_time);
            }

            if (data.duration_until_decay != null) {
              message.duration_until_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_until_decay);
            }

            if (data.duration_of_decay != null) {
              message.duration_of_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_of_decay);
            }

            if (data.claims_denom != null) {
              message.claims_denom = data.claims_denom;
            }

            if (data.authorized_channels != null) {
              message.authorized_channels = data.authorized_channels;
            }

            if (data.evm_channels != null) {
              message.evm_channels = data.evm_channels;
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
                  message.enable_claims = reader.readBool();
                  break;

                case 2:
                  reader.readMessage(message.airdrop_start_time, function () {
                    return message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.duration_until_decay, function () {
                    return message.duration_until_decay = dependency_2.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.duration_of_decay, function () {
                    return message.duration_of_decay = dependency_2.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 5:
                  message.claims_denom = reader.readString();
                  break;

                case 6:
                  pb_1.Message.addToRepeatedField(message, 6, reader.readString());
                  break;

                case 7:
                  pb_1.Message.addToRepeatedField(message, 7, reader.readString());
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
    })(v1 || (v1 = _claims.v1 || (_claims.v1 = {})));
  })(claims || (claims = _kynno.claims || (_kynno.claims = {})));
})(kynno || (exports.kynno = kynno = {}));