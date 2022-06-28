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

var dependency_2 = _interopRequireWildcard(require("./../../../../cosmos/base/query/v1beta1/pagination"));

var dependency_3 = _interopRequireWildcard(require("./transfer"));

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
    var transfer;

    (function (_transfer) {
      var v1;

      (function (_v) {
        var QueryDenomTraceRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(QueryDenomTraceRequest, _pb_1$Message);

          var _super = _createSuper(QueryDenomTraceRequest);

          function QueryDenomTraceRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, QueryDenomTraceRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("hash" in data && data.hash != undefined) {
                _this.hash = data.hash;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(QueryDenomTraceRequest, [{
            key: "hash",
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

              if (this.hash != null) {
                data.hash = this.hash;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.hash === "string" && this.hash.length) writer.writeString(1, this.hash);
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
              var message = new QueryDenomTraceRequest({});

              if (data.hash != null) {
                message.hash = data.hash;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomTraceRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.hash = reader.readString();
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
              return QueryDenomTraceRequest.deserialize(bytes);
            }
          }]);
          return QueryDenomTraceRequest;
        }(pb_1.Message);

        _v.QueryDenomTraceRequest = QueryDenomTraceRequest;

        var QueryDenomTraceResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(QueryDenomTraceResponse, _pb_1$Message2);

          var _super2 = _createSuper(QueryDenomTraceResponse);

          function QueryDenomTraceResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, QueryDenomTraceResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("denom_trace" in data && data.denom_trace != undefined) {
                _this2.denom_trace = data.denom_trace;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(QueryDenomTraceResponse, [{
            key: "denom_trace",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1);
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

              if (this.denom_trace != null) {
                data.denom_trace = this.denom_trace.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this3 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.denom_trace !== undefined) writer.writeMessage(1, this.denom_trace, function () {
                return _this3.denom_trace.serialize(writer);
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
              var message = new QueryDenomTraceResponse({});

              if (data.denom_trace != null) {
                message.denom_trace = dependency_3.ibc.applications.transfer.v1.DenomTrace.fromObject(data.denom_trace);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomTraceResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.denom_trace, function () {
                      return message.denom_trace = dependency_3.ibc.applications.transfer.v1.DenomTrace.deserialize(reader);
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
              return QueryDenomTraceResponse.deserialize(bytes);
            }
          }]);
          return QueryDenomTraceResponse;
        }(pb_1.Message);

        _v.QueryDenomTraceResponse = QueryDenomTraceResponse;

        var QueryDenomTracesRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(QueryDenomTracesRequest, _pb_1$Message3);

          var _super3 = _createSuper(QueryDenomTracesRequest);

          function QueryDenomTracesRequest(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, QueryDenomTracesRequest);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pagination" in data && data.pagination != undefined) {
                _this4.pagination = data.pagination;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(QueryDenomTracesRequest, [{
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 1);
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

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this5 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
                return _this5.pagination.serialize(writer);
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
              var message = new QueryDenomTracesRequest({});

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomTracesRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
              return QueryDenomTracesRequest.deserialize(bytes);
            }
          }]);
          return QueryDenomTracesRequest;
        }(pb_1.Message);

        _v.QueryDenomTracesRequest = QueryDenomTracesRequest;

        var QueryDenomTracesResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(QueryDenomTracesResponse, _pb_1$Message4);

          var _super4 = _createSuper(QueryDenomTracesResponse);

          function QueryDenomTracesResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, QueryDenomTracesResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("denom_traces" in data && data.denom_traces != undefined) {
                _this6.denom_traces = data.denom_traces;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this6.pagination = data.pagination;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(QueryDenomTracesResponse, [{
            key: "denom_traces",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.applications.transfer.v1.DenomTrace, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2);
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

              if (this.denom_traces != null) {
                data.denom_traces = this.denom_traces.map(function (item) {
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
              var _this7 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.denom_traces !== undefined) writer.writeRepeatedMessage(1, this.denom_traces, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this7.pagination.serialize(writer);
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
              var message = new QueryDenomTracesResponse({});

              if (data.denom_traces != null) {
                message.denom_traces = data.denom_traces.map(function (item) {
                  return dependency_3.ibc.applications.transfer.v1.DenomTrace.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomTracesResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.denom_traces, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.applications.transfer.v1.DenomTrace.deserialize(reader), dependency_3.ibc.applications.transfer.v1.DenomTrace);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
              return QueryDenomTracesResponse.deserialize(bytes);
            }
          }]);
          return QueryDenomTracesResponse;
        }(pb_1.Message);

        _v.QueryDenomTracesResponse = QueryDenomTracesResponse;

        var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message5);

          var _super5 = _createSuper(QueryParamsRequest);

          function QueryParamsRequest(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, QueryParamsRequest);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this8;
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

        _v.QueryParamsRequest = QueryParamsRequest;

        var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message6);

          var _super6 = _createSuper(QueryParamsResponse);

          function QueryParamsResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, QueryParamsResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("params" in data && data.params != undefined) {
                _this9.params = data.params;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(QueryParamsResponse, [{
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.transfer.v1.Params, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
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

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this10 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
                return _this10.params.serialize(writer);
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
                message.params = dependency_3.ibc.applications.transfer.v1.Params.fromObject(data.params);
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
                      return message.params = dependency_3.ibc.applications.transfer.v1.Params.deserialize(reader);
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

        _v.QueryParamsResponse = QueryParamsResponse;

        var QueryDenomHashRequest = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(QueryDenomHashRequest, _pb_1$Message7);

          var _super7 = _createSuper(QueryDenomHashRequest);

          function QueryDenomHashRequest(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, QueryDenomHashRequest);
            _this11 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("trace" in data && data.trace != undefined) {
                _this11.trace = data.trace;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(QueryDenomHashRequest, [{
            key: "trace",
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

              if (this.trace != null) {
                data.trace = this.trace;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.trace === "string" && this.trace.length) writer.writeString(1, this.trace);
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
              var message = new QueryDenomHashRequest({});

              if (data.trace != null) {
                message.trace = data.trace;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomHashRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.trace = reader.readString();
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
              return QueryDenomHashRequest.deserialize(bytes);
            }
          }]);
          return QueryDenomHashRequest;
        }(pb_1.Message);

        _v.QueryDenomHashRequest = QueryDenomHashRequest;

        var QueryDenomHashResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(QueryDenomHashResponse, _pb_1$Message8);

          var _super8 = _createSuper(QueryDenomHashResponse);

          function QueryDenomHashResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, QueryDenomHashResponse);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("hash" in data && data.hash != undefined) {
                _this12.hash = data.hash;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(QueryDenomHashResponse, [{
            key: "hash",
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

              if (this.hash != null) {
                data.hash = this.hash;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.hash === "string" && this.hash.length) writer.writeString(1, this.hash);
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
              var message = new QueryDenomHashResponse({});

              if (data.hash != null) {
                message.hash = data.hash;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryDenomHashResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.hash = reader.readString();
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
              return QueryDenomHashResponse.deserialize(bytes);
            }
          }]);
          return QueryDenomHashResponse;
        }(pb_1.Message);

        _v.QueryDenomHashResponse = QueryDenomHashResponse;
      })(v1 || (v1 = _transfer.v1 || (_transfer.v1 = {})));
    })(transfer || (transfer = _applications.transfer || (_applications.transfer = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));