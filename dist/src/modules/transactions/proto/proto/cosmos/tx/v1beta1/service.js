"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../base/abci/v1beta1/abci"));

var dependency_3 = _interopRequireWildcard(require("./tx"));

var dependency_5 = _interopRequireWildcard(require("./../../base/query/v1beta1/pagination"));

var dependency_6 = _interopRequireWildcard(require("./../../../tendermint/types/block"));

var dependency_7 = _interopRequireWildcard(require("./../../../tendermint/types/types"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var tx;

  (function (_tx) {
    var v1beta1;

    (function (_v1beta) {
      var OrderBy;

      (function (OrderBy) {
        OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
        OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
        OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
      })(OrderBy || (OrderBy = {}));

      _v1beta.OrderBy = OrderBy;
      var BroadcastMode;

      (function (BroadcastMode) {
        BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
        BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
        BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
        BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
      })(BroadcastMode || (BroadcastMode = {}));

      _v1beta.BroadcastMode = BroadcastMode;

      var GetTxsEventRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GetTxsEventRequest, _pb_1$Message);

        var _super = _createSuper(GetTxsEventRequest);

        function GetTxsEventRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GetTxsEventRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("events" in data && data.events != undefined) {
              _this.events = data.events;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }

            if ("order_by" in data && data.order_by != undefined) {
              _this.order_by = data.order_by;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GetTxsEventRequest, [{
          key: "events",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.query.v1beta1.PageRequest, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "order_by",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
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

            if (this.events != null) {
              data.events = this.events;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            if (this.order_by != null) {
              data.order_by = this.order_by;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.events !== undefined) writer.writeRepeatedString(1, this.events);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this2.pagination.serialize(writer);
            });
            if (this.order_by !== undefined) writer.writeEnum(3, this.order_by);
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
            var message = new GetTxsEventRequest({});

            if (data.events != null) {
              message.events = data.events;
            }

            if (data.pagination != null) {
              message.pagination = dependency_5.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            if (data.order_by != null) {
              message.order_by = data.order_by;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetTxsEventRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_5.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
                  });
                  break;

                case 3:
                  message.order_by = reader.readEnum();
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
            return GetTxsEventRequest.deserialize(bytes);
          }
        }]);
        return GetTxsEventRequest;
      }(pb_1.Message);

      _v1beta.GetTxsEventRequest = GetTxsEventRequest;

      var GetTxsEventResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(GetTxsEventResponse, _pb_1$Message2);

        var _super2 = _createSuper(GetTxsEventResponse);

        function GetTxsEventResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, GetTxsEventResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1, 2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("txs" in data && data.txs != undefined) {
              _this3.txs = data.txs;
            }

            if ("tx_responses" in data && data.tx_responses != undefined) {
              _this3.tx_responses = data.tx_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(GetTxsEventResponse, [{
          key: "txs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.tx.v1beta1.Tx, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "tx_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.abci.v1beta1.TxResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.query.v1beta1.PageResponse, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.txs != null) {
              data.txs = this.txs.map(function (item) {
                return item.toObject();
              });
            }

            if (this.tx_responses != null) {
              data.tx_responses = this.tx_responses.map(function (item) {
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
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.txs !== undefined) writer.writeRepeatedMessage(1, this.txs, function (item) {
              return item.serialize(writer);
            });
            if (this.tx_responses !== undefined) writer.writeRepeatedMessage(2, this.tx_responses, function (item) {
              return item.serialize(writer);
            });
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
            var message = new GetTxsEventResponse({});

            if (data.txs != null) {
              message.txs = data.txs.map(function (item) {
                return dependency_3.cosmos.tx.v1beta1.Tx.fromObject(item);
              });
            }

            if (data.tx_responses != null) {
              message.tx_responses = data.tx_responses.map(function (item) {
                return dependency_2.cosmos.base.abci.v1beta1.TxResponse.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_5.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetTxsEventResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.txs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.tx.v1beta1.Tx.deserialize(reader), dependency_3.cosmos.tx.v1beta1.Tx);
                  });
                  break;

                case 2:
                  reader.readMessage(message.tx_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.abci.v1beta1.TxResponse.deserialize(reader), dependency_2.cosmos.base.abci.v1beta1.TxResponse);
                  });
                  break;

                case 3:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_5.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return GetTxsEventResponse.deserialize(bytes);
          }
        }]);
        return GetTxsEventResponse;
      }(pb_1.Message);

      _v1beta.GetTxsEventResponse = GetTxsEventResponse;

      var BroadcastTxRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(BroadcastTxRequest, _pb_1$Message3);

        var _super3 = _createSuper(BroadcastTxRequest);

        function BroadcastTxRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, BroadcastTxRequest);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tx_bytes" in data && data.tx_bytes != undefined) {
              _this5.tx_bytes = data.tx_bytes;
            }

            if ("mode" in data && data.mode != undefined) {
              _this5.mode = data.mode;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(BroadcastTxRequest, [{
          key: "tx_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "mode",
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

            if (this.tx_bytes != null) {
              data.tx_bytes = this.tx_bytes;
            }

            if (this.mode != null) {
              data.mode = this.mode;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.tx_bytes !== undefined) writer.writeBytes(1, this.tx_bytes);
            if (this.mode !== undefined) writer.writeEnum(2, this.mode);
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
            var message = new BroadcastTxRequest({});

            if (data.tx_bytes != null) {
              message.tx_bytes = data.tx_bytes;
            }

            if (data.mode != null) {
              message.mode = data.mode;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new BroadcastTxRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.tx_bytes = reader.readBytes();
                  break;

                case 2:
                  message.mode = reader.readEnum();
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
            return BroadcastTxRequest.deserialize(bytes);
          }
        }]);
        return BroadcastTxRequest;
      }(pb_1.Message);

      _v1beta.BroadcastTxRequest = BroadcastTxRequest;

      var BroadcastTxResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(BroadcastTxResponse, _pb_1$Message4);

        var _super4 = _createSuper(BroadcastTxResponse);

        function BroadcastTxResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, BroadcastTxResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tx_response" in data && data.tx_response != undefined) {
              _this6.tx_response = data.tx_response;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(BroadcastTxResponse, [{
          key: "tx_response",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.abci.v1beta1.TxResponse, 1);
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

            if (this.tx_response != null) {
              data.tx_response = this.tx_response.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.tx_response !== undefined) writer.writeMessage(1, this.tx_response, function () {
              return _this7.tx_response.serialize(writer);
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
            var message = new BroadcastTxResponse({});

            if (data.tx_response != null) {
              message.tx_response = dependency_2.cosmos.base.abci.v1beta1.TxResponse.fromObject(data.tx_response);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new BroadcastTxResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.tx_response, function () {
                    return message.tx_response = dependency_2.cosmos.base.abci.v1beta1.TxResponse.deserialize(reader);
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
            return BroadcastTxResponse.deserialize(bytes);
          }
        }]);
        return BroadcastTxResponse;
      }(pb_1.Message);

      _v1beta.BroadcastTxResponse = BroadcastTxResponse;

      var SimulateRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(SimulateRequest, _pb_1$Message5);

        var _super5 = _createSuper(SimulateRequest);

        function SimulateRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, SimulateRequest);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tx" in data && data.tx != undefined) {
              _this8.tx = data.tx;
            }

            if ("tx_bytes" in data && data.tx_bytes != undefined) {
              _this8.tx_bytes = data.tx_bytes;
            }
          }

          return _this8;
        }
        /** @deprecated*/


        (0, _createClass2["default"])(SimulateRequest, [{
          key: "tx",
          get:
          /** @deprecated*/
          function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.tx.v1beta1.Tx, 1);
          }
          /** @deprecated*/
          ,
          set:
          /** @deprecated*/
          function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "tx_bytes",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
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

            if (this.tx != null) {
              data.tx = this.tx.toObject();
            }

            if (this.tx_bytes != null) {
              data.tx_bytes = this.tx_bytes;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this9 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.tx !== undefined) writer.writeMessage(1, this.tx, function () {
              return _this9.tx.serialize(writer);
            });
            if (this.tx_bytes !== undefined) writer.writeBytes(2, this.tx_bytes);
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
            var message = new SimulateRequest({});

            if (data.tx != null) {
              message.tx = dependency_3.cosmos.tx.v1beta1.Tx.fromObject(data.tx);
            }

            if (data.tx_bytes != null) {
              message.tx_bytes = data.tx_bytes;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SimulateRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.tx, function () {
                    return message.tx = dependency_3.cosmos.tx.v1beta1.Tx.deserialize(reader);
                  });
                  break;

                case 2:
                  message.tx_bytes = reader.readBytes();
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
            return SimulateRequest.deserialize(bytes);
          }
        }]);
        return SimulateRequest;
      }(pb_1.Message);

      _v1beta.SimulateRequest = SimulateRequest;

      var SimulateResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(SimulateResponse, _pb_1$Message6);

        var _super6 = _createSuper(SimulateResponse);

        function SimulateResponse(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, SimulateResponse);
          _this10 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("gas_info" in data && data.gas_info != undefined) {
              _this10.gas_info = data.gas_info;
            }

            if ("result" in data && data.result != undefined) {
              _this10.result = data.result;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(SimulateResponse, [{
          key: "gas_info",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.abci.v1beta1.GasInfo, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "result",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.abci.v1beta1.Result, 2);
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

            if (this.gas_info != null) {
              data.gas_info = this.gas_info.toObject();
            }

            if (this.result != null) {
              data.result = this.result.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.gas_info !== undefined) writer.writeMessage(1, this.gas_info, function () {
              return _this11.gas_info.serialize(writer);
            });
            if (this.result !== undefined) writer.writeMessage(2, this.result, function () {
              return _this11.result.serialize(writer);
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
            var message = new SimulateResponse({});

            if (data.gas_info != null) {
              message.gas_info = dependency_2.cosmos.base.abci.v1beta1.GasInfo.fromObject(data.gas_info);
            }

            if (data.result != null) {
              message.result = dependency_2.cosmos.base.abci.v1beta1.Result.fromObject(data.result);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SimulateResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.gas_info, function () {
                    return message.gas_info = dependency_2.cosmos.base.abci.v1beta1.GasInfo.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.result, function () {
                    return message.result = dependency_2.cosmos.base.abci.v1beta1.Result.deserialize(reader);
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
            return SimulateResponse.deserialize(bytes);
          }
        }]);
        return SimulateResponse;
      }(pb_1.Message);

      _v1beta.SimulateResponse = SimulateResponse;

      var GetTxRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(GetTxRequest, _pb_1$Message7);

        var _super7 = _createSuper(GetTxRequest);

        function GetTxRequest(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, GetTxRequest);
          _this12 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hash" in data && data.hash != undefined) {
              _this12.hash = data.hash;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(GetTxRequest, [{
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
            var message = new GetTxRequest({});

            if (data.hash != null) {
              message.hash = data.hash;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetTxRequest();

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
            return GetTxRequest.deserialize(bytes);
          }
        }]);
        return GetTxRequest;
      }(pb_1.Message);

      _v1beta.GetTxRequest = GetTxRequest;

      var GetTxResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(GetTxResponse, _pb_1$Message8);

        var _super8 = _createSuper(GetTxResponse);

        function GetTxResponse(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, GetTxResponse);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tx" in data && data.tx != undefined) {
              _this13.tx = data.tx;
            }

            if ("tx_response" in data && data.tx_response != undefined) {
              _this13.tx_response = data.tx_response;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(GetTxResponse, [{
          key: "tx",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.tx.v1beta1.Tx, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "tx_response",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.abci.v1beta1.TxResponse, 2);
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

            if (this.tx != null) {
              data.tx = this.tx.toObject();
            }

            if (this.tx_response != null) {
              data.tx_response = this.tx_response.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this14 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.tx !== undefined) writer.writeMessage(1, this.tx, function () {
              return _this14.tx.serialize(writer);
            });
            if (this.tx_response !== undefined) writer.writeMessage(2, this.tx_response, function () {
              return _this14.tx_response.serialize(writer);
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
            var message = new GetTxResponse({});

            if (data.tx != null) {
              message.tx = dependency_3.cosmos.tx.v1beta1.Tx.fromObject(data.tx);
            }

            if (data.tx_response != null) {
              message.tx_response = dependency_2.cosmos.base.abci.v1beta1.TxResponse.fromObject(data.tx_response);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetTxResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.tx, function () {
                    return message.tx = dependency_3.cosmos.tx.v1beta1.Tx.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.tx_response, function () {
                    return message.tx_response = dependency_2.cosmos.base.abci.v1beta1.TxResponse.deserialize(reader);
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
            return GetTxResponse.deserialize(bytes);
          }
        }]);
        return GetTxResponse;
      }(pb_1.Message);

      _v1beta.GetTxResponse = GetTxResponse;

      var GetBlockWithTxsRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(GetBlockWithTxsRequest, _pb_1$Message9);

        var _super9 = _createSuper(GetBlockWithTxsRequest);

        function GetBlockWithTxsRequest(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, GetBlockWithTxsRequest);
          _this15 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("height" in data && data.height != undefined) {
              _this15.height = data.height;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this15.pagination = data.pagination;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(GetBlockWithTxsRequest, [{
          key: "height",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.query.v1beta1.PageRequest, 2);
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

            if (this.height != null) {
              data.height = this.height;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this16 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined) writer.writeInt64(1, this.height);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this16.pagination.serialize(writer);
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
            var message = new GetBlockWithTxsRequest({});

            if (data.height != null) {
              message.height = data.height;
            }

            if (data.pagination != null) {
              message.pagination = dependency_5.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetBlockWithTxsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.height = reader.readInt64();
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_5.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
            return GetBlockWithTxsRequest.deserialize(bytes);
          }
        }]);
        return GetBlockWithTxsRequest;
      }(pb_1.Message);

      _v1beta.GetBlockWithTxsRequest = GetBlockWithTxsRequest;

      var GetBlockWithTxsResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(GetBlockWithTxsResponse, _pb_1$Message10);

        var _super10 = _createSuper(GetBlockWithTxsResponse);

        function GetBlockWithTxsResponse(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, GetBlockWithTxsResponse);
          _this17 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("txs" in data && data.txs != undefined) {
              _this17.txs = data.txs;
            }

            if ("block_id" in data && data.block_id != undefined) {
              _this17.block_id = data.block_id;
            }

            if ("block" in data && data.block != undefined) {
              _this17.block = data.block;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this17.pagination = data.pagination;
            }
          }

          return _this17;
        }

        (0, _createClass2["default"])(GetBlockWithTxsResponse, [{
          key: "txs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.tx.v1beta1.Tx, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "block_id",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_7.tendermint.types.BlockID, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "block",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.tendermint.types.Block, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.base.query.v1beta1.PageResponse, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.txs != null) {
              data.txs = this.txs.map(function (item) {
                return item.toObject();
              });
            }

            if (this.block_id != null) {
              data.block_id = this.block_id.toObject();
            }

            if (this.block != null) {
              data.block = this.block.toObject();
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this18 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.txs !== undefined) writer.writeRepeatedMessage(1, this.txs, function (item) {
              return item.serialize(writer);
            });
            if (this.block_id !== undefined) writer.writeMessage(2, this.block_id, function () {
              return _this18.block_id.serialize(writer);
            });
            if (this.block !== undefined) writer.writeMessage(3, this.block, function () {
              return _this18.block.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(4, this.pagination, function () {
              return _this18.pagination.serialize(writer);
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
            var message = new GetBlockWithTxsResponse({});

            if (data.txs != null) {
              message.txs = data.txs.map(function (item) {
                return dependency_3.cosmos.tx.v1beta1.Tx.fromObject(item);
              });
            }

            if (data.block_id != null) {
              message.block_id = dependency_7.tendermint.types.BlockID.fromObject(data.block_id);
            }

            if (data.block != null) {
              message.block = dependency_6.tendermint.types.Block.fromObject(data.block);
            }

            if (data.pagination != null) {
              message.pagination = dependency_5.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GetBlockWithTxsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.txs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.tx.v1beta1.Tx.deserialize(reader), dependency_3.cosmos.tx.v1beta1.Tx);
                  });
                  break;

                case 2:
                  reader.readMessage(message.block_id, function () {
                    return message.block_id = dependency_7.tendermint.types.BlockID.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.block, function () {
                    return message.block = dependency_6.tendermint.types.Block.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_5.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return GetBlockWithTxsResponse.deserialize(bytes);
          }
        }]);
        return GetBlockWithTxsResponse;
      }(pb_1.Message);

      _v1beta.GetBlockWithTxsResponse = GetBlockWithTxsResponse;
    })(v1beta1 || (v1beta1 = _tx.v1beta1 || (_tx.v1beta1 = {})));
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
})(cosmos || (exports.cosmos = cosmos = {}));