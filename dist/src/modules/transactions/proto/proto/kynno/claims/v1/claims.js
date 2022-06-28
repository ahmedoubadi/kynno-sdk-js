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

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var claims;

  (function (_claims) {
    var v1;

    (function (_v) {
      var Action;

      (function (Action) {
        Action[Action["ACTION_UNSPECIFIED"] = 0] = "ACTION_UNSPECIFIED";
        Action[Action["ACTION_VOTE"] = 1] = "ACTION_VOTE";
        Action[Action["ACTION_DELEGATE"] = 2] = "ACTION_DELEGATE";
        Action[Action["ACTION_EVM"] = 3] = "ACTION_EVM";
        Action[Action["ACTION_IBC_TRANSFER"] = 4] = "ACTION_IBC_TRANSFER";
      })(Action || (Action = {}));

      _v.Action = Action;

      var Claim = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Claim, _pb_1$Message);

        var _super = _createSuper(Claim);

        function Claim(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Claim);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("action" in data && data.action != undefined) {
              _this.action = data.action;
            }

            if ("completed" in data && data.completed != undefined) {
              _this.completed = data.completed;
            }

            if ("claimable_amount" in data && data.claimable_amount != undefined) {
              _this.claimable_amount = data.claimable_amount;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Claim, [{
          key: "action",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "completed",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "claimable_amount",
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

            if (this.action != null) {
              data.action = this.action;
            }

            if (this.completed != null) {
              data.completed = this.completed;
            }

            if (this.claimable_amount != null) {
              data.claimable_amount = this.claimable_amount;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.action !== undefined) writer.writeEnum(1, this.action);
            if (this.completed !== undefined) writer.writeBool(2, this.completed);
            if (typeof this.claimable_amount === "string" && this.claimable_amount.length) writer.writeString(3, this.claimable_amount);
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
            var message = new Claim({});

            if (data.action != null) {
              message.action = data.action;
            }

            if (data.completed != null) {
              message.completed = data.completed;
            }

            if (data.claimable_amount != null) {
              message.claimable_amount = data.claimable_amount;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Claim();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.action = reader.readEnum();
                  break;

                case 2:
                  message.completed = reader.readBool();
                  break;

                case 3:
                  message.claimable_amount = reader.readString();
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
            return Claim.deserialize(bytes);
          }
        }]);
        return Claim;
      }(pb_1.Message);

      _v.Claim = Claim;

      var ClaimsRecordAddress = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ClaimsRecordAddress, _pb_1$Message2);

        var _super2 = _createSuper(ClaimsRecordAddress);

        function ClaimsRecordAddress(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, ClaimsRecordAddress);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("address" in data && data.address != undefined) {
              _this2.address = data.address;
            }

            if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
              _this2.initial_claimable_amount = data.initial_claimable_amount;
            }

            if ("actions_completed" in data && data.actions_completed != undefined) {
              _this2.actions_completed = data.actions_completed;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(ClaimsRecordAddress, [{
          key: "address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "initial_claimable_amount",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "actions_completed",
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

            if (this.address != null) {
              data.address = this.address;
            }

            if (this.initial_claimable_amount != null) {
              data.initial_claimable_amount = this.initial_claimable_amount;
            }

            if (this.actions_completed != null) {
              data.actions_completed = this.actions_completed;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length) writer.writeString(1, this.address);
            if (typeof this.initial_claimable_amount === "string" && this.initial_claimable_amount.length) writer.writeString(2, this.initial_claimable_amount);
            if (this.actions_completed !== undefined) writer.writePackedBool(3, this.actions_completed);
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
            var message = new ClaimsRecordAddress({});

            if (data.address != null) {
              message.address = data.address;
            }

            if (data.initial_claimable_amount != null) {
              message.initial_claimable_amount = data.initial_claimable_amount;
            }

            if (data.actions_completed != null) {
              message.actions_completed = data.actions_completed;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ClaimsRecordAddress();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.address = reader.readString();
                  break;

                case 2:
                  message.initial_claimable_amount = reader.readString();
                  break;

                case 3:
                  message.actions_completed = reader.readPackedBool();
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
            return ClaimsRecordAddress.deserialize(bytes);
          }
        }]);
        return ClaimsRecordAddress;
      }(pb_1.Message);

      _v.ClaimsRecordAddress = ClaimsRecordAddress;

      var ClaimsRecord = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(ClaimsRecord, _pb_1$Message3);

        var _super3 = _createSuper(ClaimsRecord);

        function ClaimsRecord(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, ClaimsRecord);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
              _this3.initial_claimable_amount = data.initial_claimable_amount;
            }

            if ("actions_completed" in data && data.actions_completed != undefined) {
              _this3.actions_completed = data.actions_completed;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(ClaimsRecord, [{
          key: "initial_claimable_amount",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "actions_completed",
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

            if (this.initial_claimable_amount != null) {
              data.initial_claimable_amount = this.initial_claimable_amount;
            }

            if (this.actions_completed != null) {
              data.actions_completed = this.actions_completed;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.initial_claimable_amount === "string" && this.initial_claimable_amount.length) writer.writeString(1, this.initial_claimable_amount);
            if (this.actions_completed !== undefined) writer.writePackedBool(2, this.actions_completed);
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
            var message = new ClaimsRecord({});

            if (data.initial_claimable_amount != null) {
              message.initial_claimable_amount = data.initial_claimable_amount;
            }

            if (data.actions_completed != null) {
              message.actions_completed = data.actions_completed;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ClaimsRecord();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.initial_claimable_amount = reader.readString();
                  break;

                case 2:
                  message.actions_completed = reader.readPackedBool();
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
            return ClaimsRecord.deserialize(bytes);
          }
        }]);
        return ClaimsRecord;
      }(pb_1.Message);

      _v.ClaimsRecord = ClaimsRecord;
    })(v1 || (v1 = _claims.v1 || (_claims.v1 = {})));
  })(claims || (claims = _kynno.claims || (_kynno.claims = {})));
})(kynno || (exports.kynno = kynno = {}));