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
    var Whois = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Whois, _pb_1$Message);

      var _super = _createSuper(Whois);

      function Whois(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Whois);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("index" in data && data.index != undefined) {
            _this.index = data.index;
          }

          if ("name" in data && data.name != undefined) {
            _this.name = data.name;
          }

          if ("value" in data && data.value != undefined) {
            _this.value = data.value;
          }

          if ("owner" in data && data.owner != undefined) {
            _this.owner = data.owner;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Whois, [{
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "value",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "owner",
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

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.value != null) {
            data.value = this.value;
          }

          if (this.owner != null) {
            data.owner = this.owner;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.index === "string" && this.index.length) writer.writeString(1, this.index);
          if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
          if (typeof this.value === "string" && this.value.length) writer.writeString(3, this.value);
          if (typeof this.owner === "string" && this.owner.length) writer.writeString(4, this.owner);
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
          var message = new Whois({});

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.value != null) {
            message.value = data.value;
          }

          if (data.owner != null) {
            message.owner = data.owner;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Whois();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.index = reader.readString();
                break;

              case 2:
                message.name = reader.readString();
                break;

              case 3:
                message.value = reader.readString();
                break;

              case 4:
                message.owner = reader.readString();
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
          return Whois.deserialize(bytes);
        }
      }]);
      return Whois;
    }(pb_1.Message);

    _nameservice.Whois = Whois;
  })(nameservice || (nameservice = _kynno.nameservice || (_kynno.nameservice = {})));
})(kynno || (exports.kynno = kynno = {}));