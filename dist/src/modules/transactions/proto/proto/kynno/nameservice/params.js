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
  var nameservice;

  (function (_nameservice) {
    var Params = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Params, _pb_1$Message);

      var _super = _createSuper(Params);

      function Params(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Params);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this;
      }

      (0, _createClass2["default"])(Params, [{
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
          var message = new Params({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Params();

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
          return Params.deserialize(bytes);
        }
      }]);
      return Params;
    }(pb_1.Message);

    _nameservice.Params = Params;
  })(nameservice || (nameservice = _kynno.nameservice || (_kynno.nameservice = {})));
})(kynno || (exports.kynno = kynno = {}));