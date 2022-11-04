"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

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

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var rewardshare;

  (function (_rewardshare) {
    var v1;

    (function (_v) {
      var MsgRegisterRewardshare = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgRegisterRewardshare, _pb_1$Message);

        var _super = _createSuper(MsgRegisterRewardshare);

        function MsgRegisterRewardshare(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgRegisterRewardshare);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this.deployer_address = data.deployer_address;
            }

            if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
              _this.withdrawer_address = data.withdrawer_address;
            }

            if ("nonces" in data && data.nonces != undefined) {
              _this.nonces = data.nonces;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgRegisterRewardshare, [{
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
          key: "withdrawer_address",
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

            if (this.withdrawer_address != null) {
              data.withdrawer_address = this.withdrawer_address;
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
            if (typeof this.withdrawer_address === "string" && this.withdrawer_address.length) writer.writeString(3, this.withdrawer_address);
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
            var message = new MsgRegisterRewardshare({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            if (data.withdrawer_address != null) {
              message.withdrawer_address = data.withdrawer_address;
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
                message = new MsgRegisterRewardshare();

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
                  message.withdrawer_address = reader.readString();
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
            return MsgRegisterRewardshare.deserialize(bytes);
          }
        }]);
        return MsgRegisterRewardshare;
      }(pb_1.Message);

      _v.MsgRegisterRewardshare = MsgRegisterRewardshare;

      var MsgRegisterRewardshareResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgRegisterRewardshareResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgRegisterRewardshareResponse);

        function MsgRegisterRewardshareResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, MsgRegisterRewardshareResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this2;
        }

        (0, _createClass2["default"])(MsgRegisterRewardshareResponse, [{
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
            var message = new MsgRegisterRewardshareResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgRegisterRewardshareResponse();

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
            return MsgRegisterRewardshareResponse.deserialize(bytes);
          }
        }]);
        return MsgRegisterRewardshareResponse;
      }(pb_1.Message);

      _v.MsgRegisterRewardshareResponse = MsgRegisterRewardshareResponse;

      var MsgUpdateRewardshare = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgUpdateRewardshare, _pb_1$Message3);

        var _super3 = _createSuper(MsgUpdateRewardshare);

        function MsgUpdateRewardshare(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgUpdateRewardshare);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this3.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this3.deployer_address = data.deployer_address;
            }

            if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
              _this3.withdrawer_address = data.withdrawer_address;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(MsgUpdateRewardshare, [{
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
          key: "withdrawer_address",
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

            if (this.withdrawer_address != null) {
              data.withdrawer_address = this.withdrawer_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(2, this.deployer_address);
            if (typeof this.withdrawer_address === "string" && this.withdrawer_address.length) writer.writeString(3, this.withdrawer_address);
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
            var message = new MsgUpdateRewardshare({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            if (data.withdrawer_address != null) {
              message.withdrawer_address = data.withdrawer_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUpdateRewardshare();

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
                  message.withdrawer_address = reader.readString();
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
            return MsgUpdateRewardshare.deserialize(bytes);
          }
        }]);
        return MsgUpdateRewardshare;
      }(pb_1.Message);

      _v.MsgUpdateRewardshare = MsgUpdateRewardshare;

      var MsgUpdateRewardshareResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgUpdateRewardshareResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgUpdateRewardshareResponse);

        function MsgUpdateRewardshareResponse(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgUpdateRewardshareResponse);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this4;
        }

        (0, _createClass2["default"])(MsgUpdateRewardshareResponse, [{
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
            var message = new MsgUpdateRewardshareResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgUpdateRewardshareResponse();

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
            return MsgUpdateRewardshareResponse.deserialize(bytes);
          }
        }]);
        return MsgUpdateRewardshareResponse;
      }(pb_1.Message);

      _v.MsgUpdateRewardshareResponse = MsgUpdateRewardshareResponse;

      var MsgCancelRewardshare = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(MsgCancelRewardshare, _pb_1$Message5);

        var _super5 = _createSuper(MsgCancelRewardshare);

        function MsgCancelRewardshare(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgCancelRewardshare);
          _this5 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this5.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this5.deployer_address = data.deployer_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(MsgCancelRewardshare, [{
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
            var message = new MsgCancelRewardshare({});

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
                message = new MsgCancelRewardshare();

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
            return MsgCancelRewardshare.deserialize(bytes);
          }
        }]);
        return MsgCancelRewardshare;
      }(pb_1.Message);

      _v.MsgCancelRewardshare = MsgCancelRewardshare;

      var MsgCancelRewardshareResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgCancelRewardshareResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgCancelRewardshareResponse);

        function MsgCancelRewardshareResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MsgCancelRewardshareResponse);
          _this6 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this6;
        }

        (0, _createClass2["default"])(MsgCancelRewardshareResponse, [{
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
            var message = new MsgCancelRewardshareResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCancelRewardshareResponse();

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
            return MsgCancelRewardshareResponse.deserialize(bytes);
          }
        }]);
        return MsgCancelRewardshareResponse;
      }(pb_1.Message);

      _v.MsgCancelRewardshareResponse = MsgCancelRewardshareResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        RegisterRewardshare: {
          path: "/kynno.rewardshare.v1.Msg/RegisterRewardshare",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgRegisterRewardshare.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgRegisterRewardshareResponse.deserialize(new Uint8Array(bytes));
          }
        },
        UpdateRewardshare: {
          path: "/kynno.rewardshare.v1.Msg/UpdateRewardshare",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgUpdateRewardshare.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgUpdateRewardshareResponse.deserialize(new Uint8Array(bytes));
          }
        },
        CancelRewardshare: {
          path: "/kynno.rewardshare.v1.Msg/CancelRewardshare",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgCancelRewardshare.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgCancelRewardshareResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super7 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _this7;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this7 = _super7.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "RegisterRewardshare", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this7), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "RegisterRewardshare", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "UpdateRewardshare", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this7), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "UpdateRewardshare", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "CancelRewardshare", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this7), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "CancelRewardshare", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          return _this7;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v.MsgClient = MsgClient;
    })(v1 || (v1 = _rewardshare.v1 || (_rewardshare.v1 = {})));
  })(rewardshare || (rewardshare = _kynno.rewardshare || (_kynno.rewardshare = {})));
})(kynno || (exports.kynno = kynno = {}));