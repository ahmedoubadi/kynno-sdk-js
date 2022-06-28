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
  var crypto;

  (function (_crypto) {
    var multisig;

    (function (_multisig) {
      var v1beta1;

      (function (_v1beta) {
        var MultiSignature = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(MultiSignature, _pb_1$Message);

          var _super = _createSuper(MultiSignature);

          function MultiSignature(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, MultiSignature);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("signatures" in data && data.signatures != undefined) {
                _this.signatures = data.signatures;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(MultiSignature, [{
            key: "signatures",
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

              if (this.signatures != null) {
                data.signatures = this.signatures;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.signatures !== undefined) writer.writeRepeatedBytes(1, this.signatures);
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
              var message = new MultiSignature({});

              if (data.signatures != null) {
                message.signatures = data.signatures;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new MultiSignature();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
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
              return MultiSignature.deserialize(bytes);
            }
          }]);
          return MultiSignature;
        }(pb_1.Message);

        _v1beta.MultiSignature = MultiSignature;

        var CompactBitArray = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(CompactBitArray, _pb_1$Message2);

          var _super2 = _createSuper(CompactBitArray);

          function CompactBitArray(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, CompactBitArray);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("extra_bits_stored" in data && data.extra_bits_stored != undefined) {
                _this2.extra_bits_stored = data.extra_bits_stored;
              }

              if ("elems" in data && data.elems != undefined) {
                _this2.elems = data.elems;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(CompactBitArray, [{
            key: "extra_bits_stored",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "elems",
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

              if (this.extra_bits_stored != null) {
                data.extra_bits_stored = this.extra_bits_stored;
              }

              if (this.elems != null) {
                data.elems = this.elems;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.extra_bits_stored !== undefined) writer.writeUint32(1, this.extra_bits_stored);
              if (this.elems !== undefined) writer.writeBytes(2, this.elems);
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
              var message = new CompactBitArray({});

              if (data.extra_bits_stored != null) {
                message.extra_bits_stored = data.extra_bits_stored;
              }

              if (data.elems != null) {
                message.elems = data.elems;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new CompactBitArray();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.extra_bits_stored = reader.readUint32();
                    break;

                  case 2:
                    message.elems = reader.readBytes();
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
              return CompactBitArray.deserialize(bytes);
            }
          }]);
          return CompactBitArray;
        }(pb_1.Message);

        _v1beta.CompactBitArray = CompactBitArray;
      })(v1beta1 || (v1beta1 = _multisig.v1beta1 || (_multisig.v1beta1 = {})));
    })(multisig || (multisig = _crypto.multisig || (_crypto.multisig = {})));
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
})(cosmos || (exports.cosmos = cosmos = {}));