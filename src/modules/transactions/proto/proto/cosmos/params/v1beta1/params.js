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
  var params;

  (function (_params) {
    var v1beta1;

    (function (_v1beta) {
      var ParameterChangeProposal = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(ParameterChangeProposal, _pb_1$Message);

        var _super = _createSuper(ParameterChangeProposal);

        function ParameterChangeProposal(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, ParameterChangeProposal);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this.description = data.description;
            }

            if ("changes" in data && data.changes != undefined) {
              _this.changes = data.changes;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(ParameterChangeProposal, [{
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
          key: "changes",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, ParamChange, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            if (this.changes != null) {
              data.changes = this.changes.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
            if (this.changes !== undefined) writer.writeRepeatedMessage(3, this.changes, function (item) {
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
            var message = new ParameterChangeProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            if (data.changes != null) {
              message.changes = data.changes.map(function (item) {
                return ParamChange.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ParameterChangeProposal();

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
                  reader.readMessage(message.changes, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, ParamChange.deserialize(reader), ParamChange);
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
            return ParameterChangeProposal.deserialize(bytes);
          }
        }]);
        return ParameterChangeProposal;
      }(pb_1.Message);

      _v1beta.ParameterChangeProposal = ParameterChangeProposal;

      var ParamChange = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(ParamChange, _pb_1$Message2);

        var _super2 = _createSuper(ParamChange);

        function ParamChange(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, ParamChange);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("subspace" in data && data.subspace != undefined) {
              _this2.subspace = data.subspace;
            }

            if ("key" in data && data.key != undefined) {
              _this2.key = data.key;
            }

            if ("value" in data && data.value != undefined) {
              _this2.value = data.value;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(ParamChange, [{
          key: "subspace",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "key",
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.subspace != null) {
              data.subspace = this.subspace;
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
            if (typeof this.subspace === "string" && this.subspace.length) writer.writeString(1, this.subspace);
            if (typeof this.key === "string" && this.key.length) writer.writeString(2, this.key);
            if (typeof this.value === "string" && this.value.length) writer.writeString(3, this.value);
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
            var message = new ParamChange({});

            if (data.subspace != null) {
              message.subspace = data.subspace;
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
                message = new ParamChange();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.subspace = reader.readString();
                  break;

                case 2:
                  message.key = reader.readString();
                  break;

                case 3:
                  message.value = reader.readString();
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
            return ParamChange.deserialize(bytes);
          }
        }]);
        return ParamChange;
      }(pb_1.Message);

      _v1beta.ParamChange = ParamChange;
    })(v1beta1 || (v1beta1 = _params.v1beta1 || (_params.v1beta1 = {})));
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
})(cosmos || (exports.cosmos = cosmos = {}));