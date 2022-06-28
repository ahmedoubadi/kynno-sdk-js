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
var cosmos_mint_v1beta1_mint_pb = require('../../../cosmos/mint/v1beta1/mint_pb.js');
goog.exportSymbol('proto.cosmos.mint.v1beta1.GenesisState', null, global);

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
proto.cosmos.mint.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.mint.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.mint.v1beta1.GenesisState.displayName = 'proto.cosmos.mint.v1beta1.GenesisState';
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
proto.cosmos.mint.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.mint.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.mint.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    minter: (f = msg.getMinter()) && cosmos_mint_v1beta1_mint_pb.Minter.toObject(includeInstance, f),
    params: (f = msg.getParams()) && cosmos_mint_v1beta1_mint_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.mint.v1beta1.GenesisState}
 */
proto.cosmos.mint.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.mint.v1beta1.GenesisState;
  return proto.cosmos.mint.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.mint.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.mint.v1beta1.GenesisState}
 */
proto.cosmos.mint.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_mint_v1beta1_mint_pb.Minter;
      reader.readMessage(value,cosmos_mint_v1beta1_mint_pb.Minter.deserializeBinaryFromReader);
      msg.setMinter(value);
      break;
    case 2:
      var value = new cosmos_mint_v1beta1_mint_pb.Params;
      reader.readMessage(value,cosmos_mint_v1beta1_mint_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.cosmos.mint.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.mint.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.mint.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.mint.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_mint_v1beta1_mint_pb.Minter.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_mint_v1beta1_mint_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Minter minter = 1;
 * @return {?proto.cosmos.mint.v1beta1.Minter}
 */
proto.cosmos.mint.v1beta1.GenesisState.prototype.getMinter = function() {
  return /** @type{?proto.cosmos.mint.v1beta1.Minter} */ (
    jspb.Message.getWrapperField(this, cosmos_mint_v1beta1_mint_pb.Minter, 1));
};


/** @param {?proto.cosmos.mint.v1beta1.Minter|undefined} value */
proto.cosmos.mint.v1beta1.GenesisState.prototype.setMinter = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.cosmos.mint.v1beta1.GenesisState.prototype.clearMinter = function() {
  this.setMinter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cosmos.mint.v1beta1.GenesisState.prototype.hasMinter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Params params = 2;
 * @return {?proto.cosmos.mint.v1beta1.Params}
 */
proto.cosmos.mint.v1beta1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.cosmos.mint.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_mint_v1beta1_mint_pb.Params, 2));
};


/** @param {?proto.cosmos.mint.v1beta1.Params|undefined} value */
proto.cosmos.mint.v1beta1.GenesisState.prototype.setParams = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.cosmos.mint.v1beta1.GenesisState.prototype.clearParams = function() {
  this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cosmos.mint.v1beta1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cosmos.mint.v1beta1);
