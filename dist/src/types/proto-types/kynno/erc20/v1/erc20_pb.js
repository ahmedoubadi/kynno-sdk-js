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
var cosmos_bank_v1beta1_bank_pb = require('../../../cosmos/bank/v1beta1/bank_pb.js');
goog.exportSymbol('proto.kynno.erc20.v1.Owner', null, global);
goog.exportSymbol('proto.kynno.erc20.v1.RegisterCoinProposal', null, global);
goog.exportSymbol('proto.kynno.erc20.v1.RegisterERC20Proposal', null, global);
goog.exportSymbol('proto.kynno.erc20.v1.ToggleTokenConversionProposal', null, global);
goog.exportSymbol('proto.kynno.erc20.v1.TokenPair', null, global);

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
proto.kynno.erc20.v1.TokenPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.erc20.v1.TokenPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.erc20.v1.TokenPair.displayName = 'proto.kynno.erc20.v1.TokenPair';
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
proto.kynno.erc20.v1.TokenPair.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.erc20.v1.TokenPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.erc20.v1.TokenPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.TokenPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    erc20Address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    denom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enabled: jspb.Message.getFieldWithDefault(msg, 3, false),
    contractOwner: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.kynno.erc20.v1.TokenPair}
 */
proto.kynno.erc20.v1.TokenPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.erc20.v1.TokenPair;
  return proto.kynno.erc20.v1.TokenPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.erc20.v1.TokenPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.erc20.v1.TokenPair}
 */
proto.kynno.erc20.v1.TokenPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErc20Address(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDenom(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var value = /** @type {!proto.kynno.erc20.v1.Owner} */ (reader.readEnum());
      msg.setContractOwner(value);
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
proto.kynno.erc20.v1.TokenPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.erc20.v1.TokenPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.erc20.v1.TokenPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.TokenPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErc20Address();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getContractOwner();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string erc20_address = 1;
 * @return {string}
 */
proto.kynno.erc20.v1.TokenPair.prototype.getErc20Address = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.TokenPair.prototype.setErc20Address = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string denom = 2;
 * @return {string}
 */
proto.kynno.erc20.v1.TokenPair.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.TokenPair.prototype.setDenom = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enabled = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.kynno.erc20.v1.TokenPair.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.kynno.erc20.v1.TokenPair.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Owner contract_owner = 4;
 * @return {!proto.kynno.erc20.v1.Owner}
 */
proto.kynno.erc20.v1.TokenPair.prototype.getContractOwner = function() {
  return /** @type {!proto.kynno.erc20.v1.Owner} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.kynno.erc20.v1.Owner} value */
proto.kynno.erc20.v1.TokenPair.prototype.setContractOwner = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.kynno.erc20.v1.RegisterCoinProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.erc20.v1.RegisterCoinProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.erc20.v1.RegisterCoinProposal.displayName = 'proto.kynno.erc20.v1.RegisterCoinProposal';
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
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.erc20.v1.RegisterCoinProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.erc20.v1.RegisterCoinProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.RegisterCoinProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metadata: (f = msg.getMetadata()) && cosmos_bank_v1beta1_bank_pb.Metadata.toObject(includeInstance, f)
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
 * @return {!proto.kynno.erc20.v1.RegisterCoinProposal}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.erc20.v1.RegisterCoinProposal;
  return proto.kynno.erc20.v1.RegisterCoinProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.erc20.v1.RegisterCoinProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.erc20.v1.RegisterCoinProposal}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new cosmos_bank_v1beta1_bank_pb.Metadata;
      reader.readMessage(value,cosmos_bank_v1beta1_bank_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.erc20.v1.RegisterCoinProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.erc20.v1.RegisterCoinProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.RegisterCoinProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_bank_v1beta1_bank_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.bank.v1beta1.Metadata metadata = 3;
 * @return {?proto.cosmos.bank.v1beta1.Metadata}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.getMetadata = function() {
  return /** @type{?proto.cosmos.bank.v1beta1.Metadata} */ (
    jspb.Message.getWrapperField(this, cosmos_bank_v1beta1_bank_pb.Metadata, 3));
};


/** @param {?proto.cosmos.bank.v1beta1.Metadata|undefined} value */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.kynno.erc20.v1.RegisterCoinProposal.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.erc20.v1.RegisterCoinProposal.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.kynno.erc20.v1.RegisterERC20Proposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.erc20.v1.RegisterERC20Proposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.erc20.v1.RegisterERC20Proposal.displayName = 'proto.kynno.erc20.v1.RegisterERC20Proposal';
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
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.erc20.v1.RegisterERC20Proposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.erc20.v1.RegisterERC20Proposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    erc20address: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.kynno.erc20.v1.RegisterERC20Proposal}
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.erc20.v1.RegisterERC20Proposal;
  return proto.kynno.erc20.v1.RegisterERC20Proposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.erc20.v1.RegisterERC20Proposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.erc20.v1.RegisterERC20Proposal}
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErc20address(value);
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
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.erc20.v1.RegisterERC20Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.erc20.v1.RegisterERC20Proposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErc20address();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string erc20address = 3;
 * @return {string}
 */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.getErc20address = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.RegisterERC20Proposal.prototype.setErc20address = function(value) {
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
proto.kynno.erc20.v1.ToggleTokenConversionProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.erc20.v1.ToggleTokenConversionProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.erc20.v1.ToggleTokenConversionProposal.displayName = 'proto.kynno.erc20.v1.ToggleTokenConversionProposal';
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
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.erc20.v1.ToggleTokenConversionProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.erc20.v1.ToggleTokenConversionProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.kynno.erc20.v1.ToggleTokenConversionProposal}
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.erc20.v1.ToggleTokenConversionProposal;
  return proto.kynno.erc20.v1.ToggleTokenConversionProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.erc20.v1.ToggleTokenConversionProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.erc20.v1.ToggleTokenConversionProposal}
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.erc20.v1.ToggleTokenConversionProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.erc20.v1.ToggleTokenConversionProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.erc20.v1.ToggleTokenConversionProposal.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.kynno.erc20.v1.Owner = {
  OWNER_UNSPECIFIED: 0,
  OWNER_MODULE: 1,
  OWNER_EXTERNAL: 2
};

goog.object.extend(exports, proto.kynno.erc20.v1);
