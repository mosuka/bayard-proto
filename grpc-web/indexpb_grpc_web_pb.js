/**
 * @fileoverview gRPC-Web generated client stub for bayard.index
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var commonpb_pb = require('./commonpb_pb.js')
const proto = {};
proto.bayard = {};
proto.bayard.index = require('./indexpb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bayard.index.IndexServiceClient =
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
proto.bayard.index.IndexServicePromiseClient =
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
 *   !proto.bayard.index.GetReq,
 *   !proto.bayard.index.GetReply>}
 */
const methodDescriptor_IndexService_Get = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Get',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.GetReq,
  proto.bayard.index.GetReply,
  /**
   * @param {!proto.bayard.index.GetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.GetReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.GetReq,
 *   !proto.bayard.index.GetReply>}
 */
const methodInfo_IndexService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.GetReply,
  /**
   * @param {!proto.bayard.index.GetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.GetReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.GetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.GetReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.GetReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Get',
      request,
      metadata || {},
      methodDescriptor_IndexService_Get,
      callback);
};


/**
 * @param {!proto.bayard.index.GetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.GetReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Get',
      request,
      metadata || {},
      methodDescriptor_IndexService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.SearchReq,
 *   !proto.bayard.index.SearchReply>}
 */
const methodDescriptor_IndexService_Search = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Search',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.SearchReq,
  proto.bayard.index.SearchReply,
  /**
   * @param {!proto.bayard.index.SearchReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SearchReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.SearchReq,
 *   !proto.bayard.index.SearchReply>}
 */
const methodInfo_IndexService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.SearchReply,
  /**
   * @param {!proto.bayard.index.SearchReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SearchReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.SearchReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.SearchReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.SearchReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Search',
      request,
      metadata || {},
      methodDescriptor_IndexService_Search,
      callback);
};


/**
 * @param {!proto.bayard.index.SearchReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.SearchReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Search',
      request,
      metadata || {},
      methodDescriptor_IndexService_Search);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.SetReq,
 *   !proto.bayard.index.SetReply>}
 */
const methodDescriptor_IndexService_Set = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Set',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.SetReq,
  proto.bayard.index.SetReply,
  /**
   * @param {!proto.bayard.index.SetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SetReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.SetReq,
 *   !proto.bayard.index.SetReply>}
 */
const methodInfo_IndexService_Set = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.SetReply,
  /**
   * @param {!proto.bayard.index.SetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SetReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.SetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.SetReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.SetReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.set =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Set',
      request,
      metadata || {},
      methodDescriptor_IndexService_Set,
      callback);
};


/**
 * @param {!proto.bayard.index.SetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.SetReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.set =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Set',
      request,
      metadata || {},
      methodDescriptor_IndexService_Set);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.DeleteReq,
 *   !proto.bayard.index.DeleteReply>}
 */
const methodDescriptor_IndexService_Delete = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Delete',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.DeleteReq,
  proto.bayard.index.DeleteReply,
  /**
   * @param {!proto.bayard.index.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.DeleteReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.DeleteReq,
 *   !proto.bayard.index.DeleteReply>}
 */
const methodInfo_IndexService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.DeleteReply,
  /**
   * @param {!proto.bayard.index.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.DeleteReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.DeleteReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.DeleteReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Delete',
      request,
      metadata || {},
      methodDescriptor_IndexService_Delete,
      callback);
};


/**
 * @param {!proto.bayard.index.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.DeleteReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Delete',
      request,
      metadata || {},
      methodDescriptor_IndexService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.BulkSetReq,
 *   !proto.bayard.index.BulkSetReply>}
 */
const methodDescriptor_IndexService_BulkSet = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/BulkSet',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.BulkSetReq,
  proto.bayard.index.BulkSetReply,
  /**
   * @param {!proto.bayard.index.BulkSetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.BulkSetReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.BulkSetReq,
 *   !proto.bayard.index.BulkSetReply>}
 */
const methodInfo_IndexService_BulkSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.BulkSetReply,
  /**
   * @param {!proto.bayard.index.BulkSetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.BulkSetReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.BulkSetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.BulkSetReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.BulkSetReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.bulkSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/BulkSet',
      request,
      metadata || {},
      methodDescriptor_IndexService_BulkSet,
      callback);
};


/**
 * @param {!proto.bayard.index.BulkSetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.BulkSetReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.bulkSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/BulkSet',
      request,
      metadata || {},
      methodDescriptor_IndexService_BulkSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.BulkDeleteReq,
 *   !proto.bayard.index.BulkDeleteReply>}
 */
const methodDescriptor_IndexService_BulkDelete = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/BulkDelete',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.BulkDeleteReq,
  proto.bayard.index.BulkDeleteReply,
  /**
   * @param {!proto.bayard.index.BulkDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.BulkDeleteReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.BulkDeleteReq,
 *   !proto.bayard.index.BulkDeleteReply>}
 */
const methodInfo_IndexService_BulkDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.BulkDeleteReply,
  /**
   * @param {!proto.bayard.index.BulkDeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.BulkDeleteReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.BulkDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.BulkDeleteReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.BulkDeleteReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.bulkDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/BulkDelete',
      request,
      metadata || {},
      methodDescriptor_IndexService_BulkDelete,
      callback);
};


/**
 * @param {!proto.bayard.index.BulkDeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.BulkDeleteReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.bulkDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/BulkDelete',
      request,
      metadata || {},
      methodDescriptor_IndexService_BulkDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.CommitReq,
 *   !proto.bayard.index.CommitReply>}
 */
