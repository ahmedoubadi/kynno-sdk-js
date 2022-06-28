"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tendermint = void 0;

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

var tendermint;
exports.tendermint = tendermint;

(function (_tendermint) {
  var p2p;

  (function (_p2p) {
    var NetAddress = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(NetAddress, _pb_1$Message);

      var _super = _createSuper(NetAddress);

      function NetAddress(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, NetAddress);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("id" in data && data.id != undefined) {
            _this.id = data.id;
          }

          if ("ip" in data && data.ip != undefined) {
            _this.ip = data.ip;
          }

          if ("port" in data && data.port != undefined) {
            _this.port = data.port;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(NetAddress, [{
        key: "id",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "ip",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "port",
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

          if (this.id != null) {
            data.id = this.id;
          }

          if (this.ip != null) {
            data.ip = this.ip;
          }

          if (this.port != null) {
            data.port = this.port;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.id === "string" && this.id.length) writer.writeString(1, this.id);
          if (typeof this.ip === "string" && this.ip.length) writer.writeString(2, this.ip);
          if (this.port !== undefined) writer.writeUint32(3, this.port);
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
          var message = new NetAddress({});

          if (data.id != null) {
            message.id = data.id;
          }

          if (data.ip != null) {
            message.ip = data.ip;
          }

          if (data.port != null) {
            message.port = data.port;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new NetAddress();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.id = reader.readString();
                break;

              case 2:
                message.ip = reader.readString();
                break;

              case 3:
                message.port = reader.readUint32();
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
          return NetAddress.deserialize(bytes);
        }
      }]);
      return NetAddress;
    }(pb_1.Message);

    _p2p.NetAddress = NetAddress;

    var ProtocolVersion = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(ProtocolVersion, _pb_1$Message2);

      var _super2 = _createSuper(ProtocolVersion);

      function ProtocolVersion(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, ProtocolVersion);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("p2p" in data && data.p2p != undefined) {
            _this2.p2p = data.p2p;
          }

          if ("block" in data && data.block != undefined) {
            _this2.block = data.block;
          }

          if ("app" in data && data.app != undefined) {
            _this2.app = data.app;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(ProtocolVersion, [{
        key: "p2p",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "block",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "app",
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

          if (this.p2p != null) {
            data.p2p = this.p2p;
          }

          if (this.block != null) {
            data.block = this.block;
          }

          if (this.app != null) {
            data.app = this.app;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.p2p !== undefined) writer.writeUint64(1, this.p2p);
          if (this.block !== undefined) writer.writeUint64(2, this.block);
          if (this.app !== undefined) writer.writeUint64(3, this.app);
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
          var message = new ProtocolVersion({});

          if (data.p2p != null) {
            message.p2p = data.p2p;
          }

          if (data.block != null) {
            message.block = data.block;
          }

          if (data.app != null) {
            message.app = data.app;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ProtocolVersion();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.p2p = reader.readUint64();
                break;

              case 2:
                message.block = reader.readUint64();
                break;

              case 3:
                message.app = reader.readUint64();
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
          return ProtocolVersion.deserialize(bytes);
        }
      }]);
      return ProtocolVersion;
    }(pb_1.Message);

    _p2p.ProtocolVersion = ProtocolVersion;

    var DefaultNodeInfo = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(DefaultNodeInfo, _pb_1$Message3);

      var _super3 = _createSuper(DefaultNodeInfo);

      function DefaultNodeInfo(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, DefaultNodeInfo);
        _this3 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("protocol_version" in data && data.protocol_version != undefined) {
            _this3.protocol_version = data.protocol_version;
          }

          if ("default_node_id" in data && data.default_node_id != undefined) {
            _this3.default_node_id = data.default_node_id;
          }

          if ("listen_addr" in data && data.listen_addr != undefined) {
            _this3.listen_addr = data.listen_addr;
          }

          if ("network" in data && data.network != undefined) {
            _this3.network = data.network;
          }

          if ("version" in data && data.version != undefined) {
            _this3.version = data.version;
          }

          if ("channels" in data && data.channels != undefined) {
            _this3.channels = data.channels;
          }

          if ("moniker" in data && data.moniker != undefined) {
            _this3.moniker = data.moniker;
          }

          if ("other" in data && data.other != undefined) {
            _this3.other = data.other;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(DefaultNodeInfo, [{
        key: "protocol_version",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ProtocolVersion, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "default_node_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "listen_addr",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "network",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "version",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "channels",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "moniker",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "other",
        get: function get() {
          return pb_1.Message.getWrapperField(this, DefaultNodeInfoOther, 8);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 8, value);
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

          if (this.protocol_version != null) {
            data.protocol_version = this.protocol_version.toObject();
          }

          if (this.default_node_id != null) {
            data.default_node_id = this.default_node_id;
          }

          if (this.listen_addr != null) {
            data.listen_addr = this.listen_addr;
          }

          if (this.network != null) {
            data.network = this.network;
          }

          if (this.version != null) {
            data.version = this.version;
          }

          if (this.channels != null) {
            data.channels = this.channels;
          }

          if (this.moniker != null) {
            data.moniker = this.moniker;
          }

          if (this.other != null) {
            data.other = this.other.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this4 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.protocol_version !== undefined) writer.writeMessage(1, this.protocol_version, function () {
            return _this4.protocol_version.serialize(writer);
          });
          if (typeof this.default_node_id === "string" && this.default_node_id.length) writer.writeString(2, this.default_node_id);
          if (typeof this.listen_addr === "string" && this.listen_addr.length) writer.writeString(3, this.listen_addr);
          if (typeof this.network === "string" && this.network.length) writer.writeString(4, this.network);
          if (typeof this.version === "string" && this.version.length) writer.writeString(5, this.version);
          if (this.channels !== undefined) writer.writeBytes(6, this.channels);
          if (typeof this.moniker === "string" && this.moniker.length) writer.writeString(7, this.moniker);
          if (this.other !== undefined) writer.writeMessage(8, this.other, function () {
            return _this4.other.serialize(writer);
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
          var message = new DefaultNodeInfo({});

          if (data.protocol_version != null) {
            message.protocol_version = ProtocolVersion.fromObject(data.protocol_version);
          }

          if (data.default_node_id != null) {
            message.default_node_id = data.default_node_id;
          }

          if (data.listen_addr != null) {
            message.listen_addr = data.listen_addr;
          }

          if (data.network != null) {
            message.network = data.network;
          }

          if (data.version != null) {
            message.version = data.version;
          }

          if (data.channels != null) {
            message.channels = data.channels;
          }

          if (data.moniker != null) {
            message.moniker = data.moniker;
          }

          if (data.other != null) {
            message.other = DefaultNodeInfoOther.fromObject(data.other);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new DefaultNodeInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.protocol_version, function () {
                  return message.protocol_version = ProtocolVersion.deserialize(reader);
                });
                break;

              case 2:
                message.default_node_id = reader.readString();
                break;

              case 3:
                message.listen_addr = reader.readString();
                break;

              case 4:
                message.network = reader.readString();
                break;

              case 5:
                message.version = reader.readString();
                break;

              case 6:
                message.channels = reader.readBytes();
                break;

              case 7:
                message.moniker = reader.readString();
                break;

              case 8:
                reader.readMessage(message.other, function () {
                  return message.other = DefaultNodeInfoOther.deserialize(reader);
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
          return DefaultNodeInfo.deserialize(bytes);
        }
      }]);
      return DefaultNodeInfo;
    }(pb_1.Message);

    _p2p.DefaultNodeInfo = DefaultNodeInfo;

    var DefaultNodeInfoOther = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(DefaultNodeInfoOther, _pb_1$Message4);

      var _super4 = _createSuper(DefaultNodeInfoOther);

      function DefaultNodeInfoOther(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, DefaultNodeInfoOther);
        _this5 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("tx_index" in data && data.tx_index != undefined) {
            _this5.tx_index = data.tx_index;
          }

          if ("rpc_address" in data && data.rpc_address != undefined) {
            _this5.rpc_address = data.rpc_address;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(DefaultNodeInfoOther, [{
        key: "tx_index",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "rpc_address",
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

          if (this.tx_index != null) {
            data.tx_index = this.tx_index;
          }

          if (this.rpc_address != null) {
            data.rpc_address = this.rpc_address;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.tx_index === "string" && this.tx_index.length) writer.writeString(1, this.tx_index);
          if (typeof this.rpc_address === "string" && this.rpc_address.length) writer.writeString(2, this.rpc_address);
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
          var message = new DefaultNodeInfoOther({});

          if (data.tx_index != null) {
            message.tx_index = data.tx_index;
          }

          if (data.rpc_address != null) {
            message.rpc_address = data.rpc_address;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new DefaultNodeInfoOther();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.tx_index = reader.readString();
                break;

              case 2:
                message.rpc_address = reader.readString();
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
          return DefaultNodeInfoOther.deserialize(bytes);
        }
      }]);
      return DefaultNodeInfoOther;
    }(pb_1.Message);

    _p2p.DefaultNodeInfoOther = DefaultNodeInfoOther;
  })(p2p || (p2p = _tendermint.p2p || (_tendermint.p2p = {})));
})(tendermint || (exports.tendermint = tendermint = {}));