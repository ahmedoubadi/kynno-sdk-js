"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

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

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var applications;

  (function (_applications) {
    var transfer;

    (function (_transfer) {
      var v2;

      (function (_v) {
        var FungibleTokenPacketData = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(FungibleTokenPacketData, _pb_1$Message);

          var _super = _createSuper(FungibleTokenPacketData);

          function FungibleTokenPacketData(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, FungibleTokenPacketData);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("denom" in data && data.denom != undefined) {
                _this.denom = data.denom;
              }

              if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
              }

              if ("sender" in data && data.sender != undefined) {
                _this.sender = data.sender;
              }

              if ("receiver" in data && data.receiver != undefined) {
                _this.receiver = data.receiver;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(FungibleTokenPacketData, [{
            key: "denom",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "amount",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "sender",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "receiver",
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

              if (this.denom != null) {
                data.denom = this.denom;
              }

              if (this.amount != null) {
                data.amount = this.amount;
              }

              if (this.sender != null) {
                data.sender = this.sender;
              }

              if (this.receiver != null) {
                data.receiver = this.receiver;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.denom === "string" && this.denom.length) writer.writeString(1, this.denom);
              if (typeof this.amount === "string" && this.amount.length) writer.writeString(2, this.amount);
              if (typeof this.sender === "string" && this.sender.length) writer.writeString(3, this.sender);
              if (typeof this.receiver === "string" && this.receiver.length) writer.writeString(4, this.receiver);
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
              var message = new FungibleTokenPacketData({});

              if (data.denom != null) {
                message.denom = data.denom;
              }

              if (data.amount != null) {
                message.amount = data.amount;
              }

              if (data.sender != null) {
                message.sender = data.sender;
              }

              if (data.receiver != null) {
                message.receiver = data.receiver;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new FungibleTokenPacketData();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.denom = reader.readString();
                    break;

                  case 2:
                    message.amount = reader.readString();
                    break;

                  case 3:
                    message.sender = reader.readString();
                    break;

                  case 4:
                    message.receiver = reader.readString();
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
              return FungibleTokenPacketData.deserialize(bytes);
            }
          }]);
          return FungibleTokenPacketData;
        }(pb_1.Message);

        _v.FungibleTokenPacketData = FungibleTokenPacketData;
      })(v2 || (v2 = _transfer.v2 || (_transfer.v2 = {})));
    })(transfer || (transfer = _applications.transfer || (_applications.transfer = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));