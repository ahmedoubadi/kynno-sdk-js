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

var dependency_1 = _interopRequireWildcard(require("./../../client/v1/client"));

var dependency_2 = _interopRequireWildcard(require("./../../../../cosmos/base/query/v1beta1/pagination"));

var dependency_3 = _interopRequireWildcard(require("./channel"));

var dependency_5 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

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
    var channel;

    (function (_channel) {
      var v1;

      (function (_v) {
        var QueryChannelRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(QueryChannelRequest, _pb_1$Message);

          var _super = _createSuper(QueryChannelRequest);

          function QueryChannelRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, QueryChannelRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this.channel_id = data.channel_id;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(QueryChannelRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
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
              var message = new QueryChannelRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
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
              return QueryChannelRequest.deserialize(bytes);
            }
          }]);
          return QueryChannelRequest;
        }(pb_1.Message);

        _v.QueryChannelRequest = QueryChannelRequest;

        var QueryChannelResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(QueryChannelResponse, _pb_1$Message2);

          var _super2 = _createSuper(QueryChannelResponse);

          function QueryChannelResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, QueryChannelResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("channel" in data && data.channel != undefined) {
                _this2.channel = data.channel;
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

          (0, _createClass2["default"])(QueryChannelResponse, [{
            key: "channel",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.channel.v1.Channel, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
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

              if (this.channel != null) {
                data.channel = this.channel.toObject();
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
              if (this.channel !== undefined) writer.writeMessage(1, this.channel, function () {
                return _this3.channel.serialize(writer);
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
              var message = new QueryChannelResponse({});

              if (data.channel != null) {
                message.channel = dependency_3.ibc.core.channel.v1.Channel.fromObject(data.channel);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.channel, function () {
                      return message.channel = dependency_3.ibc.core.channel.v1.Channel.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryChannelResponse.deserialize(bytes);
            }
          }]);
          return QueryChannelResponse;
        }(pb_1.Message);

        _v.QueryChannelResponse = QueryChannelResponse;

        var QueryChannelsRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(QueryChannelsRequest, _pb_1$Message3);

          var _super3 = _createSuper(QueryChannelsRequest);

          function QueryChannelsRequest(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, QueryChannelsRequest);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pagination" in data && data.pagination != undefined) {
                _this4.pagination = data.pagination;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(QueryChannelsRequest, [{
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
              var message = new QueryChannelsRequest({});

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelsRequest();

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
              return QueryChannelsRequest.deserialize(bytes);
            }
          }]);
          return QueryChannelsRequest;
        }(pb_1.Message);

        _v.QueryChannelsRequest = QueryChannelsRequest;

        var QueryChannelsResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(QueryChannelsResponse, _pb_1$Message4);

          var _super4 = _createSuper(QueryChannelsResponse);

          function QueryChannelsResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, QueryChannelsResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("channels" in data && data.channels != undefined) {
                _this6.channels = data.channels;
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

          (0, _createClass2["default"])(QueryChannelsResponse, [{
            key: "channels",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.IdentifiedChannel, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
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

              if (this.channels != null) {
                data.channels = this.channels.map(function (item) {
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
              if (this.channels !== undefined) writer.writeRepeatedMessage(1, this.channels, function (item) {
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
              var message = new QueryChannelsResponse({});

              if (data.channels != null) {
                message.channels = data.channels.map(function (item) {
                  return dependency_3.ibc.core.channel.v1.IdentifiedChannel.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.channels, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.IdentifiedChannel.deserialize(reader), dependency_3.ibc.core.channel.v1.IdentifiedChannel);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryChannelsResponse.deserialize(bytes);
            }
          }]);
          return QueryChannelsResponse;
        }(pb_1.Message);

        _v.QueryChannelsResponse = QueryChannelsResponse;

        var QueryConnectionChannelsRequest = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(QueryConnectionChannelsRequest, _pb_1$Message5);

          var _super5 = _createSuper(QueryConnectionChannelsRequest);

          function QueryConnectionChannelsRequest(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, QueryConnectionChannelsRequest);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("connection" in data && data.connection != undefined) {
                _this8.connection = data.connection;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this8.pagination = data.pagination;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(QueryConnectionChannelsRequest, [{
            key: "connection",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 2);
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

              if (this.connection != null) {
                data.connection = this.connection;
              }

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this9 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.connection === "string" && this.connection.length) writer.writeString(1, this.connection);
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this9.pagination.serialize(writer);
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
              var message = new QueryConnectionChannelsRequest({});

              if (data.connection != null) {
                message.connection = data.connection;
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionChannelsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.connection = reader.readString();
                    break;

                  case 2:
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
              return QueryConnectionChannelsRequest.deserialize(bytes);
            }
          }]);
          return QueryConnectionChannelsRequest;
        }(pb_1.Message);

        _v.QueryConnectionChannelsRequest = QueryConnectionChannelsRequest;

        var QueryConnectionChannelsResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(QueryConnectionChannelsResponse, _pb_1$Message6);

          var _super6 = _createSuper(QueryConnectionChannelsResponse);

          function QueryConnectionChannelsResponse(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, QueryConnectionChannelsResponse);
            _this10 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("channels" in data && data.channels != undefined) {
                _this10.channels = data.channels;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this10.pagination = data.pagination;
              }

              if ("height" in data && data.height != undefined) {
                _this10.height = data.height;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(QueryConnectionChannelsResponse, [{
            key: "channels",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.IdentifiedChannel, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
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

              if (this.channels != null) {
                data.channels = this.channels.map(function (item) {
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
              var _this11 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.channels !== undefined) writer.writeRepeatedMessage(1, this.channels, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this11.pagination.serialize(writer);
              });
              if (this.height !== undefined) writer.writeMessage(3, this.height, function () {
                return _this11.height.serialize(writer);
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
              var message = new QueryConnectionChannelsResponse({});

              if (data.channels != null) {
                message.channels = data.channels.map(function (item) {
                  return dependency_3.ibc.core.channel.v1.IdentifiedChannel.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConnectionChannelsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.channels, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.IdentifiedChannel.deserialize(reader), dependency_3.ibc.core.channel.v1.IdentifiedChannel);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConnectionChannelsResponse.deserialize(bytes);
            }
          }]);
          return QueryConnectionChannelsResponse;
        }(pb_1.Message);

        _v.QueryConnectionChannelsResponse = QueryConnectionChannelsResponse;

        var QueryChannelClientStateRequest = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(QueryChannelClientStateRequest, _pb_1$Message7);

          var _super7 = _createSuper(QueryChannelClientStateRequest);

          function QueryChannelClientStateRequest(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, QueryChannelClientStateRequest);
            _this12 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this12.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this12.channel_id = data.channel_id;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(QueryChannelClientStateRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
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
              var message = new QueryChannelClientStateRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelClientStateRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
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
              return QueryChannelClientStateRequest.deserialize(bytes);
            }
          }]);
          return QueryChannelClientStateRequest;
        }(pb_1.Message);

        _v.QueryChannelClientStateRequest = QueryChannelClientStateRequest;

        var QueryChannelClientStateResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(QueryChannelClientStateResponse, _pb_1$Message8);

          var _super8 = _createSuper(QueryChannelClientStateResponse);

          function QueryChannelClientStateResponse(data) {
            var _this13;

            (0, _classCallCheck2["default"])(this, QueryChannelClientStateResponse);
            _this13 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("identified_client_state" in data && data.identified_client_state != undefined) {
                _this13.identified_client_state = data.identified_client_state;
              }

              if ("proof" in data && data.proof != undefined) {
                _this13.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this13.proof_height = data.proof_height;
              }
            }

            return _this13;
          }

          (0, _createClass2["default"])(QueryChannelClientStateResponse, [{
            key: "identified_client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.IdentifiedClientState, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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
              var _this14 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.identified_client_state !== undefined) writer.writeMessage(1, this.identified_client_state, function () {
                return _this14.identified_client_state.serialize(writer);
              });
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this14.proof_height.serialize(writer);
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
              var message = new QueryChannelClientStateResponse({});

              if (data.identified_client_state != null) {
                message.identified_client_state = dependency_1.ibc.core.client.v1.IdentifiedClientState.fromObject(data.identified_client_state);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelClientStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.identified_client_state, function () {
                      return message.identified_client_state = dependency_1.ibc.core.client.v1.IdentifiedClientState.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryChannelClientStateResponse.deserialize(bytes);
            }
          }]);
          return QueryChannelClientStateResponse;
        }(pb_1.Message);

        _v.QueryChannelClientStateResponse = QueryChannelClientStateResponse;

        var QueryChannelConsensusStateRequest = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(QueryChannelConsensusStateRequest, _pb_1$Message9);

          var _super9 = _createSuper(QueryChannelConsensusStateRequest);

          function QueryChannelConsensusStateRequest(data) {
            var _this15;

            (0, _classCallCheck2["default"])(this, QueryChannelConsensusStateRequest);
            _this15 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this15.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this15.channel_id = data.channel_id;
              }

              if ("revision_number" in data && data.revision_number != undefined) {
                _this15.revision_number = data.revision_number;
              }

              if ("revision_height" in data && data.revision_height != undefined) {
                _this15.revision_height = data.revision_height;
              }
            }

            return _this15;
          }

          (0, _createClass2["default"])(QueryChannelConsensusStateRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "revision_number",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "revision_height",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
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
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.revision_number !== undefined) writer.writeUint64(3, this.revision_number);
              if (this.revision_height !== undefined) writer.writeUint64(4, this.revision_height);
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
              var message = new QueryChannelConsensusStateRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
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
                  message = new QueryChannelConsensusStateRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.revision_number = reader.readUint64();
                    break;

                  case 4:
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
              return QueryChannelConsensusStateRequest.deserialize(bytes);
            }
          }]);
          return QueryChannelConsensusStateRequest;
        }(pb_1.Message);

        _v.QueryChannelConsensusStateRequest = QueryChannelConsensusStateRequest;

        var QueryChannelConsensusStateResponse = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(QueryChannelConsensusStateResponse, _pb_1$Message10);

          var _super10 = _createSuper(QueryChannelConsensusStateResponse);

          function QueryChannelConsensusStateResponse(data) {
            var _this16;

            (0, _classCallCheck2["default"])(this, QueryChannelConsensusStateResponse);
            _this16 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this16.consensus_state = data.consensus_state;
              }

              if ("client_id" in data && data.client_id != undefined) {
                _this16.client_id = data.client_id;
              }

              if ("proof" in data && data.proof != undefined) {
                _this16.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this16.proof_height = data.proof_height;
              }
            }

            return _this16;
          }

          (0, _createClass2["default"])(QueryChannelConsensusStateResponse, [{
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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
              var _this17 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.consensus_state !== undefined) writer.writeMessage(1, this.consensus_state, function () {
                return _this17.consensus_state.serialize(writer);
              });
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(2, this.client_id);
              if (this.proof !== undefined) writer.writeBytes(3, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this17.proof_height.serialize(writer);
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
              var message = new QueryChannelConsensusStateResponse({});

              if (data.consensus_state != null) {
                message.consensus_state = dependency_5.google.protobuf.Any.fromObject(data.consensus_state);
              }

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryChannelConsensusStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_5.google.protobuf.Any.deserialize(reader);
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
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryChannelConsensusStateResponse.deserialize(bytes);
            }
          }]);
          return QueryChannelConsensusStateResponse;
        }(pb_1.Message);

        _v.QueryChannelConsensusStateResponse = QueryChannelConsensusStateResponse;

        var QueryPacketCommitmentRequest = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(QueryPacketCommitmentRequest, _pb_1$Message11);

          var _super11 = _createSuper(QueryPacketCommitmentRequest);

          function QueryPacketCommitmentRequest(data) {
            var _this18;

            (0, _classCallCheck2["default"])(this, QueryPacketCommitmentRequest);
            _this18 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this18.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this18.channel_id = data.channel_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this18.sequence = data.sequence;
              }
            }

            return _this18;
          }

          (0, _createClass2["default"])(QueryPacketCommitmentRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "sequence",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
              var message = new QueryPacketCommitmentRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketCommitmentRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.sequence = reader.readUint64();
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
              return QueryPacketCommitmentRequest.deserialize(bytes);
            }
          }]);
          return QueryPacketCommitmentRequest;
        }(pb_1.Message);

        _v.QueryPacketCommitmentRequest = QueryPacketCommitmentRequest;

        var QueryPacketCommitmentResponse = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(QueryPacketCommitmentResponse, _pb_1$Message12);

          var _super12 = _createSuper(QueryPacketCommitmentResponse);

          function QueryPacketCommitmentResponse(data) {
            var _this19;

            (0, _classCallCheck2["default"])(this, QueryPacketCommitmentResponse);
            _this19 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("commitment" in data && data.commitment != undefined) {
                _this19.commitment = data.commitment;
              }

              if ("proof" in data && data.proof != undefined) {
                _this19.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this19.proof_height = data.proof_height;
              }
            }

            return _this19;
          }

          (0, _createClass2["default"])(QueryPacketCommitmentResponse, [{
            key: "commitment",
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.commitment != null) {
                data.commitment = this.commitment;
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
              var _this20 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.commitment !== undefined) writer.writeBytes(1, this.commitment);
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this20.proof_height.serialize(writer);
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
              var message = new QueryPacketCommitmentResponse({});

              if (data.commitment != null) {
                message.commitment = data.commitment;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketCommitmentResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.commitment = reader.readBytes();
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryPacketCommitmentResponse.deserialize(bytes);
            }
          }]);
          return QueryPacketCommitmentResponse;
        }(pb_1.Message);

        _v.QueryPacketCommitmentResponse = QueryPacketCommitmentResponse;

        var QueryPacketCommitmentsRequest = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(QueryPacketCommitmentsRequest, _pb_1$Message13);

          var _super13 = _createSuper(QueryPacketCommitmentsRequest);

          function QueryPacketCommitmentsRequest(data) {
            var _this21;

            (0, _classCallCheck2["default"])(this, QueryPacketCommitmentsRequest);
            _this21 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this21.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this21.channel_id = data.channel_id;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this21.pagination = data.pagination;
              }
            }

            return _this21;
          }

          (0, _createClass2["default"])(QueryPacketCommitmentsRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject9) {
              function toObject() {
                return _toObject9.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject9.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this22 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.pagination !== undefined) writer.writeMessage(3, this.pagination, function () {
                return _this22.pagination.serialize(writer);
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
              var message = new QueryPacketCommitmentsRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketCommitmentsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
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
              return QueryPacketCommitmentsRequest.deserialize(bytes);
            }
          }]);
          return QueryPacketCommitmentsRequest;
        }(pb_1.Message);

        _v.QueryPacketCommitmentsRequest = QueryPacketCommitmentsRequest;

        var QueryPacketCommitmentsResponse = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(QueryPacketCommitmentsResponse, _pb_1$Message14);

          var _super14 = _createSuper(QueryPacketCommitmentsResponse);

          function QueryPacketCommitmentsResponse(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, QueryPacketCommitmentsResponse);
            _this23 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("commitments" in data && data.commitments != undefined) {
                _this23.commitments = data.commitments;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this23.pagination = data.pagination;
              }

              if ("height" in data && data.height != undefined) {
                _this23.height = data.height;
              }
            }

            return _this23;
          }

          (0, _createClass2["default"])(QueryPacketCommitmentsResponse, [{
            key: "commitments",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.PacketState, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject10) {
              function toObject() {
                return _toObject10.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject10.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.commitments != null) {
                data.commitments = this.commitments.map(function (item) {
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
              var _this24 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.commitments !== undefined) writer.writeRepeatedMessage(1, this.commitments, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this24.pagination.serialize(writer);
              });
              if (this.height !== undefined) writer.writeMessage(3, this.height, function () {
                return _this24.height.serialize(writer);
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
              var message = new QueryPacketCommitmentsResponse({});

              if (data.commitments != null) {
                message.commitments = data.commitments.map(function (item) {
                  return dependency_3.ibc.core.channel.v1.PacketState.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketCommitmentsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.commitments, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_3.ibc.core.channel.v1.PacketState);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryPacketCommitmentsResponse.deserialize(bytes);
            }
          }]);
          return QueryPacketCommitmentsResponse;
        }(pb_1.Message);

        _v.QueryPacketCommitmentsResponse = QueryPacketCommitmentsResponse;

        var QueryPacketReceiptRequest = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(QueryPacketReceiptRequest, _pb_1$Message15);

          var _super15 = _createSuper(QueryPacketReceiptRequest);

          function QueryPacketReceiptRequest(data) {
            var _this25;

            (0, _classCallCheck2["default"])(this, QueryPacketReceiptRequest);
            _this25 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this25.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this25.channel_id = data.channel_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this25.sequence = data.sequence;
              }
            }

            return _this25;
          }

          (0, _createClass2["default"])(QueryPacketReceiptRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "sequence",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
              var message = new QueryPacketReceiptRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketReceiptRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.sequence = reader.readUint64();
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
              return QueryPacketReceiptRequest.deserialize(bytes);
            }
          }]);
          return QueryPacketReceiptRequest;
        }(pb_1.Message);

        _v.QueryPacketReceiptRequest = QueryPacketReceiptRequest;

        var QueryPacketReceiptResponse = /*#__PURE__*/function (_pb_1$Message16) {
          (0, _inherits2["default"])(QueryPacketReceiptResponse, _pb_1$Message16);

          var _super16 = _createSuper(QueryPacketReceiptResponse);

          function QueryPacketReceiptResponse(data) {
            var _this26;

            (0, _classCallCheck2["default"])(this, QueryPacketReceiptResponse);
            _this26 = _super16.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("received" in data && data.received != undefined) {
                _this26.received = data.received;
              }

              if ("proof" in data && data.proof != undefined) {
                _this26.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this26.proof_height = data.proof_height;
              }
            }

            return _this26;
          }

          (0, _createClass2["default"])(QueryPacketReceiptResponse, [{
            key: "received",
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject11) {
              function toObject() {
                return _toObject11.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject11.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.received != null) {
                data.received = this.received;
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
              var _this27 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.received !== undefined) writer.writeBool(2, this.received);
              if (this.proof !== undefined) writer.writeBytes(3, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(4, this.proof_height, function () {
                return _this27.proof_height.serialize(writer);
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
              var message = new QueryPacketReceiptResponse({});

              if (data.received != null) {
                message.received = data.received;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketReceiptResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 2:
                    message.received = reader.readBool();
                    break;

                  case 3:
                    message.proof = reader.readBytes();
                    break;

                  case 4:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryPacketReceiptResponse.deserialize(bytes);
            }
          }]);
          return QueryPacketReceiptResponse;
        }(pb_1.Message);

        _v.QueryPacketReceiptResponse = QueryPacketReceiptResponse;

        var QueryPacketAcknowledgementRequest = /*#__PURE__*/function (_pb_1$Message17) {
          (0, _inherits2["default"])(QueryPacketAcknowledgementRequest, _pb_1$Message17);

          var _super17 = _createSuper(QueryPacketAcknowledgementRequest);

          function QueryPacketAcknowledgementRequest(data) {
            var _this28;

            (0, _classCallCheck2["default"])(this, QueryPacketAcknowledgementRequest);
            _this28 = _super17.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this28.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this28.channel_id = data.channel_id;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this28.sequence = data.sequence;
              }
            }

            return _this28;
          }

          (0, _createClass2["default"])(QueryPacketAcknowledgementRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "sequence",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
              var message = new QueryPacketAcknowledgementRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketAcknowledgementRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.sequence = reader.readUint64();
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
              return QueryPacketAcknowledgementRequest.deserialize(bytes);
            }
          }]);
          return QueryPacketAcknowledgementRequest;
        }(pb_1.Message);

        _v.QueryPacketAcknowledgementRequest = QueryPacketAcknowledgementRequest;

        var QueryPacketAcknowledgementResponse = /*#__PURE__*/function (_pb_1$Message18) {
          (0, _inherits2["default"])(QueryPacketAcknowledgementResponse, _pb_1$Message18);

          var _super18 = _createSuper(QueryPacketAcknowledgementResponse);

          function QueryPacketAcknowledgementResponse(data) {
            var _this29;

            (0, _classCallCheck2["default"])(this, QueryPacketAcknowledgementResponse);
            _this29 = _super18.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("acknowledgement" in data && data.acknowledgement != undefined) {
                _this29.acknowledgement = data.acknowledgement;
              }

              if ("proof" in data && data.proof != undefined) {
                _this29.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this29.proof_height = data.proof_height;
              }
            }

            return _this29;
          }

          (0, _createClass2["default"])(QueryPacketAcknowledgementResponse, [{
            key: "acknowledgement",
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject12) {
              function toObject() {
                return _toObject12.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject12.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.acknowledgement != null) {
                data.acknowledgement = this.acknowledgement;
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
              var _this30 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.acknowledgement !== undefined) writer.writeBytes(1, this.acknowledgement);
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this30.proof_height.serialize(writer);
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
              var message = new QueryPacketAcknowledgementResponse({});

              if (data.acknowledgement != null) {
                message.acknowledgement = data.acknowledgement;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketAcknowledgementResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.acknowledgement = reader.readBytes();
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryPacketAcknowledgementResponse.deserialize(bytes);
            }
          }]);
          return QueryPacketAcknowledgementResponse;
        }(pb_1.Message);

        _v.QueryPacketAcknowledgementResponse = QueryPacketAcknowledgementResponse;

        var QueryPacketAcknowledgementsRequest = /*#__PURE__*/function (_pb_1$Message19) {
          (0, _inherits2["default"])(QueryPacketAcknowledgementsRequest, _pb_1$Message19);

          var _super19 = _createSuper(QueryPacketAcknowledgementsRequest);

          function QueryPacketAcknowledgementsRequest(data) {
            var _this31;

            (0, _classCallCheck2["default"])(this, QueryPacketAcknowledgementsRequest);
            _this31 = _super19.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this31), Array.isArray(data) ? data : [], 0, -1, [4], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this31.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this31.channel_id = data.channel_id;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this31.pagination = data.pagination;
              }

              if ("packet_commitment_sequences" in data && data.packet_commitment_sequences != undefined) {
                _this31.packet_commitment_sequences = data.packet_commitment_sequences;
              }
            }

            return _this31;
          }

          (0, _createClass2["default"])(QueryPacketAcknowledgementsRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "packet_commitment_sequences",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject13) {
              function toObject() {
                return _toObject13.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject13.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              if (this.packet_commitment_sequences != null) {
                data.packet_commitment_sequences = this.packet_commitment_sequences;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this32 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.pagination !== undefined) writer.writeMessage(3, this.pagination, function () {
                return _this32.pagination.serialize(writer);
              });
              if (this.packet_commitment_sequences !== undefined) writer.writePackedUint64(4, this.packet_commitment_sequences);
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
              var message = new QueryPacketAcknowledgementsRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              if (data.packet_commitment_sequences != null) {
                message.packet_commitment_sequences = data.packet_commitment_sequences;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketAcknowledgementsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
                    });
                    break;

                  case 4:
                    message.packet_commitment_sequences = reader.readPackedUint64();
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
              return QueryPacketAcknowledgementsRequest.deserialize(bytes);
            }
          }]);
          return QueryPacketAcknowledgementsRequest;
        }(pb_1.Message);

        _v.QueryPacketAcknowledgementsRequest = QueryPacketAcknowledgementsRequest;

        var QueryPacketAcknowledgementsResponse = /*#__PURE__*/function (_pb_1$Message20) {
          (0, _inherits2["default"])(QueryPacketAcknowledgementsResponse, _pb_1$Message20);

          var _super20 = _createSuper(QueryPacketAcknowledgementsResponse);

          function QueryPacketAcknowledgementsResponse(data) {
            var _this33;

            (0, _classCallCheck2["default"])(this, QueryPacketAcknowledgementsResponse);
            _this33 = _super20.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this33), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("acknowledgements" in data && data.acknowledgements != undefined) {
                _this33.acknowledgements = data.acknowledgements;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this33.pagination = data.pagination;
              }

              if ("height" in data && data.height != undefined) {
                _this33.height = data.height;
              }
            }

            return _this33;
          }

          (0, _createClass2["default"])(QueryPacketAcknowledgementsResponse, [{
            key: "acknowledgements",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_3.ibc.core.channel.v1.PacketState, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject14) {
              function toObject() {
                return _toObject14.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject14.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.acknowledgements != null) {
                data.acknowledgements = this.acknowledgements.map(function (item) {
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
              var _this34 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.acknowledgements !== undefined) writer.writeRepeatedMessage(1, this.acknowledgements, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this34.pagination.serialize(writer);
              });
              if (this.height !== undefined) writer.writeMessage(3, this.height, function () {
                return _this34.height.serialize(writer);
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
              var message = new QueryPacketAcknowledgementsResponse({});

              if (data.acknowledgements != null) {
                message.acknowledgements = data.acknowledgements.map(function (item) {
                  return dependency_3.ibc.core.channel.v1.PacketState.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryPacketAcknowledgementsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.acknowledgements, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.ibc.core.channel.v1.PacketState.deserialize(reader), dependency_3.ibc.core.channel.v1.PacketState);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryPacketAcknowledgementsResponse.deserialize(bytes);
            }
          }]);
          return QueryPacketAcknowledgementsResponse;
        }(pb_1.Message);

        _v.QueryPacketAcknowledgementsResponse = QueryPacketAcknowledgementsResponse;

        var QueryUnreceivedPacketsRequest = /*#__PURE__*/function (_pb_1$Message21) {
          (0, _inherits2["default"])(QueryUnreceivedPacketsRequest, _pb_1$Message21);

          var _super21 = _createSuper(QueryUnreceivedPacketsRequest);

          function QueryUnreceivedPacketsRequest(data) {
            var _this35;

            (0, _classCallCheck2["default"])(this, QueryUnreceivedPacketsRequest);
            _this35 = _super21.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this35), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this35.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this35.channel_id = data.channel_id;
              }

              if ("packet_commitment_sequences" in data && data.packet_commitment_sequences != undefined) {
                _this35.packet_commitment_sequences = data.packet_commitment_sequences;
              }
            }

            return _this35;
          }

          (0, _createClass2["default"])(QueryUnreceivedPacketsRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "packet_commitment_sequences",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.packet_commitment_sequences != null) {
                data.packet_commitment_sequences = this.packet_commitment_sequences;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.packet_commitment_sequences !== undefined) writer.writePackedUint64(3, this.packet_commitment_sequences);
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
              var message = new QueryUnreceivedPacketsRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.packet_commitment_sequences != null) {
                message.packet_commitment_sequences = data.packet_commitment_sequences;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUnreceivedPacketsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.packet_commitment_sequences = reader.readPackedUint64();
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
              return QueryUnreceivedPacketsRequest.deserialize(bytes);
            }
          }]);
          return QueryUnreceivedPacketsRequest;
        }(pb_1.Message);

        _v.QueryUnreceivedPacketsRequest = QueryUnreceivedPacketsRequest;

        var QueryUnreceivedPacketsResponse = /*#__PURE__*/function (_pb_1$Message22) {
          (0, _inherits2["default"])(QueryUnreceivedPacketsResponse, _pb_1$Message22);

          var _super22 = _createSuper(QueryUnreceivedPacketsResponse);

          function QueryUnreceivedPacketsResponse(data) {
            var _this36;

            (0, _classCallCheck2["default"])(this, QueryUnreceivedPacketsResponse);
            _this36 = _super22.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this36), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequences" in data && data.sequences != undefined) {
                _this36.sequences = data.sequences;
              }

              if ("height" in data && data.height != undefined) {
                _this36.height = data.height;
              }
            }

            return _this36;
          }

          (0, _createClass2["default"])(QueryUnreceivedPacketsResponse, [{
            key: "sequences",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject15) {
              function toObject() {
                return _toObject15.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject15.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.sequences != null) {
                data.sequences = this.sequences;
              }

              if (this.height != null) {
                data.height = this.height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this37 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.sequences !== undefined) writer.writePackedUint64(1, this.sequences);
              if (this.height !== undefined) writer.writeMessage(2, this.height, function () {
                return _this37.height.serialize(writer);
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
              var message = new QueryUnreceivedPacketsResponse({});

              if (data.sequences != null) {
                message.sequences = data.sequences;
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUnreceivedPacketsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequences = reader.readPackedUint64();
                    break;

                  case 2:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryUnreceivedPacketsResponse.deserialize(bytes);
            }
          }]);
          return QueryUnreceivedPacketsResponse;
        }(pb_1.Message);

        _v.QueryUnreceivedPacketsResponse = QueryUnreceivedPacketsResponse;

        var QueryUnreceivedAcksRequest = /*#__PURE__*/function (_pb_1$Message23) {
          (0, _inherits2["default"])(QueryUnreceivedAcksRequest, _pb_1$Message23);

          var _super23 = _createSuper(QueryUnreceivedAcksRequest);

          function QueryUnreceivedAcksRequest(data) {
            var _this38;

            (0, _classCallCheck2["default"])(this, QueryUnreceivedAcksRequest);
            _this38 = _super23.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this38), Array.isArray(data) ? data : [], 0, -1, [3], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this38.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this38.channel_id = data.channel_id;
              }

              if ("packet_ack_sequences" in data && data.packet_ack_sequences != undefined) {
                _this38.packet_ack_sequences = data.packet_ack_sequences;
              }
            }

            return _this38;
          }

          (0, _createClass2["default"])(QueryUnreceivedAcksRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "packet_ack_sequences",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              if (this.packet_ack_sequences != null) {
                data.packet_ack_sequences = this.packet_ack_sequences;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
              if (this.packet_ack_sequences !== undefined) writer.writePackedUint64(3, this.packet_ack_sequences);
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
              var message = new QueryUnreceivedAcksRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              if (data.packet_ack_sequences != null) {
                message.packet_ack_sequences = data.packet_ack_sequences;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUnreceivedAcksRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
                    break;

                  case 3:
                    message.packet_ack_sequences = reader.readPackedUint64();
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
              return QueryUnreceivedAcksRequest.deserialize(bytes);
            }
          }]);
          return QueryUnreceivedAcksRequest;
        }(pb_1.Message);

        _v.QueryUnreceivedAcksRequest = QueryUnreceivedAcksRequest;

        var QueryUnreceivedAcksResponse = /*#__PURE__*/function (_pb_1$Message24) {
          (0, _inherits2["default"])(QueryUnreceivedAcksResponse, _pb_1$Message24);

          var _super24 = _createSuper(QueryUnreceivedAcksResponse);

          function QueryUnreceivedAcksResponse(data) {
            var _this39;

            (0, _classCallCheck2["default"])(this, QueryUnreceivedAcksResponse);
            _this39 = _super24.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this39), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("sequences" in data && data.sequences != undefined) {
                _this39.sequences = data.sequences;
              }

              if ("height" in data && data.height != undefined) {
                _this39.height = data.height;
              }
            }

            return _this39;
          }

          (0, _createClass2["default"])(QueryUnreceivedAcksResponse, [{
            key: "sequences",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject16) {
              function toObject() {
                return _toObject16.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject16.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.sequences != null) {
                data.sequences = this.sequences;
              }

              if (this.height != null) {
                data.height = this.height.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this40 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.sequences !== undefined) writer.writePackedUint64(1, this.sequences);
              if (this.height !== undefined) writer.writeMessage(2, this.height, function () {
                return _this40.height.serialize(writer);
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
              var message = new QueryUnreceivedAcksResponse({});

              if (data.sequences != null) {
                message.sequences = data.sequences;
              }

              if (data.height != null) {
                message.height = dependency_1.ibc.core.client.v1.Height.fromObject(data.height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUnreceivedAcksResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.sequences = reader.readPackedUint64();
                    break;

                  case 2:
                    reader.readMessage(message.height, function () {
                      return message.height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryUnreceivedAcksResponse.deserialize(bytes);
            }
          }]);
          return QueryUnreceivedAcksResponse;
        }(pb_1.Message);

        _v.QueryUnreceivedAcksResponse = QueryUnreceivedAcksResponse;

        var QueryNextSequenceReceiveRequest = /*#__PURE__*/function (_pb_1$Message25) {
          (0, _inherits2["default"])(QueryNextSequenceReceiveRequest, _pb_1$Message25);

          var _super25 = _createSuper(QueryNextSequenceReceiveRequest);

          function QueryNextSequenceReceiveRequest(data) {
            var _this41;

            (0, _classCallCheck2["default"])(this, QueryNextSequenceReceiveRequest);
            _this41 = _super25.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this41), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("port_id" in data && data.port_id != undefined) {
                _this41.port_id = data.port_id;
              }

              if ("channel_id" in data && data.channel_id != undefined) {
                _this41.channel_id = data.channel_id;
              }
            }

            return _this41;
          }

          (0, _createClass2["default"])(QueryNextSequenceReceiveRequest, [{
            key: "port_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "channel_id",
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

              if (this.port_id != null) {
                data.port_id = this.port_id;
              }

              if (this.channel_id != null) {
                data.channel_id = this.channel_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.port_id === "string" && this.port_id.length) writer.writeString(1, this.port_id);
              if (typeof this.channel_id === "string" && this.channel_id.length) writer.writeString(2, this.channel_id);
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
              var message = new QueryNextSequenceReceiveRequest({});

              if (data.port_id != null) {
                message.port_id = data.port_id;
              }

              if (data.channel_id != null) {
                message.channel_id = data.channel_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryNextSequenceReceiveRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.port_id = reader.readString();
                    break;

                  case 2:
                    message.channel_id = reader.readString();
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
              return QueryNextSequenceReceiveRequest.deserialize(bytes);
            }
          }]);
          return QueryNextSequenceReceiveRequest;
        }(pb_1.Message);

        _v.QueryNextSequenceReceiveRequest = QueryNextSequenceReceiveRequest;

        var QueryNextSequenceReceiveResponse = /*#__PURE__*/function (_pb_1$Message26) {
          (0, _inherits2["default"])(QueryNextSequenceReceiveResponse, _pb_1$Message26);

          var _super26 = _createSuper(QueryNextSequenceReceiveResponse);

          function QueryNextSequenceReceiveResponse(data) {
            var _this42;

            (0, _classCallCheck2["default"])(this, QueryNextSequenceReceiveResponse);
            _this42 = _super26.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this42), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("next_sequence_receive" in data && data.next_sequence_receive != undefined) {
                _this42.next_sequence_receive = data.next_sequence_receive;
              }

              if ("proof" in data && data.proof != undefined) {
                _this42.proof = data.proof;
              }

              if ("proof_height" in data && data.proof_height != undefined) {
                _this42.proof_height = data.proof_height;
              }
            }

            return _this42;
          }

          (0, _createClass2["default"])(QueryNextSequenceReceiveResponse, [{
            key: "next_sequence_receive",
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
              return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Height, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function (_toObject17) {
              function toObject() {
                return _toObject17.apply(this, arguments);
              }

              toObject.toString = function () {
                return _toObject17.toString();
              };

              return toObject;
            }(function () {
              var data = {};

              if (this.next_sequence_receive != null) {
                data.next_sequence_receive = this.next_sequence_receive;
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
              var _this43 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.next_sequence_receive !== undefined) writer.writeUint64(1, this.next_sequence_receive);
              if (this.proof !== undefined) writer.writeBytes(2, this.proof);
              if (this.proof_height !== undefined) writer.writeMessage(3, this.proof_height, function () {
                return _this43.proof_height.serialize(writer);
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
              var message = new QueryNextSequenceReceiveResponse({});

              if (data.next_sequence_receive != null) {
                message.next_sequence_receive = data.next_sequence_receive;
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_1.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryNextSequenceReceiveResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.next_sequence_receive = reader.readUint64();
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_1.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryNextSequenceReceiveResponse.deserialize(bytes);
            }
          }]);
          return QueryNextSequenceReceiveResponse;
        }(pb_1.Message);

        _v.QueryNextSequenceReceiveResponse = QueryNextSequenceReceiveResponse;
      })(v1 || (v1 = _channel.v1 || (_channel.v1 = {})));
    })(channel || (channel = _core.channel || (_core.channel = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));