const methodDescriptor_IndexService_Commit = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Commit',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.CommitReq,
  proto.bayard.index.CommitReply,
  /**
   * @param {!proto.bayard.index.CommitReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.CommitReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.CommitReq,
 *   !proto.bayard.index.CommitReply>}
 */
const methodInfo_IndexService_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.CommitReply,
  /**
   * @param {!proto.bayard.index.CommitReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.CommitReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.CommitReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.CommitReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.CommitReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Commit',
      request,
      metadata || {},
      methodDescriptor_IndexService_Commit,
      callback);
};


/**
 * @param {!proto.bayard.index.CommitReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.CommitReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Commit',
      request,
      metadata || {},
      methodDescriptor_IndexService_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.RollbackReq,
 *   !proto.bayard.index.RollbackReply>}
 */
const methodDescriptor_IndexService_Rollback = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Rollback',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.RollbackReq,
  proto.bayard.index.RollbackReply,
  /**
   * @param {!proto.bayard.index.RollbackReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.RollbackReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.RollbackReq,
 *   !proto.bayard.index.RollbackReply>}
 */
const methodInfo_IndexService_Rollback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.RollbackReply,
  /**
   * @param {!proto.bayard.index.RollbackReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.RollbackReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.RollbackReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.RollbackReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.RollbackReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.rollback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Rollback',
      request,
      metadata || {},
      methodDescriptor_IndexService_Rollback,
      callback);
};


/**
 * @param {!proto.bayard.index.RollbackReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.RollbackReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.rollback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Rollback',
      request,
      metadata || {},
      methodDescriptor_IndexService_Rollback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.MergeReq,
 *   !proto.bayard.index.MergeReply>}
 */
const methodDescriptor_IndexService_Merge = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Merge',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.MergeReq,
  proto.bayard.index.MergeReply,
  /**
   * @param {!proto.bayard.index.MergeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.MergeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.MergeReq,
 *   !proto.bayard.index.MergeReply>}
 */
const methodInfo_IndexService_Merge = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.MergeReply,
  /**
   * @param {!proto.bayard.index.MergeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.MergeReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.MergeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.MergeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.MergeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.merge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Merge',
      request,
      metadata || {},
      methodDescriptor_IndexService_Merge,
      callback);
};


/**
 * @param {!proto.bayard.index.MergeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.MergeReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.merge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Merge',
      request,
      metadata || {},
      methodDescriptor_IndexService_Merge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.SchemaReq,
 *   !proto.bayard.index.SchemaReply>}
 */
const methodDescriptor_IndexService_Schema = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Schema',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.SchemaReq,
  proto.bayard.index.SchemaReply,
  /**
   * @param {!proto.bayard.index.SchemaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SchemaReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.SchemaReq,
 *   !proto.bayard.index.SchemaReply>}
 */
const methodInfo_IndexService_Schema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.SchemaReply,
  /**
   * @param {!proto.bayard.index.SchemaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.SchemaReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.SchemaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.SchemaReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.SchemaReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.schema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Schema',
      request,
      metadata || {},
      methodDescriptor_IndexService_Schema,
      callback);
};


/**
 * @param {!proto.bayard.index.SchemaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.SchemaReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.schema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Schema',
      request,
      metadata || {},
      methodDescriptor_IndexService_Schema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.MetricsReq,
 *   !proto.bayard.index.MetricsReply>}
 */
const methodDescriptor_IndexService_Metrics = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Metrics',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.MetricsReq,
  proto.bayard.index.MetricsReply,
  /**
   * @param {!proto.bayard.index.MetricsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.MetricsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.MetricsReq,
 *   !proto.bayard.index.MetricsReply>}
 */
const methodInfo_IndexService_Metrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.MetricsReply,
  /**
   * @param {!proto.bayard.index.MetricsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.MetricsReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.MetricsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.MetricsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.MetricsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.metrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Metrics',
      request,
      metadata || {},
      methodDescriptor_IndexService_Metrics,
      callback);
};


/**
 * @param {!proto.bayard.index.MetricsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.MetricsReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.metrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Metrics',
      request,
      metadata || {},
      methodDescriptor_IndexService_Metrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bayard.index.StatusReq,
 *   !proto.bayard.index.StatusReply>}
 */
const methodDescriptor_IndexService_Status = new grpc.web.MethodDescriptor(
  '/bayard.index.IndexService/Status',
  grpc.web.MethodType.UNARY,
  proto.bayard.index.StatusReq,
  proto.bayard.index.StatusReply,
  /**
   * @param {!proto.bayard.index.StatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.StatusReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bayard.index.StatusReq,
 *   !proto.bayard.index.StatusReply>}
 */
const methodInfo_IndexService_Status = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bayard.index.StatusReply,
  /**
   * @param {!proto.bayard.index.StatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bayard.index.StatusReply.deserializeBinary
);


/**
 * @param {!proto.bayard.index.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bayard.index.StatusReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bayard.index.StatusReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bayard.index.IndexServiceClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bayard.index.IndexService/Status',
      request,
      metadata || {},
      methodDescriptor_IndexService_Status,
      callback);
};


/**
 * @param {!proto.bayard.index.StatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bayard.index.StatusReply>}
 *     A native promise that resolves to the response
 */
proto.bayard.index.IndexServicePromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bayard.index.IndexService/Status',
      request,
      metadata || {},
      methodDescriptor_IndexService_Status);
};


module.exports = proto.bayard.index;

