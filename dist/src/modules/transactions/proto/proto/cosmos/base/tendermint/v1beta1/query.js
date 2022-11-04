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

var dependency_2 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var dependency_4 = _interopRequireWildcard(require("./../../../../tendermint/p2p/types"));

var dependency_5 = _interopRequireWildcard(require("./../../../../tendermint/types/block"));

var dependency_6 = _interopRequireWildcard(require("./../../../../tendermint/types/types"));

var dependency_7 = _interopRequireWildcard(require("./../../query/v1beta1/pagination"));

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
    var tendermint;

    (function (_tendermint) {
      var v1beta1;

      (function (_v1beta) {
        var GetValidatorSetByHeightRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(GetValidatorSetByHeightRequest, _pb_1$Message);

          var _super = _createSuper(GetValidatorSetByHeightRequest);

          function GetValidatorSetByHeightRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, GetValidatorSetByHeightRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("height" in data && data.height != undefined) {
                _this.height = data.height;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this.pagination = data.pagination;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(GetValidatorSetByHeightRequest, [{
            key: "height",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_7.cosmos.base.query.v1beta1.PageRequest, 2);
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

              if (this.height != null) {
                data.height = this.height;
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
              if (this.height !== undefined) writer.writeInt64(1, this.height);
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
              var message = new GetValidatorSetByHeightRequest({});

              if (data.height != null) {
                message.height = data.height;
              }

              if (data.pagination != null) {
                message.pagination = dependency_7.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetValidatorSetByHeightRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.height = reader.readInt64();
                    break;

                  case 2:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_7.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
              return GetValidatorSetByHeightRequest.deserialize(bytes);
            }
          }]);
          return GetValidatorSetByHeightRequest;
        }(pb_1.Message);

        _v1beta.GetValidatorSetByHeightRequest = GetValidatorSetByHeightRequest;

        var GetValidatorSetByHeightResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(GetValidatorSetByHeightResponse, _pb_1$Message2);

          var _super2 = _createSuper(GetValidatorSetByHeightResponse);

          function GetValidatorSetByHeightResponse(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, GetValidatorSetByHeightResponse);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("block_height" in data && data.block_height != undefined) {
                _this3.block_height = data.block_height;
              }

              if ("validators" in data && data.validators != undefined) {
                _this3.validators = data.validators;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this3.pagination = data.pagination;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(GetValidatorSetByHeightResponse, [{
            key: "block_height",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "validators",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Validator, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_7.cosmos.base.query.v1beta1.PageResponse, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.block_height != null) {
                data.block_height = this.block_height;
              }

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
              if (this.block_height !== undefined) writer.writeInt64(1, this.block_height);
              if (this.validators !== undefined) writer.writeRepeatedMessage(2, this.validators, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(3, this.pagination, function () {
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
              var message = new GetValidatorSetByHeightResponse({});

              if (data.block_height != null) {
                message.block_height = data.block_height;
              }

              if (data.validators != null) {
                message.validators = data.validators.map(function (item) {
                  return Validator.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_7.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetValidatorSetByHeightResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.block_height = reader.readInt64();
                    break;

                  case 2:
                    reader.readMessage(message.validators, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, Validator.deserialize(reader), Validator);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_7.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
              return GetValidatorSetByHeightResponse.deserialize(bytes);
            }
          }]);
          return GetValidatorSetByHeightResponse;
        }(pb_1.Message);

        _v1beta.GetValidatorSetByHeightResponse = GetValidatorSetByHeightResponse;

        var GetLatestValidatorSetRequest = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(GetLatestValidatorSetRequest, _pb_1$Message3);

          var _super3 = _createSuper(GetLatestValidatorSetRequest);

          function GetLatestValidatorSetRequest(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, GetLatestValidatorSetRequest);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("pagination" in data && data.pagination != undefined) {
                _this5.pagination = data.pagination;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(GetLatestValidatorSetRequest, [{
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_7.cosmos.base.query.v1beta1.PageRequest, 1);
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

              if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this6 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.pagination !== undefined) writer.writeMessage(1, this.pagination, function () {
                return _this6.pagination.serialize(writer);
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
              var message = new GetLatestValidatorSetRequest({});

              if (data.pagination != null) {
                message.pagination = dependency_7.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetLatestValidatorSetRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_7.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
              return GetLatestValidatorSetRequest.deserialize(bytes);
            }
          }]);
          return GetLatestValidatorSetRequest;
        }(pb_1.Message);

        _v1beta.GetLatestValidatorSetRequest = GetLatestValidatorSetRequest;

        var GetLatestValidatorSetResponse = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(GetLatestValidatorSetResponse, _pb_1$Message4);

          var _super4 = _createSuper(GetLatestValidatorSetResponse);

          function GetLatestValidatorSetResponse(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, GetLatestValidatorSetResponse);
            _this7 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("block_height" in data && data.block_height != undefined) {
                _this7.block_height = data.block_height;
              }

              if ("validators" in data && data.validators != undefined) {
                _this7.validators = data.validators;
              }

              if ("pagination" in data && data.pagination != undefined) {
                _this7.pagination = data.pagination;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(GetLatestValidatorSetResponse, [{
            key: "block_height",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "validators",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Validator, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
            }
          }, {
            key: "pagination",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_7.cosmos.base.query.v1beta1.PageResponse, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
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

              if (this.block_height != null) {
                data.block_height = this.block_height;
              }

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
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.block_height !== undefined) writer.writeInt64(1, this.block_height);
              if (this.validators !== undefined) writer.writeRepeatedMessage(2, this.validators, function (item) {
                return item.serialize(writer);
              });
              if (this.pagination !== undefined) writer.writeMessage(3, this.pagination, function () {
                return _this8.pagination.serialize(writer);
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
              var message = new GetLatestValidatorSetResponse({});

              if (data.block_height != null) {
                message.block_height = data.block_height;
              }

              if (data.validators != null) {
                message.validators = data.validators.map(function (item) {
                  return Validator.fromObject(item);
                });
              }

              if (data.pagination != null) {
                message.pagination = dependency_7.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetLatestValidatorSetResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.block_height = reader.readInt64();
                    break;

                  case 2:
                    reader.readMessage(message.validators, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, Validator.deserialize(reader), Validator);
                    });
                    break;

                  case 3:
                    reader.readMessage(message.pagination, function () {
                      return message.pagination = dependency_7.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
              return GetLatestValidatorSetResponse.deserialize(bytes);
            }
          }]);
          return GetLatestValidatorSetResponse;
        }(pb_1.Message);

        _v1beta.GetLatestValidatorSetResponse = GetLatestValidatorSetResponse;

        var Validator = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(Validator, _pb_1$Message5);

          var _super5 = _createSuper(Validator);

          function Validator(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, Validator);
            _this9 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("address" in data && data.address != undefined) {
                _this9.address = data.address;
              }

              if ("pub_key" in data && data.pub_key != undefined) {
                _this9.pub_key = data.pub_key;
              }

              if ("voting_power" in data && data.voting_power != undefined) {
                _this9.voting_power = data.voting_power;
              }

              if ("proposer_priority" in data && data.proposer_priority != undefined) {
                _this9.proposer_priority = data.proposer_priority;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(Validator, [{
            key: "address",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "pub_key",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "voting_power",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "proposer_priority",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
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

              if (this.address != null) {
                data.address = this.address;
              }

              if (this.pub_key != null) {
                data.pub_key = this.pub_key.toObject();
              }

              if (this.voting_power != null) {
                data.voting_power = this.voting_power;
              }

              if (this.proposer_priority != null) {
                data.proposer_priority = this.proposer_priority;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this10 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
              if (this.pub_key !== undefined) writer.writeMessage(2, this.pub_key, function () {
                return _this10.pub_key.serialize(writer);
              });
              if (this.voting_power !== undefined) writer.writeInt64(3, this.voting_power);
              if (this.proposer_priority !== undefined) writer.writeInt64(4, this.proposer_priority);
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
              var message = new Validator({});

              if (data.address != null) {
                message.address = data.address;
              }

              if (data.pub_key != null) {
                message.pub_key = dependency_2.google.protobuf.Any.fromObject(data.pub_key);
              }

              if (data.voting_power != null) {
                message.voting_power = data.voting_power;
              }

              if (data.proposer_priority != null) {
                message.proposer_priority = data.proposer_priority;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Validator();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.address = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.pub_key, function () {
                      return message.pub_key = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 3:
                    message.voting_power = reader.readInt64();
                    break;

                  case 4:
                    message.proposer_priority = reader.readInt64();
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
              return Validator.deserialize(bytes);
            }
          }]);
          return Validator;
        }(pb_1.Message);

        _v1beta.Validator = Validator;

        var GetBlockByHeightRequest = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(GetBlockByHeightRequest, _pb_1$Message6);

          var _super6 = _createSuper(GetBlockByHeightRequest);

          function GetBlockByHeightRequest(data) {
            var _this11;

            (0, _classCallCheck2["default"])(this, GetBlockByHeightRequest);
            _this11 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("height" in data && data.height != undefined) {
                _this11.height = data.height;
              }
            }

            return _this11;
          }

          (0, _createClass2["default"])(GetBlockByHeightRequest, [{
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
              var message = new GetBlockByHeightRequest({});

              if (data.height != null) {
                message.height = data.height;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetBlockByHeightRequest();

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
              return GetBlockByHeightRequest.deserialize(bytes);
            }
          }]);
          return GetBlockByHeightRequest;
        }(pb_1.Message);

        _v1beta.GetBlockByHeightRequest = GetBlockByHeightRequest;

        var GetBlockByHeightResponse = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(GetBlockByHeightResponse, _pb_1$Message7);

          var _super7 = _createSuper(GetBlockByHeightResponse);

          function GetBlockByHeightResponse(data) {
            var _this12;

            (0, _classCallCheck2["default"])(this, GetBlockByHeightResponse);
            _this12 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("block_id" in data && data.block_id != undefined) {
                _this12.block_id = data.block_id;
              }

              if ("block" in data && data.block != undefined) {
                _this12.block = data.block;
              }
            }

            return _this12;
          }

          (0, _createClass2["default"])(GetBlockByHeightResponse, [{
            key: "block_id",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.tendermint.types.BlockID, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "block",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_5.tendermint.types.Block, 2);
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

              if (this.block_id != null) {
                data.block_id = this.block_id.toObject();
              }

              if (this.block != null) {
                data.block = this.block.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this13 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.block_id !== undefined) writer.writeMessage(1, this.block_id, function () {
                return _this13.block_id.serialize(writer);
              });
              if (this.block !== undefined) writer.writeMessage(2, this.block, function () {
                return _this13.block.serialize(writer);
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
              var message = new GetBlockByHeightResponse({});

              if (data.block_id != null) {
                message.block_id = dependency_6.tendermint.types.BlockID.fromObject(data.block_id);
              }

              if (data.block != null) {
                message.block = dependency_5.tendermint.types.Block.fromObject(data.block);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetBlockByHeightResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.block_id, function () {
                      return message.block_id = dependency_6.tendermint.types.BlockID.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.block, function () {
                      return message.block = dependency_5.tendermint.types.Block.deserialize(reader);
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
              return GetBlockByHeightResponse.deserialize(bytes);
            }
          }]);
          return GetBlockByHeightResponse;
        }(pb_1.Message);

        _v1beta.GetBlockByHeightResponse = GetBlockByHeightResponse;

        var GetLatestBlockRequest = /*#__PURE__*/function (_pb_1$Message8) {
          (0, _inherits2["default"])(GetLatestBlockRequest, _pb_1$Message8);

          var _super8 = _createSuper(GetLatestBlockRequest);

          function GetLatestBlockRequest(data) {
            var _this14;

            (0, _classCallCheck2["default"])(this, GetLatestBlockRequest);
            _this14 = _super8.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this14;
          }

          (0, _createClass2["default"])(GetLatestBlockRequest, [{
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
              var message = new GetLatestBlockRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetLatestBlockRequest();

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
              return GetLatestBlockRequest.deserialize(bytes);
            }
          }]);
          return GetLatestBlockRequest;
        }(pb_1.Message);

        _v1beta.GetLatestBlockRequest = GetLatestBlockRequest;

        var GetLatestBlockResponse = /*#__PURE__*/function (_pb_1$Message9) {
          (0, _inherits2["default"])(GetLatestBlockResponse, _pb_1$Message9);

          var _super9 = _createSuper(GetLatestBlockResponse);

          function GetLatestBlockResponse(data) {
            var _this15;

            (0, _classCallCheck2["default"])(this, GetLatestBlockResponse);
            _this15 = _super9.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("block_id" in data && data.block_id != undefined) {
                _this15.block_id = data.block_id;
              }

              if ("block" in data && data.block != undefined) {
                _this15.block = data.block;
              }
            }

            return _this15;
          }

          (0, _createClass2["default"])(GetLatestBlockResponse, [{
            key: "block_id",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_6.tendermint.types.BlockID, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "block",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_5.tendermint.types.Block, 2);
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

              if (this.block_id != null) {
                data.block_id = this.block_id.toObject();
              }

              if (this.block != null) {
                data.block = this.block.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this16 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.block_id !== undefined) writer.writeMessage(1, this.block_id, function () {
                return _this16.block_id.serialize(writer);
              });
              if (this.block !== undefined) writer.writeMessage(2, this.block, function () {
                return _this16.block.serialize(writer);
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
              var message = new GetLatestBlockResponse({});

              if (data.block_id != null) {
                message.block_id = dependency_6.tendermint.types.BlockID.fromObject(data.block_id);
              }

              if (data.block != null) {
                message.block = dependency_5.tendermint.types.Block.fromObject(data.block);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetLatestBlockResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.block_id, function () {
                      return message.block_id = dependency_6.tendermint.types.BlockID.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.block, function () {
                      return message.block = dependency_5.tendermint.types.Block.deserialize(reader);
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
              return GetLatestBlockResponse.deserialize(bytes);
            }
          }]);
          return GetLatestBlockResponse;
        }(pb_1.Message);

        _v1beta.GetLatestBlockResponse = GetLatestBlockResponse;

        var GetSyncingRequest = /*#__PURE__*/function (_pb_1$Message10) {
          (0, _inherits2["default"])(GetSyncingRequest, _pb_1$Message10);

          var _super10 = _createSuper(GetSyncingRequest);

          function GetSyncingRequest(data) {
            var _this17;

            (0, _classCallCheck2["default"])(this, GetSyncingRequest);
            _this17 = _super10.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this17;
          }

          (0, _createClass2["default"])(GetSyncingRequest, [{
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
              var message = new GetSyncingRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetSyncingRequest();

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
              return GetSyncingRequest.deserialize(bytes);
            }
          }]);
          return GetSyncingRequest;
        }(pb_1.Message);

        _v1beta.GetSyncingRequest = GetSyncingRequest;

        var GetSyncingResponse = /*#__PURE__*/function (_pb_1$Message11) {
          (0, _inherits2["default"])(GetSyncingResponse, _pb_1$Message11);

          var _super11 = _createSuper(GetSyncingResponse);

          function GetSyncingResponse(data) {
            var _this18;

            (0, _classCallCheck2["default"])(this, GetSyncingResponse);
            _this18 = _super11.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("syncing" in data && data.syncing != undefined) {
                _this18.syncing = data.syncing;
              }
            }

            return _this18;
          }

          (0, _createClass2["default"])(GetSyncingResponse, [{
            key: "syncing",
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

              if (this.syncing != null) {
                data.syncing = this.syncing;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.syncing !== undefined) writer.writeBool(1, this.syncing);
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
              var message = new GetSyncingResponse({});

              if (data.syncing != null) {
                message.syncing = data.syncing;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetSyncingResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.syncing = reader.readBool();
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
              return GetSyncingResponse.deserialize(bytes);
            }
          }]);
          return GetSyncingResponse;
        }(pb_1.Message);

        _v1beta.GetSyncingResponse = GetSyncingResponse;

        var GetNodeInfoRequest = /*#__PURE__*/function (_pb_1$Message12) {
          (0, _inherits2["default"])(GetNodeInfoRequest, _pb_1$Message12);

          var _super12 = _createSuper(GetNodeInfoRequest);

          function GetNodeInfoRequest(data) {
            var _this19;

            (0, _classCallCheck2["default"])(this, GetNodeInfoRequest);
            _this19 = _super12.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

            return _this19;
          }

          (0, _createClass2["default"])(GetNodeInfoRequest, [{
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
              var message = new GetNodeInfoRequest({});
              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetNodeInfoRequest();

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
              return GetNodeInfoRequest.deserialize(bytes);
            }
          }]);
          return GetNodeInfoRequest;
        }(pb_1.Message);

        _v1beta.GetNodeInfoRequest = GetNodeInfoRequest;

        var GetNodeInfoResponse = /*#__PURE__*/function (_pb_1$Message13) {
          (0, _inherits2["default"])(GetNodeInfoResponse, _pb_1$Message13);

          var _super13 = _createSuper(GetNodeInfoResponse);

          function GetNodeInfoResponse(data) {
            var _this20;

            (0, _classCallCheck2["default"])(this, GetNodeInfoResponse);
            _this20 = _super13.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("default_node_info" in data && data.default_node_info != undefined) {
                _this20.default_node_info = data.default_node_info;
              }

              if ("application_version" in data && data.application_version != undefined) {
                _this20.application_version = data.application_version;
              }
            }

            return _this20;
          }

          (0, _createClass2["default"])(GetNodeInfoResponse, [{
            key: "default_node_info",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_4.tendermint.p2p.DefaultNodeInfo, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "application_version",
            get: function get() {
              return pb_1.Message.getWrapperField(this, VersionInfo, 2);
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

              if (this.default_node_info != null) {
                data.default_node_info = this.default_node_info.toObject();
              }

              if (this.application_version != null) {
                data.application_version = this.application_version.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this21 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.default_node_info !== undefined) writer.writeMessage(1, this.default_node_info, function () {
                return _this21.default_node_info.serialize(writer);
              });
              if (this.application_version !== undefined) writer.writeMessage(2, this.application_version, function () {
                return _this21.application_version.serialize(writer);
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
              var message = new GetNodeInfoResponse({});

              if (data.default_node_info != null) {
                message.default_node_info = dependency_4.tendermint.p2p.DefaultNodeInfo.fromObject(data.default_node_info);
              }

              if (data.application_version != null) {
                message.application_version = VersionInfo.fromObject(data.application_version);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new GetNodeInfoResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.default_node_info, function () {
                      return message.default_node_info = dependency_4.tendermint.p2p.DefaultNodeInfo.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.application_version, function () {
                      return message.application_version = VersionInfo.deserialize(reader);
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
              return GetNodeInfoResponse.deserialize(bytes);
            }
          }]);
          return GetNodeInfoResponse;
        }(pb_1.Message);

        _v1beta.GetNodeInfoResponse = GetNodeInfoResponse;

        var VersionInfo = /*#__PURE__*/function (_pb_1$Message14) {
          (0, _inherits2["default"])(VersionInfo, _pb_1$Message14);

          var _super14 = _createSuper(VersionInfo);

          function VersionInfo(data) {
            var _this22;

            (0, _classCallCheck2["default"])(this, VersionInfo);
            _this22 = _super14.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this22), Array.isArray(data) ? data : [], 0, -1, [7], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("name" in data && data.name != undefined) {
                _this22.name = data.name;
              }

              if ("app_name" in data && data.app_name != undefined) {
                _this22.app_name = data.app_name;
              }

              if ("version" in data && data.version != undefined) {
                _this22.version = data.version;
              }

              if ("git_commit" in data && data.git_commit != undefined) {
                _this22.git_commit = data.git_commit;
              }

              if ("build_tags" in data && data.build_tags != undefined) {
                _this22.build_tags = data.build_tags;
              }

              if ("go_version" in data && data.go_version != undefined) {
                _this22.go_version = data.go_version;
              }

              if ("build_deps" in data && data.build_deps != undefined) {
                _this22.build_deps = data.build_deps;
              }

              if ("cosmos_sdk_version" in data && data.cosmos_sdk_version != undefined) {
                _this22.cosmos_sdk_version = data.cosmos_sdk_version;
              }
            }

            return _this22;
          }

          (0, _createClass2["default"])(VersionInfo, [{
            key: "name",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "app_name",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "git_commit",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "build_tags",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "go_version",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "build_deps",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, Module, 7);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 7, value);
            }
          }, {
            key: "cosmos_sdk_version",
            get: function get() {
              return pb_1.Message.getField(this, 8);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 8, value);
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

              if (this.name != null) {
                data.name = this.name;
              }

              if (this.app_name != null) {
                data.app_name = this.app_name;
              }

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.git_commit != null) {
                data.git_commit = this.git_commit;
              }

              if (this.build_tags != null) {
                data.build_tags = this.build_tags;
              }

              if (this.go_version != null) {
                data.go_version = this.go_version;
              }

              if (this.build_deps != null) {
                data.build_deps = this.build_deps.map(function (item) {
                  return item.toObject();
                });
              }

              if (this.cosmos_sdk_version != null) {
                data.cosmos_sdk_version = this.cosmos_sdk_version;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
              if (typeof this.app_name === "string" && this.app_name.length) writer.writeString(2, this.app_name);
              if (typeof this.version === "string" && this.version.length) writer.writeString(3, this.version);
              if (typeof this.git_commit === "string" && this.git_commit.length) writer.writeString(4, this.git_commit);
              if (typeof this.build_tags === "string" && this.build_tags.length) writer.writeString(5, this.build_tags);
              if (typeof this.go_version === "string" && this.go_version.length) writer.writeString(6, this.go_version);
              if (this.build_deps !== undefined) writer.writeRepeatedMessage(7, this.build_deps, function (item) {
                return item.serialize(writer);
              });
              if (typeof this.cosmos_sdk_version === "string" && this.cosmos_sdk_version.length) writer.writeString(8, this.cosmos_sdk_version);
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
              var message = new VersionInfo({});

              if (data.name != null) {
                message.name = data.name;
              }

              if (data.app_name != null) {
                message.app_name = data.app_name;
              }

              if (data.version != null) {
                message.version = data.version;
              }

              if (data.git_commit != null) {
                message.git_commit = data.git_commit;
              }

              if (data.build_tags != null) {
                message.build_tags = data.build_tags;
              }

              if (data.go_version != null) {
                message.go_version = data.go_version;
              }

              if (data.build_deps != null) {
                message.build_deps = data.build_deps.map(function (item) {
                  return Module.fromObject(item);
                });
              }

              if (data.cosmos_sdk_version != null) {
                message.cosmos_sdk_version = data.cosmos_sdk_version;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new VersionInfo();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.name = reader.readString();
                    break;

                  case 2:
                    message.app_name = reader.readString();
                    break;

                  case 3:
                    message.version = reader.readString();
                    break;

                  case 4:
                    message.git_commit = reader.readString();
                    break;

                  case 5:
                    message.build_tags = reader.readString();
                    break;

                  case 6:
                    message.go_version = reader.readString();
                    break;

                  case 7:
                    reader.readMessage(message.build_deps, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 7, Module.deserialize(reader), Module);
                    });
                    break;

                  case 8:
                    message.cosmos_sdk_version = reader.readString();
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
              return VersionInfo.deserialize(bytes);
            }
          }]);
          return VersionInfo;
        }(pb_1.Message);

        _v1beta.VersionInfo = VersionInfo;

        var Module = /*#__PURE__*/function (_pb_1$Message15) {
          (0, _inherits2["default"])(Module, _pb_1$Message15);

          var _super15 = _createSuper(Module);

          function Module(data) {
            var _this23;

            (0, _classCallCheck2["default"])(this, Module);
            _this23 = _super15.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("path" in data && data.path != undefined) {
                _this23.path = data.path;
              }

              if ("version" in data && data.version != undefined) {
                _this23.version = data.version;
              }

              if ("sum" in data && data.sum != undefined) {
                _this23.sum = data.sum;
              }
            }

            return _this23;
          }

          (0, _createClass2["default"])(Module, [{
            key: "path",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "sum",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.path != null) {
                data.path = this.path;
              }

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.sum != null) {
                data.sum = this.sum;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.path === "string" && this.path.length) writer.writeString(1, this.path);
              if (typeof this.version === "string" && this.version.length) writer.writeString(2, this.version);
              if (typeof this.sum === "string" && this.sum.length) writer.writeString(3, this.sum);
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
              var message = new Module({});

              if (data.path != null) {
                message.path = data.path;
              }

              if (data.version != null) {
                message.version = data.version;
              }

              if (data.sum != null) {
                message.sum = data.sum;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Module();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.path = reader.readString();
                    break;

                  case 2:
                    message.version = reader.readString();
                    break;

                  case 3:
                    message.sum = reader.readString();
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
              return Module.deserialize(bytes);
            }
          }]);
          return Module;
        }(pb_1.Message);

        _v1beta.Module = Module;

        var UnimplementedServiceService = function UnimplementedServiceService() {
          (0, _classCallCheck2["default"])(this, UnimplementedServiceService);
        };

        (0, _defineProperty2["default"])(UnimplementedServiceService, "definition", {
          GetNodeInfo: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetNodeInfoRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetNodeInfoResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetSyncing: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetSyncing",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetSyncingRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetSyncingResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetLatestBlock: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetLatestBlockRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetLatestBlockResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetBlockByHeight: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetBlockByHeightRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetBlockByHeightResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetLatestValidatorSet: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetLatestValidatorSetRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetLatestValidatorSetResponse.deserialize(new Uint8Array(bytes));
            }
          },
          GetValidatorSetByHeight: {
            path: "/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight",
            requestStream: false,
            responseStream: false,
            requestSerialize: function requestSerialize(message) {
              return Buffer.from(message.serialize());
            },
            requestDeserialize: function requestDeserialize(bytes) {
              return GetValidatorSetByHeightRequest.deserialize(new Uint8Array(bytes));
            },
            responseSerialize: function responseSerialize(message) {
              return Buffer.from(message.serialize());
            },
            responseDeserialize: function responseDeserialize(bytes) {
              return GetValidatorSetByHeightResponse.deserialize(new Uint8Array(bytes));
            }
          }
        });
        _v1beta.UnimplementedServiceService = UnimplementedServiceService;

        var ServiceClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
          (0, _inherits2["default"])(ServiceClient, _grpc_1$makeGenericCl);

          var _super16 = _createSuper(ServiceClient);

          function ServiceClient(address, credentials, _options) {
            var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _thisSuper5, _thisSuper6, _this24;

            (0, _classCallCheck2["default"])(this, ServiceClient);
            _this24 = _super16.call(this, address, credentials, _options);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetNodeInfo", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetNodeInfo", _thisSuper).call(_thisSuper, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetSyncing", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetSyncing", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetLatestBlock", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetLatestBlock", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetBlockByHeight", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetBlockByHeight", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetLatestValidatorSet", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper5 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetLatestValidatorSet", _thisSuper5).call(_thisSuper5, message, metadata, options, callback);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this24), "GetValidatorSetByHeight", function (message, metadata, options, callback) {
              return (0, _get2["default"])((_thisSuper6 = (0, _assertThisInitialized2["default"])(_this24), (0, _getPrototypeOf2["default"])(ServiceClient.prototype)), "GetValidatorSetByHeight", _thisSuper6).call(_thisSuper6, message, metadata, options, callback);
            });
            return _this24;
          }

          return ServiceClient;
        }(grpc_1.makeGenericClientConstructor(UnimplementedServiceService.definition, "Service", {}));

        _v1beta.ServiceClient = ServiceClient;
      })(v1beta1 || (v1beta1 = _tendermint.v1beta1 || (_tendermint.v1beta1 = {})));
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));