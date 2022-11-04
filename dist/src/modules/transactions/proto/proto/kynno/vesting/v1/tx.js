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

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_4 = _interopRequireWildcard(require("./../../../cosmos/vesting/v1beta1/vesting"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var vesting;

  (function (_vesting) {
    var v1;

    (function (_v) {
      var MsgCreateClawbackVestingAccount = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgCreateClawbackVestingAccount, _pb_1$Message);

        var _super = _createSuper(MsgCreateClawbackVestingAccount);

        function MsgCreateClawbackVestingAccount(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgCreateClawbackVestingAccount);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [4, 5], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("from_address" in data && data.from_address != undefined) {
              _this.from_address = data.from_address;
            }

            if ("to_address" in data && data.to_address != undefined) {
              _this.to_address = data.to_address;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this.start_time = data.start_time;
            }

            if ("lockup_periods" in data && data.lockup_periods != undefined) {
              _this.lockup_periods = data.lockup_periods;
            }

            if ("vesting_periods" in data && data.vesting_periods != undefined) {
              _this.vesting_periods = data.vesting_periods;
            }

            if ("merge" in data && data.merge != undefined) {
              _this.merge = data.merge;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgCreateClawbackVestingAccount, [{
          key: "from_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "to_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "lockup_periods",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.vesting.v1beta1.Period, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "vesting_periods",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.vesting.v1beta1.Period, 5);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
          }
        }, {
          key: "merge",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
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

            if (this.from_address != null) {
              data.from_address = this.from_address;
            }

            if (this.to_address != null) {
              data.to_address = this.to_address;
            }

            if (this.start_time != null) {
              data.start_time = this.start_time.toObject();
            }

            if (this.lockup_periods != null) {
              data.lockup_periods = this.lockup_periods.map(function (item) {
                return item.toObject();
              });
            }

            if (this.vesting_periods != null) {
              data.vesting_periods = this.vesting_periods.map(function (item) {
                return item.toObject();
              });
            }

            if (this.merge != null) {
              data.merge = this.merge;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.from_address === "string" && this.from_address.length) writer.writeString(1, this.from_address);
            if (typeof this.to_address === "string" && this.to_address.length) writer.writeString(2, this.to_address);
            if (this.start_time !== undefined) writer.writeMessage(3, this.start_time, function () {
              return _this2.start_time.serialize(writer);
            });
            if (this.lockup_periods !== undefined) writer.writeRepeatedMessage(4, this.lockup_periods, function (item) {
              return item.serialize(writer);
            });
            if (this.vesting_periods !== undefined) writer.writeRepeatedMessage(5, this.vesting_periods, function (item) {
              return item.serialize(writer);
            });
            if (this.merge !== undefined) writer.writeBool(6, this.merge);
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
            var message = new MsgCreateClawbackVestingAccount({});

            if (data.from_address != null) {
              message.from_address = data.from_address;
            }

            if (data.to_address != null) {
              message.to_address = data.to_address;
            }

            if (data.start_time != null) {
              message.start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.start_time);
            }

            if (data.lockup_periods != null) {
              message.lockup_periods = data.lockup_periods.map(function (item) {
                return dependency_4.cosmos.vesting.v1beta1.Period.fromObject(item);
              });
            }

            if (data.vesting_periods != null) {
              message.vesting_periods = data.vesting_periods.map(function (item) {
                return dependency_4.cosmos.vesting.v1beta1.Period.fromObject(item);
              });
            }

            if (data.merge != null) {
              message.merge = data.merge;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateClawbackVestingAccount();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.from_address = reader.readString();
                  break;

                case 2:
                  message.to_address = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.start_time, function () {
                    return message.start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 4:
                  reader.readMessage(message.lockup_periods, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_4.cosmos.vesting.v1beta1.Period);
                  });
                  break;

                case 5:
                  reader.readMessage(message.vesting_periods, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_4.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_4.cosmos.vesting.v1beta1.Period);
                  });
                  break;

                case 6:
                  message.merge = reader.readBool();
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
            return MsgCreateClawbackVestingAccount.deserialize(bytes);
          }
        }]);
        return MsgCreateClawbackVestingAccount;
      }(pb_1.Message);

      _v.MsgCreateClawbackVestingAccount = MsgCreateClawbackVestingAccount;

      var MsgCreateClawbackVestingAccountResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgCreateClawbackVestingAccountResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgCreateClawbackVestingAccountResponse);

        function MsgCreateClawbackVestingAccountResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgCreateClawbackVestingAccountResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this3;
        }

        (0, _createClass2["default"])(MsgCreateClawbackVestingAccountResponse, [{
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
            var message = new MsgCreateClawbackVestingAccountResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgCreateClawbackVestingAccountResponse();

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
            return MsgCreateClawbackVestingAccountResponse.deserialize(bytes);
          }
        }]);
        return MsgCreateClawbackVestingAccountResponse;
      }(pb_1.Message);

      _v.MsgCreateClawbackVestingAccountResponse = MsgCreateClawbackVestingAccountResponse;

      var MsgClawback = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgClawback, _pb_1$Message3);

        var _super3 = _createSuper(MsgClawback);

        function MsgClawback(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgClawback);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("funder_address" in data && data.funder_address != undefined) {
              _this4.funder_address = data.funder_address;
            }

            if ("account_address" in data && data.account_address != undefined) {
              _this4.account_address = data.account_address;
            }

            if ("dest_address" in data && data.dest_address != undefined) {
              _this4.dest_address = data.dest_address;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(MsgClawback, [{
          key: "funder_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "account_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "dest_address",
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

            if (this.funder_address != null) {
              data.funder_address = this.funder_address;
            }

            if (this.account_address != null) {
              data.account_address = this.account_address;
            }

            if (this.dest_address != null) {
              data.dest_address = this.dest_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.funder_address === "string" && this.funder_address.length) writer.writeString(1, this.funder_address);
            if (typeof this.account_address === "string" && this.account_address.length) writer.writeString(2, this.account_address);
            if (typeof this.dest_address === "string" && this.dest_address.length) writer.writeString(3, this.dest_address);
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
            var message = new MsgClawback({});

            if (data.funder_address != null) {
              message.funder_address = data.funder_address;
            }

            if (data.account_address != null) {
              message.account_address = data.account_address;
            }

            if (data.dest_address != null) {
              message.dest_address = data.dest_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgClawback();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.funder_address = reader.readString();
                  break;

                case 2:
                  message.account_address = reader.readString();
                  break;

                case 3:
                  message.dest_address = reader.readString();
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
            return MsgClawback.deserialize(bytes);
          }
        }]);
        return MsgClawback;
      }(pb_1.Message);

      _v.MsgClawback = MsgClawback;

      var MsgClawbackResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgClawbackResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgClawbackResponse);

        function MsgClawbackResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgClawbackResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this5;
        }

        (0, _createClass2["default"])(MsgClawbackResponse, [{
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
            var message = new MsgClawbackResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgClawbackResponse();

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
            return MsgClawbackResponse.deserialize(bytes);
          }
        }]);
        return MsgClawbackResponse;
      }(pb_1.Message);

      _v.MsgClawbackResponse = MsgClawbackResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        CreateClawbackVestingAccount: {
          path: "/kynno.vesting.v1.Msg/CreateClawbackVestingAccount",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgCreateClawbackVestingAccount.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgCreateClawbackVestingAccountResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Clawback: {
          path: "/kynno.vesting.v1.Msg/Clawback",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgClawback.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgClawbackResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super5 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _this6;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this6 = _super5.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "CreateClawbackVestingAccount", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this6), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "CreateClawbackVestingAccount", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "Clawback", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this6), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "Clawback", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          return _this6;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v.MsgClient = MsgClient;
    })(v1 || (v1 = _vesting.v1 || (_vesting.v1 = {})));
  })(vesting || (vesting = _kynno.vesting || (_kynno.vesting = {})));
})(kynno || (exports.kynno = kynno = {}));