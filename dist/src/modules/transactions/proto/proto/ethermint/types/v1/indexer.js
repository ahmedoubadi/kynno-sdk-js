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
      var TxResult = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(TxResult, _pb_1$Message);

        var _super = _createSuper(TxResult);

        function TxResult(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, TxResult);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("height" in data && data.height != undefined) {
              _this.height = data.height;
            }

            if ("tx_index" in data && data.tx_index != undefined) {
              _this.tx_index = data.tx_index;
            }

            if ("msg_index" in data && data.msg_index != undefined) {
              _this.msg_index = data.msg_index;
            }

            if ("eth_tx_index" in data && data.eth_tx_index != undefined) {
              _this.eth_tx_index = data.eth_tx_index;
            }

            if ("failed" in data && data.failed != undefined) {
              _this.failed = data.failed;
            }

            if ("gas_used" in data && data.gas_used != undefined) {
              _this.gas_used = data.gas_used;
            }

            if ("cumulative_gas_used" in data && data.cumulative_gas_used != undefined) {
              _this.cumulative_gas_used = data.cumulative_gas_used;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(TxResult, [{
          key: "height",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "tx_index",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "msg_index",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "eth_tx_index",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "failed",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "gas_used",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "cumulative_gas_used",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.height != null) {
              data.height = this.height;
            }

            if (this.tx_index != null) {
              data.tx_index = this.tx_index;
            }

            if (this.msg_index != null) {
              data.msg_index = this.msg_index;
            }

            if (this.eth_tx_index != null) {
              data.eth_tx_index = this.eth_tx_index;
            }

            if (this.failed != null) {
              data.failed = this.failed;
            }

            if (this.gas_used != null) {
              data.gas_used = this.gas_used;
            }

            if (this.cumulative_gas_used != null) {
              data.cumulative_gas_used = this.cumulative_gas_used;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined) writer.writeInt64(1, this.height);
            if (this.tx_index !== undefined) writer.writeUint32(2, this.tx_index);
            if (this.msg_index !== undefined) writer.writeUint32(3, this.msg_index);
            if (this.eth_tx_index !== undefined) writer.writeInt32(4, this.eth_tx_index);
            if (this.failed !== undefined) writer.writeBool(5, this.failed);
            if (this.gas_used !== undefined) writer.writeUint64(6, this.gas_used);
            if (this.cumulative_gas_used !== undefined) writer.writeUint64(7, this.cumulative_gas_used);
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
            var message = new TxResult({});

            if (data.height != null) {
              message.height = data.height;
            }

            if (data.tx_index != null) {
              message.tx_index = data.tx_index;
            }

            if (data.msg_index != null) {
              message.msg_index = data.msg_index;
            }

            if (data.eth_tx_index != null) {
              message.eth_tx_index = data.eth_tx_index;
            }

            if (data.failed != null) {
              message.failed = data.failed;
            }

            if (data.gas_used != null) {
              message.gas_used = data.gas_used;
            }

            if (data.cumulative_gas_used != null) {
              message.cumulative_gas_used = data.cumulative_gas_used;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TxResult();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.height = reader.readInt64();
                  break;

                case 2:
                  message.tx_index = reader.readUint32();
                  break;

                case 3:
                  message.msg_index = reader.readUint32();
                  break;

                case 4:
                  message.eth_tx_index = reader.readInt32();
                  break;

                case 5:
                  message.failed = reader.readBool();
                  break;

                case 6:
                  message.gas_used = reader.readUint64();
                  break;

                case 7:
                  message.cumulative_gas_used = reader.readUint64();
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
            return TxResult.deserialize(bytes);
          }
        }]);
        return TxResult;
      }(pb_1.Message);

      _v.TxResult = TxResult;
    })(v1 || (v1 = _types.v1 || (_types.v1 = {})));
  })(types || (types = _ethermint.types || (_ethermint.types = {})));
})(ethermint || (exports.ethermint = ethermint = {}));