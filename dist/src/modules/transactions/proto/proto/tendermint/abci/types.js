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

var dependency_1 = _interopRequireWildcard(require("./../crypto/proof"));

var dependency_2 = _interopRequireWildcard(require("./../types/types"));

var dependency_3 = _interopRequireWildcard(require("./../crypto/keys"));

var dependency_4 = _interopRequireWildcard(require("./../types/params"));

var dependency_5 = _interopRequireWildcard(require("./../../google/protobuf/timestamp"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var tendermint;
exports.tendermint = tendermint;

(function (_tendermint) {
  var abci;

  (function (_abci) {
    var CheckTxType;

    (function (CheckTxType) {
      CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
      CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    })(CheckTxType || (CheckTxType = {}));

    _abci.CheckTxType = CheckTxType;
    var EvidenceType;

    (function (EvidenceType) {
      EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
      EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
      EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    })(EvidenceType || (EvidenceType = {}));

    _abci.EvidenceType = EvidenceType;

    var Request = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(Request, _pb_1$Message);

      var _super = _createSuper(Request);

      function Request(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, Request);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("echo" in data && data.echo != undefined) {
            _this.echo = data.echo;
          }

          if ("flush" in data && data.flush != undefined) {
            _this.flush = data.flush;
          }

          if ("info" in data && data.info != undefined) {
            _this.info = data.info;
          }

          if ("set_option" in data && data.set_option != undefined) {
            _this.set_option = data.set_option;
          }

          if ("init_chain" in data && data.init_chain != undefined) {
            _this.init_chain = data.init_chain;
          }

          if ("query" in data && data.query != undefined) {
            _this.query = data.query;
          }

          if ("begin_block" in data && data.begin_block != undefined) {
            _this.begin_block = data.begin_block;
          }

          if ("check_tx" in data && data.check_tx != undefined) {
            _this.check_tx = data.check_tx;
          }

          if ("deliver_tx" in data && data.deliver_tx != undefined) {
            _this.deliver_tx = data.deliver_tx;
          }

          if ("end_block" in data && data.end_block != undefined) {
            _this.end_block = data.end_block;
          }

          if ("commit" in data && data.commit != undefined) {
            _this.commit = data.commit;
          }

          if ("list_snapshots" in data && data.list_snapshots != undefined) {
            _this.list_snapshots = data.list_snapshots;
          }

          if ("offer_snapshot" in data && data.offer_snapshot != undefined) {
            _this.offer_snapshot = data.offer_snapshot;
          }

          if ("load_snapshot_chunk" in data && data.load_snapshot_chunk != undefined) {
            _this.load_snapshot_chunk = data.load_snapshot_chunk;
          }

          if ("apply_snapshot_chunk" in data && data.apply_snapshot_chunk != undefined) {
            _this.apply_snapshot_chunk = data.apply_snapshot_chunk;
          }
        }

        return _this;
      }

      (0, _createClass2["default"])(Request, [{
        key: "echo",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestEcho, 1);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "flush",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestFlush, 2);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "info",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestInfo, 3);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "set_option",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestSetOption, 4);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "init_chain",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestInitChain, 5);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "query",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestQuery, 6);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "begin_block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestBeginBlock, 7);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "check_tx",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestCheckTx, 8);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "deliver_tx",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestDeliverTx, 9);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "end_block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestEndBlock, 10);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "commit",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestCommit, 11);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "list_snapshots",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestListSnapshots, 12);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "offer_snapshot",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestOfferSnapshot, 13);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 13, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "load_snapshot_chunk",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestLoadSnapshotChunk, 14);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 14, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "apply_snapshot_chunk",
        get: function get() {
          return pb_1.Message.getWrapperField(this, RequestApplySnapshotChunk, 15);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value);
        }
      }, {
        key: "value",
        get: function get() {
          var cases = {
            0: "none",
            1: "echo",
            2: "flush",
            3: "info",
            4: "set_option",
            5: "init_chain",
            6: "query",
            7: "begin_block",
            8: "check_tx",
            9: "deliver_tx",
            10: "end_block",
            11: "commit",
            12: "list_snapshots",
            13: "offer_snapshot",
            14: "load_snapshot_chunk",
            15: "apply_snapshot_chunk"
          };
          return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])];
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

          if (this.echo != null) {
            data.echo = this.echo.toObject();
          }

          if (this.flush != null) {
            data.flush = this.flush.toObject();
          }

          if (this.info != null) {
            data.info = this.info.toObject();
          }

          if (this.set_option != null) {
            data.set_option = this.set_option.toObject();
          }

          if (this.init_chain != null) {
            data.init_chain = this.init_chain.toObject();
          }

          if (this.query != null) {
            data.query = this.query.toObject();
          }

          if (this.begin_block != null) {
            data.begin_block = this.begin_block.toObject();
          }

          if (this.check_tx != null) {
            data.check_tx = this.check_tx.toObject();
          }

          if (this.deliver_tx != null) {
            data.deliver_tx = this.deliver_tx.toObject();
          }

          if (this.end_block != null) {
            data.end_block = this.end_block.toObject();
          }

          if (this.commit != null) {
            data.commit = this.commit.toObject();
          }

          if (this.list_snapshots != null) {
            data.list_snapshots = this.list_snapshots.toObject();
          }

          if (this.offer_snapshot != null) {
            data.offer_snapshot = this.offer_snapshot.toObject();
          }

          if (this.load_snapshot_chunk != null) {
            data.load_snapshot_chunk = this.load_snapshot_chunk.toObject();
          }

          if (this.apply_snapshot_chunk != null) {
            data.apply_snapshot_chunk = this.apply_snapshot_chunk.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this2 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.echo !== undefined) writer.writeMessage(1, this.echo, function () {
            return _this2.echo.serialize(writer);
          });
          if (this.flush !== undefined) writer.writeMessage(2, this.flush, function () {
            return _this2.flush.serialize(writer);
          });
          if (this.info !== undefined) writer.writeMessage(3, this.info, function () {
            return _this2.info.serialize(writer);
          });
          if (this.set_option !== undefined) writer.writeMessage(4, this.set_option, function () {
            return _this2.set_option.serialize(writer);
          });
          if (this.init_chain !== undefined) writer.writeMessage(5, this.init_chain, function () {
            return _this2.init_chain.serialize(writer);
          });
          if (this.query !== undefined) writer.writeMessage(6, this.query, function () {
            return _this2.query.serialize(writer);
          });
          if (this.begin_block !== undefined) writer.writeMessage(7, this.begin_block, function () {
            return _this2.begin_block.serialize(writer);
          });
          if (this.check_tx !== undefined) writer.writeMessage(8, this.check_tx, function () {
            return _this2.check_tx.serialize(writer);
          });
          if (this.deliver_tx !== undefined) writer.writeMessage(9, this.deliver_tx, function () {
            return _this2.deliver_tx.serialize(writer);
          });
          if (this.end_block !== undefined) writer.writeMessage(10, this.end_block, function () {
            return _this2.end_block.serialize(writer);
          });
          if (this.commit !== undefined) writer.writeMessage(11, this.commit, function () {
            return _this2.commit.serialize(writer);
          });
          if (this.list_snapshots !== undefined) writer.writeMessage(12, this.list_snapshots, function () {
            return _this2.list_snapshots.serialize(writer);
          });
          if (this.offer_snapshot !== undefined) writer.writeMessage(13, this.offer_snapshot, function () {
            return _this2.offer_snapshot.serialize(writer);
          });
          if (this.load_snapshot_chunk !== undefined) writer.writeMessage(14, this.load_snapshot_chunk, function () {
            return _this2.load_snapshot_chunk.serialize(writer);
          });
          if (this.apply_snapshot_chunk !== undefined) writer.writeMessage(15, this.apply_snapshot_chunk, function () {
            return _this2.apply_snapshot_chunk.serialize(writer);
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
          var message = new Request({});

          if (data.echo != null) {
            message.echo = RequestEcho.fromObject(data.echo);
          }

          if (data.flush != null) {
            message.flush = RequestFlush.fromObject(data.flush);
          }

          if (data.info != null) {
            message.info = RequestInfo.fromObject(data.info);
          }

          if (data.set_option != null) {
            message.set_option = RequestSetOption.fromObject(data.set_option);
          }

          if (data.init_chain != null) {
            message.init_chain = RequestInitChain.fromObject(data.init_chain);
          }

          if (data.query != null) {
            message.query = RequestQuery.fromObject(data.query);
          }

          if (data.begin_block != null) {
            message.begin_block = RequestBeginBlock.fromObject(data.begin_block);
          }

          if (data.check_tx != null) {
            message.check_tx = RequestCheckTx.fromObject(data.check_tx);
          }

          if (data.deliver_tx != null) {
            message.deliver_tx = RequestDeliverTx.fromObject(data.deliver_tx);
          }

          if (data.end_block != null) {
            message.end_block = RequestEndBlock.fromObject(data.end_block);
          }

          if (data.commit != null) {
            message.commit = RequestCommit.fromObject(data.commit);
          }

          if (data.list_snapshots != null) {
            message.list_snapshots = RequestListSnapshots.fromObject(data.list_snapshots);
          }

          if (data.offer_snapshot != null) {
            message.offer_snapshot = RequestOfferSnapshot.fromObject(data.offer_snapshot);
          }

          if (data.load_snapshot_chunk != null) {
            message.load_snapshot_chunk = RequestLoadSnapshotChunk.fromObject(data.load_snapshot_chunk);
          }

          if (data.apply_snapshot_chunk != null) {
            message.apply_snapshot_chunk = RequestApplySnapshotChunk.fromObject(data.apply_snapshot_chunk);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Request();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.echo, function () {
                  return message.echo = RequestEcho.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.flush, function () {
                  return message.flush = RequestFlush.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.info, function () {
                  return message.info = RequestInfo.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.set_option, function () {
                  return message.set_option = RequestSetOption.deserialize(reader);
                });
                break;

              case 5:
                reader.readMessage(message.init_chain, function () {
                  return message.init_chain = RequestInitChain.deserialize(reader);
                });
                break;

              case 6:
                reader.readMessage(message.query, function () {
                  return message.query = RequestQuery.deserialize(reader);
                });
                break;

              case 7:
                reader.readMessage(message.begin_block, function () {
                  return message.begin_block = RequestBeginBlock.deserialize(reader);
                });
                break;

              case 8:
                reader.readMessage(message.check_tx, function () {
                  return message.check_tx = RequestCheckTx.deserialize(reader);
                });
                break;

              case 9:
                reader.readMessage(message.deliver_tx, function () {
                  return message.deliver_tx = RequestDeliverTx.deserialize(reader);
                });
                break;

              case 10:
                reader.readMessage(message.end_block, function () {
                  return message.end_block = RequestEndBlock.deserialize(reader);
                });
                break;

              case 11:
                reader.readMessage(message.commit, function () {
                  return message.commit = RequestCommit.deserialize(reader);
                });
                break;

              case 12:
                reader.readMessage(message.list_snapshots, function () {
                  return message.list_snapshots = RequestListSnapshots.deserialize(reader);
                });
                break;

              case 13:
                reader.readMessage(message.offer_snapshot, function () {
                  return message.offer_snapshot = RequestOfferSnapshot.deserialize(reader);
                });
                break;

              case 14:
                reader.readMessage(message.load_snapshot_chunk, function () {
                  return message.load_snapshot_chunk = RequestLoadSnapshotChunk.deserialize(reader);
                });
                break;

              case 15:
                reader.readMessage(message.apply_snapshot_chunk, function () {
                  return message.apply_snapshot_chunk = RequestApplySnapshotChunk.deserialize(reader);
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
          return Request.deserialize(bytes);
        }
      }]);
      return Request;
    }(pb_1.Message);

    _abci.Request = Request;

    var RequestEcho = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(RequestEcho, _pb_1$Message2);

      var _super2 = _createSuper(RequestEcho);

      function RequestEcho(data) {
        var _this3;

        (0, _classCallCheck2["default"])(this, RequestEcho);
        _this3 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("message" in data && data.message != undefined) {
            _this3.message = data.message;
          }
        }

        return _this3;
      }

      (0, _createClass2["default"])(RequestEcho, [{
        key: "message",
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

          if (this.message != null) {
            data.message = this.message;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.message === "string" && this.message.length) writer.writeString(1, this.message);
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
          var message = new RequestEcho({});

          if (data.message != null) {
            message.message = data.message;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestEcho();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.message = reader.readString();
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
          return RequestEcho.deserialize(bytes);
        }
      }]);
      return RequestEcho;
    }(pb_1.Message);

    _abci.RequestEcho = RequestEcho;

    var RequestFlush = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(RequestFlush, _pb_1$Message3);

      var _super3 = _createSuper(RequestFlush);

      function RequestFlush(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, RequestFlush);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this4;
      }

      (0, _createClass2["default"])(RequestFlush, [{
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
          var message = new RequestFlush({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestFlush();

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
          return RequestFlush.deserialize(bytes);
        }
      }]);
      return RequestFlush;
    }(pb_1.Message);

    _abci.RequestFlush = RequestFlush;

    var RequestInfo = /*#__PURE__*/function (_pb_1$Message4) {
      (0, _inherits2["default"])(RequestInfo, _pb_1$Message4);

      var _super4 = _createSuper(RequestInfo);

      function RequestInfo(data) {
        var _this5;

        (0, _classCallCheck2["default"])(this, RequestInfo);
        _this5 = _super4.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("version" in data && data.version != undefined) {
            _this5.version = data.version;
          }

          if ("block_version" in data && data.block_version != undefined) {
            _this5.block_version = data.block_version;
          }

          if ("p2p_version" in data && data.p2p_version != undefined) {
            _this5.p2p_version = data.p2p_version;
          }
        }

        return _this5;
      }

      (0, _createClass2["default"])(RequestInfo, [{
        key: "version",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "block_version",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "p2p_version",
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

          if (this.version != null) {
            data.version = this.version;
          }

          if (this.block_version != null) {
            data.block_version = this.block_version;
          }

          if (this.p2p_version != null) {
            data.p2p_version = this.p2p_version;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.version === "string" && this.version.length) writer.writeString(1, this.version);
          if (this.block_version !== undefined) writer.writeUint64(2, this.block_version);
          if (this.p2p_version !== undefined) writer.writeUint64(3, this.p2p_version);
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
          var message = new RequestInfo({});

          if (data.version != null) {
            message.version = data.version;
          }

          if (data.block_version != null) {
            message.block_version = data.block_version;
          }

          if (data.p2p_version != null) {
            message.p2p_version = data.p2p_version;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.version = reader.readString();
                break;

              case 2:
                message.block_version = reader.readUint64();
                break;

              case 3:
                message.p2p_version = reader.readUint64();
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
          return RequestInfo.deserialize(bytes);
        }
      }]);
      return RequestInfo;
    }(pb_1.Message);

    _abci.RequestInfo = RequestInfo;

    var RequestSetOption = /*#__PURE__*/function (_pb_1$Message5) {
      (0, _inherits2["default"])(RequestSetOption, _pb_1$Message5);

      var _super5 = _createSuper(RequestSetOption);

      function RequestSetOption(data) {
        var _this6;

        (0, _classCallCheck2["default"])(this, RequestSetOption);
        _this6 = _super5.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("key" in data && data.key != undefined) {
            _this6.key = data.key;
          }

          if ("value" in data && data.value != undefined) {
            _this6.value = data.value;
          }
        }

        return _this6;
      }

      (0, _createClass2["default"])(RequestSetOption, [{
        key: "key",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "value",
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

          if (this.key != null) {
            data.key = this.key;
          }

          if (this.value != null) {
            data.value = this.value;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.key === "string" && this.key.length) writer.writeString(1, this.key);
          if (typeof this.value === "string" && this.value.length) writer.writeString(2, this.value);
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
          var message = new RequestSetOption({});

          if (data.key != null) {
            message.key = data.key;
          }

          if (data.value != null) {
            message.value = data.value;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestSetOption();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.key = reader.readString();
                break;

              case 2:
                message.value = reader.readString();
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
          return RequestSetOption.deserialize(bytes);
        }
      }]);
      return RequestSetOption;
    }(pb_1.Message);

    _abci.RequestSetOption = RequestSetOption;

    var RequestInitChain = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(RequestInitChain, _pb_1$Message6);

      var _super6 = _createSuper(RequestInitChain);

      function RequestInitChain(data) {
        var _this7;

        (0, _classCallCheck2["default"])(this, RequestInitChain);
        _this7 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [4], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("time" in data && data.time != undefined) {
            _this7.time = data.time;
          }

          if ("chain_id" in data && data.chain_id != undefined) {
            _this7.chain_id = data.chain_id;
          }

          if ("consensus_params" in data && data.consensus_params != undefined) {
            _this7.consensus_params = data.consensus_params;
          }

          if ("validators" in data && data.validators != undefined) {
            _this7.validators = data.validators;
          }

          if ("app_state_bytes" in data && data.app_state_bytes != undefined) {
            _this7.app_state_bytes = data.app_state_bytes;
          }

          if ("initial_height" in data && data.initial_height != undefined) {
            _this7.initial_height = data.initial_height;
          }
        }

        return _this7;
      }

      (0, _createClass2["default"])(RequestInitChain, [{
        key: "time",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "chain_id",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "consensus_params",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ConsensusParams, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "validators",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, ValidatorUpdate, 4);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
      }, {
        key: "app_state_bytes",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "initial_height",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
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

          if (this.time != null) {
            data.time = this.time.toObject();
          }

          if (this.chain_id != null) {
            data.chain_id = this.chain_id;
          }

          if (this.consensus_params != null) {
            data.consensus_params = this.consensus_params.toObject();
          }

          if (this.validators != null) {
            data.validators = this.validators.map(function (item) {
              return item.toObject();
            });
          }

          if (this.app_state_bytes != null) {
            data.app_state_bytes = this.app_state_bytes;
          }

          if (this.initial_height != null) {
            data.initial_height = this.initial_height;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this8 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.time !== undefined) writer.writeMessage(1, this.time, function () {
            return _this8.time.serialize(writer);
          });
          if (typeof this.chain_id === "string" && this.chain_id.length) writer.writeString(2, this.chain_id);
          if (this.consensus_params !== undefined) writer.writeMessage(3, this.consensus_params, function () {
            return _this8.consensus_params.serialize(writer);
          });
          if (this.validators !== undefined) writer.writeRepeatedMessage(4, this.validators, function (item) {
            return item.serialize(writer);
          });
          if (this.app_state_bytes !== undefined) writer.writeBytes(5, this.app_state_bytes);
          if (this.initial_height !== undefined) writer.writeInt64(6, this.initial_height);
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
          var message = new RequestInitChain({});

          if (data.time != null) {
            message.time = dependency_5.google.protobuf.Timestamp.fromObject(data.time);
          }

          if (data.chain_id != null) {
            message.chain_id = data.chain_id;
          }

          if (data.consensus_params != null) {
            message.consensus_params = ConsensusParams.fromObject(data.consensus_params);
          }

          if (data.validators != null) {
            message.validators = data.validators.map(function (item) {
              return ValidatorUpdate.fromObject(item);
            });
          }

          if (data.app_state_bytes != null) {
            message.app_state_bytes = data.app_state_bytes;
          }

          if (data.initial_height != null) {
            message.initial_height = data.initial_height;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestInitChain();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.time, function () {
                  return message.time = dependency_5.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 2:
                message.chain_id = reader.readString();
                break;

              case 3:
                reader.readMessage(message.consensus_params, function () {
                  return message.consensus_params = ConsensusParams.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.validators, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, ValidatorUpdate.deserialize(reader), ValidatorUpdate);
                });
                break;

              case 5:
                message.app_state_bytes = reader.readBytes();
                break;

              case 6:
                message.initial_height = reader.readInt64();
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
          return RequestInitChain.deserialize(bytes);
        }
      }]);
      return RequestInitChain;
    }(pb_1.Message);

    _abci.RequestInitChain = RequestInitChain;

    var RequestQuery = /*#__PURE__*/function (_pb_1$Message7) {
      (0, _inherits2["default"])(RequestQuery, _pb_1$Message7);

      var _super7 = _createSuper(RequestQuery);

      function RequestQuery(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, RequestQuery);
        _this9 = _super7.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("data" in data && data.data != undefined) {
            _this9.data = data.data;
          }

          if ("path" in data && data.path != undefined) {
            _this9.path = data.path;
          }

          if ("height" in data && data.height != undefined) {
            _this9.height = data.height;
          }

          if ("prove" in data && data.prove != undefined) {
            _this9.prove = data.prove;
          }
        }

        return _this9;
      }

      (0, _createClass2["default"])(RequestQuery, [{
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "path",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "prove",
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

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.path != null) {
            data.path = this.path;
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.prove != null) {
            data.prove = this.prove;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.data !== undefined) writer.writeBytes(1, this.data);
          if (typeof this.path === "string" && this.path.length) writer.writeString(2, this.path);
          if (this.height !== undefined) writer.writeInt64(3, this.height);
          if (this.prove !== undefined) writer.writeBool(4, this.prove);
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
          var message = new RequestQuery({});

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.path != null) {
            message.path = data.path;
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.prove != null) {
            message.prove = data.prove;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestQuery();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.data = reader.readBytes();
                break;

              case 2:
                message.path = reader.readString();
                break;

              case 3:
                message.height = reader.readInt64();
                break;

              case 4:
                message.prove = reader.readBool();
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
          return RequestQuery.deserialize(bytes);
        }
      }]);
      return RequestQuery;
    }(pb_1.Message);

    _abci.RequestQuery = RequestQuery;

    var RequestBeginBlock = /*#__PURE__*/function (_pb_1$Message8) {
      (0, _inherits2["default"])(RequestBeginBlock, _pb_1$Message8);

      var _super8 = _createSuper(RequestBeginBlock);

      function RequestBeginBlock(data) {
        var _this10;

        (0, _classCallCheck2["default"])(this, RequestBeginBlock);
        _this10 = _super8.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [4], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("hash" in data && data.hash != undefined) {
            _this10.hash = data.hash;
          }

          if ("header" in data && data.header != undefined) {
            _this10.header = data.header;
          }

          if ("last_commit_info" in data && data.last_commit_info != undefined) {
            _this10.last_commit_info = data.last_commit_info;
          }

          if ("byzantine_validators" in data && data.byzantine_validators != undefined) {
            _this10.byzantine_validators = data.byzantine_validators;
          }
        }

        return _this10;
      }

      (0, _createClass2["default"])(RequestBeginBlock, [{
        key: "hash",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "header",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Header, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "last_commit_info",
        get: function get() {
          return pb_1.Message.getWrapperField(this, LastCommitInfo, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "byzantine_validators",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Evidence, 4);
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

          if (this.hash != null) {
            data.hash = this.hash;
          }

          if (this.header != null) {
            data.header = this.header.toObject();
          }

          if (this.last_commit_info != null) {
            data.last_commit_info = this.last_commit_info.toObject();
          }

          if (this.byzantine_validators != null) {
            data.byzantine_validators = this.byzantine_validators.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this11 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.hash !== undefined) writer.writeBytes(1, this.hash);
          if (this.header !== undefined) writer.writeMessage(2, this.header, function () {
            return _this11.header.serialize(writer);
          });
          if (this.last_commit_info !== undefined) writer.writeMessage(3, this.last_commit_info, function () {
            return _this11.last_commit_info.serialize(writer);
          });
          if (this.byzantine_validators !== undefined) writer.writeRepeatedMessage(4, this.byzantine_validators, function (item) {
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
          var message = new RequestBeginBlock({});

          if (data.hash != null) {
            message.hash = data.hash;
          }

          if (data.header != null) {
            message.header = dependency_2.tendermint.types.Header.fromObject(data.header);
          }

          if (data.last_commit_info != null) {
            message.last_commit_info = LastCommitInfo.fromObject(data.last_commit_info);
          }

          if (data.byzantine_validators != null) {
            message.byzantine_validators = data.byzantine_validators.map(function (item) {
              return Evidence.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestBeginBlock();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.hash = reader.readBytes();
                break;

              case 2:
                reader.readMessage(message.header, function () {
                  return message.header = dependency_2.tendermint.types.Header.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.last_commit_info, function () {
                  return message.last_commit_info = LastCommitInfo.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.byzantine_validators, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, Evidence.deserialize(reader), Evidence);
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
          return RequestBeginBlock.deserialize(bytes);
        }
      }]);
      return RequestBeginBlock;
    }(pb_1.Message);

    _abci.RequestBeginBlock = RequestBeginBlock;

    var RequestCheckTx = /*#__PURE__*/function (_pb_1$Message9) {
      (0, _inherits2["default"])(RequestCheckTx, _pb_1$Message9);

      var _super9 = _createSuper(RequestCheckTx);

      function RequestCheckTx(data) {
        var _this12;

        (0, _classCallCheck2["default"])(this, RequestCheckTx);
        _this12 = _super9.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("tx" in data && data.tx != undefined) {
            _this12.tx = data.tx;
          }

          if ("type" in data && data.type != undefined) {
            _this12.type = data.type;
          }
        }

        return _this12;
      }

      (0, _createClass2["default"])(RequestCheckTx, [{
        key: "tx",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "type",
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

          if (this.tx != null) {
            data.tx = this.tx;
          }

          if (this.type != null) {
            data.type = this.type;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.tx !== undefined) writer.writeBytes(1, this.tx);
          if (this.type !== undefined) writer.writeEnum(2, this.type);
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
          var message = new RequestCheckTx({});

          if (data.tx != null) {
            message.tx = data.tx;
          }

          if (data.type != null) {
            message.type = data.type;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestCheckTx();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.tx = reader.readBytes();
                break;

              case 2:
                message.type = reader.readEnum();
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
          return RequestCheckTx.deserialize(bytes);
        }
      }]);
      return RequestCheckTx;
    }(pb_1.Message);

    _abci.RequestCheckTx = RequestCheckTx;

    var RequestDeliverTx = /*#__PURE__*/function (_pb_1$Message10) {
      (0, _inherits2["default"])(RequestDeliverTx, _pb_1$Message10);

      var _super10 = _createSuper(RequestDeliverTx);

      function RequestDeliverTx(data) {
        var _this13;

        (0, _classCallCheck2["default"])(this, RequestDeliverTx);
        _this13 = _super10.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this13), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("tx" in data && data.tx != undefined) {
            _this13.tx = data.tx;
          }
        }

        return _this13;
      }

      (0, _createClass2["default"])(RequestDeliverTx, [{
        key: "tx",
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

          if (this.tx != null) {
            data.tx = this.tx;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.tx !== undefined) writer.writeBytes(1, this.tx);
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
          var message = new RequestDeliverTx({});

          if (data.tx != null) {
            message.tx = data.tx;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestDeliverTx();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.tx = reader.readBytes();
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
          return RequestDeliverTx.deserialize(bytes);
        }
      }]);
      return RequestDeliverTx;
    }(pb_1.Message);

    _abci.RequestDeliverTx = RequestDeliverTx;

    var RequestEndBlock = /*#__PURE__*/function (_pb_1$Message11) {
      (0, _inherits2["default"])(RequestEndBlock, _pb_1$Message11);

      var _super11 = _createSuper(RequestEndBlock);

      function RequestEndBlock(data) {
        var _this14;

        (0, _classCallCheck2["default"])(this, RequestEndBlock);
        _this14 = _super11.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("height" in data && data.height != undefined) {
            _this14.height = data.height;
          }
        }

        return _this14;
      }

      (0, _createClass2["default"])(RequestEndBlock, [{
        key: "height",
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

          if (this.height != null) {
            data.height = this.height;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.height !== undefined) writer.writeInt64(1, this.height);
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
          var message = new RequestEndBlock({});

          if (data.height != null) {
            message.height = data.height;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestEndBlock();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.height = reader.readInt64();
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
          return RequestEndBlock.deserialize(bytes);
        }
      }]);
      return RequestEndBlock;
    }(pb_1.Message);

    _abci.RequestEndBlock = RequestEndBlock;

    var RequestCommit = /*#__PURE__*/function (_pb_1$Message12) {
      (0, _inherits2["default"])(RequestCommit, _pb_1$Message12);

      var _super12 = _createSuper(RequestCommit);

      function RequestCommit(data) {
        var _this15;

        (0, _classCallCheck2["default"])(this, RequestCommit);
        _this15 = _super12.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this15), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this15;
      }

      (0, _createClass2["default"])(RequestCommit, [{
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
          var message = new RequestCommit({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestCommit();

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
          return RequestCommit.deserialize(bytes);
        }
      }]);
      return RequestCommit;
    }(pb_1.Message);

    _abci.RequestCommit = RequestCommit;

    var RequestListSnapshots = /*#__PURE__*/function (_pb_1$Message13) {
      (0, _inherits2["default"])(RequestListSnapshots, _pb_1$Message13);

      var _super13 = _createSuper(RequestListSnapshots);

      function RequestListSnapshots(data) {
        var _this16;

        (0, _classCallCheck2["default"])(this, RequestListSnapshots);
        _this16 = _super13.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this16;
      }

      (0, _createClass2["default"])(RequestListSnapshots, [{
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
          var message = new RequestListSnapshots({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestListSnapshots();

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
          return RequestListSnapshots.deserialize(bytes);
        }
      }]);
      return RequestListSnapshots;
    }(pb_1.Message);

    _abci.RequestListSnapshots = RequestListSnapshots;

    var RequestOfferSnapshot = /*#__PURE__*/function (_pb_1$Message14) {
      (0, _inherits2["default"])(RequestOfferSnapshot, _pb_1$Message14);

      var _super14 = _createSuper(RequestOfferSnapshot);

      function RequestOfferSnapshot(data) {
        var _this17;

        (0, _classCallCheck2["default"])(this, RequestOfferSnapshot);
        _this17 = _super14.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("snapshot" in data && data.snapshot != undefined) {
            _this17.snapshot = data.snapshot;
          }

          if ("app_hash" in data && data.app_hash != undefined) {
            _this17.app_hash = data.app_hash;
          }
        }

        return _this17;
      }

      (0, _createClass2["default"])(RequestOfferSnapshot, [{
        key: "snapshot",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Snapshot, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "app_hash",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
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

          if (this.snapshot != null) {
            data.snapshot = this.snapshot.toObject();
          }

          if (this.app_hash != null) {
            data.app_hash = this.app_hash;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this18 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.snapshot !== undefined) writer.writeMessage(1, this.snapshot, function () {
            return _this18.snapshot.serialize(writer);
          });
          if (this.app_hash !== undefined) writer.writeBytes(2, this.app_hash);
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
          var message = new RequestOfferSnapshot({});

          if (data.snapshot != null) {
            message.snapshot = Snapshot.fromObject(data.snapshot);
          }

          if (data.app_hash != null) {
            message.app_hash = data.app_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestOfferSnapshot();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.snapshot, function () {
                  return message.snapshot = Snapshot.deserialize(reader);
                });
                break;

              case 2:
                message.app_hash = reader.readBytes();
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
          return RequestOfferSnapshot.deserialize(bytes);
        }
      }]);
      return RequestOfferSnapshot;
    }(pb_1.Message);

    _abci.RequestOfferSnapshot = RequestOfferSnapshot;

    var RequestLoadSnapshotChunk = /*#__PURE__*/function (_pb_1$Message15) {
      (0, _inherits2["default"])(RequestLoadSnapshotChunk, _pb_1$Message15);

      var _super15 = _createSuper(RequestLoadSnapshotChunk);

      function RequestLoadSnapshotChunk(data) {
        var _this19;

        (0, _classCallCheck2["default"])(this, RequestLoadSnapshotChunk);
        _this19 = _super15.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("height" in data && data.height != undefined) {
            _this19.height = data.height;
          }

          if ("format" in data && data.format != undefined) {
            _this19.format = data.format;
          }

          if ("chunk" in data && data.chunk != undefined) {
            _this19.chunk = data.chunk;
          }
        }

        return _this19;
      }

      (0, _createClass2["default"])(RequestLoadSnapshotChunk, [{
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "format",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "chunk",
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

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.format != null) {
            data.format = this.format;
          }

          if (this.chunk != null) {
            data.chunk = this.chunk;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.height !== undefined) writer.writeUint64(1, this.height);
          if (this.format !== undefined) writer.writeUint32(2, this.format);
          if (this.chunk !== undefined) writer.writeUint32(3, this.chunk);
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
          var message = new RequestLoadSnapshotChunk({});

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.format != null) {
            message.format = data.format;
          }

          if (data.chunk != null) {
            message.chunk = data.chunk;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestLoadSnapshotChunk();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.height = reader.readUint64();
                break;

              case 2:
                message.format = reader.readUint32();
                break;

              case 3:
                message.chunk = reader.readUint32();
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
          return RequestLoadSnapshotChunk.deserialize(bytes);
        }
      }]);
      return RequestLoadSnapshotChunk;
    }(pb_1.Message);

    _abci.RequestLoadSnapshotChunk = RequestLoadSnapshotChunk;

    var RequestApplySnapshotChunk = /*#__PURE__*/function (_pb_1$Message16) {
      (0, _inherits2["default"])(RequestApplySnapshotChunk, _pb_1$Message16);

      var _super16 = _createSuper(RequestApplySnapshotChunk);

      function RequestApplySnapshotChunk(data) {
        var _this20;

        (0, _classCallCheck2["default"])(this, RequestApplySnapshotChunk);
        _this20 = _super16.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this20), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("index" in data && data.index != undefined) {
            _this20.index = data.index;
          }

          if ("chunk" in data && data.chunk != undefined) {
            _this20.chunk = data.chunk;
          }

          if ("sender" in data && data.sender != undefined) {
            _this20.sender = data.sender;
          }
        }

        return _this20;
      }

      (0, _createClass2["default"])(RequestApplySnapshotChunk, [{
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "chunk",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "sender",
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

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.chunk != null) {
            data.chunk = this.chunk;
          }

          if (this.sender != null) {
            data.sender = this.sender;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.index !== undefined) writer.writeUint32(1, this.index);
          if (this.chunk !== undefined) writer.writeBytes(2, this.chunk);
          if (typeof this.sender === "string" && this.sender.length) writer.writeString(3, this.sender);
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
          var message = new RequestApplySnapshotChunk({});

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.chunk != null) {
            message.chunk = data.chunk;
          }

          if (data.sender != null) {
            message.sender = data.sender;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new RequestApplySnapshotChunk();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.index = reader.readUint32();
                break;

              case 2:
                message.chunk = reader.readBytes();
                break;

              case 3:
                message.sender = reader.readString();
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
          return RequestApplySnapshotChunk.deserialize(bytes);
        }
      }]);
      return RequestApplySnapshotChunk;
    }(pb_1.Message);

    _abci.RequestApplySnapshotChunk = RequestApplySnapshotChunk;

    var Response = /*#__PURE__*/function (_pb_1$Message17) {
      (0, _inherits2["default"])(Response, _pb_1$Message17);

      var _super17 = _createSuper(Response);

      function Response(data) {
        var _this21;

        (0, _classCallCheck2["default"])(this, Response);
        _this21 = _super17.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("exception" in data && data.exception != undefined) {
            _this21.exception = data.exception;
          }

          if ("echo" in data && data.echo != undefined) {
            _this21.echo = data.echo;
          }

          if ("flush" in data && data.flush != undefined) {
            _this21.flush = data.flush;
          }

          if ("info" in data && data.info != undefined) {
            _this21.info = data.info;
          }

          if ("set_option" in data && data.set_option != undefined) {
            _this21.set_option = data.set_option;
          }

          if ("init_chain" in data && data.init_chain != undefined) {
            _this21.init_chain = data.init_chain;
          }

          if ("query" in data && data.query != undefined) {
            _this21.query = data.query;
          }

          if ("begin_block" in data && data.begin_block != undefined) {
            _this21.begin_block = data.begin_block;
          }

          if ("check_tx" in data && data.check_tx != undefined) {
            _this21.check_tx = data.check_tx;
          }

          if ("deliver_tx" in data && data.deliver_tx != undefined) {
            _this21.deliver_tx = data.deliver_tx;
          }

          if ("end_block" in data && data.end_block != undefined) {
            _this21.end_block = data.end_block;
          }

          if ("commit" in data && data.commit != undefined) {
            _this21.commit = data.commit;
          }

          if ("list_snapshots" in data && data.list_snapshots != undefined) {
            _this21.list_snapshots = data.list_snapshots;
          }

          if ("offer_snapshot" in data && data.offer_snapshot != undefined) {
            _this21.offer_snapshot = data.offer_snapshot;
          }

          if ("load_snapshot_chunk" in data && data.load_snapshot_chunk != undefined) {
            _this21.load_snapshot_chunk = data.load_snapshot_chunk;
          }

          if ("apply_snapshot_chunk" in data && data.apply_snapshot_chunk != undefined) {
            _this21.apply_snapshot_chunk = data.apply_snapshot_chunk;
          }
        }

        return _this21;
      }

      (0, _createClass2["default"])(Response, [{
        key: "exception",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseException, 1);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "echo",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseEcho, 2);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "flush",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseFlush, 3);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "info",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseInfo, 4);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "set_option",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseSetOption, 5);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "init_chain",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseInitChain, 6);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "query",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseQuery, 7);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "begin_block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseBeginBlock, 8);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "check_tx",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseCheckTx, 9);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "deliver_tx",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseDeliverTx, 10);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "end_block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseEndBlock, 11);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "commit",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseCommit, 12);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "list_snapshots",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseListSnapshots, 13);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 13, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "offer_snapshot",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseOfferSnapshot, 14);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 14, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "load_snapshot_chunk",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseLoadSnapshotChunk, 15);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "apply_snapshot_chunk",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseApplySnapshotChunk, 16);
        },
        set: function set(value) {
          pb_1.Message.setOneofWrapperField(this, 16, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], value);
        }
      }, {
        key: "value",
        get: function get() {
          var cases = {
            0: "none",
            1: "exception",
            2: "echo",
            3: "flush",
            4: "info",
            5: "set_option",
            6: "init_chain",
            7: "query",
            8: "begin_block",
            9: "check_tx",
            10: "deliver_tx",
            11: "end_block",
            12: "commit",
            13: "list_snapshots",
            14: "offer_snapshot",
            15: "load_snapshot_chunk",
            16: "apply_snapshot_chunk"
          };
          return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])];
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

          if (this.exception != null) {
            data.exception = this.exception.toObject();
          }

          if (this.echo != null) {
            data.echo = this.echo.toObject();
          }

          if (this.flush != null) {
            data.flush = this.flush.toObject();
          }

          if (this.info != null) {
            data.info = this.info.toObject();
          }

          if (this.set_option != null) {
            data.set_option = this.set_option.toObject();
          }

          if (this.init_chain != null) {
            data.init_chain = this.init_chain.toObject();
          }

          if (this.query != null) {
            data.query = this.query.toObject();
          }

          if (this.begin_block != null) {
            data.begin_block = this.begin_block.toObject();
          }

          if (this.check_tx != null) {
            data.check_tx = this.check_tx.toObject();
          }

          if (this.deliver_tx != null) {
            data.deliver_tx = this.deliver_tx.toObject();
          }

          if (this.end_block != null) {
            data.end_block = this.end_block.toObject();
          }

          if (this.commit != null) {
            data.commit = this.commit.toObject();
          }

          if (this.list_snapshots != null) {
            data.list_snapshots = this.list_snapshots.toObject();
          }

          if (this.offer_snapshot != null) {
            data.offer_snapshot = this.offer_snapshot.toObject();
          }

          if (this.load_snapshot_chunk != null) {
            data.load_snapshot_chunk = this.load_snapshot_chunk.toObject();
          }

          if (this.apply_snapshot_chunk != null) {
            data.apply_snapshot_chunk = this.apply_snapshot_chunk.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this22 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.exception !== undefined) writer.writeMessage(1, this.exception, function () {
            return _this22.exception.serialize(writer);
          });
          if (this.echo !== undefined) writer.writeMessage(2, this.echo, function () {
            return _this22.echo.serialize(writer);
          });
          if (this.flush !== undefined) writer.writeMessage(3, this.flush, function () {
            return _this22.flush.serialize(writer);
          });
          if (this.info !== undefined) writer.writeMessage(4, this.info, function () {
            return _this22.info.serialize(writer);
          });
          if (this.set_option !== undefined) writer.writeMessage(5, this.set_option, function () {
            return _this22.set_option.serialize(writer);
          });
          if (this.init_chain !== undefined) writer.writeMessage(6, this.init_chain, function () {
            return _this22.init_chain.serialize(writer);
          });
          if (this.query !== undefined) writer.writeMessage(7, this.query, function () {
            return _this22.query.serialize(writer);
          });
          if (this.begin_block !== undefined) writer.writeMessage(8, this.begin_block, function () {
            return _this22.begin_block.serialize(writer);
          });
          if (this.check_tx !== undefined) writer.writeMessage(9, this.check_tx, function () {
            return _this22.check_tx.serialize(writer);
          });
          if (this.deliver_tx !== undefined) writer.writeMessage(10, this.deliver_tx, function () {
            return _this22.deliver_tx.serialize(writer);
          });
          if (this.end_block !== undefined) writer.writeMessage(11, this.end_block, function () {
            return _this22.end_block.serialize(writer);
          });
          if (this.commit !== undefined) writer.writeMessage(12, this.commit, function () {
            return _this22.commit.serialize(writer);
          });
          if (this.list_snapshots !== undefined) writer.writeMessage(13, this.list_snapshots, function () {
            return _this22.list_snapshots.serialize(writer);
          });
          if (this.offer_snapshot !== undefined) writer.writeMessage(14, this.offer_snapshot, function () {
            return _this22.offer_snapshot.serialize(writer);
          });
          if (this.load_snapshot_chunk !== undefined) writer.writeMessage(15, this.load_snapshot_chunk, function () {
            return _this22.load_snapshot_chunk.serialize(writer);
          });
          if (this.apply_snapshot_chunk !== undefined) writer.writeMessage(16, this.apply_snapshot_chunk, function () {
            return _this22.apply_snapshot_chunk.serialize(writer);
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
          var message = new Response({});

          if (data.exception != null) {
            message.exception = ResponseException.fromObject(data.exception);
          }

          if (data.echo != null) {
            message.echo = ResponseEcho.fromObject(data.echo);
          }

          if (data.flush != null) {
            message.flush = ResponseFlush.fromObject(data.flush);
          }

          if (data.info != null) {
            message.info = ResponseInfo.fromObject(data.info);
          }

          if (data.set_option != null) {
            message.set_option = ResponseSetOption.fromObject(data.set_option);
          }

          if (data.init_chain != null) {
            message.init_chain = ResponseInitChain.fromObject(data.init_chain);
          }

          if (data.query != null) {
            message.query = ResponseQuery.fromObject(data.query);
          }

          if (data.begin_block != null) {
            message.begin_block = ResponseBeginBlock.fromObject(data.begin_block);
          }

          if (data.check_tx != null) {
            message.check_tx = ResponseCheckTx.fromObject(data.check_tx);
          }

          if (data.deliver_tx != null) {
            message.deliver_tx = ResponseDeliverTx.fromObject(data.deliver_tx);
          }

          if (data.end_block != null) {
            message.end_block = ResponseEndBlock.fromObject(data.end_block);
          }

          if (data.commit != null) {
            message.commit = ResponseCommit.fromObject(data.commit);
          }

          if (data.list_snapshots != null) {
            message.list_snapshots = ResponseListSnapshots.fromObject(data.list_snapshots);
          }

          if (data.offer_snapshot != null) {
            message.offer_snapshot = ResponseOfferSnapshot.fromObject(data.offer_snapshot);
          }

          if (data.load_snapshot_chunk != null) {
            message.load_snapshot_chunk = ResponseLoadSnapshotChunk.fromObject(data.load_snapshot_chunk);
          }

          if (data.apply_snapshot_chunk != null) {
            message.apply_snapshot_chunk = ResponseApplySnapshotChunk.fromObject(data.apply_snapshot_chunk);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Response();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.exception, function () {
                  return message.exception = ResponseException.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.echo, function () {
                  return message.echo = ResponseEcho.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.flush, function () {
                  return message.flush = ResponseFlush.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.info, function () {
                  return message.info = ResponseInfo.deserialize(reader);
                });
                break;

              case 5:
                reader.readMessage(message.set_option, function () {
                  return message.set_option = ResponseSetOption.deserialize(reader);
                });
                break;

              case 6:
                reader.readMessage(message.init_chain, function () {
                  return message.init_chain = ResponseInitChain.deserialize(reader);
                });
                break;

              case 7:
                reader.readMessage(message.query, function () {
                  return message.query = ResponseQuery.deserialize(reader);
                });
                break;

              case 8:
                reader.readMessage(message.begin_block, function () {
                  return message.begin_block = ResponseBeginBlock.deserialize(reader);
                });
                break;

              case 9:
                reader.readMessage(message.check_tx, function () {
                  return message.check_tx = ResponseCheckTx.deserialize(reader);
                });
                break;

              case 10:
                reader.readMessage(message.deliver_tx, function () {
                  return message.deliver_tx = ResponseDeliverTx.deserialize(reader);
                });
                break;

              case 11:
                reader.readMessage(message.end_block, function () {
                  return message.end_block = ResponseEndBlock.deserialize(reader);
                });
                break;

              case 12:
                reader.readMessage(message.commit, function () {
                  return message.commit = ResponseCommit.deserialize(reader);
                });
                break;

              case 13:
                reader.readMessage(message.list_snapshots, function () {
                  return message.list_snapshots = ResponseListSnapshots.deserialize(reader);
                });
                break;

              case 14:
                reader.readMessage(message.offer_snapshot, function () {
                  return message.offer_snapshot = ResponseOfferSnapshot.deserialize(reader);
                });
                break;

              case 15:
                reader.readMessage(message.load_snapshot_chunk, function () {
                  return message.load_snapshot_chunk = ResponseLoadSnapshotChunk.deserialize(reader);
                });
                break;

              case 16:
                reader.readMessage(message.apply_snapshot_chunk, function () {
                  return message.apply_snapshot_chunk = ResponseApplySnapshotChunk.deserialize(reader);
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
          return Response.deserialize(bytes);
        }
      }]);
      return Response;
    }(pb_1.Message);

    _abci.Response = Response;

    var ResponseException = /*#__PURE__*/function (_pb_1$Message18) {
      (0, _inherits2["default"])(ResponseException, _pb_1$Message18);

      var _super18 = _createSuper(ResponseException);

      function ResponseException(data) {
        var _this23;

        (0, _classCallCheck2["default"])(this, ResponseException);
        _this23 = _super18.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("error" in data && data.error != undefined) {
            _this23.error = data.error;
          }
        }

        return _this23;
      }

      (0, _createClass2["default"])(ResponseException, [{
        key: "error",
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

          if (this.error != null) {
            data.error = this.error;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.error === "string" && this.error.length) writer.writeString(1, this.error);
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
          var message = new ResponseException({});

          if (data.error != null) {
            message.error = data.error;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseException();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.error = reader.readString();
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
          return ResponseException.deserialize(bytes);
        }
      }]);
      return ResponseException;
    }(pb_1.Message);

    _abci.ResponseException = ResponseException;

    var ResponseEcho = /*#__PURE__*/function (_pb_1$Message19) {
      (0, _inherits2["default"])(ResponseEcho, _pb_1$Message19);

      var _super19 = _createSuper(ResponseEcho);

      function ResponseEcho(data) {
        var _this24;

        (0, _classCallCheck2["default"])(this, ResponseEcho);
        _this24 = _super19.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("message" in data && data.message != undefined) {
            _this24.message = data.message;
          }
        }

        return _this24;
      }

      (0, _createClass2["default"])(ResponseEcho, [{
        key: "message",
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

          if (this.message != null) {
            data.message = this.message;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.message === "string" && this.message.length) writer.writeString(1, this.message);
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
          var message = new ResponseEcho({});

          if (data.message != null) {
            message.message = data.message;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseEcho();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.message = reader.readString();
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
          return ResponseEcho.deserialize(bytes);
        }
      }]);
      return ResponseEcho;
    }(pb_1.Message);

    _abci.ResponseEcho = ResponseEcho;

    var ResponseFlush = /*#__PURE__*/function (_pb_1$Message20) {
      (0, _inherits2["default"])(ResponseFlush, _pb_1$Message20);

      var _super20 = _createSuper(ResponseFlush);

      function ResponseFlush(data) {
        var _this25;

        (0, _classCallCheck2["default"])(this, ResponseFlush);
        _this25 = _super20.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {}

        return _this25;
      }

      (0, _createClass2["default"])(ResponseFlush, [{
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
          var message = new ResponseFlush({});
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseFlush();

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
          return ResponseFlush.deserialize(bytes);
        }
      }]);
      return ResponseFlush;
    }(pb_1.Message);

    _abci.ResponseFlush = ResponseFlush;

    var ResponseInfo = /*#__PURE__*/function (_pb_1$Message21) {
      (0, _inherits2["default"])(ResponseInfo, _pb_1$Message21);

      var _super21 = _createSuper(ResponseInfo);

      function ResponseInfo(data) {
        var _this26;

        (0, _classCallCheck2["default"])(this, ResponseInfo);
        _this26 = _super21.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("data" in data && data.data != undefined) {
            _this26.data = data.data;
          }

          if ("version" in data && data.version != undefined) {
            _this26.version = data.version;
          }

          if ("app_version" in data && data.app_version != undefined) {
            _this26.app_version = data.app_version;
          }

          if ("last_block_height" in data && data.last_block_height != undefined) {
            _this26.last_block_height = data.last_block_height;
          }

          if ("last_block_app_hash" in data && data.last_block_app_hash != undefined) {
            _this26.last_block_app_hash = data.last_block_app_hash;
          }
        }

        return _this26;
      }

      (0, _createClass2["default"])(ResponseInfo, [{
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "version",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "app_version",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "last_block_height",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "last_block_app_hash",
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

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.version != null) {
            data.version = this.version;
          }

          if (this.app_version != null) {
            data.app_version = this.app_version;
          }

          if (this.last_block_height != null) {
            data.last_block_height = this.last_block_height;
          }

          if (this.last_block_app_hash != null) {
            data.last_block_app_hash = this.last_block_app_hash;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.data === "string" && this.data.length) writer.writeString(1, this.data);
          if (typeof this.version === "string" && this.version.length) writer.writeString(2, this.version);
          if (this.app_version !== undefined) writer.writeUint64(3, this.app_version);
          if (this.last_block_height !== undefined) writer.writeInt64(4, this.last_block_height);
          if (this.last_block_app_hash !== undefined) writer.writeBytes(5, this.last_block_app_hash);
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
          var message = new ResponseInfo({});

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.version != null) {
            message.version = data.version;
          }

          if (data.app_version != null) {
            message.app_version = data.app_version;
          }

          if (data.last_block_height != null) {
            message.last_block_height = data.last_block_height;
          }

          if (data.last_block_app_hash != null) {
            message.last_block_app_hash = data.last_block_app_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.data = reader.readString();
                break;

              case 2:
                message.version = reader.readString();
                break;

              case 3:
                message.app_version = reader.readUint64();
                break;

              case 4:
                message.last_block_height = reader.readInt64();
                break;

              case 5:
                message.last_block_app_hash = reader.readBytes();
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
          return ResponseInfo.deserialize(bytes);
        }
      }]);
      return ResponseInfo;
    }(pb_1.Message);

    _abci.ResponseInfo = ResponseInfo;

    var ResponseSetOption = /*#__PURE__*/function (_pb_1$Message22) {
      (0, _inherits2["default"])(ResponseSetOption, _pb_1$Message22);

      var _super22 = _createSuper(ResponseSetOption);

      function ResponseSetOption(data) {
        var _this27;

        (0, _classCallCheck2["default"])(this, ResponseSetOption);
        _this27 = _super22.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("code" in data && data.code != undefined) {
            _this27.code = data.code;
          }

          if ("log" in data && data.log != undefined) {
            _this27.log = data.log;
          }

          if ("info" in data && data.info != undefined) {
            _this27.info = data.info;
          }
        }

        return _this27;
      }

      (0, _createClass2["default"])(ResponseSetOption, [{
        key: "code",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "log",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "info",
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

          if (this.code != null) {
            data.code = this.code;
          }

          if (this.log != null) {
            data.log = this.log;
          }

          if (this.info != null) {
            data.info = this.info;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.code !== undefined) writer.writeUint32(1, this.code);
          if (typeof this.log === "string" && this.log.length) writer.writeString(3, this.log);
          if (typeof this.info === "string" && this.info.length) writer.writeString(4, this.info);
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
          var message = new ResponseSetOption({});

          if (data.code != null) {
            message.code = data.code;
          }

          if (data.log != null) {
            message.log = data.log;
          }

          if (data.info != null) {
            message.info = data.info;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseSetOption();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.code = reader.readUint32();
                break;

              case 3:
                message.log = reader.readString();
                break;

              case 4:
                message.info = reader.readString();
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
          return ResponseSetOption.deserialize(bytes);
        }
      }]);
      return ResponseSetOption;
    }(pb_1.Message);

    _abci.ResponseSetOption = ResponseSetOption;

    var ResponseInitChain = /*#__PURE__*/function (_pb_1$Message23) {
      (0, _inherits2["default"])(ResponseInitChain, _pb_1$Message23);

      var _super23 = _createSuper(ResponseInitChain);

      function ResponseInitChain(data) {
        var _this28;

        (0, _classCallCheck2["default"])(this, ResponseInitChain);
        _this28 = _super23.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("consensus_params" in data && data.consensus_params != undefined) {
            _this28.consensus_params = data.consensus_params;
          }

          if ("validators" in data && data.validators != undefined) {
            _this28.validators = data.validators;
          }

          if ("app_hash" in data && data.app_hash != undefined) {
            _this28.app_hash = data.app_hash;
          }
        }

        return _this28;
      }

      (0, _createClass2["default"])(ResponseInitChain, [{
        key: "consensus_params",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ConsensusParams, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "validators",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, ValidatorUpdate, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "app_hash",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
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

          if (this.consensus_params != null) {
            data.consensus_params = this.consensus_params.toObject();
          }

          if (this.validators != null) {
            data.validators = this.validators.map(function (item) {
              return item.toObject();
            });
          }

          if (this.app_hash != null) {
            data.app_hash = this.app_hash;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this29 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.consensus_params !== undefined) writer.writeMessage(1, this.consensus_params, function () {
            return _this29.consensus_params.serialize(writer);
          });
          if (this.validators !== undefined) writer.writeRepeatedMessage(2, this.validators, function (item) {
            return item.serialize(writer);
          });
          if (this.app_hash !== undefined) writer.writeBytes(3, this.app_hash);
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
          var message = new ResponseInitChain({});

          if (data.consensus_params != null) {
            message.consensus_params = ConsensusParams.fromObject(data.consensus_params);
          }

          if (data.validators != null) {
            message.validators = data.validators.map(function (item) {
              return ValidatorUpdate.fromObject(item);
            });
          }

          if (data.app_hash != null) {
            message.app_hash = data.app_hash;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseInitChain();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.consensus_params, function () {
                  return message.consensus_params = ConsensusParams.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.validators, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, ValidatorUpdate.deserialize(reader), ValidatorUpdate);
                });
                break;

              case 3:
                message.app_hash = reader.readBytes();
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
          return ResponseInitChain.deserialize(bytes);
        }
      }]);
      return ResponseInitChain;
    }(pb_1.Message);

    _abci.ResponseInitChain = ResponseInitChain;

    var ResponseQuery = /*#__PURE__*/function (_pb_1$Message24) {
      (0, _inherits2["default"])(ResponseQuery, _pb_1$Message24);

      var _super24 = _createSuper(ResponseQuery);

      function ResponseQuery(data) {
        var _this30;

        (0, _classCallCheck2["default"])(this, ResponseQuery);
        _this30 = _super24.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this30), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("code" in data && data.code != undefined) {
            _this30.code = data.code;
          }

          if ("log" in data && data.log != undefined) {
            _this30.log = data.log;
          }

          if ("info" in data && data.info != undefined) {
            _this30.info = data.info;
          }

          if ("index" in data && data.index != undefined) {
            _this30.index = data.index;
          }

          if ("key" in data && data.key != undefined) {
            _this30.key = data.key;
          }

          if ("value" in data && data.value != undefined) {
            _this30.value = data.value;
          }

          if ("proof_ops" in data && data.proof_ops != undefined) {
            _this30.proof_ops = data.proof_ops;
          }

          if ("height" in data && data.height != undefined) {
            _this30.height = data.height;
          }

          if ("codespace" in data && data.codespace != undefined) {
            _this30.codespace = data.codespace;
          }
        }

        return _this30;
      }

      (0, _createClass2["default"])(ResponseQuery, [{
        key: "code",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "log",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "info",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "key",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "value",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "proof_ops",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_1.tendermint.crypto.ProofOps, 8);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 8, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 9);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 9, value);
        }
      }, {
        key: "codespace",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
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

          if (this.code != null) {
            data.code = this.code;
          }

          if (this.log != null) {
            data.log = this.log;
          }

          if (this.info != null) {
            data.info = this.info;
          }

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.key != null) {
            data.key = this.key;
          }

          if (this.value != null) {
            data.value = this.value;
          }

          if (this.proof_ops != null) {
            data.proof_ops = this.proof_ops.toObject();
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.codespace != null) {
            data.codespace = this.codespace;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this31 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.code !== undefined) writer.writeUint32(1, this.code);
          if (typeof this.log === "string" && this.log.length) writer.writeString(3, this.log);
          if (typeof this.info === "string" && this.info.length) writer.writeString(4, this.info);
          if (this.index !== undefined) writer.writeInt64(5, this.index);
          if (this.key !== undefined) writer.writeBytes(6, this.key);
          if (this.value !== undefined) writer.writeBytes(7, this.value);
          if (this.proof_ops !== undefined) writer.writeMessage(8, this.proof_ops, function () {
            return _this31.proof_ops.serialize(writer);
          });
          if (this.height !== undefined) writer.writeInt64(9, this.height);
          if (typeof this.codespace === "string" && this.codespace.length) writer.writeString(10, this.codespace);
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
          var message = new ResponseQuery({});

          if (data.code != null) {
            message.code = data.code;
          }

          if (data.log != null) {
            message.log = data.log;
          }

          if (data.info != null) {
            message.info = data.info;
          }

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.key != null) {
            message.key = data.key;
          }

          if (data.value != null) {
            message.value = data.value;
          }

          if (data.proof_ops != null) {
            message.proof_ops = dependency_1.tendermint.crypto.ProofOps.fromObject(data.proof_ops);
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.codespace != null) {
            message.codespace = data.codespace;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseQuery();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.code = reader.readUint32();
                break;

              case 3:
                message.log = reader.readString();
                break;

              case 4:
                message.info = reader.readString();
                break;

              case 5:
                message.index = reader.readInt64();
                break;

              case 6:
                message.key = reader.readBytes();
                break;

              case 7:
                message.value = reader.readBytes();
                break;

              case 8:
                reader.readMessage(message.proof_ops, function () {
                  return message.proof_ops = dependency_1.tendermint.crypto.ProofOps.deserialize(reader);
                });
                break;

              case 9:
                message.height = reader.readInt64();
                break;

              case 10:
                message.codespace = reader.readString();
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
          return ResponseQuery.deserialize(bytes);
        }
      }]);
      return ResponseQuery;
    }(pb_1.Message);

    _abci.ResponseQuery = ResponseQuery;

    var ResponseBeginBlock = /*#__PURE__*/function (_pb_1$Message25) {
      (0, _inherits2["default"])(ResponseBeginBlock, _pb_1$Message25);

      var _super25 = _createSuper(ResponseBeginBlock);

      function ResponseBeginBlock(data) {
        var _this32;

        (0, _classCallCheck2["default"])(this, ResponseBeginBlock);
        _this32 = _super25.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this32), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("events" in data && data.events != undefined) {
            _this32.events = data.events;
          }
        }

        return _this32;
      }

      (0, _createClass2["default"])(ResponseBeginBlock, [{
        key: "events",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Event, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

          if (this.events != null) {
            data.events = this.events.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.events !== undefined) writer.writeRepeatedMessage(1, this.events, function (item) {
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
          var message = new ResponseBeginBlock({});

          if (data.events != null) {
            message.events = data.events.map(function (item) {
              return Event.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseBeginBlock();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.events, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, Event.deserialize(reader), Event);
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
          return ResponseBeginBlock.deserialize(bytes);
        }
      }]);
      return ResponseBeginBlock;
    }(pb_1.Message);

    _abci.ResponseBeginBlock = ResponseBeginBlock;

    var ResponseCheckTx = /*#__PURE__*/function (_pb_1$Message26) {
      (0, _inherits2["default"])(ResponseCheckTx, _pb_1$Message26);

      var _super26 = _createSuper(ResponseCheckTx);

      function ResponseCheckTx(data) {
        var _this33;

        (0, _classCallCheck2["default"])(this, ResponseCheckTx);
        _this33 = _super26.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this33), Array.isArray(data) ? data : [], 0, -1, [7], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("code" in data && data.code != undefined) {
            _this33.code = data.code;
          }

          if ("data" in data && data.data != undefined) {
            _this33.data = data.data;
          }

          if ("log" in data && data.log != undefined) {
            _this33.log = data.log;
          }

          if ("info" in data && data.info != undefined) {
            _this33.info = data.info;
          }

          if ("gas_wanted" in data && data.gas_wanted != undefined) {
            _this33.gas_wanted = data.gas_wanted;
          }

          if ("gas_used" in data && data.gas_used != undefined) {
            _this33.gas_used = data.gas_used;
          }

          if ("events" in data && data.events != undefined) {
            _this33.events = data.events;
          }

          if ("codespace" in data && data.codespace != undefined) {
            _this33.codespace = data.codespace;
          }
        }

        return _this33;
      }

      (0, _createClass2["default"])(ResponseCheckTx, [{
        key: "code",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "log",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "info",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "gas_wanted",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "gas_used",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "events",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Event, 7);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
      }, {
        key: "codespace",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
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

          if (this.code != null) {
            data.code = this.code;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.log != null) {
            data.log = this.log;
          }

          if (this.info != null) {
            data.info = this.info;
          }

          if (this.gas_wanted != null) {
            data.gas_wanted = this.gas_wanted;
          }

          if (this.gas_used != null) {
            data.gas_used = this.gas_used;
          }

          if (this.events != null) {
            data.events = this.events.map(function (item) {
              return item.toObject();
            });
          }

          if (this.codespace != null) {
            data.codespace = this.codespace;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.code !== undefined) writer.writeUint32(1, this.code);
          if (this.data !== undefined) writer.writeBytes(2, this.data);
          if (typeof this.log === "string" && this.log.length) writer.writeString(3, this.log);
          if (typeof this.info === "string" && this.info.length) writer.writeString(4, this.info);
          if (this.gas_wanted !== undefined) writer.writeInt64(5, this.gas_wanted);
          if (this.gas_used !== undefined) writer.writeInt64(6, this.gas_used);
          if (this.events !== undefined) writer.writeRepeatedMessage(7, this.events, function (item) {
            return item.serialize(writer);
          });
          if (typeof this.codespace === "string" && this.codespace.length) writer.writeString(8, this.codespace);
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
          var message = new ResponseCheckTx({});

          if (data.code != null) {
            message.code = data.code;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.log != null) {
            message.log = data.log;
          }

          if (data.info != null) {
            message.info = data.info;
          }

          if (data.gas_wanted != null) {
            message.gas_wanted = data.gas_wanted;
          }

          if (data.gas_used != null) {
            message.gas_used = data.gas_used;
          }

          if (data.events != null) {
            message.events = data.events.map(function (item) {
              return Event.fromObject(item);
            });
          }

          if (data.codespace != null) {
            message.codespace = data.codespace;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseCheckTx();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.code = reader.readUint32();
                break;

              case 2:
                message.data = reader.readBytes();
                break;

              case 3:
                message.log = reader.readString();
                break;

              case 4:
                message.info = reader.readString();
                break;

              case 5:
                message.gas_wanted = reader.readInt64();
                break;

              case 6:
                message.gas_used = reader.readInt64();
                break;

              case 7:
                reader.readMessage(message.events, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 7, Event.deserialize(reader), Event);
                });
                break;

              case 8:
                message.codespace = reader.readString();
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
          return ResponseCheckTx.deserialize(bytes);
        }
      }]);
      return ResponseCheckTx;
    }(pb_1.Message);

    _abci.ResponseCheckTx = ResponseCheckTx;

    var ResponseDeliverTx = /*#__PURE__*/function (_pb_1$Message27) {
      (0, _inherits2["default"])(ResponseDeliverTx, _pb_1$Message27);

      var _super27 = _createSuper(ResponseDeliverTx);

      function ResponseDeliverTx(data) {
        var _this34;

        (0, _classCallCheck2["default"])(this, ResponseDeliverTx);
        _this34 = _super27.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this34), Array.isArray(data) ? data : [], 0, -1, [7], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("code" in data && data.code != undefined) {
            _this34.code = data.code;
          }

          if ("data" in data && data.data != undefined) {
            _this34.data = data.data;
          }

          if ("log" in data && data.log != undefined) {
            _this34.log = data.log;
          }

          if ("info" in data && data.info != undefined) {
            _this34.info = data.info;
          }

          if ("gas_wanted" in data && data.gas_wanted != undefined) {
            _this34.gas_wanted = data.gas_wanted;
          }

          if ("gas_used" in data && data.gas_used != undefined) {
            _this34.gas_used = data.gas_used;
          }

          if ("events" in data && data.events != undefined) {
            _this34.events = data.events;
          }

          if ("codespace" in data && data.codespace != undefined) {
            _this34.codespace = data.codespace;
          }
        }

        return _this34;
      }

      (0, _createClass2["default"])(ResponseDeliverTx, [{
        key: "code",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "log",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "info",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "gas_wanted",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "gas_used",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "events",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Event, 7);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
      }, {
        key: "codespace",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
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

          if (this.code != null) {
            data.code = this.code;
          }

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.log != null) {
            data.log = this.log;
          }

          if (this.info != null) {
            data.info = this.info;
          }

          if (this.gas_wanted != null) {
            data.gas_wanted = this.gas_wanted;
          }

          if (this.gas_used != null) {
            data.gas_used = this.gas_used;
          }

          if (this.events != null) {
            data.events = this.events.map(function (item) {
              return item.toObject();
            });
          }

          if (this.codespace != null) {
            data.codespace = this.codespace;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.code !== undefined) writer.writeUint32(1, this.code);
          if (this.data !== undefined) writer.writeBytes(2, this.data);
          if (typeof this.log === "string" && this.log.length) writer.writeString(3, this.log);
          if (typeof this.info === "string" && this.info.length) writer.writeString(4, this.info);
          if (this.gas_wanted !== undefined) writer.writeInt64(5, this.gas_wanted);
          if (this.gas_used !== undefined) writer.writeInt64(6, this.gas_used);
          if (this.events !== undefined) writer.writeRepeatedMessage(7, this.events, function (item) {
            return item.serialize(writer);
          });
          if (typeof this.codespace === "string" && this.codespace.length) writer.writeString(8, this.codespace);
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
          var message = new ResponseDeliverTx({});

          if (data.code != null) {
            message.code = data.code;
          }

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.log != null) {
            message.log = data.log;
          }

          if (data.info != null) {
            message.info = data.info;
          }

          if (data.gas_wanted != null) {
            message.gas_wanted = data.gas_wanted;
          }

          if (data.gas_used != null) {
            message.gas_used = data.gas_used;
          }

          if (data.events != null) {
            message.events = data.events.map(function (item) {
              return Event.fromObject(item);
            });
          }

          if (data.codespace != null) {
            message.codespace = data.codespace;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseDeliverTx();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.code = reader.readUint32();
                break;

              case 2:
                message.data = reader.readBytes();
                break;

              case 3:
                message.log = reader.readString();
                break;

              case 4:
                message.info = reader.readString();
                break;

              case 5:
                message.gas_wanted = reader.readInt64();
                break;

              case 6:
                message.gas_used = reader.readInt64();
                break;

              case 7:
                reader.readMessage(message.events, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 7, Event.deserialize(reader), Event);
                });
                break;

              case 8:
                message.codespace = reader.readString();
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
          return ResponseDeliverTx.deserialize(bytes);
        }
      }]);
      return ResponseDeliverTx;
    }(pb_1.Message);

    _abci.ResponseDeliverTx = ResponseDeliverTx;

    var ResponseEndBlock = /*#__PURE__*/function (_pb_1$Message28) {
      (0, _inherits2["default"])(ResponseEndBlock, _pb_1$Message28);

      var _super28 = _createSuper(ResponseEndBlock);

      function ResponseEndBlock(data) {
        var _this35;

        (0, _classCallCheck2["default"])(this, ResponseEndBlock);
        _this35 = _super28.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this35), Array.isArray(data) ? data : [], 0, -1, [1, 3], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("validator_updates" in data && data.validator_updates != undefined) {
            _this35.validator_updates = data.validator_updates;
          }

          if ("consensus_param_updates" in data && data.consensus_param_updates != undefined) {
            _this35.consensus_param_updates = data.consensus_param_updates;
          }

          if ("events" in data && data.events != undefined) {
            _this35.events = data.events;
          }
        }

        return _this35;
      }

      (0, _createClass2["default"])(ResponseEndBlock, [{
        key: "validator_updates",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, ValidatorUpdate, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "consensus_param_updates",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ConsensusParams, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "events",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Event, 3);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 3, value);
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

          if (this.validator_updates != null) {
            data.validator_updates = this.validator_updates.map(function (item) {
              return item.toObject();
            });
          }

          if (this.consensus_param_updates != null) {
            data.consensus_param_updates = this.consensus_param_updates.toObject();
          }

          if (this.events != null) {
            data.events = this.events.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this36 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.validator_updates !== undefined) writer.writeRepeatedMessage(1, this.validator_updates, function (item) {
            return item.serialize(writer);
          });
          if (this.consensus_param_updates !== undefined) writer.writeMessage(2, this.consensus_param_updates, function () {
            return _this36.consensus_param_updates.serialize(writer);
          });
          if (this.events !== undefined) writer.writeRepeatedMessage(3, this.events, function (item) {
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
          var message = new ResponseEndBlock({});

          if (data.validator_updates != null) {
            message.validator_updates = data.validator_updates.map(function (item) {
              return ValidatorUpdate.fromObject(item);
            });
          }

          if (data.consensus_param_updates != null) {
            message.consensus_param_updates = ConsensusParams.fromObject(data.consensus_param_updates);
          }

          if (data.events != null) {
            message.events = data.events.map(function (item) {
              return Event.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseEndBlock();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.validator_updates, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, ValidatorUpdate.deserialize(reader), ValidatorUpdate);
                });
                break;

              case 2:
                reader.readMessage(message.consensus_param_updates, function () {
                  return message.consensus_param_updates = ConsensusParams.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.events, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 3, Event.deserialize(reader), Event);
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
          return ResponseEndBlock.deserialize(bytes);
        }
      }]);
      return ResponseEndBlock;
    }(pb_1.Message);

    _abci.ResponseEndBlock = ResponseEndBlock;

    var ResponseCommit = /*#__PURE__*/function (_pb_1$Message29) {
      (0, _inherits2["default"])(ResponseCommit, _pb_1$Message29);

      var _super29 = _createSuper(ResponseCommit);

      function ResponseCommit(data) {
        var _this37;

        (0, _classCallCheck2["default"])(this, ResponseCommit);
        _this37 = _super29.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this37), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("data" in data && data.data != undefined) {
            _this37.data = data.data;
          }

          if ("retain_height" in data && data.retain_height != undefined) {
            _this37.retain_height = data.retain_height;
          }
        }

        return _this37;
      }

      (0, _createClass2["default"])(ResponseCommit, [{
        key: "data",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "retain_height",
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

          if (this.data != null) {
            data.data = this.data;
          }

          if (this.retain_height != null) {
            data.retain_height = this.retain_height;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.data !== undefined) writer.writeBytes(2, this.data);
          if (this.retain_height !== undefined) writer.writeInt64(3, this.retain_height);
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
          var message = new ResponseCommit({});

          if (data.data != null) {
            message.data = data.data;
          }

          if (data.retain_height != null) {
            message.retain_height = data.retain_height;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseCommit();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 2:
                message.data = reader.readBytes();
                break;

              case 3:
                message.retain_height = reader.readInt64();
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
          return ResponseCommit.deserialize(bytes);
        }
      }]);
      return ResponseCommit;
    }(pb_1.Message);

    _abci.ResponseCommit = ResponseCommit;

    var ResponseListSnapshots = /*#__PURE__*/function (_pb_1$Message30) {
      (0, _inherits2["default"])(ResponseListSnapshots, _pb_1$Message30);

      var _super30 = _createSuper(ResponseListSnapshots);

      function ResponseListSnapshots(data) {
        var _this38;

        (0, _classCallCheck2["default"])(this, ResponseListSnapshots);
        _this38 = _super30.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this38), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("snapshots" in data && data.snapshots != undefined) {
            _this38.snapshots = data.snapshots;
          }
        }

        return _this38;
      }

      (0, _createClass2["default"])(ResponseListSnapshots, [{
        key: "snapshots",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, Snapshot, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

          if (this.snapshots != null) {
            data.snapshots = this.snapshots.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.snapshots !== undefined) writer.writeRepeatedMessage(1, this.snapshots, function (item) {
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
          var message = new ResponseListSnapshots({});

          if (data.snapshots != null) {
            message.snapshots = data.snapshots.map(function (item) {
              return Snapshot.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseListSnapshots();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.snapshots, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, Snapshot.deserialize(reader), Snapshot);
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
          return ResponseListSnapshots.deserialize(bytes);
        }
      }]);
      return ResponseListSnapshots;
    }(pb_1.Message);

    _abci.ResponseListSnapshots = ResponseListSnapshots;

    var ResponseOfferSnapshot = /*#__PURE__*/function (_pb_1$Message31) {
      (0, _inherits2["default"])(ResponseOfferSnapshot, _pb_1$Message31);

      var _super31 = _createSuper(ResponseOfferSnapshot);

      function ResponseOfferSnapshot(data) {
        var _this39;

        (0, _classCallCheck2["default"])(this, ResponseOfferSnapshot);
        _this39 = _super31.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this39), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("result" in data && data.result != undefined) {
            _this39.result = data.result;
          }
        }

        return _this39;
      }

      (0, _createClass2["default"])(ResponseOfferSnapshot, [{
        key: "result",
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

          if (this.result != null) {
            data.result = this.result;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.result !== undefined) writer.writeEnum(1, this.result);
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
          var message = new ResponseOfferSnapshot({});

          if (data.result != null) {
            message.result = data.result;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseOfferSnapshot();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.result = reader.readEnum();
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
          return ResponseOfferSnapshot.deserialize(bytes);
        }
      }]);
      return ResponseOfferSnapshot;
    }(pb_1.Message);

    _abci.ResponseOfferSnapshot = ResponseOfferSnapshot;

    (function (_ResponseOfferSnapshot) {
      var Result;

      (function (Result) {
        Result[Result["UNKNOWN"] = 0] = "UNKNOWN";
        Result[Result["ACCEPT"] = 1] = "ACCEPT";
        Result[Result["ABORT"] = 2] = "ABORT";
        Result[Result["REJECT"] = 3] = "REJECT";
        Result[Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
        Result[Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
      })(Result || (Result = {}));

      _ResponseOfferSnapshot.Result = Result;
    })(ResponseOfferSnapshot || (ResponseOfferSnapshot = _abci.ResponseOfferSnapshot || (_abci.ResponseOfferSnapshot = {})));

    var ResponseLoadSnapshotChunk = /*#__PURE__*/function (_pb_1$Message32) {
      (0, _inherits2["default"])(ResponseLoadSnapshotChunk, _pb_1$Message32);

      var _super32 = _createSuper(ResponseLoadSnapshotChunk);

      function ResponseLoadSnapshotChunk(data) {
        var _this40;

        (0, _classCallCheck2["default"])(this, ResponseLoadSnapshotChunk);
        _this40 = _super32.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this40), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("chunk" in data && data.chunk != undefined) {
            _this40.chunk = data.chunk;
          }
        }

        return _this40;
      }

      (0, _createClass2["default"])(ResponseLoadSnapshotChunk, [{
        key: "chunk",
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

          if (this.chunk != null) {
            data.chunk = this.chunk;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.chunk !== undefined) writer.writeBytes(1, this.chunk);
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
          var message = new ResponseLoadSnapshotChunk({});

          if (data.chunk != null) {
            message.chunk = data.chunk;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseLoadSnapshotChunk();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.chunk = reader.readBytes();
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
          return ResponseLoadSnapshotChunk.deserialize(bytes);
        }
      }]);
      return ResponseLoadSnapshotChunk;
    }(pb_1.Message);

    _abci.ResponseLoadSnapshotChunk = ResponseLoadSnapshotChunk;

    var ResponseApplySnapshotChunk = /*#__PURE__*/function (_pb_1$Message33) {
      (0, _inherits2["default"])(ResponseApplySnapshotChunk, _pb_1$Message33);

      var _super33 = _createSuper(ResponseApplySnapshotChunk);

      function ResponseApplySnapshotChunk(data) {
        var _this41;

        (0, _classCallCheck2["default"])(this, ResponseApplySnapshotChunk);
        _this41 = _super33.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this41), Array.isArray(data) ? data : [], 0, -1, [2, 3], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("result" in data && data.result != undefined) {
            _this41.result = data.result;
          }

          if ("refetch_chunks" in data && data.refetch_chunks != undefined) {
            _this41.refetch_chunks = data.refetch_chunks;
          }

          if ("reject_senders" in data && data.reject_senders != undefined) {
            _this41.reject_senders = data.reject_senders;
          }
        }

        return _this41;
      }

      (0, _createClass2["default"])(ResponseApplySnapshotChunk, [{
        key: "result",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "refetch_chunks",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "reject_senders",
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

          if (this.result != null) {
            data.result = this.result;
          }

          if (this.refetch_chunks != null) {
            data.refetch_chunks = this.refetch_chunks;
          }

          if (this.reject_senders != null) {
            data.reject_senders = this.reject_senders;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.result !== undefined) writer.writeEnum(1, this.result);
          if (this.refetch_chunks !== undefined) writer.writePackedUint32(2, this.refetch_chunks);
          if (this.reject_senders !== undefined) writer.writeRepeatedString(3, this.reject_senders);
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
          var message = new ResponseApplySnapshotChunk({});

          if (data.result != null) {
            message.result = data.result;
          }

          if (data.refetch_chunks != null) {
            message.refetch_chunks = data.refetch_chunks;
          }

          if (data.reject_senders != null) {
            message.reject_senders = data.reject_senders;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ResponseApplySnapshotChunk();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.result = reader.readEnum();
                break;

              case 2:
                message.refetch_chunks = reader.readPackedUint32();
                break;

              case 3:
                pb_1.Message.addToRepeatedField(message, 3, reader.readString());
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
          return ResponseApplySnapshotChunk.deserialize(bytes);
        }
      }]);
      return ResponseApplySnapshotChunk;
    }(pb_1.Message);

    _abci.ResponseApplySnapshotChunk = ResponseApplySnapshotChunk;

    (function (_ResponseApplySnapshotChunk) {
      var Result;

      (function (Result) {
        Result[Result["UNKNOWN"] = 0] = "UNKNOWN";
        Result[Result["ACCEPT"] = 1] = "ACCEPT";
        Result[Result["ABORT"] = 2] = "ABORT";
        Result[Result["RETRY"] = 3] = "RETRY";
        Result[Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
        Result[Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
      })(Result || (Result = {}));

      _ResponseApplySnapshotChunk.Result = Result;
    })(ResponseApplySnapshotChunk || (ResponseApplySnapshotChunk = _abci.ResponseApplySnapshotChunk || (_abci.ResponseApplySnapshotChunk = {})));

    var ConsensusParams = /*#__PURE__*/function (_pb_1$Message34) {
      (0, _inherits2["default"])(ConsensusParams, _pb_1$Message34);

      var _super34 = _createSuper(ConsensusParams);

      function ConsensusParams(data) {
        var _this42;

        (0, _classCallCheck2["default"])(this, ConsensusParams);
        _this42 = _super34.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this42), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("block" in data && data.block != undefined) {
            _this42.block = data.block;
          }

          if ("evidence" in data && data.evidence != undefined) {
            _this42.evidence = data.evidence;
          }

          if ("validator" in data && data.validator != undefined) {
            _this42.validator = data.validator;
          }

          if ("version" in data && data.version != undefined) {
            _this42.version = data.version;
          }
        }

        return _this42;
      }

      (0, _createClass2["default"])(ConsensusParams, [{
        key: "block",
        get: function get() {
          return pb_1.Message.getWrapperField(this, BlockParams, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "evidence",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.tendermint.types.EvidenceParams, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "validator",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.tendermint.types.ValidatorParams, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "version",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_4.tendermint.types.VersionParams, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
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

          if (this.block != null) {
            data.block = this.block.toObject();
          }

          if (this.evidence != null) {
            data.evidence = this.evidence.toObject();
          }

          if (this.validator != null) {
            data.validator = this.validator.toObject();
          }

          if (this.version != null) {
            data.version = this.version.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this43 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.block !== undefined) writer.writeMessage(1, this.block, function () {
            return _this43.block.serialize(writer);
          });
          if (this.evidence !== undefined) writer.writeMessage(2, this.evidence, function () {
            return _this43.evidence.serialize(writer);
          });
          if (this.validator !== undefined) writer.writeMessage(3, this.validator, function () {
            return _this43.validator.serialize(writer);
          });
          if (this.version !== undefined) writer.writeMessage(4, this.version, function () {
            return _this43.version.serialize(writer);
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
          var message = new ConsensusParams({});

          if (data.block != null) {
            message.block = BlockParams.fromObject(data.block);
          }

          if (data.evidence != null) {
            message.evidence = dependency_4.tendermint.types.EvidenceParams.fromObject(data.evidence);
          }

          if (data.validator != null) {
            message.validator = dependency_4.tendermint.types.ValidatorParams.fromObject(data.validator);
          }

          if (data.version != null) {
            message.version = dependency_4.tendermint.types.VersionParams.fromObject(data.version);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ConsensusParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.block, function () {
                  return message.block = BlockParams.deserialize(reader);
                });
                break;

              case 2:
                reader.readMessage(message.evidence, function () {
                  return message.evidence = dependency_4.tendermint.types.EvidenceParams.deserialize(reader);
                });
                break;

              case 3:
                reader.readMessage(message.validator, function () {
                  return message.validator = dependency_4.tendermint.types.ValidatorParams.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.version, function () {
                  return message.version = dependency_4.tendermint.types.VersionParams.deserialize(reader);
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
          return ConsensusParams.deserialize(bytes);
        }
      }]);
      return ConsensusParams;
    }(pb_1.Message);

    _abci.ConsensusParams = ConsensusParams;

    var BlockParams = /*#__PURE__*/function (_pb_1$Message35) {
      (0, _inherits2["default"])(BlockParams, _pb_1$Message35);

      var _super35 = _createSuper(BlockParams);

      function BlockParams(data) {
        var _this44;

        (0, _classCallCheck2["default"])(this, BlockParams);
        _this44 = _super35.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this44), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("max_bytes" in data && data.max_bytes != undefined) {
            _this44.max_bytes = data.max_bytes;
          }

          if ("max_gas" in data && data.max_gas != undefined) {
            _this44.max_gas = data.max_gas;
          }
        }

        return _this44;
      }

      (0, _createClass2["default"])(BlockParams, [{
        key: "max_bytes",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "max_gas",
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

          if (this.max_bytes != null) {
            data.max_bytes = this.max_bytes;
          }

          if (this.max_gas != null) {
            data.max_gas = this.max_gas;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.max_bytes !== undefined) writer.writeInt64(1, this.max_bytes);
          if (this.max_gas !== undefined) writer.writeInt64(2, this.max_gas);
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
          var message = new BlockParams({});

          if (data.max_bytes != null) {
            message.max_bytes = data.max_bytes;
          }

          if (data.max_gas != null) {
            message.max_gas = data.max_gas;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new BlockParams();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.max_bytes = reader.readInt64();
                break;

              case 2:
                message.max_gas = reader.readInt64();
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
          return BlockParams.deserialize(bytes);
        }
      }]);
      return BlockParams;
    }(pb_1.Message);

    _abci.BlockParams = BlockParams;

    var LastCommitInfo = /*#__PURE__*/function (_pb_1$Message36) {
      (0, _inherits2["default"])(LastCommitInfo, _pb_1$Message36);

      var _super36 = _createSuper(LastCommitInfo);

      function LastCommitInfo(data) {
        var _this45;

        (0, _classCallCheck2["default"])(this, LastCommitInfo);
        _this45 = _super36.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this45), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("round" in data && data.round != undefined) {
            _this45.round = data.round;
          }

          if ("votes" in data && data.votes != undefined) {
            _this45.votes = data.votes;
          }
        }

        return _this45;
      }

      (0, _createClass2["default"])(LastCommitInfo, [{
        key: "round",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "votes",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, VoteInfo, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject14) {
          function toObject() {
            return _toObject14.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject14.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.round != null) {
            data.round = this.round;
          }

          if (this.votes != null) {
            data.votes = this.votes.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.round !== undefined) writer.writeInt32(1, this.round);
          if (this.votes !== undefined) writer.writeRepeatedMessage(2, this.votes, function (item) {
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
          var message = new LastCommitInfo({});

          if (data.round != null) {
            message.round = data.round;
          }

          if (data.votes != null) {
            message.votes = data.votes.map(function (item) {
              return VoteInfo.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new LastCommitInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.round = reader.readInt32();
                break;

              case 2:
                reader.readMessage(message.votes, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, VoteInfo.deserialize(reader), VoteInfo);
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
          return LastCommitInfo.deserialize(bytes);
        }
      }]);
      return LastCommitInfo;
    }(pb_1.Message);

    _abci.LastCommitInfo = LastCommitInfo;

    var Event = /*#__PURE__*/function (_pb_1$Message37) {
      (0, _inherits2["default"])(Event, _pb_1$Message37);

      var _super37 = _createSuper(Event);

      function Event(data) {
        var _this46;

        (0, _classCallCheck2["default"])(this, Event);
        _this46 = _super37.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this46), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("type" in data && data.type != undefined) {
            _this46.type = data.type;
          }

          if ("attributes" in data && data.attributes != undefined) {
            _this46.attributes = data.attributes;
          }
        }

        return _this46;
      }

      (0, _createClass2["default"])(Event, [{
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "attributes",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, EventAttribute, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject15) {
          function toObject() {
            return _toObject15.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject15.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.attributes != null) {
            data.attributes = this.attributes.map(function (item) {
              return item.toObject();
            });
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.type === "string" && this.type.length) writer.writeString(1, this.type);
          if (this.attributes !== undefined) writer.writeRepeatedMessage(2, this.attributes, function (item) {
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
          var message = new Event({});

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.attributes != null) {
            message.attributes = data.attributes.map(function (item) {
              return EventAttribute.fromObject(item);
            });
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Event();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.type = reader.readString();
                break;

              case 2:
                reader.readMessage(message.attributes, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, EventAttribute.deserialize(reader), EventAttribute);
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
          return Event.deserialize(bytes);
        }
      }]);
      return Event;
    }(pb_1.Message);

    _abci.Event = Event;

    var EventAttribute = /*#__PURE__*/function (_pb_1$Message38) {
      (0, _inherits2["default"])(EventAttribute, _pb_1$Message38);

      var _super38 = _createSuper(EventAttribute);

      function EventAttribute(data) {
        var _this47;

        (0, _classCallCheck2["default"])(this, EventAttribute);
        _this47 = _super38.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this47), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("key" in data && data.key != undefined) {
            _this47.key = data.key;
          }

          if ("value" in data && data.value != undefined) {
            _this47.value = data.value;
          }

          if ("index" in data && data.index != undefined) {
            _this47.index = data.index;
          }
        }

        return _this47;
      }

      (0, _createClass2["default"])(EventAttribute, [{
        key: "key",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "value",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "index",
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

          if (this.key != null) {
            data.key = this.key;
          }

          if (this.value != null) {
            data.value = this.value;
          }

          if (this.index != null) {
            data.index = this.index;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.key !== undefined) writer.writeBytes(1, this.key);
          if (this.value !== undefined) writer.writeBytes(2, this.value);
          if (this.index !== undefined) writer.writeBool(3, this.index);
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
          var message = new EventAttribute({});

          if (data.key != null) {
            message.key = data.key;
          }

          if (data.value != null) {
            message.value = data.value;
          }

          if (data.index != null) {
            message.index = data.index;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EventAttribute();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.key = reader.readBytes();
                break;

              case 2:
                message.value = reader.readBytes();
                break;

              case 3:
                message.index = reader.readBool();
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
          return EventAttribute.deserialize(bytes);
        }
      }]);
      return EventAttribute;
    }(pb_1.Message);

    _abci.EventAttribute = EventAttribute;

    var TxResult = /*#__PURE__*/function (_pb_1$Message39) {
      (0, _inherits2["default"])(TxResult, _pb_1$Message39);

      var _super39 = _createSuper(TxResult);

      function TxResult(data) {
        var _this48;

        (0, _classCallCheck2["default"])(this, TxResult);
        _this48 = _super39.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this48), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("height" in data && data.height != undefined) {
            _this48.height = data.height;
          }

          if ("index" in data && data.index != undefined) {
            _this48.index = data.index;
          }

          if ("tx" in data && data.tx != undefined) {
            _this48.tx = data.tx;
          }

          if ("result" in data && data.result != undefined) {
            _this48.result = data.result;
          }
        }

        return _this48;
      }

      (0, _createClass2["default"])(TxResult, [{
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "index",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "tx",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "result",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ResponseDeliverTx, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject16) {
          function toObject() {
            return _toObject16.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject16.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.index != null) {
            data.index = this.index;
          }

          if (this.tx != null) {
            data.tx = this.tx;
          }

          if (this.result != null) {
            data.result = this.result.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this49 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.height !== undefined) writer.writeInt64(1, this.height);
          if (this.index !== undefined) writer.writeUint32(2, this.index);
          if (this.tx !== undefined) writer.writeBytes(3, this.tx);
          if (this.result !== undefined) writer.writeMessage(4, this.result, function () {
            return _this49.result.serialize(writer);
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
          var message = new TxResult({});

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.index != null) {
            message.index = data.index;
          }

          if (data.tx != null) {
            message.tx = data.tx;
          }

          if (data.result != null) {
            message.result = ResponseDeliverTx.fromObject(data.result);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new TxResult();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.height = reader.readInt64();
                break;

              case 2:
                message.index = reader.readUint32();
                break;

              case 3:
                message.tx = reader.readBytes();
                break;

              case 4:
                reader.readMessage(message.result, function () {
                  return message.result = ResponseDeliverTx.deserialize(reader);
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
          return TxResult.deserialize(bytes);
        }
      }]);
      return TxResult;
    }(pb_1.Message);

    _abci.TxResult = TxResult;

    var Validator = /*#__PURE__*/function (_pb_1$Message40) {
      (0, _inherits2["default"])(Validator, _pb_1$Message40);

      var _super40 = _createSuper(Validator);

      function Validator(data) {
        var _this50;

        (0, _classCallCheck2["default"])(this, Validator);
        _this50 = _super40.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this50), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("address" in data && data.address != undefined) {
            _this50.address = data.address;
          }

          if ("power" in data && data.power != undefined) {
            _this50.power = data.power;
          }
        }

        return _this50;
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
        key: "power",
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

          if (this.address != null) {
            data.address = this.address;
          }

          if (this.power != null) {
            data.power = this.power;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.address !== undefined) writer.writeBytes(1, this.address);
          if (this.power !== undefined) writer.writeInt64(3, this.power);
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

          if (data.power != null) {
            message.power = data.power;
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

              case 3:
                message.power = reader.readInt64();
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

    _abci.Validator = Validator;

    var ValidatorUpdate = /*#__PURE__*/function (_pb_1$Message41) {
      (0, _inherits2["default"])(ValidatorUpdate, _pb_1$Message41);

      var _super41 = _createSuper(ValidatorUpdate);

      function ValidatorUpdate(data) {
        var _this51;

        (0, _classCallCheck2["default"])(this, ValidatorUpdate);
        _this51 = _super41.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this51), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("pub_key" in data && data.pub_key != undefined) {
            _this51.pub_key = data.pub_key;
          }

          if ("power" in data && data.power != undefined) {
            _this51.power = data.power;
          }
        }

        return _this51;
      }

      (0, _createClass2["default"])(ValidatorUpdate, [{
        key: "pub_key",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_3.tendermint.crypto.PublicKey, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "power",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject17) {
          function toObject() {
            return _toObject17.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject17.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.pub_key != null) {
            data.pub_key = this.pub_key.toObject();
          }

          if (this.power != null) {
            data.power = this.power;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this52 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.pub_key !== undefined) writer.writeMessage(1, this.pub_key, function () {
            return _this52.pub_key.serialize(writer);
          });
          if (this.power !== undefined) writer.writeInt64(2, this.power);
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
          var message = new ValidatorUpdate({});

          if (data.pub_key != null) {
            message.pub_key = dependency_3.tendermint.crypto.PublicKey.fromObject(data.pub_key);
          }

          if (data.power != null) {
            message.power = data.power;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ValidatorUpdate();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.pub_key, function () {
                  return message.pub_key = dependency_3.tendermint.crypto.PublicKey.deserialize(reader);
                });
                break;

              case 2:
                message.power = reader.readInt64();
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
          return ValidatorUpdate.deserialize(bytes);
        }
      }]);
      return ValidatorUpdate;
    }(pb_1.Message);

    _abci.ValidatorUpdate = ValidatorUpdate;

    var VoteInfo = /*#__PURE__*/function (_pb_1$Message42) {
      (0, _inherits2["default"])(VoteInfo, _pb_1$Message42);

      var _super42 = _createSuper(VoteInfo);

      function VoteInfo(data) {
        var _this53;

        (0, _classCallCheck2["default"])(this, VoteInfo);
        _this53 = _super42.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this53), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("validator" in data && data.validator != undefined) {
            _this53.validator = data.validator;
          }

          if ("signed_last_block" in data && data.signed_last_block != undefined) {
            _this53.signed_last_block = data.signed_last_block;
          }
        }

        return _this53;
      }

      (0, _createClass2["default"])(VoteInfo, [{
        key: "validator",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Validator, 1);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 1, value);
        }
      }, {
        key: "signed_last_block",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject18) {
          function toObject() {
            return _toObject18.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject18.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.validator != null) {
            data.validator = this.validator.toObject();
          }

          if (this.signed_last_block != null) {
            data.signed_last_block = this.signed_last_block;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this54 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.validator !== undefined) writer.writeMessage(1, this.validator, function () {
            return _this54.validator.serialize(writer);
          });
          if (this.signed_last_block !== undefined) writer.writeBool(2, this.signed_last_block);
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
          var message = new VoteInfo({});

          if (data.validator != null) {
            message.validator = Validator.fromObject(data.validator);
          }

          if (data.signed_last_block != null) {
            message.signed_last_block = data.signed_last_block;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new VoteInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.validator, function () {
                  return message.validator = Validator.deserialize(reader);
                });
                break;

              case 2:
                message.signed_last_block = reader.readBool();
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
          return VoteInfo.deserialize(bytes);
        }
      }]);
      return VoteInfo;
    }(pb_1.Message);

    _abci.VoteInfo = VoteInfo;

    var Evidence = /*#__PURE__*/function (_pb_1$Message43) {
      (0, _inherits2["default"])(Evidence, _pb_1$Message43);

      var _super43 = _createSuper(Evidence);

      function Evidence(data) {
        var _this55;

        (0, _classCallCheck2["default"])(this, Evidence);
        _this55 = _super43.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this55), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("type" in data && data.type != undefined) {
            _this55.type = data.type;
          }

          if ("validator" in data && data.validator != undefined) {
            _this55.validator = data.validator;
          }

          if ("height" in data && data.height != undefined) {
            _this55.height = data.height;
          }

          if ("time" in data && data.time != undefined) {
            _this55.time = data.time;
          }

          if ("total_voting_power" in data && data.total_voting_power != undefined) {
            _this55.total_voting_power = data.total_voting_power;
          }
        }

        return _this55;
      }

      (0, _createClass2["default"])(Evidence, [{
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "validator",
        get: function get() {
          return pb_1.Message.getWrapperField(this, Validator, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
        }
      }, {
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "time",
        get: function get() {
          return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
        }
      }, {
        key: "total_voting_power",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject19) {
          function toObject() {
            return _toObject19.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject19.toString();
          };

          return toObject;
        }(function () {
          var data = {};

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.validator != null) {
            data.validator = this.validator.toObject();
          }

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.time != null) {
            data.time = this.time.toObject();
          }

          if (this.total_voting_power != null) {
            data.total_voting_power = this.total_voting_power;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this56 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (this.type !== undefined) writer.writeEnum(1, this.type);
          if (this.validator !== undefined) writer.writeMessage(2, this.validator, function () {
            return _this56.validator.serialize(writer);
          });
          if (this.height !== undefined) writer.writeInt64(3, this.height);
          if (this.time !== undefined) writer.writeMessage(4, this.time, function () {
            return _this56.time.serialize(writer);
          });
          if (this.total_voting_power !== undefined) writer.writeInt64(5, this.total_voting_power);
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
          var message = new Evidence({});

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.validator != null) {
            message.validator = Validator.fromObject(data.validator);
          }

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.time != null) {
            message.time = dependency_5.google.protobuf.Timestamp.fromObject(data.time);
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
              message = new Evidence();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.type = reader.readEnum();
                break;

              case 2:
                reader.readMessage(message.validator, function () {
                  return message.validator = Validator.deserialize(reader);
                });
                break;

              case 3:
                message.height = reader.readInt64();
                break;

              case 4:
                reader.readMessage(message.time, function () {
                  return message.time = dependency_5.google.protobuf.Timestamp.deserialize(reader);
                });
                break;

              case 5:
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
          return Evidence.deserialize(bytes);
        }
      }]);
      return Evidence;
    }(pb_1.Message);

    _abci.Evidence = Evidence;

    var Snapshot = /*#__PURE__*/function (_pb_1$Message44) {
      (0, _inherits2["default"])(Snapshot, _pb_1$Message44);

      var _super44 = _createSuper(Snapshot);

      function Snapshot(data) {
        var _this57;

        (0, _classCallCheck2["default"])(this, Snapshot);
        _this57 = _super44.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this57), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("height" in data && data.height != undefined) {
            _this57.height = data.height;
          }

          if ("format" in data && data.format != undefined) {
            _this57.format = data.format;
          }

          if ("chunks" in data && data.chunks != undefined) {
            _this57.chunks = data.chunks;
          }

          if ("hash" in data && data.hash != undefined) {
            _this57.hash = data.hash;
          }

          if ("metadata" in data && data.metadata != undefined) {
            _this57.metadata = data.metadata;
          }
        }

        return _this57;
      }

      (0, _createClass2["default"])(Snapshot, [{
        key: "height",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "format",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "chunks",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "hash",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "metadata",
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

          if (this.height != null) {
            data.height = this.height;
          }

          if (this.format != null) {
            data.format = this.format;
          }

          if (this.chunks != null) {
            data.chunks = this.chunks;
          }

          if (this.hash != null) {
            data.hash = this.hash;
          }

          if (this.metadata != null) {
            data.metadata = this.metadata;
          }

          return data;
        }
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.height !== undefined) writer.writeUint64(1, this.height);
          if (this.format !== undefined) writer.writeUint32(2, this.format);
          if (this.chunks !== undefined) writer.writeUint32(3, this.chunks);
          if (this.hash !== undefined) writer.writeBytes(4, this.hash);
          if (this.metadata !== undefined) writer.writeBytes(5, this.metadata);
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
          var message = new Snapshot({});

          if (data.height != null) {
            message.height = data.height;
          }

          if (data.format != null) {
            message.format = data.format;
          }

          if (data.chunks != null) {
            message.chunks = data.chunks;
          }

          if (data.hash != null) {
            message.hash = data.hash;
          }

          if (data.metadata != null) {
            message.metadata = data.metadata;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new Snapshot();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.height = reader.readUint64();
                break;

              case 2:
                message.format = reader.readUint32();
                break;

              case 3:
                message.chunks = reader.readUint32();
                break;

              case 4:
                message.hash = reader.readBytes();
                break;

              case 5:
                message.metadata = reader.readBytes();
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
          return Snapshot.deserialize(bytes);
        }
      }]);
      return Snapshot;
    }(pb_1.Message);

    _abci.Snapshot = Snapshot;
  })(abci || (abci = _tendermint.abci || (_tendermint.abci = {})));
})(tendermint || (exports.tendermint = tendermint = {}));