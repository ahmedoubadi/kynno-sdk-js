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

var dependency_1 = _interopRequireWildcard(require("./../../base/v1beta1/coin"));

var dependency_4 = _interopRequireWildcard(require("./../../../google/protobuf/timestamp"));

var dependency_5 = _interopRequireWildcard(require("./../../../google/protobuf/any"));

var dependency_6 = _interopRequireWildcard(require("./../../../google/protobuf/duration"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

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
      var VoteOption;

      (function (VoteOption) {
        VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
        VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
        VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
        VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
        VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
      })(VoteOption || (VoteOption = {}));

      _v1beta.VoteOption = VoteOption;
      var ProposalStatus;

      (function (ProposalStatus) {
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
        ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
      })(ProposalStatus || (ProposalStatus = {}));

      _v1beta.ProposalStatus = ProposalStatus;

      var WeightedVoteOption = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(WeightedVoteOption, _pb_1$Message);

        var _super = _createSuper(WeightedVoteOption);

        function WeightedVoteOption(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, WeightedVoteOption);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("option" in data && data.option != undefined) {
              _this.option = data.option;
            }

            if ("weight" in data && data.weight != undefined) {
              _this.weight = data.weight;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(WeightedVoteOption, [{
          key: "option",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "weight",
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

            if (this.option != null) {
              data.option = this.option;
            }

            if (this.weight != null) {
              data.weight = this.weight;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.option !== undefined) writer.writeEnum(1, this.option);
            if (typeof this.weight === "string" && this.weight.length) writer.writeString(2, this.weight);
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
            var message = new WeightedVoteOption({});

            if (data.option != null) {
              message.option = data.option;
            }

            if (data.weight != null) {
              message.weight = data.weight;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new WeightedVoteOption();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.option = reader.readEnum();
                  break;

                case 2:
                  message.weight = reader.readString();
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
            return WeightedVoteOption.deserialize(bytes);
          }
        }]);
        return WeightedVoteOption;
      }(pb_1.Message);

      _v1beta.WeightedVoteOption = WeightedVoteOption;

      var TextProposal = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(TextProposal, _pb_1$Message2);

        var _super2 = _createSuper(TextProposal);

        function TextProposal(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, TextProposal);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("title" in data && data.title != undefined) {
              _this2.title = data.title;
            }

            if ("description" in data && data.description != undefined) {
              _this2.description = data.description;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(TextProposal, [{
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.title != null) {
              data.title = this.title;
            }

            if (this.description != null) {
              data.description = this.description;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
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
            var message = new TextProposal({});

            if (data.title != null) {
              message.title = data.title;
            }

            if (data.description != null) {
              message.description = data.description;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TextProposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.title = reader.readString();
                  break;

                case 2:
                  message.description = reader.readString();
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
            return TextProposal.deserialize(bytes);
          }
        }]);
        return TextProposal;
      }(pb_1.Message);

      _v1beta.TextProposal = TextProposal;

      var Deposit = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(Deposit, _pb_1$Message3);

        var _super3 = _createSuper(Deposit);

        function Deposit(data) {
          var _this3;

          (0, _classCallCheck2["default"])(this, Deposit);
          _this3 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [3], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this3.proposal_id = data.proposal_id;
            }

            if ("depositor" in data && data.depositor != undefined) {
              _this3.depositor = data.depositor;
            }

            if ("amount" in data && data.amount != undefined) {
              _this3.amount = data.amount;
            }
          }

          return _this3;
        }

        (0, _createClass2["default"])(Deposit, [{
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
            var message = new Deposit({});

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
                message = new Deposit();

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
            return Deposit.deserialize(bytes);
          }
        }]);
        return Deposit;
      }(pb_1.Message);

      _v1beta.Deposit = Deposit;

      var Proposal = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(Proposal, _pb_1$Message4);

        var _super4 = _createSuper(Proposal);

        function Proposal(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, Proposal);
          _this4 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [7], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this4.proposal_id = data.proposal_id;
            }

            if ("content" in data && data.content != undefined) {
              _this4.content = data.content;
            }

            if ("status" in data && data.status != undefined) {
              _this4.status = data.status;
            }

            if ("final_tally_result" in data && data.final_tally_result != undefined) {
              _this4.final_tally_result = data.final_tally_result;
            }

            if ("submit_time" in data && data.submit_time != undefined) {
              _this4.submit_time = data.submit_time;
            }

            if ("deposit_end_time" in data && data.deposit_end_time != undefined) {
              _this4.deposit_end_time = data.deposit_end_time;
            }

            if ("total_deposit" in data && data.total_deposit != undefined) {
              _this4.total_deposit = data.total_deposit;
            }

            if ("voting_start_time" in data && data.voting_start_time != undefined) {
              _this4.voting_start_time = data.voting_start_time;
            }

            if ("voting_end_time" in data && data.voting_end_time != undefined) {
              _this4.voting_end_time = data.voting_end_time;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(Proposal, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "content",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "status",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "final_tally_result",
          get: function get() {
            return pb_1.Message.getWrapperField(this, TallyResult, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
          }
        }, {
          key: "submit_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 5);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
          }
        }, {
          key: "deposit_end_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 6);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 6, value);
          }
        }, {
          key: "total_deposit",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 7);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
          }
        }, {
          key: "voting_start_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 8);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 8, value);
          }
        }, {
          key: "voting_end_time",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 9);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 9, value);
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

            if (this.content != null) {
              data.content = this.content.toObject();
            }

            if (this.status != null) {
              data.status = this.status;
            }

            if (this.final_tally_result != null) {
              data.final_tally_result = this.final_tally_result.toObject();
            }

            if (this.submit_time != null) {
              data.submit_time = this.submit_time.toObject();
            }

            if (this.deposit_end_time != null) {
              data.deposit_end_time = this.deposit_end_time.toObject();
            }

            if (this.total_deposit != null) {
              data.total_deposit = this.total_deposit.map(function (item) {
                return item.toObject();
              });
            }

            if (this.voting_start_time != null) {
              data.voting_start_time = this.voting_start_time.toObject();
            }

            if (this.voting_end_time != null) {
              data.voting_end_time = this.voting_end_time.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (this.content !== undefined) writer.writeMessage(2, this.content, function () {
              return _this5.content.serialize(writer);
            });
            if (this.status !== undefined) writer.writeEnum(3, this.status);
            if (this.final_tally_result !== undefined) writer.writeMessage(4, this.final_tally_result, function () {
              return _this5.final_tally_result.serialize(writer);
            });
            if (this.submit_time !== undefined) writer.writeMessage(5, this.submit_time, function () {
              return _this5.submit_time.serialize(writer);
            });
            if (this.deposit_end_time !== undefined) writer.writeMessage(6, this.deposit_end_time, function () {
              return _this5.deposit_end_time.serialize(writer);
            });
            if (this.total_deposit !== undefined) writer.writeRepeatedMessage(7, this.total_deposit, function (item) {
              return item.serialize(writer);
            });
            if (this.voting_start_time !== undefined) writer.writeMessage(8, this.voting_start_time, function () {
              return _this5.voting_start_time.serialize(writer);
            });
            if (this.voting_end_time !== undefined) writer.writeMessage(9, this.voting_end_time, function () {
              return _this5.voting_end_time.serialize(writer);
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
            var message = new Proposal({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.content != null) {
              message.content = dependency_5.google.protobuf.Any.fromObject(data.content);
            }

            if (data.status != null) {
              message.status = data.status;
            }

            if (data.final_tally_result != null) {
              message.final_tally_result = TallyResult.fromObject(data.final_tally_result);
            }

            if (data.submit_time != null) {
              message.submit_time = dependency_4.google.protobuf.Timestamp.fromObject(data.submit_time);
            }

            if (data.deposit_end_time != null) {
              message.deposit_end_time = dependency_4.google.protobuf.Timestamp.fromObject(data.deposit_end_time);
            }

            if (data.total_deposit != null) {
              message.total_deposit = data.total_deposit.map(function (item) {
                return dependency_1.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.voting_start_time != null) {
              message.voting_start_time = dependency_4.google.protobuf.Timestamp.fromObject(data.voting_start_time);
            }

            if (data.voting_end_time != null) {
              message.voting_end_time = dependency_4.google.protobuf.Timestamp.fromObject(data.voting_end_time);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Proposal();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.content, function () {
                    return message.content = dependency_5.google.protobuf.Any.deserialize(reader);
                  });
                  break;

                case 3:
                  message.status = reader.readEnum();
                  break;

                case 4:
                  reader.readMessage(message.final_tally_result, function () {
                    return message.final_tally_result = TallyResult.deserialize(reader);
                  });
                  break;

                case 5:
                  reader.readMessage(message.submit_time, function () {
                    return message.submit_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 6:
                  reader.readMessage(message.deposit_end_time, function () {
                    return message.deposit_end_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 7:
                  reader.readMessage(message.total_deposit, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 8:
                  reader.readMessage(message.voting_start_time, function () {
                    return message.voting_start_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
                  });
                  break;

                case 9:
                  reader.readMessage(message.voting_end_time, function () {
                    return message.voting_end_time = dependency_4.google.protobuf.Timestamp.deserialize(reader);
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
            return Proposal.deserialize(bytes);
          }
        }]);
        return Proposal;
      }(pb_1.Message);

      _v1beta.Proposal = Proposal;

      var TallyResult = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(TallyResult, _pb_1$Message5);

        var _super5 = _createSuper(TallyResult);

        function TallyResult(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, TallyResult);
          _this6 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("yes" in data && data.yes != undefined) {
              _this6.yes = data.yes;
            }

            if ("abstain" in data && data.abstain != undefined) {
              _this6.abstain = data.abstain;
            }

            if ("no" in data && data.no != undefined) {
              _this6.no = data.no;
            }

            if ("no_with_veto" in data && data.no_with_veto != undefined) {
              _this6.no_with_veto = data.no_with_veto;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(TallyResult, [{
          key: "yes",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "abstain",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "no",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "no_with_veto",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.yes != null) {
              data.yes = this.yes;
            }

            if (this.abstain != null) {
              data.abstain = this.abstain;
            }

            if (this.no != null) {
              data.no = this.no;
            }

            if (this.no_with_veto != null) {
              data.no_with_veto = this.no_with_veto;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.yes === "string" && this.yes.length) writer.writeString(1, this.yes);
            if (typeof this.abstain === "string" && this.abstain.length) writer.writeString(2, this.abstain);
            if (typeof this.no === "string" && this.no.length) writer.writeString(3, this.no);
            if (typeof this.no_with_veto === "string" && this.no_with_veto.length) writer.writeString(4, this.no_with_veto);
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
            var message = new TallyResult({});

            if (data.yes != null) {
              message.yes = data.yes;
            }

            if (data.abstain != null) {
              message.abstain = data.abstain;
            }

            if (data.no != null) {
              message.no = data.no;
            }

            if (data.no_with_veto != null) {
              message.no_with_veto = data.no_with_veto;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TallyResult();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.yes = reader.readString();
                  break;

                case 2:
                  message.abstain = reader.readString();
                  break;

                case 3:
                  message.no = reader.readString();
                  break;

                case 4:
                  message.no_with_veto = reader.readString();
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
            return TallyResult.deserialize(bytes);
          }
        }]);
        return TallyResult;
      }(pb_1.Message);

      _v1beta.TallyResult = TallyResult;

      var Vote = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(Vote, _pb_1$Message6);

        var _super6 = _createSuper(Vote);

        function Vote(data) {
          var _this7;

          (0, _classCallCheck2["default"])(this, Vote);
          _this7 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this7.proposal_id = data.proposal_id;
            }

            if ("voter" in data && data.voter != undefined) {
              _this7.voter = data.voter;
            }

            if ("option" in data && data.option != undefined) {
              _this7.option = data.option;
            }

            if ("options" in data && data.options != undefined) {
              _this7.options = data.options;
            }
          }

          return _this7;
        }

        (0, _createClass2["default"])(Vote, [{
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
          /** @deprecated*/

        }, {
          key: "option",
          get:
          /** @deprecated*/
          function get() {
            return pb_1.Message.getField(this, 3);
          }
          /** @deprecated*/
          ,
          set:
          /** @deprecated*/
          function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "options",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, WeightedVoteOption, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
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

            if (this.voter != null) {
              data.voter = this.voter;
            }

            if (this.option != null) {
              data.option = this.option;
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
            if (this.option !== undefined) writer.writeEnum(3, this.option);
            if (this.options !== undefined) writer.writeRepeatedMessage(4, this.options, function (item) {
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
            var message = new Vote({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.voter != null) {
              message.voter = data.voter;
            }

            if (data.option != null) {
              message.option = data.option;
            }

            if (data.options != null) {
              message.options = data.options.map(function (item) {
                return WeightedVoteOption.fromObject(item);
              });
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Vote();

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

                case 4:
                  reader.readMessage(message.options, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, WeightedVoteOption.deserialize(reader), WeightedVoteOption);
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
            return Vote.deserialize(bytes);
          }
        }]);
        return Vote;
      }(pb_1.Message);

      _v1beta.Vote = Vote;

      var DepositParams = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(DepositParams, _pb_1$Message7);

        var _super7 = _createSuper(DepositParams);

        function DepositParams(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, DepositParams);
          _this8 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("min_deposit" in data && data.min_deposit != undefined) {
              _this8.min_deposit = data.min_deposit;
            }

            if ("max_deposit_period" in data && data.max_deposit_period != undefined) {
              _this8.max_deposit_period = data.max_deposit_period;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(DepositParams, [{
          key: "min_deposit",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "max_deposit_period",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Duration, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.min_deposit != null) {
              data.min_deposit = this.min_deposit.map(function (item) {
                return item.toObject();
              });
            }

            if (this.max_deposit_period != null) {
              data.max_deposit_period = this.max_deposit_period.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this9 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.min_deposit !== undefined) writer.writeRepeatedMessage(1, this.min_deposit, function (item) {
              return item.serialize(writer);
            });
            if (this.max_deposit_period !== undefined) writer.writeMessage(2, this.max_deposit_period, function () {
              return _this9.max_deposit_period.serialize(writer);
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
            var message = new DepositParams({});

            if (data.min_deposit != null) {
              message.min_deposit = data.min_deposit.map(function (item) {
                return dependency_1.cosmos.base.v1beta1.Coin.fromObject(item);
              });
            }

            if (data.max_deposit_period != null) {
              message.max_deposit_period = dependency_6.google.protobuf.Duration.fromObject(data.max_deposit_period);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new DepositParams();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.min_deposit, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin);
                  });
                  break;

                case 2:
                  reader.readMessage(message.max_deposit_period, function () {
                    return message.max_deposit_period = dependency_6.google.protobuf.Duration.deserialize(reader);
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
            return DepositParams.deserialize(bytes);
          }
        }]);
        return DepositParams;
      }(pb_1.Message);

      _v1beta.DepositParams = DepositParams;

      var VotingParams = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(VotingParams, _pb_1$Message8);

        var _super8 = _createSuper(VotingParams);

        function VotingParams(data) {
          var _this10;

          (0, _classCallCheck2["default"])(this, VotingParams);
          _this10 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("voting_period" in data && data.voting_period != undefined) {
              _this10.voting_period = data.voting_period;
            }
          }

          return _this10;
        }

        (0, _createClass2["default"])(VotingParams, [{
          key: "voting_period",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Duration, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.voting_period != null) {
              data.voting_period = this.voting_period.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this11 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.voting_period !== undefined) writer.writeMessage(1, this.voting_period, function () {
              return _this11.voting_period.serialize(writer);
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
            var message = new VotingParams({});

            if (data.voting_period != null) {
              message.voting_period = dependency_6.google.protobuf.Duration.fromObject(data.voting_period);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new VotingParams();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.voting_period, function () {
                    return message.voting_period = dependency_6.google.protobuf.Duration.deserialize(reader);
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
            return VotingParams.deserialize(bytes);
          }
        }]);
        return VotingParams;
      }(pb_1.Message);

      _v1beta.VotingParams = VotingParams;

      var TallyParams = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(TallyParams, _pb_1$Message9);

        var _super9 = _createSuper(TallyParams);

        function TallyParams(data) {
          var _this12;

          (0, _classCallCheck2["default"])(this, TallyParams);
          _this12 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("quorum" in data && data.quorum != undefined) {
              _this12.quorum = data.quorum;
            }

            if ("threshold" in data && data.threshold != undefined) {
              _this12.threshold = data.threshold;
            }

            if ("veto_threshold" in data && data.veto_threshold != undefined) {
              _this12.veto_threshold = data.veto_threshold;
            }
          }

          return _this12;
        }

        (0, _createClass2["default"])(TallyParams, [{
          key: "quorum",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "threshold",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "veto_threshold",
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

            if (this.quorum != null) {
              data.quorum = this.quorum;
            }

            if (this.threshold != null) {
              data.threshold = this.threshold;
            }

            if (this.veto_threshold != null) {
              data.veto_threshold = this.veto_threshold;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.quorum !== undefined) writer.writeBytes(1, this.quorum);
            if (this.threshold !== undefined) writer.writeBytes(2, this.threshold);
            if (this.veto_threshold !== undefined) writer.writeBytes(3, this.veto_threshold);
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
            var message = new TallyParams({});

            if (data.quorum != null) {
              message.quorum = data.quorum;
            }

            if (data.threshold != null) {
              message.threshold = data.threshold;
            }

            if (data.veto_threshold != null) {
              message.veto_threshold = data.veto_threshold;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new TallyParams();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.quorum = reader.readBytes();
                  break;

                case 2:
                  message.threshold = reader.readBytes();
                  break;

                case 3:
                  message.veto_threshold = reader.readBytes();
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
            return TallyParams.deserialize(bytes);
          }
        }]);
        return TallyParams;
      }(pb_1.Message);

      _v1beta.TallyParams = TallyParams;
    })(v1beta1 || (v1beta1 = _gov.v1beta1 || (_gov.v1beta1 = {})));
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
})(cosmos || (exports.cosmos = cosmos = {}));