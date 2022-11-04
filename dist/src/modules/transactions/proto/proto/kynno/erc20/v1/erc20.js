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

var dependency_2 = _interopRequireWildcard(require("./../../../cosmos/bank/v1beta1/bank"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var erc20;

  (function (_erc) {
    var v1;

    (function (_v) {
      var Owner;

      (function (Owner) {
        Owner[Owner["OWNER_UNSPECIFIED"] = 0] = "OWNER_UNSPECIFIED";
        Owner[Owner["OWNER_MODULE"] = 1] = "OWNER_MODULE";
        Owner[Owner["OWNER_EXTERNAL"] = 2] = "OWNER_EXTERNAL";
      })(Owner || (Owner = {}));

      _v.Owner = Owner;

      var TokenPair = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(TokenPair, _pb_1$Message);

        var _super = _createSuper(TokenPair);

        function TokenPair(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, TokenPair);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("erc20_address" in data && data.erc20_address != undefined) {
              _this.erc20_address = data.erc20_address;
            }

            if ("denom" in data && data.denom != undefined) {
              _this.denom = data.denom;
            }

            if ("enabled" in data && data.enabled != undefined) {
              _this.enabled = data.enabled;
            }

            if ("contract_owner" in data && data.contract_owner != undefined) {
              _this.contract_owner = data.contract_owner;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(TokenPair, [{
          key: "erc20_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "denom",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "enabled",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "contract_owner",
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

            if (this.erc20_address != null) {
              data.erc20_address = this.erc20_address;
            }

            if (this.denom != null) {
              data.denom = this.denom;
            }

            if (this.enabled != null) {
              data.enabled = this.enabled;
            }

            if (this.contract_owner != null) {
              data.contract_owner = this.contract_owner;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.erc20_address === "string" && this.erc20_address.length) writer.writeString(1, this.erc20_address);
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(2, this.denom);
            if (this.enabled !== undefined) writer.writeBool(3, this.enabled);
            if (this.contract_owner !== undefined) writer.writeEnum(4, this.contract_owner);
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
            var message = new TokenPair({});

            if (data.erc20_address != null) {
              message.erc20_address = data.erc20_address;
            }

            if (data.denom != null) {
              message.denom = data.denom;
            }

            if (data.enabled != null) {
              message.enabled = data.enabled;
            }

            if (data.contract_owner != null) {
              message.contract_owner = data.contract_owner;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TokenPair();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.erc20_address = reader.readString();
                  break;

                case 2:
                  message.denom = reader.readString();
                  break;

                case 3:
                  message.enabled = reader.readBool();
                  break;

                case 4:
                  message.contract_owner = reader.readEnum();
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
            return TokenPair.deserialize(bytes);
          }
        }]);
        return TokenPair;
      }(pb_1.Message);

      _v.TokenPair = TokenPair;

      var RegisterCoinProposal = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(RegisterCoinProposal, _pb_1$Message2);

        var _super2 = _createSuper(RegisterCoinProposal);

        function RegisterCoinProposal(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, RegisterCoinProposal);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this2.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this2.description = data.description;
            }

            if ("metadata" in data && data.metadata != undefined) {
              _this2.metadata = data.metadata;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(RegisterCoinProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "metadata",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.bank.v1beta1.Metadata, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.metadata != null) {
              data.metadata = this.metadata.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (this.metadata !== undefined) writer.writeMessage(3, this.metadata, function () {
              return _this3.metadata.serialize(writer);
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
            var message = new RegisterCoinProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.metadata != null) {
              message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.fromObject(data.metadata);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RegisterCoinProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.metadata, function () {
                    return message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.deserialize(reader);
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
            return RegisterCoinProposal.deserialize(bytes);
          }
        }]);
        return RegisterCoinProposal;
      }(pb_1.Message);

      _v.RegisterCoinProposal = RegisterCoinProposal;

      var RegisterERC20Proposal = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(RegisterERC20Proposal, _pb_1$Message3);

        var _super3 = _createSuper(RegisterERC20Proposal);

        function RegisterERC20Proposal(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, RegisterERC20Proposal);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this4.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this4.description = data.description;
            }

            if ("erc20address" in data && data.erc20address != undefined) {
              _this4.erc20address = data.erc20address;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(RegisterERC20Proposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "erc20address",
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.erc20address != null) {
              data.erc20address = this.erc20address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.erc20address === "string" && this.erc20address.length) writer.writeString(3, this.erc20address);
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
            var message = new RegisterERC20Proposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.erc20address != null) {
              message.erc20address = data.erc20address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RegisterERC20Proposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.erc20address = reader.readString();
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
            return RegisterERC20Proposal.deserialize(bytes);
          }
        }]);
        return RegisterERC20Proposal;
      }(pb_1.Message);

      _v.RegisterERC20Proposal = RegisterERC20Proposal;

      var ToggleTokenConversionProposal = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(ToggleTokenConversionProposal, _pb_1$Message4);

        var _super4 = _createSuper(ToggleTokenConversionProposal);

        function ToggleTokenConversionProposal(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, ToggleTokenConversionProposal);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this5.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this5.description = data.description;
            }

            if ("token" in data && data.token != undefined) {
              _this5.token = data.token;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(ToggleTokenConversionProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "token",
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.token != null) {
              data.token = this.token;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.token === "string" && this.token.length) writer.writeString(3, this.token);
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
            var message = new ToggleTokenConversionProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.token != null) {
              message.token = data.token;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ToggleTokenConversionProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.token = reader.readString();
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
            return ToggleTokenConversionProposal.deserialize(bytes);
          }
        }]);
        return ToggleTokenConversionProposal;
      }(pb_1.Message);

      _v.ToggleTokenConversionProposal = ToggleTokenConversionProposal;
    })(v1 || (v1 = _erc.v1 || (_erc.v1 = {})));
  })(erc20 || (erc20 = _kynno.erc20 || (_kynno.erc20 = {})));
})(kynno || (exports.kynno = kynno = {}));