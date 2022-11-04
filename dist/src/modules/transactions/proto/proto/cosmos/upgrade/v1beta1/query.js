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

var dependency_3 = _interopRequireWildcard(require("./upgrade"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var upgrade;

  (function (_upgrade) {
    var v1beta1;

    (function (_v1beta) {
      var QueryCurrentPlanRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryCurrentPlanRequest, _pb_1$Message);

        var _super = _createSuper(QueryCurrentPlanRequest);

        function QueryCurrentPlanRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryCurrentPlanRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this;
        }

        (0, _createClass2["default"])(QueryCurrentPlanRequest, [{
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
            var message = new QueryCurrentPlanRequest({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCurrentPlanRequest();

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
            return QueryCurrentPlanRequest.deserialize(bytes);
          }
        }]);
        return QueryCurrentPlanRequest;
      }(pb_1.Message);

      _v1beta.QueryCurrentPlanRequest = QueryCurrentPlanRequest;

      var QueryCurrentPlanResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryCurrentPlanResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryCurrentPlanResponse);

        function QueryCurrentPlanResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryCurrentPlanResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("plan" in data && data.plan != undefined) {
              _this2.plan = data.plan;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryCurrentPlanResponse, [{
          key: "plan",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.Plan, 1);
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

            if (this.plan != null) {
              data.plan = this.plan.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.plan !== undefined) writer.writeMessage(1, this.plan, function () {
              return _this3.plan.serialize(writer);
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
            var message = new QueryCurrentPlanResponse({});

            if (data.plan != null) {
              message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.fromObject(data.plan);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryCurrentPlanResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.plan, function () {
                    return message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.deserialize(reader);
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
            return QueryCurrentPlanResponse.deserialize(bytes);
          }
        }]);
        return QueryCurrentPlanResponse;
      }(pb_1.Message);

      _v1beta.QueryCurrentPlanResponse = QueryCurrentPlanResponse;

      var QueryAppliedPlanRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryAppliedPlanRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryAppliedPlanRequest);

        function QueryAppliedPlanRequest(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryAppliedPlanRequest);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("name" in data && data.name != undefined) {
              _this4.name = data.name;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryAppliedPlanRequest, [{
          key: "name",
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

            if (this.name != null) {
              data.name = this.name;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
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
            var message = new QueryAppliedPlanRequest({});

            if (data.name != null) {
              message.name = data.name;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAppliedPlanRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.name = reader.readString();
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
            return QueryAppliedPlanRequest.deserialize(bytes);
          }
        }]);
        return QueryAppliedPlanRequest;
      }(pb_1.Message);

      _v1beta.QueryAppliedPlanRequest = QueryAppliedPlanRequest;

      var QueryAppliedPlanResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryAppliedPlanResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryAppliedPlanResponse);

        function QueryAppliedPlanResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, QueryAppliedPlanResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("height" in data && data.height != undefined) {
              _this5.height = data.height;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(QueryAppliedPlanResponse, [{
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
            var message = new QueryAppliedPlanResponse({});

            if (data.height != null) {
              message.height = data.height;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryAppliedPlanResponse();

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
            return QueryAppliedPlanResponse.deserialize(bytes);
          }
        }]);
        return QueryAppliedPlanResponse;
      }(pb_1.Message);

      _v1beta.QueryAppliedPlanResponse = QueryAppliedPlanResponse;

      var QueryUpgradedConsensusStateRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryUpgradedConsensusStateRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryUpgradedConsensusStateRequest);

        function QueryUpgradedConsensusStateRequest(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryUpgradedConsensusStateRequest);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("last_height" in data && data.last_height != undefined) {
              _this6.last_height = data.last_height;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryUpgradedConsensusStateRequest, [{
          key: "last_height",
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

            if (this.last_height != null) {
              data.last_height = this.last_height;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.last_height !== undefined) writer.writeInt64(1, this.last_height);
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

            if (data.last_height != null) {
              message.last_height = data.last_height;
            }

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
                case 1:
                  message.last_height = reader.readInt64();
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
            return QueryUpgradedConsensusStateRequest.deserialize(bytes);
          }
        }]);
        return QueryUpgradedConsensusStateRequest;
      }(pb_1.Message);

      _v1beta.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;

      var QueryUpgradedConsensusStateResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryUpgradedConsensusStateResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryUpgradedConsensusStateResponse);

        function QueryUpgradedConsensusStateResponse(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, QueryUpgradedConsensusStateResponse);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("upgraded_consensus_state" in data && data.upgraded_consensus_state != undefined) {
              _this7.upgraded_consensus_state = data.upgraded_consensus_state;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(QueryUpgradedConsensusStateResponse, [{
          key: "upgraded_consensus_state",
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

            if (this.upgraded_consensus_state != null) {
              data.upgraded_consensus_state = this.upgraded_consensus_state;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.upgraded_consensus_state !== undefined) writer.writeBytes(2, this.upgraded_consensus_state);
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
              message.upgraded_consensus_state = data.upgraded_consensus_state;
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
                case 2:
                  message.upgraded_consensus_state = reader.readBytes();
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

      _v1beta.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;

      var QueryModuleVersionsRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryModuleVersionsRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryModuleVersionsRequest);

        function QueryModuleVersionsRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryModuleVersionsRequest);
          _this8 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("module_name" in data && data.module_name != undefined) {
              _this8.module_name = data.module_name;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryModuleVersionsRequest, [{
          key: "module_name",
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

            if (this.module_name != null) {
              data.module_name = this.module_name;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.module_name === "string" && this.module_name.length) writer.writeString(1, this.module_name);
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
            var message = new QueryModuleVersionsRequest({});

            if (data.module_name != null) {
              message.module_name = data.module_name;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryModuleVersionsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.module_name = reader.readString();
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
            return QueryModuleVersionsRequest.deserialize(bytes);
          }
        }]);
        return QueryModuleVersionsRequest;
      }(pb_1.Message);

      _v1beta.QueryModuleVersionsRequest = QueryModuleVersionsRequest;

      var QueryModuleVersionsResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryModuleVersionsResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryModuleVersionsResponse);

        function QueryModuleVersionsResponse(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, QueryModuleVersionsResponse);
          _this9 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("module_versions" in data && data.module_versions != undefined) {
              _this9.module_versions = data.module_versions;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(QueryModuleVersionsResponse, [{
          key: "module_versions",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.ModuleVersion, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.module_versions != null) {
              data.module_versions = this.module_versions.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.module_versions !== undefined) writer.writeRepeatedMessage(1, this.module_versions, function (item) {
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
            var message = new QueryModuleVersionsResponse({});

            if (data.module_versions != null) {
              message.module_versions = data.module_versions.map(function (item) {
                return dependency_3.cosmos.upgrade.v1beta1.ModuleVersion.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryModuleVersionsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.module_versions, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.upgrade.v1beta1.ModuleVersion.deserialize(reader), dependency_3.cosmos.upgrade.v1beta1.ModuleVersion);
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
            return QueryModuleVersionsResponse.deserialize(bytes);
          }
        }]);
        return QueryModuleVersionsResponse;
      }(pb_1.Message);

      _v1beta.QueryModuleVersionsResponse = QueryModuleVersionsResponse;

      var UnimplementedQueryService = function UnimplementedQueryService() {
        (0, _classCallCheck2["default"])(this, UnimplementedQueryService);
      };

      (0, _defineProperty2["default"])(UnimplementedQueryService, "definition", {
        CurrentPlan: {
          path: "/cosmos.upgrade.v1beta1.Query/CurrentPlan",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryCurrentPlanRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryCurrentPlanResponse.deserialize(new Uint8Array(bytes));
          }
        },
        AppliedPlan: {
          path: "/cosmos.upgrade.v1beta1.Query/AppliedPlan",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryAppliedPlanRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryAppliedPlanResponse.deserialize(new Uint8Array(bytes));
          }
        },
        UpgradedConsensusState: {
          path: "/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryUpgradedConsensusStateRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryUpgradedConsensusStateResponse.deserialize(new Uint8Array(bytes));
          }
        },
        ModuleVersions: {
          path: "/cosmos.upgrade.v1beta1.Query/ModuleVersions",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return QueryModuleVersionsRequest.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return QueryModuleVersionsResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedQueryService = UnimplementedQueryService;

      var QueryClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(QueryClient, _grpc_1$makeGenericCl);

        var _super9 = _createSuper(QueryClient);

        function QueryClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this10;

          (0, _classCallCheck2["default"])(this, QueryClient);
          _this10 = _super9.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "CurrentPlan", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "CurrentPlan", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "AppliedPlan", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "AppliedPlan", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "UpgradedConsensusState", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "UpgradedConsensusState", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "ModuleVersions", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(QueryClient.prototype)), "ModuleVersions", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          return _this10;
        }

        return QueryClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}));

      _v1beta.QueryClient = QueryClient;
    })(v1beta1 || (v1beta1 = _upgrade.v1beta1 || (_upgrade.v1beta1 = {})));
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
})(cosmos || (exports.cosmos = cosmos = {}));