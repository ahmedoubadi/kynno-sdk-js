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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var kynno;
exports.kynno = kynno;

(function (_kynno) {
  var epochs;

  (function (_epochs) {
    var v1;

    (function (_v) {
      var EpochInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(EpochInfo, _pb_1$Message);

        var _super = _createSuper(EpochInfo);

        function EpochInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, EpochInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("identifier" in data && data.identifier != undefined) {
              _this.identifier = data.identifier;
            }

            if ("start_time" in data && data.start_time != undefined) {
              _this.start_time = data.start_time;
            }

            if ("duration" in data && data.duration != undefined) {
              _this.duration = data.duration;
            }

            if ("current_epoch" in data && data.current_epoch != undefined) {
              _this.current_epoch = data.current_epoch;
            }

            if ("current_epoch_start_time" in data && data.current_epoch_start_time != undefined) {
              _this.current_epoch_start_time = data.current_epoch_start_time;
            }

            if ("epoch_counting_started" in data && data.epoch_counting_started != undefined) {
              _this.epoch_counting_started = data.epoch_counting_started;
            }

            if ("current_epoch_start_height" in data && data.current_epoch_start_height != undefined) {
              _this.current_epoch_start_height = data.current_epoch_start_height;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(EpochInfo, [{
          key: "identifier",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "duration",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
          }
        }, {
          key: "current_epoch",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "current_epoch_start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 5);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
          }
        }, {
          key: "epoch_counting_started",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "current_epoch_start_height",
          get: function get() {
            return pb_1.Message.getField(this, 7);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 7, value);
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

            if (this.identifier != null) {
              data.identifier = this.identifier;
            }

            if (this.start_time != null) {
              data.start_time = this.start_time.toObject();
            }

            if (this.duration != null) {
              data.duration = this.duration.toObject();
            }

            if (this.current_epoch != null) {
              data.current_epoch = this.current_epoch;
            }

            if (this.current_epoch_start_time != null) {
              data.current_epoch_start_time = this.current_epoch_start_time.toObject();
            }

            if (this.epoch_counting_started != null) {
              data.epoch_counting_started = this.epoch_counting_started;
            }

            if (this.current_epoch_start_height != null) {
              data.current_epoch_start_height = this.current_epoch_start_height;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.identifier === "string" && this.identifier.length) writer.writeString(1, this.identifier);
            if (this.start_time !== undefined) writer.writeMessage(2, this.start_time, function () {
              return _this2.start_time.serialize(writer);
            });
            if (this.duration !== undefined) writer.writeMessage(3, this.duration, function () {
              return _this2.duration.serialize(writer);
            });
            if (this.current_epoch !== undefined) writer.writeInt64(4, this.current_epoch);
            if (this.current_epoch_start_time !== undefined) writer.writeMessage(5, this.current_epoch_start_time, function () {
              return _this2.current_epoch_start_time.serialize(writer);
            });
            if (this.epoch_counting_started !== undefined) writer.writeBool(6, this.epoch_counting_started);
            if (this.current_epoch_start_height !== undefined) writer.writeInt64(7, this.current_epoch_start_height);
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
            var message = new EpochInfo({});

            if (data.identifier != null) {
              message.identifier = data.identifier;
            }

            if (data.start_time != null) {
              message.start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.start_time);
            }

            if (data.duration != null) {
              message.duration = dependency_2.google.protobuf.Duration.fromObject(data.duration);
            }

            if (data.current_epoch != null) {
              message.current_epoch = data.current_epoch;
            }

            if (data.current_epoch_start_time != null) {
              message.current_epoch_start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.current_epoch_start_time);
            }

            if (data.epoch_counting_started != null) {
              message.epoch_counting_started = data.epoch_counting_started;
            }

            if (data.current_epoch_start_height != null) {
              message.current_epoch_start_height = data.current_epoch_start_height;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EpochInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.identifier = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.start_time, function () {
                    return message.start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.duration, function () {
                    return message.duration = dependency_2.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 4:
                  message.current_epoch = reader.readInt64();
                  break;

                case 5:
                  reader.readMessage(message.current_epoch_start_time, function () {
                    return message.current_epoch_start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 6:
                  message.epoch_counting_started = reader.readBool();
                  break;

                case 7:
                  message.current_epoch_start_height = reader.readInt64();
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
            return EpochInfo.deserialize(bytes);
          }
        }]);
        return EpochInfo;
      }(pb_1.Message);

      _v.EpochInfo = EpochInfo;

      var GenesisState = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message2);

        var _super2 = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("epochs" in data && data.epochs != undefined) {
              _this3.epochs = data.epochs;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "epochs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, EpochInfo, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

            if (this.epochs != null) {
              data.epochs = this.epochs.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.epochs !== undefined) writer.writeRepeatedMessage(1, this.epochs, function (item) {
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

            if (data.epochs != null) {
              message.epochs = data.epochs.map(function (item) {
                return EpochInfo.fromObject(item);
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
                  reader.readMessage(message.epochs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, EpochInfo.deserialize(reader), EpochInfo);
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

      _v.GenesisState = GenesisState;
    })(v1 || (v1 = _epochs.v1 || (_epochs.v1 = {})));
  })(epochs || (epochs = _kynno.epochs || (_kynno.epochs = {})));
})(kynno || (exports.kynno = kynno = {}));