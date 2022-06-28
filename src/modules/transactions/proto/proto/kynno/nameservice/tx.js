"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kynno = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
    var MsgCreateName = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(MsgCreateName, _pb_1$Message);

      var _super = _createSuper(MsgCreateName);

      function MsgCreateName(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, MsgCreateName);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("creator" in data && data.creator != undefined) {
            _this.creator = data.creator;
          }

          if ("name" in data && data.name != undefined) {
            _this.name = data.name;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(MsgCreateName, [{
        key: "creator",
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

          if (this.creator != null) {
            data.creator = this.creator;
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
          if (typeof this.creator === "string" && this.creator.length) writer.writeString(1, this.creator);
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
          var message = new MsgCreateName({});

          if (data.creator != null) {
            message.creator = data.creator;
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
              message = new MsgCreateName();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.creator = reader.readString();
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
          return MsgCreateName.deserialize(bytes);
        }
      }]);
      return MsgCreateName;
    }(pb_1.Message);

    _nameservice.MsgCreateName = MsgCreateName;

    var MsgCreateNameResponse = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(MsgCreateNameResponse, _pb_1$Message2);

      var _super2 = _createSuper(MsgCreateNameResponse);

      function MsgCreateNameResponse(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, MsgCreateNameResponse);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this2;
      }

      (0, _createClass2["default"])(MsgCreateNameResponse, [{
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
          var message = new MsgCreateNameResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgCreateNameResponse();

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
          return MsgCreateNameResponse.deserialize(bytes);
        }
      }]);
      return MsgCreateNameResponse;
    }(pb_1.Message);

    _nameservice.MsgCreateNameResponse = MsgCreateNameResponse;

    var MsgSetName = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(MsgSetName, _pb_1$Message3);

      var _super3 = _createSuper(MsgSetName);

      function MsgSetName(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, MsgSetName);
        _this3 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("creator" in data && data.creator != undefined) {
            _this3.creator = data.creator;
          }

          if ("name" in data && data.name != undefined) {
            _this3.name = data.name;
          }

          if ("value" in data && data.value != undefined) {
            _this3.value = data.value;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(MsgSetName, [{
        key: "creator",
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
        key: "toObject",
        value: function toObject() {
          var data = {};

          if (this.creator != null) {
            data.creator = this.creator;
          }

          if (this.name != null) {
            data.name = this.name;
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
          if (typeof this.creator === "string" && this.creator.length) writer.writeString(1, this.creator);
          if (typeof this.name === "string" && this.name.length) writer.writeString(2, this.name);
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
          var message = new MsgSetName({});

          if (data.creator != null) {
            message.creator = data.creator;
          }

          if (data.name != null) {
            message.name = data.name;
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
              message = new MsgSetName();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.creator = reader.readString();
                break;

              case 2:
                message.name = reader.readString();
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
          return MsgSetName.deserialize(bytes);
        }
      }]);
      return MsgSetName;
    }(pb_1.Message);

    _nameservice.MsgSetName = MsgSetName;

    var MsgSetNameResponse = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(MsgSetNameResponse, _pb_1$Message4);

      var _super4 = _createSuper(MsgSetNameResponse);

      function MsgSetNameResponse(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, MsgSetNameResponse);
        _this4 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this4;
      }

      (0, _createClass2["default"])(MsgSetNameResponse, [{
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
          var message = new MsgSetNameResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgSetNameResponse();

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
          return MsgSetNameResponse.deserialize(bytes);
        }
      }]);
      return MsgSetNameResponse;
    }(pb_1.Message);

    _nameservice.MsgSetNameResponse = MsgSetNameResponse;

    var MsgDeleteName = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(MsgDeleteName, _pb_1$Message5);

      var _super5 = _createSuper(MsgDeleteName);

      function MsgDeleteName(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, MsgDeleteName);
        _this5 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("creator" in data && data.creator != undefined) {
            _this5.creator = data.creator;
          }

          if ("name" in data && data.name != undefined) {
            _this5.name = data.name;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(MsgDeleteName, [{
        key: "creator",
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

          if (this.creator != null) {
            data.creator = this.creator;
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
          if (typeof this.creator === "string" && this.creator.length) writer.writeString(1, this.creator);
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
          var message = new MsgDeleteName({});

          if (data.creator != null) {
            message.creator = data.creator;
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
              message = new MsgDeleteName();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.creator = reader.readString();
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
          return MsgDeleteName.deserialize(bytes);
        }
      }]);
      return MsgDeleteName;
    }(pb_1.Message);

    _nameservice.MsgDeleteName = MsgDeleteName;

    var MsgDeleteNameResponse = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(MsgDeleteNameResponse, _pb_1$Message6);

      var _super6 = _createSuper(MsgDeleteNameResponse);

      function MsgDeleteNameResponse(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, MsgDeleteNameResponse);
        _this6 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this6;
      }

      (0, _createClass2["default"])(MsgDeleteNameResponse, [{
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
          var message = new MsgDeleteNameResponse({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MsgDeleteNameResponse();

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
          return MsgDeleteNameResponse.deserialize(bytes);
        }
      }]);
      return MsgDeleteNameResponse;
    }(pb_1.Message);

    _nameservice.MsgDeleteNameResponse = MsgDeleteNameResponse;
    var UnimplementedMsgService = /*#__PURE__*/(0, _createClass2["default"])(function UnimplementedMsgService() {
      (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
    });
    (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
      CreateName: {
        path: "/kynno.nameservice.Msg/CreateName",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgCreateName.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgCreateNameResponse.deserialize(new Uint8Array(bytes));
        }
      },
      SetName: {
        path: "/kynno.nameservice.Msg/SetName",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgSetName.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgSetNameResponse.deserialize(new Uint8Array(bytes));
        }
      },
      DeleteName: {
        path: "/kynno.nameservice.Msg/DeleteName",
        requestStream: false,
        responseStream: false,
        requestSerialize: function requestSerialize(message) {
          return Buffer.from(message.serialize());
        },
        requestDeserialize: function requestDeserialize(bytes) {
          return MsgDeleteName.deserialize(new Uint8Array(bytes));
        },
        responseSerialize: function responseSerialize(message) {
          return Buffer.from(message.serialize());
        },
        responseDeserialize: function responseDeserialize(bytes) {
          return MsgDeleteNameResponse.deserialize(new Uint8Array(bytes));
        }
      }
    });
    _nameservice.UnimplementedMsgService = UnimplementedMsgService;
  })(nameservice || (nameservice = _kynno.nameservice || (_kynno.nameservice = {})));
})(kynno || (exports.kynno = kynno = {}));