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

var kynno_incentives_v1_incentives_pb = require('../../../kynno/incentives/v1/incentives_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.exportSymbol('proto.kynno.incentives.v1.GenesisState', null, global);
goog.exportSymbol('proto.kynno.incentives.v1.Params', null, global);

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
proto.kynno.incentives.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.incentives.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.kynno.incentives.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.incentives.v1.GenesisState.displayName = 'proto.kynno.incentives.v1.GenesisState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.incentives.v1.GenesisState.repeatedFields_ = [2,3];



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
proto.kynno.incentives.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.incentives.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.incentives.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.incentives.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.kynno.incentives.v1.Params.toObject(includeInstance, f),
    incentivesList: jspb.Message.toObjectList(msg.getIncentivesList(),
    kynno_incentives_v1_incentives_pb.Incentive.toObject, includeInstance),
    gasMetersList: jspb.Message.toObjectList(msg.getGasMetersList(),
    kynno_incentives_v1_incentives_pb.GasMeter.toObject, includeInstance)
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
 * @return {!proto.kynno.incentives.v1.GenesisState}
 */
proto.kynno.incentives.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.incentives.v1.GenesisState;
  return proto.kynno.incentives.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.incentives.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.incentives.v1.GenesisState}
 */
proto.kynno.incentives.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.kynno.incentives.v1.Params;
      reader.readMessage(value,proto.kynno.incentives.v1.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new kynno_incentives_v1_incentives_pb.Incentive;
      reader.readMessage(value,kynno_incentives_v1_incentives_pb.Incentive.deserializeBinaryFromReader);
      msg.addIncentives(value);
      break;
    case 3:
      var value = new kynno_incentives_v1_incentives_pb.GasMeter;
      reader.readMessage(value,kynno_incentives_v1_incentives_pb.GasMeter.deserializeBinaryFromReader);
      msg.addGasMeters(value);
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
proto.kynno.incentives.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.incentives.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.incentives.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.incentives.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.kynno.incentives.v1.Params.serializeBinaryToWriter
    );
  }
  f = message.getIncentivesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      kynno_incentives_v1_incentives_pb.Incentive.serializeBinaryToWriter
    );
  }
  f = message.getGasMetersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      kynno_incentives_v1_incentives_pb.GasMeter.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.kynno.incentives.v1.Params}
 */
proto.kynno.incentives.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.kynno.incentives.v1.Params} */ (
    jspb.Message.getWrapperField(this, proto.kynno.incentives.v1.Params, 1));
};


/** @param {?proto.kynno.incentives.v1.Params|undefined} value */
proto.kynno.incentives.v1.GenesisState.prototype.setParams = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.kynno.incentives.v1.GenesisState.prototype.clearParams = function() {
  this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.incentives.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Incentive incentives = 2;
 * @return {!Array<!proto.kynno.incentives.v1.Incentive>}
 */
proto.kynno.incentives.v1.GenesisState.prototype.getIncentivesList = function() {
  return /** @type{!Array<!proto.kynno.incentives.v1.Incentive>} */ (
    jspb.Message.getRepeatedWrapperField(this, kynno_incentives_v1_incentives_pb.Incentive, 2));
};


/** @param {!Array<!proto.kynno.incentives.v1.Incentive>} value */
proto.kynno.incentives.v1.GenesisState.prototype.setIncentivesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.kynno.incentives.v1.Incentive=} opt_value
 * @param {number=} opt_index
 * @return {!proto.kynno.incentives.v1.Incentive}
 */
proto.kynno.incentives.v1.GenesisState.prototype.addIncentives = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.kynno.incentives.v1.Incentive, opt_index);
};


proto.kynno.incentives.v1.GenesisState.prototype.clearIncentivesList = function() {
  this.setIncentivesList([]);
};


/**
 * repeated GasMeter gas_meters = 3;
 * @return {!Array<!proto.kynno.incentives.v1.GasMeter>}
 */
proto.kynno.incentives.v1.GenesisState.prototype.getGasMetersList = function() {
  return /** @type{!Array<!proto.kynno.incentives.v1.GasMeter>} */ (
    jspb.Message.getRepeatedWrapperField(this, kynno_incentives_v1_incentives_pb.GasMeter, 3));
};


/** @param {!Array<!proto.kynno.incentives.v1.GasMeter>} value */
proto.kynno.incentives.v1.GenesisState.prototype.setGasMetersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.kynno.incentives.v1.GasMeter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.kynno.incentives.v1.GasMeter}
 */
proto.kynno.incentives.v1.GenesisState.prototype.addGasMeters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.kynno.incentives.v1.GasMeter, opt_index);
};


proto.kynno.incentives.v1.GenesisState.prototype.clearGasMetersList = function() {
  this.setGasMetersList([]);
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
proto.kynno.incentives.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.incentives.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.incentives.v1.Params.displayName = 'proto.kynno.incentives.v1.Params';
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
proto.kynno.incentives.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.incentives.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.incentives.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.incentives.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableIncentives: jspb.Message.getFieldWithDefault(msg, 1, false),
    allocationLimit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    incentivesEpochIdentifier: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rewardScaler: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.kynno.incentives.v1.Params}
 */
proto.kynno.incentives.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.incentives.v1.Params;
  return proto.kynno.incentives.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.incentives.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.incentives.v1.Params}
 */
proto.kynno.incentives.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableIncentives(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAllocationLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIncentivesEpochIdentifier(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardScaler(value);
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
proto.kynno.incentives.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.incentives.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.incentives.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.incentives.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableIncentives();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAllocationLimit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncentivesEpochIdentifier();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRewardScaler();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool enable_incentives = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.kynno.incentives.v1.Params.prototype.getEnableIncentives = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.kynno.incentives.v1.Params.prototype.setEnableIncentives = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string allocation_limit = 2;
 * @return {string}
 */
proto.kynno.incentives.v1.Params.prototype.getAllocationLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.incentives.v1.Params.prototype.setAllocationLimit = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string incentives_epoch_identifier = 3;
 * @return {string}
 */
proto.kynno.incentives.v1.Params.prototype.getIncentivesEpochIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.incentives.v1.Params.prototype.setIncentivesEpochIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reward_scaler = 4;
 * @return {string}
 */
proto.kynno.incentives.v1.Params.prototype.getRewardScaler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.kynno.incentives.v1.Params.prototype.setRewardScaler = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.kynno.incentives.v1);
