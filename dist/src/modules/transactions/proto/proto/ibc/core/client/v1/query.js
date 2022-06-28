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

var dependency_1 = _interopRequireWildcard(require("./../../../../cosmos/base/query/v1beta1/pagination"));

var dependency_2 = _interopRequireWildcard(require("./client"));

var dependency_3 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

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
    var client;

    (function (_client) {
      var v1;

      (function (_v) {
        var QueryClientStateRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(QueryClientStateRequest, _pb_1$Message);

          var _super = _createSuper(QueryClientStateRequest);

          function QueryClientStateRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, QueryClientStateRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this.client_id = data.client_id;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(QueryClientStateRequest, [{
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
              var message = new QueryClientStateRequest({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStateRequest();

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
              return QueryClientStateRequest.deserialize(bytes);
            }
          }]);
          return QueryClientStateRequest;
        }(pb_1.Message);

        _v.QueryClientStateRequest = QueryClientStateRequest;

        var QueryClientStateResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(QueryClientStateResponse, _pb_1$Message2);

          var _super2 = _createSuper(QueryClientStateResponse);

          function QueryClientStateResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, QueryClientStateResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_state" in data && data.client_state != undefined) {
                _this2.client_state = data.client_state;
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

          (0, _createClass2["default"])(QueryClientStateResponse, [{
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
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

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
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
              if (this.client_state !== undefined) writer.writeMessage(1, this.client_state, function () {
                return _this3.client_state.serialize(writer);
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
              var message = new QueryClientStateResponse({});

              if (data.client_state != null) {
                message.client_state = dependency_3.google.protobuf.Any.fromObject(data.client_state);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_3.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryClientStateResponse.deserialize(bytes);
            }
          }]);
          return QueryClientStateResponse;
        }(pb_1.Message);

        _v.QueryClientStateResponse = QueryClientStateResponse;

        var QueryClientStatesRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(QueryClientStatesRequest, _pb_1$Message3);

          var _super3 = _createSuper(QueryClientStatesRequest);

          function QueryClientStatesRequest(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, QueryClientStatesRequest);
            _this4 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pagination" in data && data.pagination != undefined) {
                _this4.pagination = data.pagination;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(QueryClientStatesRequest, [{
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
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
              var message = new QueryClientStatesRequest({});

              if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStatesRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
              return QueryClientStatesRequest.deserialize(bytes);
            }
          }]);
          return QueryClientStatesRequest;
        }(pb_1.Message);

        _v.QueryClientStatesRequest = QueryClientStatesRequest;

        var QueryClientStatesResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(QueryClientStatesResponse, _pb_1$Message4);

          var _super4 = _createSuper(QueryClientStatesResponse);

          function QueryClientStatesResponse(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, QueryClientStatesResponse);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_states" in data && data.client_states != undefined) {
                _this6.client_states = data.client_states;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this6.pagination = data.pagination;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(QueryClientStatesResponse, [{
            key: "client_states",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.client.v1.IdentifiedClientState, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
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

              if (this.client_states != null) {
                data.client_states = this.client_states.map(function (item) {
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
              if (this.client_states !== undefined) writer.writeRepeatedMessage(1, this.client_states, function (item) {
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
              var message = new QueryClientStatesResponse({});

              if (data.client_states != null) {
                message.client_states = data.client_states.map(function (item) {
                  return dependency_2.ibc.core.client.v1.IdentifiedClientState.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStatesResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.client_states, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.client.v1.IdentifiedClientState.deserialize(reader), dependency_2.ibc.core.client.v1.IdentifiedClientState);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
              return QueryClientStatesResponse.deserialize(bytes);
            }
          }]);
          return QueryClientStatesResponse;
        }(pb_1.Message);

        _v.QueryClientStatesResponse = QueryClientStatesResponse;

        var QueryConsensusStateRequest = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(QueryConsensusStateRequest, _pb_1$Message5);

          var _super5 = _createSuper(QueryConsensusStateRequest);

          function QueryConsensusStateRequest(data) {
            var _this8;

            (0, _classCallCheck2["default"])(this, QueryConsensusStateRequest);
            _this8 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this8.client_id = data.client_id;
              }

              if ("revision_number" in data && data.revision_number != undefined) {
                _this8.revision_number = data.revision_number;
              }

              if ("revision_height" in data && data.revision_height != undefined) {
                _this8.revision_height = data.revision_height;
              }

              if ("latest_height" in data && data.latest_height != undefined) {
                _this8.latest_height = data.latest_height;
              }
            }

            return _this8;
          }

          (0, _createClass2["default"])(QueryConsensusStateRequest, [{
            key: "client_id",
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
            key: "latest_height",
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.revision_number != null) {
                data.revision_number = this.revision_number;
              }

              if (this.revision_height != null) {
                data.revision_height = this.revision_height;
              }

              if (this.latest_height != null) {
                data.latest_height = this.latest_height;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.revision_number !== undefined) writer.writeUint64(2, this.revision_number);
              if (this.revision_height !== undefined) writer.writeUint64(3, this.revision_height);
              if (this.latest_height !== undefined) writer.writeBool(4, this.latest_height);
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
              var message = new QueryConsensusStateRequest({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.revision_number != null) {
                message.revision_number = data.revision_number;
              }

              if (data.revision_height != null) {
                message.revision_height = data.revision_height;
              }

              if (data.latest_height != null) {
                message.latest_height = data.latest_height;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConsensusStateRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    message.revision_number = reader.readUint64();
                    break;

                  case 3:
                    message.revision_height = reader.readUint64();
                    break;

                  case 4:
                    message.latest_height = reader.readBool();
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
              return QueryConsensusStateRequest.deserialize(bytes);
            }
          }]);
          return QueryConsensusStateRequest;
        }(pb_1.Message);

        _v.QueryConsensusStateRequest = QueryConsensusStateRequest;

        var QueryConsensusStateResponse = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(QueryConsensusStateResponse, _pb_1$Message6);

          var _super6 = _createSuper(QueryConsensusStateResponse);

          function QueryConsensusStateResponse(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, QueryConsensusStateResponse);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this9.consensus_state = data.consensus_state;
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

          (0, _createClass2["default"])(QueryConsensusStateResponse, [{
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
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
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 3);
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

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
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
              if (this.consensus_state !== undefined) writer.writeMessage(1, this.consensus_state, function () {
                return _this10.consensus_state.serialize(writer);
              });
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
              var message = new QueryConsensusStateResponse({});

              if (data.consensus_state != null) {
                message.consensus_state = dependency_3.google.protobuf.Any.fromObject(data.consensus_state);
              }

              if (data.proof != null) {
                message.proof = data.proof;
              }

              if (data.proof_height != null) {
                message.proof_height = dependency_2.ibc.core.client.v1.Height.fromObject(data.proof_height);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConsensusStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_3.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    message.proof = reader.readBytes();
                    break;

                  case 3:
                    reader.readMessage(message.proof_height, function () {
                      return message.proof_height = dependency_2.ibc.core.client.v1.Height.deserialize(reader);
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
              return QueryConsensusStateResponse.deserialize(bytes);
            }
          }]);
          return QueryConsensusStateResponse;
        }(pb_1.Message);

        _v.QueryConsensusStateResponse = QueryConsensusStateResponse;

        var QueryConsensusStatesRequest = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(QueryConsensusStatesRequest, _pb_1$Message7);

          var _super7 = _createSuper(QueryConsensusStatesRequest);

          function QueryConsensusStatesRequest(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, QueryConsensusStatesRequest);
            _this11 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this11.client_id = data.client_id;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this11.pagination = data.pagination;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(QueryConsensusStatesRequest, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this12 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this12.pagination.serialize(writer);
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
              var message = new QueryConsensusStatesRequest({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConsensusStatesRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
              return QueryConsensusStatesRequest.deserialize(bytes);
            }
          }]);
          return QueryConsensusStatesRequest;
        }(pb_1.Message);

        _v.QueryConsensusStatesRequest = QueryConsensusStatesRequest;

        var QueryConsensusStatesResponse = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(QueryConsensusStatesResponse, _pb_1$Message8);

          var _super8 = _createSuper(QueryConsensusStatesResponse);

          function QueryConsensusStatesResponse(data) {
            var _this13;

            (0, _classCallCheck2["default"])(this, QueryConsensusStatesResponse);
            _this13 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("consensus_states" in data && data.consensus_states != undefined) {
                _this13.consensus_states = data.consensus_states;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this13.pagination = data.pagination;
              }
            }

            return _this13;
          }

          (0, _createClass2["default"])(QueryConsensusStatesResponse, [{
            key: "consensus_states",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.client.v1.ConsensusStateWithHeight, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.consensus_states != null) {
                data.consensus_states = this.consensus_states.map(function (item) {
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
              var _this14 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.consensus_states !== undefined) writer.writeRepeatedMessage(1, this.consensus_states, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
                return _this14.pagination.serialize(writer);
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
              var message = new QueryConsensusStatesResponse({});

              if (data.consensus_states != null) {
                message.consensus_states = data.consensus_states.map(function (item) {
                  return dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryConsensusStatesResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.consensus_states, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.client.v1.ConsensusStateWithHeight.deserialize(reader), dependency_2.ibc.core.client.v1.ConsensusStateWithHeight);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
              return QueryConsensusStatesResponse.deserialize(bytes);
            }
          }]);
          return QueryConsensusStatesResponse;
        }(pb_1.Message);

        _v.QueryConsensusStatesResponse = QueryConsensusStatesResponse;

        var QueryClientStatusRequest = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(QueryClientStatusRequest, _pb_1$Message9);

          var _super9 = _createSuper(QueryClientStatusRequest);

          function QueryClientStatusRequest(data) {
            var _this15;

            (0, _classCallCheck2["default"])(this, QueryClientStatusRequest);
            _this15 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this15.client_id = data.client_id;
              }
            }

            return _this15;
          }

          (0, _createClass2["default"])(QueryClientStatusRequest, [{
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
              var message = new QueryClientStatusRequest({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStatusRequest();

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
              return QueryClientStatusRequest.deserialize(bytes);
            }
          }]);
          return QueryClientStatusRequest;
        }(pb_1.Message);

        _v.QueryClientStatusRequest = QueryClientStatusRequest;

        var QueryClientStatusResponse = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(QueryClientStatusResponse, _pb_1$Message10);

          var _super10 = _createSuper(QueryClientStatusResponse);

          function QueryClientStatusResponse(data) {
            var _this16;

            (0, _classCallCheck2["default"])(this, QueryClientStatusResponse);
            _this16 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("status" in data && data.status != undefined) {
                _this16.status = data.status;
              }
            }

            return _this16;
          }

          (0, _createClass2["default"])(QueryClientStatusResponse, [{
            key: "status",
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

              if (this.status != null) {
                data.status = this.status;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.status === "string" && this.status.length) writer.writeString(1, this.status);
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
              var message = new QueryClientStatusResponse({});

              if (data.status != null) {
                message.status = data.status;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientStatusResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.status = reader.readString();
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
              return QueryClientStatusResponse.deserialize(bytes);
            }
          }]);
          return QueryClientStatusResponse;
        }(pb_1.Message);

        _v.QueryClientStatusResponse = QueryClientStatusResponse;

        var QueryClientParamsRequest = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(QueryClientParamsRequest, _pb_1$Message11);

          var _super11 = _createSuper(QueryClientParamsRequest);

          function QueryClientParamsRequest(data) {
            var _this17;

            (0, _classCallCheck2["default"])(this, QueryClientParamsRequest);
            _this17 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this17;
          }

          (0, _createClass2["default"])(QueryClientParamsRequest, [{
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
              var message = new QueryClientParamsRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientParamsRequest();

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
              return QueryClientParamsRequest.deserialize(bytes);
            }
          }]);
          return QueryClientParamsRequest;
        }(pb_1.Message);

        _v.QueryClientParamsRequest = QueryClientParamsRequest;

        var QueryClientParamsResponse = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(QueryClientParamsResponse, _pb_1$Message12);

          var _super12 = _createSuper(QueryClientParamsResponse);

          function QueryClientParamsResponse(data) {
            var _this18;

            (0, _classCallCheck2["default"])(this, QueryClientParamsResponse);
            _this18 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("params" in data && data.params != undefined) {
                _this18.params = data.params;
              }
            }

            return _this18;
          }

          (0, _createClass2["default"])(QueryClientParamsResponse, [{
            key: "params",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Params, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
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

              if (this.params != null) {
                data.params = this.params.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this19 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
                return _this19.params.serialize(writer);
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
              var message = new QueryClientParamsResponse({});

              if (data.params != null) {
                message.params = dependency_2.ibc.core.client.v1.Params.fromObject(data.params);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryClientParamsResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.params, function () {
                      return message.params = dependency_2.ibc.core.client.v1.Params.deserialize(reader);
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
              return QueryClientParamsResponse.deserialize(bytes);
            }
          }]);
          return QueryClientParamsResponse;
        }(pb_1.Message);

        _v.QueryClientParamsResponse = QueryClientParamsResponse;

        var QueryUpgradedClientStateRequest = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(QueryUpgradedClientStateRequest, _pb_1$Message13);

          var _super13 = _createSuper(QueryUpgradedClientStateRequest);

          function QueryUpgradedClientStateRequest(data) {
            var _this20;

            (0, _classCallCheck2["default"])(this, QueryUpgradedClientStateRequest);
            _this20 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this20;
          }

          (0, _createClass2["default"])(QueryUpgradedClientStateRequest, [{
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
              var message = new QueryUpgradedClientStateRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUpgradedClientStateRequest();

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
              return QueryUpgradedClientStateRequest.deserialize(bytes);
            }
          }]);
          return QueryUpgradedClientStateRequest;
        }(pb_1.Message);

        _v.QueryUpgradedClientStateRequest = QueryUpgradedClientStateRequest;

        var QueryUpgradedClientStateResponse = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(QueryUpgradedClientStateResponse, _pb_1$Message14);

          var _super14 = _createSuper(QueryUpgradedClientStateResponse);

          function QueryUpgradedClientStateResponse(data) {
            var _this21;

            (0, _classCallCheck2["default"])(this, QueryUpgradedClientStateResponse);
            _this21 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
                _this21.upgraded_client_state = data.upgraded_client_state;
              }
            }

            return _this21;
          }

          (0, _createClass2["default"])(QueryUpgradedClientStateResponse, [{
            key: "upgraded_client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
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

              if (this.upgraded_client_state != null) {
                data.upgraded_client_state = this.upgraded_client_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this22 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.upgraded_client_state !== undefined) writer.writeMessage(1, this.upgraded_client_state, function () {
                return _this22.upgraded_client_state.serialize(writer);
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
              var message = new QueryUpgradedClientStateResponse({});

              if (data.upgraded_client_state != null) {
                message.upgraded_client_state = dependency_3.google.protobuf.Any.fromObject(data.upgraded_client_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUpgradedClientStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.upgraded_client_state, function () {
                      return message.upgraded_client_state = dependency_3.google.protobuf.Any.deserialize(reader);
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
              return QueryUpgradedClientStateResponse.deserialize(bytes);
            }
          }]);
          return QueryUpgradedClientStateResponse;
        }(pb_1.Message);

        _v.QueryUpgradedClientStateResponse = QueryUpgradedClientStateResponse;

        var QueryUpgradedConsensusStateRequest = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(QueryUpgradedConsensusStateRequest, _pb_1$Message15);

          var _super15 = _createSuper(QueryUpgradedConsensusStateRequest);

          function QueryUpgradedConsensusStateRequest(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, QueryUpgradedConsensusStateRequest);
            _this23 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this23;
          }

          (0, _createClass2["default"])(QueryUpgradedConsensusStateRequest, [{
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
              var message = new QueryUpgradedConsensusStateRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUpgradedConsensusStateRequest();

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
              return QueryUpgradedConsensusStateRequest.deserialize(bytes);
            }
          }]);
          return QueryUpgradedConsensusStateRequest;
        }(pb_1.Message);

        _v.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;

        var QueryUpgradedConsensusStateResponse = /*#__PURE__*/function (_pb_1$Message16) {
          (0, _inherits2["default"])(QueryUpgradedConsensusStateResponse, _pb_1$Message16);

          var _super16 = _createSuper(QueryUpgradedConsensusStateResponse);

          function QueryUpgradedConsensusStateResponse(data) {
            var _this24;

            (0, _classCallCheck2["default"])(this, QueryUpgradedConsensusStateResponse);
            _this24 = _super16.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("upgraded_consensus_state" in data && data.upgraded_consensus_state != undefined) {
                _this24.upgraded_consensus_state = data.upgraded_consensus_state;
              }
            }

            return _this24;
          }

          (0, _createClass2["default"])(QueryUpgradedConsensusStateResponse, [{
            key: "upgraded_consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
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

              if (this.upgraded_consensus_state != null) {
                data.upgraded_consensus_state = this.upgraded_consensus_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this25 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.upgraded_consensus_state !== undefined) writer.writeMessage(1, this.upgraded_consensus_state, function () {
                return _this25.upgraded_consensus_state.serialize(writer);
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
              var message = new QueryUpgradedConsensusStateResponse({});

              if (data.upgraded_consensus_state != null) {
                message.upgraded_consensus_state = dependency_3.google.protobuf.Any.fromObject(data.upgraded_consensus_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new QueryUpgradedConsensusStateResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.upgraded_consensus_state, function () {
                      return message.upgraded_consensus_state = dependency_3.google.protobuf.Any.deserialize(reader);
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
              return QueryUpgradedConsensusStateResponse.deserialize(bytes);
            }
          }]);
          return QueryUpgradedConsensusStateResponse;
        }(pb_1.Message);

        _v.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;
      })(v1 || (v1 = _client.v1 || (_client.v1 = {})));
    })(client || (client = _core.client || (_core.client = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));