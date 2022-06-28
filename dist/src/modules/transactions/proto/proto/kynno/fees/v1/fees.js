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
  var fees;

  (function (_fees) {
    var v1;

    (function (_v) {
      var DevFeeInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(DevFeeInfo, _pb_1$Message);

        var _super = _createSuper(DevFeeInfo);

        function DevFeeInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, DevFeeInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
              _this.contract_address = data.contract_address;
            }

            if ("deployer_address" in data && data.deployer_address != undefined) {
              _this.deployer_address = data.deployer_address;
            }

            if ("withdraw_address" in data && data.withdraw_address != undefined) {
              _this.withdraw_address = data.withdraw_address;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(DevFeeInfo, [{
          key: "contract_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "deployer_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "withdraw_address",
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

            if (this.contract_address != null) {
              data.contract_address = this.contract_address;
            }

            if (this.deployer_address != null) {
              data.deployer_address = this.deployer_address;
            }

            if (this.withdraw_address != null) {
              data.withdraw_address = this.withdraw_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length) writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length) writer.writeString(2, this.deployer_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length) writer.writeString(3, this.withdraw_address);
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
            var message = new DevFeeInfo({});

            if (data.contract_address != null) {
              message.contract_address = data.contract_address;
            }

            if (data.deployer_address != null) {
              message.deployer_address = data.deployer_address;
            }

            if (data.withdraw_address != null) {
              message.withdraw_address = data.withdraw_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DevFeeInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.contract_address = reader.readString();
                  break;

                case 2:
                  message.deployer_address = reader.readString();
                  break;

                case 3:
                  message.withdraw_address = reader.readString();
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
            return DevFeeInfo.deserialize(bytes);
          }
        }]);
        return DevFeeInfo;
      }(pb_1.Message);

      _v.DevFeeInfo = DevFeeInfo;

      var DevFeeInfosPerDeployer = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(DevFeeInfosPerDeployer, _pb_1$Message2);

        var _super2 = _createSuper(DevFeeInfosPerDeployer);

        function DevFeeInfosPerDeployer(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, DevFeeInfosPerDeployer);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("contract_addresses" in data && data.contract_addresses != undefined) {
              _this2.contract_addresses = data.contract_addresses;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(DevFeeInfosPerDeployer, [{
          key: "contract_addresses",
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

            if (this.contract_addresses != null) {
              data.contract_addresses = this.contract_addresses;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.contract_addresses !== undefined) writer.writeRepeatedString(1, this.contract_addresses);
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
            var message = new DevFeeInfosPerDeployer({});

            if (data.contract_addresses != null) {
              message.contract_addresses = data.contract_addresses;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DevFeeInfosPerDeployer();

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
            return DevFeeInfosPerDeployer.deserialize(bytes);
          }
        }]);
        return DevFeeInfosPerDeployer;
      }(pb_1.Message);

      _v.DevFeeInfosPerDeployer = DevFeeInfosPerDeployer;
    })(v1 || (v1 = _fees.v1 || (_fees.v1 = {})));
  })(fees || (fees = _kynno.fees || (_kynno.fees = {})));
})(kynno || (exports.kynno = kynno = {}));