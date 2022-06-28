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
  var base;

  (function (_base) {
    var query;

    (function (_query) {
      var v1beta1;

      (function (_v1beta) {
        var PageRequest = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(PageRequest, _pb_1$Message);

          var _super = _createSuper(PageRequest);

          function PageRequest(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, PageRequest);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("key" in data && data.key != undefined) {
                _this.key = data.key;
              }

              if ("offset" in data && data.offset != undefined) {
                _this.offset = data.offset;
              }

              if ("limit" in data && data.limit != undefined) {
                _this.limit = data.limit;
              }

              if ("count_total" in data && data.count_total != undefined) {
                _this.count_total = data.count_total;
              }

              if ("reverse" in data && data.reverse != undefined) {
                _this.reverse = data.reverse;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(PageRequest, [{
            key: "key",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "offset",
            get: function get() {
              return pb_1.Message.getField(this, 2);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 2, value);
            }
          }, {
            key: "limit",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "count_total",
            get: function get() {
              return pb_1.Message.getField(this, 4);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 4, value);
            }
          }, {
            key: "reverse",
            get: function get() {
              return pb_1.Message.getField(this, 5);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 5, value);
            }
          }, {
            key: "toObject",
            value: function toObject() {
              var data = {};

              if (this.key != null) {
                data.key = this.key;
              }

              if (this.offset != null) {
                data.offset = this.offset;
              }

              if (this.limit != null) {
                data.limit = this.limit;
              }

              if (this.count_total != null) {
                data.count_total = this.count_total;
              }

              if (this.reverse != null) {
                data.reverse = this.reverse;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.key !== undefined) writer.writeBytes(1, this.key);
              if (this.offset !== undefined) writer.writeUint64(2, this.offset);
              if (this.limit !== undefined) writer.writeUint64(3, this.limit);
              if (this.count_total !== undefined) writer.writeBool(4, this.count_total);
              if (this.reverse !== undefined) writer.writeBool(5, this.reverse);
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
              var message = new PageRequest({});

              if (data.key != null) {
                message.key = data.key;
              }

              if (data.offset != null) {
                message.offset = data.offset;
              }

              if (data.limit != null) {
                message.limit = data.limit;
              }

              if (data.count_total != null) {
                message.count_total = data.count_total;
              }

              if (data.reverse != null) {
                message.reverse = data.reverse;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PageRequest();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.key = reader.readBytes();
                    break;

                  case 2:
                    message.offset = reader.readUint64();
                    break;

                  case 3:
                    message.limit = reader.readUint64();
                    break;

                  case 4:
                    message.count_total = reader.readBool();
                    break;

                  case 5:
                    message.reverse = reader.readBool();
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
              return PageRequest.deserialize(bytes);
            }
          }]);
          return PageRequest;
        }(pb_1.Message);

        _v1beta.PageRequest = PageRequest;

        var PageResponse = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(PageResponse, _pb_1$Message2);

          var _super2 = _createSuper(PageResponse);

          function PageResponse(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, PageResponse);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("next_key" in data && data.next_key != undefined) {
                _this2.next_key = data.next_key;
              }

              if ("total" in data && data.total != undefined) {
                _this2.total = data.total;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(PageResponse, [{
            key: "next_key",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "total",
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

              if (this.next_key != null) {
                data.next_key = this.next_key;
              }

              if (this.total != null) {
                data.total = this.total;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.next_key !== undefined) writer.writeBytes(1, this.next_key);
              if (this.total !== undefined) writer.writeUint64(2, this.total);
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
              var message = new PageResponse({});

              if (data.next_key != null) {
                message.next_key = data.next_key;
              }

              if (data.total != null) {
                message.total = data.total;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new PageResponse();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.next_key = reader.readBytes();
                    break;

                  case 2:
                    message.total = reader.readUint64();
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
              return PageResponse.deserialize(bytes);
            }
          }]);
          return PageResponse;
        }(pb_1.Message);

        _v1beta.PageResponse = PageResponse;
      })(v1beta1 || (v1beta1 = _query.v1beta1 || (_query.v1beta1 = {})));
    })(query || (query = _base.query || (_base.query = {})));
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
})(cosmos || (exports.cosmos = cosmos = {}));