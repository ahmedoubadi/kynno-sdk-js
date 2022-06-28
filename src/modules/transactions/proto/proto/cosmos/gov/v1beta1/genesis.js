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

var dependency_2 = _interopRequireWildcard(require("./gov"));

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
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("starting_proposal_id" in data && data.starting_proposal_id != undefined) {
              _this.starting_proposal_id = data.starting_proposal_id;
            }

            if ("deposits" in data && data.deposits != undefined) {
              _this.deposits = data.deposits;
            }

            if ("votes" in data && data.votes != undefined) {
              _this.votes = data.votes;
            }

            if ("proposals" in data && data.proposals != undefined) {
              _this.proposals = data.proposals;
            }

            if ("deposit_params" in data && data.deposit_params != undefined) {
              _this.deposit_params = data.deposit_params;
            }

            if ("voting_params" in data && data.voting_params != undefined) {
              _this.voting_params = data.voting_params;
            }

            if ("tally_params" in data && data.tally_params != undefined) {
              _this.tally_params = data.tally_params;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "starting_proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "deposits",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Deposit, 2);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
          }
        }, {
          key: "votes",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Vote, 3);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
          }
        }, {
          key: "proposals",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Proposal, 4);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
          }
        }, {
          key: "deposit_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.DepositParams, 5);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 5, value);
          }
        }, {
          key: "voting_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.VotingParams, 6);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 6, value);
          }
        }, {
          key: "tally_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.TallyParams, 7);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 7, value);
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

            if (this.starting_proposal_id != null) {
              data.starting_proposal_id = this.starting_proposal_id;
            }

            if (this.deposits != null) {
              data.deposits = this.deposits.map(function (item) {
                return item.toObject();
              });
            }

            if (this.votes != null) {
              data.votes = this.votes.map(function (item) {
                return item.toObject();
              });
            }

            if (this.proposals != null) {
              data.proposals = this.proposals.map(function (item) {
                return item.toObject();
              });
            }

            if (this.deposit_params != null) {
              data.deposit_params = this.deposit_params.toObject();
            }

            if (this.voting_params != null) {
              data.voting_params = this.voting_params.toObject();
            }

            if (this.tally_params != null) {
              data.tally_params = this.tally_params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.starting_proposal_id !== undefined) writer.writeUint64(1, this.starting_proposal_id);
            if (this.deposits !== undefined) writer.writeRepeatedMessage(2, this.deposits, function (item) {
              return item.serialize(writer);
            });
            if (this.votes !== undefined) writer.writeRepeatedMessage(3, this.votes, function (item) {
              return item.serialize(writer);
            });
            if (this.proposals !== undefined) writer.writeRepeatedMessage(4, this.proposals, function (item) {
              return item.serialize(writer);
            });
            if (this.deposit_params !== undefined) writer.writeMessage(5, this.deposit_params, function () {
              return _this2.deposit_params.serialize(writer);
            });
            if (this.voting_params !== undefined) writer.writeMessage(6, this.voting_params, function () {
              return _this2.voting_params.serialize(writer);
            });
            if (this.tally_params !== undefined) writer.writeMessage(7, this.tally_params, function () {
              return _this2.tally_params.serialize(writer);
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

            if (data.starting_proposal_id != null) {
              message.starting_proposal_id = data.starting_proposal_id;
            }

            if (data.deposits != null) {
              message.deposits = data.deposits.map(function (item) {
                return dependency_2.cosmos.gov.v1beta1.Deposit.fromObject(item);
              });
            }

            if (data.votes != null) {
              message.votes = data.votes.map(function (item) {
                return dependency_2.cosmos.gov.v1beta1.Vote.fromObject(item);
              });
            }

            if (data.proposals != null) {
              message.proposals = data.proposals.map(function (item) {
                return dependency_2.cosmos.gov.v1beta1.Proposal.fromObject(item);
              });
            }

            if (data.deposit_params != null) {
              message.deposit_params = dependency_2.cosmos.gov.v1beta1.DepositParams.fromObject(data.deposit_params);
            }

            if (data.voting_params != null) {
              message.voting_params = dependency_2.cosmos.gov.v1beta1.VotingParams.fromObject(data.voting_params);
            }

            if (data.tally_params != null) {
              message.tally_params = dependency_2.cosmos.gov.v1beta1.TallyParams.fromObject(data.tally_params);
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
                  message.starting_proposal_id = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.deposits, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.gov.v1beta1.Deposit.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Deposit);
                  });
                  break;

                case 3:
                  reader.readMessage(message.votes, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.gov.v1beta1.Vote.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Vote);
                  });
                  break;

                case 4:
                  reader.readMessage(message.proposals, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.gov.v1beta1.Proposal.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Proposal);
                  });
                  break;

                case 5:
                  reader.readMessage(message.deposit_params, function () {
                    return message.deposit_params = dependency_2.cosmos.gov.v1beta1.DepositParams.deserialize(reader);
                  });
                  break;

                case 6:
                  reader.readMessage(message.voting_params, function () {
                    return message.voting_params = dependency_2.cosmos.gov.v1beta1.VotingParams.deserialize(reader);
                  });
                  break;

                case 7:
                  reader.readMessage(message.tally_params, function () {
                    return message.tally_params = dependency_2.cosmos.gov.v1beta1.TallyParams.deserialize(reader);
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

      _v1beta.GenesisState = GenesisState;
    })(v1beta1 || (v1beta1 = _gov.v1beta1 || (_gov.v1beta1 = {})));
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
})(cosmos || (exports.cosmos = cosmos = {}));