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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgCancelRewardshare', null, global);
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse', null, global);
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgRegisterRewardshare', null, global);
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse', null, global);
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgUpdateRewardshare', null, global);
goog.exportSymbol('proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse', null, global);

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
proto.kynno.rewardshare.v1.MsgRegisterRewardshare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.rewardshare.v1.MsgRegisterRewardshare.repeatedFields_, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgRegisterRewardshare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgRegisterRewardshare.displayName = 'proto.kynno.rewardshare.v1.MsgRegisterRewardshare';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.repeatedFields_ = [4];



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
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgRegisterRewardshare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    withdrawerAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    noncesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.kynno.rewardshare.v1.MsgRegisterRewardshare}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgRegisterRewardshare;
  return proto.kynno.rewardshare.v1.MsgRegisterRewardshare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgRegisterRewardshare}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawerAddress(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setNoncesList(value);
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
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgRegisterRewardshare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWithdrawerAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNoncesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      4,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string withdrawer_address = 3;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.getWithdrawerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.setWithdrawerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated uint64 nonces = 4;
 * @return {!Array<number>}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.getNoncesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.setNoncesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.addNonces = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.kynno.rewardshare.v1.MsgRegisterRewardshare.prototype.clearNoncesList = function() {
  this.setNoncesList([]);
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
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.displayName = 'proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse';
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
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse;
  return proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgRegisterRewardshareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgUpdateRewardshare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgUpdateRewardshare.displayName = 'proto.kynno.rewardshare.v1.MsgUpdateRewardshare';
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgUpdateRewardshare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    withdrawerAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.kynno.rewardshare.v1.MsgUpdateRewardshare}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgUpdateRewardshare;
  return proto.kynno.rewardshare.v1.MsgUpdateRewardshare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgUpdateRewardshare}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawerAddress(value);
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgUpdateRewardshare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWithdrawerAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string withdrawer_address = 3;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.getWithdrawerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgUpdateRewardshare.prototype.setWithdrawerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.displayName = 'proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse';
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse;
  return proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgUpdateRewardshareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.kynno.rewardshare.v1.MsgCancelRewardshare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgCancelRewardshare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgCancelRewardshare.displayName = 'proto.kynno.rewardshare.v1.MsgCancelRewardshare';
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
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgCancelRewardshare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.kynno.rewardshare.v1.MsgCancelRewardshare}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgCancelRewardshare;
  return proto.kynno.rewardshare.v1.MsgCancelRewardshare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgCancelRewardshare}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
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
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgCancelRewardshare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.rewardshare.v1.MsgCancelRewardshare.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.displayName = 'proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse';
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
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse;
  return proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse}
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.rewardshare.v1.MsgCancelRewardshareResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.kynno.rewardshare.v1);