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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var nft;

  (function (_nft) {
    var BaseNFT = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(BaseNFT, _pb_1$Message);

      var _super = _createSuper(BaseNFT);

      function BaseNFT(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, BaseNFT);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this.id = data.id;
          }

          if ("name" in data && data.name != undefined) {
            _this.name = data.name;
          }

          if ("uri" in data && data.uri != undefined) {
            _this.uri = data.uri;
          }

          if ("data" in data && data.data != undefined) {
            _this.data = data.data;
          }

          if ("owner" in data && data.owner != undefined) {
            _this.owner = data.owner;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this.uri_hash = data.uri_hash;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(BaseNFT, [{
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
        key: "uri",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "owner",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "uri_hash",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
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

          if (this.uri != null) {
            data.uri = this.uri;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.owner != null) {
            data.owner = this.owner;
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
          if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
          if (typeof this.uri === "string" && this.uri.length) writer.writeString(3, this.uri);
          if (typeof this.data === "string" && this.data.length) writer.writeString(4, this.data);
          if (typeof this.owner === "string" && this.owner.length) writer.writeString(5, this.owner);
          if (typeof this.uri_hash === "string" && this.uri_hash.length) writer.writeString(6, this.uri_hash);
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
          var message = new BaseNFT({});

          if (data.id != null) {
            message.id = data.id;
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

          if (data.owner != null) {
            message.owner = data.owner;
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
              message = new BaseNFT();

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
                message.uri = reader.readString();
                break;

              case 4:
                message.data = reader.readString();
                break;

              case 5:
                message.owner = reader.readString();
                break;

              case 6:
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
          return BaseNFT.deserialize(bytes);
        }
      }]);
      return BaseNFT;
    }(pb_1.Message);

    _nft.BaseNFT = BaseNFT;

    var Denom = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(Denom, _pb_1$Message2);

      var _super2 = _createSuper(Denom);

      function Denom(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, Denom);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this2.id = data.id;
          }

          if ("name" in data && data.name != undefined) {
            _this2.name = data.name;
          }

          if ("schema" in data && data.schema != undefined) {
            _this2.schema = data.schema;
          }

          if ("creator" in data && data.creator != undefined) {
            _this2.creator = data.creator;
          }

          if ("symbol" in data && data.symbol != undefined) {
            _this2.symbol = data.symbol;
          }

          if ("mint_restricted" in data && data.mint_restricted != undefined) {
            _this2.mint_restricted = data.mint_restricted;
          }

          if ("update_restricted" in data && data.update_restricted != undefined) {
            _this2.update_restricted = data.update_restricted;
          }

          if ("description" in data && data.description != undefined) {
            _this2.description = data.description;
          }

          if ("uri" in data && data.uri != undefined) {
            _this2.uri = data.uri;
          }

          if ("uri_hash" in data && data.uri_hash != undefined) {
            _this2.uri_hash = data.uri_hash;
          }

          if ("data" in data && data.data != undefined) {
            _this2.data = data.data;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(Denom, [{
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
        key: "creator",
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

          if (this.creator != null) {
            data.creator = this.creator;
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
          if (typeof this.creator === "string" && this.creator.length) writer.writeString(4, this.creator);
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
          var message = new Denom({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.schema != null) {
            message.schema = data.schema;
          }

          if (data.creator != null) {
            message.creator = data.creator;
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
              message = new Denom();

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
                message.creator = reader.readString();
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
          return Denom.deserialize(bytes);
        }
      }]);
      return Denom;
    }(pb_1.Message);

    _nft.Denom = Denom;

    var IDCollection = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(IDCollection, _pb_1$Message3);

      var _super3 = _createSuper(IDCollection);

      function IDCollection(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, IDCollection);
        _this3 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this3.denom_id = data.denom_id;
          }

          if ("token_ids" in data && data.token_ids != undefined) {
            _this3.token_ids = data.token_ids;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(IDCollection, [{
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "token_ids",
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

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.token_ids != null) {
            data.token_ids = this.token_ids;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
          if (this.token_ids !== undefined) writer.writeRepeatedString(2, this.token_ids);
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
          var message = new IDCollection({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.token_ids != null) {
            message.token_ids = data.token_ids;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new IDCollection();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
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
          return IDCollection.deserialize(bytes);
        }
      }]);
      return IDCollection;
    }(pb_1.Message);

    _nft.IDCollection = IDCollection;

    var Owner = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(Owner, _pb_1$Message4);

      var _super4 = _createSuper(Owner);

      function Owner(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, Owner);
        _this4 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("address" in data && data.address != undefined) {
            _this4.address = data.address;
          }

          if ("id_collections" in data && data.id_collections != undefined) {
            _this4.id_collections = data.id_collections;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(Owner, [{
        key: "address",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "id_collections",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, IDCollection, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

          if (this.id_collections != null) {
            data.id_collections = this.id_collections.map(function (item) {
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
          if (this.id_collections !== undefined) writer.writeRepeatedMessage(2, this.id_collections, function (item) {
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
          var message = new Owner({});

          if (data.address != null) {
            message.address = data.address;
          }

          if (data.id_collections != null) {
            message.id_collections = data.id_collections.map(function (item) {
              return IDCollection.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Owner();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.address = reader.readString();
                break;

              case 2:
                reader.readMessage(message.id_collections, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, IDCollection.deserialize(reader), IDCollection);
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
          return Owner.deserialize(bytes);
        }
      }]);
      return Owner;
    }(pb_1.Message);

    _nft.Owner = Owner;

    var Collection = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(Collection, _pb_1$Message5);

      var _super5 = _createSuper(Collection);

      function Collection(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, Collection);
        _this5 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom" in data && data.denom != undefined) {
            _this5.denom = data.denom;
          }

          if ("nfts" in data && data.nfts != undefined) {
            _this5.nfts = data.nfts;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(Collection, [{
        key: "denom",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Denom, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "nfts",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, BaseNFT, 2);
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

          if (this.denom != null) {
            data.denom = this.denom.toObject();
          }

          if (this.nfts != null) {
            data.nfts = this.nfts.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this6 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.denom !== undefined) writer.writeMessage(1, this.denom, function () {
            return _this6.denom.serialize(writer);
          });
          if (this.nfts !== undefined) writer.writeRepeatedMessage(2, this.nfts, function (item) {
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
          var message = new Collection({});

          if (data.denom != null) {
            message.denom = Denom.fromObject(data.denom);
          }

          if (data.nfts != null) {
            message.nfts = data.nfts.map(function (item) {
              return BaseNFT.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Collection();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.denom, function () {
                  return message.denom = Denom.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.nfts, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, BaseNFT.deserialize(reader), BaseNFT);
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
          return Collection.deserialize(bytes);
        }
      }]);
      return Collection;
    }(pb_1.Message);

    _nft.Collection = Collection;
  })(nft || (nft = _kynno.nft || (_kynno.nft = {})));
})(kynno || (exports.kynno = kynno = {}));