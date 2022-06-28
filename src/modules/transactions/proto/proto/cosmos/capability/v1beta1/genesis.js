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

var dependency_2 = _interopRequireWildcard(require("./capability"));

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
      var GenesisOwners = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisOwners, _pb_1$Message);

        var _super = _createSuper(GenesisOwners);

        function GenesisOwners(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisOwners);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("index" in data && data.index != undefined) {
              _this.index = data.index;
            }

            if ("index_owners" in data && data.index_owners != undefined) {
              _this.index_owners = data.index_owners;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisOwners, [{
          key: "index",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "index_owners",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.capability.v1beta1.CapabilityOwners, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.index != null) {
              data.index = this.index;
            }

            if (this.index_owners != null) {
              data.index_owners = this.index_owners.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.index !== undefined) writer.writeUint64(1, this.index);
            if (this.index_owners !== undefined) writer.writeMessage(2, this.index_owners, function () {
              return _this2.index_owners.serialize(writer);
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
            var message = new GenesisOwners({});

            if (data.index != null) {
              message.index = data.index;
            }

            if (data.index_owners != null) {
              message.index_owners = dependency_2.cosmos.capability.v1beta1.CapabilityOwners.fromObject(data.index_owners);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenesisOwners();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.index = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.index_owners, function () {
                    return message.index_owners = dependency_2.cosmos.capability.v1beta1.CapabilityOwners.deserialize(reader);
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
            return GenesisOwners.deserialize(bytes);
          }
        }]);
        return GenesisOwners;
      }(pb_1.Message);

      _v1beta.GenesisOwners = GenesisOwners;

      var GenesisState = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message2);

        var _super2 = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("index" in data && data.index != undefined) {
              _this3.index = data.index;
            }

            if ("owners" in data && data.owners != undefined) {
              _this3.owners = data.owners;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "index",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "owners",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, GenesisOwners, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject2) {
            function toObject() {
              return _toObject2.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject2.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.index != null) {
              data.index = this.index;
            }

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
            if (this.index !== undefined) writer.writeUint64(1, this.index);
            if (this.owners !== undefined) writer.writeRepeatedMessage(2, this.owners, function (item) {
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
            var message = new GenesisState({});

            if (data.index != null) {
              message.index = data.index;
            }

            if (data.owners != null) {
              message.owners = data.owners.map(function (item) {
                return GenesisOwners.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenesisState();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.index = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.owners, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, GenesisOwners.deserialize(reader), GenesisOwners);
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
            return GenesisState.deserialize(bytes);
          }
        }]);
        return GenesisState;
      }(pb_1.Message);

      _v1beta.GenesisState = GenesisState;
    })(v1beta1 || (v1beta1 = _capability.v1beta1 || (_capability.v1beta1 = {})));
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
})(cosmos || (exports.cosmos = cosmos = {}));