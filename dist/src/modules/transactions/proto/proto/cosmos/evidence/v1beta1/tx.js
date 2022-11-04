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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var evidence;

  (function (_evidence) {
    var v1beta1;

    (function (_v1beta) {
      var MsgSubmitEvidence = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgSubmitEvidence, _pb_1$Message);

        var _super = _createSuper(MsgSubmitEvidence);

        function MsgSubmitEvidence(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgSubmitEvidence);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("submitter" in data && data.submitter != undefined) {
              _this.submitter = data.submitter;
            }

            if ("evidence" in data && data.evidence != undefined) {
              _this.evidence = data.evidence;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgSubmitEvidence, [{
          key: "submitter",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "evidence",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
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

            if (this.submitter != null) {
              data.submitter = this.submitter;
            }

            if (this.evidence != null) {
              data.evidence = this.evidence.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.submitter === "string" && this.submitter.length) writer.writeString(1, this.submitter);
            if (this.evidence !== undefined) writer.writeMessage(2, this.evidence, function () {
              return _this2.evidence.serialize(writer);
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
            var message = new MsgSubmitEvidence({});

            if (data.submitter != null) {
              message.submitter = data.submitter;
            }

            if (data.evidence != null) {
              message.evidence = dependency_2.google.protobuf.Any.fromObject(data.evidence);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgSubmitEvidence();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.submitter = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.evidence, function () {
                    return message.evidence = dependency_2.google.protobuf.Any.deserialize(reader);
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
            return MsgSubmitEvidence.deserialize(bytes);
          }
        }]);
        return MsgSubmitEvidence;
      }(pb_1.Message);

      _v1beta.MsgSubmitEvidence = MsgSubmitEvidence;

      var MsgSubmitEvidenceResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgSubmitEvidenceResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgSubmitEvidenceResponse);

        function MsgSubmitEvidenceResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgSubmitEvidenceResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("hash" in data && data.hash != undefined) {
              _this3.hash = data.hash;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(MsgSubmitEvidenceResponse, [{
          key: "hash",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
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
            if (this.hash !== undefined) writer.writeBytes(4, this.hash);
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
            var message = new MsgSubmitEvidenceResponse({});

            if (data.hash != null) {
              message.hash = data.hash;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgSubmitEvidenceResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 4:
                  message.hash = reader.readBytes();
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
            return MsgSubmitEvidenceResponse.deserialize(bytes);
          }
        }]);
        return MsgSubmitEvidenceResponse;
      }(pb_1.Message);

      _v1beta.MsgSubmitEvidenceResponse = MsgSubmitEvidenceResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        SubmitEvidence: {
          path: "/cosmos.evidence.v1beta1.Msg/SubmitEvidence",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgSubmitEvidence.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgSubmitEvidenceResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super3 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _this4;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this4 = _super3.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "SubmitEvidence", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this4), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "SubmitEvidence", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          return _this4;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v1beta.MsgClient = MsgClient;
    })(v1beta1 || (v1beta1 = _evidence.v1beta1 || (_evidence.v1beta1 = {})));
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
})(cosmos || (exports.cosmos = cosmos = {}));