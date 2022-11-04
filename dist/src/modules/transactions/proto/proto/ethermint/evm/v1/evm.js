"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ethermint = void 0;

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

var ethermint;
exports.ethermint = ethermint;

(function (_ethermint) {
  var evm;

  (function (_evm) {
    var v1;

    (function (_v) {
      var Params = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Params, _pb_1$Message);

        var _super = _createSuper(Params);

        function Params(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Params);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("evm_denom" in data && data.evm_denom != undefined) {
              _this.evm_denom = data.evm_denom;
            }

            if ("enable_create" in data && data.enable_create != undefined) {
              _this.enable_create = data.enable_create;
            }

            if ("enable_call" in data && data.enable_call != undefined) {
              _this.enable_call = data.enable_call;
            }

            if ("extra_eips" in data && data.extra_eips != undefined) {
              _this.extra_eips = data.extra_eips;
            }

            if ("chain_config" in data && data.chain_config != undefined) {
              _this.chain_config = data.chain_config;
            }

            if ("allow_unprotected_txs" in data && data.allow_unprotected_txs != undefined) {
              _this.allow_unprotected_txs = data.allow_unprotected_txs;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Params, [{
          key: "evm_denom",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "enable_create",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "enable_call",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "extra_eips",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "chain_config",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ChainConfig, 5);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
          }
        }, {
          key: "allow_unprotected_txs",
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

            if (this.evm_denom != null) {
              data.evm_denom = this.evm_denom;
            }

            if (this.enable_create != null) {
              data.enable_create = this.enable_create;
            }

            if (this.enable_call != null) {
              data.enable_call = this.enable_call;
            }

            if (this.extra_eips != null) {
              data.extra_eips = this.extra_eips;
            }

            if (this.chain_config != null) {
              data.chain_config = this.chain_config.toObject();
            }

            if (this.allow_unprotected_txs != null) {
              data.allow_unprotected_txs = this.allow_unprotected_txs;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.evm_denom === "string" && this.evm_denom.length) writer.writeString(1, this.evm_denom);
            if (this.enable_create !== undefined) writer.writeBool(2, this.enable_create);
            if (this.enable_call !== undefined) writer.writeBool(3, this.enable_call);
            if (this.extra_eips !== undefined) writer.writePackedInt64(4, this.extra_eips);
            if (this.chain_config !== undefined) writer.writeMessage(5, this.chain_config, function () {
              return _this2.chain_config.serialize(writer);
            });
            if (this.allow_unprotected_txs !== undefined) writer.writeBool(6, this.allow_unprotected_txs);
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

            if (data.evm_denom != null) {
              message.evm_denom = data.evm_denom;
            }

            if (data.enable_create != null) {
              message.enable_create = data.enable_create;
            }

            if (data.enable_call != null) {
              message.enable_call = data.enable_call;
            }

            if (data.extra_eips != null) {
              message.extra_eips = data.extra_eips;
            }

            if (data.chain_config != null) {
              message.chain_config = ChainConfig.fromObject(data.chain_config);
            }

            if (data.allow_unprotected_txs != null) {
              message.allow_unprotected_txs = data.allow_unprotected_txs;
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
                  message.evm_denom = reader.readString();
                  break;

                case 2:
                  message.enable_create = reader.readBool();
                  break;

                case 3:
                  message.enable_call = reader.readBool();
                  break;

                case 4:
                  message.extra_eips = reader.readPackedInt64();
                  break;

                case 5:
                  reader.readMessage(message.chain_config, function () {
                    return message.chain_config = ChainConfig.deserialize(reader);
                  });
                  break;

                case 6:
                  message.allow_unprotected_txs = reader.readBool();
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

      var ChainConfig = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ChainConfig, _pb_1$Message2);

        var _super2 = _createSuper(ChainConfig);

        function ChainConfig(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ChainConfig);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("homestead_block" in data && data.homestead_block != undefined) {
              _this3.homestead_block = data.homestead_block;
            }

            if ("dao_fork_block" in data && data.dao_fork_block != undefined) {
              _this3.dao_fork_block = data.dao_fork_block;
            }

            if ("dao_fork_support" in data && data.dao_fork_support != undefined) {
              _this3.dao_fork_support = data.dao_fork_support;
            }

            if ("eip150_block" in data && data.eip150_block != undefined) {
              _this3.eip150_block = data.eip150_block;
            }

            if ("eip150_hash" in data && data.eip150_hash != undefined) {
              _this3.eip150_hash = data.eip150_hash;
            }

            if ("eip155_block" in data && data.eip155_block != undefined) {
              _this3.eip155_block = data.eip155_block;
            }

            if ("eip158_block" in data && data.eip158_block != undefined) {
              _this3.eip158_block = data.eip158_block;
            }

            if ("byzantium_block" in data && data.byzantium_block != undefined) {
              _this3.byzantium_block = data.byzantium_block;
            }

            if ("constantinople_block" in data && data.constantinople_block != undefined) {
              _this3.constantinople_block = data.constantinople_block;
            }

            if ("petersburg_block" in data && data.petersburg_block != undefined) {
              _this3.petersburg_block = data.petersburg_block;
            }

            if ("istanbul_block" in data && data.istanbul_block != undefined) {
              _this3.istanbul_block = data.istanbul_block;
            }

            if ("muir_glacier_block" in data && data.muir_glacier_block != undefined) {
              _this3.muir_glacier_block = data.muir_glacier_block;
            }

            if ("berlin_block" in data && data.berlin_block != undefined) {
              _this3.berlin_block = data.berlin_block;
            }

            if ("london_block" in data && data.london_block != undefined) {
              _this3.london_block = data.london_block;
            }

            if ("arrow_glacier_block" in data && data.arrow_glacier_block != undefined) {
              _this3.arrow_glacier_block = data.arrow_glacier_block;
            }

            if ("merge_fork_block" in data && data.merge_fork_block != undefined) {
              _this3.merge_fork_block = data.merge_fork_block;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ChainConfig, [{
          key: "homestead_block",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "dao_fork_block",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "dao_fork_support",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "eip150_block",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "eip150_hash",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "eip155_block",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "eip158_block",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "byzantium_block",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "constantinople_block",
          get: function get() {
            return pb_1.Message.getField(this, 9);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 9, value);
          }
        }, {
          key: "petersburg_block",
          get: function get() {
            return pb_1.Message.getField(this, 10);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 10, value);
          }
        }, {
          key: "istanbul_block",
          get: function get() {
            return pb_1.Message.getField(this, 11);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 11, value);
          }
        }, {
          key: "muir_glacier_block",
          get: function get() {
            return pb_1.Message.getField(this, 12);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 12, value);
          }
        }, {
          key: "berlin_block",
          get: function get() {
            return pb_1.Message.getField(this, 13);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 13, value);
          }
        }, {
          key: "london_block",
          get: function get() {
            return pb_1.Message.getField(this, 17);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 17, value);
          }
        }, {
          key: "arrow_glacier_block",
          get: function get() {
            return pb_1.Message.getField(this, 18);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 18, value);
          }
        }, {
          key: "merge_fork_block",
          get: function get() {
            return pb_1.Message.getField(this, 19);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 19, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.homestead_block != null) {
              data.homestead_block = this.homestead_block;
            }

            if (this.dao_fork_block != null) {
              data.dao_fork_block = this.dao_fork_block;
            }

            if (this.dao_fork_support != null) {
              data.dao_fork_support = this.dao_fork_support;
            }

            if (this.eip150_block != null) {
              data.eip150_block = this.eip150_block;
            }

            if (this.eip150_hash != null) {
              data.eip150_hash = this.eip150_hash;
            }

            if (this.eip155_block != null) {
              data.eip155_block = this.eip155_block;
            }

            if (this.eip158_block != null) {
              data.eip158_block = this.eip158_block;
            }

            if (this.byzantium_block != null) {
              data.byzantium_block = this.byzantium_block;
            }

            if (this.constantinople_block != null) {
              data.constantinople_block = this.constantinople_block;
            }

            if (this.petersburg_block != null) {
              data.petersburg_block = this.petersburg_block;
            }

            if (this.istanbul_block != null) {
              data.istanbul_block = this.istanbul_block;
            }

            if (this.muir_glacier_block != null) {
              data.muir_glacier_block = this.muir_glacier_block;
            }

            if (this.berlin_block != null) {
              data.berlin_block = this.berlin_block;
            }

            if (this.london_block != null) {
              data.london_block = this.london_block;
            }

            if (this.arrow_glacier_block != null) {
              data.arrow_glacier_block = this.arrow_glacier_block;
            }

            if (this.merge_fork_block != null) {
              data.merge_fork_block = this.merge_fork_block;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.homestead_block === "string" && this.homestead_block.length) writer.writeString(1, this.homestead_block);
            if (typeof this.dao_fork_block === "string" && this.dao_fork_block.length) writer.writeString(2, this.dao_fork_block);
            if (this.dao_fork_support !== undefined) writer.writeBool(3, this.dao_fork_support);
            if (typeof this.eip150_block === "string" && this.eip150_block.length) writer.writeString(4, this.eip150_block);
            if (typeof this.eip150_hash === "string" && this.eip150_hash.length) writer.writeString(5, this.eip150_hash);
            if (typeof this.eip155_block === "string" && this.eip155_block.length) writer.writeString(6, this.eip155_block);
            if (typeof this.eip158_block === "string" && this.eip158_block.length) writer.writeString(7, this.eip158_block);
            if (typeof this.byzantium_block === "string" && this.byzantium_block.length) writer.writeString(8, this.byzantium_block);
            if (typeof this.constantinople_block === "string" && this.constantinople_block.length) writer.writeString(9, this.constantinople_block);
            if (typeof this.petersburg_block === "string" && this.petersburg_block.length) writer.writeString(10, this.petersburg_block);
            if (typeof this.istanbul_block === "string" && this.istanbul_block.length) writer.writeString(11, this.istanbul_block);
            if (typeof this.muir_glacier_block === "string" && this.muir_glacier_block.length) writer.writeString(12, this.muir_glacier_block);
            if (typeof this.berlin_block === "string" && this.berlin_block.length) writer.writeString(13, this.berlin_block);
            if (typeof this.london_block === "string" && this.london_block.length) writer.writeString(17, this.london_block);
            if (typeof this.arrow_glacier_block === "string" && this.arrow_glacier_block.length) writer.writeString(18, this.arrow_glacier_block);
            if (typeof this.merge_fork_block === "string" && this.merge_fork_block.length) writer.writeString(19, this.merge_fork_block);
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
            var message = new ChainConfig({});

            if (data.homestead_block != null) {
              message.homestead_block = data.homestead_block;
            }

            if (data.dao_fork_block != null) {
              message.dao_fork_block = data.dao_fork_block;
            }

            if (data.dao_fork_support != null) {
              message.dao_fork_support = data.dao_fork_support;
            }

            if (data.eip150_block != null) {
              message.eip150_block = data.eip150_block;
            }

            if (data.eip150_hash != null) {
              message.eip150_hash = data.eip150_hash;
            }

            if (data.eip155_block != null) {
              message.eip155_block = data.eip155_block;
            }

            if (data.eip158_block != null) {
              message.eip158_block = data.eip158_block;
            }

            if (data.byzantium_block != null) {
              message.byzantium_block = data.byzantium_block;
            }

            if (data.constantinople_block != null) {
              message.constantinople_block = data.constantinople_block;
            }

            if (data.petersburg_block != null) {
              message.petersburg_block = data.petersburg_block;
            }

            if (data.istanbul_block != null) {
              message.istanbul_block = data.istanbul_block;
            }

            if (data.muir_glacier_block != null) {
              message.muir_glacier_block = data.muir_glacier_block;
            }

            if (data.berlin_block != null) {
              message.berlin_block = data.berlin_block;
            }

            if (data.london_block != null) {
              message.london_block = data.london_block;
            }

            if (data.arrow_glacier_block != null) {
              message.arrow_glacier_block = data.arrow_glacier_block;
            }

            if (data.merge_fork_block != null) {
              message.merge_fork_block = data.merge_fork_block;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ChainConfig();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.homestead_block = reader.readString();
                  break;

                case 2:
                  message.dao_fork_block = reader.readString();
                  break;

                case 3:
                  message.dao_fork_support = reader.readBool();
                  break;

                case 4:
                  message.eip150_block = reader.readString();
                  break;

                case 5:
                  message.eip150_hash = reader.readString();
                  break;

                case 6:
                  message.eip155_block = reader.readString();
                  break;

                case 7:
                  message.eip158_block = reader.readString();
                  break;

                case 8:
                  message.byzantium_block = reader.readString();
                  break;

                case 9:
                  message.constantinople_block = reader.readString();
                  break;

                case 10:
                  message.petersburg_block = reader.readString();
                  break;

                case 11:
                  message.istanbul_block = reader.readString();
                  break;

                case 12:
                  message.muir_glacier_block = reader.readString();
                  break;

                case 13:
                  message.berlin_block = reader.readString();
                  break;

                case 17:
                  message.london_block = reader.readString();
                  break;

                case 18:
                  message.arrow_glacier_block = reader.readString();
                  break;

                case 19:
                  message.merge_fork_block = reader.readString();
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
            return ChainConfig.deserialize(bytes);
          }
        }]);
        return ChainConfig;
      }(pb_1.Message);

      _v.ChainConfig = ChainConfig;

      var State = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(State, _pb_1$Message3);

        var _super3 = _createSuper(State);

        function State(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, State);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("key" in data && data.key != undefined) {
              _this4.key = data.key;
            }

            if ("value" in data && data.value != undefined) {
              _this4.value = data.value;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(State, [{
          key: "key",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "value",
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

            if (this.key != null) {
              data.key = this.key;
            }

            if (this.value != null) {
              data.value = this.value;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.key === "string" && this.key.length) writer.writeString(1, this.key);
            if (typeof this.value === "string" && this.value.length) writer.writeString(2, this.value);
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
            var message = new State({});

            if (data.key != null) {
              message.key = data.key;
            }

            if (data.value != null) {
              message.value = data.value;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new State();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.key = reader.readString();
                  break;

                case 2:
                  message.value = reader.readString();
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
            return State.deserialize(bytes);
          }
        }]);
        return State;
      }(pb_1.Message);

      _v.State = State;

      var TransactionLogs = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(TransactionLogs, _pb_1$Message4);

        var _super4 = _createSuper(TransactionLogs);

        function TransactionLogs(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, TransactionLogs);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hash" in data && data.hash != undefined) {
              _this5.hash = data.hash;
            }

            if ("logs" in data && data.logs != undefined) {
              _this5.logs = data.logs;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(TransactionLogs, [{
          key: "hash",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "logs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, Log, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.hash != null) {
              data.hash = this.hash;
            }

            if (this.logs != null) {
              data.logs = this.logs.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.hash === "string" && this.hash.length) writer.writeString(1, this.hash);
            if (this.logs !== undefined) writer.writeRepeatedMessage(2, this.logs, function (item) {
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
            var message = new TransactionLogs({});

            if (data.hash != null) {
              message.hash = data.hash;
            }

            if (data.logs != null) {
              message.logs = data.logs.map(function (item) {
                return Log.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TransactionLogs();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.hash = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.logs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, Log.deserialize(reader), Log);
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
            return TransactionLogs.deserialize(bytes);
          }
        }]);
        return TransactionLogs;
      }(pb_1.Message);

      _v.TransactionLogs = TransactionLogs;

      var Log = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(Log, _pb_1$Message5);

        var _super5 = _createSuper(Log);

        function Log(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, Log);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this6.address = data.address;
            }

            if ("topics" in data && data.topics != undefined) {
              _this6.topics = data.topics;
            }

            if ("data" in data && data.data != undefined) {
              _this6.data = data.data;
            }

            if ("block_number" in data && data.block_number != undefined) {
              _this6.block_number = data.block_number;
            }

            if ("tx_hash" in data && data.tx_hash != undefined) {
              _this6.tx_hash = data.tx_hash;
            }

            if ("tx_index" in data && data.tx_index != undefined) {
              _this6.tx_index = data.tx_index;
            }

            if ("block_hash" in data && data.block_hash != undefined) {
              _this6.block_hash = data.block_hash;
            }

            if ("index" in data && data.index != undefined) {
              _this6.index = data.index;
            }

            if ("removed" in data && data.removed != undefined) {
              _this6.removed = data.removed;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(Log, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "topics",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "data",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "block_number",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "tx_hash",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "tx_index",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "block_hash",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "index",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "removed",
          get: function get() {
            return pb_1.Message.getField(this, 9);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 9, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.topics != null) {
              data.topics = this.topics;
            }

            if (this.data != null) {
              data.data = this.data;
            }

            if (this.block_number != null) {
              data.block_number = this.block_number;
            }

            if (this.tx_hash != null) {
              data.tx_hash = this.tx_hash;
            }

            if (this.tx_index != null) {
              data.tx_index = this.tx_index;
            }

            if (this.block_hash != null) {
              data.block_hash = this.block_hash;
            }

            if (this.index != null) {
              data.index = this.index;
            }

            if (this.removed != null) {
              data.removed = this.removed;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.topics !== undefined) writer.writeRepeatedString(2, this.topics);
            if (this.data !== undefined) writer.writeBytes(3, this.data);
            if (this.block_number !== undefined) writer.writeUint64(4, this.block_number);
            if (typeof this.tx_hash === "string" && this.tx_hash.length) writer.writeString(5, this.tx_hash);
            if (this.tx_index !== undefined) writer.writeUint64(6, this.tx_index);
            if (typeof this.block_hash === "string" && this.block_hash.length) writer.writeString(7, this.block_hash);
            if (this.index !== undefined) writer.writeUint64(8, this.index);
            if (this.removed !== undefined) writer.writeBool(9, this.removed);
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
            var message = new Log({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.topics != null) {
              message.topics = data.topics;
            }

            if (data.data != null) {
              message.data = data.data;
            }

            if (data.block_number != null) {
              message.block_number = data.block_number;
            }

            if (data.tx_hash != null) {
              message.tx_hash = data.tx_hash;
            }

            if (data.tx_index != null) {
              message.tx_index = data.tx_index;
            }

            if (data.block_hash != null) {
              message.block_hash = data.block_hash;
            }

            if (data.index != null) {
              message.index = data.index;
            }

            if (data.removed != null) {
              message.removed = data.removed;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Log();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                  break;

                case 3:
                  message.data = reader.readBytes();
                  break;

                case 4:
                  message.block_number = reader.readUint64();
                  break;

                case 5:
                  message.tx_hash = reader.readString();
                  break;

                case 6:
                  message.tx_index = reader.readUint64();
                  break;

                case 7:
                  message.block_hash = reader.readString();
                  break;

                case 8:
                  message.index = reader.readUint64();
                  break;

                case 9:
                  message.removed = reader.readBool();
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
            return Log.deserialize(bytes);
          }
        }]);
        return Log;
      }(pb_1.Message);

      _v.Log = Log;

      var TxResult = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(TxResult, _pb_1$Message6);

        var _super6 = _createSuper(TxResult);

        function TxResult(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, TxResult);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this7.contract_address = data.contract_address;
            }

            if ("bloom" in data && data.bloom != undefined) {
              _this7.bloom = data.bloom;
            }

            if ("tx_logs" in data && data.tx_logs != undefined) {
              _this7.tx_logs = data.tx_logs;
            }

            if ("ret" in data && data.ret != undefined) {
              _this7.ret = data.ret;
            }

            if ("reverted" in data && data.reverted != undefined) {
              _this7.reverted = data.reverted;
            }

            if ("gas_used" in data && data.gas_used != undefined) {
              _this7.gas_used = data.gas_used;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(TxResult, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "bloom",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "tx_logs",
          get: function get() {
            return pb_1.Message.getWrapperField(this, TransactionLogs, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "ret",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "reverted",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "gas_used",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.bloom != null) {
              data.bloom = this.bloom;
            }

            if (this.tx_logs != null) {
              data.tx_logs = this.tx_logs.toObject();
            }

            if (this.ret != null) {
              data.ret = this.ret;
            }

            if (this.reverted != null) {
              data.reverted = this.reverted;
            }

            if (this.gas_used != null) {
              data.gas_used = this.gas_used;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this8 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (this.bloom !== undefined) writer.writeBytes(2, this.bloom);
            if (this.tx_logs !== undefined) writer.writeMessage(3, this.tx_logs, function () {
              return _this8.tx_logs.serialize(writer);
            });
            if (this.ret !== undefined) writer.writeBytes(4, this.ret);
            if (this.reverted !== undefined) writer.writeBool(5, this.reverted);
            if (this.gas_used !== undefined) writer.writeUint64(6, this.gas_used);
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
            var message = new TxResult({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.bloom != null) {
              message.bloom = data.bloom;
            }

            if (data.tx_logs != null) {
              message.tx_logs = TransactionLogs.fromObject(data.tx_logs);
            }

            if (data.ret != null) {
              message.ret = data.ret;
            }

            if (data.reverted != null) {
              message.reverted = data.reverted;
            }

            if (data.gas_used != null) {
              message.gas_used = data.gas_used;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TxResult();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.bloom = reader.readBytes();
                  break;

                case 3:
                  reader.readMessage(message.tx_logs, function () {
                    return message.tx_logs = TransactionLogs.deserialize(reader);
                  });
                  break;

                case 4:
                  message.ret = reader.readBytes();
                  break;

                case 5:
                  message.reverted = reader.readBool();
                  break;

                case 6:
                  message.gas_used = reader.readUint64();
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
            return TxResult.deserialize(bytes);
          }
        }]);
        return TxResult;
      }(pb_1.Message);

      _v.TxResult = TxResult;

      var AccessTuple = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(AccessTuple, _pb_1$Message7);

        var _super7 = _createSuper(AccessTuple);

        function AccessTuple(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, AccessTuple);
          _this9 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this9.address = data.address;
            }

            if ("storage_keys" in data && data.storage_keys != undefined) {
              _this9.storage_keys = data.storage_keys;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(AccessTuple, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "storage_keys",
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.storage_keys != null) {
              data.storage_keys = this.storage_keys;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.storage_keys !== undefined) writer.writeRepeatedString(2, this.storage_keys);
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
            var message = new AccessTuple({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.storage_keys != null) {
              message.storage_keys = data.storage_keys;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new AccessTuple();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return AccessTuple.deserialize(bytes);
          }
        }]);
        return AccessTuple;
      }(pb_1.Message);

      _v.AccessTuple = AccessTuple;

      var TraceConfig = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(TraceConfig, _pb_1$Message8);

        var _super8 = _createSuper(TraceConfig);

        function TraceConfig(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, TraceConfig);
          _this10 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tracer" in data && data.tracer != undefined) {
              _this10.tracer = data.tracer;
            }

            if ("timeout" in data && data.timeout != undefined) {
              _this10.timeout = data.timeout;
            }

            if ("reexec" in data && data.reexec != undefined) {
              _this10.reexec = data.reexec;
            }

            if ("disable_stack" in data && data.disable_stack != undefined) {
              _this10.disable_stack = data.disable_stack;
            }

            if ("disable_storage" in data && data.disable_storage != undefined) {
              _this10.disable_storage = data.disable_storage;
            }

            if ("debug" in data && data.debug != undefined) {
              _this10.debug = data.debug;
            }

            if ("limit" in data && data.limit != undefined) {
              _this10.limit = data.limit;
            }

            if ("overrides" in data && data.overrides != undefined) {
              _this10.overrides = data.overrides;
            }

            if ("enable_memory" in data && data.enable_memory != undefined) {
              _this10.enable_memory = data.enable_memory;
            }

            if ("enable_return_data" in data && data.enable_return_data != undefined) {
              _this10.enable_return_data = data.enable_return_data;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(TraceConfig, [{
          key: "tracer",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "timeout",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "reexec",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "disable_stack",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "disable_storage",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "debug",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "limit",
          get: function get() {
            return pb_1.Message.getField(this, 9);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 9, value);
          }
        }, {
          key: "overrides",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ChainConfig, 10);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 10, value);
          }
        }, {
          key: "enable_memory",
          get: function get() {
            return pb_1.Message.getField(this, 11);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 11, value);
          }
        }, {
          key: "enable_return_data",
          get: function get() {
            return pb_1.Message.getField(this, 12);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 12, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject4) {
            function toObject() {
              return _toObject4.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject4.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.tracer != null) {
              data.tracer = this.tracer;
            }

            if (this.timeout != null) {
              data.timeout = this.timeout;
            }

            if (this.reexec != null) {
              data.reexec = this.reexec;
            }

            if (this.disable_stack != null) {
              data.disable_stack = this.disable_stack;
            }

            if (this.disable_storage != null) {
              data.disable_storage = this.disable_storage;
            }

            if (this.debug != null) {
              data.debug = this.debug;
            }

            if (this.limit != null) {
              data.limit = this.limit;
            }

            if (this.overrides != null) {
              data.overrides = this.overrides.toObject();
            }

            if (this.enable_memory != null) {
              data.enable_memory = this.enable_memory;
            }

            if (this.enable_return_data != null) {
              data.enable_return_data = this.enable_return_data;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.tracer === "string" && this.tracer.length) writer.writeString(1, this.tracer);
            if (typeof this.timeout === "string" && this.timeout.length) writer.writeString(2, this.timeout);
            if (this.reexec !== undefined) writer.writeUint64(3, this.reexec);
            if (this.disable_stack !== undefined) writer.writeBool(5, this.disable_stack);
            if (this.disable_storage !== undefined) writer.writeBool(6, this.disable_storage);
            if (this.debug !== undefined) writer.writeBool(8, this.debug);
            if (this.limit !== undefined) writer.writeInt32(9, this.limit);
            if (this.overrides !== undefined) writer.writeMessage(10, this.overrides, function () {
              return _this11.overrides.serialize(writer);
            });
            if (this.enable_memory !== undefined) writer.writeBool(11, this.enable_memory);
            if (this.enable_return_data !== undefined) writer.writeBool(12, this.enable_return_data);
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
            var message = new TraceConfig({});

            if (data.tracer != null) {
              message.tracer = data.tracer;
            }

            if (data.timeout != null) {
              message.timeout = data.timeout;
            }

            if (data.reexec != null) {
              message.reexec = data.reexec;
            }

            if (data.disable_stack != null) {
              message.disable_stack = data.disable_stack;
            }

            if (data.disable_storage != null) {
              message.disable_storage = data.disable_storage;
            }

            if (data.debug != null) {
              message.debug = data.debug;
            }

            if (data.limit != null) {
              message.limit = data.limit;
            }

            if (data.overrides != null) {
              message.overrides = ChainConfig.fromObject(data.overrides);
            }

            if (data.enable_memory != null) {
              message.enable_memory = data.enable_memory;
            }

            if (data.enable_return_data != null) {
              message.enable_return_data = data.enable_return_data;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TraceConfig();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.tracer = reader.readString();
                  break;

                case 2:
                  message.timeout = reader.readString();
                  break;

                case 3:
                  message.reexec = reader.readUint64();
                  break;

                case 5:
                  message.disable_stack = reader.readBool();
                  break;

                case 6:
                  message.disable_storage = reader.readBool();
                  break;

                case 8:
                  message.debug = reader.readBool();
                  break;

                case 9:
                  message.limit = reader.readInt32();
                  break;

                case 10:
                  reader.readMessage(message.overrides, function () {
                    return message.overrides = ChainConfig.deserialize(reader);
                  });
                  break;

                case 11:
                  message.enable_memory = reader.readBool();
                  break;

                case 12:
                  message.enable_return_data = reader.readBool();
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
            return TraceConfig.deserialize(bytes);
          }
        }]);
        return TraceConfig;
      }(pb_1.Message);

      _v.TraceConfig = TraceConfig;
    })(v1 || (v1 = _evm.v1 || (_evm.v1 = {})));
  })(evm || (evm = _ethermint.evm || (_ethermint.evm = {})));
})(ethermint || (exports.ethermint = ethermint = {}));