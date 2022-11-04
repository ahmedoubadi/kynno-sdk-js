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

var dependency_3 = _interopRequireWildcard(require("./nft"));

var dependency_4 = _interopRequireWildcard(require("./../../cosmos/base/query/v1beta1/pagination"));

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
    var QuerySupplyRequest = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(QuerySupplyRequest, _pb_1$Message);

      var _super = _createSuper(QuerySupplyRequest);

      function QuerySupplyRequest(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, QuerySupplyRequest);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this.denom_id = data.denom_id;
          }

          if ("owner" in data && data.owner != undefined) {
            _this.owner = data.owner;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(QuerySupplyRequest, [{
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "owner",
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

          if (this.owner != null) {
            data.owner = this.owner;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
          if (typeof this.owner === "string" && this.owner.length) writer.writeString(2, this.owner);
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
          var message = new QuerySupplyRequest({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.owner != null) {
            message.owner = data.owner;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QuerySupplyRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
                break;

              case 2:
                message.owner = reader.readString();
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
          return QuerySupplyRequest.deserialize(bytes);
        }
      }]);
      return QuerySupplyRequest;
    }(pb_1.Message);

    _nft.QuerySupplyRequest = QuerySupplyRequest;

    var QuerySupplyResponse = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(QuerySupplyResponse, _pb_1$Message2);

      var _super2 = _createSuper(QuerySupplyResponse);

      function QuerySupplyResponse(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, QuerySupplyResponse);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("amount" in data && data.amount != undefined) {
            _this2.amount = data.amount;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(QuerySupplyResponse, [{
        key: "amount",
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

          if (this.amount != null) {
            data.amount = this.amount;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.amount !== undefined) writer.writeUint64(1, this.amount);
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
          var message = new QuerySupplyResponse({});

          if (data.amount != null) {
            message.amount = data.amount;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QuerySupplyResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.amount = reader.readUint64();
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
          return QuerySupplyResponse.deserialize(bytes);
        }
      }]);
      return QuerySupplyResponse;
    }(pb_1.Message);

    _nft.QuerySupplyResponse = QuerySupplyResponse;

    var QueryOwnerRequest = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(QueryOwnerRequest, _pb_1$Message3);

      var _super3 = _createSuper(QueryOwnerRequest);

      function QueryOwnerRequest(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, QueryOwnerRequest);
        _this3 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this3.denom_id = data.denom_id;
          }

          if ("owner" in data && data.owner != undefined) {
            _this3.owner = data.owner;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this3.pagination = data.pagination;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(QueryOwnerRequest, [{
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "owner",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageRequest, 3);
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

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.owner != null) {
            data.owner = this.owner;
          }

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this4 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
          if (typeof this.owner === "string" && this.owner.length) writer.writeString(2, this.owner);
          if (this.pagination !== undefined) writer.writeMessage(3, this.pagination, function () {
            return _this4.pagination.serialize(writer);
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
          var message = new QueryOwnerRequest({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.owner != null) {
            message.owner = data.owner;
          }

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryOwnerRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
                break;

              case 2:
                message.owner = reader.readString();
                break;

              case 3:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
          return QueryOwnerRequest.deserialize(bytes);
        }
      }]);
      return QueryOwnerRequest;
    }(pb_1.Message);

    _nft.QueryOwnerRequest = QueryOwnerRequest;

    var QueryOwnerResponse = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(QueryOwnerResponse, _pb_1$Message4);

      var _super4 = _createSuper(QueryOwnerResponse);

      function QueryOwnerResponse(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, QueryOwnerResponse);
        _this5 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("owner" in data && data.owner != undefined) {
            _this5.owner = data.owner;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this5.pagination = data.pagination;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(QueryOwnerResponse, [{
        key: "owner",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.kynno.nft.Owner, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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

          if (this.owner != null) {
            data.owner = this.owner.toObject();
          }

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this6 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.owner !== undefined) writer.writeMessage(1, this.owner, function () {
            return _this6.owner.serialize(writer);
          });
          if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
            return _this6.pagination.serialize(writer);
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
          var message = new QueryOwnerResponse({});

          if (data.owner != null) {
            message.owner = dependency_3.kynno.nft.Owner.fromObject(data.owner);
          }

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryOwnerResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.owner, function () {
                  return message.owner = dependency_3.kynno.nft.Owner.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
          return QueryOwnerResponse.deserialize(bytes);
        }
      }]);
      return QueryOwnerResponse;
    }(pb_1.Message);

    _nft.QueryOwnerResponse = QueryOwnerResponse;

    var QueryCollectionRequest = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(QueryCollectionRequest, _pb_1$Message5);

      var _super5 = _createSuper(QueryCollectionRequest);

      function QueryCollectionRequest(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, QueryCollectionRequest);
        _this7 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this7.denom_id = data.denom_id;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this7.pagination = data.pagination;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(QueryCollectionRequest, [{
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageRequest, 2);
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

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this8 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
          if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
            return _this8.pagination.serialize(writer);
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
          var message = new QueryCollectionRequest({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryCollectionRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
                break;

              case 2:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
          return QueryCollectionRequest.deserialize(bytes);
        }
      }]);
      return QueryCollectionRequest;
    }(pb_1.Message);

    _nft.QueryCollectionRequest = QueryCollectionRequest;

    var QueryCollectionResponse = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(QueryCollectionResponse, _pb_1$Message6);

      var _super6 = _createSuper(QueryCollectionResponse);

      function QueryCollectionResponse(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, QueryCollectionResponse);
        _this9 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("collection" in data && data.collection != undefined) {
            _this9.collection = data.collection;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this9.pagination = data.pagination;
          }
        }

        return _this9;
      }

      (0, _createClass2["default"])(QueryCollectionResponse, [{
        key: "collection",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.kynno.nft.Collection, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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

          if (this.collection != null) {
            data.collection = this.collection.toObject();
          }

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this10 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.collection !== undefined) writer.writeMessage(1, this.collection, function () {
            return _this10.collection.serialize(writer);
          });
          if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
            return _this10.pagination.serialize(writer);
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
          var message = new QueryCollectionResponse({});

          if (data.collection != null) {
            message.collection = dependency_3.kynno.nft.Collection.fromObject(data.collection);
          }

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryCollectionResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.collection, function () {
                  return message.collection = dependency_3.kynno.nft.Collection.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
          return QueryCollectionResponse.deserialize(bytes);
        }
      }]);
      return QueryCollectionResponse;
    }(pb_1.Message);

    _nft.QueryCollectionResponse = QueryCollectionResponse;

    var QueryDenomRequest = /*#__PURE__*/function (_pb_1$Message7) {
      (0, _inherits2["default"])(QueryDenomRequest, _pb_1$Message7);

      var _super7 = _createSuper(QueryDenomRequest);

      function QueryDenomRequest(data) {
        var _this11;

        (0, _classCallCheck2["default"])(this, QueryDenomRequest);
        _this11 = _super7.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this11.denom_id = data.denom_id;
          }
        }

        return _this11;
      }

      (0, _createClass2["default"])(QueryDenomRequest, [{
        key: "denom_id",
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

          if (this.denom_id != null) {
            data.denom_id = this.denom_id;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
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
          var message = new QueryDenomRequest({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryDenomRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
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
          return QueryDenomRequest.deserialize(bytes);
        }
      }]);
      return QueryDenomRequest;
    }(pb_1.Message);

    _nft.QueryDenomRequest = QueryDenomRequest;

    var QueryDenomResponse = /*#__PURE__*/function (_pb_1$Message8) {
      (0, _inherits2["default"])(QueryDenomResponse, _pb_1$Message8);

      var _super8 = _createSuper(QueryDenomResponse);

      function QueryDenomResponse(data) {
        var _this12;

        (0, _classCallCheck2["default"])(this, QueryDenomResponse);
        _this12 = _super8.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom" in data && data.denom != undefined) {
            _this12.denom = data.denom;
          }
        }

        return _this12;
      }

      (0, _createClass2["default"])(QueryDenomResponse, [{
        key: "denom",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.kynno.nft.Denom, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
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

          if (this.denom != null) {
            data.denom = this.denom.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this13 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.denom !== undefined) writer.writeMessage(1, this.denom, function () {
            return _this13.denom.serialize(writer);
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
          var message = new QueryDenomResponse({});

          if (data.denom != null) {
            message.denom = dependency_3.kynno.nft.Denom.fromObject(data.denom);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryDenomResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.denom, function () {
                  return message.denom = dependency_3.kynno.nft.Denom.deserialize(reader);
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
          return QueryDenomResponse.deserialize(bytes);
        }
      }]);
      return QueryDenomResponse;
    }(pb_1.Message);

    _nft.QueryDenomResponse = QueryDenomResponse;

    var QueryDenomsRequest = /*#__PURE__*/function (_pb_1$Message9) {
      (0, _inherits2["default"])(QueryDenomsRequest, _pb_1$Message9);

      var _super9 = _createSuper(QueryDenomsRequest);

      function QueryDenomsRequest(data) {
        var _this14;

        (0, _classCallCheck2["default"])(this, QueryDenomsRequest);
        _this14 = _super9.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("pagination" in data && data.pagination != undefined) {
            _this14.pagination = data.pagination;
          }
        }

        return _this14;
      }

      (0, _createClass2["default"])(QueryDenomsRequest, [{
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageRequest, 1);
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

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this15 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
            return _this15.pagination.serialize(writer);
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
          var message = new QueryDenomsRequest({});

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryDenomsRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
          return QueryDenomsRequest.deserialize(bytes);
        }
      }]);
      return QueryDenomsRequest;
    }(pb_1.Message);

    _nft.QueryDenomsRequest = QueryDenomsRequest;

    var QueryDenomsResponse = /*#__PURE__*/function (_pb_1$Message10) {
      (0, _inherits2["default"])(QueryDenomsResponse, _pb_1$Message10);

      var _super10 = _createSuper(QueryDenomsResponse);

      function QueryDenomsResponse(data) {
        var _this16;

        (0, _classCallCheck2["default"])(this, QueryDenomsResponse);
        _this16 = _super10.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denoms" in data && data.denoms != undefined) {
            _this16.denoms = data.denoms;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this16.pagination = data.pagination;
          }
        }

        return _this16;
      }

      (0, _createClass2["default"])(QueryDenomsResponse, [{
        key: "denoms",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, dependency_3.kynno.nft.Denom, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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

          if (this.denoms != null) {
            data.denoms = this.denoms.map(function (item) {
              return item.toObject();
            });
          }

          if (this.pagination != null) {
            data.pagination = this.pagination.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this17 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.denoms !== undefined) writer.writeRepeatedMessage(1, this.denoms, function (item) {
            return item.serialize(writer);
          });
          if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
            return _this17.pagination.serialize(writer);
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
          var message = new QueryDenomsResponse({});

          if (data.denoms != null) {
            message.denoms = data.denoms.map(function (item) {
              return dependency_3.kynno.nft.Denom.fromObject(item);
            });
          }

          if (data.pagination != null) {
            message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryDenomsResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.denoms, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.kynno.nft.Denom.deserialize(reader), dependency_3.kynno.nft.Denom);
                });
                break;

              case 2:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
          return QueryDenomsResponse.deserialize(bytes);
        }
      }]);
      return QueryDenomsResponse;
    }(pb_1.Message);

    _nft.QueryDenomsResponse = QueryDenomsResponse;

    var QueryNFTRequest = /*#__PURE__*/function (_pb_1$Message11) {
      (0, _inherits2["default"])(QueryNFTRequest, _pb_1$Message11);

      var _super11 = _createSuper(QueryNFTRequest);

      function QueryNFTRequest(data) {
        var _this18;

        (0, _classCallCheck2["default"])(this, QueryNFTRequest);
        _this18 = _super11.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("denom_id" in data && data.denom_id != undefined) {
            _this18.denom_id = data.denom_id;
          }

          if ("token_id" in data && data.token_id != undefined) {
            _this18.token_id = data.token_id;
          }
        }

        return _this18;
      }

      (0, _createClass2["default"])(QueryNFTRequest, [{
        key: "denom_id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "token_id",
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

          if (this.token_id != null) {
            data.token_id = this.token_id;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.denom_id === "string" && this.denom_id.length) writer.writeString(1, this.denom_id);
          if (typeof this.token_id === "string" && this.token_id.length) writer.writeString(2, this.token_id);
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
          var message = new QueryNFTRequest({});

          if (data.denom_id != null) {
            message.denom_id = data.denom_id;
          }

          if (data.token_id != null) {
            message.token_id = data.token_id;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryNFTRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.denom_id = reader.readString();
                break;

              case 2:
                message.token_id = reader.readString();
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
          return QueryNFTRequest.deserialize(bytes);
        }
      }]);
      return QueryNFTRequest;
    }(pb_1.Message);

    _nft.QueryNFTRequest = QueryNFTRequest;

    var QueryNFTResponse = /*#__PURE__*/function (_pb_1$Message12) {
      (0, _inherits2["default"])(QueryNFTResponse, _pb_1$Message12);

      var _super12 = _createSuper(QueryNFTResponse);

      function QueryNFTResponse(data) {
        var _this19;

        (0, _classCallCheck2["default"])(this, QueryNFTResponse);
        _this19 = _super12.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("nft" in data && data.nft != undefined) {
            _this19.nft = data.nft;
          }
        }

        return _this19;
      }

      (0, _createClass2["default"])(QueryNFTResponse, [{
        key: "nft",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.kynno.nft.BaseNFT, 1);
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

          if (this.nft != null) {
            data.nft = this.nft.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this20 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.nft !== undefined) writer.writeMessage(1, this.nft, function () {
            return _this20.nft.serialize(writer);
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
          var message = new QueryNFTResponse({});

          if (data.nft != null) {
            message.nft = dependency_3.kynno.nft.BaseNFT.fromObject(data.nft);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryNFTResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.nft, function () {
                  return message.nft = dependency_3.kynno.nft.BaseNFT.deserialize(reader);
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
          return QueryNFTResponse.deserialize(bytes);
        }
      }]);
      return QueryNFTResponse;
    }(pb_1.Message);

    _nft.QueryNFTResponse = QueryNFTResponse;

    var UnimplementedQueryService = function UnimplementedQueryService() {
      (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
    };

    (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
      Supply: {
        path: "/kynno.nft.Query/Supply",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QuerySupplyRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QuerySupplyResponse.deserialize(new Uint8Array(bytes));
        }
      },
      Owner: {
        path: "/kynno.nft.Query/Owner",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryOwnerRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryOwnerResponse.deserialize(new Uint8Array(bytes));
        }
      },
      Collection: {
        path: "/kynno.nft.Query/Collection",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryCollectionRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryCollectionResponse.deserialize(new Uint8Array(bytes));
        }
      },
      Denom: {
        path: "/kynno.nft.Query/Denom",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryDenomRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryDenomResponse.deserialize(new Uint8Array(bytes));
        }
      },
      Denoms: {
        path: "/kynno.nft.Query/Denoms",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryDenomsRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryDenomsResponse.deserialize(new Uint8Array(bytes));
        }
      },
      NFT: {
        path: "/kynno.nft.Query/NFT",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryNFTRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryNFTResponse.deserialize(new Uint8Array(bytes));
        }
      }
    });
    _nft.UnimplementedQueryService = UnimplementedQueryService;

    var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
      (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

      var _super13 = _createSuper(QueryClient);

      function QueryClient(address, credentials, _options) {
        var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _this21;

        (0, _classCallCheck2["default"])(this, QueryClient);
        _this21 = _super13.call(this, address, credentials, _options);
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "Supply", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Supply", _thisSuper).call(_thisSuper, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "Owner", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Owner", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "Collection", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Collection", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "Denom", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Denom", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "Denoms", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Denoms", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
        });
        (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this21), "NFT", function (message, metadata, options, callback) {
          return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this21), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "NFT", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
        });
        return _this21;
      }

      return QueryClient;
    }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

    _nft.QueryClient = QueryClient;
  })(nft || (nft = _kynno.nft || (_kynno.nft = {})));
})(kynno || (exports.kynno = kynno = {}));