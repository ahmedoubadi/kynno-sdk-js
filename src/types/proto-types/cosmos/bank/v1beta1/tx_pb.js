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
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
var cosmos_bank_v1beta1_bank_pb = require('../../../cosmos/bank/v1beta1/bank_pb.js');
goog.exportSymbol('proto.cosmos.bank.v1beta1.MsgMultiSend', null, global);
goog.exportSymbol('proto.cosmos.bank.v1beta1.MsgMultiSendResponse', null, global);
goog.exportSymbol('proto.cosmos.bank.v1beta1.MsgSend', null, global);
goog.exportSymbol('proto.cosmos.bank.v1beta1.MsgSendResponse', null, global);

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
proto.cosmos.bank.v1beta1.MsgSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.bank.v1beta1.MsgSend.repeatedFields_, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.MsgSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.bank.v1beta1.MsgSend.displayName = 'proto.cosmos.bank.v1beta1.MsgSend';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.bank.v1beta1.MsgSend.repeatedFields_ = [3];



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
proto.cosmos.bank.v1beta1.MsgSend.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.MsgSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.MsgSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amountList: jspb.Message.toObjectList(msg.getAmountList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
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
 * @return {!proto.cosmos.bank.v1beta1.MsgSend}
 */
proto.cosmos.bank.v1beta1.MsgSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.MsgSend;
  return proto.cosmos.bank.v1beta1.MsgSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.MsgSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.MsgSend}
 */
proto.cosmos.bank.v1beta1.MsgSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToAddress(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addAmount(value);
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
proto.cosmos.bank.v1beta1.MsgSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.MsgSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.MsgSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgSend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string from_address = 1;
 * @return {string}
 */
proto.cosmos.bank.v1beta1.MsgSend.prototype.getFromAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cosmos.bank.v1beta1.MsgSend.prototype.setFromAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to_address = 2;
 * @return {string}
 */
proto.cosmos.bank.v1beta1.MsgSend.prototype.getToAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cosmos.bank.v1beta1.MsgSend.prototype.setToAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin amount = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.bank.v1beta1.MsgSend.prototype.getAmountList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/** @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value */
proto.cosmos.bank.v1beta1.MsgSend.prototype.setAmountList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.bank.v1beta1.MsgSend.prototype.addAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


proto.cosmos.bank.v1beta1.MsgSend.prototype.clearAmountList = function() {
  this.setAmountList([]);
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
proto.cosmos.bank.v1beta1.MsgSendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.MsgSendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.bank.v1beta1.MsgSendResponse.displayName = 'proto.cosmos.bank.v1beta1.MsgSendResponse';
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
proto.cosmos.bank.v1beta1.MsgSendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.MsgSendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.MsgSendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgSendResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.bank.v1beta1.MsgSendResponse}
 */
proto.cosmos.bank.v1beta1.MsgSendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.MsgSendResponse;
  return proto.cosmos.bank.v1beta1.MsgSendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.MsgSendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.MsgSendResponse}
 */
proto.cosmos.bank.v1beta1.MsgSendResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.bank.v1beta1.MsgSendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.MsgSendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.MsgSendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgSendResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.bank.v1beta1.MsgMultiSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.bank.v1beta1.MsgMultiSend.repeatedFields_, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.MsgMultiSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.bank.v1beta1.MsgMultiSend.displayName = 'proto.cosmos.bank.v1beta1.MsgMultiSend';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.repeatedFields_ = [1,2];



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
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.MsgMultiSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    cosmos_bank_v1beta1_bank_pb.Input.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    cosmos_bank_v1beta1_bank_pb.Output.toObject, includeInstance)
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
 * @return {!proto.cosmos.bank.v1beta1.MsgMultiSend}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.MsgMultiSend;
  return proto.cosmos.bank.v1beta1.MsgMultiSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.MsgMultiSend}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_bank_v1beta1_bank_pb.Input;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.Input.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 2:
      var value = new cosmos_bank_v1beta1_bank_pb.Output;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.Output.deserializeBinaryFromReader);
      msg.addOutputs(value);
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
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.MsgMultiSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_bank_v1beta1_bank_pb.Input.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cosmos_bank_v1beta1_bank_pb.Output.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Input inputs = 1;
 * @return {!Array<!proto.cosmos.bank.v1beta1.Input>}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.cosmos.bank.v1beta1.Input>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_bank_v1beta1_bank_pb.Input, 1));
};


/** @param {!Array<!proto.cosmos.bank.v1beta1.Input>} value */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.setInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.Input=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.v1beta1.Input}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.bank.v1beta1.Input, opt_index);
};


proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.clearInputsList = function() {
  this.setInputsList([]);
};


/**
 * repeated Output outputs = 2;
 * @return {!Array<!proto.cosmos.bank.v1beta1.Output>}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.cosmos.bank.v1beta1.Output>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_bank_v1beta1_bank_pb.Output, 2));
};


/** @param {!Array<!proto.cosmos.bank.v1beta1.Output>} value */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.setOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.Output=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.v1beta1.Output}
 */
proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.bank.v1beta1.Output, opt_index);
};


proto.cosmos.bank.v1beta1.MsgMultiSend.prototype.clearOutputsList = function() {
  this.setOutputsList([]);
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
proto.cosmos.bank.v1beta1.MsgMultiSendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.bank.v1beta1.MsgMultiSendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse.displayName = 'proto.cosmos.bank.v1beta1.MsgMultiSendResponse';
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
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.v1beta1.MsgMultiSendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.bank.v1beta1.MsgMultiSendResponse}
 */
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.v1beta1.MsgMultiSendResponse;
  return proto.cosmos.bank.v1beta1.MsgMultiSendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.v1beta1.MsgMultiSendResponse}
 */
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.v1beta1.MsgMultiSendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.cosmos.bank.v1beta1);
