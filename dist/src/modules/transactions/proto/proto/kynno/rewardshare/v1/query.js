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

var dependency_2 = _interopRequireWildcard(require("./genesis"));

var dependency_3 = _interopRequireWildcard(require("./rewardshare"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var rewardshare;

  (function (_rewardshare) {
    var v1;

    (function (_v) {
      var QueryRewardsharesRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryRewardsharesRequest, _pb_1$Message);

        var _super = _createSuper(QueryRewardsharesRequest);

        function QueryRewardsharesRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryRewardsharesRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryRewardsharesRequest, [{
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
            var message = new QueryRewardsharesRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryRewardsharesRequest();

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
            return QueryRewardsharesRequest.deserialize(bytes);
          }
        }]);
        return QueryRewardsharesRequest;
      }(pb_1.Message);

      _v.QueryRewardsharesRequest = QueryRewardsharesRequest;

      var QueryRewardsharesResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryRewardsharesResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryRewardsharesResponse);

        function QueryRewardsharesResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryRewardsharesResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewardshares" in data && data.rewardshares != undefined) {
              _this3.rewardshares = data.rewardshares;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryRewardsharesResponse, [{
          key: "rewardshares",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.kynno.rewardshare.v1.Rewardshare, 1);
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

            if (this.rewardshares != null) {
              data.rewardshares = this.rewardshares.map(function (item) {
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
            if (this.rewardshares !== undefined) writer.writeRepeatedMessage(1, this.rewardshares, function (item) {
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
            var message = new QueryRewardsharesResponse({});

            if (data.rewardshares != null) {
              message.rewardshares = data.rewardshares.map(function (item) {
                return dependency_3.kynno.rewardshare.v1.Rewardshare.fromObject(item);
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
                message = new QueryRewardsharesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewardshares, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.kynno.rewardshare.v1.Rewardshare.deserialize(reader), dependency_3.kynno.rewardshare.v1.Rewardshare);
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
            return QueryRewardsharesResponse.deserialize(bytes);
          }
        }]);
        return QueryRewardsharesResponse;
      }(pb_1.Message);

      _v.QueryRewardsharesResponse = QueryRewardsharesResponse;

      var QueryRewardshareRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryRewardshareRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryRewardshareRequest);

        function QueryRewardshareRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryRewardshareRequest);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this5.contract_address = data.contract_address;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryRewardshareRequest, [{
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
            var message = new QueryRewardshareRequest({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryRewardshareRequest();

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
            return QueryRewardshareRequest.deserialize(bytes);
          }
        }]);
        return QueryRewardshareRequest;
      }(pb_1.Message);

      _v.QueryRewardshareRequest = QueryRewardshareRequest;

      var QueryRewardshareResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryRewardshareResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryRewardshareResponse);

        function QueryRewardshareResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryRewardshareResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewardshare" in data && data.rewardshare != undefined) {
              _this6.rewardshare = data.rewardshare;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryRewardshareResponse, [{
          key: "rewardshare",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.kynno.rewardshare.v1.Rewardshare, 1);
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

            if (this.rewardshare != null) {
              data.rewardshare = this.rewardshare.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.rewardshare !== undefined) writer.writeMessage(1, this.rewardshare, function () {
              return _this7.rewardshare.serialize(writer);
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
            var message = new QueryRewardshareResponse({});

            if (data.rewardshare != null) {
              message.rewardshare = dependency_3.kynno.rewardshare.v1.Rewardshare.fromObject(data.rewardshare);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryRewardshareResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewardshare, function () {
                    return message.rewardshare = dependency_3.kynno.rewardshare.v1.Rewardshare.deserialize(reader);
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
            return QueryRewardshareResponse.deserialize(bytes);
          }
        }]);
        return QueryRewardshareResponse;
      }(pb_1.Message);

      _v.QueryRewardshareResponse = QueryRewardshareResponse;

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
            return pb_1.Message.getWrapperField(this, dependency_2.kynno.rewardshare.v1.Params, 1);
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
              message.params = dependency_2.kynno.rewardshare.v1.Params.fromObject(data.params);
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
                    return message.params = dependency_2.kynno.rewardshare.v1.Params.deserialize(reader);
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

      var QueryDeployerRewardsharesRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryDeployerRewardsharesRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryDeployerRewardsharesRequest);

        function QueryDeployerRewardsharesRequest(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, QueryDeployerRewardsharesRequest);
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

        (0, _createClass2["default"])(QueryDeployerRewardsharesRequest, [{
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
            var message = new QueryDeployerRewardsharesRequest({});

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
                message = new QueryDeployerRewardsharesRequest();

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
            return QueryDeployerRewardsharesRequest.deserialize(bytes);
          }
        }]);
        return QueryDeployerRewardsharesRequest;
      }(pb_1.Message);

      _v.QueryDeployerRewardsharesRequest = QueryDeployerRewardsharesRequest;

      var QueryDeployerRewardsharesResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryDeployerRewardsharesResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryDeployerRewardsharesResponse);

        function QueryDeployerRewardsharesResponse(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryDeployerRewardsharesResponse);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_addresses" in data && data.contract_addresses != undefined) {
              _this13.contract_addresses = data.contract_addresses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this13.pagination = data.pagination;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(QueryDeployerRewardsharesResponse, [{
          key: "contract_addresses",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
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

            if (this.contract_addresses != null) {
              data.contract_addresses = this.contract_addresses;
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
            if (this.contract_addresses !== undefined) writer.writeRepeatedString(1, this.contract_addresses);
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
            var message = new QueryDeployerRewardsharesResponse({});

            if (data.contract_addresses != null) {
              message.contract_addresses = data.contract_addresses;
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
                message = new QueryDeployerRewardsharesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
            return QueryDeployerRewardsharesResponse.deserialize(bytes);
          }
        }]);
        return QueryDeployerRewardsharesResponse;
      }(pb_1.Message);

      _v.QueryDeployerRewardsharesResponse = QueryDeployerRewardsharesResponse;

      var QueryWithdrawerRewardsharesRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryWithdrawerRewardsharesRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryWithdrawerRewardsharesRequest);

        function QueryWithdrawerRewardsharesRequest(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, QueryWithdrawerRewardsharesRequest);
          _this15 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("withdrawer_address" in data && data.withdrawer_address != undefined) {
              _this15.withdrawer_address = data.withdrawer_address;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this15.pagination = data.pagination;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(QueryWithdrawerRewardsharesRequest, [{
          key: "withdrawer_address",
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

            if (this.withdrawer_address != null) {
              data.withdrawer_address = this.withdrawer_address;
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
            if (typeof this.withdrawer_address === "string" && this.withdrawer_address.length) writer.writeString(1, this.withdrawer_address);
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
            var message = new QueryWithdrawerRewardsharesRequest({});

            if (data.withdrawer_address != null) {
              message.withdrawer_address = data.withdrawer_address;
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
                message = new QueryWithdrawerRewardsharesRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.withdrawer_address = reader.readString();
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
            return QueryWithdrawerRewardsharesRequest.deserialize(bytes);
          }
        }]);
        return QueryWithdrawerRewardsharesRequest;
      }(pb_1.Message);

      _v.QueryWithdrawerRewardsharesRequest = QueryWithdrawerRewardsharesRequest;

      var QueryWithdrawerRewardsharesResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryWithdrawerRewardsharesResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryWithdrawerRewardsharesResponse);

        function QueryWithdrawerRewardsharesResponse(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, QueryWithdrawerRewardsharesResponse);
          _this17 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_addresses" in data && data.contract_addresses != undefined) {
              _this17.contract_addresses = data.contract_addresses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this17.pagination = data.pagination;
            }
          }

          return _this17;
        }

        (0, _createClass2["default"])(QueryWithdrawerRewardsharesResponse, [{
          key: "contract_addresses",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
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

            if (this.contract_addresses != null) {
              data.contract_addresses = this.contract_addresses;
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
            if (this.contract_addresses !== undefined) writer.writeRepeatedString(1, this.contract_addresses);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
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
            var message = new QueryWithdrawerRewardsharesResponse({});

            if (data.contract_addresses != null) {
              message.contract_addresses = data.contract_addresses;
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
                message = new QueryWithdrawerRewardsharesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
            return QueryWithdrawerRewardsharesResponse.deserialize(bytes);
          }
        }]);
        return QueryWithdrawerRewardsharesResponse;
      }(pb_1.Message);

      _v.QueryWithdrawerRewardsharesResponse = QueryWithdrawerRewardsharesResponse;

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Rewardshares: {
          path: "/kynno.rewardshare.v1.Query/Rewardshares",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryRewardsharesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryRewardsharesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Rewardshare: {
          path: "/kynno.rewardshare.v1.Query/Rewardshare",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryRewardshareRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryRewardshareResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/kynno.rewardshare.v1.Query/Params",
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
        DeployerRewardshares: {
          path: "/kynno.rewardshare.v1.Query/DeployerRewardshares",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDeployerRewardsharesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDeployerRewardsharesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        WithdrawerRewardshares: {
          path: "/kynno.rewardshare.v1.Query/WithdrawerRewardshares",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryWithdrawerRewardsharesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryWithdrawerRewardsharesResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super11 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _this19;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this19 = _super11.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this19), "Rewardshares", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this19), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Rewardshares", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this19), "Rewardshare", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this19), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Rewardshare", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this19), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this19), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this19), "DeployerRewardshares", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this19), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DeployerRewardshares", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this19), "WithdrawerRewardshares", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this19), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "WithdrawerRewardshares", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          return _this19;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v.QueryClient = QueryClient;
    })(v1 || (v1 = _rewardshare.v1 || (_rewardshare.v1 = {})));
  })(rewardshare || (rewardshare = _kynno.rewardshare || (_kynno.rewardshare = {})));
})(kynno || (exports.kynno = kynno = {}));