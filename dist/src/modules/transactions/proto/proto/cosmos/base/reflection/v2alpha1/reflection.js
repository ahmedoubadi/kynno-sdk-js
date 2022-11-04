"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var reflection;

    (function (_reflection) {
      var v2alpha1;

      (function (_v2alpha) {
        var AppDescriptor = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(AppDescriptor, _pb_1$Message);

          var _super = _createSuper(AppDescriptor);

          function AppDescriptor(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, AppDescriptor);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("authn" in data && data.authn != undefined) {
                _this.authn = data.authn;
              }

              if ("chain" in data && data.chain != undefined) {
                _this.chain = data.chain;
              }

              if ("codec" in data && data.codec != undefined) {
                _this.codec = data.codec;
              }

              if ("configuration" in data && data.configuration != undefined) {
                _this.configuration = data.configuration;
              }

              if ("query_services" in data && data.query_services != undefined) {
                _this.query_services = data.query_services;
              }

              if ("tx" in data && data.tx != undefined) {
                _this.tx = data.tx;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(AppDescriptor, [{
            key: "authn",
            get: function get() {
              return pb_1.Message.getWrapperField(this, AuthnDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "chain",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ChainDescriptor, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "codec",
            get: function get() {
              return pb_1.Message.getWrapperField(this, CodecDescriptor, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "configuration",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ConfigurationDescriptor, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "query_services",
            get: function get() {
              return pb_1.Message.getWrapperField(this, QueryServicesDescriptor, 5);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 5, value);
            }
          }, {
            key: "tx",
            get: function get() {
              return pb_1.Message.getWrapperField(this, TxDescriptor, 6);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 6, value);
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

              if (this.authn != null) {
                data.authn = this.authn.toObject();
              }

              if (this.chain != null) {
                data.chain = this.chain.toObject();
              }

              if (this.codec != null) {
                data.codec = this.codec.toObject();
              }

              if (this.configuration != null) {
                data.configuration = this.configuration.toObject();
              }

              if (this.query_services != null) {
                data.query_services = this.query_services.toObject();
              }

              if (this.tx != null) {
                data.tx = this.tx.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.authn !== undefined) writer.writeMessage(1, this.authn, function () {
                return _this2.authn.serialize(writer);
              });
              if (this.chain !== undefined) writer.writeMessage(2, this.chain, function () {
                return _this2.chain.serialize(writer);
              });
              if (this.codec !== undefined) writer.writeMessage(3, this.codec, function () {
                return _this2.codec.serialize(writer);
              });
              if (this.configuration !== undefined) writer.writeMessage(4, this.configuration, function () {
                return _this2.configuration.serialize(writer);
              });
              if (this.query_services !== undefined) writer.writeMessage(5, this.query_services, function () {
                return _this2.query_services.serialize(writer);
              });
              if (this.tx !== undefined) writer.writeMessage(6, this.tx, function () {
                return _this2.tx.serialize(writer);
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
              var message = new AppDescriptor({});

              if (data.authn != null) {
                message.authn = AuthnDescriptor.fromObject(data.authn);
              }

              if (data.chain != null) {
                message.chain = ChainDescriptor.fromObject(data.chain);
              }

              if (data.codec != null) {
                message.codec = CodecDescriptor.fromObject(data.codec);
              }

              if (data.configuration != null) {
                message.configuration = ConfigurationDescriptor.fromObject(data.configuration);
              }

              if (data.query_services != null) {
                message.query_services = QueryServicesDescriptor.fromObject(data.query_services);
              }

              if (data.tx != null) {
                message.tx = TxDescriptor.fromObject(data.tx);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new AppDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.authn, function () {
                      return message.authn = AuthnDescriptor.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.chain, function () {
                      return message.chain = ChainDescriptor.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.codec, function () {
                      return message.codec = CodecDescriptor.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.configuration, function () {
                      return message.configuration = ConfigurationDescriptor.deserialize(reader);
                    });
                    break;

                  case 5:
                    reader.readMessage(message.query_services, function () {
                      return message.query_services = QueryServicesDescriptor.deserialize(reader);
                    });
                    break;

                  case 6:
                    reader.readMessage(message.tx, function () {
                      return message.tx = TxDescriptor.deserialize(reader);
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
              return AppDescriptor.deserialize(bytes);
            }
          }]);
          return AppDescriptor;
        }(pb_1.Message);

        _v2alpha.AppDescriptor = AppDescriptor;

        var TxDescriptor = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(TxDescriptor, _pb_1$Message2);

          var _super2 = _createSuper(TxDescriptor);

          function TxDescriptor(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, TxDescriptor);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("fullname" in data && data.fullname != undefined) {
                _this3.fullname = data.fullname;
              }

              if ("msgs" in data && data.msgs != undefined) {
                _this3.msgs = data.msgs;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(TxDescriptor, [{
            key: "fullname",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "msgs",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, MsgDescriptor, 2);
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

              if (this.fullname != null) {
                data.fullname = this.fullname;
              }

              if (this.msgs != null) {
                data.msgs = this.msgs.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.fullname === "string" && this.fullname.length) writer.writeString(1, this.fullname);
              if (this.msgs !== undefined) writer.writeRepeatedMessage(2, this.msgs, function (item) {
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
              var message = new TxDescriptor({});

              if (data.fullname != null) {
                message.fullname = data.fullname;
              }

              if (data.msgs != null) {
                message.msgs = data.msgs.map(function (item) {
                  return MsgDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new TxDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.fullname = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.msgs, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, MsgDescriptor.deserialize(reader), MsgDescriptor);
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
              return TxDescriptor.deserialize(bytes);
            }
          }]);
          return TxDescriptor;
        }(pb_1.Message);

        _v2alpha.TxDescriptor = TxDescriptor;

        var AuthnDescriptor = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(AuthnDescriptor, _pb_1$Message3);

          var _super3 = _createSuper(AuthnDescriptor);

          function AuthnDescriptor(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, AuthnDescriptor);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sign_modes" in data && data.sign_modes != undefined) {
                _this4.sign_modes = data.sign_modes;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(AuthnDescriptor, [{
            key: "sign_modes",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, SigningModeDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.sign_modes != null) {
                data.sign_modes = this.sign_modes.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.sign_modes !== undefined) writer.writeRepeatedMessage(1, this.sign_modes, function (item) {
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
              var message = new AuthnDescriptor({});

              if (data.sign_modes != null) {
                message.sign_modes = data.sign_modes.map(function (item) {
                  return SigningModeDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new AuthnDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.sign_modes, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, SigningModeDescriptor.deserialize(reader), SigningModeDescriptor);
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
              return AuthnDescriptor.deserialize(bytes);
            }
          }]);
          return AuthnDescriptor;
        }(pb_1.Message);

        _v2alpha.AuthnDescriptor = AuthnDescriptor;

        var SigningModeDescriptor = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(SigningModeDescriptor, _pb_1$Message4);

          var _super4 = _createSuper(SigningModeDescriptor);

          function SigningModeDescriptor(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, SigningModeDescriptor);
            _this5 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this5.name = data.name;
              }

              if ("number" in data && data.number != undefined) {
                _this5.number = data.number;
              }

              if ("authn_info_provider_method_fullname" in data && data.authn_info_provider_method_fullname != undefined) {
                _this5.authn_info_provider_method_fullname = data.authn_info_provider_method_fullname;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(SigningModeDescriptor, [{
            key: "name",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "number",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "authn_info_provider_method_fullname",
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

              if (this.name != null) {
                data.name = this.name;
              }

              if (this.number != null) {
                data.number = this.number;
              }

              if (this.authn_info_provider_method_fullname != null) {
                data.authn_info_provider_method_fullname = this.authn_info_provider_method_fullname;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
              if (this.number !== undefined) writer.writeInt32(2, this.number);
              if (typeof this.authn_info_provider_method_fullname === "string" && this.authn_info_provider_method_fullname.length) writer.writeString(3, this.authn_info_provider_method_fullname);
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
              var message = new SigningModeDescriptor({});

              if (data.name != null) {
                message.name = data.name;
              }

              if (data.number != null) {
                message.number = data.number;
              }

              if (data.authn_info_provider_method_fullname != null) {
                message.authn_info_provider_method_fullname = data.authn_info_provider_method_fullname;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SigningModeDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
                    break;

                  case 2:
                    message.number = reader.readInt32();
                    break;

                  case 3:
                    message.authn_info_provider_method_fullname = reader.readString();
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
              return SigningModeDescriptor.deserialize(bytes);
            }
          }]);
          return SigningModeDescriptor;
        }(pb_1.Message);

        _v2alpha.SigningModeDescriptor = SigningModeDescriptor;

        var ChainDescriptor = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(ChainDescriptor, _pb_1$Message5);

          var _super5 = _createSuper(ChainDescriptor);

          function ChainDescriptor(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, ChainDescriptor);
            _this6 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("id" in data && data.id != undefined) {
                _this6.id = data.id;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(ChainDescriptor, [{
            key: "id",
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

              if (this.id != null) {
                data.id = this.id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
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
              var message = new ChainDescriptor({});

              if (data.id != null) {
                message.id = data.id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ChainDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.id = reader.readString();
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
              return ChainDescriptor.deserialize(bytes);
            }
          }]);
          return ChainDescriptor;
        }(pb_1.Message);

        _v2alpha.ChainDescriptor = ChainDescriptor;

        var CodecDescriptor = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(CodecDescriptor, _pb_1$Message6);

          var _super6 = _createSuper(CodecDescriptor);

          function CodecDescriptor(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, CodecDescriptor);
            _this7 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("interfaces" in data && data.interfaces != undefined) {
                _this7.interfaces = data.interfaces;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(CodecDescriptor, [{
            key: "interfaces",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, InterfaceDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.interfaces != null) {
                data.interfaces = this.interfaces.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.interfaces !== undefined) writer.writeRepeatedMessage(1, this.interfaces, function (item) {
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
              var message = new CodecDescriptor({});

              if (data.interfaces != null) {
                message.interfaces = data.interfaces.map(function (item) {
                  return InterfaceDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new CodecDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.interfaces, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, InterfaceDescriptor.deserialize(reader), InterfaceDescriptor);
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
              return CodecDescriptor.deserialize(bytes);
            }
          }]);
          return CodecDescriptor;
        }(pb_1.Message);

        _v2alpha.CodecDescriptor = CodecDescriptor;

        var InterfaceDescriptor = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(InterfaceDescriptor, _pb_1$Message7);

          var _super7 = _createSuper(InterfaceDescriptor);

          function InterfaceDescriptor(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, InterfaceDescriptor);
            _this8 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [2, 3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("fullname" in data && data.fullname != undefined) {
                _this8.fullname = data.fullname;
              }

              if ("interface_accepting_messages" in data && data.interface_accepting_messages != undefined) {
                _this8.interface_accepting_messages = data.interface_accepting_messages;
              }

              if ("interface_implementers" in data && data.interface_implementers != undefined) {
                _this8.interface_implementers = data.interface_implementers;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(InterfaceDescriptor, [{
            key: "fullname",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "interface_accepting_messages",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, InterfaceAcceptingMessageDescriptor, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "interface_implementers",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, InterfaceImplementerDescriptor, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

              if (this.fullname != null) {
                data.fullname = this.fullname;
              }

              if (this.interface_accepting_messages != null) {
                data.interface_accepting_messages = this.interface_accepting_messages.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.interface_implementers != null) {
                data.interface_implementers = this.interface_implementers.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.fullname === "string" && this.fullname.length) writer.writeString(1, this.fullname);
              if (this.interface_accepting_messages !== undefined) writer.writeRepeatedMessage(2, this.interface_accepting_messages, function (item) {
                return item.serialize(writer);
              });
              if (this.interface_implementers !== undefined) writer.writeRepeatedMessage(3, this.interface_implementers, function (item) {
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
              var message = new InterfaceDescriptor({});

              if (data.fullname != null) {
                message.fullname = data.fullname;
              }

              if (data.interface_accepting_messages != null) {
                message.interface_accepting_messages = data.interface_accepting_messages.map(function (item) {
                  return InterfaceAcceptingMessageDescriptor.fromObject(item);
                });
              }

              if (data.interface_implementers != null) {
                message.interface_implementers = data.interface_implementers.map(function (item) {
                  return InterfaceImplementerDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new InterfaceDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.fullname = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.interface_accepting_messages, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, InterfaceAcceptingMessageDescriptor.deserialize(reader), InterfaceAcceptingMessageDescriptor);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.interface_implementers, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, InterfaceImplementerDescriptor.deserialize(reader), InterfaceImplementerDescriptor);
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
              return InterfaceDescriptor.deserialize(bytes);
            }
          }]);
          return InterfaceDescriptor;
        }(pb_1.Message);

        _v2alpha.InterfaceDescriptor = InterfaceDescriptor;

        var InterfaceImplementerDescriptor = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(InterfaceImplementerDescriptor, _pb_1$Message8);

          var _super8 = _createSuper(InterfaceImplementerDescriptor);

          function InterfaceImplementerDescriptor(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, InterfaceImplementerDescriptor);
            _this9 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("fullname" in data && data.fullname != undefined) {
                _this9.fullname = data.fullname;
              }

              if ("type_url" in data && data.type_url != undefined) {
                _this9.type_url = data.type_url;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(InterfaceImplementerDescriptor, [{
            key: "fullname",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "type_url",
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

              if (this.fullname != null) {
                data.fullname = this.fullname;
              }

              if (this.type_url != null) {
                data.type_url = this.type_url;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.fullname === "string" && this.fullname.length) writer.writeString(1, this.fullname);
              if (typeof this.type_url === "string" && this.type_url.length) writer.writeString(2, this.type_url);
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
              var message = new InterfaceImplementerDescriptor({});

              if (data.fullname != null) {
                message.fullname = data.fullname;
              }

              if (data.type_url != null) {
                message.type_url = data.type_url;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new InterfaceImplementerDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.fullname = reader.readString();
                    break;

                  case 2:
                    message.type_url = reader.readString();
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
              return InterfaceImplementerDescriptor.deserialize(bytes);
            }
          }]);
          return InterfaceImplementerDescriptor;
        }(pb_1.Message);

        _v2alpha.InterfaceImplementerDescriptor = InterfaceImplementerDescriptor;

        var InterfaceAcceptingMessageDescriptor = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(InterfaceAcceptingMessageDescriptor, _pb_1$Message9);

          var _super9 = _createSuper(InterfaceAcceptingMessageDescriptor);

          function InterfaceAcceptingMessageDescriptor(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, InterfaceAcceptingMessageDescriptor);
            _this10 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("fullname" in data && data.fullname != undefined) {
                _this10.fullname = data.fullname;
              }

              if ("field_descriptor_names" in data && data.field_descriptor_names != undefined) {
                _this10.field_descriptor_names = data.field_descriptor_names;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(InterfaceAcceptingMessageDescriptor, [{
            key: "fullname",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "field_descriptor_names",
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

              if (this.fullname != null) {
                data.fullname = this.fullname;
              }

              if (this.field_descriptor_names != null) {
                data.field_descriptor_names = this.field_descriptor_names;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.fullname === "string" && this.fullname.length) writer.writeString(1, this.fullname);
              if (this.field_descriptor_names !== undefined) writer.writeRepeatedString(2, this.field_descriptor_names);
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
              var message = new InterfaceAcceptingMessageDescriptor({});

              if (data.fullname != null) {
                message.fullname = data.fullname;
              }

              if (data.field_descriptor_names != null) {
                message.field_descriptor_names = data.field_descriptor_names;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new InterfaceAcceptingMessageDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.fullname = reader.readString();
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
              return InterfaceAcceptingMessageDescriptor.deserialize(bytes);
            }
          }]);
          return InterfaceAcceptingMessageDescriptor;
        }(pb_1.Message);

        _v2alpha.InterfaceAcceptingMessageDescriptor = InterfaceAcceptingMessageDescriptor;

        var ConfigurationDescriptor = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(ConfigurationDescriptor, _pb_1$Message10);

          var _super10 = _createSuper(ConfigurationDescriptor);

          function ConfigurationDescriptor(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, ConfigurationDescriptor);
            _this11 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("bech32_account_address_prefix" in data && data.bech32_account_address_prefix != undefined) {
                _this11.bech32_account_address_prefix = data.bech32_account_address_prefix;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(ConfigurationDescriptor, [{
            key: "bech32_account_address_prefix",
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

              if (this.bech32_account_address_prefix != null) {
                data.bech32_account_address_prefix = this.bech32_account_address_prefix;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.bech32_account_address_prefix === "string" && this.bech32_account_address_prefix.length) writer.writeString(1, this.bech32_account_address_prefix);
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
              var message = new ConfigurationDescriptor({});

              if (data.bech32_account_address_prefix != null) {
                message.bech32_account_address_prefix = data.bech32_account_address_prefix;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConfigurationDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.bech32_account_address_prefix = reader.readString();
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
              return ConfigurationDescriptor.deserialize(bytes);
            }
          }]);
          return ConfigurationDescriptor;
        }(pb_1.Message);

        _v2alpha.ConfigurationDescriptor = ConfigurationDescriptor;

        var MsgDescriptor = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(MsgDescriptor, _pb_1$Message11);

          var _super11 = _createSuper(MsgDescriptor);

          function MsgDescriptor(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, MsgDescriptor);
            _this12 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("msg_type_url" in data && data.msg_type_url != undefined) {
                _this12.msg_type_url = data.msg_type_url;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(MsgDescriptor, [{
            key: "msg_type_url",
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

              if (this.msg_type_url != null) {
                data.msg_type_url = this.msg_type_url;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.msg_type_url === "string" && this.msg_type_url.length) writer.writeString(1, this.msg_type_url);
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
              var message = new MsgDescriptor({});

              if (data.msg_type_url != null) {
                message.msg_type_url = data.msg_type_url;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MsgDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.msg_type_url = reader.readString();
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
              return MsgDescriptor.deserialize(bytes);
            }
          }]);
          return MsgDescriptor;
        }(pb_1.Message);

        _v2alpha.MsgDescriptor = MsgDescriptor;

        var GetAuthnDescriptorRequest = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(GetAuthnDescriptorRequest, _pb_1$Message12);

          var _super12 = _createSuper(GetAuthnDescriptorRequest);

          function GetAuthnDescriptorRequest(data) {
            var _this13;

            (0, _classCallCheck2["default"])(this, GetAuthnDescriptorRequest);
            _this13 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this13;
          }

          (0, _createClass2["default"])(GetAuthnDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetAuthnDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetAuthnDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetAuthnDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetAuthnDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetAuthnDescriptorRequest = GetAuthnDescriptorRequest;

        var GetAuthnDescriptorResponse = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(GetAuthnDescriptorResponse, _pb_1$Message13);

          var _super13 = _createSuper(GetAuthnDescriptorResponse);

          function GetAuthnDescriptorResponse(data) {
            var _this14;

            (0, _classCallCheck2["default"])(this, GetAuthnDescriptorResponse);
            _this14 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("authn" in data && data.authn != undefined) {
                _this14.authn = data.authn;
              }
            }

            return _this14;
          }

          (0, _createClass2["default"])(GetAuthnDescriptorResponse, [{
            key: "authn",
            get: function get() {
              return pb_1.Message.getWrapperField(this, AuthnDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
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

              if (this.authn != null) {
                data.authn = this.authn.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this15 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.authn !== undefined) writer.writeMessage(1, this.authn, function () {
                return _this15.authn.serialize(writer);
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
              var message = new GetAuthnDescriptorResponse({});

              if (data.authn != null) {
                message.authn = AuthnDescriptor.fromObject(data.authn);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetAuthnDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.authn, function () {
                      return message.authn = AuthnDescriptor.deserialize(reader);
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
              return GetAuthnDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetAuthnDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetAuthnDescriptorResponse = GetAuthnDescriptorResponse;

        var GetChainDescriptorRequest = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(GetChainDescriptorRequest, _pb_1$Message14);

          var _super14 = _createSuper(GetChainDescriptorRequest);

          function GetChainDescriptorRequest(data) {
            var _this16;

            (0, _classCallCheck2["default"])(this, GetChainDescriptorRequest);
            _this16 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this16;
          }

          (0, _createClass2["default"])(GetChainDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetChainDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetChainDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetChainDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetChainDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetChainDescriptorRequest = GetChainDescriptorRequest;

        var GetChainDescriptorResponse = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(GetChainDescriptorResponse, _pb_1$Message15);

          var _super15 = _createSuper(GetChainDescriptorResponse);

          function GetChainDescriptorResponse(data) {
            var _this17;

            (0, _classCallCheck2["default"])(this, GetChainDescriptorResponse);
            _this17 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("chain" in data && data.chain != undefined) {
                _this17.chain = data.chain;
              }
            }

            return _this17;
          }

          (0, _createClass2["default"])(GetChainDescriptorResponse, [{
            key: "chain",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ChainDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
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

              if (this.chain != null) {
                data.chain = this.chain.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this18 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.chain !== undefined) writer.writeMessage(1, this.chain, function () {
                return _this18.chain.serialize(writer);
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
              var message = new GetChainDescriptorResponse({});

              if (data.chain != null) {
                message.chain = ChainDescriptor.fromObject(data.chain);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetChainDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.chain, function () {
                      return message.chain = ChainDescriptor.deserialize(reader);
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
              return GetChainDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetChainDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetChainDescriptorResponse = GetChainDescriptorResponse;

        var GetCodecDescriptorRequest = /*#__PURE__*/function (_pb_1$Message16) {
          (0, _inherits2["default"])(GetCodecDescriptorRequest, _pb_1$Message16);

          var _super16 = _createSuper(GetCodecDescriptorRequest);

          function GetCodecDescriptorRequest(data) {
            var _this19;

            (0, _classCallCheck2["default"])(this, GetCodecDescriptorRequest);
            _this19 = _super16.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this19;
          }

          (0, _createClass2["default"])(GetCodecDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetCodecDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetCodecDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetCodecDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetCodecDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetCodecDescriptorRequest = GetCodecDescriptorRequest;

        var GetCodecDescriptorResponse = /*#__PURE__*/function (_pb_1$Message17) {
          (0, _inherits2["default"])(GetCodecDescriptorResponse, _pb_1$Message17);

          var _super17 = _createSuper(GetCodecDescriptorResponse);

          function GetCodecDescriptorResponse(data) {
            var _this20;

            (0, _classCallCheck2["default"])(this, GetCodecDescriptorResponse);
            _this20 = _super17.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("codec" in data && data.codec != undefined) {
                _this20.codec = data.codec;
              }
            }

            return _this20;
          }

          (0, _createClass2["default"])(GetCodecDescriptorResponse, [{
            key: "codec",
            get: function get() {
              return pb_1.Message.getWrapperField(this, CodecDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject8) {
              function toObject() {
                return _toObject8.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject8.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.codec != null) {
                data.codec = this.codec.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this21 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.codec !== undefined) writer.writeMessage(1, this.codec, function () {
                return _this21.codec.serialize(writer);
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
              var message = new GetCodecDescriptorResponse({});

              if (data.codec != null) {
                message.codec = CodecDescriptor.fromObject(data.codec);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetCodecDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.codec, function () {
                      return message.codec = CodecDescriptor.deserialize(reader);
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
              return GetCodecDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetCodecDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetCodecDescriptorResponse = GetCodecDescriptorResponse;

        var GetConfigurationDescriptorRequest = /*#__PURE__*/function (_pb_1$Message18) {
          (0, _inherits2["default"])(GetConfigurationDescriptorRequest, _pb_1$Message18);

          var _super18 = _createSuper(GetConfigurationDescriptorRequest);

          function GetConfigurationDescriptorRequest(data) {
            var _this22;

            (0, _classCallCheck2["default"])(this, GetConfigurationDescriptorRequest);
            _this22 = _super18.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this22;
          }

          (0, _createClass2["default"])(GetConfigurationDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetConfigurationDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetConfigurationDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetConfigurationDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetConfigurationDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetConfigurationDescriptorRequest = GetConfigurationDescriptorRequest;

        var GetConfigurationDescriptorResponse = /*#__PURE__*/function (_pb_1$Message19) {
          (0, _inherits2["default"])(GetConfigurationDescriptorResponse, _pb_1$Message19);

          var _super19 = _createSuper(GetConfigurationDescriptorResponse);

          function GetConfigurationDescriptorResponse(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, GetConfigurationDescriptorResponse);
            _this23 = _super19.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("config" in data && data.config != undefined) {
                _this23.config = data.config;
              }
            }

            return _this23;
          }

          (0, _createClass2["default"])(GetConfigurationDescriptorResponse, [{
            key: "config",
            get: function get() {
              return pb_1.Message.getWrapperField(this, ConfigurationDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject9) {
              function toObject() {
                return _toObject9.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject9.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.config != null) {
                data.config = this.config.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this24 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.config !== undefined) writer.writeMessage(1, this.config, function () {
                return _this24.config.serialize(writer);
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
              var message = new GetConfigurationDescriptorResponse({});

              if (data.config != null) {
                message.config = ConfigurationDescriptor.fromObject(data.config);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetConfigurationDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.config, function () {
                      return message.config = ConfigurationDescriptor.deserialize(reader);
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
              return GetConfigurationDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetConfigurationDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetConfigurationDescriptorResponse = GetConfigurationDescriptorResponse;

        var GetQueryServicesDescriptorRequest = /*#__PURE__*/function (_pb_1$Message20) {
          (0, _inherits2["default"])(GetQueryServicesDescriptorRequest, _pb_1$Message20);

          var _super20 = _createSuper(GetQueryServicesDescriptorRequest);

          function GetQueryServicesDescriptorRequest(data) {
            var _this25;

            (0, _classCallCheck2["default"])(this, GetQueryServicesDescriptorRequest);
            _this25 = _super20.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this25;
          }

          (0, _createClass2["default"])(GetQueryServicesDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetQueryServicesDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetQueryServicesDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetQueryServicesDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetQueryServicesDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetQueryServicesDescriptorRequest = GetQueryServicesDescriptorRequest;

        var GetQueryServicesDescriptorResponse = /*#__PURE__*/function (_pb_1$Message21) {
          (0, _inherits2["default"])(GetQueryServicesDescriptorResponse, _pb_1$Message21);

          var _super21 = _createSuper(GetQueryServicesDescriptorResponse);

          function GetQueryServicesDescriptorResponse(data) {
            var _this26;

            (0, _classCallCheck2["default"])(this, GetQueryServicesDescriptorResponse);
            _this26 = _super21.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("queries" in data && data.queries != undefined) {
                _this26.queries = data.queries;
              }
            }

            return _this26;
          }

          (0, _createClass2["default"])(GetQueryServicesDescriptorResponse, [{
            key: "queries",
            get: function get() {
              return pb_1.Message.getWrapperField(this, QueryServicesDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject10) {
              function toObject() {
                return _toObject10.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject10.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.queries != null) {
                data.queries = this.queries.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this27 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.queries !== undefined) writer.writeMessage(1, this.queries, function () {
                return _this27.queries.serialize(writer);
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
              var message = new GetQueryServicesDescriptorResponse({});

              if (data.queries != null) {
                message.queries = QueryServicesDescriptor.fromObject(data.queries);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetQueryServicesDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.queries, function () {
                      return message.queries = QueryServicesDescriptor.deserialize(reader);
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
              return GetQueryServicesDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetQueryServicesDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetQueryServicesDescriptorResponse = GetQueryServicesDescriptorResponse;

        var GetTxDescriptorRequest = /*#__PURE__*/function (_pb_1$Message22) {
          (0, _inherits2["default"])(GetTxDescriptorRequest, _pb_1$Message22);

          var _super22 = _createSuper(GetTxDescriptorRequest);

          function GetTxDescriptorRequest(data) {
            var _this28;

            (0, _classCallCheck2["default"])(this, GetTxDescriptorRequest);
            _this28 = _super22.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this28;
          }

          (0, _createClass2["default"])(GetTxDescriptorRequest, [{
            key: "toObject",
            value: function toObject() {
              var data = {};
              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
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
              var message = new GetTxDescriptorRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetTxDescriptorRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  default:
                    reader.skipField();
                }
              }

              return message;
            }
          }, {
            key: "deserializeBinary",
            value: function deserializeBinary(bytes) {
              return GetTxDescriptorRequest.deserialize(bytes);
            }
          }]);
          return GetTxDescriptorRequest;
        }(pb_1.Message);

        _v2alpha.GetTxDescriptorRequest = GetTxDescriptorRequest;

        var GetTxDescriptorResponse = /*#__PURE__*/function (_pb_1$Message23) {
          (0, _inherits2["default"])(GetTxDescriptorResponse, _pb_1$Message23);

          var _super23 = _createSuper(GetTxDescriptorResponse);

          function GetTxDescriptorResponse(data) {
            var _this29;

            (0, _classCallCheck2["default"])(this, GetTxDescriptorResponse);
            _this29 = _super23.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("tx" in data && data.tx != undefined) {
                _this29.tx = data.tx;
              }
            }

            return _this29;
          }

          (0, _createClass2["default"])(GetTxDescriptorResponse, [{
            key: "tx",
            get: function get() {
              return pb_1.Message.getWrapperField(this, TxDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject11) {
              function toObject() {
                return _toObject11.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject11.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.tx != null) {
                data.tx = this.tx.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this30 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.tx !== undefined) writer.writeMessage(1, this.tx, function () {
                return _this30.tx.serialize(writer);
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
              var message = new GetTxDescriptorResponse({});

              if (data.tx != null) {
                message.tx = TxDescriptor.fromObject(data.tx);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetTxDescriptorResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.tx, function () {
                      return message.tx = TxDescriptor.deserialize(reader);
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
              return GetTxDescriptorResponse.deserialize(bytes);
            }
          }]);
          return GetTxDescriptorResponse;
        }(pb_1.Message);

        _v2alpha.GetTxDescriptorResponse = GetTxDescriptorResponse;

        var QueryServicesDescriptor = /*#__PURE__*/function (_pb_1$Message24) {
          (0, _inherits2["default"])(QueryServicesDescriptor, _pb_1$Message24);

          var _super24 = _createSuper(QueryServicesDescriptor);

          function QueryServicesDescriptor(data) {
            var _this31;

            (0, _classCallCheck2["default"])(this, QueryServicesDescriptor);
            _this31 = _super24.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this31), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("query_services" in data && data.query_services != undefined) {
                _this31.query_services = data.query_services;
              }
            }

            return _this31;
          }

          (0, _createClass2["default"])(QueryServicesDescriptor, [{
            key: "query_services",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, QueryServiceDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject12) {
              function toObject() {
                return _toObject12.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject12.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.query_services != null) {
                data.query_services = this.query_services.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.query_services !== undefined) writer.writeRepeatedMessage(1, this.query_services, function (item) {
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
              var message = new QueryServicesDescriptor({});

              if (data.query_services != null) {
                message.query_services = data.query_services.map(function (item) {
                  return QueryServiceDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryServicesDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.query_services, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, QueryServiceDescriptor.deserialize(reader), QueryServiceDescriptor);
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
              return QueryServicesDescriptor.deserialize(bytes);
            }
          }]);
          return QueryServicesDescriptor;
        }(pb_1.Message);

        _v2alpha.QueryServicesDescriptor = QueryServicesDescriptor;

        var QueryServiceDescriptor = /*#__PURE__*/function (_pb_1$Message25) {
          (0, _inherits2["default"])(QueryServiceDescriptor, _pb_1$Message25);

          var _super25 = _createSuper(QueryServiceDescriptor);

          function QueryServiceDescriptor(data) {
            var _this32;

            (0, _classCallCheck2["default"])(this, QueryServiceDescriptor);
            _this32 = _super25.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this32), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("fullname" in data && data.fullname != undefined) {
                _this32.fullname = data.fullname;
              }

              if ("is_module" in data && data.is_module != undefined) {
                _this32.is_module = data.is_module;
              }

              if ("methods" in data && data.methods != undefined) {
                _this32.methods = data.methods;
              }
            }

            return _this32;
          }

          (0, _createClass2["default"])(QueryServiceDescriptor, [{
            key: "fullname",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "is_module",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "methods",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, QueryMethodDescriptor, 3);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject13) {
              function toObject() {
                return _toObject13.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject13.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.fullname != null) {
                data.fullname = this.fullname;
              }

              if (this.is_module != null) {
                data.is_module = this.is_module;
              }

              if (this.methods != null) {
                data.methods = this.methods.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.fullname === "string" && this.fullname.length) writer.writeString(1, this.fullname);
              if (this.is_module !== undefined) writer.writeBool(2, this.is_module);
              if (this.methods !== undefined) writer.writeRepeatedMessage(3, this.methods, function (item) {
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
              var message = new QueryServiceDescriptor({});

              if (data.fullname != null) {
                message.fullname = data.fullname;
              }

              if (data.is_module != null) {
                message.is_module = data.is_module;
              }

              if (data.methods != null) {
                message.methods = data.methods.map(function (item) {
                  return QueryMethodDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryServiceDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.fullname = reader.readString();
                    break;

                  case 2:
                    message.is_module = reader.readBool();
                    break;

                  case 3:
                    reader.readMessage(message.methods, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 3, QueryMethodDescriptor.deserialize(reader), QueryMethodDescriptor);
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
              return QueryServiceDescriptor.deserialize(bytes);
            }
          }]);
          return QueryServiceDescriptor;
        }(pb_1.Message);

        _v2alpha.QueryServiceDescriptor = QueryServiceDescriptor;

        var QueryMethodDescriptor = /*#__PURE__*/function (_pb_1$Message26) {
          (0, _inherits2["default"])(QueryMethodDescriptor, _pb_1$Message26);

          var _super26 = _createSuper(QueryMethodDescriptor);

          function QueryMethodDescriptor(data) {
            var _this33;

            (0, _classCallCheck2["default"])(this, QueryMethodDescriptor);
            _this33 = _super26.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this33), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this33.name = data.name;
              }

              if ("full_query_path" in data && data.full_query_path != undefined) {
                _this33.full_query_path = data.full_query_path;
              }
            }

            return _this33;
          }

          (0, _createClass2["default"])(QueryMethodDescriptor, [{
            key: "name",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "full_query_path",
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

              if (this.name != null) {
                data.name = this.name;
              }

              if (this.full_query_path != null) {
                data.full_query_path = this.full_query_path;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
              if (typeof this.full_query_path === "string" && this.full_query_path.length) writer.writeString(2, this.full_query_path);
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
              var message = new QueryMethodDescriptor({});

              if (data.name != null) {
                message.name = data.name;
              }

              if (data.full_query_path != null) {
                message.full_query_path = data.full_query_path;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryMethodDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
                    break;

                  case 2:
                    message.full_query_path = reader.readString();
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
              return QueryMethodDescriptor.deserialize(bytes);
            }
          }]);
          return QueryMethodDescriptor;
        }(pb_1.Message);

        _v2alpha.QueryMethodDescriptor = QueryMethodDescriptor;

        var UnimplementedReflectionServiceService = function UnimplementedReflectionServiceService() {
          (0, _classCallCheck2["default"])(this, UnimplementedReflectionServiceService);
        };

        (0, _defineProperty2["default"])(UnimplementedReflectionServiceService, "definition", {
          GetAuthnDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetAuthnDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetAuthnDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetChainDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetChainDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetChainDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetCodecDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetCodecDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetCodecDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetConfigurationDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetConfigurationDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetConfigurationDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetQueryServicesDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetQueryServicesDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetQueryServicesDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetTxDescriptor: {
            path: "/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetTxDescriptorRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetTxDescriptorResponse.deserialize(new Uint8Array(bytes));
            }
          }
        });
        _v2alpha.UnimplementedReflectionServiceService = UnimplementedReflectionServiceService;

        var ReflectionServiceClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
          (0, _inherits2["default"])(ReflectionServiceClient, _grpc_1$makeGenericCl);

          var _super27 = _createSuper(ReflectionServiceClient);

          function ReflectionServiceClient(address, credentials, _options) {
            var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _this34;

            (0, _classCallCheck2["default"])(this, ReflectionServiceClient);
            _this34 = _super27.call(this, address, credentials, _options);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetAuthnDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetAuthnDescriptor", _thisSuper).call(_thisSuper, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetChainDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetChainDescriptor", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetCodecDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetCodecDescriptor", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetConfigurationDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetConfigurationDescriptor", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetQueryServicesDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetQueryServicesDescriptor", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this34), "GetTxDescriptor", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this34), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "GetTxDescriptor", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
            });
            return _this34;
          }

          return ReflectionServiceClient;
        }(grpc_1.makeGenericClientConstructor(UnimplementedReflectionServiceService.definition, "ReflectionService", {}));

        _v2alpha.ReflectionServiceClient = ReflectionServiceClient;
      })(v2alpha1 || (v2alpha1 = _reflection.v2alpha1 || (_reflection.v2alpha1 = {})));
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));