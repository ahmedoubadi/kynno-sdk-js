"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibc = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var dependency_3 = _interopRequireWildcard(require("./../../../../cosmos/upgrade/v1beta1/upgrade"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ibc;
exports.ibc = ibc;

(function (_ibc) {
  var core;

  (function (_core) {
    var client;

    (function (_client) {
      var v1;

      (function (_v) {
        var IdentifiedClientState = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(IdentifiedClientState, _pb_1$Message);

          var _super = _createSuper(IdentifiedClientState);

          function IdentifiedClientState(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, IdentifiedClientState);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this.client_id = data.client_id;
              }

              if ("client_state" in data && data.client_state != undefined) {
                _this.client_state = data.client_state;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(IdentifiedClientState, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this2 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.client_state !== undefined) writer.writeMessage(2, this.client_state, function () {
                return _this2.client_state.serialize(writer);
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
              var message = new IdentifiedClientState({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new IdentifiedClientState();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.client_state, function () {
                      return message.client_state = dependency_2.google.protobuf.Any.deserialize(reader);
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
              return IdentifiedClientState.deserialize(bytes);
            }
          }]);
          return IdentifiedClientState;
        }(pb_1.Message);

        _v.IdentifiedClientState = IdentifiedClientState;

        var ConsensusStateWithHeight = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(ConsensusStateWithHeight, _pb_1$Message2);

          var _super2 = _createSuper(ConsensusStateWithHeight);

          function ConsensusStateWithHeight(data) {
            var _this3;

            (0, _classCallCheck2["default"])(this, ConsensusStateWithHeight);
            _this3 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this3), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("height" in data && data.height != undefined) {
                _this3.height = data.height;
              }

              if ("consensus_state" in data && data.consensus_state != undefined) {
                _this3.consensus_state = data.consensus_state;
              }
            }

            return _this3;
          }

          (0, _createClass2["default"])(ConsensusStateWithHeight, [{
            key: "height",
            get: function get() {
              return pb_1.Message.getWrapperField(this, Height, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "consensus_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2);
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

              if (this.height != null) {
                data.height = this.height.toObject();
              }

              if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this4 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.height !== undefined) writer.writeMessage(1, this.height, function () {
                return _this4.height.serialize(writer);
              });
              if (this.consensus_state !== undefined) writer.writeMessage(2, this.consensus_state, function () {
                return _this4.consensus_state.serialize(writer);
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
              var message = new ConsensusStateWithHeight({});

              if (data.height != null) {
                message.height = Height.fromObject(data.height);
              }

              if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ConsensusStateWithHeight();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.height, function () {
                      return message.height = Height.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.consensus_state, function () {
                      return message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader);
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
              return ConsensusStateWithHeight.deserialize(bytes);
            }
          }]);
          return ConsensusStateWithHeight;
        }(pb_1.Message);

        _v.ConsensusStateWithHeight = ConsensusStateWithHeight;

        var ClientConsensusStates = /*#__PURE__*/function (_pb_1$Message3) {
          (0, _inherits2["default"])(ClientConsensusStates, _pb_1$Message3);

          var _super3 = _createSuper(ClientConsensusStates);

          function ClientConsensusStates(data) {
            var _this5;

            (0, _classCallCheck2["default"])(this, ClientConsensusStates);
            _this5 = _super3.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this5), Array.isArray(data) ? data : [], 0, -1, [2], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("client_id" in data && data.client_id != undefined) {
                _this5.client_id = data.client_id;
              }

              if ("consensus_states" in data && data.consensus_states != undefined) {
                _this5.consensus_states = data.consensus_states;
              }
            }

            return _this5;
          }

          (0, _createClass2["default"])(ClientConsensusStates, [{
            key: "client_id",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "consensus_states",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, ConsensusStateWithHeight, 2);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

              if (this.client_id != null) {
                data.client_id = this.client_id;
              }

              if (this.consensus_states != null) {
                data.consensus_states = this.consensus_states.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.client_id === "string" && this.client_id.length) writer.writeString(1, this.client_id);
              if (this.consensus_states !== undefined) writer.writeRepeatedMessage(2, this.consensus_states, function (item) {
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
              var message = new ClientConsensusStates({});

              if (data.client_id != null) {
                message.client_id = data.client_id;
              }

              if (data.consensus_states != null) {
                message.consensus_states = data.consensus_states.map(function (item) {
                  return ConsensusStateWithHeight.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientConsensusStates();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.client_id = reader.readString();
                    break;

                  case 2:
                    reader.readMessage(message.consensus_states, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 2, ConsensusStateWithHeight.deserialize(reader), ConsensusStateWithHeight);
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
              return ClientConsensusStates.deserialize(bytes);
            }
          }]);
          return ClientConsensusStates;
        }(pb_1.Message);

        _v.ClientConsensusStates = ClientConsensusStates;

        var ClientUpdateProposal = /*#__PURE__*/function (_pb_1$Message4) {
          (0, _inherits2["default"])(ClientUpdateProposal, _pb_1$Message4);

          var _super4 = _createSuper(ClientUpdateProposal);

          function ClientUpdateProposal(data) {
            var _this6;

            (0, _classCallCheck2["default"])(this, ClientUpdateProposal);
            _this6 = _super4.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("title" in data && data.title != undefined) {
                _this6.title = data.title;
              }

              if ("description" in data && data.description != undefined) {
                _this6.description = data.description;
              }

              if ("subject_client_id" in data && data.subject_client_id != undefined) {
                _this6.subject_client_id = data.subject_client_id;
              }

              if ("substitute_client_id" in data && data.substitute_client_id != undefined) {
                _this6.substitute_client_id = data.substitute_client_id;
              }
            }

            return _this6;
          }

          (0, _createClass2["default"])(ClientUpdateProposal, [{
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
            key: "subject_client_id",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
            }
          }, {
            key: "substitute_client_id",
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

              if (this.title != null) {
                data.title = this.title;
              }

              if (this.description != null) {
                data.description = this.description;
              }

              if (this.subject_client_id != null) {
                data.subject_client_id = this.subject_client_id;
              }

              if (this.substitute_client_id != null) {
                data.substitute_client_id = this.substitute_client_id;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
              if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
              if (typeof this.subject_client_id === "string" && this.subject_client_id.length) writer.writeString(3, this.subject_client_id);
              if (typeof this.substitute_client_id === "string" && this.substitute_client_id.length) writer.writeString(4, this.substitute_client_id);
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
              var message = new ClientUpdateProposal({});

              if (data.title != null) {
                message.title = data.title;
              }

              if (data.description != null) {
                message.description = data.description;
              }

              if (data.subject_client_id != null) {
                message.subject_client_id = data.subject_client_id;
              }

              if (data.substitute_client_id != null) {
                message.substitute_client_id = data.substitute_client_id;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new ClientUpdateProposal();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.title = reader.readString();
                    break;

                  case 2:
                    message.description = reader.readString();
                    break;

                  case 3:
                    message.subject_client_id = reader.readString();
                    break;

                  case 4:
                    message.substitute_client_id = reader.readString();
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
              return ClientUpdateProposal.deserialize(bytes);
            }
          }]);
          return ClientUpdateProposal;
        }(pb_1.Message);

        _v.ClientUpdateProposal = ClientUpdateProposal;

        var UpgradeProposal = /*#__PURE__*/function (_pb_1$Message5) {
          (0, _inherits2["default"])(UpgradeProposal, _pb_1$Message5);

          var _super5 = _createSuper(UpgradeProposal);

          function UpgradeProposal(data) {
            var _this7;

            (0, _classCallCheck2["default"])(this, UpgradeProposal);
            _this7 = _super5.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("title" in data && data.title != undefined) {
                _this7.title = data.title;
              }

              if ("description" in data && data.description != undefined) {
                _this7.description = data.description;
              }

              if ("plan" in data && data.plan != undefined) {
                _this7.plan = data.plan;
              }

              if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
                _this7.upgraded_client_state = data.upgraded_client_state;
              }
            }

            return _this7;
          }

          (0, _createClass2["default"])(UpgradeProposal, [{
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
            key: "plan",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.Plan, 3);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 3, value);
            }
          }, {
            key: "upgraded_client_state",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 4);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 4, value);
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

              if (this.title != null) {
                data.title = this.title;
              }

              if (this.description != null) {
                data.description = this.description;
              }

              if (this.plan != null) {
                data.plan = this.plan.toObject();
              }

              if (this.upgraded_client_state != null) {
                data.upgraded_client_state = this.upgraded_client_state.toObject();
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this8 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (typeof this.title === "string" && this.title.length) writer.writeString(1, this.title);
              if (typeof this.description === "string" && this.description.length) writer.writeString(2, this.description);
              if (this.plan !== undefined) writer.writeMessage(3, this.plan, function () {
                return _this8.plan.serialize(writer);
              });
              if (this.upgraded_client_state !== undefined) writer.writeMessage(4, this.upgraded_client_state, function () {
                return _this8.upgraded_client_state.serialize(writer);
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
              var message = new UpgradeProposal({});

              if (data.title != null) {
                message.title = data.title;
              }

              if (data.description != null) {
                message.description = data.description;
              }

              if (data.plan != null) {
                message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.fromObject(data.plan);
              }

              if (data.upgraded_client_state != null) {
                message.upgraded_client_state = dependency_2.google.protobuf.Any.fromObject(data.upgraded_client_state);
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new UpgradeProposal();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.title = reader.readString();
                    break;

                  case 2:
                    message.description = reader.readString();
                    break;

                  case 3:
                    reader.readMessage(message.plan, function () {
                      return message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.deserialize(reader);
                    });
                    break;

                  case 4:
                    reader.readMessage(message.upgraded_client_state, function () {
                      return message.upgraded_client_state = dependency_2.google.protobuf.Any.deserialize(reader);
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
              return UpgradeProposal.deserialize(bytes);
            }
          }]);
          return UpgradeProposal;
        }(pb_1.Message);

        _v.UpgradeProposal = UpgradeProposal;

        var Height = /*#__PURE__*/function (_pb_1$Message6) {
          (0, _inherits2["default"])(Height, _pb_1$Message6);

          var _super6 = _createSuper(Height);

          function Height(data) {
            var _this9;

            (0, _classCallCheck2["default"])(this, Height);
            _this9 = _super6.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("revision_number" in data && data.revision_number != undefined) {
                _this9.revision_number = data.revision_number;
              }

              if ("revision_height" in data && data.revision_height != undefined) {
                _this9.revision_height = data.revision_height;
              }
            }

            return _this9;
          }

          (0, _createClass2["default"])(Height, [{
            key: "revision_number",
            get: function get() {
              return pb_1.Message.getField(this, 1);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 1, value);
            }
          }, {
            key: "revision_height",
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

              if (this.revision_number != null) {
                data.revision_number = this.revision_number;
              }

              if (this.revision_height != null) {
                data.revision_height = this.revision_height;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.revision_number !== undefined) writer.writeUint64(1, this.revision_number);
              if (this.revision_height !== undefined) writer.writeUint64(2, this.revision_height);
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
              var message = new Height({});

              if (data.revision_number != null) {
                message.revision_number = data.revision_number;
              }

              if (data.revision_height != null) {
                message.revision_height = data.revision_height;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new Height();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    message.revision_number = reader.readUint64();
                    break;

                  case 2:
                    message.revision_height = reader.readUint64();
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
              return Height.deserialize(bytes);
            }
          }]);
          return Height;
        }(pb_1.Message);

        _v.Height = Height;

        var Params = /*#__PURE__*/function (_pb_1$Message7) {
          (0, _inherits2["default"])(Params, _pb_1$Message7);

          var _super7 = _createSuper(Params);

          function Params(data) {
            var _this10;

            (0, _classCallCheck2["default"])(this, Params);
            _this10 = _super7.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("allowed_clients" in data && data.allowed_clients != undefined) {
                _this10.allowed_clients = data.allowed_clients;
              }
            }

            return _this10;
          }

          (0, _createClass2["default"])(Params, [{
            key: "allowed_clients",
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

              if (this.allowed_clients != null) {
                data.allowed_clients = this.allowed_clients;
              }

              return data;
            }
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.allowed_clients !== undefined) writer.writeRepeatedString(1, this.allowed_clients);
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

              if (data.allowed_clients != null) {
                message.allowed_clients = data.allowed_clients;
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
              return Params.deserialize(bytes);
            }
          }]);
          return Params;
        }(pb_1.Message);

        _v.Params = Params;
      })(v1 || (v1 = _client.v1 || (_client.v1 = {})));
    })(client || (client = _core.client || (_core.client = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
})(ibc || (exports.ibc = ibc = {}));