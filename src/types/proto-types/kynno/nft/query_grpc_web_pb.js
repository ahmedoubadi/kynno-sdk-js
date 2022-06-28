/**
 * @fileoverview gRPC-Web generated client stub for kynno.nft
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var kynno_nft_nft_pb = require('../../kynno/nft/nft_pb.js')
const proto = {};
proto.kynno = {};
proto.kynno.nft = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kynno.nft.QueryClient =
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
proto.kynno.nft.QueryPromiseClient =
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
 *   !proto.kynno.nft.QuerySupplyRequest,
 *   !proto.kynno.nft.QuerySupplyResponse>}
 */
const methodDescriptor_Query_Supply = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/Supply',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QuerySupplyRequest,
  proto.kynno.nft.QuerySupplyResponse,
  /**
   * @param {!proto.kynno.nft.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QuerySupplyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QuerySupplyRequest,
 *   !proto.kynno.nft.QuerySupplyResponse>}
 */
const methodInfo_Query_Supply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QuerySupplyResponse,
  /**
   * @param {!proto.kynno.nft.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QuerySupplyResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QuerySupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QuerySupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.supply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply,
      callback);
};


/**
 * @param {!proto.kynno.nft.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QuerySupplyResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.supply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.QueryOwnerRequest,
 *   !proto.kynno.nft.QueryOwnerResponse>}
 */
const methodDescriptor_Query_Owner = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/Owner',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QueryOwnerRequest,
  proto.kynno.nft.QueryOwnerResponse,
  /**
   * @param {!proto.kynno.nft.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QueryOwnerRequest,
 *   !proto.kynno.nft.QueryOwnerResponse>}
 */
const methodInfo_Query_Owner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QueryOwnerResponse,
  /**
   * @param {!proto.kynno.nft.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QueryOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QueryOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.owner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner,
      callback);
};


/**
 * @param {!proto.kynno.nft.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QueryOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.owner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.QueryCollectionRequest,
 *   !proto.kynno.nft.QueryCollectionResponse>}
 */
const methodDescriptor_Query_Collection = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/Collection',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QueryCollectionRequest,
  proto.kynno.nft.QueryCollectionResponse,
  /**
   * @param {!proto.kynno.nft.QueryCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryCollectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QueryCollectionRequest,
 *   !proto.kynno.nft.QueryCollectionResponse>}
 */
const methodInfo_Query_Collection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QueryCollectionResponse,
  /**
   * @param {!proto.kynno.nft.QueryCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QueryCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QueryCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.collection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection,
      callback);
};


/**
 * @param {!proto.kynno.nft.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QueryCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.collection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.QueryDenomRequest,
 *   !proto.kynno.nft.QueryDenomResponse>}
 */
const methodDescriptor_Query_Denom = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/Denom',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QueryDenomRequest,
  proto.kynno.nft.QueryDenomResponse,
  /**
   * @param {!proto.kynno.nft.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QueryDenomRequest,
 *   !proto.kynno.nft.QueryDenomResponse>}
 */
const methodInfo_Query_Denom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QueryDenomResponse,
  /**
   * @param {!proto.kynno.nft.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryDenomResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QueryDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QueryDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.denom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom,
      callback);
};


/**
 * @param {!proto.kynno.nft.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QueryDenomResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.denom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.QueryDenomsRequest,
 *   !proto.kynno.nft.QueryDenomsResponse>}
 */
const methodDescriptor_Query_Denoms = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/Denoms',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QueryDenomsRequest,
  proto.kynno.nft.QueryDenomsResponse,
  /**
   * @param {!proto.kynno.nft.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryDenomsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QueryDenomsRequest,
 *   !proto.kynno.nft.QueryDenomsResponse>}
 */
const methodInfo_Query_Denoms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QueryDenomsResponse,
  /**
   * @param {!proto.kynno.nft.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryDenomsResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QueryDenomsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QueryDenomsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.denoms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms,
      callback);
};


/**
 * @param {!proto.kynno.nft.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QueryDenomsResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.denoms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.QueryNFTRequest,
 *   !proto.kynno.nft.QueryNFTResponse>}
 */
const methodDescriptor_Query_NFT = new grpc.web.MethodDescriptor(
  '/kynno.nft.Query/NFT',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.QueryNFTRequest,
  proto.kynno.nft.QueryNFTResponse,
  /**
   * @param {!proto.kynno.nft.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.QueryNFTRequest,
 *   !proto.kynno.nft.QueryNFTResponse>}
 */
const methodInfo_Query_NFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.QueryNFTResponse,
  /**
   * @param {!proto.kynno.nft.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.QueryNFTResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.QueryNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.QueryNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.QueryClient.prototype.nFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT,
      callback);
};


/**
 * @param {!proto.kynno.nft.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.QueryNFTResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.QueryPromiseClient.prototype.nFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT);
};


module.exports = proto.kynno.nft;

