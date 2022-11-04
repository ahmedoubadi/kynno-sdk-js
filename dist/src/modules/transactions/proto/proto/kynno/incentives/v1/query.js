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

var dependency_1 = _interopRequireWildcard(require("./../../../cosmos/base/query/v1beta1/pagination"));

var dependency_2 = _interopRequireWildcard(require("./../../../cosmos/base/v1beta1/coin"));

var dependency_3 = _interopRequireWildcard(require("./genesis"));

var dependency_4 = _interopRequireWildcard(require("./incentives"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var incentives;

  (function (_incentives) {
    var v1;

    (function (_v) {
      var QueryIncentivesRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryIncentivesRequest, _pb_1$Message);

        var _super = _createSuper(QueryIncentivesRequest);

        function QueryIncentivesRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryIncentivesRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryIncentivesRequest, [{
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
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

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
              return _this2.pagination.serialize(writer);
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
            var message = new QueryIncentivesRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryIncentivesRequest();

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
            return QueryIncentivesRequest.deserialize(bytes);
          }
        }]);
        return QueryIncentivesRequest;
      }(pb_1.Message);

      _v.QueryIncentivesRequest = QueryIncentivesRequest;

      var QueryIncentivesResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryIncentivesResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryIncentivesResponse);

        function QueryIncentivesResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryIncentivesResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("incentives" in data && data.incentives != undefined) {
              _this3.incentives = data.incentives;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryIncentivesResponse, [{
          key: "incentives",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.kynno.incentives.v1.Incentive, 1);
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

            if (this.incentives != null) {
              data.incentives = this.incentives.map(function (item) {
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
            if (this.incentives !== undefined) writer.writeRepeatedMessage(1, this.incentives, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
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
            var message = new QueryIncentivesResponse({});

            if (data.incentives != null) {
              message.incentives = data.incentives.map(function (item) {
                return dependency_4.kynno.incentives.v1.Incentive.fromObject(item);
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
                message = new QueryIncentivesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.incentives, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.kynno.incentives.v1.Incentive.deserialize(reader), dependency_4.kynno.incentives.v1.Incentive);
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
            return QueryIncentivesResponse.deserialize(bytes);
          }
        }]);
        return QueryIncentivesResponse;
      }(pb_1.Message);

      _v.QueryIncentivesResponse = QueryIncentivesResponse;

      var QueryIncentiveRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryIncentiveRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryIncentiveRequest);

        function QueryIncentiveRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryIncentiveRequest);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract" in data && data.contract != undefined) {
              _this5.contract = data.contract;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryIncentiveRequest, [{
          key: "contract",
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

            if (this.contract != null) {
              data.contract = this.contract;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(1, this.contract);
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
            var message = new QueryIncentiveRequest({});

            if (data.contract != null) {
              message.contract = data.contract;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryIncentiveRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract = reader.readString();
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
            return QueryIncentiveRequest.deserialize(bytes);
          }
        }]);
        return QueryIncentiveRequest;
      }(pb_1.Message);

      _v.QueryIncentiveRequest = QueryIncentiveRequest;

      var QueryIncentiveResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryIncentiveResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryIncentiveResponse);

        function QueryIncentiveResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryIncentiveResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("incentive" in data && data.incentive != undefined) {
              _this6.incentive = data.incentive;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryIncentiveResponse, [{
          key: "incentive",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.kynno.incentives.v1.Incentive, 1);
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

            if (this.incentive != null) {
              data.incentive = this.incentive.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.incentive !== undefined) writer.writeMessage(1, this.incentive, function () {
              return _this7.incentive.serialize(writer);
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
            var message = new QueryIncentiveResponse({});

            if (data.incentive != null) {
              message.incentive = dependency_4.kynno.incentives.v1.Incentive.fromObject(data.incentive);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryIncentiveResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.incentive, function () {
                    return message.incentive = dependency_4.kynno.incentives.v1.Incentive.deserialize(reader);
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
            return QueryIncentiveResponse.deserialize(bytes);
          }
        }]);
        return QueryIncentiveResponse;
      }(pb_1.Message);

      _v.QueryIncentiveResponse = QueryIncentiveResponse;

      var QueryGasMetersRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryGasMetersRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryGasMetersRequest);

        function QueryGasMetersRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryGasMetersRequest);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract" in data && data.contract != undefined) {
              _this8.contract = data.contract;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this8.pagination = data.pagination;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryGasMetersRequest, [{
          key: "contract",
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

            if (this.contract != null) {
              data.contract = this.contract;
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
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(1, this.contract);
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
            var message = new QueryGasMetersRequest({});

            if (data.contract != null) {
              message.contract = data.contract;
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
                message = new QueryGasMetersRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract = reader.readString();
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
            return QueryGasMetersRequest.deserialize(bytes);
          }
        }]);
        return QueryGasMetersRequest;
      }(pb_1.Message);

      _v.QueryGasMetersRequest = QueryGasMetersRequest;

      var QueryGasMetersResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryGasMetersResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryGasMetersResponse);

        function QueryGasMetersResponse(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, QueryGasMetersResponse);
          _this10 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("gas_meters" in data && data.gas_meters != undefined) {
              _this10.gas_meters = data.gas_meters;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this10.pagination = data.pagination;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(QueryGasMetersResponse, [{
          key: "gas_meters",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.kynno.incentives.v1.GasMeter, 1);
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

            if (this.gas_meters != null) {
              data.gas_meters = this.gas_meters.map(function (item) {
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
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.gas_meters !== undefined) writer.writeRepeatedMessage(1, this.gas_meters, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this11.pagination.serialize(writer);
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
            var message = new QueryGasMetersResponse({});

            if (data.gas_meters != null) {
              message.gas_meters = data.gas_meters.map(function (item) {
                return dependency_4.kynno.incentives.v1.GasMeter.fromObject(item);
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
                message = new QueryGasMetersResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.gas_meters, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.kynno.incentives.v1.GasMeter.deserialize(reader), dependency_4.kynno.incentives.v1.GasMeter);
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
            return QueryGasMetersResponse.deserialize(bytes);
          }
        }]);
        return QueryGasMetersResponse;
      }(pb_1.Message);

      _v.QueryGasMetersResponse = QueryGasMetersResponse;

      var QueryGasMeterRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryGasMeterRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryGasMeterRequest);

        function QueryGasMeterRequest(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryGasMeterRequest);
          _this12 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract" in data && data.contract != undefined) {
              _this12.contract = data.contract;
            }

            if ("participant" in data && data.participant != undefined) {
              _this12.participant = data.participant;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryGasMeterRequest, [{
          key: "contract",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "participant",
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

            if (this.contract != null) {
              data.contract = this.contract;
            }

            if (this.participant != null) {
              data.participant = this.participant;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(1, this.contract);
            if (typeof this.participant === "string" && this.participant.length) writer.writeString(2, this.participant);
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
            var message = new QueryGasMeterRequest({});

            if (data.contract != null) {
              message.contract = data.contract;
            }

            if (data.participant != null) {
              message.participant = data.participant;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryGasMeterRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract = reader.readString();
                  break;

                case 2:
                  message.participant = reader.readString();
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
            return QueryGasMeterRequest.deserialize(bytes);
          }
        }]);
        return QueryGasMeterRequest;
      }(pb_1.Message);

      _v.QueryGasMeterRequest = QueryGasMeterRequest;

      var QueryGasMeterResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryGasMeterResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryGasMeterResponse);

        function QueryGasMeterResponse(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryGasMeterResponse);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("gas_meter" in data && data.gas_meter != undefined) {
              _this13.gas_meter = data.gas_meter;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(QueryGasMeterResponse, [{
          key: "gas_meter",
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

            if (this.gas_meter != null) {
              data.gas_meter = this.gas_meter;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.gas_meter !== undefined) writer.writeUint64(1, this.gas_meter);
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
            var message = new QueryGasMeterResponse({});

            if (data.gas_meter != null) {
              message.gas_meter = data.gas_meter;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryGasMeterResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.gas_meter = reader.readUint64();
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
            return QueryGasMeterResponse.deserialize(bytes);
          }
        }]);
        return QueryGasMeterResponse;
      }(pb_1.Message);

      _v.QueryGasMeterResponse = QueryGasMeterResponse;

      var QueryAllocationMetersRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryAllocationMetersRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryAllocationMetersRequest);

        function QueryAllocationMetersRequest(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, QueryAllocationMetersRequest);
          _this14 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this14.pagination = data.pagination;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(QueryAllocationMetersRequest, [{
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
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
            var message = new QueryAllocationMetersRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAllocationMetersRequest();

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
            return QueryAllocationMetersRequest.deserialize(bytes);
          }
        }]);
        return QueryAllocationMetersRequest;
      }(pb_1.Message);

      _v.QueryAllocationMetersRequest = QueryAllocationMetersRequest;

      var QueryAllocationMetersResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryAllocationMetersResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryAllocationMetersResponse);

        function QueryAllocationMetersResponse(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, QueryAllocationMetersResponse);
          _this16 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("allocation_meters" in data && data.allocation_meters != undefined) {
              _this16.allocation_meters = data.allocation_meters;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this16.pagination = data.pagination;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(QueryAllocationMetersResponse, [{
          key: "allocation_meters",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
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

            if (this.allocation_meters != null) {
              data.allocation_meters = this.allocation_meters.map(function (item) {
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
            if (this.allocation_meters !== undefined) writer.writeRepeatedMessage(1, this.allocation_meters, function (item) {
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
            var message = new QueryAllocationMetersResponse({});

            if (data.allocation_meters != null) {
              message.allocation_meters = data.allocation_meters.map(function (item) {
                return dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(item);
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
                message = new QueryAllocationMetersResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.allocation_meters, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_2.cosmos.base.v1beta1.DecCoin);
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
            return QueryAllocationMetersResponse.deserialize(bytes);
          }
        }]);
        return QueryAllocationMetersResponse;
      }(pb_1.Message);

      _v.QueryAllocationMetersResponse = QueryAllocationMetersResponse;

      var QueryAllocationMeterRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryAllocationMeterRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryAllocationMeterRequest);

        function QueryAllocationMeterRequest(data) {
          var _this18;

          (0, _classCallCheck2["default"])(this, QueryAllocationMeterRequest);
          _this18 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this18.denom = data.denom;
            }
          }

          return _this18;
        }

        (0, _createClass2["default"])(QueryAllocationMeterRequest, [{
          key: "denom",
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

            if (this.denom != null) {
              data.denom = this.denom;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
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
            var message = new QueryAllocationMeterRequest({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAllocationMeterRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.denom = reader.readString();
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
            return QueryAllocationMeterRequest.deserialize(bytes);
          }
        }]);
        return QueryAllocationMeterRequest;
      }(pb_1.Message);

      _v.QueryAllocationMeterRequest = QueryAllocationMeterRequest;

      var QueryAllocationMeterResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryAllocationMeterResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryAllocationMeterResponse);

        function QueryAllocationMeterResponse(data) {
          var _this19;

          (0, _classCallCheck2["default"])(this, QueryAllocationMeterResponse);
          _this19 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("allocation_meter" in data && data.allocation_meter != undefined) {
              _this19.allocation_meter = data.allocation_meter;
            }
          }

          return _this19;
        }

        (0, _createClass2["default"])(QueryAllocationMeterResponse, [{
          key: "allocation_meter",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.v1beta1.DecCoin, 1);
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

            if (this.allocation_meter != null) {
              data.allocation_meter = this.allocation_meter.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this20 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.allocation_meter !== undefined) writer.writeMessage(1, this.allocation_meter, function () {
              return _this20.allocation_meter.serialize(writer);
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
            var message = new QueryAllocationMeterResponse({});

            if (data.allocation_meter != null) {
              message.allocation_meter = dependency_2.cosmos.base.v1beta1.DecCoin.fromObject(data.allocation_meter);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAllocationMeterResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.allocation_meter, function () {
                    return message.allocation_meter = dependency_2.cosmos.base.v1beta1.DecCoin.deserialize(reader);
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
            return QueryAllocationMeterResponse.deserialize(bytes);
          }
        }]);
        return QueryAllocationMeterResponse;
      }(pb_1.Message);

      _v.QueryAllocationMeterResponse = QueryAllocationMeterResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this21;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this21 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this21;
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

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this22;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this22 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this22.params = data.params;
            }
          }

          return _this22;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.kynno.incentives.v1.Params, 1);
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

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this23 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this23.params.serialize(writer);
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
              message.params = dependency_3.kynno.incentives.v1.Params.fromObject(data.params);
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
                    return message.params = dependency_3.kynno.incentives.v1.Params.deserialize(reader);
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

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Incentives: {
          path: "/kynno.incentives.v1.Query/Incentives",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryIncentivesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryIncentivesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Incentive: {
          path: "/kynno.incentives.v1.Query/Incentive",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryIncentiveRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryIncentiveResponse.deserialize(new Uint8Array(bytes));
          }
        },
        GasMeters: {
          path: "/kynno.incentives.v1.Query/GasMeters",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryGasMetersRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryGasMetersResponse.deserialize(new Uint8Array(bytes));
          }
        },
        GasMeter: {
          path: "/kynno.incentives.v1.Query/GasMeter",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryGasMeterRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryGasMeterResponse.deserialize(new Uint8Array(bytes));
          }
        },
        AllocationMeters: {
          path: "/kynno.incentives.v1.Query/AllocationMeters",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryAllocationMetersRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryAllocationMetersResponse.deserialize(new Uint8Array(bytes));
          }
        },
        AllocationMeter: {
          path: "/kynno.incentives.v1.Query/AllocationMeter",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryAllocationMeterRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryAllocationMeterResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/kynno.incentives.v1.Query/Params",
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
        }
      });
      _v.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super15 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _thisSuper7, _this24;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this24 = _super15.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "Incentives", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Incentives", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "Incentive", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Incentive", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GasMeters", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "GasMeters", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GasMeter", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "GasMeter", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "AllocationMeters", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "AllocationMeters", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "AllocationMeter", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "AllocationMeter", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper7 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper7).call(_thisSuper7, message, metadata, options, callback);
          });
          return _this24;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v.QueryClient = QueryClient;
    })(v1 || (v1 = _incentives.v1 || (_incentives.v1 = {})));
  })(incentives || (incentives = _kynno.incentives || (_kynno.incentives = {})));
})(kynno || (exports.kynno = kynno = {}));