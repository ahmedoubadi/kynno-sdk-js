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

var dependency_4 = _interopRequireWildcard(require("./staking"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var staking;

  (function (_staking) {
    var v1beta1;

    (function (_v1beta) {
      var QueryValidatorsRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryValidatorsRequest, _pb_1$Message);

        var _super = _createSuper(QueryValidatorsRequest);

        function QueryValidatorsRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryValidatorsRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("status" in data && data.status != undefined) {
              _this.status = data.status;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryValidatorsRequest, [{
          key: "status",
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

            if (this.status != null) {
              data.status = this.status;
            }

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
            if (typeof this.status === "string" && this.status.length) writer.writeString(1, this.status);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
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
            var message = new QueryValidatorsRequest({});

            if (data.status != null) {
              message.status = data.status;
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
                message = new QueryValidatorsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.status = reader.readString();
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
            return QueryValidatorsRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorsRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorsRequest = QueryValidatorsRequest;

      var QueryValidatorsResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryValidatorsResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryValidatorsResponse);

        function QueryValidatorsResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryValidatorsResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validators" in data && data.validators != undefined) {
              _this3.validators = data.validators;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryValidatorsResponse, [{
          key: "validators",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
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

            if (this.validators != null) {
              data.validators = this.validators.map(function (item) {
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
            if (this.validators !== undefined) writer.writeRepeatedMessage(1, this.validators, function (item) {
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
            var message = new QueryValidatorsResponse({});

            if (data.validators != null) {
              message.validators = data.validators.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.Validator.fromObject(item);
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
                message = new QueryValidatorsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.validators, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_4.cosmos.staking.v1beta1.Validator);
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
            return QueryValidatorsResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorsResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorsResponse = QueryValidatorsResponse;

      var QueryValidatorRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryValidatorRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryValidatorRequest);

        function QueryValidatorRequest(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryValidatorRequest);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this5.validator_addr = data.validator_addr;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryValidatorRequest, [{
          key: "validator_addr",
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

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(1, this.validator_addr);
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
            var message = new QueryValidatorRequest({});

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_addr = reader.readString();
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
            return QueryValidatorRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorRequest = QueryValidatorRequest;

      var QueryValidatorResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryValidatorResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryValidatorResponse);

        function QueryValidatorResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryValidatorResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator" in data && data.validator != undefined) {
              _this6.validator = data.validator;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryValidatorResponse, [{
          key: "validator",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
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

            if (this.validator != null) {
              data.validator = this.validator.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.validator !== undefined) writer.writeMessage(1, this.validator, function () {
              return _this7.validator.serialize(writer);
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
            var message = new QueryValidatorResponse({});

            if (data.validator != null) {
              message.validator = dependency_4.cosmos.staking.v1beta1.Validator.fromObject(data.validator);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryValidatorResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.validator, function () {
                    return message.validator = dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader);
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
            return QueryValidatorResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorResponse = QueryValidatorResponse;

      var QueryValidatorDelegationsRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryValidatorDelegationsRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryValidatorDelegationsRequest);

        function QueryValidatorDelegationsRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryValidatorDelegationsRequest);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this8.validator_addr = data.validator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this8.pagination = data.pagination;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryValidatorDelegationsRequest, [{
          key: "validator_addr",
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

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
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
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(1, this.validator_addr);
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
            var message = new QueryValidatorDelegationsRequest({});

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
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
                message = new QueryValidatorDelegationsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_addr = reader.readString();
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
            return QueryValidatorDelegationsRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorDelegationsRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorDelegationsRequest = QueryValidatorDelegationsRequest;

      var QueryValidatorDelegationsResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryValidatorDelegationsResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryValidatorDelegationsResponse);

        function QueryValidatorDelegationsResponse(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, QueryValidatorDelegationsResponse);
          _this10 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegation_responses" in data && data.delegation_responses != undefined) {
              _this10.delegation_responses = data.delegation_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this10.pagination = data.pagination;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(QueryValidatorDelegationsResponse, [{
          key: "delegation_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
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

            if (this.delegation_responses != null) {
              data.delegation_responses = this.delegation_responses.map(function (item) {
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
            if (this.delegation_responses !== undefined) writer.writeRepeatedMessage(1, this.delegation_responses, function (item) {
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
            var message = new QueryValidatorDelegationsResponse({});

            if (data.delegation_responses != null) {
              message.delegation_responses = data.delegation_responses.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(item);
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
                message = new QueryValidatorDelegationsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.delegation_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.DelegationResponse);
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
            return QueryValidatorDelegationsResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorDelegationsResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorDelegationsResponse = QueryValidatorDelegationsResponse;

      var QueryValidatorUnbondingDelegationsRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryValidatorUnbondingDelegationsRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryValidatorUnbondingDelegationsRequest);

        function QueryValidatorUnbondingDelegationsRequest(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryValidatorUnbondingDelegationsRequest);
          _this12 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this12.validator_addr = data.validator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this12.pagination = data.pagination;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryValidatorUnbondingDelegationsRequest, [{
          key: "validator_addr",
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

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
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
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(1, this.validator_addr);
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
            var message = new QueryValidatorUnbondingDelegationsRequest({});

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
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
                message = new QueryValidatorUnbondingDelegationsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.validator_addr = reader.readString();
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
            return QueryValidatorUnbondingDelegationsRequest.deserialize(bytes);
          }
        }]);
        return QueryValidatorUnbondingDelegationsRequest;
      }(pb_1.Message);

      _v1beta.QueryValidatorUnbondingDelegationsRequest = QueryValidatorUnbondingDelegationsRequest;

      var QueryValidatorUnbondingDelegationsResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryValidatorUnbondingDelegationsResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryValidatorUnbondingDelegationsResponse);

        function QueryValidatorUnbondingDelegationsResponse(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, QueryValidatorUnbondingDelegationsResponse);
          _this14 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("unbonding_responses" in data && data.unbonding_responses != undefined) {
              _this14.unbonding_responses = data.unbonding_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this14.pagination = data.pagination;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(QueryValidatorUnbondingDelegationsResponse, [{
          key: "unbonding_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
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

            if (this.unbonding_responses != null) {
              data.unbonding_responses = this.unbonding_responses.map(function (item) {
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
            var _this15 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.unbonding_responses !== undefined) writer.writeRepeatedMessage(1, this.unbonding_responses, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
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
            var message = new QueryValidatorUnbondingDelegationsResponse({});

            if (data.unbonding_responses != null) {
              message.unbonding_responses = data.unbonding_responses.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item);
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
                message = new QueryValidatorUnbondingDelegationsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.unbonding_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_4.cosmos.staking.v1beta1.UnbondingDelegation);
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
            return QueryValidatorUnbondingDelegationsResponse.deserialize(bytes);
          }
        }]);
        return QueryValidatorUnbondingDelegationsResponse;
      }(pb_1.Message);

      _v1beta.QueryValidatorUnbondingDelegationsResponse = QueryValidatorUnbondingDelegationsResponse;

      var QueryDelegationRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryDelegationRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryDelegationRequest);

        function QueryDelegationRequest(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, QueryDelegationRequest);
          _this16 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this16.delegator_addr = data.delegator_addr;
            }

            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this16.validator_addr = data.validator_addr;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(QueryDelegationRequest, [{
          key: "delegator_addr",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(2, this.validator_addr);
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
            var message = new QueryDelegationRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
            }

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
                  break;

                case 2:
                  message.validator_addr = reader.readString();
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
            return QueryDelegationRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegationRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegationRequest = QueryDelegationRequest;

      var QueryDelegationResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryDelegationResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryDelegationResponse);

        function QueryDelegationResponse(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, QueryDelegationResponse);
          _this17 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegation_response" in data && data.delegation_response != undefined) {
              _this17.delegation_response = data.delegation_response;
            }
          }

          return _this17;
        }

        (0, _createClass2["default"])(QueryDelegationResponse, [{
          key: "delegation_response",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
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

            if (this.delegation_response != null) {
              data.delegation_response = this.delegation_response.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this18 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.delegation_response !== undefined) writer.writeMessage(1, this.delegation_response, function () {
              return _this18.delegation_response.serialize(writer);
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
            var message = new QueryDelegationResponse({});

            if (data.delegation_response != null) {
              message.delegation_response = dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(data.delegation_response);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegationResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.delegation_response, function () {
                    return message.delegation_response = dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader);
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
            return QueryDelegationResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegationResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegationResponse = QueryDelegationResponse;

      var QueryUnbondingDelegationRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryUnbondingDelegationRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryUnbondingDelegationRequest);

        function QueryUnbondingDelegationRequest(data) {
          var _this19;

          (0, _classCallCheck2["default"])(this, QueryUnbondingDelegationRequest);
          _this19 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this19.delegator_addr = data.delegator_addr;
            }

            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this19.validator_addr = data.validator_addr;
            }
          }

          return _this19;
        }

        (0, _createClass2["default"])(QueryUnbondingDelegationRequest, [{
          key: "delegator_addr",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(2, this.validator_addr);
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
            var message = new QueryUnbondingDelegationRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
            }

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryUnbondingDelegationRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
                  break;

                case 2:
                  message.validator_addr = reader.readString();
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
            return QueryUnbondingDelegationRequest.deserialize(bytes);
          }
        }]);
        return QueryUnbondingDelegationRequest;
      }(pb_1.Message);

      _v1beta.QueryUnbondingDelegationRequest = QueryUnbondingDelegationRequest;

      var QueryUnbondingDelegationResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryUnbondingDelegationResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryUnbondingDelegationResponse);

        function QueryUnbondingDelegationResponse(data) {
          var _this20;

          (0, _classCallCheck2["default"])(this, QueryUnbondingDelegationResponse);
          _this20 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("unbond" in data && data.unbond != undefined) {
              _this20.unbond = data.unbond;
            }
          }

          return _this20;
        }

        (0, _createClass2["default"])(QueryUnbondingDelegationResponse, [{
          key: "unbond",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
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

            if (this.unbond != null) {
              data.unbond = this.unbond.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this21 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.unbond !== undefined) writer.writeMessage(1, this.unbond, function () {
              return _this21.unbond.serialize(writer);
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
            var message = new QueryUnbondingDelegationResponse({});

            if (data.unbond != null) {
              message.unbond = dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(data.unbond);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryUnbondingDelegationResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.unbond, function () {
                    return message.unbond = dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader);
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
            return QueryUnbondingDelegationResponse.deserialize(bytes);
          }
        }]);
        return QueryUnbondingDelegationResponse;
      }(pb_1.Message);

      _v1beta.QueryUnbondingDelegationResponse = QueryUnbondingDelegationResponse;

      var QueryDelegatorDelegationsRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryDelegatorDelegationsRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryDelegatorDelegationsRequest);

        function QueryDelegatorDelegationsRequest(data) {
          var _this22;

          (0, _classCallCheck2["default"])(this, QueryDelegatorDelegationsRequest);
          _this22 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this22.delegator_addr = data.delegator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this22.pagination = data.pagination;
            }
          }

          return _this22;
        }

        (0, _createClass2["default"])(QueryDelegatorDelegationsRequest, [{
          key: "delegator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this23 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this23.pagination.serialize(writer);
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
            var message = new QueryDelegatorDelegationsRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
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
                message = new QueryDelegatorDelegationsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
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
            return QueryDelegatorDelegationsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorDelegationsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorDelegationsRequest = QueryDelegatorDelegationsRequest;

      var QueryDelegatorDelegationsResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryDelegatorDelegationsResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryDelegatorDelegationsResponse);

        function QueryDelegatorDelegationsResponse(data) {
          var _this24;

          (0, _classCallCheck2["default"])(this, QueryDelegatorDelegationsResponse);
          _this24 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegation_responses" in data && data.delegation_responses != undefined) {
              _this24.delegation_responses = data.delegation_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this24.pagination = data.pagination;
            }
          }

          return _this24;
        }

        (0, _createClass2["default"])(QueryDelegatorDelegationsResponse, [{
          key: "delegation_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.DelegationResponse, 1);
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

            if (this.delegation_responses != null) {
              data.delegation_responses = this.delegation_responses.map(function (item) {
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
            var _this25 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.delegation_responses !== undefined) writer.writeRepeatedMessage(1, this.delegation_responses, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this25.pagination.serialize(writer);
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
            var message = new QueryDelegatorDelegationsResponse({});

            if (data.delegation_responses != null) {
              message.delegation_responses = data.delegation_responses.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.DelegationResponse.fromObject(item);
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
                message = new QueryDelegatorDelegationsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.delegation_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.DelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.DelegationResponse);
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
            return QueryDelegatorDelegationsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorDelegationsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorDelegationsResponse = QueryDelegatorDelegationsResponse;

      var QueryDelegatorUnbondingDelegationsRequest = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(QueryDelegatorUnbondingDelegationsRequest, _pb_1$Message15);

        var _super15 = _createSuper(QueryDelegatorUnbondingDelegationsRequest);

        function QueryDelegatorUnbondingDelegationsRequest(data) {
          var _this26;

          (0, _classCallCheck2["default"])(this, QueryDelegatorUnbondingDelegationsRequest);
          _this26 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this26.delegator_addr = data.delegator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this26.pagination = data.pagination;
            }
          }

          return _this26;
        }

        (0, _createClass2["default"])(QueryDelegatorUnbondingDelegationsRequest, [{
          key: "delegator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this27 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this27.pagination.serialize(writer);
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
            var message = new QueryDelegatorUnbondingDelegationsRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
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
                message = new QueryDelegatorUnbondingDelegationsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
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
            return QueryDelegatorUnbondingDelegationsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorUnbondingDelegationsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorUnbondingDelegationsRequest = QueryDelegatorUnbondingDelegationsRequest;

      var QueryDelegatorUnbondingDelegationsResponse = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(QueryDelegatorUnbondingDelegationsResponse, _pb_1$Message16);

        var _super16 = _createSuper(QueryDelegatorUnbondingDelegationsResponse);

        function QueryDelegatorUnbondingDelegationsResponse(data) {
          var _this28;

          (0, _classCallCheck2["default"])(this, QueryDelegatorUnbondingDelegationsResponse);
          _this28 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("unbonding_responses" in data && data.unbonding_responses != undefined) {
              _this28.unbonding_responses = data.unbonding_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this28.pagination = data.pagination;
            }
          }

          return _this28;
        }

        (0, _createClass2["default"])(QueryDelegatorUnbondingDelegationsResponse, [{
          key: "unbonding_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation, 1);
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

            if (this.unbonding_responses != null) {
              data.unbonding_responses = this.unbonding_responses.map(function (item) {
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
            var _this29 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.unbonding_responses !== undefined) writer.writeRepeatedMessage(1, this.unbonding_responses, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this29.pagination.serialize(writer);
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
            var message = new QueryDelegatorUnbondingDelegationsResponse({});

            if (data.unbonding_responses != null) {
              message.unbonding_responses = data.unbonding_responses.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.fromObject(item);
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
                message = new QueryDelegatorUnbondingDelegationsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.unbonding_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.UnbondingDelegation.deserialize(reader), dependency_4.cosmos.staking.v1beta1.UnbondingDelegation);
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
            return QueryDelegatorUnbondingDelegationsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorUnbondingDelegationsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorUnbondingDelegationsResponse = QueryDelegatorUnbondingDelegationsResponse;

      var QueryRedelegationsRequest = /*#__PURE__*/function (_pb_1$Message17) {
        (0, _inherits2["default"])(QueryRedelegationsRequest, _pb_1$Message17);

        var _super17 = _createSuper(QueryRedelegationsRequest);

        function QueryRedelegationsRequest(data) {
          var _this30;

          (0, _classCallCheck2["default"])(this, QueryRedelegationsRequest);
          _this30 = _super17.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this30), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this30.delegator_addr = data.delegator_addr;
            }

            if ("src_validator_addr" in data && data.src_validator_addr != undefined) {
              _this30.src_validator_addr = data.src_validator_addr;
            }

            if ("dst_validator_addr" in data && data.dst_validator_addr != undefined) {
              _this30.dst_validator_addr = data.dst_validator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this30.pagination = data.pagination;
            }
          }

          return _this30;
        }

        (0, _createClass2["default"])(QueryRedelegationsRequest, [{
          key: "delegator_addr",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "src_validator_addr",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "dst_validator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.src_validator_addr != null) {
              data.src_validator_addr = this.src_validator_addr;
            }

            if (this.dst_validator_addr != null) {
              data.dst_validator_addr = this.dst_validator_addr;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this31 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (typeof this.src_validator_addr === "string" && this.src_validator_addr.length) writer.writeString(2, this.src_validator_addr);
            if (typeof this.dst_validator_addr === "string" && this.dst_validator_addr.length) writer.writeString(3, this.dst_validator_addr);
            if (this.pagination !== undefined) writer.writeMessage(4, this.pagination, function () {
              return _this31.pagination.serialize(writer);
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
            var message = new QueryRedelegationsRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
            }

            if (data.src_validator_addr != null) {
              message.src_validator_addr = data.src_validator_addr;
            }

            if (data.dst_validator_addr != null) {
              message.dst_validator_addr = data.dst_validator_addr;
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
                message = new QueryRedelegationsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
                  break;

                case 2:
                  message.src_validator_addr = reader.readString();
                  break;

                case 3:
                  message.dst_validator_addr = reader.readString();
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
            return QueryRedelegationsRequest.deserialize(bytes);
          }
        }]);
        return QueryRedelegationsRequest;
      }(pb_1.Message);

      _v1beta.QueryRedelegationsRequest = QueryRedelegationsRequest;

      var QueryRedelegationsResponse = /*#__PURE__*/function (_pb_1$Message18) {
        (0, _inherits2["default"])(QueryRedelegationsResponse, _pb_1$Message18);

        var _super18 = _createSuper(QueryRedelegationsResponse);

        function QueryRedelegationsResponse(data) {
          var _this32;

          (0, _classCallCheck2["default"])(this, QueryRedelegationsResponse);
          _this32 = _super18.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this32), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("redelegation_responses" in data && data.redelegation_responses != undefined) {
              _this32.redelegation_responses = data.redelegation_responses;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this32.pagination = data.pagination;
            }
          }

          return _this32;
        }

        (0, _createClass2["default"])(QueryRedelegationsResponse, [{
          key: "redelegation_responses",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.RedelegationResponse, 1);
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

            if (this.redelegation_responses != null) {
              data.redelegation_responses = this.redelegation_responses.map(function (item) {
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
            var _this33 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.redelegation_responses !== undefined) writer.writeRepeatedMessage(1, this.redelegation_responses, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this33.pagination.serialize(writer);
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
            var message = new QueryRedelegationsResponse({});

            if (data.redelegation_responses != null) {
              message.redelegation_responses = data.redelegation_responses.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.RedelegationResponse.fromObject(item);
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
                message = new QueryRedelegationsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.redelegation_responses, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.RedelegationResponse.deserialize(reader), dependency_4.cosmos.staking.v1beta1.RedelegationResponse);
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
            return QueryRedelegationsResponse.deserialize(bytes);
          }
        }]);
        return QueryRedelegationsResponse;
      }(pb_1.Message);

      _v1beta.QueryRedelegationsResponse = QueryRedelegationsResponse;

      var QueryDelegatorValidatorsRequest = /*#__PURE__*/function (_pb_1$Message19) {
        (0, _inherits2["default"])(QueryDelegatorValidatorsRequest, _pb_1$Message19);

        var _super19 = _createSuper(QueryDelegatorValidatorsRequest);

        function QueryDelegatorValidatorsRequest(data) {
          var _this34;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorsRequest);
          _this34 = _super19.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this34), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this34.delegator_addr = data.delegator_addr;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this34.pagination = data.pagination;
            }
          }

          return _this34;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorsRequest, [{
          key: "delegator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this35 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this35.pagination.serialize(writer);
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
            var message = new QueryDelegatorValidatorsRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
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
                message = new QueryDelegatorValidatorsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
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
            return QueryDelegatorValidatorsRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorsRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;

      var QueryDelegatorValidatorsResponse = /*#__PURE__*/function (_pb_1$Message20) {
        (0, _inherits2["default"])(QueryDelegatorValidatorsResponse, _pb_1$Message20);

        var _super20 = _createSuper(QueryDelegatorValidatorsResponse);

        function QueryDelegatorValidatorsResponse(data) {
          var _this36;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorsResponse);
          _this36 = _super20.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this36), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validators" in data && data.validators != undefined) {
              _this36.validators = data.validators;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this36.pagination = data.pagination;
            }
          }

          return _this36;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorsResponse, [{
          key: "validators",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
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

            if (this.validators != null) {
              data.validators = this.validators.map(function (item) {
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
            var _this37 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.validators !== undefined) writer.writeRepeatedMessage(1, this.validators, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this37.pagination.serialize(writer);
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
            var message = new QueryDelegatorValidatorsResponse({});

            if (data.validators != null) {
              message.validators = data.validators.map(function (item) {
                return dependency_4.cosmos.staking.v1beta1.Validator.fromObject(item);
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
                message = new QueryDelegatorValidatorsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.validators, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader), dependency_4.cosmos.staking.v1beta1.Validator);
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
            return QueryDelegatorValidatorsResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorsResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;

      var QueryDelegatorValidatorRequest = /*#__PURE__*/function (_pb_1$Message21) {
        (0, _inherits2["default"])(QueryDelegatorValidatorRequest, _pb_1$Message21);

        var _super21 = _createSuper(QueryDelegatorValidatorRequest);

        function QueryDelegatorValidatorRequest(data) {
          var _this38;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorRequest);
          _this38 = _super21.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this38), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_addr" in data && data.delegator_addr != undefined) {
              _this38.delegator_addr = data.delegator_addr;
            }

            if ("validator_addr" in data && data.validator_addr != undefined) {
              _this38.validator_addr = data.validator_addr;
            }
          }

          return _this38;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorRequest, [{
          key: "delegator_addr",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_addr",
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

            if (this.delegator_addr != null) {
              data.delegator_addr = this.delegator_addr;
            }

            if (this.validator_addr != null) {
              data.validator_addr = this.validator_addr;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_addr === "string" && this.delegator_addr.length) writer.writeString(1, this.delegator_addr);
            if (typeof this.validator_addr === "string" && this.validator_addr.length) writer.writeString(2, this.validator_addr);
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
            var message = new QueryDelegatorValidatorRequest({});

            if (data.delegator_addr != null) {
              message.delegator_addr = data.delegator_addr;
            }

            if (data.validator_addr != null) {
              message.validator_addr = data.validator_addr;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorValidatorRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_addr = reader.readString();
                  break;

                case 2:
                  message.validator_addr = reader.readString();
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
            return QueryDelegatorValidatorRequest.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorRequest;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorRequest = QueryDelegatorValidatorRequest;

      var QueryDelegatorValidatorResponse = /*#__PURE__*/function (_pb_1$Message22) {
        (0, _inherits2["default"])(QueryDelegatorValidatorResponse, _pb_1$Message22);

        var _super22 = _createSuper(QueryDelegatorValidatorResponse);

        function QueryDelegatorValidatorResponse(data) {
          var _this39;

          (0, _classCallCheck2["default"])(this, QueryDelegatorValidatorResponse);
          _this39 = _super22.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this39), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("validator" in data && data.validator != undefined) {
              _this39.validator = data.validator;
            }
          }

          return _this39;
        }

        (0, _createClass2["default"])(QueryDelegatorValidatorResponse, [{
          key: "validator",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Validator, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject18) {
            function toObject() {
              return _toObject18.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject18.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.validator != null) {
              data.validator = this.validator.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this40 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.validator !== undefined) writer.writeMessage(1, this.validator, function () {
              return _this40.validator.serialize(writer);
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
            var message = new QueryDelegatorValidatorResponse({});

            if (data.validator != null) {
              message.validator = dependency_4.cosmos.staking.v1beta1.Validator.fromObject(data.validator);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDelegatorValidatorResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.validator, function () {
                    return message.validator = dependency_4.cosmos.staking.v1beta1.Validator.deserialize(reader);
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
            return QueryDelegatorValidatorResponse.deserialize(bytes);
          }
        }]);
        return QueryDelegatorValidatorResponse;
      }(pb_1.Message);

      _v1beta.QueryDelegatorValidatorResponse = QueryDelegatorValidatorResponse;

      var QueryHistoricalInfoRequest = /*#__PURE__*/function (_pb_1$Message23) {
        (0, _inherits2["default"])(QueryHistoricalInfoRequest, _pb_1$Message23);

        var _super23 = _createSuper(QueryHistoricalInfoRequest);

        function QueryHistoricalInfoRequest(data) {
          var _this41;

          (0, _classCallCheck2["default"])(this, QueryHistoricalInfoRequest);
          _this41 = _super23.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this41), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("height" in data && data.height != undefined) {
              _this41.height = data.height;
            }
          }

          return _this41;
        }

        (0, _createClass2["default"])(QueryHistoricalInfoRequest, [{
          key: "height",
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

            if (this.height != null) {
              data.height = this.height;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined) writer.writeInt64(1, this.height);
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
            var message = new QueryHistoricalInfoRequest({});

            if (data.height != null) {
              message.height = data.height;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryHistoricalInfoRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.height = reader.readInt64();
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
            return QueryHistoricalInfoRequest.deserialize(bytes);
          }
        }]);
        return QueryHistoricalInfoRequest;
      }(pb_1.Message);

      _v1beta.QueryHistoricalInfoRequest = QueryHistoricalInfoRequest;

      var QueryHistoricalInfoResponse = /*#__PURE__*/function (_pb_1$Message24) {
        (0, _inherits2["default"])(QueryHistoricalInfoResponse, _pb_1$Message24);

        var _super24 = _createSuper(QueryHistoricalInfoResponse);

        function QueryHistoricalInfoResponse(data) {
          var _this42;

          (0, _classCallCheck2["default"])(this, QueryHistoricalInfoResponse);
          _this42 = _super24.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this42), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hist" in data && data.hist != undefined) {
              _this42.hist = data.hist;
            }
          }

          return _this42;
        }

        (0, _createClass2["default"])(QueryHistoricalInfoResponse, [{
          key: "hist",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.HistoricalInfo, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject19) {
            function toObject() {
              return _toObject19.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject19.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.hist != null) {
              data.hist = this.hist.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this43 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.hist !== undefined) writer.writeMessage(1, this.hist, function () {
              return _this43.hist.serialize(writer);
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
            var message = new QueryHistoricalInfoResponse({});

            if (data.hist != null) {
              message.hist = dependency_4.cosmos.staking.v1beta1.HistoricalInfo.fromObject(data.hist);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryHistoricalInfoResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.hist, function () {
                    return message.hist = dependency_4.cosmos.staking.v1beta1.HistoricalInfo.deserialize(reader);
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
            return QueryHistoricalInfoResponse.deserialize(bytes);
          }
        }]);
        return QueryHistoricalInfoResponse;
      }(pb_1.Message);

      _v1beta.QueryHistoricalInfoResponse = QueryHistoricalInfoResponse;

      var QueryPoolRequest = /*#__PURE__*/function (_pb_1$Message25) {
        (0, _inherits2["default"])(QueryPoolRequest, _pb_1$Message25);

        var _super25 = _createSuper(QueryPoolRequest);

        function QueryPoolRequest(data) {
          var _this44;

          (0, _classCallCheck2["default"])(this, QueryPoolRequest);
          _this44 = _super25.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this44), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this44;
        }

        (0, _createClass2["default"])(QueryPoolRequest, [{
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
            var message = new QueryPoolRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryPoolRequest();

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
            return QueryPoolRequest.deserialize(bytes);
          }
        }]);
        return QueryPoolRequest;
      }(pb_1.Message);

      _v1beta.QueryPoolRequest = QueryPoolRequest;

      var QueryPoolResponse = /*#__PURE__*/function (_pb_1$Message26) {
        (0, _inherits2["default"])(QueryPoolResponse, _pb_1$Message26);

        var _super26 = _createSuper(QueryPoolResponse);

        function QueryPoolResponse(data) {
          var _this45;

          (0, _classCallCheck2["default"])(this, QueryPoolResponse);
          _this45 = _super26.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this45), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pool" in data && data.pool != undefined) {
              _this45.pool = data.pool;
            }
          }

          return _this45;
        }

        (0, _createClass2["default"])(QueryPoolResponse, [{
          key: "pool",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Pool, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject20) {
            function toObject() {
              return _toObject20.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject20.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.pool != null) {
              data.pool = this.pool.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this46 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.pool !== undefined) writer.writeMessage(1, this.pool, function () {
              return _this46.pool.serialize(writer);
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
            var message = new QueryPoolResponse({});

            if (data.pool != null) {
              message.pool = dependency_4.cosmos.staking.v1beta1.Pool.fromObject(data.pool);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryPoolResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.pool, function () {
                    return message.pool = dependency_4.cosmos.staking.v1beta1.Pool.deserialize(reader);
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
            return QueryPoolResponse.deserialize(bytes);
          }
        }]);
        return QueryPoolResponse;
      }(pb_1.Message);

      _v1beta.QueryPoolResponse = QueryPoolResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message27) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message27);

        var _super27 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this47;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this47 = _super27.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this47), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this47;
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

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message28) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message28);

        var _super28 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this48;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this48 = _super28.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this48), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this48.params = data.params;
            }
          }

          return _this48;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.staking.v1beta1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject21) {
            function toObject() {
              return _toObject21.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject21.toString();
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
            var _this49 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this49.params.serialize(writer);
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
              message.params = dependency_4.cosmos.staking.v1beta1.Params.fromObject(data.params);
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
                    return message.params = dependency_4.cosmos.staking.v1beta1.Params.deserialize(reader);
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

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Validators: {
          path: "/cosmos.staking.v1beta1.Query/Validators",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Validator: {
          path: "/cosmos.staking.v1beta1.Query/Validator",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ValidatorDelegations: {
          path: "/cosmos.staking.v1beta1.Query/ValidatorDelegations",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorDelegationsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorDelegationsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ValidatorUnbondingDelegations: {
          path: "/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryValidatorUnbondingDelegationsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryValidatorUnbondingDelegationsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Delegation: {
          path: "/cosmos.staking.v1beta1.Query/Delegation",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegationRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegationResponse.deserialize(new Uint8Array(bytes));
          }
        },
        UnbondingDelegation: {
          path: "/cosmos.staking.v1beta1.Query/UnbondingDelegation",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryUnbondingDelegationRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryUnbondingDelegationResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegatorDelegations: {
          path: "/cosmos.staking.v1beta1.Query/DelegatorDelegations",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegatorDelegationsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegatorDelegationsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegatorUnbondingDelegations: {
          path: "/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegatorUnbondingDelegationsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegatorUnbondingDelegationsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Redelegations: {
          path: "/cosmos.staking.v1beta1.Query/Redelegations",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryRedelegationsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryRedelegationsResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DelegatorValidators: {
          path: "/cosmos.staking.v1beta1.Query/DelegatorValidators",
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
        DelegatorValidator: {
          path: "/cosmos.staking.v1beta1.Query/DelegatorValidator",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDelegatorValidatorRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDelegatorValidatorResponse.deserialize(new Uint8Array(bytes));
          }
        },
        HistoricalInfo: {
          path: "/cosmos.staking.v1beta1.Query/HistoricalInfo",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryHistoricalInfoRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryHistoricalInfoResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Pool: {
          path: "/cosmos.staking.v1beta1.Query/Pool",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryPoolRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryPoolResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/cosmos.staking.v1beta1.Query/Params",
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
      _v1beta.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super29 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _thisSuper7, _thisSuper8, _thisSuper9, _thisSuper10, _thisSuper11, _thisSuper12, _thisSuper13, _thisSuper14, _this50;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this50 = _super29.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Validators", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Validators", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Validator", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Validator", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "ValidatorDelegations", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorDelegations", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "ValidatorUnbondingDelegations", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ValidatorUnbondingDelegations", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Delegation", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Delegation", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "UnbondingDelegation", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "UnbondingDelegation", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "DelegatorDelegations", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper7 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorDelegations", _thisSuper7).call(_thisSuper7, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "DelegatorUnbondingDelegations", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper8 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorUnbondingDelegations", _thisSuper8).call(_thisSuper8, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Redelegations", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper9 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Redelegations", _thisSuper9).call(_thisSuper9, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "DelegatorValidators", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper10 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorValidators", _thisSuper10).call(_thisSuper10, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "DelegatorValidator", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper11 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DelegatorValidator", _thisSuper11).call(_thisSuper11, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "HistoricalInfo", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper12 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "HistoricalInfo", _thisSuper12).call(_thisSuper12, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Pool", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper13 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Pool", _thisSuper13).call(_thisSuper13, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this50), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper14 = (0, _assertThisInitialized2["default"])(_this50), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper14).call(_thisSuper14, message, metadata, options, callback);
          });
          return _this50;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v1beta.QueryClient = QueryClient;
    })(v1beta1 || (v1beta1 = _staking.v1beta1 || (_staking.v1beta1 = {})));
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
})(cosmos || (exports.cosmos = cosmos = {}));