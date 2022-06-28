"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

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

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var applications;

  (function (_applications) {
    var interchain_accounts;

    (function (_interchain_accounts) {
      var v1;

      (function (_v) {
        var Metadata = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(Metadata, _pb_1$Message);

          var _super = _createSuper(Metadata);

          function Metadata(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, Metadata);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("version" in data && data.version != undefined) {
                _this.version = data.version;
              }

              if ("controller_connection_id" in data && data.controller_connection_id != undefined) {
                _this.controller_connection_id = data.controller_connection_id;
              }

              if ("host_connection_id" in data && data.host_connection_id != undefined) {
                _this.host_connection_id = data.host_connection_id;
              }

              if ("address" in data && data.address != undefined) {
                _this.address = data.address;
              }

              if ("encoding" in data && data.encoding != undefined) {
                _this.encoding = data.encoding;
              }

              if ("tx_type" in data && data.tx_type != undefined) {
                _this.tx_type = data.tx_type;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(Metadata, [{
            key: "version",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "controller_connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "host_connection_id",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "address",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "encoding",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "tx_type",
            get: function get() {
              return pb_1.Message.getField(this, 6);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 6, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.version != null) {
                data.version = this.version;
              }

              if (this.controller_connection_id != null) {
                data.controller_connection_id = this.controller_connection_id;
              }

              if (this.host_connection_id != null) {
                data.host_connection_id = this.host_connection_id;
              }

              if (this.address != null) {
                data.address = this.address;
              }

              if (this.encoding != null) {
                data.encoding = this.encoding;
              }

              if (this.tx_type != null) {
                data.tx_type = this.tx_type;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.version === "string" && this.version.length) writer.writeString(1, this.version);
              if (typeof this.controller_connection_id === "string" && this.controller_connection_id.length) writer.writeString(2, this.controller_connection_id);
              if (typeof this.host_connection_id === "string" && this.host_connection_id.length) writer.writeString(3, this.host_connection_id);
              if (typeof this.address === "string" && this.address.length) writer.writeString(4, this.address);
              if (typeof this.encoding === "string" && this.encoding.length) writer.writeString(5, this.encoding);
              if (typeof this.tx_type === "string" && this.tx_type.length) writer.writeString(6, this.tx_type);
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
              var message = new Metadata({});

              if (data.version != null) {
                message.version = data.version;
              }

              if (data.controller_connection_id != null) {
                message.controller_connection_id = data.controller_connection_id;
              }

              if (data.host_connection_id != null) {
                message.host_connection_id = data.host_connection_id;
              }

              if (data.address != null) {
                message.address = data.address;
              }

              if (data.encoding != null) {
                message.encoding = data.encoding;
              }

              if (data.tx_type != null) {
                message.tx_type = data.tx_type;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Metadata();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.version = reader.readString();
                    break;

                  case 2:
                    message.controller_connection_id = reader.readString();
                    break;

                  case 3:
                    message.host_connection_id = reader.readString();
                    break;

                  case 4:
                    message.address = reader.readString();
                    break;

                  case 5:
                    message.encoding = reader.readString();
                    break;

                  case 6:
                    message.tx_type = reader.readString();
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
              return Metadata.deserialize(bytes);
            }
          }]);
          return Metadata;
        }(pb_1.Message);

        _v.Metadata = Metadata;
      })(v1 || (v1 = _interchain_accounts.v1 || (_interchain_accounts.v1 = {})));
    })(interchain_accounts || (interchain_accounts = _applications.interchain_accounts || (_applications.interchain_accounts = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
})(ibc || (exports.ibc = ibc = {}));