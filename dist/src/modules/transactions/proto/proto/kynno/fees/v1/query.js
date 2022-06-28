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

var dependency_1 = _interopRequireWildcard(require("./../../../cosmos/base/query/v1beta1/pagination"));

var dependency_2 = _interopRequireWildcard(require("./genesis"));

var dependency_3 = _interopRequireWildcard(require("./fees"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var fees;

  (function (_fees) {
    var v1;

    (function (_v) {
      var QueryDevFeeInfosRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryDevFeeInfosRequest, _pb_1$Message);

        var _super = _createSuper(QueryDevFeeInfosRequest);

        function QueryDevFeeInfosRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfosRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryDevFeeInfosRequest, [{
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
            var message = new QueryDevFeeInfosRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDevFeeInfosRequest();

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
            return QueryDevFeeInfosRequest.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfosRequest;
      }(pb_1.Message);

      _v.QueryDevFeeInfosRequest = QueryDevFeeInfosRequest;

      var QueryDevFeeInfosResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryDevFeeInfosResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryDevFeeInfosResponse);

        function QueryDevFeeInfosResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfosResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("fees" in data && data.fees != undefined) {
              _this3.fees = data.fees;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryDevFeeInfosResponse, [{
          key: "fees",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.kynno.fees.v1.DevFeeInfo, 1);
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

            if (this.fees != null) {
              data.fees = this.fees.map(function (item) {
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
            if (this.fees !== undefined) writer.writeRepeatedMessage(1, this.fees, function (item) {
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
            var message = new QueryDevFeeInfosResponse({});

            if (data.fees != null) {
              message.fees = data.fees.map(function (item) {
                return dependency_3.kynno.fees.v1.DevFeeInfo.fromObject(item);
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
                message = new QueryDevFeeInfosResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.fees, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.kynno.fees.v1.DevFeeInfo.deserialize(reader), dependency_3.kynno.fees.v1.DevFeeInfo);
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
            return QueryDevFeeInfosResponse.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfosResponse;
      }(pb_1.Message);

      _v.QueryDevFeeInfosResponse = QueryDevFeeInfosResponse;

      var QueryDevFeeInfoRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryDevFeeInfoRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryDevFeeInfoRequest);

        function QueryDevFeeInfoRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfoRequest);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this5.contract_address = data.contract_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryDevFeeInfoRequest, [{
          key: "contract_address",
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
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
            var message = new QueryDevFeeInfoRequest({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDevFeeInfoRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
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
            return QueryDevFeeInfoRequest.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfoRequest;
      }(pb_1.Message);

      _v.QueryDevFeeInfoRequest = QueryDevFeeInfoRequest;

      var QueryDevFeeInfoResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryDevFeeInfoResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryDevFeeInfoResponse);

        function QueryDevFeeInfoResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfoResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("fee" in data && data.fee != undefined) {
              _this6.fee = data.fee;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryDevFeeInfoResponse, [{
          key: "fee",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.kynno.fees.v1.DevFeeInfo, 1);
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

            if (this.fee != null) {
              data.fee = this.fee.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.fee !== undefined) writer.writeMessage(1, this.fee, function () {
              return _this7.fee.serialize(writer);
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
            var message = new QueryDevFeeInfoResponse({});

            if (data.fee != null) {
              message.fee = dependency_3.kynno.fees.v1.DevFeeInfo.fromObject(data.fee);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDevFeeInfoResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.fee, function () {
                    return message.fee = dependency_3.kynno.fees.v1.DevFeeInfo.deserialize(reader);
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
            return QueryDevFeeInfoResponse.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfoResponse;
      }(pb_1.Message);

      _v.QueryDevFeeInfoResponse = QueryDevFeeInfoResponse;

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
            return pb_1.Message.getWrapperField(this, dependency_2.kynno.fees.v1.Params, 1);
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
              message.params = dependency_2.kynno.fees.v1.Params.fromObject(data.params);
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
                    return message.params = dependency_2.kynno.fees.v1.Params.deserialize(reader);
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

      var QueryDevFeeInfosPerDeployerRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryDevFeeInfosPerDeployerRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryDevFeeInfosPerDeployerRequest);

        function QueryDevFeeInfosPerDeployerRequest(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfosPerDeployerRequest);
          _this11 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this11.deployer_address = data.deployer_address;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this11.pagination = data.pagination;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(QueryDevFeeInfosPerDeployerRequest, [{
          key: "deployer_address",
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

            if (this.deployer_address != null) {
              data.deployer_address = this.deployer_address;
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
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(1, this.deployer_address);
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
            var message = new QueryDevFeeInfosPerDeployerRequest({});

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
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
                message = new QueryDevFeeInfosPerDeployerRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.deployer_address = reader.readString();
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
            return QueryDevFeeInfosPerDeployerRequest.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfosPerDeployerRequest;
      }(pb_1.Message);

      _v.QueryDevFeeInfosPerDeployerRequest = QueryDevFeeInfosPerDeployerRequest;

      var QueryDevFeeInfosPerDeployerResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryDevFeeInfosPerDeployerResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryDevFeeInfosPerDeployerResponse);

        function QueryDevFeeInfosPerDeployerResponse(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryDevFeeInfosPerDeployerResponse);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("fees" in data && data.fees != undefined) {
              _this13.fees = data.fees;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this13.pagination = data.pagination;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(QueryDevFeeInfosPerDeployerResponse, [{
          key: "fees",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.kynno.fees.v1.DevFeeInfo, 1);
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

            if (this.fees != null) {
              data.fees = this.fees.map(function (item) {
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
            if (this.fees !== undefined) writer.writeRepeatedMessage(1, this.fees, function (item) {
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
            var message = new QueryDevFeeInfosPerDeployerResponse({});

            if (data.fees != null) {
              message.fees = data.fees.map(function (item) {
                return dependency_3.kynno.fees.v1.DevFeeInfo.fromObject(item);
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
                message = new QueryDevFeeInfosPerDeployerResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.fees, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.kynno.fees.v1.DevFeeInfo.deserialize(reader), dependency_3.kynno.fees.v1.DevFeeInfo);
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
            return QueryDevFeeInfosPerDeployerResponse.deserialize(bytes);
          }
        }]);
        return QueryDevFeeInfosPerDeployerResponse;
      }(pb_1.Message);

      _v.QueryDevFeeInfosPerDeployerResponse = QueryDevFeeInfosPerDeployerResponse;
      var UnimplementedQueryService = /*#__PURE__*/(0, _createClass2["default"])(function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      });
      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        DevFeeInfos: {
          path: "/kynno.fees.v1.Query/DevFeeInfos",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDevFeeInfosRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDevFeeInfosResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DevFeeInfo: {
          path: "/kynno.fees.v1.Query/DevFeeInfo",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDevFeeInfoRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDevFeeInfoResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/kynno.fees.v1.Query/Params",
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
        DevFeeInfosPerDeployer: {
          path: "/kynno.fees.v1.Query/DevFeeInfosPerDeployer",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDevFeeInfosPerDeployerRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDevFeeInfosPerDeployerResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedQueryService = UnimplementedQueryService;
    })(v1 || (v1 = _fees.v1 || (_fees.v1 = {})));
  })(fees || (fees = _kynno.fees || (_kynno.fees = {})));
})(kynno || (exports.kynno = kynno = {}));