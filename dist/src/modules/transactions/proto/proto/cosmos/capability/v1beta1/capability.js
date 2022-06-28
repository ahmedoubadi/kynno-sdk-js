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
  var capability;

  (function (_capability) {
    var v1beta1;

    (function (_v1beta) {
      var Capability = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Capability, _pb_1$Message);

        var _super = _createSuper(Capability);

        function Capability(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Capability);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("index" in data && data.index != undefined) {
              _this.index = data.index;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Capability, [{
          key: "index",
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

            if (this.index != null) {
              data.index = this.index;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.index !== undefined) writer.writeUint64(1, this.index);
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
            var message = new Capability({});

            if (data.index != null) {
              message.index = data.index;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Capability();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.index = reader.readUint64();
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
            return Capability.deserialize(bytes);
          }
        }]);
        return Capability;
      }(pb_1.Message);

      _v1beta.Capability = Capability;

      var Owner = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(Owner, _pb_1$Message2);

        var _super2 = _createSuper(Owner);

        function Owner(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, Owner);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("module" in data && data.module != undefined) {
              _this2.module = data.module;
            }

            if ("name" in data && data.name != undefined) {
              _this2.name = data.name;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(Owner, [{
          key: "module",
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.module != null) {
              data.module = this.module;
            }

            if (this.name != null) {
              data.name = this.name;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.module === "string" && this.module.length) writer.writeString(1, this.module);
            if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
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
            var message = new Owner({});

            if (data.module != null) {
              message.module = data.module;
            }

            if (data.name != null) {
              message.name = data.name;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Owner();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.module = reader.readString();
                  break;

                case 2:
                  message.name = reader.readString();
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
            return Owner.deserialize(bytes);
          }
        }]);
        return Owner;
      }(pb_1.Message);

      _v1beta.Owner = Owner;

      var CapabilityOwners = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(CapabilityOwners, _pb_1$Message3);

        var _super3 = _createSuper(CapabilityOwners);

        function CapabilityOwners(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, CapabilityOwners);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("owners" in data && data.owners != undefined) {
              _this3.owners = data.owners;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(CapabilityOwners, [{
          key: "owners",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, Owner, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.owners != null) {
              data.owners = this.owners.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.owners !== undefined) writer.writeRepeatedMessage(1, this.owners, function (item) {
              return item.serialize(writer);
            });
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
            var message = new CapabilityOwners({});

            if (data.owners != null) {
              message.owners = data.owners.map(function (item) {
                return Owner.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CapabilityOwners();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.owners, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, Owner.deserialize(reader), Owner);
                  });
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
            return CapabilityOwners.deserialize(bytes);
          }
        }]);
        return CapabilityOwners;
      }(pb_1.Message);

      _v1beta.CapabilityOwners = CapabilityOwners;
    })(v1beta1 || (v1beta1 = _capability.v1beta1 || (_capability.v1beta1 = {})));
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
})(cosmos || (exports.cosmos = cosmos = {}));