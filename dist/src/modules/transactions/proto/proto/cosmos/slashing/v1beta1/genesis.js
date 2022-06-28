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

var dependency_2 = _interopRequireWildcard(require("./slashing"));

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
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2, 3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("signing_infos" in data && data.signing_infos != undefined) {
              _this.signing_infos = data.signing_infos;
            }

            if ("missed_blocks" in data && data.missed_blocks != undefined) {
              _this.missed_blocks = data.missed_blocks;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "signing_infos",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, SigningInfo, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "missed_blocks",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorMissedBlocks, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.signing_infos != null) {
              data.signing_infos = this.signing_infos.map(function (item) {
                return item.toObject();
              });
            }

            if (this.missed_blocks != null) {
              data.missed_blocks = this.missed_blocks.map(function (item) {
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
            if (this.signing_infos !== undefined) writer.writeRepeatedMessage(2, this.signing_infos, function (item) {
              return item.serialize(writer);
            });
            if (this.missed_blocks !== undefined) writer.writeRepeatedMessage(3, this.missed_blocks, function (item) {
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
              message.params = dependency_2.cosmos.slashing.v1beta1.Params.fromObject(data.params);
            }

            if (data.signing_infos != null) {
              message.signing_infos = data.signing_infos.map(function (item) {
                return SigningInfo.fromObject(item);
              });
            }

            if (data.missed_blocks != null) {
              message.missed_blocks = data.missed_blocks.map(function (item) {
                return ValidatorMissedBlocks.fromObject(item);
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
                    return message.params = dependency_2.cosmos.slashing.v1beta1.Params.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.signing_infos, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, SigningInfo.deserialize(reader), SigningInfo);
                  });
                  break;

                case 3:
                  reader.readMessage(message.missed_blocks, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, ValidatorMissedBlocks.deserialize(reader), ValidatorMissedBlocks);
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

      _v1beta.GenesisState = GenesisState;

      var SigningInfo = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(SigningInfo, _pb_1$Message2);

        var _super2 = _createSuper(SigningInfo);

        function SigningInfo(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, SigningInfo);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this3.address = data.address;
            }

            if ("validator_signing_info" in data && data.validator_signing_info != undefined) {
              _this3.validator_signing_info = data.validator_signing_info;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(SigningInfo, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_signing_info",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo, 2);
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.validator_signing_info != null) {
              data.validator_signing_info = this.validator_signing_info.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.validator_signing_info !== undefined) writer.writeMessage(2, this.validator_signing_info, function () {
              return _this4.validator_signing_info.serialize(writer);
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
            var message = new SigningInfo({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.validator_signing_info != null) {
              message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.fromObject(data.validator_signing_info);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SigningInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.validator_signing_info, function () {
                    return message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.deserialize(reader);
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
            return SigningInfo.deserialize(bytes);
          }
        }]);
        return SigningInfo;
      }(pb_1.Message);

      _v1beta.SigningInfo = SigningInfo;

      var ValidatorMissedBlocks = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(ValidatorMissedBlocks, _pb_1$Message3);

        var _super3 = _createSuper(ValidatorMissedBlocks);

        function ValidatorMissedBlocks(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, ValidatorMissedBlocks);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this5.address = data.address;
            }

            if ("missed_blocks" in data && data.missed_blocks != undefined) {
              _this5.missed_blocks = data.missed_blocks;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(ValidatorMissedBlocks, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "missed_blocks",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, MissedBlock, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject3) {
            function toObject() {
              return _toObject3.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject3.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.missed_blocks != null) {
              data.missed_blocks = this.missed_blocks.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.missed_blocks !== undefined) writer.writeRepeatedMessage(2, this.missed_blocks, function (item) {
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
            var message = new ValidatorMissedBlocks({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.missed_blocks != null) {
              message.missed_blocks = data.missed_blocks.map(function (item) {
                return MissedBlock.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValidatorMissedBlocks();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.missed_blocks, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, MissedBlock.deserialize(reader), MissedBlock);
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
            return ValidatorMissedBlocks.deserialize(bytes);
          }
        }]);
        return ValidatorMissedBlocks;
      }(pb_1.Message);

      _v1beta.ValidatorMissedBlocks = ValidatorMissedBlocks;

      var MissedBlock = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MissedBlock, _pb_1$Message4);

        var _super4 = _createSuper(MissedBlock);

        function MissedBlock(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MissedBlock);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("index" in data && data.index != undefined) {
              _this6.index = data.index;
            }

            if ("missed" in data && data.missed != undefined) {
              _this6.missed = data.missed;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(MissedBlock, [{
          key: "index",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "missed",
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

            if (this.index != null) {
              data.index = this.index;
            }

            if (this.missed != null) {
              data.missed = this.missed;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.index !== undefined) writer.writeInt64(1, this.index);
            if (this.missed !== undefined) writer.writeBool(2, this.missed);
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
            var message = new MissedBlock({});

            if (data.index != null) {
              message.index = data.index;
            }

            if (data.missed != null) {
              message.missed = data.missed;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MissedBlock();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.index = reader.readInt64();
                  break;

                case 2:
                  message.missed = reader.readBool();
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
            return MissedBlock.deserialize(bytes);
          }
        }]);
        return MissedBlock;
      }(pb_1.Message);

      _v1beta.MissedBlock = MissedBlock;
    })(v1beta1 || (v1beta1 = _slashing.v1beta1 || (_slashing.v1beta1 = {})));
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
})(cosmos || (exports.cosmos = cosmos = {}));