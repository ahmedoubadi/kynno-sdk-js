/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.kynno.epochs.v1.EpochInfo', null, global);
goog.exportSymbol('proto.kynno.epochs.v1.GenesisState', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kynno.epochs.v1.EpochInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.epochs.v1.EpochInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.EpochInfo.displayName = 'proto.kynno.epochs.v1.EpochInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.EpochInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.EpochInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.EpochInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    currentEpoch: jspb.Message.getFieldWithDefault(msg, 4, 0),
    currentEpochStartTime: (f = msg.getCurrentEpochStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    epochCountingStarted: jspb.Message.getFieldWithDefault(msg, 6, false),
    currentEpochStartHeight: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kynno.epochs.v1.EpochInfo}
 */
proto.kynno.epochs.v1.EpochInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.EpochInfo;
  return proto.kynno.epochs.v1.EpochInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.EpochInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.EpochInfo}
 */
proto.kynno.epochs.v1.EpochInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentEpoch(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCurrentEpochStartTime(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEpochCountingStarted(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentEpochStartHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.EpochInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.EpochInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.EpochInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentEpoch();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCurrentEpochStartTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEpochCountingStarted();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCurrentEpochStartHeight();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string identifier = 1;
 * @return {string}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.kynno.epochs.v1.EpochInfo.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.kynno.epochs.v1.EpochInfo.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 current_epoch = 4;
 * @return {number}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getCurrentEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setCurrentEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp current_epoch_start_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getCurrentEpochStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setCurrentEpochStartTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.kynno.epochs.v1.EpochInfo.prototype.clearCurrentEpochStartTime = function() {
  this.setCurrentEpochStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.hasCurrentEpochStartTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool epoch_counting_started = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getEpochCountingStarted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setEpochCountingStarted = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 current_epoch_start_height = 7;
 * @return {number}
 */
proto.kynno.epochs.v1.EpochInfo.prototype.getCurrentEpochStartHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.kynno.epochs.v1.EpochInfo.prototype.setCurrentEpochStartHeight = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kynno.epochs.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.epochs.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.kynno.epochs.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.GenesisState.displayName = 'proto.kynno.epochs.v1.GenesisState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.epochs.v1.GenesisState.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kynno.epochs.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochsList: jspb.Message.toObjectList(msg.getEpochsList(),
    proto.kynno.epochs.v1.EpochInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kynno.epochs.v1.GenesisState}
 */
proto.kynno.epochs.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.GenesisState;
  return proto.kynno.epochs.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.GenesisState}
 */
proto.kynno.epochs.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.kynno.epochs.v1.EpochInfo;
      reader.readMessage(value,proto.kynno.epochs.v1.EpochInfo.deserializeBinaryFromReader);
      msg.addEpochs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kynno.epochs.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.kynno.epochs.v1.EpochInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EpochInfo epochs = 1;
 * @return {!Array<!proto.kynno.epochs.v1.EpochInfo>}
 */
proto.kynno.epochs.v1.GenesisState.prototype.getEpochsList = function() {
  return /** @type{!Array<!proto.kynno.epochs.v1.EpochInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.kynno.epochs.v1.EpochInfo, 1));
};


/** @param {!Array<!proto.kynno.epochs.v1.EpochInfo>} value */
proto.kynno.epochs.v1.GenesisState.prototype.setEpochsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.kynno.epochs.v1.EpochInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.kynno.epochs.v1.EpochInfo}
 */
proto.kynno.epochs.v1.GenesisState.prototype.addEpochs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.kynno.epochs.v1.EpochInfo, opt_index);
};


proto.kynno.epochs.v1.GenesisState.prototype.clearEpochsList = function() {
  this.setEpochsList([]);
};


goog.object.extend(exports, proto.kynno.epochs.v1);
