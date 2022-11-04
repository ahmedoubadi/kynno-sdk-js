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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var reflection;

    (function (_reflection) {
      var v1beta1;

      (function (_v1beta) {
        var ListAllInterfacesRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(ListAllInterfacesRequest, _pb_1$Message);

          var _super = _createSuper(ListAllInterfacesRequest);

          function ListAllInterfacesRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, ListAllInterfacesRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this;
          }

          (0, _createClass2["default"])(ListAllInterfacesRequest, [{
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
              var message = new ListAllInterfacesRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ListAllInterfacesRequest();

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
              return ListAllInterfacesRequest.deserialize(bytes);
            }
          }]);
          return ListAllInterfacesRequest;
        }(pb_1.Message);

        _v1beta.ListAllInterfacesRequest = ListAllInterfacesRequest;

        var ListAllInterfacesResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(ListAllInterfacesResponse, _pb_1$Message2);

          var _super2 = _createSuper(ListAllInterfacesResponse);

          function ListAllInterfacesResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, ListAllInterfacesResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("interface_names" in data && data.interface_names != undefined) {
                _this2.interface_names = data.interface_names;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(ListAllInterfacesResponse, [{
            key: "interface_names",
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

              if (this.interface_names != null) {
                data.interface_names = this.interface_names;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.interface_names !== undefined) writer.writeRepeatedString(1, this.interface_names);
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
              var message = new ListAllInterfacesResponse({});

              if (data.interface_names != null) {
                message.interface_names = data.interface_names;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ListAllInterfacesResponse();

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
              return ListAllInterfacesResponse.deserialize(bytes);
            }
          }]);
          return ListAllInterfacesResponse;
        }(pb_1.Message);

        _v1beta.ListAllInterfacesResponse = ListAllInterfacesResponse;

        var ListImplementationsRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(ListImplementationsRequest, _pb_1$Message3);

          var _super3 = _createSuper(ListImplementationsRequest);

          function ListImplementationsRequest(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, ListImplementationsRequest);
            _this3 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("interface_name" in data && data.interface_name != undefined) {
                _this3.interface_name = data.interface_name;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ListImplementationsRequest, [{
            key: "interface_name",
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

              if (this.interface_name != null) {
                data.interface_name = this.interface_name;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.interface_name === "string" && this.interface_name.length) writer.writeString(1, this.interface_name);
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
              var message = new ListImplementationsRequest({});

              if (data.interface_name != null) {
                message.interface_name = data.interface_name;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ListImplementationsRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.interface_name = reader.readString();
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
              return ListImplementationsRequest.deserialize(bytes);
            }
          }]);
          return ListImplementationsRequest;
        }(pb_1.Message);

        _v1beta.ListImplementationsRequest = ListImplementationsRequest;

        var ListImplementationsResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(ListImplementationsResponse, _pb_1$Message4);

          var _super4 = _createSuper(ListImplementationsResponse);

          function ListImplementationsResponse(data) {
            var _this4;

            (0, _classCallCheck2["default"])(this, ListImplementationsResponse);
            _this4 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("implementation_message_names" in data && data.implementation_message_names != undefined) {
                _this4.implementation_message_names = data.implementation_message_names;
              }
            }

            return _this4;
          }

          (0, _createClass2["default"])(ListImplementationsResponse, [{
            key: "implementation_message_names",
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

              if (this.implementation_message_names != null) {
                data.implementation_message_names = this.implementation_message_names;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.implementation_message_names !== undefined) writer.writeRepeatedString(1, this.implementation_message_names);
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
              var message = new ListImplementationsResponse({});

              if (data.implementation_message_names != null) {
                message.implementation_message_names = data.implementation_message_names;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ListImplementationsResponse();

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
              return ListImplementationsResponse.deserialize(bytes);
            }
          }]);
          return ListImplementationsResponse;
        }(pb_1.Message);

        _v1beta.ListImplementationsResponse = ListImplementationsResponse;

        var UnimplementedReflectionServiceService = function UnimplementedReflectionServiceService() {
          (0, _classCallCheck2["default"])(this, UnimplementedReflectionServiceService);
        };

        (0, _defineProperty2["default"])(UnimplementedReflectionServiceService, "definition", {
          ListAllInterfaces: {
            path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return ListAllInterfacesRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return ListAllInterfacesResponse.deserialize(new Uint8Array(bytes));
            }
          },
          ListImplementations: {
            path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return ListImplementationsRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return ListImplementationsResponse.deserialize(new Uint8Array(bytes));
            }
          }
        });
        _v1beta.UnimplementedReflectionServiceService = UnimplementedReflectionServiceService;

        var ReflectionServiceClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
          (0, _inherits2["default"])(ReflectionServiceClient, _grpc_1$makeGenericCl);

          var _super5 = _createSuper(ReflectionServiceClient);

          function ReflectionServiceClient(address, credentials, _options) {
            var _thisSuper, _thisSuper2, _this5;

            (0, _classCallCheck2["default"])(this, ReflectionServiceClient);
            _this5 = _super5.call(this, address, credentials, _options);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "ListAllInterfaces", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this5), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "ListAllInterfaces", _thisSuper).call(_thisSuper, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "ListImplementations", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this5), (0, _getPrototypeOf2["default"])(ReflectionServiceClient.prototype)), "ListImplementations", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
            });
            return _this5;
          }

          return ReflectionServiceClient;
        }(grpc_1.makeGenericClientConstructor(UnimplementedReflectionServiceService.definition, "ReflectionService", {}));

        _v1beta.ReflectionServiceClient = ReflectionServiceClient;
      })(v1beta1 || (v1beta1 = _reflection.v1beta1 || (_reflection.v1beta1 = {})));
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));