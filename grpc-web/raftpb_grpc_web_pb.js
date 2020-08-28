/**
 * @fileoverview gRPC-Web generated client stub for bayard.raft
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var eraftpb_pb = require('./eraftpb_pb.js')

var commonpb_pb = require('./commonpb_pb.js')
const proto = {};
proto.bayard = {};
proto.bayard.raft = require('./raftpb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bayard.raft.RaftServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bayard.raft.RaftServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.eraftpb.Snapshot,
 *   !proto.bayard.raft.Null>}
 */
const methodDescriptor_RaftService_Snapshot = new grpc.web.MethodDescriptor(
  '/bayard.raft.RaftService/Snapshot',
  grpc.web.MethodType.UNARY,
  eraftpb_pb.Snapshot,
  proto.bayard.raft.Null,
  /**
   * @param {!proto.eraftpb.Snapshot} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.eraftpb.Snapshot,
 *   !proto.bayard.raft.Null>}
 */
const methodInfo_RaftService_Snapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.raft.Null,
  /**
   * @param {!proto.eraftpb.Snapshot} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @param {!proto.eraftpb.Snapshot} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.raft.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.raft.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.raft.RaftServiceClient.prototype.snapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.raft.RaftService/Snapshot',
      request,
      metadata || {},
      methodDescriptor_RaftService_Snapshot,
      callback);
};


/**
 * @param {!proto.eraftpb.Snapshot} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.raft.Null>}
 *     Promise that resolves to the response
 */
proto.bayard.raft.RaftServicePromiseClient.prototype.snapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.raft.RaftService/Snapshot',
      request,
      metadata || {},
      methodDescriptor_RaftService_Snapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.eraftpb.ConfChange,
 *   !proto.bayard.raft.ChangeReply>}
 */
const methodDescriptor_RaftService_ChangeConfig = new grpc.web.MethodDescriptor(
  '/bayard.raft.RaftService/ChangeConfig',
  grpc.web.MethodType.UNARY,
  eraftpb_pb.ConfChange,
  proto.bayard.raft.ChangeReply,
  /**
   * @param {!proto.eraftpb.ConfChange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.ChangeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.eraftpb.ConfChange,
 *   !proto.bayard.raft.ChangeReply>}
 */
const methodInfo_RaftService_ChangeConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.raft.ChangeReply,
  /**
   * @param {!proto.eraftpb.ConfChange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.ChangeReply.deserializeBinary
);


/**
 * @param {!proto.eraftpb.ConfChange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.raft.ChangeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.raft.ChangeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.raft.RaftServiceClient.prototype.changeConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.raft.RaftService/ChangeConfig',
      request,
      metadata || {},
      methodDescriptor_RaftService_ChangeConfig,
      callback);
};


/**
 * @param {!proto.eraftpb.ConfChange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.raft.ChangeReply>}
 *     Promise that resolves to the response
 */
proto.bayard.raft.RaftServicePromiseClient.prototype.changeConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.raft.RaftService/ChangeConfig',
      request,
      metadata || {},
      methodDescriptor_RaftService_ChangeConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.eraftpb.Message,
 *   !proto.bayard.raft.Null>}
 */
const methodDescriptor_RaftService_SendMsg = new grpc.web.MethodDescriptor(
  '/bayard.raft.RaftService/SendMsg',
  grpc.web.MethodType.UNARY,
  eraftpb_pb.Message,
  proto.bayard.raft.Null,
  /**
   * @param {!proto.eraftpb.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.eraftpb.Message,
 *   !proto.bayard.raft.Null>}
 */
const methodInfo_RaftService_SendMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.raft.Null,
  /**
   * @param {!proto.eraftpb.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @param {!proto.eraftpb.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.raft.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.raft.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.raft.RaftServiceClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.raft.RaftService/SendMsg',
      request,
      metadata || {},
      methodDescriptor_RaftService_SendMsg,
      callback);
};


/**
 * @param {!proto.eraftpb.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.raft.Null>}
 *     Promise that resolves to the response
 */
proto.bayard.raft.RaftServicePromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.raft.RaftService/SendMsg',
      request,
      metadata || {},
      methodDescriptor_RaftService_SendMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.raft.AddressState,
 *   !proto.bayard.raft.Null>}
 */
const methodDescriptor_RaftService_SendAddress = new grpc.web.MethodDescriptor(
  '/bayard.raft.RaftService/SendAddress',
  grpc.web.MethodType.UNARY,
  proto.bayard.raft.AddressState,
  proto.bayard.raft.Null,
  /**
   * @param {!proto.bayard.raft.AddressState} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.raft.AddressState,
 *   !proto.bayard.raft.Null>}
 */
const methodInfo_RaftService_SendAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.raft.Null,
  /**
   * @param {!proto.bayard.raft.AddressState} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.raft.Null.deserializeBinary
);


/**
 * @param {!proto.bayard.raft.AddressState} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.raft.Null)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.raft.Null>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.raft.RaftServiceClient.prototype.sendAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.raft.RaftService/SendAddress',
      request,
      metadata || {},
      methodDescriptor_RaftService_SendAddress,
      callback);
};


/**
 * @param {!proto.bayard.raft.AddressState} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.raft.Null>}
 *     Promise that resolves to the response
 */
proto.bayard.raft.RaftServicePromiseClient.prototype.sendAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.raft.RaftService/SendAddress',
      request,
      metadata || {},
      methodDescriptor_RaftService_SendAddress);
};


module.exports = proto.bayard.raft;

