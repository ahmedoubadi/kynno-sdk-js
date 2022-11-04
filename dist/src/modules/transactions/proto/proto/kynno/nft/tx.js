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
  var nft;

  (function (_nft) {
    var MsgIssueDenom = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(MsgIssueDenom, _pb_1$Message);

      var _super = _createSuper(MsgIssueDenom);

      function MsgIssueDenom(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, MsgIssueDenom);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this.id = data.id;
          }

          if ("name" in data && data.name != undefined) {
            _this.name = data.name;
          }

          if ("schema" in data && data.schema != undefined) {
            _this.schema = data.schema;
          }

          if ("sender" in data && data.sender != undefined) {
            _this.sender = data.sender;
          }

          if ("symbol" in data && data.symbol != undefined) {
            _this.symbol = data.symbol;
          }

          if ("mint_restricted" in data && data.mint_restricted != undefined) {
            _this.mint_restricted = data.mint_restricted;
          }

          if ("update_restricted" in data && data.update_restricted != undefined) {
            _this.update_restricted = data.update_restricted;
          }

          if ("description" in data && data.description != undefined) {
            _this.description = data.description;
          }

          if ("uri" in data && data.uri != undefined) {
            _this.uri = data.uri;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this.uri_hash = data.uri_hash;
          }

          if ("data" in data && data.data != undefined) {
            _this.data = data.data;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(MsgIssueDenom, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
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
        key: "schema",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "sender",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "symbol",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "mint_restricted",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "update_restricted",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "description",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "uri",
        get: function get() {
          return pb_1.Message.getField(this, 9);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 9, value);
        }
      }, {
        key: "uri_hash",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 11);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 11, value);
        }
      }, {
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.schema != null) {
            data.schema = this.schema;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          if (this.symbol != null) {
            data.symbol = this.symbol;
          }

          if (this.mint_restricted != null) {
            data.mint_restricted = this.mint_restricted;
          }

          if (this.update_restricted != null) {
            data.update_restricted = this.update_restricted;
          }

          if (this.description != null) {
            data.description = this.description;
          }

          if (this.uri != null) {
            data.uri = this.uri;
          }

          if (this.uri_hash != null) {
            data.uri_hash = this.uri_hash;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
          if (typeof this.schema === "string" && this.schema.length) writer.writeString(3, this.schema);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(4, this.sender);
          if (typeof this.symbol === "string" && this.symbol.length) writer.writeString(5, this.symbol);
          if (this.mint_restricted !== undefined) writer.writeBool(6, this.mint_restricted);
          if (this.update_restricted !== undefined) writer.writeBool(7, this.update_restricted);
          if (typeof this.description === "string" && this.description.length) writer.writeString(8, this.description);
          if (typeof this.uri === "string" && this.uri.length) writer.writeString(9, this.uri);
          if (typeof this.uri_hash === "string" && this.uri_hash.length) writer.writeString(10, this.uri_hash);
          if (typeof this.data === "string" && this.data.length) writer.writeString(11, this.data);
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
          var message = new MsgIssueDenom({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.schema != null) {
            message.schema = data.schema;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          if (data.symbol != null) {
            message.symbol = data.symbol;
          }

          if (data.mint_restricted != null) {
            message.mint_restricted = data.mint_restricted;
          }

          if (data.update_restricted != null) {
            message.update_restricted = data.update_restricted;
          }

          if (data.description != null) {
            message.description = data.description;
          }

          if (data.uri != null) {
            message.uri = data.uri;
          }

          if (data.uri_hash != null) {
            message.uri_hash = data.uri_hash;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgIssueDenom();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.name = reader.readString();
                break;

              case 3:
                message.schema = reader.readString();
                break;

              case 4:
                message.sender = reader.readString();
                break;

              case 5:
                message.symbol = reader.readString();
                break;

              case 6:
                message.mint_restricted = reader.readBool();
                break;

              case 7:
                message.update_restricted = reader.readBool();
                break;

              case 8:
                message.description = reader.readString();
                break;

              case 9:
                message.uri = reader.readString();
                break;

              case 10:
                message.uri_hash = reader.readString();
                break;

              case 11:
                message.data = reader.readString();
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
          return MsgIssueDenom.deserialize(bytes);
        }
      }]);
      return MsgIssueDenom;
    }(pb_1.Message);

    _nft.MsgIssueDenom = MsgIssueDenom;

    var MsgIssueDenomResponse = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(MsgIssueDenomResponse, _pb_1$Message2);

      var _super2 = _createSuper(MsgIssueDenomResponse);

      function MsgIssueDenomResponse(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, MsgIssueDenomResponse);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this2;
      }

      (0, _createClass2["default"])(MsgIssueDenomResponse, [{
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
          var message = new MsgIssueDenomResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgIssueDenomResponse();

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
          return MsgIssueDenomResponse.deserialize(bytes);
        }
      }]);
      return MsgIssueDenomResponse;
    }(pb_1.Message);

    _nft.MsgIssueDenomResponse = MsgIssueDenomResponse;

    var MsgTransferNFT = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(MsgTransferNFT, _pb_1$Message3);

      var _super3 = _createSuper(MsgTransferNFT);

      function MsgTransferNFT(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, MsgTransferNFT);
        _this3 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this3.id = data.id;
          }

          if ("denom_id" in data && data.denom_id != undefined) {
            _this3.denom_id = data.denom_id;
          }

          if ("name" in data && data.name != undefined) {
            _this3.name = data.name;
          }

          if ("uri" in data && data.uri != undefined) {
            _this3.uri = data.uri;
          }

          if ("data" in data && data.data != undefined) {
            _this3.data = data.data;
          }

          if ("sender" in data && data.sender != undefined) {
            _this3.sender = data.sender;
          }

          if ("recipient" in data && data.recipient != undefined) {
            _this3.recipient = data.recipient;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this3.uri_hash = data.uri_hash;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(MsgTransferNFT, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "uri",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "sender",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "recipient",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "uri_hash",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.uri != null) {
            data.uri = this.uri;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          if (this.recipient != null) {
            data.recipient = this.recipient;
          }

          if (this.uri_hash != null) {
            data.uri_hash = this.uri_hash;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(2, this.denom_id);
          if (typeof this.name === "string" && this.name.length) writer.writeString(3, this.name);
          if (typeof this.uri === "string" && this.uri.length) writer.writeString(4, this.uri);
          if (typeof this.data === "string" && this.data.length) writer.writeString(5, this.data);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(6, this.sender);
          if (typeof this.recipient === "string" && this.recipient.length) writer.writeString(7, this.recipient);
          if (typeof this.uri_hash === "string" && this.uri_hash.length) writer.writeString(8, this.uri_hash);
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
          var message = new MsgTransferNFT({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.uri != null) {
            message.uri = data.uri;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          if (data.recipient != null) {
            message.recipient = data.recipient;
          }

          if (data.uri_hash != null) {
            message.uri_hash = data.uri_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgTransferNFT();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.denom_id = reader.readString();
                break;

              case 3:
                message.name = reader.readString();
                break;

              case 4:
                message.uri = reader.readString();
                break;

              case 5:
                message.data = reader.readString();
                break;

              case 6:
                message.sender = reader.readString();
                break;

              case 7:
                message.recipient = reader.readString();
                break;

              case 8:
                message.uri_hash = reader.readString();
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
          return MsgTransferNFT.deserialize(bytes);
        }
      }]);
      return MsgTransferNFT;
    }(pb_1.Message);

    _nft.MsgTransferNFT = MsgTransferNFT;

    var MsgTransferNFTResponse = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(MsgTransferNFTResponse, _pb_1$Message4);

      var _super4 = _createSuper(MsgTransferNFTResponse);

      function MsgTransferNFTResponse(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, MsgTransferNFTResponse);
        _this4 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this4;
      }

      (0, _createClass2["default"])(MsgTransferNFTResponse, [{
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
          var message = new MsgTransferNFTResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgTransferNFTResponse();

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
          return MsgTransferNFTResponse.deserialize(bytes);
        }
      }]);
      return MsgTransferNFTResponse;
    }(pb_1.Message);

    _nft.MsgTransferNFTResponse = MsgTransferNFTResponse;

    var MsgEditNFT = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(MsgEditNFT, _pb_1$Message5);

      var _super5 = _createSuper(MsgEditNFT);

      function MsgEditNFT(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, MsgEditNFT);
        _this5 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this5.id = data.id;
          }

          if ("denom_id" in data && data.denom_id != undefined) {
            _this5.denom_id = data.denom_id;
          }

          if ("name" in data && data.name != undefined) {
            _this5.name = data.name;
          }

          if ("uri" in data && data.uri != undefined) {
            _this5.uri = data.uri;
          }

          if ("data" in data && data.data != undefined) {
            _this5.data = data.data;
          }

          if ("sender" in data && data.sender != undefined) {
            _this5.sender = data.sender;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this5.uri_hash = data.uri_hash;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(MsgEditNFT, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "uri",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "sender",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "uri_hash",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.uri != null) {
            data.uri = this.uri;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          if (this.uri_hash != null) {
            data.uri_hash = this.uri_hash;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(2, this.denom_id);
          if (typeof this.name === "string" && this.name.length) writer.writeString(3, this.name);
          if (typeof this.uri === "string" && this.uri.length) writer.writeString(4, this.uri);
          if (typeof this.data === "string" && this.data.length) writer.writeString(5, this.data);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(6, this.sender);
          if (typeof this.uri_hash === "string" && this.uri_hash.length) writer.writeString(7, this.uri_hash);
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
          var message = new MsgEditNFT({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.uri != null) {
            message.uri = data.uri;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          if (data.uri_hash != null) {
            message.uri_hash = data.uri_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgEditNFT();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.denom_id = reader.readString();
                break;

              case 3:
                message.name = reader.readString();
                break;

              case 4:
                message.uri = reader.readString();
                break;

              case 5:
                message.data = reader.readString();
                break;

              case 6:
                message.sender = reader.readString();
                break;

              case 7:
                message.uri_hash = reader.readString();
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
          return MsgEditNFT.deserialize(bytes);
        }
      }]);
      return MsgEditNFT;
    }(pb_1.Message);

    _nft.MsgEditNFT = MsgEditNFT;

    var MsgEditNFTResponse = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(MsgEditNFTResponse, _pb_1$Message6);

      var _super6 = _createSuper(MsgEditNFTResponse);

      function MsgEditNFTResponse(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, MsgEditNFTResponse);
        _this6 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this6;
      }

      (0, _createClass2["default"])(MsgEditNFTResponse, [{
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
          var message = new MsgEditNFTResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgEditNFTResponse();

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
          return MsgEditNFTResponse.deserialize(bytes);
        }
      }]);
      return MsgEditNFTResponse;
    }(pb_1.Message);

    _nft.MsgEditNFTResponse = MsgEditNFTResponse;

    var MsgMintNFT = /*#__PURE__*/function (_pb_1$Message7) {
      (0, _inherits2["default"])(MsgMintNFT, _pb_1$Message7);

      var _super7 = _createSuper(MsgMintNFT);

      function MsgMintNFT(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, MsgMintNFT);
        _this7 = _super7.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this7.id = data.id;
          }

          if ("denom_id" in data && data.denom_id != undefined) {
            _this7.denom_id = data.denom_id;
          }

          if ("name" in data && data.name != undefined) {
            _this7.name = data.name;
          }

          if ("uri" in data && data.uri != undefined) {
            _this7.uri = data.uri;
          }

          if ("data" in data && data.data != undefined) {
            _this7.data = data.data;
          }

          if ("sender" in data && data.sender != undefined) {
            _this7.sender = data.sender;
          }

          if ("recipient" in data && data.recipient != undefined) {
            _this7.recipient = data.recipient;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this7.uri_hash = data.uri_hash;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(MsgMintNFT, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "uri",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "sender",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "recipient",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "uri_hash",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.uri != null) {
            data.uri = this.uri;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          if (this.recipient != null) {
            data.recipient = this.recipient;
          }

          if (this.uri_hash != null) {
            data.uri_hash = this.uri_hash;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(2, this.denom_id);
          if (typeof this.name === "string" && this.name.length) writer.writeString(3, this.name);
          if (typeof this.uri === "string" && this.uri.length) writer.writeString(4, this.uri);
          if (typeof this.data === "string" && this.data.length) writer.writeString(5, this.data);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(6, this.sender);
          if (typeof this.recipient === "string" && this.recipient.length) writer.writeString(7, this.recipient);
          if (typeof this.uri_hash === "string" && this.uri_hash.length) writer.writeString(8, this.uri_hash);
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
          var message = new MsgMintNFT({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.uri != null) {
            message.uri = data.uri;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          if (data.recipient != null) {
            message.recipient = data.recipient;
          }

          if (data.uri_hash != null) {
            message.uri_hash = data.uri_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgMintNFT();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.denom_id = reader.readString();
                break;

              case 3:
                message.name = reader.readString();
                break;

              case 4:
                message.uri = reader.readString();
                break;

              case 5:
                message.data = reader.readString();
                break;

              case 6:
                message.sender = reader.readString();
                break;

              case 7:
                message.recipient = reader.readString();
                break;

              case 8:
                message.uri_hash = reader.readString();
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
          return MsgMintNFT.deserialize(bytes);
        }
      }]);
      return MsgMintNFT;
    }(pb_1.Message);

    _nft.MsgMintNFT = MsgMintNFT;

    var MsgMintNFTResponse = /*#__PURE__*/function (_pb_1$Message8) {
      (0, _inherits2["default"])(MsgMintNFTResponse, _pb_1$Message8);

      var _super8 = _createSuper(MsgMintNFTResponse);

      function MsgMintNFTResponse(data) {
        var _this8;

        (0, _classCallCheck2["default"])(this, MsgMintNFTResponse);
        _this8 = _super8.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this8;
      }

      (0, _createClass2["default"])(MsgMintNFTResponse, [{
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
          var message = new MsgMintNFTResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgMintNFTResponse();

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
          return MsgMintNFTResponse.deserialize(bytes);
        }
      }]);
      return MsgMintNFTResponse;
    }(pb_1.Message);

    _nft.MsgMintNFTResponse = MsgMintNFTResponse;

    var MsgBurnNFT = /*#__PURE__*/function (_pb_1$Message9) {
      (0, _inherits2["default"])(MsgBurnNFT, _pb_1$Message9);

      var _super9 = _createSuper(MsgBurnNFT);

      function MsgBurnNFT(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, MsgBurnNFT);
        _this9 = _super9.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this9.id = data.id;
          }

          if ("denom_id" in data && data.denom_id != undefined) {
            _this9.denom_id = data.denom_id;
          }

          if ("sender" in data && data.sender != undefined) {
            _this9.sender = data.sender;
          }
        }

        return _this9;
      }

      (0, _createClass2["default"])(MsgBurnNFT, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "sender",
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

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(2, this.denom_id);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(3, this.sender);
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
          var message = new MsgBurnNFT({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgBurnNFT();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.denom_id = reader.readString();
                break;

              case 3:
                message.sender = reader.readString();
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
          return MsgBurnNFT.deserialize(bytes);
        }
      }]);
      return MsgBurnNFT;
    }(pb_1.Message);

    _nft.MsgBurnNFT = MsgBurnNFT;

    var MsgBurnNFTResponse = /*#__PURE__*/function (_pb_1$Message10) {
      (0, _inherits2["default"])(MsgBurnNFTResponse, _pb_1$Message10);

      var _super10 = _createSuper(MsgBurnNFTResponse);

      function MsgBurnNFTResponse(data) {
        var _this10;

        (0, _classCallCheck2["default"])(this, MsgBurnNFTResponse);
        _this10 = _super10.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this10;
      }

      (0, _createClass2["default"])(MsgBurnNFTResponse, [{
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
          var message = new MsgBurnNFTResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgBurnNFTResponse();

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
          return MsgBurnNFTResponse.deserialize(bytes);
        }
      }]);
      return MsgBurnNFTResponse;
    }(pb_1.Message);

    _nft.MsgBurnNFTResponse = MsgBurnNFTResponse;

    var MsgTransferDenom = /*#__PURE__*/function (_pb_1$Message11) {
      (0, _inherits2["default"])(MsgTransferDenom, _pb_1$Message11);

      var _super11 = _createSuper(MsgTransferDenom);

      function MsgTransferDenom(data) {
        var _this11;

        (0, _classCallCheck2["default"])(this, MsgTransferDenom);
        _this11 = _super11.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this11.id = data.id;
          }

          if ("sender" in data && data.sender != undefined) {
            _this11.sender = data.sender;
          }

          if ("recipient" in data && data.recipient != undefined) {
            _this11.recipient = data.recipient;
          }
        }

        return _this11;
      }

      (0, _createClass2["default"])(MsgTransferDenom, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "sender",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "recipient",
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

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          if (this.recipient != null) {
            data.recipient = this.recipient;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(2, this.sender);
          if (typeof this.recipient === "string" && this.recipient.length) writer.writeString(3, this.recipient);
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
          var message = new MsgTransferDenom({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          if (data.recipient != null) {
            message.recipient = data.recipient;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgTransferDenom();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.sender = reader.readString();
                break;

              case 3:
                message.recipient = reader.readString();
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
          return MsgTransferDenom.deserialize(bytes);
        }
      }]);
      return MsgTransferDenom;
    }(pb_1.Message);

    _nft.MsgTransferDenom = MsgTransferDenom;

    var MsgTransferDenomResponse = /*#__PURE__*/function (_pb_1$Message12) {
      (0, _inherits2["default"])(MsgTransferDenomResponse, _pb_1$Message12);

      var _super12 = _createSuper(MsgTransferDenomResponse);

      function MsgTransferDenomResponse(data) {
        var _this12;

        (0, _classCallCheck2["default"])(this, MsgTransferDenomResponse);
        _this12 = _super12.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this12;
      }

      (0, _createClass2["default"])(MsgTransferDenomResponse, [{
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
          var message = new MsgTransferDenomResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgTransferDenomResponse();

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
          return MsgTransferDenomResponse.deserialize(bytes);
        }
      }]);
      return MsgTransferDenomResponse;
    }(pb_1.Message);

    _nft.MsgTransferDenomResponse = MsgTransferDenomResponse;

    var UnimplementedMsgService = function UnimplementedMsgService() {
      (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
    };

    (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
      IssueDenom: {
        path: "/kynno.nft.Msg/IssueDenom",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgIssueDenom.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgIssueDenomResponse.deserialize(new Uint8Array(bytes));
        }
      },
      MintNFT: {
        path: "/kynno.nft.Msg/MintNFT",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgMintNFT.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgMintNFTResponse.deserialize(new Uint8Array(bytes));
        }
      },
      EditNFT: {
        path: "/kynno.nft.Msg/EditNFT",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgEditNFT.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgEditNFTResponse.deserialize(new Uint8Array(bytes));
        }
      },
      TransferNFT: {
        path: "/kynno.nft.Msg/TransferNFT",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgTransferNFT.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgTransferNFTResponse.deserialize(new Uint8Array(bytes));
        }
      },
      BurnNFT: {
        path: "/kynno.nft.Msg/BurnNFT",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgBurnNFT.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgBurnNFTResponse.deserialize(new Uint8Array(bytes));
        }
      },
      TransferDenom: {
        path: "/kynno.nft.Msg/TransferDenom",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgTransferDenom.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgTransferDenomResponse.deserialize(new Uint8Array(bytes));
        }
      }
    });
    _nft.UnimplementedMsgService = UnimplementedMsgService;

    var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
      (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

      var _super13 = _createSuper(MsgClient);

      function MsgClient(address, credentials, _options) {
        var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _this13;

        (0, _classCallCheck2["default"])(this, MsgClient);
        _this13 = _super13.call(this, address, credentials, _options);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "IssueDenom", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "IssueDenom", _thisSuper).call(_thisSuper, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "MintNFT", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "MintNFT", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "EditNFT", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "EditNFT", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "TransferNFT", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "TransferNFT", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "BurnNFT", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "BurnNFT", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "TransferDenom", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this13), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "TransferDenom", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
        });
        return _this13;
      }

      return MsgClient;
    }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

    _nft.MsgClient = MsgClient;
  })(nft || (nft = _kynno.nft || (_kynno.nft = {})));
})(kynno || (exports.kynno = kynno = {}));