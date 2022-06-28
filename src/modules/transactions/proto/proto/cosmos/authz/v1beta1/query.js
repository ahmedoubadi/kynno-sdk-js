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

var dependency_2 = _interopRequireWildcard(require("./../../base/query/v1beta1/pagination"));

var dependency_3 = _interopRequireWildcard(require("./authz"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var authz;

  (function (_authz) {
    var v1beta1;

    (function (_v1beta) {
      var QueryGrantsRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryGrantsRequest, _pb_1$Message);

        var _super = _createSuper(QueryGrantsRequest);

        function QueryGrantsRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryGrantsRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("granter" in data && data.granter != undefined) {
              _this.granter = data.granter;
            }

            if ("grantee" in data && data.grantee != undefined) {
              _this.grantee = data.grantee;
            }

            if ("msg_type_url" in data && data.msg_type_url != undefined) {
              _this.msg_type_url = data.msg_type_url;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this.pagination = data.pagination;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryGrantsRequest, [{
          key: "granter",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "grantee",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "msg_type_url",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.granter != null) {
              data.granter = this.granter;
            }

            if (this.grantee != null) {
              data.grantee = this.grantee;
            }

            if (this.msg_type_url != null) {
              data.msg_type_url = this.msg_type_url;
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
            if (typeof this.granter === "string" && this.granter.length) writer.writeString(1, this.granter);
            if (typeof this.grantee === "string" && this.grantee.length) writer.writeString(2, this.grantee);
            if (typeof this.msg_type_url === "string" && this.msg_type_url.length) writer.writeString(3, this.msg_type_url);
            if (this.pagination !== undefined) writer.writeMessage(4, this.pagination, function () {
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
            var message = new QueryGrantsRequest({});

            if (data.granter != null) {
              message.granter = data.granter;
            }

            if (data.grantee != null) {
              message.grantee = data.grantee;
            }

            if (data.msg_type_url != null) {
              message.msg_type_url = data.msg_type_url;
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
                message = new QueryGrantsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.granter = reader.readString();
                  break;

                case 2:
                  message.grantee = reader.readString();
                  break;

                case 3:
                  message.msg_type_url = reader.readString();
                  break;

                case 4:
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
            return QueryGrantsRequest.deserialize(bytes);
          }
        }]);
        return QueryGrantsRequest;
      }(pb_1.Message);

      _v1beta.QueryGrantsRequest = QueryGrantsRequest;

      var QueryGrantsResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryGrantsResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryGrantsResponse);

        function QueryGrantsResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, QueryGrantsResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("grants" in data && data.grants != undefined) {
              _this3.grants = data.grants;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this3.pagination = data.pagination;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(QueryGrantsResponse, [{
          key: "grants",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.authz.v1beta1.Grant, 1);
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

            if (this.grants != null) {
              data.grants = this.grants.map(function (item) {
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
            if (this.grants !== undefined) writer.writeRepeatedMessage(1, this.grants, function (item) {
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
            var message = new QueryGrantsResponse({});

            if (data.grants != null) {
              message.grants = data.grants.map(function (item) {
                return dependency_3.cosmos.authz.v1beta1.Grant.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryGrantsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.grants, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.authz.v1beta1.Grant.deserialize(reader), dependency_3.cosmos.authz.v1beta1.Grant);
                  });
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return QueryGrantsResponse.deserialize(bytes);
          }
        }]);
        return QueryGrantsResponse;
      }(pb_1.Message);

      _v1beta.QueryGrantsResponse = QueryGrantsResponse;
    })(v1beta1 || (v1beta1 = _authz.v1beta1 || (_authz.v1beta1 = {})));
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
})(cosmos || (exports.cosmos = cosmos = {}));