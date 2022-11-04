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

var dependency_1 = _interopRequireWildcard(require("./../../../crypto/multisig/v1beta1/multisig"));

var dependency_2 = _interopRequireWildcard(require("./../../../../google/protobuf/any"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var cosmos;
exports.cosmos = cosmos;

(function (_cosmos) {
  var tx;

  (function (_tx) {
    var signing;

    (function (_signing) {
      var v1beta1;

      (function (_v1beta) {
        var SignMode;

        (function (SignMode) {
          SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
          SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
          SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
          SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
          SignMode[SignMode["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
        })(SignMode || (SignMode = {}));

        _v1beta.SignMode = SignMode;

        var SignatureDescriptors = /*#__PURE__*/function (_pb_1$Message) {
          (0, _inherits2["default"])(SignatureDescriptors, _pb_1$Message);

          var _super = _createSuper(SignatureDescriptors);

          function SignatureDescriptors(data) {
            var _this;

            (0, _classCallCheck2["default"])(this, SignatureDescriptors);
            _this = _super.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("signatures" in data && data.signatures != undefined) {
                _this.signatures = data.signatures;
              }
            }

            return _this;
          }

          (0, _createClass2["default"])(SignatureDescriptors, [{
            key: "signatures",
            get: function get() {
              return pb_1.Message.getRepeatedWrapperField(this, SignatureDescriptor, 1);
            },
            set: function set(value) {
              pb_1.Message.setRepeatedWrapperField(this, 1, value);
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

              if (this.signatures != null) {
                data.signatures = this.signatures.map(function (item) {
                  return item.toObject();
                });
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var writer = w || new pb_1.BinaryWriter();
              if (this.signatures !== undefined) writer.writeRepeatedMessage(1, this.signatures, function (item) {
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
              var message = new SignatureDescriptors({});

              if (data.signatures != null) {
                message.signatures = data.signatures.map(function (item) {
                  return SignatureDescriptor.fromObject(item);
                });
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SignatureDescriptors();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.signatures, function () {
                      return pb_1.Message.addToRepeatedWrapperField(message, 1, SignatureDescriptor.deserialize(reader), SignatureDescriptor);
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
              return SignatureDescriptors.deserialize(bytes);
            }
          }]);
          return SignatureDescriptors;
        }(pb_1.Message);

        _v1beta.SignatureDescriptors = SignatureDescriptors;

        var SignatureDescriptor = /*#__PURE__*/function (_pb_1$Message2) {
          (0, _inherits2["default"])(SignatureDescriptor, _pb_1$Message2);

          var _super2 = _createSuper(SignatureDescriptor);

          function SignatureDescriptor(data) {
            var _this2;

            (0, _classCallCheck2["default"])(this, SignatureDescriptor);
            _this2 = _super2.call(this);
            pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [], []);

            if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
              if ("public_key" in data && data.public_key != undefined) {
                _this2.public_key = data.public_key;
              }

              if ("data" in data && data.data != undefined) {
                _this2.data = data.data;
              }

              if ("sequence" in data && data.sequence != undefined) {
                _this2.sequence = data.sequence;
              }
            }

            return _this2;
          }

          (0, _createClass2["default"])(SignatureDescriptor, [{
            key: "public_key",
            get: function get() {
              return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 1, value);
            }
          }, {
            key: "data",
            get: function get() {
              return pb_1.Message.getWrapperField(this, SignatureDescriptor.Data, 2);
            },
            set: function set(value) {
              pb_1.Message.setWrapperField(this, 2, value);
            }
          }, {
            key: "sequence",
            get: function get() {
              return pb_1.Message.getField(this, 3);
            },
            set: function set(value) {
              pb_1.Message.setField(this, 3, value);
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

              if (this.public_key != null) {
                data.public_key = this.public_key.toObject();
              }

              if (this.data != null) {
                data.data = this.data.toObject();
              }

              if (this.sequence != null) {
                data.sequence = this.sequence;
              }

              return data;
            })
          }, {
            key: "serialize",
            value: function serialize(w) {
              var _this3 = this;

              var writer = w || new pb_1.BinaryWriter();
              if (this.public_key !== undefined) writer.writeMessage(1, this.public_key, function () {
                return _this3.public_key.serialize(writer);
              });
              if (this.data !== undefined) writer.writeMessage(2, this.data, function () {
                return _this3.data.serialize(writer);
              });
              if (this.sequence !== undefined) writer.writeUint64(3, this.sequence);
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
              var message = new SignatureDescriptor({});

              if (data.public_key != null) {
                message.public_key = dependency_2.google.protobuf.Any.fromObject(data.public_key);
              }

              if (data.data != null) {
                message.data = SignatureDescriptor.Data.fromObject(data.data);
              }

              if (data.sequence != null) {
                message.sequence = data.sequence;
              }

              return message;
            }
          }, {
            key: "deserialize",
            value: function deserialize(bytes) {
              var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                  message = new SignatureDescriptor();

              while (reader.nextField()) {
                if (reader.isEndGroup()) break;

                switch (reader.getFieldNumber()) {
                  case 1:
                    reader.readMessage(message.public_key, function () {
                      return message.public_key = dependency_2.google.protobuf.Any.deserialize(reader);
                    });
                    break;

                  case 2:
                    reader.readMessage(message.data, function () {
                      return message.data = SignatureDescriptor.Data.deserialize(reader);
                    });
                    break;

                  case 3:
                    message.sequence = reader.readUint64();
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
              return SignatureDescriptor.deserialize(bytes);
            }
          }]);
          return SignatureDescriptor;
        }(pb_1.Message);

        _v1beta.SignatureDescriptor = SignatureDescriptor;

        (function (_SignatureDescriptor) {
          var Data = /*#__PURE__*/function (_pb_1$Message3) {
            (0, _inherits2["default"])(Data, _pb_1$Message3);

            var _super3 = _createSuper(Data);

            function Data(data) {
              var _this4;

              (0, _classCallCheck2["default"])(this, Data);
              _this4 = _super3.call(this);
              pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);

              if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
                if ("single" in data && data.single != undefined) {
                  _this4.single = data.single;
                }

                if ("multi" in data && data.multi != undefined) {
                  _this4.multi = data.multi;
                }
              }

              return _this4;
            }

            (0, _createClass2["default"])(Data, [{
              key: "single",
              get: function get() {
                return pb_1.Message.getWrapperField(this, SignatureDescriptor.Data.Single, 1);
              },
              set: function set(value) {
                pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
              }
            }, {
              key: "multi",
              get: function get() {
                return pb_1.Message.getWrapperField(this, SignatureDescriptor.Data.Multi, 2);
              },
              set: function set(value) {
                pb_1.Message.setOneofWrapperField(this, 2, [1, 2], value);
              }
            }, {
              key: "sum",
              get: function get() {
                var cases = {
                  0: "none",
                  1: "single",
                  2: "multi"
                };
                return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
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

                if (this.single != null) {
                  data.single = this.single.toObject();
                }

                if (this.multi != null) {
                  data.multi = this.multi.toObject();
                }

                return data;
              })
            }, {
              key: "serialize",
              value: function serialize(w) {
                var _this5 = this;

                var writer = w || new pb_1.BinaryWriter();
                if (this.single !== undefined) writer.writeMessage(1, this.single, function () {
                  return _this5.single.serialize(writer);
                });
                if (this.multi !== undefined) writer.writeMessage(2, this.multi, function () {
                  return _this5.multi.serialize(writer);
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
                var message = new Data({});

                if (data.single != null) {
                  message.single = SignatureDescriptor.Data.Single.fromObject(data.single);
                }

                if (data.multi != null) {
                  message.multi = SignatureDescriptor.Data.Multi.fromObject(data.multi);
                }

                return message;
              }
            }, {
              key: "deserialize",
              value: function deserialize(bytes) {
                var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                    message = new Data();

                while (reader.nextField()) {
                  if (reader.isEndGroup()) break;

                  switch (reader.getFieldNumber()) {
                    case 1:
                      reader.readMessage(message.single, function () {
                        return message.single = SignatureDescriptor.Data.Single.deserialize(reader);
                      });
                      break;

                    case 2:
                      reader.readMessage(message.multi, function () {
                        return message.multi = SignatureDescriptor.Data.Multi.deserialize(reader);
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
                return Data.deserialize(bytes);
              }
            }]);
            return Data;
          }(pb_1.Message);

          _SignatureDescriptor.Data = Data;

          (function (_Data) {
            var Single = /*#__PURE__*/function (_pb_1$Message4) {
              (0, _inherits2["default"])(Single, _pb_1$Message4);

              var _super4 = _createSuper(Single);

              function Single(data) {
                var _this6;

                (0, _classCallCheck2["default"])(this, Single);
                _this6 = _super4.call(this);
                pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

                if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
                  if ("mode" in data && data.mode != undefined) {
                    _this6.mode = data.mode;
                  }

                  if ("signature" in data && data.signature != undefined) {
                    _this6.signature = data.signature;
                  }
                }

                return _this6;
              }

              (0, _createClass2["default"])(Single, [{
                key: "mode",
                get: function get() {
                  return pb_1.Message.getField(this, 1);
                },
                set: function set(value) {
                  pb_1.Message.setField(this, 1, value);
                }
              }, {
                key: "signature",
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

                  if (this.mode != null) {
                    data.mode = this.mode;
                  }

                  if (this.signature != null) {
                    data.signature = this.signature;
                  }

                  return data;
                }
              }, {
                key: "serialize",
                value: function serialize(w) {
                  var writer = w || new pb_1.BinaryWriter();
                  if (this.mode !== undefined) writer.writeEnum(1, this.mode);
                  if (this.signature !== undefined) writer.writeBytes(2, this.signature);
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
                  var message = new Single({});

                  if (data.mode != null) {
                    message.mode = data.mode;
                  }

                  if (data.signature != null) {
                    message.signature = data.signature;
                  }

                  return message;
                }
              }, {
                key: "deserialize",
                value: function deserialize(bytes) {
                  var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                      message = new Single();

                  while (reader.nextField()) {
                    if (reader.isEndGroup()) break;

                    switch (reader.getFieldNumber()) {
                      case 1:
                        message.mode = reader.readEnum();
                        break;

                      case 2:
                        message.signature = reader.readBytes();
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
                  return Single.deserialize(bytes);
                }
              }]);
              return Single;
            }(pb_1.Message);

            _Data.Single = Single;

            var Multi = /*#__PURE__*/function (_pb_1$Message5) {
              (0, _inherits2["default"])(Multi, _pb_1$Message5);

              var _super5 = _createSuper(Multi);

              function Multi(data) {
                var _this7;

                (0, _classCallCheck2["default"])(this, Multi);
                _this7 = _super5.call(this);
                pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this7), Array.isArray(data) ? data : [], 0, -1, [2], []);

                if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
                  if ("bitarray" in data && data.bitarray != undefined) {
                    _this7.bitarray = data.bitarray;
                  }

                  if ("signatures" in data && data.signatures != undefined) {
                    _this7.signatures = data.signatures;
                  }
                }

                return _this7;
              }

              (0, _createClass2["default"])(Multi, [{
                key: "bitarray",
                get: function get() {
                  return pb_1.Message.getWrapperField(this, dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray, 1);
                },
                set: function set(value) {
                  pb_1.Message.setWrapperField(this, 1, value);
                }
              }, {
                key: "signatures",
                get: function get() {
                  return pb_1.Message.getRepeatedWrapperField(this, SignatureDescriptor.Data, 2);
                },
                set: function set(value) {
                  pb_1.Message.setRepeatedWrapperField(this, 2, value);
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

                  if (this.bitarray != null) {
                    data.bitarray = this.bitarray.toObject();
                  }

                  if (this.signatures != null) {
                    data.signatures = this.signatures.map(function (item) {
                      return item.toObject();
                    });
                  }

                  return data;
                })
              }, {
                key: "serialize",
                value: function serialize(w) {
                  var _this8 = this;

                  var writer = w || new pb_1.BinaryWriter();
                  if (this.bitarray !== undefined) writer.writeMessage(1, this.bitarray, function () {
                    return _this8.bitarray.serialize(writer);
                  });
                  if (this.signatures !== undefined) writer.writeRepeatedMessage(2, this.signatures, function (item) {
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
                  var message = new Multi({});

                  if (data.bitarray != null) {
                    message.bitarray = dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.fromObject(data.bitarray);
                  }

                  if (data.signatures != null) {
                    message.signatures = data.signatures.map(function (item) {
                      return SignatureDescriptor.Data.fromObject(item);
                    });
                  }

                  return message;
                }
              }, {
                key: "deserialize",
                value: function deserialize(bytes) {
                  var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                      message = new Multi();

                  while (reader.nextField()) {
                    if (reader.isEndGroup()) break;

                    switch (reader.getFieldNumber()) {
                      case 1:
                        reader.readMessage(message.bitarray, function () {
                          return message.bitarray = dependency_1.cosmos.crypto.multisig.v1beta1.CompactBitArray.deserialize(reader);
                        });
                        break;

                      case 2:
                        reader.readMessage(message.signatures, function () {
                          return pb_1.Message.addToRepeatedWrapperField(message, 2, SignatureDescriptor.Data.deserialize(reader), SignatureDescriptor.Data);
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
                  return Multi.deserialize(bytes);
                }
              }]);
              return Multi;
            }(pb_1.Message);

            _Data.Multi = Multi;
          })(Data || (Data = _SignatureDescriptor.Data || (_SignatureDescriptor.Data = {})));
        })(SignatureDescriptor || (SignatureDescriptor = _v1beta.SignatureDescriptor || (_v1beta.SignatureDescriptor = {})));
      })(v1beta1 || (v1beta1 = _signing.v1beta1 || (_signing.v1beta1 = {})));
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
})(cosmos || (exports.cosmos = cosmos = {}));