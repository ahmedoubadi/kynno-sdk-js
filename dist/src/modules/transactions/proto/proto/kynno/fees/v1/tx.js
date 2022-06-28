"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var fees;

  (function (_fees) {
    var v1;

    (function (_v) {
      var MsgRegisterDevFeeInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgRegisterDevFeeInfo, _pb_1$Message);

        var _super = _createSuper(MsgRegisterDevFeeInfo);

        function MsgRegisterDevFeeInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgRegisterDevFeeInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this.deployer_address = data.deployer_address;
            }

            if ("withdraw_address" in data && data.withdraw_address != undefined) {
              _this.withdraw_address = data.withdraw_address;
            }

            if ("nonces" in data && data.nonces != undefined) {
              _this.nonces = data.nonces;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgRegisterDevFeeInfo, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "deployer_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "withdraw_address",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "nonces",
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.deployer_address != null) {
              data.deployer_address = this.deployer_address;
            }

            if (this.withdraw_address != null) {
              data.withdraw_address = this.withdraw_address;
            }

            if (this.nonces != null) {
              data.nonces = this.nonces;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(2, this.deployer_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length) writer.writeString(3, this.withdraw_address);
            if (this.nonces !== undefined) writer.writePackedUint64(4, this.nonces);
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
            var message = new MsgRegisterDevFeeInfo({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            if (data.withdraw_address != null) {
              message.withdraw_address = data.withdraw_address;
            }

            if (data.nonces != null) {
              message.nonces = data.nonces;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgRegisterDevFeeInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.deployer_address = reader.readString();
                  break;

                case 3:
                  message.withdraw_address = reader.readString();
                  break;

                case 4:
                  message.nonces = reader.readPackedUint64();
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
            return MsgRegisterDevFeeInfo.deserialize(bytes);
          }
        }]);
        return MsgRegisterDevFeeInfo;
      }(pb_1.Message);

      _v.MsgRegisterDevFeeInfo = MsgRegisterDevFeeInfo;

      var MsgRegisterDevFeeInfoResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgRegisterDevFeeInfoResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgRegisterDevFeeInfoResponse);

        function MsgRegisterDevFeeInfoResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, MsgRegisterDevFeeInfoResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this2;
        }

        (0, _createClass2["default"])(MsgRegisterDevFeeInfoResponse, [{
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
            var message = new MsgRegisterDevFeeInfoResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgRegisterDevFeeInfoResponse();

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
            return MsgRegisterDevFeeInfoResponse.deserialize(bytes);
          }
        }]);
        return MsgRegisterDevFeeInfoResponse;
      }(pb_1.Message);

      _v.MsgRegisterDevFeeInfoResponse = MsgRegisterDevFeeInfoResponse;

      var MsgCancelDevFeeInfo = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgCancelDevFeeInfo, _pb_1$Message3);

        var _super3 = _createSuper(MsgCancelDevFeeInfo);

        function MsgCancelDevFeeInfo(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgCancelDevFeeInfo);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this3.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this3.deployer_address = data.deployer_address;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(MsgCancelDevFeeInfo, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "deployer_address",
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.deployer_address != null) {
              data.deployer_address = this.deployer_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(2, this.deployer_address);
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
            var message = new MsgCancelDevFeeInfo({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCancelDevFeeInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.deployer_address = reader.readString();
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
            return MsgCancelDevFeeInfo.deserialize(bytes);
          }
        }]);
        return MsgCancelDevFeeInfo;
      }(pb_1.Message);

      _v.MsgCancelDevFeeInfo = MsgCancelDevFeeInfo;

      var MsgCancelDevFeeInfoResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgCancelDevFeeInfoResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgCancelDevFeeInfoResponse);

        function MsgCancelDevFeeInfoResponse(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgCancelDevFeeInfoResponse);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this4;
        }

        (0, _createClass2["default"])(MsgCancelDevFeeInfoResponse, [{
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
            var message = new MsgCancelDevFeeInfoResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCancelDevFeeInfoResponse();

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
            return MsgCancelDevFeeInfoResponse.deserialize(bytes);
          }
        }]);
        return MsgCancelDevFeeInfoResponse;
      }(pb_1.Message);

      _v.MsgCancelDevFeeInfoResponse = MsgCancelDevFeeInfoResponse;

      var MsgUpdateDevFeeInfo = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(MsgUpdateDevFeeInfo, _pb_1$Message5);

        var _super5 = _createSuper(MsgUpdateDevFeeInfo);

        function MsgUpdateDevFeeInfo(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgUpdateDevFeeInfo);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this5.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this5.deployer_address = data.deployer_address;
            }

            if ("withdraw_address" in data && data.withdraw_address != undefined) {
              _this5.withdraw_address = data.withdraw_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(MsgUpdateDevFeeInfo, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "deployer_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "withdraw_address",
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.deployer_address != null) {
              data.deployer_address = this.deployer_address;
            }

            if (this.withdraw_address != null) {
              data.withdraw_address = this.withdraw_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(2, this.deployer_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length) writer.writeString(3, this.withdraw_address);
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
            var message = new MsgUpdateDevFeeInfo({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            if (data.withdraw_address != null) {
              message.withdraw_address = data.withdraw_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUpdateDevFeeInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.deployer_address = reader.readString();
                  break;

                case 3:
                  message.withdraw_address = reader.readString();
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
            return MsgUpdateDevFeeInfo.deserialize(bytes);
          }
        }]);
        return MsgUpdateDevFeeInfo;
      }(pb_1.Message);

      _v.MsgUpdateDevFeeInfo = MsgUpdateDevFeeInfo;

      var MsgUpdateDevFeeInfoResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgUpdateDevFeeInfoResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgUpdateDevFeeInfoResponse);

        function MsgUpdateDevFeeInfoResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MsgUpdateDevFeeInfoResponse);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(MsgUpdateDevFeeInfoResponse, [{
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
            var message = new MsgUpdateDevFeeInfoResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUpdateDevFeeInfoResponse();

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
            return MsgUpdateDevFeeInfoResponse.deserialize(bytes);
          }
        }]);
        return MsgUpdateDevFeeInfoResponse;
      }(pb_1.Message);

      _v.MsgUpdateDevFeeInfoResponse = MsgUpdateDevFeeInfoResponse;
      var UnimplementedMsgService = /*#__PURE__*/(0, _createClass2["default"])(function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      });
      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        RegisterDevFeeInfo: {
          path: "/kynno.fees.v1.Msg/RegisterDevFeeInfo",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgRegisterDevFeeInfo.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgRegisterDevFeeInfoResponse.deserialize(new Uint8Array(bytes));
          }
        },
        CancelDevFeeInfo: {
          path: "/kynno.fees.v1.Msg/CancelDevFeeInfo",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgCancelDevFeeInfo.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgCancelDevFeeInfoResponse.deserialize(new Uint8Array(bytes));
          }
        },
        UpdateDevFeeInfo: {
          path: "/kynno.fees.v1.Msg/UpdateDevFeeInfo",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgUpdateDevFeeInfo.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgUpdateDevFeeInfoResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedMsgService = UnimplementedMsgService;
    })(v1 || (v1 = _fees.v1 || (_fees.v1 = {})));
  })(fees || (fees = _kynno.fees || (_kynno.fees = {})));
})(kynno || (exports.kynno = kynno = {}));