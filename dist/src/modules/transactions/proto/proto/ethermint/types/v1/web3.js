"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ethermint = void 0;

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

var ethermint;
exports.ethermint = ethermint;

(function (_ethermint) {
  var types;

  (function (_types) {
    var v1;

    (function (_v) {
      var ExtensionOptionsWeb3Tx = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(ExtensionOptionsWeb3Tx, _pb_1$Message);

        var _super = _createSuper(ExtensionOptionsWeb3Tx);

        function ExtensionOptionsWeb3Tx(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, ExtensionOptionsWeb3Tx);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("typed_data_chain_id" in data && data.typed_data_chain_id != undefined) {
              _this.typed_data_chain_id = data.typed_data_chain_id;
            }

            if ("fee_payer" in data && data.fee_payer != undefined) {
              _this.fee_payer = data.fee_payer;
            }

            if ("fee_payer_sig" in data && data.fee_payer_sig != undefined) {
              _this.fee_payer_sig = data.fee_payer_sig;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(ExtensionOptionsWeb3Tx, [{
          key: "typed_data_chain_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "fee_payer",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "fee_payer_sig",
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

            if (this.typed_data_chain_id != null) {
              data.typed_data_chain_id = this.typed_data_chain_id;
            }

            if (this.fee_payer != null) {
              data.fee_payer = this.fee_payer;
            }

            if (this.fee_payer_sig != null) {
              data.fee_payer_sig = this.fee_payer_sig;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.typed_data_chain_id !== undefined) writer.writeUint64(1, this.typed_data_chain_id);
            if (typeof this.fee_payer === "string" && this.fee_payer.length) writer.writeString(2, this.fee_payer);
            if (this.fee_payer_sig !== undefined) writer.writeBytes(3, this.fee_payer_sig);
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
            var message = new ExtensionOptionsWeb3Tx({});

            if (data.typed_data_chain_id != null) {
              message.typed_data_chain_id = data.typed_data_chain_id;
            }

            if (data.fee_payer != null) {
              message.fee_payer = data.fee_payer;
            }

            if (data.fee_payer_sig != null) {
              message.fee_payer_sig = data.fee_payer_sig;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ExtensionOptionsWeb3Tx();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.typed_data_chain_id = reader.readUint64();
                  break;

                case 2:
                  message.fee_payer = reader.readString();
                  break;

                case 3:
                  message.fee_payer_sig = reader.readBytes();
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
            return ExtensionOptionsWeb3Tx.deserialize(bytes);
          }
        }]);
        return ExtensionOptionsWeb3Tx;
      }(pb_1.Message);

      _v.ExtensionOptionsWeb3Tx = ExtensionOptionsWeb3Tx;
    })(v1 || (v1 = _types.v1 || (_types.v1 = {})));
  })(types || (types = _ethermint.types || (_ethermint.types = {})));
})(ethermint || (exports.ethermint = ethermint = {}));