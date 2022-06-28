"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

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

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var base;

  (function (_base) {
    var store;

    (function (_store) {
      var v1beta1;

      (function (_v1beta) {
        var StoreKVPair = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(StoreKVPair, _pb_1$Message);

          var _super = _createSuper(StoreKVPair);

          function StoreKVPair(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, StoreKVPair);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("store_key" in data && data.store_key != undefined) {
                _this.store_key = data.store_key;
              }

              if ("delete" in data && data["delete"] != undefined) {
                _this["delete"] = data["delete"];
              }

              if ("key" in data && data.key != undefined) {
                _this.key = data.key;
              }

              if ("value" in data && data.value != undefined) {
                _this.value = data.value;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(StoreKVPair, [{
            key: "store_key",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "delete",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "key",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "value",
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

              if (this.store_key != null) {
                data.store_key = this.store_key;
              }

              if (this["delete"] != null) {
                data["delete"] = this["delete"];
              }

              if (this.key != null) {
                data.key = this.key;
              }

              if (this.value != null) {
                data.value = this.value;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.store_key === "string" && this.store_key.length) writer.writeString(1, this.store_key);
              if (this["delete"] !== undefined) writer.writeBool(2, this["delete"]);
              if (this.key !== undefined) writer.writeBytes(3, this.key);
              if (this.value !== undefined) writer.writeBytes(4, this.value);
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
              var message = new StoreKVPair({});

              if (data.store_key != null) {
                message.store_key = data.store_key;
              }

              if (data["delete"] != null) {
                message["delete"] = data["delete"];
              }

              if (data.key != null) {
                message.key = data.key;
              }

              if (data.value != null) {
                message.value = data.value;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new StoreKVPair();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.store_key = reader.readString();
                    break;

                  case 2:
                    message["delete"] = reader.readBool();
                    break;

                  case 3:
                    message.key = reader.readBytes();
                    break;

                  case 4:
                    message.value = reader.readBytes();
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
              return StoreKVPair.deserialize(bytes);
            }
          }]);
          return StoreKVPair;
        }(pb_1.Message);

        _v1beta.StoreKVPair = StoreKVPair;
      })(v1beta1 || (v1beta1 = _store.v1beta1 || (_store.v1beta1 = {})));
    })(store || (store = _base.store || (_base.store = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));