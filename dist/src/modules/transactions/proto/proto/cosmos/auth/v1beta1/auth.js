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

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var auth;

  (function (_auth) {
    var v1beta1;

    (function (_v1beta) {
      var BaseAccount = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(BaseAccount, _pb_1$Message);

        var _super = _createSuper(BaseAccount);

        function BaseAccount(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, BaseAccount);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this.address = data.address;
            }

            if ("pub_key" in data && data.pub_key != undefined) {
              _this.pub_key = data.pub_key;
            }

            if ("account_number" in data && data.account_number != undefined) {
              _this.account_number = data.account_number;
            }

            if ("sequence" in data && data.sequence != undefined) {
              _this.sequence = data.sequence;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(BaseAccount, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pub_key",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "account_number",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "sequence",
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.pub_key != null) {
              data.pub_key = this.pub_key.toObject();
            }

            if (this.account_number != null) {
              data.account_number = this.account_number;
            }

            if (this.sequence != null) {
              data.sequence = this.sequence;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.pub_key !== undefined) writer.writeMessage(2, this.pub_key, function () {
              return _this2.pub_key.serialize(writer);
            });
            if (this.account_number !== undefined) writer.writeUint64(3, this.account_number);
            if (this.sequence !== undefined) writer.writeUint64(4, this.sequence);
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
            var message = new BaseAccount({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.pub_key != null) {
              message.pub_key = dependency_3.google.protobuf.Any.fromObject(data.pub_key);
            }

            if (data.account_number != null) {
              message.account_number = data.account_number;
            }

            if (data.sequence != null) {
              message.sequence = data.sequence;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new BaseAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.pub_key, function () {
                    return message.pub_key = dependency_3.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 3:
                  message.account_number = reader.readUint64();
                  break;

                case 4:
                  message.sequence = reader.readUint64();
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
            return BaseAccount.deserialize(bytes);
          }
        }]);
        return BaseAccount;
      }(pb_1.Message);

      _v1beta.BaseAccount = BaseAccount;

      var ModuleAccount = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ModuleAccount, _pb_1$Message2);

        var _super2 = _createSuper(ModuleAccount);

        function ModuleAccount(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ModuleAccount);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("base_account" in data && data.base_account != undefined) {
              _this3.base_account = data.base_account;
            }

            if ("name" in data && data.name != undefined) {
              _this3.name = data.name;
            }

            if ("permissions" in data && data.permissions != undefined) {
              _this3.permissions = data.permissions;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ModuleAccount, [{
          key: "base_account",
          get: function get() {
            return pb_1.Message.getWrapperField(this, BaseAccount, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "name",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "permissions",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
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

            if (this.base_account != null) {
              data.base_account = this.base_account.toObject();
            }

            if (this.name != null) {
              data.name = this.name;
            }

            if (this.permissions != null) {
              data.permissions = this.permissions;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.base_account !== undefined) writer.writeMessage(1, this.base_account, function () {
              return _this4.base_account.serialize(writer);
            });
            if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
            if (this.permissions !== undefined) writer.writeRepeatedString(3, this.permissions);
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
            var message = new ModuleAccount({});

            if (data.base_account != null) {
              message.base_account = BaseAccount.fromObject(data.base_account);
            }

            if (data.name != null) {
              message.name = data.name;
            }

            if (data.permissions != null) {
              message.permissions = data.permissions;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ModuleAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.base_account, function () {
                    return message.base_account = BaseAccount.deserialize(reader);
                  });
                  break;

                case 2:
                  message.name = reader.readString();
                  break;

                case 3:
                  pb_1.Message.addToRepeatedField(message, 3, reader.readString());
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
            return ModuleAccount.deserialize(bytes);
          }
        }]);
        return ModuleAccount;
      }(pb_1.Message);

      _v1beta.ModuleAccount = ModuleAccount;

      var Params = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(Params, _pb_1$Message3);

        var _super3 = _createSuper(Params);

        function Params(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, Params);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("max_memo_characters" in data && data.max_memo_characters != undefined) {
              _this5.max_memo_characters = data.max_memo_characters;
            }

            if ("tx_sig_limit" in data && data.tx_sig_limit != undefined) {
              _this5.tx_sig_limit = data.tx_sig_limit;
            }

            if ("tx_size_cost_per_byte" in data && data.tx_size_cost_per_byte != undefined) {
              _this5.tx_size_cost_per_byte = data.tx_size_cost_per_byte;
            }

            if ("sig_verify_cost_ed25519" in data && data.sig_verify_cost_ed25519 != undefined) {
              _this5.sig_verify_cost_ed25519 = data.sig_verify_cost_ed25519;
            }

            if ("sig_verify_cost_secp256k1" in data && data.sig_verify_cost_secp256k1 != undefined) {
              _this5.sig_verify_cost_secp256k1 = data.sig_verify_cost_secp256k1;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(Params, [{
          key: "max_memo_characters",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "tx_sig_limit",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "tx_size_cost_per_byte",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "sig_verify_cost_ed25519",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "sig_verify_cost_secp256k1",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.max_memo_characters != null) {
              data.max_memo_characters = this.max_memo_characters;
            }

            if (this.tx_sig_limit != null) {
              data.tx_sig_limit = this.tx_sig_limit;
            }

            if (this.tx_size_cost_per_byte != null) {
              data.tx_size_cost_per_byte = this.tx_size_cost_per_byte;
            }

            if (this.sig_verify_cost_ed25519 != null) {
              data.sig_verify_cost_ed25519 = this.sig_verify_cost_ed25519;
            }

            if (this.sig_verify_cost_secp256k1 != null) {
              data.sig_verify_cost_secp256k1 = this.sig_verify_cost_secp256k1;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.max_memo_characters !== undefined) writer.writeUint64(1, this.max_memo_characters);
            if (this.tx_sig_limit !== undefined) writer.writeUint64(2, this.tx_sig_limit);
            if (this.tx_size_cost_per_byte !== undefined) writer.writeUint64(3, this.tx_size_cost_per_byte);
            if (this.sig_verify_cost_ed25519 !== undefined) writer.writeUint64(4, this.sig_verify_cost_ed25519);
            if (this.sig_verify_cost_secp256k1 !== undefined) writer.writeUint64(5, this.sig_verify_cost_secp256k1);
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

            if (data.max_memo_characters != null) {
              message.max_memo_characters = data.max_memo_characters;
            }

            if (data.tx_sig_limit != null) {
              message.tx_sig_limit = data.tx_sig_limit;
            }

            if (data.tx_size_cost_per_byte != null) {
              message.tx_size_cost_per_byte = data.tx_size_cost_per_byte;
            }

            if (data.sig_verify_cost_ed25519 != null) {
              message.sig_verify_cost_ed25519 = data.sig_verify_cost_ed25519;
            }

            if (data.sig_verify_cost_secp256k1 != null) {
              message.sig_verify_cost_secp256k1 = data.sig_verify_cost_secp256k1;
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
                  message.max_memo_characters = reader.readUint64();
                  break;

                case 2:
                  message.tx_sig_limit = reader.readUint64();
                  break;

                case 3:
                  message.tx_size_cost_per_byte = reader.readUint64();
                  break;

                case 4:
                  message.sig_verify_cost_ed25519 = reader.readUint64();
                  break;

                case 5:
                  message.sig_verify_cost_secp256k1 = reader.readUint64();
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
    })(v1beta1 || (v1beta1 = _auth.v1beta1 || (_auth.v1beta1 = {})));
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
})(cosmos || (exports.cosmos = cosmos = {}));