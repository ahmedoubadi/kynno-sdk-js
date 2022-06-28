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

var dependency_2 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_3 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var dependency_4 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_6 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_7 = _interopRequireWildcard(require("./../../../tendermint/types/types"));

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
      var BondStatus;

      (function (BondStatus) {
        BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
        BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
        BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
        BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
      })(BondStatus || (BondStatus = {}));

      _v1beta.BondStatus = BondStatus;

      var HistoricalInfo = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(HistoricalInfo, _pb_1$Message);

        var _super = _createSuper(HistoricalInfo);

        function HistoricalInfo(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, HistoricalInfo);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("header" in data && data.header != undefined) {
              _this.header = data.header;
            }

            if ("valset" in data && data.valset != undefined) {
              _this.valset = data.valset;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(HistoricalInfo, [{
          key: "header",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_7.tendermint.types.Header, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "valset",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, Validator, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

            if (this.header != null) {
              data.header = this.header.toObject();
            }

            if (this.valset != null) {
              data.valset = this.valset.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.header !== undefined) writer.writeMessage(1, this.header, function () {
              return _this2.header.serialize(writer);
            });
            if (this.valset !== undefined) writer.writeRepeatedMessage(2, this.valset, function (item) {
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
            var message = new HistoricalInfo({});

            if (data.header != null) {
              message.header = dependency_7.tendermint.types.Header.fromObject(data.header);
            }

            if (data.valset != null) {
              message.valset = data.valset.map(function (item) {
                return Validator.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new HistoricalInfo();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.header, function () {
                    return message.header = dependency_7.tendermint.types.Header.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.valset, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, Validator.deserialize(reader), Validator);
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
            return HistoricalInfo.deserialize(bytes);
          }
        }]);
        return HistoricalInfo;
      }(pb_1.Message);

      _v1beta.HistoricalInfo = HistoricalInfo;

      var CommissionRates = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(CommissionRates, _pb_1$Message2);

        var _super2 = _createSuper(CommissionRates);

        function CommissionRates(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, CommissionRates);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("rate" in data && data.rate != undefined) {
              _this3.rate = data.rate;
            }

            if ("max_rate" in data && data.max_rate != undefined) {
              _this3.max_rate = data.max_rate;
            }

            if ("max_change_rate" in data && data.max_change_rate != undefined) {
              _this3.max_change_rate = data.max_change_rate;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(CommissionRates, [{
          key: "rate",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "max_rate",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "max_change_rate",
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

            if (this.rate != null) {
              data.rate = this.rate;
            }

            if (this.max_rate != null) {
              data.max_rate = this.max_rate;
            }

            if (this.max_change_rate != null) {
              data.max_change_rate = this.max_change_rate;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.rate === "string" && this.rate.length) writer.writeString(1, this.rate);
            if (typeof this.max_rate === "string" && this.max_rate.length) writer.writeString(2, this.max_rate);
            if (typeof this.max_change_rate === "string" && this.max_change_rate.length) writer.writeString(3, this.max_change_rate);
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
            var message = new CommissionRates({});

            if (data.rate != null) {
              message.rate = data.rate;
            }

            if (data.max_rate != null) {
              message.max_rate = data.max_rate;
            }

            if (data.max_change_rate != null) {
              message.max_change_rate = data.max_change_rate;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new CommissionRates();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.rate = reader.readString();
                  break;

                case 2:
                  message.max_rate = reader.readString();
                  break;

                case 3:
                  message.max_change_rate = reader.readString();
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
            return CommissionRates.deserialize(bytes);
          }
        }]);
        return CommissionRates;
      }(pb_1.Message);

      _v1beta.CommissionRates = CommissionRates;

      var Commission = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(Commission, _pb_1$Message3);

        var _super3 = _createSuper(Commission);

        function Commission(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, Commission);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("commission_rates" in data && data.commission_rates != undefined) {
              _this4.commission_rates = data.commission_rates;
            }

            if ("update_time" in data && data.update_time != undefined) {
              _this4.update_time = data.update_time;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(Commission, [{
          key: "commission_rates",
          get: function get() {
            return pb_1.Message.getWrapperField(this, CommissionRates, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "update_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.commission_rates != null) {
              data.commission_rates = this.commission_rates.toObject();
            }

            if (this.update_time != null) {
              data.update_time = this.update_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.commission_rates !== undefined) writer.writeMessage(1, this.commission_rates, function () {
              return _this5.commission_rates.serialize(writer);
            });
            if (this.update_time !== undefined) writer.writeMessage(2, this.update_time, function () {
              return _this5.update_time.serialize(writer);
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
            var message = new Commission({});

            if (data.commission_rates != null) {
              message.commission_rates = CommissionRates.fromObject(data.commission_rates);
            }

            if (data.update_time != null) {
              message.update_time = dependency_4.google.protobuf.Timestamp.fromObject(data.update_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Commission();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.commission_rates, function () {
                    return message.commission_rates = CommissionRates.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.update_time, function () {
                    return message.update_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
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
            return Commission.deserialize(bytes);
          }
        }]);
        return Commission;
      }(pb_1.Message);

      _v1beta.Commission = Commission;

      var Description = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(Description, _pb_1$Message4);

        var _super4 = _createSuper(Description);

        function Description(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, Description);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("moniker" in data && data.moniker != undefined) {
              _this6.moniker = data.moniker;
            }

            if ("identity" in data && data.identity != undefined) {
              _this6.identity = data.identity;
            }

            if ("website" in data && data.website != undefined) {
              _this6.website = data.website;
            }

            if ("security_contact" in data && data.security_contact != undefined) {
              _this6.security_contact = data.security_contact;
            }

            if ("details" in data && data.details != undefined) {
              _this6.details = data.details;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(Description, [{
          key: "moniker",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "identity",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "website",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "security_contact",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "details",
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

            if (this.moniker != null) {
              data.moniker = this.moniker;
            }

            if (this.identity != null) {
              data.identity = this.identity;
            }

            if (this.website != null) {
              data.website = this.website;
            }

            if (this.security_contact != null) {
              data.security_contact = this.security_contact;
            }

            if (this.details != null) {
              data.details = this.details;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.moniker === "string" && this.moniker.length) writer.writeString(1, this.moniker);
            if (typeof this.identity === "string" && this.identity.length) writer.writeString(2, this.identity);
            if (typeof this.website === "string" && this.website.length) writer.writeString(3, this.website);
            if (typeof this.security_contact === "string" && this.security_contact.length) writer.writeString(4, this.security_contact);
            if (typeof this.details === "string" && this.details.length) writer.writeString(5, this.details);
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
            var message = new Description({});

            if (data.moniker != null) {
              message.moniker = data.moniker;
            }

            if (data.identity != null) {
              message.identity = data.identity;
            }

            if (data.website != null) {
              message.website = data.website;
            }

            if (data.security_contact != null) {
              message.security_contact = data.security_contact;
            }

            if (data.details != null) {
              message.details = data.details;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Description();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.moniker = reader.readString();
                  break;

                case 2:
                  message.identity = reader.readString();
                  break;

                case 3:
                  message.website = reader.readString();
                  break;

                case 4:
                  message.security_contact = reader.readString();
                  break;

                case 5:
                  message.details = reader.readString();
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
            return Description.deserialize(bytes);
          }
        }]);
        return Description;
      }(pb_1.Message);

      _v1beta.Description = Description;

      var Validator = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(Validator, _pb_1$Message5);

        var _super5 = _createSuper(Validator);

        function Validator(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, Validator);
          _this7 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("operator_address" in data && data.operator_address != undefined) {
              _this7.operator_address = data.operator_address;
            }

            if ("consensus_pubkey" in data && data.consensus_pubkey != undefined) {
              _this7.consensus_pubkey = data.consensus_pubkey;
            }

            if ("jailed" in data && data.jailed != undefined) {
              _this7.jailed = data.jailed;
            }

            if ("status" in data && data.status != undefined) {
              _this7.status = data.status;
            }

            if ("tokens" in data && data.tokens != undefined) {
              _this7.tokens = data.tokens;
            }

            if ("delegator_shares" in data && data.delegator_shares != undefined) {
              _this7.delegator_shares = data.delegator_shares;
            }

            if ("description" in data && data.description != undefined) {
              _this7.description = data.description;
            }

            if ("unbonding_height" in data && data.unbonding_height != undefined) {
              _this7.unbonding_height = data.unbonding_height;
            }

            if ("unbonding_time" in data && data.unbonding_time != undefined) {
              _this7.unbonding_time = data.unbonding_time;
            }

            if ("commission" in data && data.commission != undefined) {
              _this7.commission = data.commission;
            }

            if ("min_self_delegation" in data && data.min_self_delegation != undefined) {
              _this7.min_self_delegation = data.min_self_delegation;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(Validator, [{
          key: "operator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "consensus_pubkey",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "jailed",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "status",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "tokens",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "delegator_shares",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "description",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Description, 7);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 7, value);
          }
        }, {
          key: "unbonding_height",
          get: function get() {
            return pb_1.Message.getField(this, 8);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 8, value);
          }
        }, {
          key: "unbonding_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 9);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 9, value);
          }
        }, {
          key: "commission",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Commission, 10);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 10, value);
          }
        }, {
          key: "min_self_delegation",
          get: function get() {
            return pb_1.Message.getField(this, 11);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 11, value);
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

            if (this.operator_address != null) {
              data.operator_address = this.operator_address;
            }

            if (this.consensus_pubkey != null) {
              data.consensus_pubkey = this.consensus_pubkey.toObject();
            }

            if (this.jailed != null) {
              data.jailed = this.jailed;
            }

            if (this.status != null) {
              data.status = this.status;
            }

            if (this.tokens != null) {
              data.tokens = this.tokens;
            }

            if (this.delegator_shares != null) {
              data.delegator_shares = this.delegator_shares;
            }

            if (this.description != null) {
              data.description = this.description.toObject();
            }

            if (this.unbonding_height != null) {
              data.unbonding_height = this.unbonding_height;
            }

            if (this.unbonding_time != null) {
              data.unbonding_time = this.unbonding_time.toObject();
            }

            if (this.commission != null) {
              data.commission = this.commission.toObject();
            }

            if (this.min_self_delegation != null) {
              data.min_self_delegation = this.min_self_delegation;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this8 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.operator_address === "string" && this.operator_address.length) writer.writeString(1, this.operator_address);
            if (this.consensus_pubkey !== undefined) writer.writeMessage(2, this.consensus_pubkey, function () {
              return _this8.consensus_pubkey.serialize(writer);
            });
            if (this.jailed !== undefined) writer.writeBool(3, this.jailed);
            if (this.status !== undefined) writer.writeEnum(4, this.status);
            if (typeof this.tokens === "string" && this.tokens.length) writer.writeString(5, this.tokens);
            if (typeof this.delegator_shares === "string" && this.delegator_shares.length) writer.writeString(6, this.delegator_shares);
            if (this.description !== undefined) writer.writeMessage(7, this.description, function () {
              return _this8.description.serialize(writer);
            });
            if (this.unbonding_height !== undefined) writer.writeInt64(8, this.unbonding_height);
            if (this.unbonding_time !== undefined) writer.writeMessage(9, this.unbonding_time, function () {
              return _this8.unbonding_time.serialize(writer);
            });
            if (this.commission !== undefined) writer.writeMessage(10, this.commission, function () {
              return _this8.commission.serialize(writer);
            });
            if (typeof this.min_self_delegation === "string" && this.min_self_delegation.length) writer.writeString(11, this.min_self_delegation);
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

            if (data.operator_address != null) {
              message.operator_address = data.operator_address;
            }

            if (data.consensus_pubkey != null) {
              message.consensus_pubkey = dependency_2.google.protobuf.Any.fromObject(data.consensus_pubkey);
            }

            if (data.jailed != null) {
              message.jailed = data.jailed;
            }

            if (data.status != null) {
              message.status = data.status;
            }

            if (data.tokens != null) {
              message.tokens = data.tokens;
            }

            if (data.delegator_shares != null) {
              message.delegator_shares = data.delegator_shares;
            }

            if (data.description != null) {
              message.description = Description.fromObject(data.description);
            }

            if (data.unbonding_height != null) {
              message.unbonding_height = data.unbonding_height;
            }

            if (data.unbonding_time != null) {
              message.unbonding_time = dependency_4.google.protobuf.Timestamp.fromObject(data.unbonding_time);
            }

            if (data.commission != null) {
              message.commission = Commission.fromObject(data.commission);
            }

            if (data.min_self_delegation != null) {
              message.min_self_delegation = data.min_self_delegation;
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
                  message.operator_address = reader.readString();
                  break;

                case 2:
                  reader.readMessage(message.consensus_pubkey, function () {
                    return message.consensus_pubkey = dependency_2.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 3:
                  message.jailed = reader.readBool();
                  break;

                case 4:
                  message.status = reader.readEnum();
                  break;

                case 5:
                  message.tokens = reader.readString();
                  break;

                case 6:
                  message.delegator_shares = reader.readString();
                  break;

                case 7:
                  reader.readMessage(message.description, function () {
                    return message.description = Description.deserialize(reader);
                  });
                  break;

                case 8:
                  message.unbonding_height = reader.readInt64();
                  break;

                case 9:
                  reader.readMessage(message.unbonding_time, function () {
                    return message.unbonding_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 10:
                  reader.readMessage(message.commission, function () {
                    return message.commission = Commission.deserialize(reader);
                  });
                  break;

                case 11:
                  message.min_self_delegation = reader.readString();
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

      _v1beta.Validator = Validator;

      var ValAddresses = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(ValAddresses, _pb_1$Message6);

        var _super6 = _createSuper(ValAddresses);

        function ValAddresses(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, ValAddresses);
          _this9 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("addresses" in data && data.addresses != undefined) {
              _this9.addresses = data.addresses;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(ValAddresses, [{
          key: "addresses",
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

            if (this.addresses != null) {
              data.addresses = this.addresses;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.addresses !== undefined) writer.writeRepeatedString(1, this.addresses);
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
            var message = new ValAddresses({});

            if (data.addresses != null) {
              message.addresses = data.addresses;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ValAddresses();

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
            return ValAddresses.deserialize(bytes);
          }
        }]);
        return ValAddresses;
      }(pb_1.Message);

      _v1beta.ValAddresses = ValAddresses;

      var DVPair = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(DVPair, _pb_1$Message7);

        var _super7 = _createSuper(DVPair);

        function DVPair(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, DVPair);
          _this10 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this10.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this10.validator_address = data.validator_address;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(DVPair, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
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
            var message = new DVPair({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DVPair();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
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
            return DVPair.deserialize(bytes);
          }
        }]);
        return DVPair;
      }(pb_1.Message);

      _v1beta.DVPair = DVPair;

      var DVPairs = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(DVPairs, _pb_1$Message8);

        var _super8 = _createSuper(DVPairs);

        function DVPairs(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, DVPairs);
          _this11 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("pairs" in data && data.pairs != undefined) {
              _this11.pairs = data.pairs;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(DVPairs, [{
          key: "pairs",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, DVPair, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject4) {
            function toObject() {
              return _toObject4.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject4.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.pairs != null) {
              data.pairs = this.pairs.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.pairs !== undefined) writer.writeRepeatedMessage(1, this.pairs, function (item) {
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
            var message = new DVPairs({});

            if (data.pairs != null) {
              message.pairs = data.pairs.map(function (item) {
                return DVPair.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DVPairs();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.pairs, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, DVPair.deserialize(reader), DVPair);
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
            return DVPairs.deserialize(bytes);
          }
        }]);
        return DVPairs;
      }(pb_1.Message);

      _v1beta.DVPairs = DVPairs;

      var DVVTriplet = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(DVVTriplet, _pb_1$Message9);

        var _super9 = _createSuper(DVVTriplet);

        function DVVTriplet(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, DVVTriplet);
          _this12 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this12.delegator_address = data.delegator_address;
            }

            if ("validator_src_address" in data && data.validator_src_address != undefined) {
              _this12.validator_src_address = data.validator_src_address;
            }

            if ("validator_dst_address" in data && data.validator_dst_address != undefined) {
              _this12.validator_dst_address = data.validator_dst_address;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(DVVTriplet, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_src_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "validator_dst_address",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_src_address != null) {
              data.validator_src_address = this.validator_src_address;
            }

            if (this.validator_dst_address != null) {
              data.validator_dst_address = this.validator_dst_address;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_src_address === "string" && this.validator_src_address.length) writer.writeString(2, this.validator_src_address);
            if (typeof this.validator_dst_address === "string" && this.validator_dst_address.length) writer.writeString(3, this.validator_dst_address);
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
            var message = new DVVTriplet({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_src_address != null) {
              message.validator_src_address = data.validator_src_address;
            }

            if (data.validator_dst_address != null) {
              message.validator_dst_address = data.validator_dst_address;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DVVTriplet();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_src_address = reader.readString();
                  break;

                case 3:
                  message.validator_dst_address = reader.readString();
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
            return DVVTriplet.deserialize(bytes);
          }
        }]);
        return DVVTriplet;
      }(pb_1.Message);

      _v1beta.DVVTriplet = DVVTriplet;

      var DVVTriplets = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(DVVTriplets, _pb_1$Message10);

        var _super10 = _createSuper(DVVTriplets);

        function DVVTriplets(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, DVVTriplets);
          _this13 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("triplets" in data && data.triplets != undefined) {
              _this13.triplets = data.triplets;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(DVVTriplets, [{
          key: "triplets",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, DVVTriplet, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject5) {
            function toObject() {
              return _toObject5.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject5.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.triplets != null) {
              data.triplets = this.triplets.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.triplets !== undefined) writer.writeRepeatedMessage(1, this.triplets, function (item) {
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
            var message = new DVVTriplets({});

            if (data.triplets != null) {
              message.triplets = data.triplets.map(function (item) {
                return DVVTriplet.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DVVTriplets();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.triplets, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, DVVTriplet.deserialize(reader), DVVTriplet);
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
            return DVVTriplets.deserialize(bytes);
          }
        }]);
        return DVVTriplets;
      }(pb_1.Message);

      _v1beta.DVVTriplets = DVVTriplets;

      var Delegation = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(Delegation, _pb_1$Message11);

        var _super11 = _createSuper(Delegation);

        function Delegation(data) {
          var _this14;

          (0, _classCallCheck2["default"])(this, Delegation);
          _this14 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this14.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this14.validator_address = data.validator_address;
            }

            if ("shares" in data && data.shares != undefined) {
              _this14.shares = data.shares;
            }
          }

          return _this14;
        }

        (0, _createClass2["default"])(Delegation, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "shares",
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

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.shares != null) {
              data.shares = this.shares;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (typeof this.shares === "string" && this.shares.length) writer.writeString(3, this.shares);
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
            var message = new Delegation({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.shares != null) {
              message.shares = data.shares;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Delegation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
                  break;

                case 3:
                  message.shares = reader.readString();
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
            return Delegation.deserialize(bytes);
          }
        }]);
        return Delegation;
      }(pb_1.Message);

      _v1beta.Delegation = Delegation;

      var UnbondingDelegation = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(UnbondingDelegation, _pb_1$Message12);

        var _super12 = _createSuper(UnbondingDelegation);

        function UnbondingDelegation(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, UnbondingDelegation);
          _this15 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this15.delegator_address = data.delegator_address;
            }

            if ("validator_address" in data && data.validator_address != undefined) {
              _this15.validator_address = data.validator_address;
            }

            if ("entries" in data && data.entries != undefined) {
              _this15.entries = data.entries;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(UnbondingDelegation, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "entries",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, UnbondingDelegationEntry, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject6) {
            function toObject() {
              return _toObject6.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject6.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_address != null) {
              data.validator_address = this.validator_address;
            }

            if (this.entries != null) {
              data.entries = this.entries.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length) writer.writeString(2, this.validator_address);
            if (this.entries !== undefined) writer.writeRepeatedMessage(3, this.entries, function (item) {
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
            var message = new UnbondingDelegation({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_address != null) {
              message.validator_address = data.validator_address;
            }

            if (data.entries != null) {
              message.entries = data.entries.map(function (item) {
                return UnbondingDelegationEntry.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new UnbondingDelegation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_address = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.entries, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, UnbondingDelegationEntry.deserialize(reader), UnbondingDelegationEntry);
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
            return UnbondingDelegation.deserialize(bytes);
          }
        }]);
        return UnbondingDelegation;
      }(pb_1.Message);

      _v1beta.UnbondingDelegation = UnbondingDelegation;

      var UnbondingDelegationEntry = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(UnbondingDelegationEntry, _pb_1$Message13);

        var _super13 = _createSuper(UnbondingDelegationEntry);

        function UnbondingDelegationEntry(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, UnbondingDelegationEntry);
          _this16 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("creation_height" in data && data.creation_height != undefined) {
              _this16.creation_height = data.creation_height;
            }

            if ("completion_time" in data && data.completion_time != undefined) {
              _this16.completion_time = data.completion_time;
            }

            if ("initial_balance" in data && data.initial_balance != undefined) {
              _this16.initial_balance = data.initial_balance;
            }

            if ("balance" in data && data.balance != undefined) {
              _this16.balance = data.balance;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(UnbondingDelegationEntry, [{
          key: "creation_height",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "completion_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "initial_balance",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "balance",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject7) {
            function toObject() {
              return _toObject7.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject7.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.creation_height != null) {
              data.creation_height = this.creation_height;
            }

            if (this.completion_time != null) {
              data.completion_time = this.completion_time.toObject();
            }

            if (this.initial_balance != null) {
              data.initial_balance = this.initial_balance;
            }

            if (this.balance != null) {
              data.balance = this.balance;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this17 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.creation_height !== undefined) writer.writeInt64(1, this.creation_height);
            if (this.completion_time !== undefined) writer.writeMessage(2, this.completion_time, function () {
              return _this17.completion_time.serialize(writer);
            });
            if (typeof this.initial_balance === "string" && this.initial_balance.length) writer.writeString(3, this.initial_balance);
            if (typeof this.balance === "string" && this.balance.length) writer.writeString(4, this.balance);
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
            var message = new UnbondingDelegationEntry({});

            if (data.creation_height != null) {
              message.creation_height = data.creation_height;
            }

            if (data.completion_time != null) {
              message.completion_time = dependency_4.google.protobuf.Timestamp.fromObject(data.completion_time);
            }

            if (data.initial_balance != null) {
              message.initial_balance = data.initial_balance;
            }

            if (data.balance != null) {
              message.balance = data.balance;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new UnbondingDelegationEntry();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.creation_height = reader.readInt64();
                  break;

                case 2:
                  reader.readMessage(message.completion_time, function () {
                    return message.completion_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  message.initial_balance = reader.readString();
                  break;

                case 4:
                  message.balance = reader.readString();
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
            return UnbondingDelegationEntry.deserialize(bytes);
          }
        }]);
        return UnbondingDelegationEntry;
      }(pb_1.Message);

      _v1beta.UnbondingDelegationEntry = UnbondingDelegationEntry;

      var RedelegationEntry = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(RedelegationEntry, _pb_1$Message14);

        var _super14 = _createSuper(RedelegationEntry);

        function RedelegationEntry(data) {
          var _this18;

          (0, _classCallCheck2["default"])(this, RedelegationEntry);
          _this18 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("creation_height" in data && data.creation_height != undefined) {
              _this18.creation_height = data.creation_height;
            }

            if ("completion_time" in data && data.completion_time != undefined) {
              _this18.completion_time = data.completion_time;
            }

            if ("initial_balance" in data && data.initial_balance != undefined) {
              _this18.initial_balance = data.initial_balance;
            }

            if ("shares_dst" in data && data.shares_dst != undefined) {
              _this18.shares_dst = data.shares_dst;
            }
          }

          return _this18;
        }

        (0, _createClass2["default"])(RedelegationEntry, [{
          key: "creation_height",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "completion_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "initial_balance",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "shares_dst",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject8) {
            function toObject() {
              return _toObject8.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject8.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.creation_height != null) {
              data.creation_height = this.creation_height;
            }

            if (this.completion_time != null) {
              data.completion_time = this.completion_time.toObject();
            }

            if (this.initial_balance != null) {
              data.initial_balance = this.initial_balance;
            }

            if (this.shares_dst != null) {
              data.shares_dst = this.shares_dst;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this19 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.creation_height !== undefined) writer.writeInt64(1, this.creation_height);
            if (this.completion_time !== undefined) writer.writeMessage(2, this.completion_time, function () {
              return _this19.completion_time.serialize(writer);
            });
            if (typeof this.initial_balance === "string" && this.initial_balance.length) writer.writeString(3, this.initial_balance);
            if (typeof this.shares_dst === "string" && this.shares_dst.length) writer.writeString(4, this.shares_dst);
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
            var message = new RedelegationEntry({});

            if (data.creation_height != null) {
              message.creation_height = data.creation_height;
            }

            if (data.completion_time != null) {
              message.completion_time = dependency_4.google.protobuf.Timestamp.fromObject(data.completion_time);
            }

            if (data.initial_balance != null) {
              message.initial_balance = data.initial_balance;
            }

            if (data.shares_dst != null) {
              message.shares_dst = data.shares_dst;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RedelegationEntry();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.creation_height = reader.readInt64();
                  break;

                case 2:
                  reader.readMessage(message.completion_time, function () {
                    return message.completion_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 3:
                  message.initial_balance = reader.readString();
                  break;

                case 4:
                  message.shares_dst = reader.readString();
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
            return RedelegationEntry.deserialize(bytes);
          }
        }]);
        return RedelegationEntry;
      }(pb_1.Message);

      _v1beta.RedelegationEntry = RedelegationEntry;

      var Redelegation = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(Redelegation, _pb_1$Message15);

        var _super15 = _createSuper(Redelegation);

        function Redelegation(data) {
          var _this20;

          (0, _classCallCheck2["default"])(this, Redelegation);
          _this20 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegator_address" in data && data.delegator_address != undefined) {
              _this20.delegator_address = data.delegator_address;
            }

            if ("validator_src_address" in data && data.validator_src_address != undefined) {
              _this20.validator_src_address = data.validator_src_address;
            }

            if ("validator_dst_address" in data && data.validator_dst_address != undefined) {
              _this20.validator_dst_address = data.validator_dst_address;
            }

            if ("entries" in data && data.entries != undefined) {
              _this20.entries = data.entries;
            }
          }

          return _this20;
        }

        (0, _createClass2["default"])(Redelegation, [{
          key: "delegator_address",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "validator_src_address",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "validator_dst_address",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "entries",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, RedelegationEntry, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject9) {
            function toObject() {
              return _toObject9.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject9.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.delegator_address != null) {
              data.delegator_address = this.delegator_address;
            }

            if (this.validator_src_address != null) {
              data.validator_src_address = this.validator_src_address;
            }

            if (this.validator_dst_address != null) {
              data.validator_dst_address = this.validator_dst_address;
            }

            if (this.entries != null) {
              data.entries = this.entries.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length) writer.writeString(1, this.delegator_address);
            if (typeof this.validator_src_address === "string" && this.validator_src_address.length) writer.writeString(2, this.validator_src_address);
            if (typeof this.validator_dst_address === "string" && this.validator_dst_address.length) writer.writeString(3, this.validator_dst_address);
            if (this.entries !== undefined) writer.writeRepeatedMessage(4, this.entries, function (item) {
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
            var message = new Redelegation({});

            if (data.delegator_address != null) {
              message.delegator_address = data.delegator_address;
            }

            if (data.validator_src_address != null) {
              message.validator_src_address = data.validator_src_address;
            }

            if (data.validator_dst_address != null) {
              message.validator_dst_address = data.validator_dst_address;
            }

            if (data.entries != null) {
              message.entries = data.entries.map(function (item) {
                return RedelegationEntry.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Redelegation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.delegator_address = reader.readString();
                  break;

                case 2:
                  message.validator_src_address = reader.readString();
                  break;

                case 3:
                  message.validator_dst_address = reader.readString();
                  break;

                case 4:
                  reader.readMessage(message.entries, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, RedelegationEntry.deserialize(reader), RedelegationEntry);
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
            return Redelegation.deserialize(bytes);
          }
        }]);
        return Redelegation;
      }(pb_1.Message);

      _v1beta.Redelegation = Redelegation;

      var Params = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(Params, _pb_1$Message16);

        var _super16 = _createSuper(Params);

        function Params(data) {
          var _this21;

          (0, _classCallCheck2["default"])(this, Params);
          _this21 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("unbonding_time" in data && data.unbonding_time != undefined) {
              _this21.unbonding_time = data.unbonding_time;
            }

            if ("max_validators" in data && data.max_validators != undefined) {
              _this21.max_validators = data.max_validators;
            }

            if ("max_entries" in data && data.max_entries != undefined) {
              _this21.max_entries = data.max_entries;
            }

            if ("historical_entries" in data && data.historical_entries != undefined) {
              _this21.historical_entries = data.historical_entries;
            }

            if ("bond_denom" in data && data.bond_denom != undefined) {
              _this21.bond_denom = data.bond_denom;
            }
          }

          return _this21;
        }

        (0, _createClass2["default"])(Params, [{
          key: "unbonding_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Duration, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "max_validators",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "max_entries",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "historical_entries",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "bond_denom",
          get: function get() {
            return pb_1.Message.getField(this, 5);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 5, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject10) {
            function toObject() {
              return _toObject10.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject10.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.unbonding_time != null) {
              data.unbonding_time = this.unbonding_time.toObject();
            }

            if (this.max_validators != null) {
              data.max_validators = this.max_validators;
            }

            if (this.max_entries != null) {
              data.max_entries = this.max_entries;
            }

            if (this.historical_entries != null) {
              data.historical_entries = this.historical_entries;
            }

            if (this.bond_denom != null) {
              data.bond_denom = this.bond_denom;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this22 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.unbonding_time !== undefined) writer.writeMessage(1, this.unbonding_time, function () {
              return _this22.unbonding_time.serialize(writer);
            });
            if (this.max_validators !== undefined) writer.writeUint32(2, this.max_validators);
            if (this.max_entries !== undefined) writer.writeUint32(3, this.max_entries);
            if (this.historical_entries !== undefined) writer.writeUint32(4, this.historical_entries);
            if (typeof this.bond_denom === "string" && this.bond_denom.length) writer.writeString(5, this.bond_denom);
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
            var message = new Params({});

            if (data.unbonding_time != null) {
              message.unbonding_time = dependency_3.google.protobuf.Duration.fromObject(data.unbonding_time);
            }

            if (data.max_validators != null) {
              message.max_validators = data.max_validators;
            }

            if (data.max_entries != null) {
              message.max_entries = data.max_entries;
            }

            if (data.historical_entries != null) {
              message.historical_entries = data.historical_entries;
            }

            if (data.bond_denom != null) {
              message.bond_denom = data.bond_denom;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Params();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.unbonding_time, function () {
                    return message.unbonding_time = dependency_3.google.protobuf.Duration.deserialize(reader);
                  });
                  break;

                case 2:
                  message.max_validators = reader.readUint32();
                  break;

                case 3:
                  message.max_entries = reader.readUint32();
                  break;

                case 4:
                  message.historical_entries = reader.readUint32();
                  break;

                case 5:
                  message.bond_denom = reader.readString();
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
            return Params.deserialize(bytes);
          }
        }]);
        return Params;
      }(pb_1.Message);

      _v1beta.Params = Params;

      var DelegationResponse = /*#__PURE__*/function (_pb_1$Message17) {
        (0, _inherits2["default"])(DelegationResponse, _pb_1$Message17);

        var _super17 = _createSuper(DelegationResponse);

        function DelegationResponse(data) {
          var _this23;

          (0, _classCallCheck2["default"])(this, DelegationResponse);
          _this23 = _super17.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("delegation" in data && data.delegation != undefined) {
              _this23.delegation = data.delegation;
            }

            if ("balance" in data && data.balance != undefined) {
              _this23.balance = data.balance;
            }
          }

          return _this23;
        }

        (0, _createClass2["default"])(DelegationResponse, [{
          key: "delegation",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Delegation, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "balance",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject11) {
            function toObject() {
              return _toObject11.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject11.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.delegation != null) {
              data.delegation = this.delegation.toObject();
            }

            if (this.balance != null) {
              data.balance = this.balance.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this24 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.delegation !== undefined) writer.writeMessage(1, this.delegation, function () {
              return _this24.delegation.serialize(writer);
            });
            if (this.balance !== undefined) writer.writeMessage(2, this.balance, function () {
              return _this24.balance.serialize(writer);
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
            var message = new DelegationResponse({});

            if (data.delegation != null) {
              message.delegation = Delegation.fromObject(data.delegation);
            }

            if (data.balance != null) {
              message.balance = dependency_6.cosmos.base.v1beta1.Coin.fromObject(data.balance);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DelegationResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.delegation, function () {
                    return message.delegation = Delegation.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.balance, function () {
                    return message.balance = dependency_6.cosmos.base.v1beta1.Coin.deserialize(reader);
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
            return DelegationResponse.deserialize(bytes);
          }
        }]);
        return DelegationResponse;
      }(pb_1.Message);

      _v1beta.DelegationResponse = DelegationResponse;

      var RedelegationEntryResponse = /*#__PURE__*/function (_pb_1$Message18) {
        (0, _inherits2["default"])(RedelegationEntryResponse, _pb_1$Message18);

        var _super18 = _createSuper(RedelegationEntryResponse);

        function RedelegationEntryResponse(data) {
          var _this25;

          (0, _classCallCheck2["default"])(this, RedelegationEntryResponse);
          _this25 = _super18.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("redelegation_entry" in data && data.redelegation_entry != undefined) {
              _this25.redelegation_entry = data.redelegation_entry;
            }

            if ("balance" in data && data.balance != undefined) {
              _this25.balance = data.balance;
            }
          }

          return _this25;
        }

        (0, _createClass2["default"])(RedelegationEntryResponse, [{
          key: "redelegation_entry",
          get: function get() {
            return pb_1.Message.getWrapperField(this, RedelegationEntry, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "balance",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject12) {
            function toObject() {
              return _toObject12.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject12.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.redelegation_entry != null) {
              data.redelegation_entry = this.redelegation_entry.toObject();
            }

            if (this.balance != null) {
              data.balance = this.balance;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this26 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.redelegation_entry !== undefined) writer.writeMessage(1, this.redelegation_entry, function () {
              return _this26.redelegation_entry.serialize(writer);
            });
            if (typeof this.balance === "string" && this.balance.length) writer.writeString(4, this.balance);
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
            var message = new RedelegationEntryResponse({});

            if (data.redelegation_entry != null) {
              message.redelegation_entry = RedelegationEntry.fromObject(data.redelegation_entry);
            }

            if (data.balance != null) {
              message.balance = data.balance;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RedelegationEntryResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.redelegation_entry, function () {
                    return message.redelegation_entry = RedelegationEntry.deserialize(reader);
                  });
                  break;

                case 4:
                  message.balance = reader.readString();
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
            return RedelegationEntryResponse.deserialize(bytes);
          }
        }]);
        return RedelegationEntryResponse;
      }(pb_1.Message);

      _v1beta.RedelegationEntryResponse = RedelegationEntryResponse;

      var RedelegationResponse = /*#__PURE__*/function (_pb_1$Message19) {
        (0, _inherits2["default"])(RedelegationResponse, _pb_1$Message19);

        var _super19 = _createSuper(RedelegationResponse);

        function RedelegationResponse(data) {
          var _this27;

          (0, _classCallCheck2["default"])(this, RedelegationResponse);
          _this27 = _super19.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("redelegation" in data && data.redelegation != undefined) {
              _this27.redelegation = data.redelegation;
            }

            if ("entries" in data && data.entries != undefined) {
              _this27.entries = data.entries;
            }
          }

          return _this27;
        }

        (0, _createClass2["default"])(RedelegationResponse, [{
          key: "redelegation",
          get: function get() {
            return pb_1.Message.getWrapperField(this, Redelegation, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "entries",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, RedelegationEntryResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject13) {
            function toObject() {
              return _toObject13.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject13.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.redelegation != null) {
              data.redelegation = this.redelegation.toObject();
            }

            if (this.entries != null) {
              data.entries = this.entries.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this28 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.redelegation !== undefined) writer.writeMessage(1, this.redelegation, function () {
              return _this28.redelegation.serialize(writer);
            });
            if (this.entries !== undefined) writer.writeRepeatedMessage(2, this.entries, function (item) {
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
            var message = new RedelegationResponse({});

            if (data.redelegation != null) {
              message.redelegation = Redelegation.fromObject(data.redelegation);
            }

            if (data.entries != null) {
              message.entries = data.entries.map(function (item) {
                return RedelegationEntryResponse.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new RedelegationResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.redelegation, function () {
                    return message.redelegation = Redelegation.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.entries, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, RedelegationEntryResponse.deserialize(reader), RedelegationEntryResponse);
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
            return RedelegationResponse.deserialize(bytes);
          }
        }]);
        return RedelegationResponse;
      }(pb_1.Message);

      _v1beta.RedelegationResponse = RedelegationResponse;

      var Pool = /*#__PURE__*/function (_pb_1$Message20) {
        (0, _inherits2["default"])(Pool, _pb_1$Message20);

        var _super20 = _createSuper(Pool);

        function Pool(data) {
          var _this29;

          (0, _classCallCheck2["default"])(this, Pool);
          _this29 = _super20.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("not_bonded_tokens" in data && data.not_bonded_tokens != undefined) {
              _this29.not_bonded_tokens = data.not_bonded_tokens;
            }

            if ("bonded_tokens" in data && data.bonded_tokens != undefined) {
              _this29.bonded_tokens = data.bonded_tokens;
            }
          }

          return _this29;
        }

        (0, _createClass2["default"])(Pool, [{
          key: "not_bonded_tokens",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "bonded_tokens",
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

            if (this.not_bonded_tokens != null) {
              data.not_bonded_tokens = this.not_bonded_tokens;
            }

            if (this.bonded_tokens != null) {
              data.bonded_tokens = this.bonded_tokens;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.not_bonded_tokens === "string" && this.not_bonded_tokens.length) writer.writeString(1, this.not_bonded_tokens);
            if (typeof this.bonded_tokens === "string" && this.bonded_tokens.length) writer.writeString(2, this.bonded_tokens);
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
            var message = new Pool({});

            if (data.not_bonded_tokens != null) {
              message.not_bonded_tokens = data.not_bonded_tokens;
            }

            if (data.bonded_tokens != null) {
              message.bonded_tokens = data.bonded_tokens;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Pool();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.not_bonded_tokens = reader.readString();
                  break;

                case 2:
                  message.bonded_tokens = reader.readString();
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
            return Pool.deserialize(bytes);
          }
        }]);
        return Pool;
      }(pb_1.Message);

      _v1beta.Pool = Pool;
    })(v1beta1 || (v1beta1 = _staking.v1beta1 || (_staking.v1beta1 = {})));
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
})(cosmos || (exports.cosmos = cosmos = {}));