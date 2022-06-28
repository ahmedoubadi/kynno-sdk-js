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

var dependency_2 = _interopRequireWildcard(require("./../crypto/keys"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var tendermint;
exports.tendermint = tendermint;

(function (_tendermint) {
  var types;

  (function (_types) {
    var ValidatorSet = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(ValidatorSet, _pb_1$Message);

      var _super = _createSuper(ValidatorSet);

      function ValidatorSet(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, ValidatorSet);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("validators" in data && data.validators != undefined) {
            _this.validators = data.validators;
          }

          if ("proposer" in data && data.proposer != undefined) {
            _this.proposer = data.proposer;
          }

          if ("total_voting_power" in data && data.total_voting_power != undefined) {
            _this.total_voting_power = data.total_voting_power;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(ValidatorSet, [{
        key: "validators",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Validator, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "proposer",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Validator, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "total_voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
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

          if (this.validators != null) {
            data.validators = this.validators.map(function (item) {
              return item.toObject();
            });
          }

          if (this.proposer != null) {
            data.proposer = this.proposer.toObject();
          }

          if (this.total_voting_power != null) {
            data.total_voting_power = this.total_voting_power;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this2 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.validators !== undefined) writer.writeRepeatedMessage(1, this.validators, function (item) {
            return item.serialize(writer);
          });
          if (this.proposer !== undefined) writer.writeMessage(2, this.proposer, function () {
            return _this2.proposer.serialize(writer);
          });
          if (this.total_voting_power !== undefined) writer.writeInt64(3, this.total_voting_power);
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
          var message = new ValidatorSet({});

          if (data.validators != null) {
            message.validators = data.validators.map(function (item) {
              return Validator.fromObject(item);
            });
          }

          if (data.proposer != null) {
            message.proposer = Validator.fromObject(data.proposer);
          }

          if (data.total_voting_power != null) {
            message.total_voting_power = data.total_voting_power;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ValidatorSet();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.validators, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, Validator.deserialize(reader), Validator);
                });
                break;

              case 2:
                reader.readMessage(message.proposer, function () {
                  return message.proposer = Validator.deserialize(reader);
                });
                break;

              case 3:
                message.total_voting_power = reader.readInt64();
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
          return ValidatorSet.deserialize(bytes);
        }
      }]);
      return ValidatorSet;
    }(pb_1.Message);

    _types.ValidatorSet = ValidatorSet;

    var Validator = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(Validator, _pb_1$Message2);

      var _super2 = _createSuper(Validator);

      function Validator(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, Validator);
        _this3 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("address" in data && data.address != undefined) {
            _this3.address = data.address;
          }

          if ("pub_key" in data && data.pub_key != undefined) {
            _this3.pub_key = data.pub_key;
          }

          if ("voting_power" in data && data.voting_power != undefined) {
            _this3.voting_power = data.voting_power;
          }

          if ("proposer_priority" in data && data.proposer_priority != undefined) {
            _this3.proposer_priority = data.proposer_priority;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(Validator, [{
        key: "address",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "pub_key",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.crypto.PublicKey, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "proposer_priority",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
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

          if (this.address != null) {
            data.address = this.address;
          }

          if (this.pub_key != null) {
            data.pub_key = this.pub_key.toObject();
          }

          if (this.voting_power != null) {
            data.voting_power = this.voting_power;
          }

          if (this.proposer_priority != null) {
            data.proposer_priority = this.proposer_priority;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this4 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.address !== undefined) writer.writeBytes(1, this.address);
          if (this.pub_key !== undefined) writer.writeMessage(2, this.pub_key, function () {
            return _this4.pub_key.serialize(writer);
          });
          if (this.voting_power !== undefined) writer.writeInt64(3, this.voting_power);
          if (this.proposer_priority !== undefined) writer.writeInt64(4, this.proposer_priority);
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
          var message = new Validator({});

          if (data.address != null) {
            message.address = data.address;
          }

          if (data.pub_key != null) {
            message.pub_key = dependency_2.tendermint.crypto.PublicKey.fromObject(data.pub_key);
          }

          if (data.voting_power != null) {
            message.voting_power = data.voting_power;
          }

          if (data.proposer_priority != null) {
            message.proposer_priority = data.proposer_priority;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Validator();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.address = reader.readBytes();
                break;

              case 2:
                reader.readMessage(message.pub_key, function () {
                  return message.pub_key = dependency_2.tendermint.crypto.PublicKey.deserialize(reader);
                });
                break;

              case 3:
                message.voting_power = reader.readInt64();
                break;

              case 4:
                message.proposer_priority = reader.readInt64();
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
          return Validator.deserialize(bytes);
        }
      }]);
      return Validator;
    }(pb_1.Message);

    _types.Validator = Validator;

    var SimpleValidator = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(SimpleValidator, _pb_1$Message3);

      var _super3 = _createSuper(SimpleValidator);

      function SimpleValidator(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, SimpleValidator);
        _this5 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("pub_key" in data && data.pub_key != undefined) {
            _this5.pub_key = data.pub_key;
          }

          if ("voting_power" in data && data.voting_power != undefined) {
            _this5.voting_power = data.voting_power;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(SimpleValidator, [{
        key: "pub_key",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.crypto.PublicKey, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject3) {
          function toObject() {
            return _toObject3.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject3.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.pub_key != null) {
            data.pub_key = this.pub_key.toObject();
          }

          if (this.voting_power != null) {
            data.voting_power = this.voting_power;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this6 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.pub_key !== undefined) writer.writeMessage(1, this.pub_key, function () {
            return _this6.pub_key.serialize(writer);
          });
          if (this.voting_power !== undefined) writer.writeInt64(2, this.voting_power);
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
          var message = new SimpleValidator({});

          if (data.pub_key != null) {
            message.pub_key = dependency_2.tendermint.crypto.PublicKey.fromObject(data.pub_key);
          }

          if (data.voting_power != null) {
            message.voting_power = data.voting_power;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new SimpleValidator();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.pub_key, function () {
                  return message.pub_key = dependency_2.tendermint.crypto.PublicKey.deserialize(reader);
                });
                break;

              case 2:
                message.voting_power = reader.readInt64();
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
          return SimpleValidator.deserialize(bytes);
        }
      }]);
      return SimpleValidator;
    }(pb_1.Message);

    _types.SimpleValidator = SimpleValidator;
  })(types || (types = _tendermint.types || (_tendermint.types = {})));
})(tendermint || (exports.tendermint = tendermint = {}));