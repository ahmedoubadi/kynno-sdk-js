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

var dependency_3 = _interopRequireWildcard(require("./../../client/v1/client"));

var dependency_4 = _interopRequireWildcard(require("./connection"));

var dependency_6 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var core;

  (function (_core) {
    var connection;

    (function (_connection) {
      var v1;

      (function (_v) {
        var QueryConnectionRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(QueryConnectionRequest, _pb_1$Message);

          var _super = _createSuper(QueryConnectionRequest);

          function QueryConnectionRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, QueryConnectionRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this.connection_id = data.connection_id;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(QueryConnectionRequest, [{
            key: "connection_id",
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
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
              var message = new QueryConnectionRequest({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
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
              return QueryConnectionRequest.deserialize(bytes);
            }
          }]);
          return QueryConnectionRequest;
        }(pb_1.Message);

        _v.QueryConnectionRequest = QueryConnectionRequest;

        var QueryConnectionResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(QueryConnectionResponse, _pb_1$Message2);

          var _super2 = _createSuper(QueryConnectionResponse);

          function QueryConnectionResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, QueryConnectionResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection" in data && data.connection != undefined) {
                _this2.connection = data.connection;
              }

              if ("proof" in data && data.proof != undefined) {
                _this2.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this2.proof_height = data.proof_height;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(QueryConnectionResponse, [{
            key: "connection",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.connection.v1.ConnectionEnd, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "proof",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
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

              if (this.connection != null) {
                data.connection = this.connection.toObject();
              }

              if (this.proof != null) {
                data.proof = this.proof;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this3 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.connection !== undefined) writer.writeMessage(1, this.connection, function () {
                return _this3.connection.serialize(writer);
              });
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this3.proof_height.serialize(writer);
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
              var message = new QueryConnectionResponse({});

              if (data.connection != null) {
                message.connection = dependency_4.ibc.core.connection.v1.ConnectionEnd.fromObject(data.connection);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.connection, function () {
                      return message.connection = dependency_4.ibc.core.connection.v1.ConnectionEnd.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConnectionResponse.deserialize(bytes);
            }
          }]);
          return QueryConnectionResponse;
        }(pb_1.Message);

        _v.QueryConnectionResponse = QueryConnectionResponse;

        var QueryConnectionsRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(QueryConnectionsRequest, _pb_1$Message3);

          var _super3 = _createSuper(QueryConnectionsRequest);

          function QueryConnectionsRequest(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, QueryConnectionsRequest);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pagination" in data && data.pagination != undefined) {
                _this4.pagination = data.pagination;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(QueryConnectionsRequest, [{
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
              var message = new QueryConnectionsRequest({});

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionsRequest();

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
              return QueryConnectionsRequest.deserialize(bytes);
            }
          }]);
          return QueryConnectionsRequest;
        }(pb_1.Message);

        _v.QueryConnectionsRequest = QueryConnectionsRequest;

        var QueryConnectionsResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(QueryConnectionsResponse, _pb_1$Message4);

          var _super4 = _createSuper(QueryConnectionsResponse);

          function QueryConnectionsResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, QueryConnectionsResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connections" in data && data.connections != undefined) {
                _this6.connections = data.connections;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this6.pagination = data.pagination;
              }

              if ("height" in data && data.height != undefined) {
                _this6.height = data.height;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(QueryConnectionsResponse, [{
            key: "connections",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_4.ibc.core.connection.v1.IdentifiedConnection, 1);
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
            key: "height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.connections != null) {
                data.connections = this.connections.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              if (this.height != null) {
                data.height = this.height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this7 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.connections !== undefined) writer.writeRepeatedMessage(1, this.connections, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this7.pagination.serialize(writer);
              });
              if (this.height !== undefined) writer.writeMessage(3, this.height, function () {
                return _this7.height.serialize(writer);
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
              var message = new QueryConnectionsResponse({});

              if (data.connections != null) {
                message.connections = data.connections.map(function (item) {
                  return dependency_4.ibc.core.connection.v1.IdentifiedConnection.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              if (data.height != null) {
                message.height = dependency_3.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.connections, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.ibc.core.connection.v1.IdentifiedConnection.deserialize(reader), dependency_4.ibc.core.connection.v1.IdentifiedConnection);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConnectionsResponse.deserialize(bytes);
            }
          }]);
          return QueryConnectionsResponse;
        }(pb_1.Message);

        _v.QueryConnectionsResponse = QueryConnectionsResponse;

        var QueryClientConnectionsRequest = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(QueryClientConnectionsRequest, _pb_1$Message5);

          var _super5 = _createSuper(QueryClientConnectionsRequest);

          function QueryClientConnectionsRequest(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, QueryClientConnectionsRequest);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this8.client_id = data.client_id;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(QueryClientConnectionsRequest, [{
            key: "client_id",
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
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
              var message = new QueryClientConnectionsRequest({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientConnectionsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
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
              return QueryClientConnectionsRequest.deserialize(bytes);
            }
          }]);
          return QueryClientConnectionsRequest;
        }(pb_1.Message);

        _v.QueryClientConnectionsRequest = QueryClientConnectionsRequest;

        var QueryClientConnectionsResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(QueryClientConnectionsResponse, _pb_1$Message6);

          var _super6 = _createSuper(QueryClientConnectionsResponse);

          function QueryClientConnectionsResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, QueryClientConnectionsResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_paths" in data && data.connection_paths != undefined) {
                _this9.connection_paths = data.connection_paths;
              }

              if ("proof" in data && data.proof != undefined) {
                _this9.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this9.proof_height = data.proof_height;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(QueryClientConnectionsResponse, [{
            key: "connection_paths",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "proof",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.connection_paths != null) {
                data.connection_paths = this.connection_paths;
              }

              if (this.proof != null) {
                data.proof = this.proof;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this10 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.connection_paths !== undefined) writer.writeRepeatedString(1, this.connection_paths);
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this10.proof_height.serialize(writer);
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
              var message = new QueryClientConnectionsResponse({});

              if (data.connection_paths != null) {
                message.connection_paths = data.connection_paths;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientConnectionsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryClientConnectionsResponse.deserialize(bytes);
            }
          }]);
          return QueryClientConnectionsResponse;
        }(pb_1.Message);

        _v.QueryClientConnectionsResponse = QueryClientConnectionsResponse;

        var QueryConnectionClientStateRequest = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(QueryConnectionClientStateRequest, _pb_1$Message7);

          var _super7 = _createSuper(QueryConnectionClientStateRequest);

          function QueryConnectionClientStateRequest(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, QueryConnectionClientStateRequest);
            _this11 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this11.connection_id = data.connection_id;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(QueryConnectionClientStateRequest, [{
            key: "connection_id",
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
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
              var message = new QueryConnectionClientStateRequest({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionClientStateRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
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
              return QueryConnectionClientStateRequest.deserialize(bytes);
            }
          }]);
          return QueryConnectionClientStateRequest;
        }(pb_1.Message);

        _v.QueryConnectionClientStateRequest = QueryConnectionClientStateRequest;

        var QueryConnectionClientStateResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(QueryConnectionClientStateResponse, _pb_1$Message8);

          var _super8 = _createSuper(QueryConnectionClientStateResponse);

          function QueryConnectionClientStateResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, QueryConnectionClientStateResponse);
            _this12 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("identified_client_state" in data && data.identified_client_state != undefined) {
                _this12.identified_client_state = data.identified_client_state;
              }

              if ("proof" in data && data.proof != undefined) {
                _this12.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this12.proof_height = data.proof_height;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(QueryConnectionClientStateResponse, [{
            key: "identified_client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.IdentifiedClientState, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "proof",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.identified_client_state != null) {
                data.identified_client_state = this.identified_client_state.toObject();
              }

              if (this.proof != null) {
                data.proof = this.proof;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this13 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.identified_client_state !== undefined) writer.writeMessage(1, this.identified_client_state, function () {
                return _this13.identified_client_state.serialize(writer);
              });
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this13.proof_height.serialize(writer);
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
              var message = new QueryConnectionClientStateResponse({});

              if (data.identified_client_state != null) {
                message.identified_client_state = dependency_3.ibc.core.client.v1.IdentifiedClientState.fromObject(data.identified_client_state);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionClientStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.identified_client_state, function () {
                      return message.identified_client_state = dependency_3.ibc.core.client.v1.IdentifiedClientState.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConnectionClientStateResponse.deserialize(bytes);
            }
          }]);
          return QueryConnectionClientStateResponse;
        }(pb_1.Message);

        _v.QueryConnectionClientStateResponse = QueryConnectionClientStateResponse;

        var QueryConnectionConsensusStateRequest = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(QueryConnectionConsensusStateRequest, _pb_1$Message9);

          var _super9 = _createSuper(QueryConnectionConsensusStateRequest);

          function QueryConnectionConsensusStateRequest(data) {
            var _this14;

            (0, _classCallCheck2["default"])(this, QueryConnectionConsensusStateRequest);
            _this14 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection_id" in data && data.connection_id != undefined) {
                _this14.connection_id = data.connection_id;
              }

              if ("revision_number" in data && data.revision_number != undefined) {
                _this14.revision_number = data.revision_number;
              }

              if ("revision_height" in data && data.revision_height != undefined) {
                _this14.revision_height = data.revision_height;
              }
            }

            return _this14;
          }

          (0, _createClass2["default"])(QueryConnectionConsensusStateRequest, [{
            key: "connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "revision_number",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "revision_height",
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

              if (this.connection_id != null) {
                data.connection_id = this.connection_id;
              }

              if (this.revision_number != null) {
                data.revision_number = this.revision_number;
              }

              if (this.revision_height != null) {
                data.revision_height = this.revision_height;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection_id === "string" && this.connection_id.length) writer.writeString(1, this.connection_id);
              if (this.revision_number !== undefined) writer.writeUint64(2, this.revision_number);
              if (this.revision_height !== undefined) writer.writeUint64(3, this.revision_height);
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
              var message = new QueryConnectionConsensusStateRequest({});

              if (data.connection_id != null) {
                message.connection_id = data.connection_id;
              }

              if (data.revision_number != null) {
                message.revision_number = data.revision_number;
              }

              if (data.revision_height != null) {
                message.revision_height = data.revision_height;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionConsensusStateRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection_id = reader.readString();
                    break;

                  case 2:
                    message.revision_number = reader.readUint64();
                    break;

                  case 3:
                    message.revision_height = reader.readUint64();
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
              return QueryConnectionConsensusStateRequest.deserialize(bytes);
            }
          }]);
          return QueryConnectionConsensusStateRequest;
        }(pb_1.Message);

        _v.QueryConnectionConsensusStateRequest = QueryConnectionConsensusStateRequest;

        var QueryConnectionConsensusStateResponse = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(QueryConnectionConsensusStateResponse, _pb_1$Message10);

          var _super10 = _createSuper(QueryConnectionConsensusStateResponse);

          function QueryConnectionConsensusStateResponse(data) {
            var _this15;

            (0, _classCallCheck2["default"])(this, QueryConnectionConsensusStateResponse);
            _this15 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this15.consensus_state = data.consensus_state;
              }

              if ("client_id" in data && data.client_id != undefined) {
                _this15.client_id = data.client_id;
              }

              if ("proof" in data && data.proof != undefined) {
                _this15.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this15.proof_height = data.proof_height;
              }
            }

            return _this15;
          }

          (0, _createClass2["default"])(QueryConnectionConsensusStateResponse, [{
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "proof",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proof_height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
              }

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.proof != null) {
                data.proof = this.proof;
              }

              if (this.proof_height != null) {
                data.proof_height = this.proof_height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this16 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.consensus_state !== undefined) writer.writeMessage(1, this.consensus_state, function () {
                return _this16.consensus_state.serialize(writer);
              });
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(2, this.client_id);
              if (this.proof !== undefined) writer.writeBytes(3, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this16.proof_height.serialize(writer);
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
              var message = new QueryConnectionConsensusStateResponse({});

              if (data.consensus_state != null) {
                message.consensus_state = dependency_6.google.protobuf.Any.fromObject(data.consensus_state);
              }

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_3.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionConsensusStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_6.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.client_id = reader.readString();
                    break;

                  case 3:
                    message.proof = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_3.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConnectionConsensusStateResponse.deserialize(bytes);
            }
          }]);
          return QueryConnectionConsensusStateResponse;
        }(pb_1.Message);

        _v.QueryConnectionConsensusStateResponse = QueryConnectionConsensusStateResponse;
      })(v1 || (v1 = _connection.v1 || (_connection.v1 = {})));
    })(connection || (connection = _core.connection || (_core.connection = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));