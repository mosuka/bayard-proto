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

var eraftpb_pb = require('./eraftpb_pb.js');
var commonpb_pb = require('./commonpb_pb.js');
goog.exportSymbol('proto.bayard.raft.AddressState', null, global);
goog.exportSymbol('proto.bayard.raft.ChangeReply', null, global);
goog.exportSymbol('proto.bayard.raft.Null', null, global);

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
proto.bayard.raft.Null = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bayard.raft.Null, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bayard.raft.Null.displayName = 'proto.bayard.raft.Null';
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
proto.bayard.raft.Null.prototype.toObject = function(opt_includeInstance) {
  return proto.bayard.raft.Null.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bayard.raft.Null} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.Null.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bayard.raft.Null}
 */
proto.bayard.raft.Null.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bayard.raft.Null;
  return proto.bayard.raft.Null.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bayard.raft.Null} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bayard.raft.Null}
 */
proto.bayard.raft.Null.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bayard.raft.Null.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bayard.raft.Null.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bayard.raft.Null} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.Null.serializeBinaryToWriter = function(message, writer) {
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
proto.bayard.raft.AddressState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bayard.raft.AddressState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bayard.raft.AddressState.displayName = 'proto.bayard.raft.AddressState';
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
proto.bayard.raft.AddressState.prototype.toObject = function(opt_includeInstance) {
  return proto.bayard.raft.AddressState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bayard.raft.AddressState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.AddressState.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressMap: msg.getAddressMap_asB64()
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
 * @return {!proto.bayard.raft.AddressState}
 */
proto.bayard.raft.AddressState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bayard.raft.AddressState;
  return proto.bayard.raft.AddressState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bayard.raft.AddressState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bayard.raft.AddressState}
 */
proto.bayard.raft.AddressState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddressMap(value);
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
proto.bayard.raft.AddressState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bayard.raft.AddressState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bayard.raft.AddressState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.AddressState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressMap_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address_map = 1;
 * @return {string}
 */
proto.bayard.raft.AddressState.prototype.getAddressMap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address_map = 1;
 * This is a type-conversion wrapper around `getAddressMap()`
 * @return {string}
 */
proto.bayard.raft.AddressState.prototype.getAddressMap_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddressMap()));
};


/**
 * optional bytes address_map = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddressMap()`
 * @return {!Uint8Array}
 */
proto.bayard.raft.AddressState.prototype.getAddressMap_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddressMap()));
};


/** @param {!(string|Uint8Array)} value */
proto.bayard.raft.AddressState.prototype.setAddressMap = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
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
proto.bayard.raft.ChangeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bayard.raft.ChangeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bayard.raft.ChangeReply.displayName = 'proto.bayard.raft.ChangeReply';
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
proto.bayard.raft.ChangeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.bayard.raft.ChangeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bayard.raft.ChangeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.ChangeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    addressMap: msg.getAddressMap_asB64(),
    leaderId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bayard.raft.ChangeReply}
 */
proto.bayard.raft.ChangeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bayard.raft.ChangeReply;
  return proto.bayard.raft.ChangeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bayard.raft.ChangeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bayard.raft.ChangeReply}
 */
proto.bayard.raft.ChangeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bayard.common.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddressMap(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeaderId(value);
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
proto.bayard.raft.ChangeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bayard.raft.ChangeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bayard.raft.ChangeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bayard.raft.ChangeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAddressMap_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLeaderId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bayard.common.State state = 1;
 * @return {!proto.bayard.common.State}
 */
proto.bayard.raft.ChangeReply.prototype.getState = function() {
  return /** @type {!proto.bayard.common.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bayard.common.State} value */
proto.bayard.raft.ChangeReply.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes address_map = 2;
 * @return {string}
 */
proto.bayard.raft.ChangeReply.prototype.getAddressMap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes address_map = 2;
 * This is a type-conversion wrapper around `getAddressMap()`
 * @return {string}
 */
proto.bayard.raft.ChangeReply.prototype.getAddressMap_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddressMap()));
};


/**
 * optional bytes address_map = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddressMap()`
 * @return {!Uint8Array}
 */
proto.bayard.raft.ChangeReply.prototype.getAddressMap_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddressMap()));
};


/** @param {!(string|Uint8Array)} value */
proto.bayard.raft.ChangeReply.prototype.setAddressMap = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 leader_id = 3;
 * @return {number}
 */
proto.bayard.raft.ChangeReply.prototype.getLeaderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.bayard.raft.ChangeReply.prototype.setLeaderId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.bayard.raft);
