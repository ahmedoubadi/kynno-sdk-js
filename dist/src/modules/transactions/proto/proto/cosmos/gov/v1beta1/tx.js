"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_1 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_2 = _interopRequireWildcard(require("./gov"));

var dependency_5 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

var grpc_1 = _interopRequireWildcard(require("@grpc/grpc-js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var gov;

  (function (_gov) {
    var v1beta1;

    (function (_v1beta) {
      var MsgSubmitProposal = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(MsgSubmitProposal, _pb_1$Message);

        var _super = _createSuper(MsgSubmitProposal);

        function MsgSubmitProposal(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, MsgSubmitProposal);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("content" in data && data.content != undefined) {
              _this.content = data.content;
            }

            if ("initial_deposit" in data && data.initial_deposit != undefined) {
              _this.initial_deposit = data.initial_deposit;
            }

            if ("proposer" in data && data.proposer != undefined) {
              _this.proposer = data.proposer;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(MsgSubmitProposal, [{
          key: "content",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "initial_deposit",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "proposer",
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

            if (this.content != null) {
              data.content = this.content.toObject();
            }

            if (this.initial_deposit != null) {
              data.initial_deposit = this.initial_deposit.map(function (item) {
                return item.toObject();
              });
            }

            if (this.proposer != null) {
              data.proposer = this.proposer;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.content !== undefined) writer.writeMessage(1, this.content, function () {
              return _this2.content.serialize(writer);
            });
            if (this.initial_deposit !== undefined) writer.writeRepeatedMessage(2, this.initial_deposit, function (item) {
              return item.serialize(writer);
            });
            if (typeof this.proposer === "string" && this.proposer.length) writer.writeString(3, this.proposer);
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
            var message = new MsgSubmitProposal({});

            if (data.content != null) {
              message.content = dependency_5.google.protobuf.Any.fromObject(data.content);
            }

            if (data.initial_deposit != null) {
              message.initial_deposit = data.initial_deposit.map(function (item) {
                return dependency_1.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.proposer != null) {
              message.proposer = data.proposer;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgSubmitProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.content, function () {
                    return message.content = dependency_5.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.initial_deposit, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 3:
                  message.proposer = reader.readString();
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
            return MsgSubmitProposal.deserialize(bytes);
          }
        }]);
        return MsgSubmitProposal;
      }(pb_1.Message);

      _v1beta.MsgSubmitProposal = MsgSubmitProposal;

      var MsgSubmitProposalResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(MsgSubmitProposalResponse, _pb_1$Message2);

        var _super2 = _createSuper(MsgSubmitProposalResponse);

        function MsgSubmitProposalResponse(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, MsgSubmitProposalResponse);
          _this3 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this3.proposal_id = data.proposal_id;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(MsgSubmitProposalResponse, [{
          key: "proposal_id",
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
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
            var message = new MsgSubmitProposalResponse({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgSubmitProposalResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
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
            return MsgSubmitProposalResponse.deserialize(bytes);
          }
        }]);
        return MsgSubmitProposalResponse;
      }(pb_1.Message);

      _v1beta.MsgSubmitProposalResponse = MsgSubmitProposalResponse;

      var MsgVote = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(MsgVote, _pb_1$Message3);

        var _super3 = _createSuper(MsgVote);

        function MsgVote(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, MsgVote);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this4.proposal_id = data.proposal_id;
            }

            if ("voter" in data && data.voter != undefined) {
              _this4.voter = data.voter;
            }

            if ("option" in data && data.option != undefined) {
              _this4.option = data.option;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(MsgVote, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "voter",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "option",
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.voter != null) {
              data.voter = this.voter;
            }

            if (this.option != null) {
              data.option = this.option;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (typeof this.voter === "string" && this.voter.length) writer.writeString(2, this.voter);
            if (this.option !== undefined) writer.writeEnum(3, this.option);
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
            var message = new MsgVote({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.voter != null) {
              message.voter = data.voter;
            }

            if (data.option != null) {
              message.option = data.option;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVote();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  message.voter = reader.readString();
                  break;

                case 3:
                  message.option = reader.readEnum();
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
            return MsgVote.deserialize(bytes);
          }
        }]);
        return MsgVote;
      }(pb_1.Message);

      _v1beta.MsgVote = MsgVote;

      var MsgVoteResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(MsgVoteResponse, _pb_1$Message4);

        var _super4 = _createSuper(MsgVoteResponse);

        function MsgVoteResponse(data) {
          var _this5;

          (0, _classCallCheck2["default"])(this, MsgVoteResponse);
          _this5 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this5;
        }

        (0, _createClass2["default"])(MsgVoteResponse, [{
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
            var message = new MsgVoteResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVoteResponse();

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
            return MsgVoteResponse.deserialize(bytes);
          }
        }]);
        return MsgVoteResponse;
      }(pb_1.Message);

      _v1beta.MsgVoteResponse = MsgVoteResponse;

      var MsgVoteWeighted = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(MsgVoteWeighted, _pb_1$Message5);

        var _super5 = _createSuper(MsgVoteWeighted);

        function MsgVoteWeighted(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, MsgVoteWeighted);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this6.proposal_id = data.proposal_id;
            }

            if ("voter" in data && data.voter != undefined) {
              _this6.voter = data.voter;
            }

            if ("options" in data && data.options != undefined) {
              _this6.options = data.options;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(MsgVoteWeighted, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "voter",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "options",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.voter != null) {
              data.voter = this.voter;
            }

            if (this.options != null) {
              data.options = this.options.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (typeof this.voter === "string" && this.voter.length) writer.writeString(2, this.voter);
            if (this.options !== undefined) writer.writeRepeatedMessage(3, this.options, function (item) {
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
            var message = new MsgVoteWeighted({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.voter != null) {
              message.voter = data.voter;
            }

            if (data.options != null) {
              message.options = data.options.map(function (item) {
                return dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVoteWeighted();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  message.voter = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.options, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.deserialize(reader), dependency_2.cosmos.gov.v1beta1.WeightedVoteOption);
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
            return MsgVoteWeighted.deserialize(bytes);
          }
        }]);
        return MsgVoteWeighted;
      }(pb_1.Message);

      _v1beta.MsgVoteWeighted = MsgVoteWeighted;

      var MsgVoteWeightedResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(MsgVoteWeightedResponse, _pb_1$Message6);

        var _super6 = _createSuper(MsgVoteWeightedResponse);

        function MsgVoteWeightedResponse(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, MsgVoteWeightedResponse);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this7;
        }

        (0, _createClass2["default"])(MsgVoteWeightedResponse, [{
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
            var message = new MsgVoteWeightedResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgVoteWeightedResponse();

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
            return MsgVoteWeightedResponse.deserialize(bytes);
          }
        }]);
        return MsgVoteWeightedResponse;
      }(pb_1.Message);

      _v1beta.MsgVoteWeightedResponse = MsgVoteWeightedResponse;

      var MsgDeposit = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(MsgDeposit, _pb_1$Message7);

        var _super7 = _createSuper(MsgDeposit);

        function MsgDeposit(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, MsgDeposit);
          _this8 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this8.proposal_id = data.proposal_id;
            }

            if ("depositor" in data && data.depositor != undefined) {
              _this8.depositor = data.depositor;
            }

            if ("amount" in data && data.amount != undefined) {
              _this8.amount = data.amount;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(MsgDeposit, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "depositor",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "amount",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.depositor != null) {
              data.depositor = this.depositor;
            }

            if (this.amount != null) {
              data.amount = this.amount.map(function (item) {
                return item.toObject();
              });
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (typeof this.depositor === "string" && this.depositor.length) writer.writeString(2, this.depositor);
            if (this.amount !== undefined) writer.writeRepeatedMessage(3, this.amount, function (item) {
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
            var message = new MsgDeposit({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.depositor != null) {
              message.depositor = data.depositor;
            }

            if (data.amount != null) {
              message.amount = data.amount.map(function (item) {
                return dependency_1.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgDeposit();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  message.depositor = reader.readString();
                  break;

                case 3:
                  reader.readMessage(message.amount, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin);
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
            return MsgDeposit.deserialize(bytes);
          }
        }]);
        return MsgDeposit;
      }(pb_1.Message);

      _v1beta.MsgDeposit = MsgDeposit;

      var MsgDepositResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(MsgDepositResponse, _pb_1$Message8);

        var _super8 = _createSuper(MsgDepositResponse);

        function MsgDepositResponse(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, MsgDepositResponse);
          _this9 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

          return _this9;
        }

        (0, _createClass2["default"])(MsgDepositResponse, [{
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
            var message = new MsgDepositResponse({});
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new MsgDepositResponse();

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
            return MsgDepositResponse.deserialize(bytes);
          }
        }]);
        return MsgDepositResponse;
      }(pb_1.Message);

      _v1beta.MsgDepositResponse = MsgDepositResponse;

      var UnimplementedMsgService = function UnimplementedMsgService() {
        (0, _classCallCheck2["default"])(this, UnimplementedMsgService);
      };

      (0, _defineProperty2["default"])(UnimplementedMsgService, "definition", {
        SubmitProposal: {
          path: "/cosmos.gov.v1beta1.Msg/SubmitProposal",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgSubmitProposal.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgSubmitProposalResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Vote: {
          path: "/cosmos.gov.v1beta1.Msg/Vote",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgVote.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgVoteResponse.deserialize(new Uint8Array(bytes));
          }
        },
        VoteWeighted: {
          path: "/cosmos.gov.v1beta1.Msg/VoteWeighted",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgVoteWeighted.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgVoteWeightedResponse.deserialize(new Uint8Array(bytes));
          }
        },
        Deposit: {
          path: "/cosmos.gov.v1beta1.Msg/Deposit",
          requestStream: false,
          responseStream: false,
          requestSerialize: function requestSerialize(message) {
            return Buffer.from(message.serialize());
          },
          requestDeserialize: function requestDeserialize(bytes) {
            return MsgDeposit.deserialize(new Uint8Array(bytes));
          },
          responseSerialize: function responseSerialize(message) {
            return Buffer.from(message.serialize());
          },
          responseDeserialize: function responseDeserialize(bytes) {
            return MsgDepositResponse.deserialize(new Uint8Array(bytes));
          }
        }
      });
      _v1beta.UnimplementedMsgService = UnimplementedMsgService;

      var MsgClient = /*#__PURE__*/function (_grpc_1$makeGenericCl) {
        (0, _inherits2["default"])(MsgClient, _grpc_1$makeGenericCl);

        var _super9 = _createSuper(MsgClient);

        function MsgClient(address, credentials, _options) {
          var _thisSuper, _thisSuper2, _thisSuper3, _thisSuper4, _this10;

          (0, _classCallCheck2["default"])(this, MsgClient);
          _this10 = _super9.call(this, address, credentials, _options);
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "SubmitProposal", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "SubmitProposal", _thisSuper).call(_thisSuper, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "Vote", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper2 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "Vote", _thisSuper2).call(_thisSuper2, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "VoteWeighted", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper3 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "VoteWeighted", _thisSuper3).call(_thisSuper3, message, metadata, options, callback);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "Deposit", function (message, metadata, options, callback) {
            return (0, _get2["default"])((_thisSuper4 = (0, _assertThisInitialized2["default"])(_this10), (0, _getPrototypeOf2["default"])(MsgClient.prototype)), "Deposit", _thisSuper4).call(_thisSuper4, message, metadata, options, callback);
          });
          return _this10;
        }

        return MsgClient;
      }(grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}));

      _v1beta.MsgClient = MsgClient;
    })(v1beta1 || (v1beta1 = _gov.v1beta1 || (_gov.v1beta1 = {})));
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
})(cosmos || (exports.cosmos = cosmos = {}));