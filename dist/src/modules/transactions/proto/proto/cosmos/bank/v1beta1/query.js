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

var dependency_5 = _interopRequireWildcard(require("./bank"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var bank;

  (function (_bank) {
    var v1beta1;

    (function (_v1beta) {
      var QueryBalanceRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryBalanceRequest, _pb_1$Message);

        var _super = _createSuper(QueryBalanceRequest);

        function QueryBalanceRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryBalanceRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this.address = data.address;
            }

            if ("denom" in data && data.denom != undefined) {
              _this.denom = data.denom;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryBalanceRequest, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "denom",
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.denom != null) {
              data.denom = this.denom;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (typeof this.denom === "string" && this.denom.length) writer.writeString(2, this.denom);
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
            var message = new QueryBalanceRequest({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.denom != null) {
              message.denom = data.denom;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBalanceRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
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
            return QueryBalanceRequest.deserialize(bytes);
          }
        }]);
        return QueryBalanceRequest;
      }(pb_1.Message);

      _v1beta.QueryBalanceRequest = QueryBalanceRequest;

      var QueryBalanceResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryBalanceResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryBalanceResponse);

        function QueryBalanceResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryBalanceResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("balance" in data && data.balance != undefined) {
              _this2.balance = data.balance;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryBalanceResponse, [{
          key: "balance",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
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

            if (this.balance != null) {
              data.balance = this.balance.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.balance !== undefined) writer.writeMessage(1, this.balance, function () {
              return _this3.balance.serialize(writer);
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
            var message = new QueryBalanceResponse({});

            if (data.balance != null) {
              message.balance = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.balance);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryBalanceResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.balance, function () {
                    return message.balance = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return QueryBalanceResponse.deserialize(bytes);
          }
        }]);
        return QueryBalanceResponse;
      }(pb_1.Message);

      _v1beta.QueryBalanceResponse = QueryBalanceResponse;

      var QueryAllBalancesRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryAllBalancesRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryAllBalancesRequest);

        function QueryAllBalancesRequest(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryAllBalancesRequest);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this4.address = data.address;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this4.pagination = data.pagination;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryAllBalancesRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
            }

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
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
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
            var message = new QueryAllBalancesRequest({});

            if (data.address != null) {
              message.address = data.address;
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
                message = new QueryAllBalancesRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QueryAllBalancesRequest.deserialize(bytes);
          }
        }]);
        return QueryAllBalancesRequest;
      }(pb_1.Message);

      _v1beta.QueryAllBalancesRequest = QueryAllBalancesRequest;

      var QueryAllBalancesResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryAllBalancesResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryAllBalancesResponse);

        function QueryAllBalancesResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryAllBalancesResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("balances" in data && data.balances != undefined) {
              _this6.balances = data.balances;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this6.pagination = data.pagination;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryAllBalancesResponse, [{
          key: "balances",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
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

            if (this.balances != null) {
              data.balances = this.balances.map(function (item) {
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
            if (this.balances !== undefined) writer.writeRepeatedMessage(1, this.balances, function (item) {
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
            var message = new QueryAllBalancesResponse({});

            if (data.balances != null) {
              message.balances = data.balances.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
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
                message = new QueryAllBalancesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.balances, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
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
            return QueryAllBalancesResponse.deserialize(bytes);
          }
        }]);
        return QueryAllBalancesResponse;
      }(pb_1.Message);

      _v1beta.QueryAllBalancesResponse = QueryAllBalancesResponse;

      var QuerySpendableBalancesRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QuerySpendableBalancesRequest, _pb_1$Message5);

        var _super5 = _createSuper(QuerySpendableBalancesRequest);

        function QuerySpendableBalancesRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QuerySpendableBalancesRequest);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this8.address = data.address;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this8.pagination = data.pagination;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QuerySpendableBalancesRequest, [{
          key: "address",
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

            if (this.address != null) {
              data.address = this.address;
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
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
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
            var message = new QuerySpendableBalancesRequest({});

            if (data.address != null) {
              message.address = data.address;
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
                message = new QuerySpendableBalancesRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
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
            return QuerySpendableBalancesRequest.deserialize(bytes);
          }
        }]);
        return QuerySpendableBalancesRequest;
      }(pb_1.Message);

      _v1beta.QuerySpendableBalancesRequest = QuerySpendableBalancesRequest;

      var QuerySpendableBalancesResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QuerySpendableBalancesResponse, _pb_1$Message6);

        var _super6 = _createSuper(QuerySpendableBalancesResponse);

        function QuerySpendableBalancesResponse(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, QuerySpendableBalancesResponse);
          _this10 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("balances" in data && data.balances != undefined) {
              _this10.balances = data.balances;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this10.pagination = data.pagination;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(QuerySpendableBalancesResponse, [{
          key: "balances",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
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

            if (this.balances != null) {
              data.balances = this.balances.map(function (item) {
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
            if (this.balances !== undefined) writer.writeRepeatedMessage(1, this.balances, function (item) {
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
            var message = new QuerySpendableBalancesResponse({});

            if (data.balances != null) {
              message.balances = data.balances.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
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
                message = new QuerySpendableBalancesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.balances, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
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
            return QuerySpendableBalancesResponse.deserialize(bytes);
          }
        }]);
        return QuerySpendableBalancesResponse;
      }(pb_1.Message);

      _v1beta.QuerySpendableBalancesResponse = QuerySpendableBalancesResponse;

      var QueryTotalSupplyRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryTotalSupplyRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryTotalSupplyRequest);

        function QueryTotalSupplyRequest(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, QueryTotalSupplyRequest);
          _this12 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this12.pagination = data.pagination;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(QueryTotalSupplyRequest, [{
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
            var _this13 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
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
            var message = new QueryTotalSupplyRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTotalSupplyRequest();

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
            return QueryTotalSupplyRequest.deserialize(bytes);
          }
        }]);
        return QueryTotalSupplyRequest;
      }(pb_1.Message);

      _v1beta.QueryTotalSupplyRequest = QueryTotalSupplyRequest;

      var QueryTotalSupplyResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryTotalSupplyResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryTotalSupplyResponse);

        function QueryTotalSupplyResponse(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, QueryTotalSupplyResponse);
          _this14 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("supply" in data && data.supply != undefined) {
              _this14.supply = data.supply;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this14.pagination = data.pagination;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(QueryTotalSupplyResponse, [{
          key: "supply",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
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

            if (this.supply != null) {
              data.supply = this.supply.map(function (item) {
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
            if (this.supply !== undefined) writer.writeRepeatedMessage(1, this.supply, function (item) {
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
            var message = new QueryTotalSupplyResponse({});

            if (data.supply != null) {
              message.supply = data.supply.map(function (item) {
                return dependency_4.cosmos.base.v1beta1.Coin.fromObject(item);
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
                message = new QueryTotalSupplyResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.supply, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin);
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
            return QueryTotalSupplyResponse.deserialize(bytes);
          }
        }]);
        return QueryTotalSupplyResponse;
      }(pb_1.Message);

      _v1beta.QueryTotalSupplyResponse = QueryTotalSupplyResponse;

      var QuerySupplyOfRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QuerySupplyOfRequest, _pb_1$Message9);

        var _super9 = _createSuper(QuerySupplyOfRequest);

        function QuerySupplyOfRequest(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, QuerySupplyOfRequest);
          _this16 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this16.denom = data.denom;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(QuerySupplyOfRequest, [{
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
            var message = new QuerySupplyOfRequest({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QuerySupplyOfRequest();

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
            return QuerySupplyOfRequest.deserialize(bytes);
          }
        }]);
        return QuerySupplyOfRequest;
      }(pb_1.Message);

      _v1beta.QuerySupplyOfRequest = QuerySupplyOfRequest;

      var QuerySupplyOfResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QuerySupplyOfResponse, _pb_1$Message10);

        var _super10 = _createSuper(QuerySupplyOfResponse);

        function QuerySupplyOfResponse(data) {
          var _this17;

          (0, _classCallCheck2["default"])(this, QuerySupplyOfResponse);
          _this17 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("amount" in data && data.amount != undefined) {
              _this17.amount = data.amount;
            }
          }

          return _this17;
        }

        (0, _createClass2["default"])(QuerySupplyOfResponse, [{
          key: "amount",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1);
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

            if (this.amount != null) {
              data.amount = this.amount.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this18 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.amount !== undefined) writer.writeMessage(1, this.amount, function () {
              return _this18.amount.serialize(writer);
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
            var message = new QuerySupplyOfResponse({});

            if (data.amount != null) {
              message.amount = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.amount);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QuerySupplyOfResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.amount, function () {
                    return message.amount = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return QuerySupplyOfResponse.deserialize(bytes);
          }
        }]);
        return QuerySupplyOfResponse;
      }(pb_1.Message);

      _v1beta.QuerySupplyOfResponse = QuerySupplyOfResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this19;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this19 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this19;
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

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this20;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this20 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this20.params = data.params;
            }
          }

          return _this20;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.bank.v1beta1.Params, 1);
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
            var _this21 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this21.params.serialize(writer);
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
              message.params = dependency_5.cosmos.bank.v1beta1.Params.fromObject(data.params);
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
                    return message.params = dependency_5.cosmos.bank.v1beta1.Params.deserialize(reader);
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

      var QueryDenomsMetadataRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryDenomsMetadataRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryDenomsMetadataRequest);

        function QueryDenomsMetadataRequest(data) {
          var _this22;

          (0, _classCallCheck2["default"])(this, QueryDenomsMetadataRequest);
          _this22 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pagination" in data && data.pagination != undefined) {
              _this22.pagination = data.pagination;
            }
          }

          return _this22;
        }

        (0, _createClass2["default"])(QueryDenomsMetadataRequest, [{
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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
            if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
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
            var message = new QueryDenomsMetadataRequest({});

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDenomsMetadataRequest();

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
            return QueryDenomsMetadataRequest.deserialize(bytes);
          }
        }]);
        return QueryDenomsMetadataRequest;
      }(pb_1.Message);

      _v1beta.QueryDenomsMetadataRequest = QueryDenomsMetadataRequest;

      var QueryDenomsMetadataResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryDenomsMetadataResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryDenomsMetadataResponse);

        function QueryDenomsMetadataResponse(data) {
          var _this24;

          (0, _classCallCheck2["default"])(this, QueryDenomsMetadataResponse);
          _this24 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("metadatas" in data && data.metadatas != undefined) {
              _this24.metadatas = data.metadatas;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this24.pagination = data.pagination;
            }
          }

          return _this24;
        }

        (0, _createClass2["default"])(QueryDenomsMetadataResponse, [{
          key: "metadatas",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.bank.v1beta1.Metadata, 1);
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

            if (this.metadatas != null) {
              data.metadatas = this.metadatas.map(function (item) {
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
            if (this.metadatas !== undefined) writer.writeRepeatedMessage(1, this.metadatas, function (item) {
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
            var message = new QueryDenomsMetadataResponse({});

            if (data.metadatas != null) {
              message.metadatas = data.metadatas.map(function (item) {
                return dependency_5.cosmos.bank.v1beta1.Metadata.fromObject(item);
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
                message = new QueryDenomsMetadataResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.metadatas, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_5.cosmos.bank.v1beta1.Metadata);
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
            return QueryDenomsMetadataResponse.deserialize(bytes);
          }
        }]);
        return QueryDenomsMetadataResponse;
      }(pb_1.Message);

      _v1beta.QueryDenomsMetadataResponse = QueryDenomsMetadataResponse;

      var QueryDenomMetadataRequest = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(QueryDenomMetadataRequest, _pb_1$Message15);

        var _super15 = _createSuper(QueryDenomMetadataRequest);

        function QueryDenomMetadataRequest(data) {
          var _this26;

          (0, _classCallCheck2["default"])(this, QueryDenomMetadataRequest);
          _this26 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("denom" in data && data.denom != undefined) {
              _this26.denom = data.denom;
            }
          }

          return _this26;
        }

        (0, _createClass2["default"])(QueryDenomMetadataRequest, [{
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
            var message = new QueryDenomMetadataRequest({});

            if (data.denom != null) {
              message.denom = data.denom;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDenomMetadataRequest();

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
            return QueryDenomMetadataRequest.deserialize(bytes);
          }
        }]);
        return QueryDenomMetadataRequest;
      }(pb_1.Message);

      _v1beta.QueryDenomMetadataRequest = QueryDenomMetadataRequest;

      var QueryDenomMetadataResponse = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(QueryDenomMetadataResponse, _pb_1$Message16);

        var _super16 = _createSuper(QueryDenomMetadataResponse);

        function QueryDenomMetadataResponse(data) {
          var _this27;

          (0, _classCallCheck2["default"])(this, QueryDenomMetadataResponse);
          _this27 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("metadata" in data && data.metadata != undefined) {
              _this27.metadata = data.metadata;
            }
          }

          return _this27;
        }

        (0, _createClass2["default"])(QueryDenomMetadataResponse, [{
          key: "metadata",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.cosmos.bank.v1beta1.Metadata, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.metadata != null) {
              data.metadata = this.metadata.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this28 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.metadata !== undefined) writer.writeMessage(1, this.metadata, function () {
              return _this28.metadata.serialize(writer);
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
            var message = new QueryDenomMetadataResponse({});

            if (data.metadata != null) {
              message.metadata = dependency_5.cosmos.bank.v1beta1.Metadata.fromObject(data.metadata);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDenomMetadataResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.metadata, function () {
                    return message.metadata = dependency_5.cosmos.bank.v1beta1.Metadata.deserialize(reader);
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
            return QueryDenomMetadataResponse.deserialize(bytes);
          }
        }]);
        return QueryDenomMetadataResponse;
      }(pb_1.Message);

      _v1beta.QueryDenomMetadataResponse = QueryDenomMetadataResponse;

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        Balance: {
          path: "/cosmos.bank.v1beta1.Query/Balance",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryBalanceRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryBalanceResponse.deserialize(new Uint8Array(bytes));
          }
        },
        AllBalances: {
          path: "/cosmos.bank.v1beta1.Query/AllBalances",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryAllBalancesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryAllBalancesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        SpendableBalances: {
          path: "/cosmos.bank.v1beta1.Query/SpendableBalances",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QuerySpendableBalancesRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QuerySpendableBalancesResponse.deserialize(new Uint8Array(bytes));
          }
        },
        TotalSupply: {
          path: "/cosmos.bank.v1beta1.Query/TotalSupply",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryTotalSupplyRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryTotalSupplyResponse.deserialize(new Uint8Array(bytes));
          }
        },
        SupplyOf: {
          path: "/cosmos.bank.v1beta1.Query/SupplyOf",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QuerySupplyOfRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QuerySupplyOfResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Params: {
          path: "/cosmos.bank.v1beta1.Query/Params",
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
        DenomMetadata: {
          path: "/cosmos.bank.v1beta1.Query/DenomMetadata",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDenomMetadataRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDenomMetadataResponse.deserialize(new Uint8Array(bytes));
          }
        },
        DenomsMetadata: {
          path: "/cosmos.bank.v1beta1.Query/DenomsMetadata",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryDenomsMetadataRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryDenomsMetadataResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super17 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _thisSuper7, _thisSuper8, _this29;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this29 = _super17.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "Balance", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Balance", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "AllBalances", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "AllBalances", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "SpendableBalances", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "SpendableBalances", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "TotalSupply", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "TotalSupply", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "SupplyOf", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "SupplyOf", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "Params", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "Params", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "DenomMetadata", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper7 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DenomMetadata", _thisSuper7).call(_thisSuper7, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this29), "DenomsMetadata", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper8 = (0, _assertThisInitialized2["default"])(_this29), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "DenomsMetadata", _thisSuper8).call(_thisSuper8, message, metadata, options, callback);
          });
          return _this29;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v1beta.QueryClient = QueryClient;
    })(v1beta1 || (v1beta1 = _bank.v1beta1 || (_bank.v1beta1 = {})));
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
})(cosmos || (exports.cosmos = cosmos = {}));