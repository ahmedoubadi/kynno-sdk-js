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

var dependency_3 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var staking;

  (function (_staking) {
    var v1beta1;

    (function (_v1beta) {
      var AuthorizationType;

      (function (AuthorizationType) {
        AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
        AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
        AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
        AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
      })(AuthorizationType || (AuthorizationType = {}));

      _v1beta.AuthorizationType = AuthorizationType;

      var StakeAuthorization = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(StakeAuthorization, _pb_1$Message);

        var _super = _createSuper(StakeAuthorization);

        function StakeAuthorization(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, StakeAuthorization);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], [[2, 3]]);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("max_tokens" in data && data.max_tokens != undefined) {
              _this.max_tokens = data.max_tokens;
            }

            if ("allow_list" in data && data.allow_list != undefined) {
              _this.allow_list = data.allow_list;
            }

            if ("deny_list" in data && data.deny_list != undefined) {
              _this.deny_list = data.deny_list;
            }

            if ("authorization_type" in data && data.authorization_type != undefined) {
              _this.authorization_type = data.authorization_type;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(StakeAuthorization, [{
          key: "max_tokens",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "allow_list",
          get: function get() {
            return pb_1.Message.getWrapperField(this, StakeAuthorization.Validators, 2);
          },
          set: function set(value) {
            pb_1.Message.setOneofWrapperField(this, 2, [2, 3], value);
          }
        }, {
          key: "deny_list",
          get: function get() {
            return pb_1.Message.getWrapperField(this, StakeAuthorization.Validators, 3);
          },
          set: function set(value) {
            pb_1.Message.setOneofWrapperField(this, 3, [2, 3], value);
          }
        }, {
          key: "authorization_type",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "validators",
          get: function get() {
            var cases = {
              0: "none",
              2: "allow_list",
              3: "deny_list"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2, 3])];
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

            if (this.max_tokens != null) {
              data.max_tokens = this.max_tokens.toObject();
            }

            if (this.allow_list != null) {
              data.allow_list = this.allow_list.toObject();
            }

            if (this.deny_list != null) {
              data.deny_list = this.deny_list.toObject();
            }

            if (this.authorization_type != null) {
              data.authorization_type = this.authorization_type;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.max_tokens !== undefined) writer.writeMessage(1, this.max_tokens, function () {
              return _this2.max_tokens.serialize(writer);
            });
            if (this.allow_list !== undefined) writer.writeMessage(2, this.allow_list, function () {
              return _this2.allow_list.serialize(writer);
            });
            if (this.deny_list !== undefined) writer.writeMessage(3, this.deny_list, function () {
              return _this2.deny_list.serialize(writer);
            });
            if (this.authorization_type !== undefined) writer.writeEnum(4, this.authorization_type);
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
            var message = new StakeAuthorization({});

            if (data.max_tokens != null) {
              message.max_tokens = dependency_3.cosmos.base.v1beta1.Coin.fromObject(data.max_tokens);
            }

            if (data.allow_list != null) {
              message.allow_list = StakeAuthorization.Validators.fromObject(data.allow_list);
            }

            if (data.deny_list != null) {
              message.deny_list = StakeAuthorization.Validators.fromObject(data.deny_list);
            }

            if (data.authorization_type != null) {
              message.authorization_type = data.authorization_type;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new StakeAuthorization();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.max_tokens, function () {
                    return message.max_tokens = dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.allow_list, function () {
                    return message.allow_list = StakeAuthorization.Validators.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.deny_list, function () {
                    return message.deny_list = StakeAuthorization.Validators.deserialize(reader);
                  });
                  break;

                case 4:
                  message.authorization_type = reader.readEnum();
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
            return StakeAuthorization.deserialize(bytes);
          }
        }]);
        return StakeAuthorization;
      }(pb_1.Message);

      _v1beta.StakeAuthorization = StakeAuthorization;

      (function (_StakeAuthorization) {
        var Validators = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(Validators, _pb_1$Message2);

          var _super2 = _createSuper(Validators);

          function Validators(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, Validators);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("address" in data && data.address != undefined) {
                _this3.address = data.address;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(Validators, [{
            key: "address",
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

              if (this.address != null) {
                data.address = this.address;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.address !== undefined) writer.writeRepeatedString(1, this.address);
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
              var message = new Validators({});

              if (data.address != null) {
                message.address = data.address;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Validators();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
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
              return Validators.deserialize(bytes);
            }
          }]);
          return Validators;
        }(pb_1.Message);

        _StakeAuthorization.Validators = Validators;
      })(StakeAuthorization || (StakeAuthorization = _v1beta.StakeAuthorization || (_v1beta.StakeAuthorization = {})));
    })(v1beta1 || (v1beta1 = _staking.v1beta1 || (_staking.v1beta1 = {})));
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
})(cosmos || (exports.cosmos = cosmos = {}));