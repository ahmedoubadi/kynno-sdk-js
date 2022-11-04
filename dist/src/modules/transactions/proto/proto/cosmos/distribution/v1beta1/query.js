"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_1 = _interopRequireWildcard(require("./../../base/query/v1beta1/pagination"));

var dependency_4 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_5 = _interopRequireWildcard(require("./distribution"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var distribution;

  (function (_distribution) {
    var v1beta1;

    (function (_v1beta) {
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

      _v1beta.QueryParamsRequest = QueryParamsRequest;

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
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.distribution.v1beta1.Params, 1);
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
              message.params = dependency_5.cosmos.distribution.v1beta1.Params.fromObject(data.params);
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
                    return message.params = dependency_5.cosmos.distribution.v1beta1.Params.deserialize(reader);
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

      _v1beta.QueryParamsResponse = QueryParamsResponse;

      var QueryValidatorOutstandingRewardsRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryValidatorOutstandingRewardsRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryValidatorOutstandingRewardsRequest);

        function QueryValidatorOutstandingRewardsRequest(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryValidatorOutstandingRewardsRequest);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this4.validator_address = data.validator_address;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryValidatorOutstandingRewardsRequest, [{
          key: "validator_address",
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
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
            var message = new QueryValidatorOutstandingRewardsRequest({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorOutstandingRewardsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
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
            return QueryValidatorOutstandingRewardsRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorOutstandingRewardsRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorOutstandingRewardsRequest = QueryValidatorOutstandingRewardsRequest;

      var QueryValidatorOutstandingRewardsResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryValidatorOutstandingRewardsResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryValidatorOutstandingRewardsResponse);

        function QueryValidatorOutstandingRewardsResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryValidatorOutstandingRewardsResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewards" in data && data.rewards != undefined) {
              _this5.rewards = data.rewards;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryValidatorOutstandingRewardsResponse, [{
          key: "rewards",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards, 1);
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

            if (this.rewards != null) {
              data.rewards = this.rewards.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this6 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.rewards !== undefined) writer.writeMessage(1, this.rewards, function () {
              return _this6.rewards.serialize(writer);
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
            var message = new QueryValidatorOutstandingRewardsResponse({});

            if (data.rewards != null) {
              message.rewards = dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards.fromObject(data.rewards);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorOutstandingRewardsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewards, function () {
                    return message.rewards = dependency_5.cosmos.distribution.v1beta1.ValidatorOutstandingRewards.deserialize(reader);
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
            return QueryValidatorOutstandingRewardsResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorOutstandingRewardsResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorOutstandingRewardsResponse = QueryValidatorOutstandingRewardsResponse;

      var QueryValidatorCommissionRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryValidatorCommissionRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryValidatorCommissionRequest);

        function QueryValidatorCommissionRequest(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, QueryValidatorCommissionRequest);
          _this7 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this7.validator_address = data.validator_address;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(QueryValidatorCommissionRequest, [{
          key: "validator_address",
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
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
            var message = new QueryValidatorCommissionRequest({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorCommissionRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
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
            return QueryValidatorCommissionRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorCommissionRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorCommissionRequest = QueryValidatorCommissionRequest;

      var QueryValidatorCommissionResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryValidatorCommissionResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryValidatorCommissionResponse);

        function QueryValidatorCommissionResponse(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryValidatorCommissionResponse);
          _this8 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("commission" in data && data.commission != undefined) {
              _this8.commission = data.commission;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryValidatorCommissionResponse, [{
          key: "commission",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission, 1);
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

            if (this.commission != null) {
              data.commission = this.commission.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this9 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.commission !== undefined) writer.writeMessage(1, this.commission, function () {
              return _this9.commission.serialize(writer);
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
            var message = new QueryValidatorCommissionResponse({});

            if (data.commission != null) {
              message.commission = dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.fromObject(data.commission);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorCommissionResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.commission, function () {
                    return message.commission = dependency_5.cosmos.distribution.v1beta1.ValidatorAccumulatedCommission.deserialize(reader);
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
            return QueryValidatorCommissionResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorCommissionResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorCommissionResponse = QueryValidatorCommissionResponse;

      var QueryValidatorSlashesRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryValidatorSlashesRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryValidatorSlashesRequest);

        function QueryValidatorSlashesRequest(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, QueryValidatorSlashesRequest);
          _this10 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_address" in data && data.validator_address != undefined) {
              _this10.validator_address = data.validator_address;
            }

            if ("starting_height" in data && data.starting_height != undefined) {
              _this10.starting_height = data.starting_height;
            }

            if ("ending_height" in data && data.ending_height != undefined) {
              _this10.ending_height = data.ending_height;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this10.pagination = data.pagination;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(QueryValidatorSlashesRequest, [{
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "starting_height",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "ending_height",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.starting_height != null) {
              data.starting_height = this.starting_height;
            }

            if (this.ending_height != null) {
              data.ending_height = this.ending_height;
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
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(1, this.validator_address);
            if (this.starting_height !== undefined) writer.writeUint64(2, this.starting_height);
            if (this.ending_height !== undefined) writer.writeUint64(3, this.ending_height);
            if (this.pagination !== undefined) writer.writeMessage(4, this.pagination, function () {
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
            var message = new QueryValidatorSlashesRequest({});

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.starting_height != null) {
              message.starting_height = data.starting_height;
            }

            if (data.ending_height != null) {
              message.ending_height = data.ending_height;
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
                message = new QueryValidatorSlashesRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_address = reader.readString();
                  break;

                case 2:
                  message.starting_height = reader.readUint64();
                  break;

                case 3:
                  message.ending_height = reader.readUint64();
                  break;

                case 4:
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
            return QueryValidatorSlashesRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorSlashesRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorSlashesRequest = QueryValidatorSlashesRequest;

      var QueryValidatorSlashesResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryValidatorSlashesResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryValidatorSlashesResponse);

        function QueryValidatorSlashesResponse(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryValidatorSlashesResponse);
          _this12 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("slashes" in data && data.slashes != undefined) {
              _this12.slashes = data.slashes;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this12.pagination = data.pagination;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryValidatorSlashesResponse, [{
          key: "slashes",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent, 1);
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

            if (this.slashes != null) {
              data.slashes = this.slashes.map(function (item) {
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
            var _this13 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.slashes !== undefined) writer.writeRepeatedMessage(1, this.slashes, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this13.pagination.serialize(writer);
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
            var message = new QueryValidatorSlashesResponse({});

            if (data.slashes != null) {
              message.slashes = data.slashes.map(function (item) {
                return dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent.fromObject(item);
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
                message = new QueryValidatorSlashesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.slashes, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent.deserialize(reader), dependency_5.cosmos.distribution.v1beta1.ValidatorSlashEvent);
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
            return QueryValidatorSlashesResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorSlashesResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorSlashesResponse = QueryValidatorSlashesResponse;

      var QueryDelegationRewardsRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryDelegationRewardsRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryDelegationRewardsRequest);

        function QueryDelegationRewardsRequest(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, QueryDelegationRewardsRequest);
          _this14 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this14.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this14.validator_address = data.validator_address;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(QueryDelegationRewardsRequest, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
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
            var message = new QueryDelegationRewardsRequest({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationRewardsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
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
            return QueryDelegationRewardsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegationRewardsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegationRewardsRequest = QueryDelegationRewardsRequest;

      var QueryDelegationRewardsResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryDelegationRewardsResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryDelegationRewardsResponse);

        function QueryDelegationRewardsResponse(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, QueryDelegationRewardsResponse);
          _this15 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewards" in data && data.rewards != undefined) {
              _this15.rewards = data.rewards;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(QueryDelegationRewardsResponse, [{
          key: "rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.rewards != null) {
              data.rewards = this.rewards.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.rewards !== undefined) writer.writeRepeatedMessage(1, this.rewards, function (item) {
              return item.serialize(writer);
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
            var message = new QueryDelegationRewardsResponse({});

            if (data.rewards != null) {
              message.rewards = data.rewards.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationRewardsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_4.cosmos.base.v1beta1.DecCoin);
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
            return QueryDelegationRewardsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegationRewardsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegationRewardsResponse = QueryDelegationRewardsResponse;

      var QueryDelegationTotalRewardsRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryDelegationTotalRewardsRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryDelegationTotalRewardsRequest);

        function QueryDelegationTotalRewardsRequest(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, QueryDelegationTotalRewardsRequest);
          _this16 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this16.delegator_address = data.delegator_address;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(QueryDelegationTotalRewardsRequest, [{
          key: "delegator_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
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
            var message = new QueryDelegationTotalRewardsRequest({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationTotalRewardsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
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
            return QueryDelegationTotalRewardsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegationTotalRewardsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegationTotalRewardsRequest = QueryDelegationTotalRewardsRequest;

      var QueryDelegationTotalRewardsResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryDelegationTotalRewardsResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryDelegationTotalRewardsResponse);

        function QueryDelegationTotalRewardsResponse(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, QueryDelegationTotalRewardsResponse);
          _this17 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [1, 2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rewards" in data && data.rewards != undefined) {
              _this17.rewards = data.rewards;
            }

            if ("total" in data && data.total != undefined) {
              _this17.total = data.total;
            }
          }

          return _this17;
        }

        (0, _createClass2["default"])(QueryDelegationTotalRewardsResponse, [{
          key: "rewards",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "total",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.DecCoin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.rewards != null) {
              data.rewards = this.rewards.map(function (item) {
                return item.toObject();
              });
            }

            if (this.total != null) {
              data.total = this.total.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.rewards !== undefined) writer.writeRepeatedMessage(1, this.rewards, function (item) {
              return item.serialize(writer);
            });
            if (this.total !== undefined) writer.writeRepeatedMessage(2, this.total, function (item) {
              return item.serialize(writer);
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
            var message = new QueryDelegationTotalRewardsResponse({});

            if (data.rewards != null) {
              message.rewards = data.rewards.map(function (item) {
                return dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward.fromObject(item);
              });
            }

            if (data.total != null) {
              message.total = data.total.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationTotalRewardsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.rewards, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward.deserialize(reader), dependency_5.cosmos.distribution.v1beta1.DelegationDelegatorReward);
                  });
                  break;

                case 2:
                  reader.readMessage(message.total, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_4.cosmos.base.v1beta1.DecCoin);
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
            return QueryDelegationTotalRewardsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegationTotalRewardsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegationTotalRewardsResponse = QueryDelegationTotalRewardsResponse;

      var QueryDelegatorValidatorsRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryDelegatorValidatorsRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryDelegatorValidatorsRequest);

        function QueryDelegatorValidatorsRequest(data) {
          var _this18;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorsRequest);
          _this18 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this18.delegator_address = data.delegator_address;
            }
          }

          return _this18;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorsRequest, [{
          key: "delegator_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
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
            var message = new QueryDelegatorValidatorsRequest({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorValidatorsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
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
            return QueryDelegatorValidatorsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;

      var QueryDelegatorValidatorsResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryDelegatorValidatorsResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryDelegatorValidatorsResponse);

        function QueryDelegatorValidatorsResponse(data) {
          var _this19;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorsResponse);
          _this19 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validators" in data && data.validators != undefined) {
              _this19.validators = data.validators;
            }
          }

          return _this19;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorsResponse, [{
          key: "validators",
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

            if (this.validators != null) {
              data.validators = this.validators;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.validators !== undefined) writer.writeRepeatedString(1, this.validators);
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
            var message = new QueryDelegatorValidatorsResponse({});

            if (data.validators != null) {
              message.validators = data.validators;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorValidatorsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
            return QueryDelegatorValidatorsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;

      var QueryDelegatorWithdrawAddressRequest = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(QueryDelegatorWithdrawAddressRequest, _pb_1$Message15);

        var _super15 = _createSuper(QueryDelegatorWithdrawAddressRequest);

        function QueryDelegatorWithdrawAddressRequest(data) {
          var _this20;

          (0, _classCallCheck2["default"])(this, QueryDelegatorWithdrawAddressRequest);
          _this20 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this20.delegator_address = data.delegator_address;
            }
          }

          return _this20;
        }

        (0, _createClass2["default"])(QueryDelegatorWithdrawAddressRequest, [{
          key: "delegator_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
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
            var message = new QueryDelegatorWithdrawAddressRequest({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorWithdrawAddressRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
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
            return QueryDelegatorWithdrawAddressRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorWithdrawAddressRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorWithdrawAddressRequest = QueryDelegatorWithdrawAddressRequest;

      var QueryDelegatorWithdrawAddressResponse = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(QueryDelegatorWithdrawAddressResponse, _pb_1$Message16);

        var _super16 = _createSuper(QueryDelegatorWithdrawAddressResponse);

        function QueryDelegatorWithdrawAddressResponse(data) {
          var _this21;

          (0, _classCallCheck2["default"])(this, QueryDelegatorWithdrawAddressResponse);
          _this21 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("withdraw_address" in data && data.withdraw_address != undefined) {
              _this21.withdraw_address = data.withdraw_address;
            }
          }

          return _this21;
        }

        (0, _createClass2["default"])(QueryDelegatorWithdrawAddressResponse, [{
          key: "withdraw_address",
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

            if (this.withdraw_address != null) {
              data.withdraw_address = this.withdraw_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length) writer.writeString(1, this.withdraw_address);
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
            var message = new QueryDelegatorWithdrawAddressResponse({});

            if (data.withdraw_address != null) {
              message.withdraw_address = data.withdraw_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorWithdrawAddressResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.withdraw_address = reader.readString();
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
            return QueryDelegatorWithdrawAddressResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorWithdrawAddressResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorWithdrawAddressResponse = QueryDelegatorWithdrawAddressResponse;

      var QueryCommunityPoolRequest = /*#__PURE__*/function (_pb_1$Message17) {
        (0, _inherits2["default"])(QueryCommunityPoolRequest, _pb_1$Message17);

        var _super17 = _createSuper(QueryCommunityPoolRequest);

        function QueryCommunityPoolRequest(data) {
          var _this22;

          (0, _classCallCheck2["default"])(this, QueryCommunityPoolRequest);
          _this22 = _super17.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this22;
        }

        (0, _createClass2["default"])(QueryCommunityPoolRequest, [{
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
            var message = new QueryCommunityPoolRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCommunityPoolRequest();

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
            return QueryCommunityPoolRequest.deserialize(bytes);
          }
        }]);
        return QueryCommunityPoolRequest;
      }(pb_1.Message);

      _v1beta.QueryCommunityPoolRequest = QueryCommunityPoolRequest;

      var QueryCommunityPoolResponse = /*#__PURE__*/function (_pb_1$Message18) {
        (0, _inherits2["default"])(QueryCommunityPoolResponse, _pb_1$Message18);

        var _super18 = _createSuper(QueryCommunityPoolResponse);

        function QueryCommunityPoolResponse(data) {
          var _this23;

          (0, _classCallCheck2["default"])(this, QueryCommunityPoolResponse);
          _this23 = _super18.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pool" in data && data.pool != undefined) {
              _this23.pool = data.pool;
            }
          }

          return _this23;
        }

        (0, _createClass2["default"])(QueryCommunityPoolResponse, [{
          key: "pool",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.DecCoin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.pool != null) {
              data.pool = this.pool.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.pool !== undefined) writer.writeRepeatedMessage(1, this.pool, function (item) {
              return item.serialize(writer);
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
            var message = new QueryCommunityPoolResponse({});

            if (data.pool != null) {
              message.pool = data.pool.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCommunityPoolResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.pool, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_4.cosmos.base.v1beta1.DecCoin);
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
            return QueryCommunityPoolResponse.deserialize(bytes);
          }
        }]);
        return QueryCommunityPoolResponse;
      }(pb_1.Message);

      _v1beta.QueryCommunityPoolResponse = QueryCommunityPoolResponse;

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Params: {
          path: "/cosmos.distribution.v1beta1.Query/Params",
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
        ValidatorOutstandingRewards: {
          path: "/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorOutstandingRewardsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorOutstandingRewardsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ValidatorCommission: {
          path: "/cosmos.distribution.v1beta1.Query/ValidatorCommission",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorCommissionRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorCommissionResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ValidatorSlashes: {
          path: "/cosmos.distribution.v1beta1.Query/ValidatorSlashes",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorSlashesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorSlashesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegationRewards: {
          path: "/cosmos.distribution.v1beta1.Query/DelegationRewards",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegationRewardsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegationRewardsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegationTotalRewards: {
          path: "/cosmos.distribution.v1beta1.Query/DelegationTotalRewards",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegationTotalRewardsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegationTotalRewardsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegatorValidators: {
          path: "/cosmos.distribution.v1beta1.Query/DelegatorValidators",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegatorValidatorsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegatorValidatorsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegatorWithdrawAddress: {
          path: "/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegatorWithdrawAddressRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegatorWithdrawAddressResponse.deserialize(new Uint8Array(bytes));
          }
        },
        CommunityPool: {
          path: "/cosmos.distribution.v1beta1.Query/CommunityPool",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryCommunityPoolRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryCommunityPoolResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super19 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _thisSuper7, _thisSuper8, _thisSuper9, _this24;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this24 = _super19.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "ValidatorOutstandingRewards", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorOutstandingRewards", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "ValidatorCommission", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorCommission", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "ValidatorSlashes", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorSlashes", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "DelegationRewards", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegationRewards", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "DelegationTotalRewards", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegationTotalRewards", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "DelegatorValidators", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper7 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorValidators", _thisSuper7).call(_thisSuper7, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "DelegatorWithdrawAddress", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper8 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorWithdrawAddress", _thisSuper8).call(_thisSuper8, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "CommunityPool", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper9 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "CommunityPool", _thisSuper9).call(_thisSuper9, message, metadata, options, callback);
          });
          return _this24;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v1beta.QueryClient = QueryClient;
    })(v1beta1 || (v1beta1 = _distribution.v1beta1 || (_distribution.v1beta1 = {})));
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
})(cosmos || (exports.cosmos = cosmos = {}));