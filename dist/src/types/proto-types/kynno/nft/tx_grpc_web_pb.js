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
const proto = {};
proto.kynno = {};
proto.kynno.nft = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kynno.nft.MsgClient =
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
proto.kynno.nft.MsgPromiseClient =
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
 *   !proto.kynno.nft.MsgIssueDenom,
 *   !proto.kynno.nft.MsgIssueDenomResponse>}
 */
const methodDescriptor_Msg_IssueDenom = new grpc.web.MethodDescriptor(
  '/kynno.nft.Msg/IssueDenom',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.MsgIssueDenom,
  proto.kynno.nft.MsgIssueDenomResponse,
  /**
   * @param {!proto.kynno.nft.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.MsgIssueDenom,
 *   !proto.kynno.nft.MsgIssueDenomResponse>}
 */
const methodInfo_Msg_IssueDenom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.MsgIssueDenomResponse,
  /**
   * @param {!proto.kynno.nft.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.MsgIssueDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.MsgIssueDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.MsgClient.prototype.issueDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom,
      callback);
};


/**
 * @param {!proto.kynno.nft.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.MsgIssueDenomResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.MsgPromiseClient.prototype.issueDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.MsgMintNFT,
 *   !proto.kynno.nft.MsgMintNFTResponse>}
 */
const methodDescriptor_Msg_MintNFT = new grpc.web.MethodDescriptor(
  '/kynno.nft.Msg/MintNFT',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.MsgMintNFT,
  proto.kynno.nft.MsgMintNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgMintNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgMintNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.MsgMintNFT,
 *   !proto.kynno.nft.MsgMintNFTResponse>}
 */
const methodInfo_Msg_MintNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.MsgMintNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgMintNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgMintNFTResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.MsgMintNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.MsgMintNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.MsgClient.prototype.mintNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT,
      callback);
};


/**
 * @param {!proto.kynno.nft.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.MsgMintNFTResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.MsgPromiseClient.prototype.mintNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.MsgEditNFT,
 *   !proto.kynno.nft.MsgEditNFTResponse>}
 */
const methodDescriptor_Msg_EditNFT = new grpc.web.MethodDescriptor(
  '/kynno.nft.Msg/EditNFT',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.MsgEditNFT,
  proto.kynno.nft.MsgEditNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgEditNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgEditNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.MsgEditNFT,
 *   !proto.kynno.nft.MsgEditNFTResponse>}
 */
const methodInfo_Msg_EditNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.MsgEditNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgEditNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgEditNFTResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.MsgEditNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.MsgEditNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.MsgClient.prototype.editNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT,
      callback);
};


/**
 * @param {!proto.kynno.nft.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.MsgEditNFTResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.MsgPromiseClient.prototype.editNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.MsgTransferNFT,
 *   !proto.kynno.nft.MsgTransferNFTResponse>}
 */
const methodDescriptor_Msg_TransferNFT = new grpc.web.MethodDescriptor(
  '/kynno.nft.Msg/TransferNFT',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.MsgTransferNFT,
  proto.kynno.nft.MsgTransferNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgTransferNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgTransferNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.MsgTransferNFT,
 *   !proto.kynno.nft.MsgTransferNFTResponse>}
 */
const methodInfo_Msg_TransferNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.MsgTransferNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgTransferNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgTransferNFTResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.MsgTransferNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.MsgTransferNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.MsgClient.prototype.transferNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT,
      callback);
};


/**
 * @param {!proto.kynno.nft.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.MsgTransferNFTResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.MsgPromiseClient.prototype.transferNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kynno.nft.MsgBurnNFT,
 *   !proto.kynno.nft.MsgBurnNFTResponse>}
 */
const methodDescriptor_Msg_BurnNFT = new grpc.web.MethodDescriptor(
  '/kynno.nft.Msg/BurnNFT',
  grpc.web.MethodType.UNARY,
  proto.kynno.nft.MsgBurnNFT,
  proto.kynno.nft.MsgBurnNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgBurnNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgBurnNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kynno.nft.MsgBurnNFT,
 *   !proto.kynno.nft.MsgBurnNFTResponse>}
 */
const methodInfo_Msg_BurnNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kynno.nft.MsgBurnNFTResponse,
  /**
   * @param {!proto.kynno.nft.MsgBurnNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kynno.nft.MsgBurnNFTResponse.deserializeBinary
);


/**
 * @param {!proto.kynno.nft.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kynno.nft.MsgBurnNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kynno.nft.MsgBurnNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kynno.nft.MsgClient.prototype.burnNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kynno.nft.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT,
      callback);
};


/**
 * @param {!proto.kynno.nft.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kynno.nft.MsgBurnNFTResponse>}
 *     Promise that resolves to the response
 */
proto.kynno.nft.MsgPromiseClient.prototype.burnNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kynno.nft.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT);
};


module.exports = proto.kynno.nft;

