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

var dependency_1 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var upgrade;

  (function (_upgrade) {
    var v1beta1;

    (function (_v1beta) {
      var Plan = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(Plan, _pb_1$Message);

        var _super = _createSuper(Plan);

        function Plan(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, Plan);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("name" in data && data.name != undefined) {
              _this.name = data.name;
            }

            if ("time" in data && data.time != undefined) {
              _this.time = data.time;
            }

            if ("height" in data && data.height != undefined) {
              _this.height = data.height;
            }

            if ("info" in data && data.info != undefined) {
              _this.info = data.info;
            }

            if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
              _this.upgraded_client_state = data.upgraded_client_state;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(Plan, [{
          key: "name",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
          /** @deprecated*/

        }, {
          key: "time",
          get:
          /** @deprecated*/
          function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2);
          }
          /** @deprecated*/
          ,
          set:
          /** @deprecated*/
          function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "height",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "info",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
          /** @deprecated*/

        }, {
          key: "upgraded_client_state",
          get:
          /** @deprecated*/
          function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 5);
          }
          /** @deprecated*/
          ,
          set:
          /** @deprecated*/
          function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
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

            if (this.name != null) {
              data.name = this.name;
            }

            if (this.time != null) {
              data.time = this.time.toObject();
            }

            if (this.height != null) {
              data.height = this.height;
            }

            if (this.info != null) {
              data.info = this.info;
            }

            if (this.upgraded_client_state != null) {
              data.upgraded_client_state = this.upgraded_client_state.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
            if (this.time !== undefined) writer.writeMessage(2, this.time, function () {
              return _this2.time.serialize(writer);
            });
            if (this.height !== undefined) writer.writeInt64(3, this.height);
            if (typeof this.info === "string" && this.info.length) writer.writeString(4, this.info);
            if (this.upgraded_client_state !== undefined) writer.writeMessage(5, this.upgraded_client_state, function () {
              return _this2.upgraded_client_state.serialize(writer);
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
            var message = new Plan({});

            if (data.name != null) {
              message.name = data.name;
            }

            if (data.time != null) {
              message.time = dependency_3.google.protobuf.Timestamp.fromObject(data.time);
            }

            if (data.height != null) {
              message.height = data.height;
            }

            if (data.info != null) {
              message.info = data.info;
            }

            if (data.upgraded_client_state != null) {
              message.upgraded_client_state = dependency_1.google.protobuf.Any.fromObject(data.upgraded_client_state);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Plan();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.name = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.time, function () {
                    return message.time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  message.height = reader.readInt64();
                  break;

                case 4:
                  message.info = reader.readString();
                  break;

                case 5:
                  reader.readMessage(message.upgraded_client_state, function () {
                    return message.upgraded_client_state = dependency_1.google.protobuf.Any.deserialize(reader);
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
            return Plan.deserialize(bytes);
          }
        }]);
        return Plan;
      }(pb_1.Message);

      _v1beta.Plan = Plan;

      var SoftwareUpgradeProposal = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(SoftwareUpgradeProposal, _pb_1$Message2);

        var _super2 = _createSuper(SoftwareUpgradeProposal);

        function SoftwareUpgradeProposal(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, SoftwareUpgradeProposal);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this3.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this3.description = data.description;
            }

            if ("plan" in data && data.plan != undefined) {
              _this3.plan = data.plan;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(SoftwareUpgradeProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "plan",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Plan, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.plan != null) {
              data.plan = this.plan.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this4 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (this.plan !== undefined) writer.writeMessage(3, this.plan, function () {
              return _this4.plan.serialize(writer);
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
            var message = new SoftwareUpgradeProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.plan != null) {
              message.plan = Plan.fromObject(data.plan);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new SoftwareUpgradeProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.plan, function () {
                    return message.plan = Plan.deserialize(reader);
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
            return SoftwareUpgradeProposal.deserialize(bytes);
          }
        }]);
        return SoftwareUpgradeProposal;
      }(pb_1.Message);

      _v1beta.SoftwareUpgradeProposal = SoftwareUpgradeProposal;

      var CancelSoftwareUpgradeProposal = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(CancelSoftwareUpgradeProposal, _pb_1$Message3);

        var _super3 = _createSuper(CancelSoftwareUpgradeProposal);

        function CancelSoftwareUpgradeProposal(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, CancelSoftwareUpgradeProposal);
          _this5 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this5.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this5.description = data.description;
            }
          }

          return _this5;
        }

        (0, _createClass2["default"])(CancelSoftwareUpgradeProposal, [{
          key: "title",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "description",
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
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
            var message = new CancelSoftwareUpgradeProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CancelSoftwareUpgradeProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
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
            return CancelSoftwareUpgradeProposal.deserialize(bytes);
          }
        }]);
        return CancelSoftwareUpgradeProposal;
      }(pb_1.Message);

      _v1beta.CancelSoftwareUpgradeProposal = CancelSoftwareUpgradeProposal;

      var ModuleVersion = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(ModuleVersion, _pb_1$Message4);

        var _super4 = _createSuper(ModuleVersion);

        function ModuleVersion(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, ModuleVersion);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("name" in data && data.name != undefined) {
              _this6.name = data.name;
            }

            if ("version" in data && data.version != undefined) {
              _this6.version = data.version;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(ModuleVersion, [{
          key: "name",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "version",
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

            if (this.name != null) {
              data.name = this.name;
            }

            if (this.version != null) {
              data.version = this.version;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
            if (this.version !== undefined) writer.writeUint64(2, this.version);
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
            var message = new ModuleVersion({});

            if (data.name != null) {
              message.name = data.name;
            }

            if (data.version != null) {
              message.version = data.version;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ModuleVersion();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.name = reader.readString();
                  break;

                case 2:
                  message.version = reader.readUint64();
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
            return ModuleVersion.deserialize(bytes);
          }
        }]);
        return ModuleVersion;
      }(pb_1.Message);

      _v1beta.ModuleVersion = ModuleVersion;
    })(v1beta1 || (v1beta1 = _upgrade.v1beta1 || (_upgrade.v1beta1 = {})));
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
})(cosmos || (exports.cosmos = cosmos = {}));