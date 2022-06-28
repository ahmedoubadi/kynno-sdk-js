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

var dependency_1 = _interopRequireWildcard(require("./../../base/query/v1beta1/pagination"));

var dependency_4 = _interopRequireWildcard(require("./gov"));

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
      var QueryProposalRequest = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(QueryProposalRequest, _pb_1$Message);

        var _super = _createSuper(QueryProposalRequest);

        function QueryProposalRequest(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, QueryProposalRequest);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this.proposal_id = data.proposal_id;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(QueryProposalRequest, [{
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
            var message = new QueryProposalRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryProposalRequest();

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
            return QueryProposalRequest.deserialize(bytes);
          }
        }]);
        return QueryProposalRequest;
      }(pb_1.Message);

      _v1beta.QueryProposalRequest = QueryProposalRequest;

      var QueryProposalResponse = /*#__PURE__*/function (_pb_1$Message2) {
        (0, _inherits2["default"])(QueryProposalResponse, _pb_1$Message2);

        var _super2 = _createSuper(QueryProposalResponse);

        function QueryProposalResponse(data) {
          var _this2;

          (0, _classCallCheck2["default"])(this, QueryProposalResponse);
          _this2 = _super2.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal" in data && data.proposal != undefined) {
              _this2.proposal = data.proposal;
            }
          }

          return _this2;
        }

        (0, _createClass2["default"])(QueryProposalResponse, [{
          key: "proposal",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Proposal, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.proposal != null) {
              data.proposal = this.proposal.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this3 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal !== undefined) writer.writeMessage(1, this.proposal, function () {
              return _this3.proposal.serialize(writer);
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
            var message = new QueryProposalResponse({});

            if (data.proposal != null) {
              message.proposal = dependency_4.cosmos.gov.v1beta1.Proposal.fromObject(data.proposal);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryProposalResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.proposal, function () {
                    return message.proposal = dependency_4.cosmos.gov.v1beta1.Proposal.deserialize(reader);
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
            return QueryProposalResponse.deserialize(bytes);
          }
        }]);
        return QueryProposalResponse;
      }(pb_1.Message);

      _v1beta.QueryProposalResponse = QueryProposalResponse;

      var QueryProposalsRequest = /*#__PURE__*/function (_pb_1$Message3) {
        (0, _inherits2["default"])(QueryProposalsRequest, _pb_1$Message3);

        var _super3 = _createSuper(QueryProposalsRequest);

        function QueryProposalsRequest(data) {
          var _this4;

          (0, _classCallCheck2["default"])(this, QueryProposalsRequest);
          _this4 = _super3.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_status" in data && data.proposal_status != undefined) {
              _this4.proposal_status = data.proposal_status;
            }

            if ("voter" in data && data.voter != undefined) {
              _this4.voter = data.voter;
            }

            if ("depositor" in data && data.depositor != undefined) {
              _this4.depositor = data.depositor;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this4.pagination = data.pagination;
            }
          }

          return _this4;
        }

        (0, _createClass2["default"])(QueryProposalsRequest, [{
          key: "proposal_status",
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
          key: "depositor",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 4);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 4, value);
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

            if (this.proposal_status != null) {
              data.proposal_status = this.proposal_status;
            }

            if (this.voter != null) {
              data.voter = this.voter;
            }

            if (this.depositor != null) {
              data.depositor = this.depositor;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this5 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_status !== undefined) writer.writeEnum(1, this.proposal_status);
            if (typeof this.voter === "string" && this.voter.length) writer.writeString(2, this.voter);
            if (typeof this.depositor === "string" && this.depositor.length) writer.writeString(3, this.depositor);
            if (this.pagination !== undefined) writer.writeMessage(4, this.pagination, function () {
              return _this5.pagination.serialize(writer);
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
            var message = new QueryProposalsRequest({});

            if (data.proposal_status != null) {
              message.proposal_status = data.proposal_status;
            }

            if (data.voter != null) {
              message.voter = data.voter;
            }

            if (data.depositor != null) {
              message.depositor = data.depositor;
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryProposalsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_status = reader.readEnum();
                  break;

                case 2:
                  message.voter = reader.readString();
                  break;

                case 3:
                  message.depositor = reader.readString();
                  break;

                case 4:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
            return QueryProposalsRequest.deserialize(bytes);
          }
        }]);
        return QueryProposalsRequest;
      }(pb_1.Message);

      _v1beta.QueryProposalsRequest = QueryProposalsRequest;

      var QueryProposalsResponse = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(QueryProposalsResponse, _pb_1$Message4);

        var _super4 = _createSuper(QueryProposalsResponse);

        function QueryProposalsResponse(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, QueryProposalsResponse);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposals" in data && data.proposals != undefined) {
              _this6.proposals = data.proposals;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this6.pagination = data.pagination;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(QueryProposalsResponse, [{
          key: "proposals",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Proposal, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.proposals != null) {
              data.proposals = this.proposals.map(function (item) {
                return item.toObject();
              });
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposals !== undefined) writer.writeRepeatedMessage(1, this.proposals, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this7.pagination.serialize(writer);
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
            var message = new QueryProposalsResponse({});

            if (data.proposals != null) {
              message.proposals = data.proposals.map(function (item) {
                return dependency_4.cosmos.gov.v1beta1.Proposal.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryProposalsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.proposals, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Proposal.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Proposal);
                  });
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return QueryProposalsResponse.deserialize(bytes);
          }
        }]);
        return QueryProposalsResponse;
      }(pb_1.Message);

      _v1beta.QueryProposalsResponse = QueryProposalsResponse;

      var QueryVoteRequest = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(QueryVoteRequest, _pb_1$Message5);

        var _super5 = _createSuper(QueryVoteRequest);

        function QueryVoteRequest(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, QueryVoteRequest);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this8.proposal_id = data.proposal_id;
            }

            if ("voter" in data && data.voter != undefined) {
              _this8.voter = data.voter;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(QueryVoteRequest, [{
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.voter != null) {
              data.voter = this.voter;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (typeof this.voter === "string" && this.voter.length) writer.writeString(2, this.voter);
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
            var message = new QueryVoteRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.voter != null) {
              message.voter = data.voter;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryVoteRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  message.voter = reader.readString();
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
            return QueryVoteRequest.deserialize(bytes);
          }
        }]);
        return QueryVoteRequest;
      }(pb_1.Message);

      _v1beta.QueryVoteRequest = QueryVoteRequest;

      var QueryVoteResponse = /*#__PURE__*/function (_pb_1$Message6) {
        (0, _inherits2["default"])(QueryVoteResponse, _pb_1$Message6);

        var _super6 = _createSuper(QueryVoteResponse);

        function QueryVoteResponse(data) {
          var _this9;

          (0, _classCallCheck2["default"])(this, QueryVoteResponse);
          _this9 = _super6.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("vote" in data && data.vote != undefined) {
              _this9.vote = data.vote;
            }
          }

          return _this9;
        }

        (0, _createClass2["default"])(QueryVoteResponse, [{
          key: "vote",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Vote, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.vote != null) {
              data.vote = this.vote.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this10 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.vote !== undefined) writer.writeMessage(1, this.vote, function () {
              return _this10.vote.serialize(writer);
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
            var message = new QueryVoteResponse({});

            if (data.vote != null) {
              message.vote = dependency_4.cosmos.gov.v1beta1.Vote.fromObject(data.vote);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryVoteResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.vote, function () {
                    return message.vote = dependency_4.cosmos.gov.v1beta1.Vote.deserialize(reader);
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
            return QueryVoteResponse.deserialize(bytes);
          }
        }]);
        return QueryVoteResponse;
      }(pb_1.Message);

      _v1beta.QueryVoteResponse = QueryVoteResponse;

      var QueryVotesRequest = /*#__PURE__*/function (_pb_1$Message7) {
        (0, _inherits2["default"])(QueryVotesRequest, _pb_1$Message7);

        var _super7 = _createSuper(QueryVotesRequest);

        function QueryVotesRequest(data) {
          var _this11;

          (0, _classCallCheck2["default"])(this, QueryVotesRequest);
          _this11 = _super7.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this11), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this11.proposal_id = data.proposal_id;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this11.pagination = data.pagination;
            }
          }

          return _this11;
        }

        (0, _createClass2["default"])(QueryVotesRequest, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this12 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this12.pagination.serialize(writer);
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
            var message = new QueryVotesRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryVotesRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
            return QueryVotesRequest.deserialize(bytes);
          }
        }]);
        return QueryVotesRequest;
      }(pb_1.Message);

      _v1beta.QueryVotesRequest = QueryVotesRequest;

      var QueryVotesResponse = /*#__PURE__*/function (_pb_1$Message8) {
        (0, _inherits2["default"])(QueryVotesResponse, _pb_1$Message8);

        var _super8 = _createSuper(QueryVotesResponse);

        function QueryVotesResponse(data) {
          var _this13;

          (0, _classCallCheck2["default"])(this, QueryVotesResponse);
          _this13 = _super8.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("votes" in data && data.votes != undefined) {
              _this13.votes = data.votes;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this13.pagination = data.pagination;
            }
          }

          return _this13;
        }

        (0, _createClass2["default"])(QueryVotesResponse, [{
          key: "votes",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Vote, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.votes != null) {
              data.votes = this.votes.map(function (item) {
                return item.toObject();
              });
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this14 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.votes !== undefined) writer.writeRepeatedMessage(1, this.votes, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this14.pagination.serialize(writer);
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
            var message = new QueryVotesResponse({});

            if (data.votes != null) {
              message.votes = data.votes.map(function (item) {
                return dependency_4.cosmos.gov.v1beta1.Vote.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryVotesResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.votes, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Vote.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Vote);
                  });
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return QueryVotesResponse.deserialize(bytes);
          }
        }]);
        return QueryVotesResponse;
      }(pb_1.Message);

      _v1beta.QueryVotesResponse = QueryVotesResponse;

      var QueryParamsRequest = /*#__PURE__*/function (_pb_1$Message9) {
        (0, _inherits2["default"])(QueryParamsRequest, _pb_1$Message9);

        var _super9 = _createSuper(QueryParamsRequest);

        function QueryParamsRequest(data) {
          var _this15;

          (0, _classCallCheck2["default"])(this, QueryParamsRequest);
          _this15 = _super9.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params_type" in data && data.params_type != undefined) {
              _this15.params_type = data.params_type;
            }
          }

          return _this15;
        }

        (0, _createClass2["default"])(QueryParamsRequest, [{
          key: "params_type",
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

            if (this.params_type != null) {
              data.params_type = this.params_type;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.params_type === "string" && this.params_type.length) writer.writeString(1, this.params_type);
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
            var message = new QueryParamsRequest({});

            if (data.params_type != null) {
              message.params_type = data.params_type;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryParamsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.params_type = reader.readString();
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
            return QueryParamsRequest.deserialize(bytes);
          }
        }]);
        return QueryParamsRequest;
      }(pb_1.Message);

      _v1beta.QueryParamsRequest = QueryParamsRequest;

      var QueryParamsResponse = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(QueryParamsResponse, _pb_1$Message10);

        var _super10 = _createSuper(QueryParamsResponse);

        function QueryParamsResponse(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, QueryParamsResponse);
          _this16 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("voting_params" in data && data.voting_params != undefined) {
              _this16.voting_params = data.voting_params;
            }

            if ("deposit_params" in data && data.deposit_params != undefined) {
              _this16.deposit_params = data.deposit_params;
            }

            if ("tally_params" in data && data.tally_params != undefined) {
              _this16.tally_params = data.tally_params;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(QueryParamsResponse, [{
          key: "voting_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.VotingParams, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "deposit_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.DepositParams, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
          }
        }, {
          key: "tally_params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.TallyParams, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.voting_params != null) {
              data.voting_params = this.voting_params.toObject();
            }

            if (this.deposit_params != null) {
              data.deposit_params = this.deposit_params.toObject();
            }

            if (this.tally_params != null) {
              data.tally_params = this.tally_params.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this17 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.voting_params !== undefined) writer.writeMessage(1, this.voting_params, function () {
              return _this17.voting_params.serialize(writer);
            });
            if (this.deposit_params !== undefined) writer.writeMessage(2, this.deposit_params, function () {
              return _this17.deposit_params.serialize(writer);
            });
            if (this.tally_params !== undefined) writer.writeMessage(3, this.tally_params, function () {
              return _this17.tally_params.serialize(writer);
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
            var message = new QueryParamsResponse({});

            if (data.voting_params != null) {
              message.voting_params = dependency_4.cosmos.gov.v1beta1.VotingParams.fromObject(data.voting_params);
            }

            if (data.deposit_params != null) {
              message.deposit_params = dependency_4.cosmos.gov.v1beta1.DepositParams.fromObject(data.deposit_params);
            }

            if (data.tally_params != null) {
              message.tally_params = dependency_4.cosmos.gov.v1beta1.TallyParams.fromObject(data.tally_params);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryParamsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.voting_params, function () {
                    return message.voting_params = dependency_4.cosmos.gov.v1beta1.VotingParams.deserialize(reader);
                  });
                  break;

                case 2:
                  reader.readMessage(message.deposit_params, function () {
                    return message.deposit_params = dependency_4.cosmos.gov.v1beta1.DepositParams.deserialize(reader);
                  });
                  break;

                case 3:
                  reader.readMessage(message.tally_params, function () {
                    return message.tally_params = dependency_4.cosmos.gov.v1beta1.TallyParams.deserialize(reader);
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
            return QueryParamsResponse.deserialize(bytes);
          }
        }]);
        return QueryParamsResponse;
      }(pb_1.Message);

      _v1beta.QueryParamsResponse = QueryParamsResponse;

      var QueryDepositRequest = /*#__PURE__*/function (_pb_1$Message11) {
        (0, _inherits2["default"])(QueryDepositRequest, _pb_1$Message11);

        var _super11 = _createSuper(QueryDepositRequest);

        function QueryDepositRequest(data) {
          var _this18;

          (0, _classCallCheck2["default"])(this, QueryDepositRequest);
          _this18 = _super11.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this18), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this18.proposal_id = data.proposal_id;
            }

            if ("depositor" in data && data.depositor != undefined) {
              _this18.depositor = data.depositor;
            }
          }

          return _this18;
        }

        (0, _createClass2["default"])(QueryDepositRequest, [{
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
          key: "toObject",
          value: function toObject() {
            var data = {};

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.depositor != null) {
              data.depositor = this.depositor;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (typeof this.depositor === "string" && this.depositor.length) writer.writeString(2, this.depositor);
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
            var message = new QueryDepositRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.depositor != null) {
              message.depositor = data.depositor;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDepositRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  message.depositor = reader.readString();
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
            return QueryDepositRequest.deserialize(bytes);
          }
        }]);
        return QueryDepositRequest;
      }(pb_1.Message);

      _v1beta.QueryDepositRequest = QueryDepositRequest;

      var QueryDepositResponse = /*#__PURE__*/function (_pb_1$Message12) {
        (0, _inherits2["default"])(QueryDepositResponse, _pb_1$Message12);

        var _super12 = _createSuper(QueryDepositResponse);

        function QueryDepositResponse(data) {
          var _this19;

          (0, _classCallCheck2["default"])(this, QueryDepositResponse);
          _this19 = _super12.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("deposit" in data && data.deposit != undefined) {
              _this19.deposit = data.deposit;
            }
          }

          return _this19;
        }

        (0, _createClass2["default"])(QueryDepositResponse, [{
          key: "deposit",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.Deposit, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.deposit != null) {
              data.deposit = this.deposit.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this20 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.deposit !== undefined) writer.writeMessage(1, this.deposit, function () {
              return _this20.deposit.serialize(writer);
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
            var message = new QueryDepositResponse({});

            if (data.deposit != null) {
              message.deposit = dependency_4.cosmos.gov.v1beta1.Deposit.fromObject(data.deposit);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDepositResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.deposit, function () {
                    return message.deposit = dependency_4.cosmos.gov.v1beta1.Deposit.deserialize(reader);
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
            return QueryDepositResponse.deserialize(bytes);
          }
        }]);
        return QueryDepositResponse;
      }(pb_1.Message);

      _v1beta.QueryDepositResponse = QueryDepositResponse;

      var QueryDepositsRequest = /*#__PURE__*/function (_pb_1$Message13) {
        (0, _inherits2["default"])(QueryDepositsRequest, _pb_1$Message13);

        var _super13 = _createSuper(QueryDepositsRequest);

        function QueryDepositsRequest(data) {
          var _this21;

          (0, _classCallCheck2["default"])(this, QueryDepositsRequest);
          _this21 = _super13.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this21.proposal_id = data.proposal_id;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this21.pagination = data.pagination;
            }
          }

          return _this21;
        }

        (0, _createClass2["default"])(QueryDepositsRequest, [{
          key: "proposal_id",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.proposal_id != null) {
              data.proposal_id = this.proposal_id;
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this22 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined) writer.writeUint64(1, this.proposal_id);
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this22.pagination.serialize(writer);
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
            var message = new QueryDepositsRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDepositsRequest();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.proposal_id = reader.readUint64();
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader);
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
            return QueryDepositsRequest.deserialize(bytes);
          }
        }]);
        return QueryDepositsRequest;
      }(pb_1.Message);

      _v1beta.QueryDepositsRequest = QueryDepositsRequest;

      var QueryDepositsResponse = /*#__PURE__*/function (_pb_1$Message14) {
        (0, _inherits2["default"])(QueryDepositsResponse, _pb_1$Message14);

        var _super14 = _createSuper(QueryDepositsResponse);

        function QueryDepositsResponse(data) {
          var _this23;

          (0, _classCallCheck2["default"])(this, QueryDepositsResponse);
          _this23 = _super14.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("deposits" in data && data.deposits != undefined) {
              _this23.deposits = data.deposits;
            }

            if ("pagination" in data && data.pagination != undefined) {
              _this23.pagination = data.pagination;
            }
          }

          return _this23;
        }

        (0, _createClass2["default"])(QueryDepositsResponse, [{
          key: "deposits",
          get: function get() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.gov.v1beta1.Deposit, 1);
          },
          set: function set(value) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
          }
        }, {
          key: "pagination",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 2, value);
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

            if (this.deposits != null) {
              data.deposits = this.deposits.map(function (item) {
                return item.toObject();
              });
            }

            if (this.pagination != null) {
              data.pagination = this.pagination.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this24 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.deposits !== undefined) writer.writeRepeatedMessage(1, this.deposits, function (item) {
              return item.serialize(writer);
            });
            if (this.pagination !== undefined) writer.writeMessage(2, this.pagination, function () {
              return _this24.pagination.serialize(writer);
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
            var message = new QueryDepositsResponse({});

            if (data.deposits != null) {
              message.deposits = data.deposits.map(function (item) {
                return dependency_4.cosmos.gov.v1beta1.Deposit.fromObject(item);
              });
            }

            if (data.pagination != null) {
              message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryDepositsResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.deposits, function () {
                    return pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.gov.v1beta1.Deposit.deserialize(reader), dependency_4.cosmos.gov.v1beta1.Deposit);
                  });
                  break;

                case 2:
                  reader.readMessage(message.pagination, function () {
                    return message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader);
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
            return QueryDepositsResponse.deserialize(bytes);
          }
        }]);
        return QueryDepositsResponse;
      }(pb_1.Message);

      _v1beta.QueryDepositsResponse = QueryDepositsResponse;

      var QueryTallyResultRequest = /*#__PURE__*/function (_pb_1$Message15) {
        (0, _inherits2["default"])(QueryTallyResultRequest, _pb_1$Message15);

        var _super15 = _createSuper(QueryTallyResultRequest);

        function QueryTallyResultRequest(data) {
          var _this25;

          (0, _classCallCheck2["default"])(this, QueryTallyResultRequest);
          _this25 = _super15.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("proposal_id" in data && data.proposal_id != undefined) {
              _this25.proposal_id = data.proposal_id;
            }
          }

          return _this25;
        }

        (0, _createClass2["default"])(QueryTallyResultRequest, [{
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
            var message = new QueryTallyResultRequest({});

            if (data.proposal_id != null) {
              message.proposal_id = data.proposal_id;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTallyResultRequest();

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
            return QueryTallyResultRequest.deserialize(bytes);
          }
        }]);
        return QueryTallyResultRequest;
      }(pb_1.Message);

      _v1beta.QueryTallyResultRequest = QueryTallyResultRequest;

      var QueryTallyResultResponse = /*#__PURE__*/function (_pb_1$Message16) {
        (0, _inherits2["default"])(QueryTallyResultResponse, _pb_1$Message16);

        var _super16 = _createSuper(QueryTallyResultResponse);

        function QueryTallyResultResponse(data) {
          var _this26;

          (0, _classCallCheck2["default"])(this, QueryTallyResultResponse);
          _this26 = _super16.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("tally" in data && data.tally != undefined) {
              _this26.tally = data.tally;
            }
          }

          return _this26;
        }

        (0, _createClass2["default"])(QueryTallyResultResponse, [{
          key: "tally",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.gov.v1beta1.TallyResult, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
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

            if (this.tally != null) {
              data.tally = this.tally.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this27 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.tally !== undefined) writer.writeMessage(1, this.tally, function () {
              return _this27.tally.serialize(writer);
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
            var message = new QueryTallyResultResponse({});

            if (data.tally != null) {
              message.tally = dependency_4.cosmos.gov.v1beta1.TallyResult.fromObject(data.tally);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new QueryTallyResultResponse();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.tally, function () {
                    return message.tally = dependency_4.cosmos.gov.v1beta1.TallyResult.deserialize(reader);
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
            return QueryTallyResultResponse.deserialize(bytes);
          }
        }]);
        return QueryTallyResultResponse;
      }(pb_1.Message);

      _v1beta.QueryTallyResultResponse = QueryTallyResultResponse;
    })(v1beta1 || (v1beta1 = _gov.v1beta1 || (_gov.v1beta1 = {})));
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
})(cosmos || (exports.cosmos = cosmos = {}));