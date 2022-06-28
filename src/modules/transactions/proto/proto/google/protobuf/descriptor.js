"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.google = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var google;
exports.google = google;

(function (_google) {
  var protobuf;

  (function (_protobuf) {
    var FileDescriptorSet = /*#__PURE__*/function (_pb_1$Message) {
      (0, _inherits2["default"])(FileDescriptorSet, _pb_1$Message);

      var _super = _createSuper(FileDescriptorSet);

      function FileDescriptorSet(data) {
        var _this;

        (0, _classCallCheck2["default"])(this, FileDescriptorSet);
        _this = _super.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this.file = data.file;
        }

        return _this;
      }

      (0, _createClass2["default"])(FileDescriptorSet, [{
        key: "file",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, FileDescriptorProto, 1);
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
          var data = {
            file: this.file.map(function (item) {
              return item.toObject();
            })
          };
          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.file !== undefined) writer.writeRepeatedMessage(1, this.file, function (item) {
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
          var message = new FileDescriptorSet({
            file: data.file.map(function (item) {
              return FileDescriptorProto.fromObject(item);
            })
          });
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new FileDescriptorSet();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.file, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, FileDescriptorProto.deserialize(reader), FileDescriptorProto);
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
          return FileDescriptorSet.deserialize(bytes);
        }
      }]);
      return FileDescriptorSet;
    }(pb_1.Message);

    _protobuf.FileDescriptorSet = FileDescriptorSet;

    var FileDescriptorProto = /*#__PURE__*/function (_pb_1$Message2) {
      (0, _inherits2["default"])(FileDescriptorProto, _pb_1$Message2);

      var _super2 = _createSuper(FileDescriptorProto);

      function FileDescriptorProto(data) {
        var _this2;

        (0, _classCallCheck2["default"])(this, FileDescriptorProto);
        _this2 = _super2.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this2), Array.isArray(data) ? data : [], 0, -1, [3, 10, 11, 4, 5, 6, 7], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this2.name = data.name;
          }

          if ("package" in data && data["package"] != undefined) {
            _this2["package"] = data["package"];
          }

          _this2.dependency = data.dependency;
          _this2.public_dependency = data.public_dependency;
          _this2.weak_dependency = data.weak_dependency;
          _this2.message_type = data.message_type;
          _this2.enum_type = data.enum_type;
          _this2.service = data.service;
          _this2.extension = data.extension;

          if ("options" in data && data.options != undefined) {
            _this2.options = data.options;
          }

          if ("source_code_info" in data && data.source_code_info != undefined) {
            _this2.source_code_info = data.source_code_info;
          }

          if ("syntax" in data && data.syntax != undefined) {
            _this2.syntax = data.syntax;
          }
        }

        return _this2;
      }

      (0, _createClass2["default"])(FileDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "package",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "dependency",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "public_dependency",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
      }, {
        key: "weak_dependency",
        get: function get() {
          return pb_1.Message.getField(this, 11);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 11, value);
        }
      }, {
        key: "message_type",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 4);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
      }, {
        key: "enum_type",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 5);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
      }, {
        key: "service",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, ServiceDescriptorProto, 6);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
      }, {
        key: "extension",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 7);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, FileOptions, 8);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 8, value);
        }
      }, {
        key: "source_code_info",
        get: function get() {
          return pb_1.Message.getWrapperField(this, SourceCodeInfo, 9);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 9, value);
        }
      }, {
        key: "syntax",
        get: function get() {
          return pb_1.Message.getField(this, 12);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 12, value);
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
          var data = {
            dependency: this.dependency,
            public_dependency: this.public_dependency,
            weak_dependency: this.weak_dependency,
            message_type: this.message_type.map(function (item) {
              return item.toObject();
            }),
            enum_type: this.enum_type.map(function (item) {
              return item.toObject();
            }),
            service: this.service.map(function (item) {
              return item.toObject();
            }),
            extension: this.extension.map(function (item) {
              return item.toObject();
            })
          };

          if (this.name != null) {
            data.name = this.name;
          }

          if (this["package"] != null) {
            data["package"] = this["package"];
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          if (this.source_code_info != null) {
            data.source_code_info = this.source_code_info.toObject();
          }

          if (this.syntax != null) {
            data.syntax = this.syntax;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this3 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (typeof this["package"] === "string" && this["package"].length) writer.writeString(2, this["package"]);
          if (this.dependency !== undefined) writer.writeRepeatedString(3, this.dependency);
          if (this.public_dependency !== undefined) writer.writeRepeatedInt32(10, this.public_dependency);
          if (this.weak_dependency !== undefined) writer.writeRepeatedInt32(11, this.weak_dependency);
          if (this.message_type !== undefined) writer.writeRepeatedMessage(4, this.message_type, function (item) {
            return item.serialize(writer);
          });
          if (this.enum_type !== undefined) writer.writeRepeatedMessage(5, this.enum_type, function (item) {
            return item.serialize(writer);
          });
          if (this.service !== undefined) writer.writeRepeatedMessage(6, this.service, function (item) {
            return item.serialize(writer);
          });
          if (this.extension !== undefined) writer.writeRepeatedMessage(7, this.extension, function (item) {
            return item.serialize(writer);
          });
          if (this.options !== undefined) writer.writeMessage(8, this.options, function () {
            return _this3.options.serialize(writer);
          });
          if (this.source_code_info !== undefined) writer.writeMessage(9, this.source_code_info, function () {
            return _this3.source_code_info.serialize(writer);
          });
          if (typeof this.syntax === "string" && this.syntax.length) writer.writeString(12, this.syntax);
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
          var message = new FileDescriptorProto({
            dependency: data.dependency,
            public_dependency: data.public_dependency,
            weak_dependency: data.weak_dependency,
            message_type: data.message_type.map(function (item) {
              return DescriptorProto.fromObject(item);
            }),
            enum_type: data.enum_type.map(function (item) {
              return EnumDescriptorProto.fromObject(item);
            }),
            service: data.service.map(function (item) {
              return ServiceDescriptorProto.fromObject(item);
            }),
            extension: data.extension.map(function (item) {
              return FieldDescriptorProto.fromObject(item);
            })
          });

          if (data.name != null) {
            message.name = data.name;
          }

          if (data["package"] != null) {
            message["package"] = data["package"];
          }

          if (data.options != null) {
            message.options = FileOptions.fromObject(data.options);
          }

          if (data.source_code_info != null) {
            message.source_code_info = SourceCodeInfo.fromObject(data.source_code_info);
          }

          if (data.syntax != null) {
            message.syntax = data.syntax;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new FileDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                message["package"] = reader.readString();
                break;

              case 3:
                pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                break;

              case 10:
                pb_1.Message.addToRepeatedField(message, 10, reader.readInt32());
                break;

              case 11:
                pb_1.Message.addToRepeatedField(message, 11, reader.readInt32());
                break;

              case 4:
                reader.readMessage(message.message_type, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, DescriptorProto.deserialize(reader), DescriptorProto);
                });
                break;

              case 5:
                reader.readMessage(message.enum_type, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 5, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto);
                });
                break;

              case 6:
                reader.readMessage(message.service, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 6, ServiceDescriptorProto.deserialize(reader), ServiceDescriptorProto);
                });
                break;

              case 7:
                reader.readMessage(message.extension, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 7, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto);
                });
                break;

              case 8:
                reader.readMessage(message.options, function () {
                  return message.options = FileOptions.deserialize(reader);
                });
                break;

              case 9:
                reader.readMessage(message.source_code_info, function () {
                  return message.source_code_info = SourceCodeInfo.deserialize(reader);
                });
                break;

              case 12:
                message.syntax = reader.readString();
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
          return FileDescriptorProto.deserialize(bytes);
        }
      }]);
      return FileDescriptorProto;
    }(pb_1.Message);

    _protobuf.FileDescriptorProto = FileDescriptorProto;

    var DescriptorProto = /*#__PURE__*/function (_pb_1$Message3) {
      (0, _inherits2["default"])(DescriptorProto, _pb_1$Message3);

      var _super3 = _createSuper(DescriptorProto);

      function DescriptorProto(data) {
        var _this4;

        (0, _classCallCheck2["default"])(this, DescriptorProto);
        _this4 = _super3.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this4), Array.isArray(data) ? data : [], 0, -1, [2, 6, 3, 4, 5, 8, 9, 10], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this4.name = data.name;
          }

          _this4.field = data.field;
          _this4.extension = data.extension;
          _this4.nested_type = data.nested_type;
          _this4.enum_type = data.enum_type;
          _this4.extension_range = data.extension_range;
          _this4.oneof_decl = data.oneof_decl;

          if ("options" in data && data.options != undefined) {
            _this4.options = data.options;
          }

          _this4.reserved_range = data.reserved_range;
          _this4.reserved_name = data.reserved_name;
        }

        return _this4;
      }

      (0, _createClass2["default"])(DescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "field",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "extension",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 6);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
      }, {
        key: "nested_type",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 3);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
      }, {
        key: "enum_type",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 4);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
      }, {
        key: "extension_range",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ExtensionRange, 5);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
      }, {
        key: "oneof_decl",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, OneofDescriptorProto, 8);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, MessageOptions, 7);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 7, value);
        }
      }, {
        key: "reserved_range",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ReservedRange, 9);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 9, value);
        }
      }, {
        key: "reserved_name",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
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
          var data = {
            field: this.field.map(function (item) {
              return item.toObject();
            }),
            extension: this.extension.map(function (item) {
              return item.toObject();
            }),
            nested_type: this.nested_type.map(function (item) {
              return item.toObject();
            }),
            enum_type: this.enum_type.map(function (item) {
              return item.toObject();
            }),
            extension_range: this.extension_range.map(function (item) {
              return item.toObject();
            }),
            oneof_decl: this.oneof_decl.map(function (item) {
              return item.toObject();
            }),
            reserved_range: this.reserved_range.map(function (item) {
              return item.toObject();
            }),
            reserved_name: this.reserved_name
          };

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this5 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.field !== undefined) writer.writeRepeatedMessage(2, this.field, function (item) {
            return item.serialize(writer);
          });
          if (this.extension !== undefined) writer.writeRepeatedMessage(6, this.extension, function (item) {
            return item.serialize(writer);
          });
          if (this.nested_type !== undefined) writer.writeRepeatedMessage(3, this.nested_type, function (item) {
            return item.serialize(writer);
          });
          if (this.enum_type !== undefined) writer.writeRepeatedMessage(4, this.enum_type, function (item) {
            return item.serialize(writer);
          });
          if (this.extension_range !== undefined) writer.writeRepeatedMessage(5, this.extension_range, function (item) {
            return item.serialize(writer);
          });
          if (this.oneof_decl !== undefined) writer.writeRepeatedMessage(8, this.oneof_decl, function (item) {
            return item.serialize(writer);
          });
          if (this.options !== undefined) writer.writeMessage(7, this.options, function () {
            return _this5.options.serialize(writer);
          });
          if (this.reserved_range !== undefined) writer.writeRepeatedMessage(9, this.reserved_range, function (item) {
            return item.serialize(writer);
          });
          if (this.reserved_name !== undefined) writer.writeRepeatedString(10, this.reserved_name);
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
          var message = new DescriptorProto({
            field: data.field.map(function (item) {
              return FieldDescriptorProto.fromObject(item);
            }),
            extension: data.extension.map(function (item) {
              return FieldDescriptorProto.fromObject(item);
            }),
            nested_type: data.nested_type.map(function (item) {
              return DescriptorProto.fromObject(item);
            }),
            enum_type: data.enum_type.map(function (item) {
              return EnumDescriptorProto.fromObject(item);
            }),
            extension_range: data.extension_range.map(function (item) {
              return DescriptorProto.ExtensionRange.fromObject(item);
            }),
            oneof_decl: data.oneof_decl.map(function (item) {
              return OneofDescriptorProto.fromObject(item);
            }),
            reserved_range: data.reserved_range.map(function (item) {
              return DescriptorProto.ReservedRange.fromObject(item);
            }),
            reserved_name: data.reserved_name
          });

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.options != null) {
            message.options = MessageOptions.fromObject(data.options);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new DescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                reader.readMessage(message.field, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto);
                });
                break;

              case 6:
                reader.readMessage(message.extension, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 6, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto);
                });
                break;

              case 3:
                reader.readMessage(message.nested_type, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 3, DescriptorProto.deserialize(reader), DescriptorProto);
                });
                break;

              case 4:
                reader.readMessage(message.enum_type, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto);
                });
                break;

              case 5:
                reader.readMessage(message.extension_range, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 5, DescriptorProto.ExtensionRange.deserialize(reader), DescriptorProto.ExtensionRange);
                });
                break;

              case 8:
                reader.readMessage(message.oneof_decl, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 8, OneofDescriptorProto.deserialize(reader), OneofDescriptorProto);
                });
                break;

              case 7:
                reader.readMessage(message.options, function () {
                  return message.options = MessageOptions.deserialize(reader);
                });
                break;

              case 9:
                reader.readMessage(message.reserved_range, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 9, DescriptorProto.ReservedRange.deserialize(reader), DescriptorProto.ReservedRange);
                });
                break;

              case 10:
                pb_1.Message.addToRepeatedField(message, 10, reader.readString());
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
          return DescriptorProto.deserialize(bytes);
        }
      }]);
      return DescriptorProto;
    }(pb_1.Message);

    _protobuf.DescriptorProto = DescriptorProto;

    (function (_DescriptorProto) {
      var ExtensionRange = /*#__PURE__*/function (_pb_1$Message4) {
        (0, _inherits2["default"])(ExtensionRange, _pb_1$Message4);

        var _super4 = _createSuper(ExtensionRange);

        function ExtensionRange(data) {
          var _this6;

          (0, _classCallCheck2["default"])(this, ExtensionRange);
          _this6 = _super4.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this6), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("start" in data && data.start != undefined) {
              _this6.start = data.start;
            }

            if ("end" in data && data.end != undefined) {
              _this6.end = data.end;
            }

            if ("options" in data && data.options != undefined) {
              _this6.options = data.options;
            }
          }

          return _this6;
        }

        (0, _createClass2["default"])(ExtensionRange, [{
          key: "start",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "end",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "options",
          get: function get() {
            return pb_1.Message.getWrapperField(this, ExtensionRangeOptions, 3);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 3, value);
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

            if (this.start != null) {
              data.start = this.start;
            }

            if (this.end != null) {
              data.end = this.end;
            }

            if (this.options != null) {
              data.options = this.options.toObject();
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this7 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined) writer.writeInt32(1, this.start);
            if (this.end !== undefined) writer.writeInt32(2, this.end);
            if (this.options !== undefined) writer.writeMessage(3, this.options, function () {
              return _this7.options.serialize(writer);
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
            var message = new ExtensionRange({});

            if (data.start != null) {
              message.start = data.start;
            }

            if (data.end != null) {
              message.end = data.end;
            }

            if (data.options != null) {
              message.options = ExtensionRangeOptions.fromObject(data.options);
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ExtensionRange();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.start = reader.readInt32();
                  break;

                case 2:
                  message.end = reader.readInt32();
                  break;

                case 3:
                  reader.readMessage(message.options, function () {
                    return message.options = ExtensionRangeOptions.deserialize(reader);
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
            return ExtensionRange.deserialize(bytes);
          }
        }]);
        return ExtensionRange;
      }(pb_1.Message);

      _DescriptorProto.ExtensionRange = ExtensionRange;

      var ReservedRange = /*#__PURE__*/function (_pb_1$Message5) {
        (0, _inherits2["default"])(ReservedRange, _pb_1$Message5);

        var _super5 = _createSuper(ReservedRange);

        function ReservedRange(data) {
          var _this8;

          (0, _classCallCheck2["default"])(this, ReservedRange);
          _this8 = _super5.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this8), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("start" in data && data.start != undefined) {
              _this8.start = data.start;
            }

            if ("end" in data && data.end != undefined) {
              _this8.end = data.end;
            }
          }

          return _this8;
        }

        (0, _createClass2["default"])(ReservedRange, [{
          key: "start",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "end",
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

            if (this.start != null) {
              data.start = this.start;
            }

            if (this.end != null) {
              data.end = this.end;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined) writer.writeInt32(1, this.start);
            if (this.end !== undefined) writer.writeInt32(2, this.end);
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
            var message = new ReservedRange({});

            if (data.start != null) {
              message.start = data.start;
            }

            if (data.end != null) {
              message.end = data.end;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new ReservedRange();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.start = reader.readInt32();
                  break;

                case 2:
                  message.end = reader.readInt32();
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
            return ReservedRange.deserialize(bytes);
          }
        }]);
        return ReservedRange;
      }(pb_1.Message);

      _DescriptorProto.ReservedRange = ReservedRange;
    })(DescriptorProto || (DescriptorProto = _protobuf.DescriptorProto || (_protobuf.DescriptorProto = {})));

    var ExtensionRangeOptions = /*#__PURE__*/function (_pb_1$Message6) {
      (0, _inherits2["default"])(ExtensionRangeOptions, _pb_1$Message6);

      var _super6 = _createSuper(ExtensionRangeOptions);

      function ExtensionRangeOptions(data) {
        var _this9;

        (0, _classCallCheck2["default"])(this, ExtensionRangeOptions);
        _this9 = _super6.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this9), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this9.uninterpreted_option = data.uninterpreted_option;
        }

        return _this9;
      }

      (0, _createClass2["default"])(ExtensionRangeOptions, [{
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };
          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new ExtensionRangeOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ExtensionRangeOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return ExtensionRangeOptions.deserialize(bytes);
        }
      }]);
      return ExtensionRangeOptions;
    }(pb_1.Message);

    _protobuf.ExtensionRangeOptions = ExtensionRangeOptions;

    var FieldDescriptorProto = /*#__PURE__*/function (_pb_1$Message7) {
      (0, _inherits2["default"])(FieldDescriptorProto, _pb_1$Message7);

      var _super7 = _createSuper(FieldDescriptorProto);

      function FieldDescriptorProto(data) {
        var _this10;

        (0, _classCallCheck2["default"])(this, FieldDescriptorProto);
        _this10 = _super7.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this10), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this10.name = data.name;
          }

          if ("number" in data && data.number != undefined) {
            _this10.number = data.number;
          }

          if ("label" in data && data.label != undefined) {
            _this10.label = data.label;
          }

          if ("type" in data && data.type != undefined) {
            _this10.type = data.type;
          }

          if ("type_name" in data && data.type_name != undefined) {
            _this10.type_name = data.type_name;
          }

          if ("extendee" in data && data.extendee != undefined) {
            _this10.extendee = data.extendee;
          }

          if ("default_value" in data && data.default_value != undefined) {
            _this10.default_value = data.default_value;
          }

          if ("oneof_index" in data && data.oneof_index != undefined) {
            _this10.oneof_index = data.oneof_index;
          }

          if ("json_name" in data && data.json_name != undefined) {
            _this10.json_name = data.json_name;
          }

          if ("options" in data && data.options != undefined) {
            _this10.options = data.options;
          }

          if ("proto3_optional" in data && data.proto3_optional != undefined) {
            _this10.proto3_optional = data.proto3_optional;
          }
        }

        return _this10;
      }

      (0, _createClass2["default"])(FieldDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "number",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "label",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "type",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "type_name",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "extendee",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "default_value",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "oneof_index",
        get: function get() {
          return pb_1.Message.getField(this, 9);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 9, value);
        }
      }, {
        key: "json_name",
        get: function get() {
          return pb_1.Message.getField(this, 10);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, FieldOptions, 8);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 8, value);
        }
      }, {
        key: "proto3_optional",
        get: function get() {
          return pb_1.Message.getField(this, 17);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 17, value);
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

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.number != null) {
            data.number = this.number;
          }

          if (this.label != null) {
            data.label = this.label;
          }

          if (this.type != null) {
            data.type = this.type;
          }

          if (this.type_name != null) {
            data.type_name = this.type_name;
          }

          if (this.extendee != null) {
            data.extendee = this.extendee;
          }

          if (this.default_value != null) {
            data.default_value = this.default_value;
          }

          if (this.oneof_index != null) {
            data.oneof_index = this.oneof_index;
          }

          if (this.json_name != null) {
            data.json_name = this.json_name;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          if (this.proto3_optional != null) {
            data.proto3_optional = this.proto3_optional;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this11 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.number !== undefined) writer.writeInt32(3, this.number);
          if (this.label !== undefined) writer.writeEnum(4, this.label);
          if (this.type !== undefined) writer.writeEnum(5, this.type);
          if (typeof this.type_name === "string" && this.type_name.length) writer.writeString(6, this.type_name);
          if (typeof this.extendee === "string" && this.extendee.length) writer.writeString(2, this.extendee);
          if (typeof this.default_value === "string" && this.default_value.length) writer.writeString(7, this.default_value);
          if (this.oneof_index !== undefined) writer.writeInt32(9, this.oneof_index);
          if (typeof this.json_name === "string" && this.json_name.length) writer.writeString(10, this.json_name);
          if (this.options !== undefined) writer.writeMessage(8, this.options, function () {
            return _this11.options.serialize(writer);
          });
          if (this.proto3_optional !== undefined) writer.writeBool(17, this.proto3_optional);
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
          var message = new FieldDescriptorProto({});

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.number != null) {
            message.number = data.number;
          }

          if (data.label != null) {
            message.label = data.label;
          }

          if (data.type != null) {
            message.type = data.type;
          }

          if (data.type_name != null) {
            message.type_name = data.type_name;
          }

          if (data.extendee != null) {
            message.extendee = data.extendee;
          }

          if (data.default_value != null) {
            message.default_value = data.default_value;
          }

          if (data.oneof_index != null) {
            message.oneof_index = data.oneof_index;
          }

          if (data.json_name != null) {
            message.json_name = data.json_name;
          }

          if (data.options != null) {
            message.options = FieldOptions.fromObject(data.options);
          }

          if (data.proto3_optional != null) {
            message.proto3_optional = data.proto3_optional;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new FieldDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 3:
                message.number = reader.readInt32();
                break;

              case 4:
                message.label = reader.readEnum();
                break;

              case 5:
                message.type = reader.readEnum();
                break;

              case 6:
                message.type_name = reader.readString();
                break;

              case 2:
                message.extendee = reader.readString();
                break;

              case 7:
                message.default_value = reader.readString();
                break;

              case 9:
                message.oneof_index = reader.readInt32();
                break;

              case 10:
                message.json_name = reader.readString();
                break;

              case 8:
                reader.readMessage(message.options, function () {
                  return message.options = FieldOptions.deserialize(reader);
                });
                break;

              case 17:
                message.proto3_optional = reader.readBool();
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
          return FieldDescriptorProto.deserialize(bytes);
        }
      }]);
      return FieldDescriptorProto;
    }(pb_1.Message);

    _protobuf.FieldDescriptorProto = FieldDescriptorProto;

    (function (_FieldDescriptorProto) {
      var Type;

      (function (Type) {
        Type[Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
        Type[Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
        Type[Type["TYPE_INT64"] = 3] = "TYPE_INT64";
        Type[Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
        Type[Type["TYPE_INT32"] = 5] = "TYPE_INT32";
        Type[Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
        Type[Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
        Type[Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
        Type[Type["TYPE_STRING"] = 9] = "TYPE_STRING";
        Type[Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
        Type[Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
        Type[Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
        Type[Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
        Type[Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
        Type[Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
        Type[Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
        Type[Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
        Type[Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
      })(Type || (Type = {}));

      _FieldDescriptorProto.Type = Type;
      var Label;

      (function (Label) {
        Label[Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
        Label[Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
        Label[Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
      })(Label || (Label = {}));

      _FieldDescriptorProto.Label = Label;
    })(FieldDescriptorProto || (FieldDescriptorProto = _protobuf.FieldDescriptorProto || (_protobuf.FieldDescriptorProto = {})));

    var OneofDescriptorProto = /*#__PURE__*/function (_pb_1$Message8) {
      (0, _inherits2["default"])(OneofDescriptorProto, _pb_1$Message8);

      var _super8 = _createSuper(OneofDescriptorProto);

      function OneofDescriptorProto(data) {
        var _this12;

        (0, _classCallCheck2["default"])(this, OneofDescriptorProto);
        _this12 = _super8.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this12), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this12.name = data.name;
          }

          if ("options" in data && data.options != undefined) {
            _this12.options = data.options;
          }
        }

        return _this12;
      }

      (0, _createClass2["default"])(OneofDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, OneofOptions, 2);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 2, value);
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

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this13 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.options !== undefined) writer.writeMessage(2, this.options, function () {
            return _this13.options.serialize(writer);
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
          var message = new OneofDescriptorProto({});

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.options != null) {
            message.options = OneofOptions.fromObject(data.options);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new OneofDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                reader.readMessage(message.options, function () {
                  return message.options = OneofOptions.deserialize(reader);
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
          return OneofDescriptorProto.deserialize(bytes);
        }
      }]);
      return OneofDescriptorProto;
    }(pb_1.Message);

    _protobuf.OneofDescriptorProto = OneofDescriptorProto;

    var EnumDescriptorProto = /*#__PURE__*/function (_pb_1$Message9) {
      (0, _inherits2["default"])(EnumDescriptorProto, _pb_1$Message9);

      var _super9 = _createSuper(EnumDescriptorProto);

      function EnumDescriptorProto(data) {
        var _this14;

        (0, _classCallCheck2["default"])(this, EnumDescriptorProto);
        _this14 = _super9.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this14), Array.isArray(data) ? data : [], 0, -1, [2, 4, 5], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this14.name = data.name;
          }

          _this14.value = data.value;

          if ("options" in data && data.options != undefined) {
            _this14.options = data.options;
          }

          _this14.reserved_range = data.reserved_range;
          _this14.reserved_name = data.reserved_name;
        }

        return _this14;
      }

      (0, _createClass2["default"])(EnumDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "value",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, EnumValueDescriptorProto, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, EnumOptions, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
        }
      }, {
        key: "reserved_range",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto.EnumReservedRange, 4);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
      }, {
        key: "reserved_name",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
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
          var data = {
            value: this.value.map(function (item) {
              return item.toObject();
            }),
            reserved_range: this.reserved_range.map(function (item) {
              return item.toObject();
            }),
            reserved_name: this.reserved_name
          };

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this15 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.value !== undefined) writer.writeRepeatedMessage(2, this.value, function (item) {
            return item.serialize(writer);
          });
          if (this.options !== undefined) writer.writeMessage(3, this.options, function () {
            return _this15.options.serialize(writer);
          });
          if (this.reserved_range !== undefined) writer.writeRepeatedMessage(4, this.reserved_range, function (item) {
            return item.serialize(writer);
          });
          if (this.reserved_name !== undefined) writer.writeRepeatedString(5, this.reserved_name);
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
          var message = new EnumDescriptorProto({
            value: data.value.map(function (item) {
              return EnumValueDescriptorProto.fromObject(item);
            }),
            reserved_range: data.reserved_range.map(function (item) {
              return EnumDescriptorProto.EnumReservedRange.fromObject(item);
            }),
            reserved_name: data.reserved_name
          });

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.options != null) {
            message.options = EnumOptions.fromObject(data.options);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EnumDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                reader.readMessage(message.value, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, EnumValueDescriptorProto.deserialize(reader), EnumValueDescriptorProto);
                });
                break;

              case 3:
                reader.readMessage(message.options, function () {
                  return message.options = EnumOptions.deserialize(reader);
                });
                break;

              case 4:
                reader.readMessage(message.reserved_range, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.EnumReservedRange.deserialize(reader), EnumDescriptorProto.EnumReservedRange);
                });
                break;

              case 5:
                pb_1.Message.addToRepeatedField(message, 5, reader.readString());
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
          return EnumDescriptorProto.deserialize(bytes);
        }
      }]);
      return EnumDescriptorProto;
    }(pb_1.Message);

    _protobuf.EnumDescriptorProto = EnumDescriptorProto;

    (function (_EnumDescriptorProto) {
      var EnumReservedRange = /*#__PURE__*/function (_pb_1$Message10) {
        (0, _inherits2["default"])(EnumReservedRange, _pb_1$Message10);

        var _super10 = _createSuper(EnumReservedRange);

        function EnumReservedRange(data) {
          var _this16;

          (0, _classCallCheck2["default"])(this, EnumReservedRange);
          _this16 = _super10.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this16), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("start" in data && data.start != undefined) {
              _this16.start = data.start;
            }

            if ("end" in data && data.end != undefined) {
              _this16.end = data.end;
            }
          }

          return _this16;
        }

        (0, _createClass2["default"])(EnumReservedRange, [{
          key: "start",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "end",
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

            if (this.start != null) {
              data.start = this.start;
            }

            if (this.end != null) {
              data.end = this.end;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined) writer.writeInt32(1, this.start);
            if (this.end !== undefined) writer.writeInt32(2, this.end);
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
            var message = new EnumReservedRange({});

            if (data.start != null) {
              message.start = data.start;
            }

            if (data.end != null) {
              message.end = data.end;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new EnumReservedRange();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.start = reader.readInt32();
                  break;

                case 2:
                  message.end = reader.readInt32();
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
            return EnumReservedRange.deserialize(bytes);
          }
        }]);
        return EnumReservedRange;
      }(pb_1.Message);

      _EnumDescriptorProto.EnumReservedRange = EnumReservedRange;
    })(EnumDescriptorProto || (EnumDescriptorProto = _protobuf.EnumDescriptorProto || (_protobuf.EnumDescriptorProto = {})));

    var EnumValueDescriptorProto = /*#__PURE__*/function (_pb_1$Message11) {
      (0, _inherits2["default"])(EnumValueDescriptorProto, _pb_1$Message11);

      var _super11 = _createSuper(EnumValueDescriptorProto);

      function EnumValueDescriptorProto(data) {
        var _this17;

        (0, _classCallCheck2["default"])(this, EnumValueDescriptorProto);
        _this17 = _super11.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this17), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this17.name = data.name;
          }

          if ("number" in data && data.number != undefined) {
            _this17.number = data.number;
          }

          if ("options" in data && data.options != undefined) {
            _this17.options = data.options;
          }
        }

        return _this17;
      }

      (0, _createClass2["default"])(EnumValueDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "number",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, EnumValueOptions, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
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

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.number != null) {
            data.number = this.number;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this18 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.number !== undefined) writer.writeInt32(2, this.number);
          if (this.options !== undefined) writer.writeMessage(3, this.options, function () {
            return _this18.options.serialize(writer);
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
          var message = new EnumValueDescriptorProto({});

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.number != null) {
            message.number = data.number;
          }

          if (data.options != null) {
            message.options = EnumValueOptions.fromObject(data.options);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EnumValueDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                message.number = reader.readInt32();
                break;

              case 3:
                reader.readMessage(message.options, function () {
                  return message.options = EnumValueOptions.deserialize(reader);
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
          return EnumValueDescriptorProto.deserialize(bytes);
        }
      }]);
      return EnumValueDescriptorProto;
    }(pb_1.Message);

    _protobuf.EnumValueDescriptorProto = EnumValueDescriptorProto;

    var ServiceDescriptorProto = /*#__PURE__*/function (_pb_1$Message12) {
      (0, _inherits2["default"])(ServiceDescriptorProto, _pb_1$Message12);

      var _super12 = _createSuper(ServiceDescriptorProto);

      function ServiceDescriptorProto(data) {
        var _this19;

        (0, _classCallCheck2["default"])(this, ServiceDescriptorProto);
        _this19 = _super12.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this19), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this19.name = data.name;
          }

          _this19.method = data.method;

          if ("options" in data && data.options != undefined) {
            _this19.options = data.options;
          }
        }

        return _this19;
      }

      (0, _createClass2["default"])(ServiceDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "method",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, MethodDescriptorProto, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, ServiceOptions, 3);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 3, value);
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
          var data = {
            method: this.method.map(function (item) {
              return item.toObject();
            })
          };

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this20 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (this.method !== undefined) writer.writeRepeatedMessage(2, this.method, function (item) {
            return item.serialize(writer);
          });
          if (this.options !== undefined) writer.writeMessage(3, this.options, function () {
            return _this20.options.serialize(writer);
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
          var message = new ServiceDescriptorProto({
            method: data.method.map(function (item) {
              return MethodDescriptorProto.fromObject(item);
            })
          });

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.options != null) {
            message.options = ServiceOptions.fromObject(data.options);
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ServiceDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                reader.readMessage(message.method, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, MethodDescriptorProto.deserialize(reader), MethodDescriptorProto);
                });
                break;

              case 3:
                reader.readMessage(message.options, function () {
                  return message.options = ServiceOptions.deserialize(reader);
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
          return ServiceDescriptorProto.deserialize(bytes);
        }
      }]);
      return ServiceDescriptorProto;
    }(pb_1.Message);

    _protobuf.ServiceDescriptorProto = ServiceDescriptorProto;

    var MethodDescriptorProto = /*#__PURE__*/function (_pb_1$Message13) {
      (0, _inherits2["default"])(MethodDescriptorProto, _pb_1$Message13);

      var _super13 = _createSuper(MethodDescriptorProto);

      function MethodDescriptorProto(data) {
        var _this21;

        (0, _classCallCheck2["default"])(this, MethodDescriptorProto);
        _this21 = _super13.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this21), Array.isArray(data) ? data : [], 0, -1, [], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("name" in data && data.name != undefined) {
            _this21.name = data.name;
          }

          if ("input_type" in data && data.input_type != undefined) {
            _this21.input_type = data.input_type;
          }

          if ("output_type" in data && data.output_type != undefined) {
            _this21.output_type = data.output_type;
          }

          if ("options" in data && data.options != undefined) {
            _this21.options = data.options;
          }

          if ("client_streaming" in data && data.client_streaming != undefined) {
            _this21.client_streaming = data.client_streaming;
          }

          if ("server_streaming" in data && data.server_streaming != undefined) {
            _this21.server_streaming = data.server_streaming;
          }
        }

        return _this21;
      }

      (0, _createClass2["default"])(MethodDescriptorProto, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "input_type",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "output_type",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "options",
        get: function get() {
          return pb_1.Message.getWrapperField(this, MethodOptions, 4);
        },
        set: function set(value) {
          pb_1.Message.setWrapperField(this, 4, value);
        }
      }, {
        key: "client_streaming",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 5, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "server_streaming",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 6, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
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

          if (this.name != null) {
            data.name = this.name;
          }

          if (this.input_type != null) {
            data.input_type = this.input_type;
          }

          if (this.output_type != null) {
            data.output_type = this.output_type;
          }

          if (this.options != null) {
            data.options = this.options.toObject();
          }

          if (this.client_streaming != null) {
            data.client_streaming = this.client_streaming;
          }

          if (this.server_streaming != null) {
            data.server_streaming = this.server_streaming;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var _this22 = this;

          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.name === "string" && this.name.length) writer.writeString(1, this.name);
          if (typeof this.input_type === "string" && this.input_type.length) writer.writeString(2, this.input_type);
          if (typeof this.output_type === "string" && this.output_type.length) writer.writeString(3, this.output_type);
          if (this.options !== undefined) writer.writeMessage(4, this.options, function () {
            return _this22.options.serialize(writer);
          });
          if (this.client_streaming !== undefined) writer.writeBool(5, this.client_streaming);
          if (this.server_streaming !== undefined) writer.writeBool(6, this.server_streaming);
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
          var message = new MethodDescriptorProto({});

          if (data.name != null) {
            message.name = data.name;
          }

          if (data.input_type != null) {
            message.input_type = data.input_type;
          }

          if (data.output_type != null) {
            message.output_type = data.output_type;
          }

          if (data.options != null) {
            message.options = MethodOptions.fromObject(data.options);
          }

          if (data.client_streaming != null) {
            message.client_streaming = data.client_streaming;
          }

          if (data.server_streaming != null) {
            message.server_streaming = data.server_streaming;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MethodDescriptorProto();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.name = reader.readString();
                break;

              case 2:
                message.input_type = reader.readString();
                break;

              case 3:
                message.output_type = reader.readString();
                break;

              case 4:
                reader.readMessage(message.options, function () {
                  return message.options = MethodOptions.deserialize(reader);
                });
                break;

              case 5:
                message.client_streaming = reader.readBool();
                break;

              case 6:
                message.server_streaming = reader.readBool();
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
          return MethodDescriptorProto.deserialize(bytes);
        }
      }]);
      return MethodDescriptorProto;
    }(pb_1.Message);

    _protobuf.MethodDescriptorProto = MethodDescriptorProto;

    var FileOptions = /*#__PURE__*/function (_pb_1$Message14) {
      (0, _inherits2["default"])(FileOptions, _pb_1$Message14);

      var _super14 = _createSuper(FileOptions);

      function FileOptions(data) {
        var _this23;

        (0, _classCallCheck2["default"])(this, FileOptions);
        _this23 = _super14.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this23), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("java_package" in data && data.java_package != undefined) {
            _this23.java_package = data.java_package;
          }

          if ("java_outer_classname" in data && data.java_outer_classname != undefined) {
            _this23.java_outer_classname = data.java_outer_classname;
          }

          if ("java_multiple_files" in data && data.java_multiple_files != undefined) {
            _this23.java_multiple_files = data.java_multiple_files;
          }

          if ("java_generate_equals_and_hash" in data && data.java_generate_equals_and_hash != undefined) {
            _this23.java_generate_equals_and_hash = data.java_generate_equals_and_hash;
          }

          if ("java_string_check_utf8" in data && data.java_string_check_utf8 != undefined) {
            _this23.java_string_check_utf8 = data.java_string_check_utf8;
          }

          if ("optimize_for" in data && data.optimize_for != undefined) {
            _this23.optimize_for = data.optimize_for;
          }

          if ("go_package" in data && data.go_package != undefined) {
            _this23.go_package = data.go_package;
          }

          if ("cc_generic_services" in data && data.cc_generic_services != undefined) {
            _this23.cc_generic_services = data.cc_generic_services;
          }

          if ("java_generic_services" in data && data.java_generic_services != undefined) {
            _this23.java_generic_services = data.java_generic_services;
          }

          if ("py_generic_services" in data && data.py_generic_services != undefined) {
            _this23.py_generic_services = data.py_generic_services;
          }

          if ("php_generic_services" in data && data.php_generic_services != undefined) {
            _this23.php_generic_services = data.php_generic_services;
          }

          if ("deprecated" in data && data.deprecated != undefined) {
            _this23.deprecated = data.deprecated;
          }

          if ("cc_enable_arenas" in data && data.cc_enable_arenas != undefined) {
            _this23.cc_enable_arenas = data.cc_enable_arenas;
          }

          if ("objc_class_prefix" in data && data.objc_class_prefix != undefined) {
            _this23.objc_class_prefix = data.objc_class_prefix;
          }

          if ("csharp_namespace" in data && data.csharp_namespace != undefined) {
            _this23.csharp_namespace = data.csharp_namespace;
          }

          if ("swift_prefix" in data && data.swift_prefix != undefined) {
            _this23.swift_prefix = data.swift_prefix;
          }

          if ("php_class_prefix" in data && data.php_class_prefix != undefined) {
            _this23.php_class_prefix = data.php_class_prefix;
          }

          if ("php_namespace" in data && data.php_namespace != undefined) {
            _this23.php_namespace = data.php_namespace;
          }

          if ("php_metadata_namespace" in data && data.php_metadata_namespace != undefined) {
            _this23.php_metadata_namespace = data.php_metadata_namespace;
          }

          if ("ruby_package" in data && data.ruby_package != undefined) {
            _this23.ruby_package = data.ruby_package;
          }

          _this23.uninterpreted_option = data.uninterpreted_option;
        }

        return _this23;
      }

      (0, _createClass2["default"])(FileOptions, [{
        key: "java_package",
        get: function get() {
          return pb_1.Message.getField(this, 1);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "java_outer_classname",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "java_multiple_files",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 10, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
        /** @deprecated*/

      }, {
        key: "java_generate_equals_and_hash",
        get:
        /** @deprecated*/
        function get() {
          return pb_1.Message.getField(this, 20);
        }
        /** @deprecated*/
        ,
        set:
        /** @deprecated*/
        function set(value) {
          pb_1.Message.setField(this, 20, value);
        }
      }, {
        key: "java_string_check_utf8",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 27, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 27, value);
        }
      }, {
        key: "optimize_for",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 9, FileOptions.OptimizeMode.SPEED);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 9, value);
        }
      }, {
        key: "go_package",
        get: function get() {
          return pb_1.Message.getField(this, 11);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 11, value);
        }
      }, {
        key: "cc_generic_services",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 16, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 16, value);
        }
      }, {
        key: "java_generic_services",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 17, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 17, value);
        }
      }, {
        key: "py_generic_services",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 18, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 18, value);
        }
      }, {
        key: "php_generic_services",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 42, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 42, value);
        }
      }, {
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 23, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 23, value);
        }
      }, {
        key: "cc_enable_arenas",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 31, true);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 31, value);
        }
      }, {
        key: "objc_class_prefix",
        get: function get() {
          return pb_1.Message.getField(this, 36);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 36, value);
        }
      }, {
        key: "csharp_namespace",
        get: function get() {
          return pb_1.Message.getField(this, 37);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 37, value);
        }
      }, {
        key: "swift_prefix",
        get: function get() {
          return pb_1.Message.getField(this, 39);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 39, value);
        }
      }, {
        key: "php_class_prefix",
        get: function get() {
          return pb_1.Message.getField(this, 40);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 40, value);
        }
      }, {
        key: "php_namespace",
        get: function get() {
          return pb_1.Message.getField(this, 41);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 41, value);
        }
      }, {
        key: "php_metadata_namespace",
        get: function get() {
          return pb_1.Message.getField(this, 44);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 44, value);
        }
      }, {
        key: "ruby_package",
        get: function get() {
          return pb_1.Message.getField(this, 45);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 45, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.java_package != null) {
            data.java_package = this.java_package;
          }

          if (this.java_outer_classname != null) {
            data.java_outer_classname = this.java_outer_classname;
          }

          if (this.java_multiple_files != null) {
            data.java_multiple_files = this.java_multiple_files;
          }

          if (this.java_generate_equals_and_hash != null) {
            data.java_generate_equals_and_hash = this.java_generate_equals_and_hash;
          }

          if (this.java_string_check_utf8 != null) {
            data.java_string_check_utf8 = this.java_string_check_utf8;
          }

          if (this.optimize_for != null) {
            data.optimize_for = this.optimize_for;
          }

          if (this.go_package != null) {
            data.go_package = this.go_package;
          }

          if (this.cc_generic_services != null) {
            data.cc_generic_services = this.cc_generic_services;
          }

          if (this.java_generic_services != null) {
            data.java_generic_services = this.java_generic_services;
          }

          if (this.py_generic_services != null) {
            data.py_generic_services = this.py_generic_services;
          }

          if (this.php_generic_services != null) {
            data.php_generic_services = this.php_generic_services;
          }

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          if (this.cc_enable_arenas != null) {
            data.cc_enable_arenas = this.cc_enable_arenas;
          }

          if (this.objc_class_prefix != null) {
            data.objc_class_prefix = this.objc_class_prefix;
          }

          if (this.csharp_namespace != null) {
            data.csharp_namespace = this.csharp_namespace;
          }

          if (this.swift_prefix != null) {
            data.swift_prefix = this.swift_prefix;
          }

          if (this.php_class_prefix != null) {
            data.php_class_prefix = this.php_class_prefix;
          }

          if (this.php_namespace != null) {
            data.php_namespace = this.php_namespace;
          }

          if (this.php_metadata_namespace != null) {
            data.php_metadata_namespace = this.php_metadata_namespace;
          }

          if (this.ruby_package != null) {
            data.ruby_package = this.ruby_package;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (typeof this.java_package === "string" && this.java_package.length) writer.writeString(1, this.java_package);
          if (typeof this.java_outer_classname === "string" && this.java_outer_classname.length) writer.writeString(8, this.java_outer_classname);
          if (this.java_multiple_files !== undefined) writer.writeBool(10, this.java_multiple_files);
          if (this.java_generate_equals_and_hash !== undefined) writer.writeBool(20, this.java_generate_equals_and_hash);
          if (this.java_string_check_utf8 !== undefined) writer.writeBool(27, this.java_string_check_utf8);
          if (this.optimize_for !== undefined) writer.writeEnum(9, this.optimize_for);
          if (typeof this.go_package === "string" && this.go_package.length) writer.writeString(11, this.go_package);
          if (this.cc_generic_services !== undefined) writer.writeBool(16, this.cc_generic_services);
          if (this.java_generic_services !== undefined) writer.writeBool(17, this.java_generic_services);
          if (this.py_generic_services !== undefined) writer.writeBool(18, this.py_generic_services);
          if (this.php_generic_services !== undefined) writer.writeBool(42, this.php_generic_services);
          if (this.deprecated !== undefined) writer.writeBool(23, this.deprecated);
          if (this.cc_enable_arenas !== undefined) writer.writeBool(31, this.cc_enable_arenas);
          if (typeof this.objc_class_prefix === "string" && this.objc_class_prefix.length) writer.writeString(36, this.objc_class_prefix);
          if (typeof this.csharp_namespace === "string" && this.csharp_namespace.length) writer.writeString(37, this.csharp_namespace);
          if (typeof this.swift_prefix === "string" && this.swift_prefix.length) writer.writeString(39, this.swift_prefix);
          if (typeof this.php_class_prefix === "string" && this.php_class_prefix.length) writer.writeString(40, this.php_class_prefix);
          if (typeof this.php_namespace === "string" && this.php_namespace.length) writer.writeString(41, this.php_namespace);
          if (typeof this.php_metadata_namespace === "string" && this.php_metadata_namespace.length) writer.writeString(44, this.php_metadata_namespace);
          if (typeof this.ruby_package === "string" && this.ruby_package.length) writer.writeString(45, this.ruby_package);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new FileOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.java_package != null) {
            message.java_package = data.java_package;
          }

          if (data.java_outer_classname != null) {
            message.java_outer_classname = data.java_outer_classname;
          }

          if (data.java_multiple_files != null) {
            message.java_multiple_files = data.java_multiple_files;
          }

          if (data.java_generate_equals_and_hash != null) {
            message.java_generate_equals_and_hash = data.java_generate_equals_and_hash;
          }

          if (data.java_string_check_utf8 != null) {
            message.java_string_check_utf8 = data.java_string_check_utf8;
          }

          if (data.optimize_for != null) {
            message.optimize_for = data.optimize_for;
          }

          if (data.go_package != null) {
            message.go_package = data.go_package;
          }

          if (data.cc_generic_services != null) {
            message.cc_generic_services = data.cc_generic_services;
          }

          if (data.java_generic_services != null) {
            message.java_generic_services = data.java_generic_services;
          }

          if (data.py_generic_services != null) {
            message.py_generic_services = data.py_generic_services;
          }

          if (data.php_generic_services != null) {
            message.php_generic_services = data.php_generic_services;
          }

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          if (data.cc_enable_arenas != null) {
            message.cc_enable_arenas = data.cc_enable_arenas;
          }

          if (data.objc_class_prefix != null) {
            message.objc_class_prefix = data.objc_class_prefix;
          }

          if (data.csharp_namespace != null) {
            message.csharp_namespace = data.csharp_namespace;
          }

          if (data.swift_prefix != null) {
            message.swift_prefix = data.swift_prefix;
          }

          if (data.php_class_prefix != null) {
            message.php_class_prefix = data.php_class_prefix;
          }

          if (data.php_namespace != null) {
            message.php_namespace = data.php_namespace;
          }

          if (data.php_metadata_namespace != null) {
            message.php_metadata_namespace = data.php_metadata_namespace;
          }

          if (data.ruby_package != null) {
            message.ruby_package = data.ruby_package;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new FileOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.java_package = reader.readString();
                break;

              case 8:
                message.java_outer_classname = reader.readString();
                break;

              case 10:
                message.java_multiple_files = reader.readBool();
                break;

              case 20:
                message.java_generate_equals_and_hash = reader.readBool();
                break;

              case 27:
                message.java_string_check_utf8 = reader.readBool();
                break;

              case 9:
                message.optimize_for = reader.readEnum();
                break;

              case 11:
                message.go_package = reader.readString();
                break;

              case 16:
                message.cc_generic_services = reader.readBool();
                break;

              case 17:
                message.java_generic_services = reader.readBool();
                break;

              case 18:
                message.py_generic_services = reader.readBool();
                break;

              case 42:
                message.php_generic_services = reader.readBool();
                break;

              case 23:
                message.deprecated = reader.readBool();
                break;

              case 31:
                message.cc_enable_arenas = reader.readBool();
                break;

              case 36:
                message.objc_class_prefix = reader.readString();
                break;

              case 37:
                message.csharp_namespace = reader.readString();
                break;

              case 39:
                message.swift_prefix = reader.readString();
                break;

              case 40:
                message.php_class_prefix = reader.readString();
                break;

              case 41:
                message.php_namespace = reader.readString();
                break;

              case 44:
                message.php_metadata_namespace = reader.readString();
                break;

              case 45:
                message.ruby_package = reader.readString();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return FileOptions.deserialize(bytes);
        }
      }]);
      return FileOptions;
    }(pb_1.Message);

    _protobuf.FileOptions = FileOptions;

    (function (_FileOptions) {
      var OptimizeMode;

      (function (OptimizeMode) {
        OptimizeMode[OptimizeMode["SPEED"] = 1] = "SPEED";
        OptimizeMode[OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
        OptimizeMode[OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
      })(OptimizeMode || (OptimizeMode = {}));

      _FileOptions.OptimizeMode = OptimizeMode;
    })(FileOptions || (FileOptions = _protobuf.FileOptions || (_protobuf.FileOptions = {})));

    var MessageOptions = /*#__PURE__*/function (_pb_1$Message15) {
      (0, _inherits2["default"])(MessageOptions, _pb_1$Message15);

      var _super15 = _createSuper(MessageOptions);

      function MessageOptions(data) {
        var _this24;

        (0, _classCallCheck2["default"])(this, MessageOptions);
        _this24 = _super15.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this24), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("message_set_wire_format" in data && data.message_set_wire_format != undefined) {
            _this24.message_set_wire_format = data.message_set_wire_format;
          }

          if ("no_standard_descriptor_accessor" in data && data.no_standard_descriptor_accessor != undefined) {
            _this24.no_standard_descriptor_accessor = data.no_standard_descriptor_accessor;
          }

          if ("deprecated" in data && data.deprecated != undefined) {
            _this24.deprecated = data.deprecated;
          }

          if ("map_entry" in data && data.map_entry != undefined) {
            _this24.map_entry = data.map_entry;
          }

          _this24.uninterpreted_option = data.uninterpreted_option;
        }

        return _this24;
      }

      (0, _createClass2["default"])(MessageOptions, [{
        key: "message_set_wire_format",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 1, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "no_standard_descriptor_accessor",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 2, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 3, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "map_entry",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.message_set_wire_format != null) {
            data.message_set_wire_format = this.message_set_wire_format;
          }

          if (this.no_standard_descriptor_accessor != null) {
            data.no_standard_descriptor_accessor = this.no_standard_descriptor_accessor;
          }

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          if (this.map_entry != null) {
            data.map_entry = this.map_entry;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.message_set_wire_format !== undefined) writer.writeBool(1, this.message_set_wire_format);
          if (this.no_standard_descriptor_accessor !== undefined) writer.writeBool(2, this.no_standard_descriptor_accessor);
          if (this.deprecated !== undefined) writer.writeBool(3, this.deprecated);
          if (this.map_entry !== undefined) writer.writeBool(7, this.map_entry);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new MessageOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.message_set_wire_format != null) {
            message.message_set_wire_format = data.message_set_wire_format;
          }

          if (data.no_standard_descriptor_accessor != null) {
            message.no_standard_descriptor_accessor = data.no_standard_descriptor_accessor;
          }

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          if (data.map_entry != null) {
            message.map_entry = data.map_entry;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MessageOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.message_set_wire_format = reader.readBool();
                break;

              case 2:
                message.no_standard_descriptor_accessor = reader.readBool();
                break;

              case 3:
                message.deprecated = reader.readBool();
                break;

              case 7:
                message.map_entry = reader.readBool();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return MessageOptions.deserialize(bytes);
        }
      }]);
      return MessageOptions;
    }(pb_1.Message);

    _protobuf.MessageOptions = MessageOptions;

    var FieldOptions = /*#__PURE__*/function (_pb_1$Message16) {
      (0, _inherits2["default"])(FieldOptions, _pb_1$Message16);

      var _super16 = _createSuper(FieldOptions);

      function FieldOptions(data) {
        var _this25;

        (0, _classCallCheck2["default"])(this, FieldOptions);
        _this25 = _super16.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this25), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("ctype" in data && data.ctype != undefined) {
            _this25.ctype = data.ctype;
          }

          if ("packed" in data && data.packed != undefined) {
            _this25.packed = data.packed;
          }

          if ("jstype" in data && data.jstype != undefined) {
            _this25.jstype = data.jstype;
          }

          if ("lazy" in data && data.lazy != undefined) {
            _this25.lazy = data.lazy;
          }

          if ("deprecated" in data && data.deprecated != undefined) {
            _this25.deprecated = data.deprecated;
          }

          if ("weak" in data && data.weak != undefined) {
            _this25.weak = data.weak;
          }

          _this25.uninterpreted_option = data.uninterpreted_option;
        }

        return _this25;
      }

      (0, _createClass2["default"])(FieldOptions, [{
        key: "ctype",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 1, FieldOptions.CType.STRING);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "packed",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "jstype",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 6, FieldOptions.JSType.JS_NORMAL);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "lazy",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 5, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 3, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "weak",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 10, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 10, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.ctype != null) {
            data.ctype = this.ctype;
          }

          if (this.packed != null) {
            data.packed = this.packed;
          }

          if (this.jstype != null) {
            data.jstype = this.jstype;
          }

          if (this.lazy != null) {
            data.lazy = this.lazy;
          }

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          if (this.weak != null) {
            data.weak = this.weak;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.ctype !== undefined) writer.writeEnum(1, this.ctype);
          if (this.packed !== undefined) writer.writeBool(2, this.packed);
          if (this.jstype !== undefined) writer.writeEnum(6, this.jstype);
          if (this.lazy !== undefined) writer.writeBool(5, this.lazy);
          if (this.deprecated !== undefined) writer.writeBool(3, this.deprecated);
          if (this.weak !== undefined) writer.writeBool(10, this.weak);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new FieldOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.ctype != null) {
            message.ctype = data.ctype;
          }

          if (data.packed != null) {
            message.packed = data.packed;
          }

          if (data.jstype != null) {
            message.jstype = data.jstype;
          }

          if (data.lazy != null) {
            message.lazy = data.lazy;
          }

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          if (data.weak != null) {
            message.weak = data.weak;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new FieldOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.ctype = reader.readEnum();
                break;

              case 2:
                message.packed = reader.readBool();
                break;

              case 6:
                message.jstype = reader.readEnum();
                break;

              case 5:
                message.lazy = reader.readBool();
                break;

              case 3:
                message.deprecated = reader.readBool();
                break;

              case 10:
                message.weak = reader.readBool();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return FieldOptions.deserialize(bytes);
        }
      }]);
      return FieldOptions;
    }(pb_1.Message);

    _protobuf.FieldOptions = FieldOptions;

    (function (_FieldOptions) {
      var CType;

      (function (CType) {
        CType[CType["STRING"] = 0] = "STRING";
        CType[CType["CORD"] = 1] = "CORD";
        CType[CType["STRING_PIECE"] = 2] = "STRING_PIECE";
      })(CType || (CType = {}));

      _FieldOptions.CType = CType;
      var JSType;

      (function (JSType) {
        JSType[JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
        JSType[JSType["JS_STRING"] = 1] = "JS_STRING";
        JSType[JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
      })(JSType || (JSType = {}));

      _FieldOptions.JSType = JSType;
    })(FieldOptions || (FieldOptions = _protobuf.FieldOptions || (_protobuf.FieldOptions = {})));

    var OneofOptions = /*#__PURE__*/function (_pb_1$Message17) {
      (0, _inherits2["default"])(OneofOptions, _pb_1$Message17);

      var _super17 = _createSuper(OneofOptions);

      function OneofOptions(data) {
        var _this26;

        (0, _classCallCheck2["default"])(this, OneofOptions);
        _this26 = _super17.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this26), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this26.uninterpreted_option = data.uninterpreted_option;
        }

        return _this26;
      }

      (0, _createClass2["default"])(OneofOptions, [{
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };
          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new OneofOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new OneofOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return OneofOptions.deserialize(bytes);
        }
      }]);
      return OneofOptions;
    }(pb_1.Message);

    _protobuf.OneofOptions = OneofOptions;

    var EnumOptions = /*#__PURE__*/function (_pb_1$Message18) {
      (0, _inherits2["default"])(EnumOptions, _pb_1$Message18);

      var _super18 = _createSuper(EnumOptions);

      function EnumOptions(data) {
        var _this27;

        (0, _classCallCheck2["default"])(this, EnumOptions);
        _this27 = _super18.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this27), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("allow_alias" in data && data.allow_alias != undefined) {
            _this27.allow_alias = data.allow_alias;
          }

          if ("deprecated" in data && data.deprecated != undefined) {
            _this27.deprecated = data.deprecated;
          }

          _this27.uninterpreted_option = data.uninterpreted_option;
        }

        return _this27;
      }

      (0, _createClass2["default"])(EnumOptions, [{
        key: "allow_alias",
        get: function get() {
          return pb_1.Message.getField(this, 2);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 2, value);
        }
      }, {
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 3, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.allow_alias != null) {
            data.allow_alias = this.allow_alias;
          }

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.allow_alias !== undefined) writer.writeBool(2, this.allow_alias);
          if (this.deprecated !== undefined) writer.writeBool(3, this.deprecated);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new EnumOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.allow_alias != null) {
            message.allow_alias = data.allow_alias;
          }

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EnumOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 2:
                message.allow_alias = reader.readBool();
                break;

              case 3:
                message.deprecated = reader.readBool();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return EnumOptions.deserialize(bytes);
        }
      }]);
      return EnumOptions;
    }(pb_1.Message);

    _protobuf.EnumOptions = EnumOptions;

    var EnumValueOptions = /*#__PURE__*/function (_pb_1$Message19) {
      (0, _inherits2["default"])(EnumValueOptions, _pb_1$Message19);

      var _super19 = _createSuper(EnumValueOptions);

      function EnumValueOptions(data) {
        var _this28;

        (0, _classCallCheck2["default"])(this, EnumValueOptions);
        _this28 = _super19.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this28), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("deprecated" in data && data.deprecated != undefined) {
            _this28.deprecated = data.deprecated;
          }

          _this28.uninterpreted_option = data.uninterpreted_option;
        }

        return _this28;
      }

      (0, _createClass2["default"])(EnumValueOptions, [{
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 1, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 1, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.deprecated !== undefined) writer.writeBool(1, this.deprecated);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new EnumValueOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new EnumValueOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                message.deprecated = reader.readBool();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return EnumValueOptions.deserialize(bytes);
        }
      }]);
      return EnumValueOptions;
    }(pb_1.Message);

    _protobuf.EnumValueOptions = EnumValueOptions;

    var ServiceOptions = /*#__PURE__*/function (_pb_1$Message20) {
      (0, _inherits2["default"])(ServiceOptions, _pb_1$Message20);

      var _super20 = _createSuper(ServiceOptions);

      function ServiceOptions(data) {
        var _this29;

        (0, _classCallCheck2["default"])(this, ServiceOptions);
        _this29 = _super20.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this29), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("deprecated" in data && data.deprecated != undefined) {
            _this29.deprecated = data.deprecated;
          }

          _this29.uninterpreted_option = data.uninterpreted_option;
        }

        return _this29;
      }

      (0, _createClass2["default"])(ServiceOptions, [{
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 33, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 33, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.deprecated !== undefined) writer.writeBool(33, this.deprecated);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new ServiceOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new ServiceOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 33:
                message.deprecated = reader.readBool();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return ServiceOptions.deserialize(bytes);
        }
      }]);
      return ServiceOptions;
    }(pb_1.Message);

    _protobuf.ServiceOptions = ServiceOptions;

    var MethodOptions = /*#__PURE__*/function (_pb_1$Message21) {
      (0, _inherits2["default"])(MethodOptions, _pb_1$Message21);

      var _super21 = _createSuper(MethodOptions);

      function MethodOptions(data) {
        var _this30;

        (0, _classCallCheck2["default"])(this, MethodOptions);
        _this30 = _super21.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this30), Array.isArray(data) ? data : [], 0, -1, [999], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          if ("deprecated" in data && data.deprecated != undefined) {
            _this30.deprecated = data.deprecated;
          }

          if ("idempotency_level" in data && data.idempotency_level != undefined) {
            _this30.idempotency_level = data.idempotency_level;
          }

          _this30.uninterpreted_option = data.uninterpreted_option;
        }

        return _this30;
      }

      (0, _createClass2["default"])(MethodOptions, [{
        key: "deprecated",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 33, false);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 33, value);
        }
      }, {
        key: "idempotency_level",
        get: function get() {
          return pb_1.Message.getFieldWithDefault(this, 34, MethodOptions.IdempotencyLevel.IDEMPOTENCY_UNKNOWN);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 34, value);
        }
      }, {
        key: "uninterpreted_option",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 999, value);
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
          var data = {
            uninterpreted_option: this.uninterpreted_option.map(function (item) {
              return item.toObject();
            })
          };

          if (this.deprecated != null) {
            data.deprecated = this.deprecated;
          }

          if (this.idempotency_level != null) {
            data.idempotency_level = this.idempotency_level;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.deprecated !== undefined) writer.writeBool(33, this.deprecated);
          if (this.idempotency_level !== undefined) writer.writeEnum(34, this.idempotency_level);
          if (this.uninterpreted_option !== undefined) writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) {
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
          var message = new MethodOptions({
            uninterpreted_option: data.uninterpreted_option.map(function (item) {
              return UninterpretedOption.fromObject(item);
            })
          });

          if (data.deprecated != null) {
            message.deprecated = data.deprecated;
          }

          if (data.idempotency_level != null) {
            message.idempotency_level = data.idempotency_level;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new MethodOptions();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 33:
                message.deprecated = reader.readBool();
                break;

              case 34:
                message.idempotency_level = reader.readEnum();
                break;

              case 999:
                reader.readMessage(message.uninterpreted_option, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption);
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
          return MethodOptions.deserialize(bytes);
        }
      }]);
      return MethodOptions;
    }(pb_1.Message);

    _protobuf.MethodOptions = MethodOptions;

    (function (_MethodOptions) {
      var IdempotencyLevel;

      (function (IdempotencyLevel) {
        IdempotencyLevel[IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
        IdempotencyLevel[IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
        IdempotencyLevel[IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
      })(IdempotencyLevel || (IdempotencyLevel = {}));

      _MethodOptions.IdempotencyLevel = IdempotencyLevel;
    })(MethodOptions || (MethodOptions = _protobuf.MethodOptions || (_protobuf.MethodOptions = {})));

    var UninterpretedOption = /*#__PURE__*/function (_pb_1$Message22) {
      (0, _inherits2["default"])(UninterpretedOption, _pb_1$Message22);

      var _super22 = _createSuper(UninterpretedOption);

      function UninterpretedOption(data) {
        var _this31;

        (0, _classCallCheck2["default"])(this, UninterpretedOption);
        _this31 = _super22.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this31), Array.isArray(data) ? data : [], 0, -1, [2], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this31.name = data.name;

          if ("identifier_value" in data && data.identifier_value != undefined) {
            _this31.identifier_value = data.identifier_value;
          }

          if ("positive_int_value" in data && data.positive_int_value != undefined) {
            _this31.positive_int_value = data.positive_int_value;
          }

          if ("negative_int_value" in data && data.negative_int_value != undefined) {
            _this31.negative_int_value = data.negative_int_value;
          }

          if ("double_value" in data && data.double_value != undefined) {
            _this31.double_value = data.double_value;
          }

          if ("string_value" in data && data.string_value != undefined) {
            _this31.string_value = data.string_value;
          }

          if ("aggregate_value" in data && data.aggregate_value != undefined) {
            _this31.aggregate_value = data.aggregate_value;
          }
        }

        return _this31;
      }

      (0, _createClass2["default"])(UninterpretedOption, [{
        key: "name",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption.NamePart, 2);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
      }, {
        key: "identifier_value",
        get: function get() {
          return pb_1.Message.getField(this, 3);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 3, value);
        }
      }, {
        key: "positive_int_value",
        get: function get() {
          return pb_1.Message.getField(this, 4);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 4, value);
        }
      }, {
        key: "negative_int_value",
        get: function get() {
          return pb_1.Message.getField(this, 5);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 5, value);
        }
      }, {
        key: "double_value",
        get: function get() {
          return pb_1.Message.getField(this, 6);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 6, value);
        }
      }, {
        key: "string_value",
        get: function get() {
          return pb_1.Message.getField(this, 7);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 7, value);
        }
      }, {
        key: "aggregate_value",
        get: function get() {
          return pb_1.Message.getField(this, 8);
        },
        set: function set(value) {
          pb_1.Message.setField(this, 8, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject20) {
          function toObject() {
            return _toObject20.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject20.toString();
          };

          return toObject;
        }(function () {
          var data = {
            name: this.name.map(function (item) {
              return item.toObject();
            })
          };

          if (this.identifier_value != null) {
            data.identifier_value = this.identifier_value;
          }

          if (this.positive_int_value != null) {
            data.positive_int_value = this.positive_int_value;
          }

          if (this.negative_int_value != null) {
            data.negative_int_value = this.negative_int_value;
          }

          if (this.double_value != null) {
            data.double_value = this.double_value;
          }

          if (this.string_value != null) {
            data.string_value = this.string_value;
          }

          if (this.aggregate_value != null) {
            data.aggregate_value = this.aggregate_value;
          }

          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.name !== undefined) writer.writeRepeatedMessage(2, this.name, function (item) {
            return item.serialize(writer);
          });
          if (typeof this.identifier_value === "string" && this.identifier_value.length) writer.writeString(3, this.identifier_value);
          if (this.positive_int_value !== undefined) writer.writeUint64(4, this.positive_int_value);
          if (this.negative_int_value !== undefined) writer.writeInt64(5, this.negative_int_value);
          if (this.double_value !== undefined) writer.writeDouble(6, this.double_value);
          if (this.string_value !== undefined) writer.writeBytes(7, this.string_value);
          if (typeof this.aggregate_value === "string" && this.aggregate_value.length) writer.writeString(8, this.aggregate_value);
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
          var message = new UninterpretedOption({
            name: data.name.map(function (item) {
              return UninterpretedOption.NamePart.fromObject(item);
            })
          });

          if (data.identifier_value != null) {
            message.identifier_value = data.identifier_value;
          }

          if (data.positive_int_value != null) {
            message.positive_int_value = data.positive_int_value;
          }

          if (data.negative_int_value != null) {
            message.negative_int_value = data.negative_int_value;
          }

          if (data.double_value != null) {
            message.double_value = data.double_value;
          }

          if (data.string_value != null) {
            message.string_value = data.string_value;
          }

          if (data.aggregate_value != null) {
            message.aggregate_value = data.aggregate_value;
          }

          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new UninterpretedOption();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 2:
                reader.readMessage(message.name, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 2, UninterpretedOption.NamePart.deserialize(reader), UninterpretedOption.NamePart);
                });
                break;

              case 3:
                message.identifier_value = reader.readString();
                break;

              case 4:
                message.positive_int_value = reader.readUint64();
                break;

              case 5:
                message.negative_int_value = reader.readInt64();
                break;

              case 6:
                message.double_value = reader.readDouble();
                break;

              case 7:
                message.string_value = reader.readBytes();
                break;

              case 8:
                message.aggregate_value = reader.readString();
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
          return UninterpretedOption.deserialize(bytes);
        }
      }]);
      return UninterpretedOption;
    }(pb_1.Message);

    _protobuf.UninterpretedOption = UninterpretedOption;

    (function (_UninterpretedOption) {
      var NamePart = /*#__PURE__*/function (_pb_1$Message23) {
        (0, _inherits2["default"])(NamePart, _pb_1$Message23);

        var _super23 = _createSuper(NamePart);

        function NamePart(data) {
          var _this32;

          (0, _classCallCheck2["default"])(this, NamePart);
          _this32 = _super23.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this32), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            _this32.name_part = data.name_part;
            _this32.is_extension = data.is_extension;
          }

          return _this32;
        }

        (0, _createClass2["default"])(NamePart, [{
          key: "name_part",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "is_extension",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {
              name_part: this.name_part,
              is_extension: this.is_extension
            };
            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name_part === "string" && this.name_part.length) writer.writeString(1, this.name_part);
            if (this.is_extension !== undefined) writer.writeBool(2, this.is_extension);
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
            var message = new NamePart({
              name_part: data.name_part,
              is_extension: data.is_extension
            });
            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new NamePart();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.name_part = reader.readString();
                  break;

                case 2:
                  message.is_extension = reader.readBool();
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
            return NamePart.deserialize(bytes);
          }
        }]);
        return NamePart;
      }(pb_1.Message);

      _UninterpretedOption.NamePart = NamePart;
    })(UninterpretedOption || (UninterpretedOption = _protobuf.UninterpretedOption || (_protobuf.UninterpretedOption = {})));

    var SourceCodeInfo = /*#__PURE__*/function (_pb_1$Message24) {
      (0, _inherits2["default"])(SourceCodeInfo, _pb_1$Message24);

      var _super24 = _createSuper(SourceCodeInfo);

      function SourceCodeInfo(data) {
        var _this33;

        (0, _classCallCheck2["default"])(this, SourceCodeInfo);
        _this33 = _super24.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this33), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this33.location = data.location;
        }

        return _this33;
      }

      (0, _createClass2["default"])(SourceCodeInfo, [{
        key: "location",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, SourceCodeInfo.Location, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject21) {
          function toObject() {
            return _toObject21.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject21.toString();
          };

          return toObject;
        }(function () {
          var data = {
            location: this.location.map(function (item) {
              return item.toObject();
            })
          };
          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.location !== undefined) writer.writeRepeatedMessage(1, this.location, function (item) {
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
          var message = new SourceCodeInfo({
            location: data.location.map(function (item) {
              return SourceCodeInfo.Location.fromObject(item);
            })
          });
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new SourceCodeInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.location, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, SourceCodeInfo.Location.deserialize(reader), SourceCodeInfo.Location);
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
          return SourceCodeInfo.deserialize(bytes);
        }
      }]);
      return SourceCodeInfo;
    }(pb_1.Message);

    _protobuf.SourceCodeInfo = SourceCodeInfo;

    (function (_SourceCodeInfo) {
      var Location = /*#__PURE__*/function (_pb_1$Message25) {
        (0, _inherits2["default"])(Location, _pb_1$Message25);

        var _super25 = _createSuper(Location);

        function Location(data) {
          var _this34;

          (0, _classCallCheck2["default"])(this, Location);
          _this34 = _super25.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this34), Array.isArray(data) ? data : [], 0, -1, [1, 2, 6], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            _this34.path = data.path;
            _this34.span = data.span;

            if ("leading_comments" in data && data.leading_comments != undefined) {
              _this34.leading_comments = data.leading_comments;
            }

            if ("trailing_comments" in data && data.trailing_comments != undefined) {
              _this34.trailing_comments = data.trailing_comments;
            }

            _this34.leading_detached_comments = data.leading_detached_comments;
          }

          return _this34;
        }

        (0, _createClass2["default"])(Location, [{
          key: "path",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "span",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "leading_comments",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "trailing_comments",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "leading_detached_comments",
          get: function get() {
            return pb_1.Message.getField(this, 6);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 6, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {
              path: this.path,
              span: this.span,
              leading_detached_comments: this.leading_detached_comments
            };

            if (this.leading_comments != null) {
              data.leading_comments = this.leading_comments;
            }

            if (this.trailing_comments != null) {
              data.trailing_comments = this.trailing_comments;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.path !== undefined) writer.writePackedInt32(1, this.path);
            if (this.span !== undefined) writer.writePackedInt32(2, this.span);
            if (typeof this.leading_comments === "string" && this.leading_comments.length) writer.writeString(3, this.leading_comments);
            if (typeof this.trailing_comments === "string" && this.trailing_comments.length) writer.writeString(4, this.trailing_comments);
            if (this.leading_detached_comments !== undefined) writer.writeRepeatedString(6, this.leading_detached_comments);
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
            var message = new Location({
              path: data.path,
              span: data.span,
              leading_detached_comments: data.leading_detached_comments
            });

            if (data.leading_comments != null) {
              message.leading_comments = data.leading_comments;
            }

            if (data.trailing_comments != null) {
              message.trailing_comments = data.trailing_comments;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Location();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.path = reader.readPackedInt32();
                  break;

                case 2:
                  message.span = reader.readPackedInt32();
                  break;

                case 3:
                  message.leading_comments = reader.readString();
                  break;

                case 4:
                  message.trailing_comments = reader.readString();
                  break;

                case 6:
                  pb_1.Message.addToRepeatedField(message, 6, reader.readString());
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
            return Location.deserialize(bytes);
          }
        }]);
        return Location;
      }(pb_1.Message);

      _SourceCodeInfo.Location = Location;
    })(SourceCodeInfo || (SourceCodeInfo = _protobuf.SourceCodeInfo || (_protobuf.SourceCodeInfo = {})));

    var GeneratedCodeInfo = /*#__PURE__*/function (_pb_1$Message26) {
      (0, _inherits2["default"])(GeneratedCodeInfo, _pb_1$Message26);

      var _super26 = _createSuper(GeneratedCodeInfo);

      function GeneratedCodeInfo(data) {
        var _this35;

        (0, _classCallCheck2["default"])(this, GeneratedCodeInfo);
        _this35 = _super26.call(this);
        pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this35), Array.isArray(data) ? data : [], 0, -1, [1], []);

        if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
          _this35.annotation = data.annotation;
        }

        return _this35;
      }

      (0, _createClass2["default"])(GeneratedCodeInfo, [{
        key: "annotation",
        get: function get() {
          return pb_1.Message.getRepeatedWrapperField(this, GeneratedCodeInfo.Annotation, 1);
        },
        set: function set(value) {
          pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
      }, {
        key: "toObject",
        value: function (_toObject22) {
          function toObject() {
            return _toObject22.apply(this, arguments);
          }

          toObject.toString = function () {
            return _toObject22.toString();
          };

          return toObject;
        }(function () {
          var data = {
            annotation: this.annotation.map(function (item) {
              return item.toObject();
            })
          };
          return data;
        })
      }, {
        key: "serialize",
        value: function serialize(w) {
          var writer = w || new pb_1.BinaryWriter();
          if (this.annotation !== undefined) writer.writeRepeatedMessage(1, this.annotation, function (item) {
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
          var message = new GeneratedCodeInfo({
            annotation: data.annotation.map(function (item) {
              return GeneratedCodeInfo.Annotation.fromObject(item);
            })
          });
          return message;
        }
      }, {
        key: "deserialize",
        value: function deserialize(bytes) {
          var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
              message = new GeneratedCodeInfo();

          while (reader.nextField()) {
            if (reader.isEndGroup()) break;

            switch (reader.getFieldNumber()) {
              case 1:
                reader.readMessage(message.annotation, function () {
                  return pb_1.Message.addToRepeatedWrapperField(message, 1, GeneratedCodeInfo.Annotation.deserialize(reader), GeneratedCodeInfo.Annotation);
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
          return GeneratedCodeInfo.deserialize(bytes);
        }
      }]);
      return GeneratedCodeInfo;
    }(pb_1.Message);

    _protobuf.GeneratedCodeInfo = GeneratedCodeInfo;

    (function (_GeneratedCodeInfo) {
      var Annotation = /*#__PURE__*/function (_pb_1$Message27) {
        (0, _inherits2["default"])(Annotation, _pb_1$Message27);

        var _super27 = _createSuper(Annotation);

        function Annotation(data) {
          var _this36;

          (0, _classCallCheck2["default"])(this, Annotation);
          _this36 = _super27.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this36), Array.isArray(data) ? data : [], 0, -1, [1], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            _this36.path = data.path;

            if ("source_file" in data && data.source_file != undefined) {
              _this36.source_file = data.source_file;
            }

            if ("begin" in data && data.begin != undefined) {
              _this36.begin = data.begin;
            }

            if ("end" in data && data.end != undefined) {
              _this36.end = data.end;
            }
          }

          return _this36;
        }

        (0, _createClass2["default"])(Annotation, [{
          key: "path",
          get: function get() {
            return pb_1.Message.getField(this, 1);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 1, value);
          }
        }, {
          key: "source_file",
          get: function get() {
            return pb_1.Message.getField(this, 2);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 2, value);
          }
        }, {
          key: "begin",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "end",
          get: function get() {
            return pb_1.Message.getField(this, 4);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 4, value);
          }
        }, {
          key: "toObject",
          value: function toObject() {
            var data = {
              path: this.path
            };

            if (this.source_file != null) {
              data.source_file = this.source_file;
            }

            if (this.begin != null) {
              data.begin = this.begin;
            }

            if (this.end != null) {
              data.end = this.end;
            }

            return data;
          }
        }, {
          key: "serialize",
          value: function serialize(w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.path !== undefined) writer.writePackedInt32(1, this.path);
            if (typeof this.source_file === "string" && this.source_file.length) writer.writeString(2, this.source_file);
            if (this.begin !== undefined) writer.writeInt32(3, this.begin);
            if (this.end !== undefined) writer.writeInt32(4, this.end);
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
            var message = new Annotation({
              path: data.path
            });

            if (data.source_file != null) {
              message.source_file = data.source_file;
            }

            if (data.begin != null) {
              message.begin = data.begin;
            }

            if (data.end != null) {
              message.end = data.end;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new Annotation();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  message.path = reader.readPackedInt32();
                  break;

                case 2:
                  message.source_file = reader.readString();
                  break;

                case 3:
                  message.begin = reader.readInt32();
                  break;

                case 4:
                  message.end = reader.readInt32();
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
            return Annotation.deserialize(bytes);
          }
        }]);
        return Annotation;
      }(pb_1.Message);

      _GeneratedCodeInfo.Annotation = Annotation;
    })(GeneratedCodeInfo || (GeneratedCodeInfo = _protobuf.GeneratedCodeInfo || (_protobuf.GeneratedCodeInfo = {})));
  })(protobuf || (protobuf = _google.protobuf || (_google.protobuf = {})));
})(google || (exports.google = google = {}));