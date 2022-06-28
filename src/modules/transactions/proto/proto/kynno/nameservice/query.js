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

var dependency_3 = _interopRequireWildcard(require("./../../cosmos/base/query/v1beta1/pagination"));

var dependency_4 = _interopRequireWildcard(require("./params"));

var dependency_5 = _interopRequireWildcard(require("./whois"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var nameservice;

  (function (_nameservice) {
    var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message);

      var _super = _createSuper(QueryParamsRequest);

      function QueryParamsRequest(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, QueryParamsRequest);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this;
      }

      (0, _createClass2["default"])(QueryParamsRequest, [{
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
          var message = new QueryParamsRequest({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryParamsRequest();

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
          return QueryParamsRequest.deserialize(bytes);
        }
      }]);
      return QueryParamsRequest;
    }(pb_1.Message);

    _nameservice.QueryParamsRequest = QueryParamsRequest;

    var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message2);

      var _super2 = _createSuper(QueryParamsResponse);

      function QueryParamsResponse(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, QueryParamsResponse);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("params" in data && data.params != undefined) {
            _this2.params = data.params;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(QueryParamsResponse, [{
        key: "params",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.kynno.nameservice.Params, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
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

          if (this.params != null) {
            data.params = this.params.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this3 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
            return _this3.params.serialize(writer);
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
          var message = new QueryParamsResponse({});

          if (data.params != null) {
            message.params = dependency_4.kynno.nameservice.Params.fromObject(data.params);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryParamsResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.params, function () {
                  return message.params = dependency_4.kynno.nameservice.Params.deserialize(reader);
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
          return QueryParamsResponse.deserialize(bytes);
        }
      }]);
      return QueryParamsResponse;
    }(pb_1.Message);

    _nameservice.QueryParamsResponse = QueryParamsResponse;

    var QueryGetWhoisRequest = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(QueryGetWhoisRequest, _pb_1$Message3);

      var _super3 = _createSuper(QueryGetWhoisRequest);

      function QueryGetWhoisRequest(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, QueryGetWhoisRequest);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("index" in data && data.index != undefined) {
            _this4.index = data.index;
          }
        }

        return _this4;
      }

      (0, _createClass2["default"])(QueryGetWhoisRequest, [{
        key: "index",
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

          if (this.index != null) {
            data.index = this.index;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.index === "string" && this.index.length) writer.writeString(1, this.index);
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
          var message = new QueryGetWhoisRequest({});

          if (data.index != null) {
            message.index = data.index;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryGetWhoisRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.index = reader.readString();
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
          return QueryGetWhoisRequest.deserialize(bytes);
        }
      }]);
      return QueryGetWhoisRequest;
    }(pb_1.Message);

    _nameservice.QueryGetWhoisRequest = QueryGetWhoisRequest;

    var QueryGetWhoisResponse = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(QueryGetWhoisResponse, _pb_1$Message4);

      var _super4 = _createSuper(QueryGetWhoisResponse);

      function QueryGetWhoisResponse(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, QueryGetWhoisResponse);
        _this5 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("whois" in data && data.whois != undefined) {
            _this5.whois = data.whois;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(QueryGetWhoisResponse, [{
        key: "whois",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_5.kynno.nameservice.Whois, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
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

          if (this.whois != null) {
            data.whois = this.whois.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this6 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.whois !== undefined) writer.writeMessage(1, this.whois, function () {
            return _this6.whois.serialize(writer);
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
          var message = new QueryGetWhoisResponse({});

          if (data.whois != null) {
            message.whois = dependency_5.kynno.nameservice.Whois.fromObject(data.whois);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryGetWhoisResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.whois, function () {
                  return message.whois = dependency_5.kynno.nameservice.Whois.deserialize(reader);
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
          return QueryGetWhoisResponse.deserialize(bytes);
        }
      }]);
      return QueryGetWhoisResponse;
    }(pb_1.Message);

    _nameservice.QueryGetWhoisResponse = QueryGetWhoisResponse;

    var QueryAllWhoisRequest = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(QueryAllWhoisRequest, _pb_1$Message5);

      var _super5 = _createSuper(QueryAllWhoisRequest);

      function QueryAllWhoisRequest(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, QueryAllWhoisRequest);
        _this7 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("pagination" in data && data.pagination != undefined) {
            _this7.pagination = data.pagination;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(QueryAllWhoisRequest, [{
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
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
          if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
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
          var message = new QueryAllWhoisRequest({});

          if (data.pagination != null) {
            message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryAllWhoisRequest();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
          return QueryAllWhoisRequest.deserialize(bytes);
        }
      }]);
      return QueryAllWhoisRequest;
    }(pb_1.Message);

    _nameservice.QueryAllWhoisRequest = QueryAllWhoisRequest;

    var QueryAllWhoisResponse = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(QueryAllWhoisResponse, _pb_1$Message6);

      var _super6 = _createSuper(QueryAllWhoisResponse);

      function QueryAllWhoisResponse(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, QueryAllWhoisResponse);
        _this9 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("whois" in data && data.whois != undefined) {
            _this9.whois = data.whois;
          }

          if ("pagination" in data && data.pagination != undefined) {
            _this9.pagination = data.pagination;
          }
        }

        return _this9;
      }

      (0, _createClass2["default"])(QueryAllWhoisResponse, [{
        key: "whois",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, dependency_5.kynno.nameservice.Whois, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "pagination",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageResponse, 2);
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

          if (this.whois != null) {
            data.whois = this.whois.map(function (item) {
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
          var _this10 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.whois !== undefined) writer.writeRepeatedMessage(1, this.whois, function (item) {
            return item.serialize(writer);
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
          var message = new QueryAllWhoisResponse({});

          if (data.whois != null) {
            message.whois = data.whois.map(function (item) {
              return dependency_5.kynno.nameservice.Whois.fromObject(item);
            });
          }

          if (data.pagination != null) {
            message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new QueryAllWhoisResponse();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.whois, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.kynno.nameservice.Whois.deserialize(reader), dependency_5.kynno.nameservice.Whois);
                });
                break;

              case 2:
                reader.readMessage(message.pagination, function () {
                  return message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
          return QueryAllWhoisResponse.deserialize(bytes);
        }
      }]);
      return QueryAllWhoisResponse;
    }(pb_1.Message);

    _nameservice.QueryAllWhoisResponse = QueryAllWhoisResponse;
    var UnimplementedQueryService = /*#__PURE__*/(0, _createClass2["default"])(function UnimplementedQueryService() {
      (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
    });
    (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
      Params: {
        path: "/kynno.nameservice.Query/Params",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryParamsRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryParamsResponse.deserialize(new Uint8Array(bytes));
        }
      },
      Whois: {
        path: "/kynno.nameservice.Query/Whois",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryGetWhoisRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryGetWhoisResponse.deserialize(new Uint8Array(bytes));
        }
      },
      WhoisAll: {
        path: "/kynno.nameservice.Query/WhoisAll",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return QueryAllWhoisRequest.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return QueryAllWhoisResponse.deserialize(new Uint8Array(bytes));
        }
      }
    });
    _nameservice.UnimplementedQueryService = UnimplementedQueryService;
  })(nameservice || (nameservice = _kynno.nameservice || (_kynno.nameservice = {})));
})(kynno || (exports.kynno = kynno = {}));