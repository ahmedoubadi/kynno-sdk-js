"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_3 = _interopRequireWildcard(require("./../../../cosmos/base/v1beta1/coin"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var incentives;

  (function (_incentives) {
    var v1;

    (function (_v) {
      var Incentive = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Incentive, _pb_1$Message);

        var _super = _createSuper(Incentive);

        function Incentive(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Incentive);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract" in data && data.contract != undefined) {
              _this.contract = data.contract;
            }

            if ("allocations" in data && data.allocations != undefined) {
              _this.allocations = data.allocations;
            }

            if ("epochs" in data && data.epochs != undefined) {
              _this.epochs = data.epochs;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this.start_time = data.start_time;
            }

            if ("total_gas" in data && data.total_gas != undefined) {
              _this.total_gas = data.total_gas;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Incentive, [{
          key: "contract",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "allocations",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "epochs",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
          }
        }, {
          key: "total_gas",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
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

            if (this.contract != null) {
              data.contract = this.contract;
            }

            if (this.allocations != null) {
              data.allocations = this.allocations.map(function (item) {
                return item.toObject();
              });
            }

            if (this.epochs != null) {
              data.epochs = this.epochs;
            }

            if (this.start_time != null) {
              data.start_time = this.start_time.toObject();
            }

            if (this.total_gas != null) {
              data.total_gas = this.total_gas;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(1, this.contract);
            if (this.allocations !== undefined) writer.writeRepeatedMessage(2, this.allocations, function (item) {
              return item.serialize(writer);
            });
            if (this.epochs !== undefined) writer.writeUint32(3, this.epochs);
            if (this.start_time !== undefined) writer.writeMessage(4, this.start_time, function () {
              return _this2.start_time.serialize(writer);
            });
            if (this.total_gas !== undefined) writer.writeUint64(5, this.total_gas);
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
            var message = new Incentive({});

            if (data.contract != null) {
              message.contract = data.contract;
            }

            if (data.allocations != null) {
              message.allocations = data.allocations.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            if (data.epochs != null) {
              message.epochs = data.epochs;
            }

            if (data.start_time != null) {
              message.start_time = dependency_2.google.protobuf.Timestamp.fromObject(data.start_time);
            }

            if (data.total_gas != null) {
              message.total_gas = data.total_gas;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Incentive();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.allocations, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_3.cosmos.base.v1beta1.DecCoin);
                  });
                  break;

                case 3:
                  message.epochs = reader.readUint32();
                  break;

                case 4:
                  reader.readMessage(message.start_time, function () {
                    return message.start_time = dependency_2.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 5:
                  message.total_gas = reader.readUint64();
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
            return Incentive.deserialize(bytes);
          }
        }]);
        return Incentive;
      }(pb_1.Message);

      _v.Incentive = Incentive;

      var GasMeter = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(GasMeter, _pb_1$Message2);

        var _super2 = _createSuper(GasMeter);

        function GasMeter(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, GasMeter);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract" in data && data.contract != undefined) {
              _this3.contract = data.contract;
            }

            if ("participant" in data && data.participant != undefined) {
              _this3.participant = data.participant;
            }

            if ("cumulative_gas" in data && data.cumulative_gas != undefined) {
              _this3.cumulative_gas = data.cumulative_gas;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(GasMeter, [{
          key: "contract",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "participant",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "cumulative_gas",
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

            if (this.contract != null) {
              data.contract = this.contract;
            }

            if (this.participant != null) {
              data.participant = this.participant;
            }

            if (this.cumulative_gas != null) {
              data.cumulative_gas = this.cumulative_gas;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(1, this.contract);
            if (typeof this.participant === "string" && this.participant.length) writer.writeString(2, this.participant);
            if (this.cumulative_gas !== undefined) writer.writeUint64(3, this.cumulative_gas);
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
            var message = new GasMeter({});

            if (data.contract != null) {
              message.contract = data.contract;
            }

            if (data.participant != null) {
              message.participant = data.participant;
            }

            if (data.cumulative_gas != null) {
              message.cumulative_gas = data.cumulative_gas;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GasMeter();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract = reader.readString();
                  break;

                case 2:
                  message.participant = reader.readString();
                  break;

                case 3:
                  message.cumulative_gas = reader.readUint64();
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
            return GasMeter.deserialize(bytes);
          }
        }]);
        return GasMeter;
      }(pb_1.Message);

      _v.GasMeter = GasMeter;

      var RegisterIncentiveProposal = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(RegisterIncentiveProposal, _pb_1$Message3);

        var _super3 = _createSuper(RegisterIncentiveProposal);

        function RegisterIncentiveProposal(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, RegisterIncentiveProposal);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this4.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this4.description = data.description;
            }

            if ("contract" in data && data.contract != undefined) {
              _this4.contract = data.contract;
            }

            if ("allocations" in data && data.allocations != undefined) {
              _this4.allocations = data.allocations;
            }

            if ("epochs" in data && data.epochs != undefined) {
              _this4.epochs = data.epochs;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(RegisterIncentiveProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "contract",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "allocations",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "epochs",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.contract != null) {
              data.contract = this.contract;
            }

            if (this.allocations != null) {
              data.allocations = this.allocations.map(function (item) {
                return item.toObject();
              });
            }

            if (this.epochs != null) {
              data.epochs = this.epochs;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(3, this.contract);
            if (this.allocations !== undefined) writer.writeRepeatedMessage(4, this.allocations, function (item) {
              return item.serialize(writer);
            });
            if (this.epochs !== undefined) writer.writeUint32(5, this.epochs);
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
            var message = new RegisterIncentiveProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.contract != null) {
              message.contract = data.contract;
            }

            if (data.allocations != null) {
              message.allocations = data.allocations.map(function (item) {
                return dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(item);
              });
            }

            if (data.epochs != null) {
              message.epochs = data.epochs;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RegisterIncentiveProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.contract = reader.readString();
                  break;

                case 4:
                  reader.readMessage(message.allocations, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader), dependency_3.cosmos.base.v1beta1.DecCoin);
                  });
                  break;

                case 5:
                  message.epochs = reader.readUint32();
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
            return RegisterIncentiveProposal.deserialize(bytes);
          }
        }]);
        return RegisterIncentiveProposal;
      }(pb_1.Message);

      _v.RegisterIncentiveProposal = RegisterIncentiveProposal;

      var CancelIncentiveProposal = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(CancelIncentiveProposal, _pb_1$Message4);

        var _super4 = _createSuper(CancelIncentiveProposal);

        function CancelIncentiveProposal(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, CancelIncentiveProposal);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this5.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this5.description = data.description;
            }

            if ("contract" in data && data.contract != undefined) {
              _this5.contract = data.contract;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(CancelIncentiveProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "contract",
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.contract != null) {
              data.contract = this.contract;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (typeof this.contract === "string" && this.contract.length) writer.writeString(3, this.contract);
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
            var message = new CancelIncentiveProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.contract != null) {
              message.contract = data.contract;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CancelIncentiveProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  message.contract = reader.readString();
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
            return CancelIncentiveProposal.deserialize(bytes);
          }
        }]);
        return CancelIncentiveProposal;
      }(pb_1.Message);

      _v.CancelIncentiveProposal = CancelIncentiveProposal;
    })(v1 || (v1 = _incentives.v1 || (_incentives.v1 = {})));
  })(incentives || (incentives = _kynno.incentives || (_kynno.incentives = {})));
})(kynno || (exports.kynno = kynno = {}));