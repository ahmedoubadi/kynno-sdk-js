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

var dependency_1 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var applications;

  (function (_applications) {
    var interchain_accounts;

    (function (_interchain_accounts) {
      var v1;

      (function (_v) {
        var Type;

        (function (Type) {
          Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
          Type[Type["TYPE_EXECUTE_TX"] = 1] = "TYPE_EXECUTE_TX";
        })(Type || (Type = {}));

        _v.Type = Type;

        var InterchainAccountPacketData = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(InterchainAccountPacketData, _pb_1$Message);

          var _super = _createSuper(InterchainAccountPacketData);

          function InterchainAccountPacketData(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, InterchainAccountPacketData);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("type" in data && data.type != undefined) {
                _this.type = data.type;
              }

              if ("data" in data && data.data != undefined) {
                _this.data = data.data;
              }

              if ("memo" in data && data.memo != undefined) {
                _this.memo = data.memo;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(InterchainAccountPacketData, [{
            key: "type",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "memo",
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

              if (this.type != null) {
                data.type = this.type;
              }

              if (this.data != null) {
                data.data = this.data;
              }

              if (this.memo != null) {
                data.memo = this.memo;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.type !== undefined) writer.writeEnum(1, this.type);
              if (this.data !== undefined) writer.writeBytes(2, this.data);
              if (typeof this.memo === "string" && this.memo.length) writer.writeString(3, this.memo);
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
              var message = new InterchainAccountPacketData({});

              if (data.type != null) {
                message.type = data.type;
              }

              if (data.data != null) {
                message.data = data.data;
              }

              if (data.memo != null) {
                message.memo = data.memo;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new InterchainAccountPacketData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.type = reader.readEnum();
                    break;

                  case 2:
                    message.data = reader.readBytes();
                    break;

                  case 3:
                    message.memo = reader.readString();
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
              return InterchainAccountPacketData.deserialize(bytes);
            }
          }]);
          return InterchainAccountPacketData;
        }(pb_1.Message);

        _v.InterchainAccountPacketData = InterchainAccountPacketData;

        var CosmosTx = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(CosmosTx, _pb_1$Message2);

          var _super2 = _createSuper(CosmosTx);

          function CosmosTx(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, CosmosTx);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("messages" in data && data.messages != undefined) {
                _this2.messages = data.messages;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(CosmosTx, [{
            key: "messages",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.messages != null) {
                data.messages = this.messages.map(function (item) {
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
              var message = new CosmosTx({});

              if (data.messages != null) {
                message.messages = data.messages.map(function (item) {
                  return dependency_1.google.protobuf.Any.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new CosmosTx();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.messages, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any);
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
              return CosmosTx.deserialize(bytes);
            }
          }]);
          return CosmosTx;
        }(pb_1.Message);

        _v.CosmosTx = CosmosTx;
      })(v1 || (v1 = _interchain_accounts.v1 || (_interchain_accounts.v1 = {})));
    })(interchain_accounts || (interchain_accounts = _applications.interchain_accounts || (_applications.interchain_accounts = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));