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

var dependency_2 = _interopRequireWildcard(require("./../../crypto/multisig/v1beta1/multisig"));

var dependency_3 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_5 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var tx;

  (function (_tx) {
    var v1beta1;

    (function (_v1beta) {
      var Tx = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Tx, _pb_1$Message);

        var _super = _createSuper(Tx);

        function Tx(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Tx);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("body" in data && data.body != undefined) {
              _this.body = data.body;
            }

            if ("auth_info" in data && data.auth_info != undefined) {
              _this.auth_info = data.auth_info;
            }

            if ("signatures" in data && data.signatures != undefined) {
              _this.signatures = data.signatures;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Tx, [{
          key: "body",
          get: function get() {
            return pb_1.Message.getWrapperField(this, TxBody, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "auth_info",
          get: function get() {
            return pb_1.Message.getWrapperField(this, AuthInfo, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "signatures",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
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

            if (this.body != null) {
              data.body = this.body.toObject();
            }

            if (this.auth_info != null) {
              data.auth_info = this.auth_info.toObject();
            }

            if (this.signatures != null) {
              data.signatures = this.signatures;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.body !== undefined) writer.writeMessage(1, this.body, function () {
              return _this2.body.serialize(writer);
            });
            if (this.auth_info !== undefined) writer.writeMessage(2, this.auth_info, function () {
              return _this2.auth_info.serialize(writer);
            });
            if (this.signatures !== undefined) writer.writeRepeatedBytes(3, this.signatures);
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
            var message = new Tx({});

            if (data.body != null) {
              message.body = TxBody.fromObject(data.body);
            }

            if (data.auth_info != null) {
              message.auth_info = AuthInfo.fromObject(data.auth_info);
            }

            if (data.signatures != null) {
              message.signatures = data.signatures;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Tx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.body, function () {
                    return message.body = TxBody.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.auth_info, function () {
                    return message.auth_info = AuthInfo.deserialize(reader);
                  });
                  break;

                case 3:
                  pb_1.Message.addToRepeatedField(message, 3, reader.readBytes());
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
            return Tx.deserialize(bytes);
          }
        }]);
        return Tx;
      }(pb_1.Message);

      _v1beta.Tx = Tx;

      var TxRaw = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(TxRaw, _pb_1$Message2);

        var _super2 = _createSuper(TxRaw);

        function TxRaw(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, TxRaw);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("body_bytes" in data && data.body_bytes != undefined) {
              _this3.body_bytes = data.body_bytes;
            }

            if ("auth_info_bytes" in data && data.auth_info_bytes != undefined) {
              _this3.auth_info_bytes = data.auth_info_bytes;
            }

            if ("signatures" in data && data.signatures != undefined) {
              _this3.signatures = data.signatures;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(TxRaw, [{
          key: "body_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "auth_info_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "signatures",
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

            if (this.body_bytes != null) {
              data.body_bytes = this.body_bytes;
            }

            if (this.auth_info_bytes != null) {
              data.auth_info_bytes = this.auth_info_bytes;
            }

            if (this.signatures != null) {
              data.signatures = this.signatures;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.body_bytes !== undefined) writer.writeBytes(1, this.body_bytes);
            if (this.auth_info_bytes !== undefined) writer.writeBytes(2, this.auth_info_bytes);
            if (this.signatures !== undefined) writer.writeRepeatedBytes(3, this.signatures);
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
            var message = new TxRaw({});

            if (data.body_bytes != null) {
              message.body_bytes = data.body_bytes;
            }

            if (data.auth_info_bytes != null) {
              message.auth_info_bytes = data.auth_info_bytes;
            }

            if (data.signatures != null) {
              message.signatures = data.signatures;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TxRaw();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.body_bytes = reader.readBytes();
                  break;

                case 2:
                  message.auth_info_bytes = reader.readBytes();
                  break;

                case 3:
                  pb_1.Message.addToRepeatedField(message, 3, reader.readBytes());
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
            return TxRaw.deserialize(bytes);
          }
        }]);
        return TxRaw;
      }(pb_1.Message);

      _v1beta.TxRaw = TxRaw;

      var SignDoc = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(SignDoc, _pb_1$Message3);

        var _super3 = _createSuper(SignDoc);

        function SignDoc(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, SignDoc);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("body_bytes" in data && data.body_bytes != undefined) {
              _this4.body_bytes = data.body_bytes;
            }

            if ("auth_info_bytes" in data && data.auth_info_bytes != undefined) {
              _this4.auth_info_bytes = data.auth_info_bytes;
            }

            if ("chain_id" in data && data.chain_id != undefined) {
              _this4.chain_id = data.chain_id;
            }

            if ("account_number" in data && data.account_number != undefined) {
              _this4.account_number = data.account_number;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(SignDoc, [{
          key: "body_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "auth_info_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "chain_id",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "account_number",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.body_bytes != null) {
              data.body_bytes = this.body_bytes;
            }

            if (this.auth_info_bytes != null) {
              data.auth_info_bytes = this.auth_info_bytes;
            }

            if (this.chain_id != null) {
              data.chain_id = this.chain_id;
            }

            if (this.account_number != null) {
              data.account_number = this.account_number;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.body_bytes !== undefined) writer.writeBytes(1, this.body_bytes);
            if (this.auth_info_bytes !== undefined) writer.writeBytes(2, this.auth_info_bytes);
            if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(3, this.chain_id);
            if (this.account_number !== undefined) writer.writeUint64(4, this.account_number);
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
            var message = new SignDoc({});

            if (data.body_bytes != null) {
              message.body_bytes = data.body_bytes;
            }

            if (data.auth_info_bytes != null) {
              message.auth_info_bytes = data.auth_info_bytes;
            }

            if (data.chain_id != null) {
              message.chain_id = data.chain_id;
            }

            if (data.account_number != null) {
              message.account_number = data.account_number;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SignDoc();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.body_bytes = reader.readBytes();
                  break;

                case 2:
                  message.auth_info_bytes = reader.readBytes();
                  break;

                case 3:
                  message.chain_id = reader.readString();
                  break;

                case 4:
                  message.account_number = reader.readUint64();
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
            return SignDoc.deserialize(bytes);
          }
        }]);
        return SignDoc;
      }(pb_1.Message);

      _v1beta.SignDoc = SignDoc;

      var TxBody = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(TxBody, _pb_1$Message4);

        var _super4 = _createSuper(TxBody);

        function TxBody(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, TxBody);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [1, 1023, 2047], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("messages" in data && data.messages != undefined) {
              _this5.messages = data.messages;
            }

            if ("memo" in data && data.memo != undefined) {
              _this5.memo = data.memo;
            }

            if ("timeout_height" in data && data.timeout_height != undefined) {
              _this5.timeout_height = data.timeout_height;
            }

            if ("extension_options" in data && data.extension_options != undefined) {
              _this5.extension_options = data.extension_options;
            }

            if ("non_critical_extension_options" in data && data.non_critical_extension_options != undefined) {
              _this5.non_critical_extension_options = data.non_critical_extension_options;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(TxBody, [{
          key: "messages",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "memo",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "timeout_height",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "extension_options",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.google.protobuf.Any, 1023);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1023, value);
          }
        }, {
          key: "non_critical_extension_options",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.google.protobuf.Any, 2047);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2047, value);
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

            if (this.messages != null) {
              data.messages = this.messages.map(function (item) {
                return item.toObject();
              });
            }

            if (this.memo != null) {
              data.memo = this.memo;
            }

            if (this.timeout_height != null) {
              data.timeout_height = this.timeout_height;
            }

            if (this.extension_options != null) {
              data.extension_options = this.extension_options.map(function (item) {
                return item.toObject();
              });
            }

            if (this.non_critical_extension_options != null) {
              data.non_critical_extension_options = this.non_critical_extension_options.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.messages !== undefined) writer.writeRepeatedMessage(1, this.messages, function (item) {
              return item.serialize(writer);
            });
            if (typeof this.memo === "string" && this.memo.length) writer.writeString(2, this.memo);
            if (this.timeout_height !== undefined) writer.writeUint64(3, this.timeout_height);
            if (this.extension_options !== undefined) writer.writeRepeatedMessage(1023, this.extension_options, function (item) {
              return item.serialize(writer);
            });
            if (this.non_critical_extension_options !== undefined) writer.writeRepeatedMessage(2047, this.non_critical_extension_options, function (item) {
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
            var message = new TxBody({});

            if (data.messages != null) {
              message.messages = data.messages.map(function (item) {
                return dependency_5.google.protobuf.Any.fromObject(item);
              });
            }

            if (data.memo != null) {
              message.memo = data.memo;
            }

            if (data.timeout_height != null) {
              message.timeout_height = data.timeout_height;
            }

            if (data.extension_options != null) {
              message.extension_options = data.extension_options.map(function (item) {
                return dependency_5.google.protobuf.Any.fromObject(item);
              });
            }

            if (data.non_critical_extension_options != null) {
              message.non_critical_extension_options = data.non_critical_extension_options.map(function (item) {
                return dependency_5.google.protobuf.Any.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TxBody();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.messages, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.google.protobuf.Any.deserialize(reader), dependency_5.google.protobuf.Any);
                  });
                  break;

                case 2:
                  message.memo = reader.readString();
                  break;

                case 3:
                  message.timeout_height = reader.readUint64();
                  break;

                case 1023:
                  reader.readMessage(message.extension_options, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1023, dependency_5.google.protobuf.Any.deserialize(reader), dependency_5.google.protobuf.Any);
                  });
                  break;

                case 2047:
                  reader.readMessage(message.non_critical_extension_options, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2047, dependency_5.google.protobuf.Any.deserialize(reader), dependency_5.google.protobuf.Any);
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
            return TxBody.deserialize(bytes);
          }
        }]);
        return TxBody;
      }(pb_1.Message);

      _v1beta.TxBody = TxBody;

      var AuthInfo = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(AuthInfo, _pb_1$Message5);

        var _super5 = _createSuper(AuthInfo);

        function AuthInfo(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, AuthInfo);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("signer_infos" in data && data.signer_infos != undefined) {
              _this6.signer_infos = data.signer_infos;
            }

            if ("fee" in data && data.fee != undefined) {
              _this6.fee = data.fee;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(AuthInfo, [{
          key: "signer_infos",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, SignerInfo, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "fee",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Fee, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.signer_infos != null) {
              data.signer_infos = this.signer_infos.map(function (item) {
                return item.toObject();
              });
            }

            if (this.fee != null) {
              data.fee = this.fee.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.signer_infos !== undefined) writer.writeRepeatedMessage(1, this.signer_infos, function (item) {
              return item.serialize(writer);
            });
            if (this.fee !== undefined) writer.writeMessage(2, this.fee, function () {
              return _this7.fee.serialize(writer);
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
            var message = new AuthInfo({});

            if (data.signer_infos != null) {
              message.signer_infos = data.signer_infos.map(function (item) {
                return SignerInfo.fromObject(item);
              });
            }

            if (data.fee != null) {
              message.fee = Fee.fromObject(data.fee);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new AuthInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.signer_infos, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, SignerInfo.deserialize(reader), SignerInfo);
                  });
                  break;

                case 2:
                  reader.readMessage(message.fee, function () {
                    return message.fee = Fee.deserialize(reader);
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
            return AuthInfo.deserialize(bytes);
          }
        }]);
        return AuthInfo;
      }(pb_1.Message);

      _v1beta.AuthInfo = AuthInfo;

      var SignerInfo = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(SignerInfo, _pb_1$Message6);

        var _super6 = _createSuper(SignerInfo);

        function SignerInfo(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, SignerInfo);
          _this8 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("public_key" in data && data.public_key != undefined) {
              _this8.public_key = data.public_key;
            }

            if ("mode_info" in data && data.mode_info != undefined) {
              _this8.mode_info = data.mode_info;
            }

            if ("sequence" in data && data.sequence != undefined) {
              _this8.sequence = data.sequence;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(SignerInfo, [{
          key: "public_key",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "mode_info",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ModeInfo, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "sequence",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
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

            if (this.public_key != null) {
              data.public_key = this.public_key.toObject();
            }

            if (this.mode_info != null) {
              data.mode_info = this.mode_info.toObject();
            }

            if (this.sequence != null) {
              data.sequence = this.sequence;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this9 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.public_key !== undefined) writer.writeMessage(1, this.public_key, function () {
              return _this9.public_key.serialize(writer);
            });
            if (this.mode_info !== undefined) writer.writeMessage(2, this.mode_info, function () {
              return _this9.mode_info.serialize(writer);
            });
            if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
            var message = new SignerInfo({});

            if (data.public_key != null) {
              message.public_key = dependency_5.google.protobuf.Any.fromObject(data.public_key);
            }

            if (data.mode_info != null) {
              message.mode_info = ModeInfo.fromObject(data.mode_info);
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
                message = new SignerInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.public_key, function () {
                    return message.public_key = dependency_5.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.mode_info, function () {
                    return message.mode_info = ModeInfo.deserialize(reader);
                  });
                  break;

                case 3:
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
            return SignerInfo.deserialize(bytes);
          }
        }]);
        return SignerInfo;
      }(pb_1.Message);

      _v1beta.SignerInfo = SignerInfo;

      var ModeInfo = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(ModeInfo, _pb_1$Message7);

        var _super7 = _createSuper(ModeInfo);

        function ModeInfo(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, ModeInfo);
          _this10 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("single" in data && data.single != undefined) {
              _this10.single = data.single;
            }

            if ("multi" in data && data.multi != undefined) {
              _this10.multi = data.multi;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(ModeInfo, [{
          key: "single",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ModeInfo.Single, 1);
          },
          set: function set(value) {
            pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
          }
        }, {
          key: "multi",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ModeInfo.Multi, 2);
          },
          set: function set(value) {
            pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
          }
        }, {
          key: "sum",
          get: function get() {
            var cases = {
              0: "none",
              1: "single",
              2: "multi"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
          }
        }, {
          key: "toObject",
          value: function (_toObject5) {
            function toObject() {
              return _toObject5.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject5.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.single != null) {
              data.single = this.single.toObject();
            }

            if (this.multi != null) {
              data.multi = this.multi.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.single !== undefined) writer.writeMessage(1, this.single, function () {
              return _this11.single.serialize(writer);
            });
            if (this.multi !== undefined) writer.writeMessage(2, this.multi, function () {
              return _this11.multi.serialize(writer);
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
            var message = new ModeInfo({});

            if (data.single != null) {
              message.single = ModeInfo.Single.fromObject(data.single);
            }

            if (data.multi != null) {
              message.multi = ModeInfo.Multi.fromObject(data.multi);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ModeInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.single, function () {
                    return message.single = ModeInfo.Single.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.multi, function () {
                    return message.multi = ModeInfo.Multi.deserialize(reader);
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
            return ModeInfo.deserialize(bytes);
          }
        }]);
        return ModeInfo;
      }(pb_1.Message);

      _v1beta.ModeInfo = ModeInfo;

      (function (_ModeInfo) {
        var Single = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(Single, _pb_1$Message8);

          var _super8 = _createSuper(Single);

          function Single(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, Single);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("mode" in data && data.mode != undefined) {
                _this12.mode = data.mode;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(Single, [{
            key: "mode",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.mode != null) {
                data.mode = this.mode;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.mode !== undefined) writer.writeEnum(1, this.mode);
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
              var message = new Single({});

              if (data.mode != null) {
                message.mode = data.mode;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Single();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.mode = reader.readEnum();
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
              return Single.deserialize(bytes);
            }
          }]);
          return Single;
        }(pb_1.Message);

        _ModeInfo.Single = Single;

        var Multi = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(Multi, _pb_1$Message9);

          var _super9 = _createSuper(Multi);

          function Multi(data) {
            var _this13;

            (0, _classCallCheck2["default"])(this, Multi);
            _this13 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("bitarray" in data && data.bitarray != undefined) {
                _this13.bitarray = data.bitarray;
              }

              if ("mode_infos" in data && data.mode_infos != undefined) {
                _this13.mode_infos = data.mode_infos;
              }
            }

            return _this13;
          }

          (0, _createClass2["default"])(Multi, [{
            key: "bitarray",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.crypto.multisig.v1beta1.CompactBitArray, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "mode_infos",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, ModeInfo, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject6) {
              function toObject() {
                return _toObject6.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject6.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.bitarray != null) {
                data.bitarray = this.bitarray.toObject();
              }

              if (this.mode_infos != null) {
                data.mode_infos = this.mode_infos.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this14 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.bitarray !== undefined) writer.writeMessage(1, this.bitarray, function () {
                return _this14.bitarray.serialize(writer);
              });
              if (this.mode_infos !== undefined) writer.writeRepeatedMessage(2, this.mode_infos, function (item) {
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
              var message = new Multi({});

              if (data.bitarray != null) {
                message.bitarray = dependency_2.cosmos.crypto.multisig.v1beta1.CompactBitArray.fromObject(data.bitarray);
              }

              if (data.mode_infos != null) {
                message.mode_infos = data.mode_infos.map(function (item) {
                  return ModeInfo.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Multi();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.bitarray, function () {
                      return message.bitarray = dependency_2.cosmos.crypto.multisig.v1beta1.CompactBitArray.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.mode_infos, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, ModeInfo.deserialize(reader), ModeInfo);
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
              return Multi.deserialize(bytes);
            }
          }]);
          return Multi;
        }(pb_1.Message);

        _ModeInfo.Multi = Multi;
      })(ModeInfo || (ModeInfo = _v1beta.ModeInfo || (_v1beta.ModeInfo = {})));

      var Fee = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(Fee, _pb_1$Message10);

        var _super10 = _createSuper(Fee);

        function Fee(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, Fee);
          _this15 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("amount" in data && data.amount != undefined) {
              _this15.amount = data.amount;
            }

            if ("gas_limit" in data && data.gas_limit != undefined) {
              _this15.gas_limit = data.gas_limit;
            }

            if ("payer" in data && data.payer != undefined) {
              _this15.payer = data.payer;
            }

            if ("granter" in data && data.granter != undefined) {
              _this15.granter = data.granter;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(Fee, [{
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "gas_limit",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "payer",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject7) {
            function toObject() {
              return _toObject7.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject7.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.amount != null) {
              data.amount = this.amount.map(function (item) {
                return item.toObject();
              });
            }

            if (this.gas_limit != null) {
              data.gas_limit = this.gas_limit;
            }

            if (this.payer != null) {
              data.payer = this.payer;
            }

            if (this.granter != null) {
              data.granter = this.granter;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.amount !== undefined) writer.writeRepeatedMessage(1, this.amount, function (item) {
              return item.serialize(writer);
            });
            if (this.gas_limit !== undefined) writer.writeUint64(2, this.gas_limit);
            if (typeof this.payer === "string" && this.payer.length) writer.writeString(3, this.payer);
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(4, this.granter);
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
            var message = new Fee({});

            if (data.amount != null) {
              message.amount = data.amount.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.gas_limit != null) {
              message.gas_limit = data.gas_limit;
            }

            if (data.payer != null) {
              message.payer = data.payer;
            }

            if (data.granter != null) {
              message.granter = data.granter;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Fee();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 2:
                  message.gas_limit = reader.readUint64();
                  break;

                case 3:
                  message.payer = reader.readString();
                  break;

                case 4:
                  message.granter = reader.readString();
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
            return Fee.deserialize(bytes);
          }
        }]);
        return Fee;
      }(pb_1.Message);

      _v1beta.Fee = Fee;
    })(v1beta1 || (v1beta1 = _tx.v1beta1 || (_tx.v1beta1 = {})));
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
})(cosmos || (exports.cosmos = cosmos = {}));