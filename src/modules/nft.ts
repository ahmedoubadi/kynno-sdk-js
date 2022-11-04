import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
import { ethers } from 'ethers';

/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
export class Nft {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }
  /**
   * Supply queries the total supply of a given denom or owner
   * @param denom_id
   * @param owner
   */
  querySupply(denom_id?:string, owner?:string): Promise<object> {
    if (!denom_id && !owner) {
      throw new SdkError("there must be one denom_id or owner");
    }
    const request = new types.nft_query_pb.QuerySupplyRequest();
    if (denom_id) {request.setDenomId(denom_id)}
    if (owner) {request.setOwner(owner)}

    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/Supply',
      request,
      types.nft_query_pb.QuerySupplyResponse
    );
  }

  /**
   * Owner queries the NFTs of the specified owner
   * @param owner
   * @param denom_id
   */
  queryOwner(owner:string, denom_id?:string): Promise<object> {
    if (!owner) {
      throw new SdkError("owner can ont be empty");
    }
    const request = new types.nft_query_pb.QueryOwnerRequest();
    request.setOwner(owner);
    if (denom_id) {request.setDenomId(denom_id)}

    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/Owner',
      request,
      types.nft_query_pb.QueryOwnerResponse
    );
  }

  /**
   * Collection queries the NFTs of the specified denom
   * @param denom_id
   */
  queryCollection(denom_id:string): Promise<object> {
    if (!denom_id) {
      throw new SdkError("denom_id can ont be empty");
    }
    const request = new types.nft_query_pb.QueryCollectionRequest();
    request.setDenomId(denom_id);

    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/Collection',
      request,
      types.nft_query_pb.QueryCollectionResponse
    );
  }

  /**
   * Denom queries the definition of a given denom
   * @param denom_id
   */
  queryDenom(denom_id:string): Promise<object> {
    if (!denom_id) {
      throw new SdkError("denom_id can ont be empty");
    }
    const request = new types.nft_query_pb.QueryDenomRequest();
    request.setDenomId(denom_id);

    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/Denom',
      request,
      types.nft_query_pb.QueryDenomResponse
    );
  }

  /**
   * Denoms queries all the denoms
   */
  queryDenoms(): Promise<object> {
    const request = new types.nft_query_pb.QueryDenomsRequest();
    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/Denoms',
      request,
      types.nft_query_pb.QueryDenomsResponse
    );
  }

  /**
   * NFT queries the NFT for the given denom and token ID
   * @param denom_id
   * @param token_id
   */
  queryNFT(denom_id:string, token_id:string): Promise<object> {
    if (!denom_id) {
      throw new SdkError("denom_id can ont be empty");
    }
    if (!token_id) {
      throw new SdkError("token_id can ont be empty");
    }
    const request = new types.nft_query_pb.QueryNFTRequest();
    request.setDenomId(denom_id);
    request.setTokenId(token_id);

    return this.client.rpcClient.protoQuery(
      '/kynno.nft.Query/NFT',
      request,
      types.nft_query_pb.QueryNFTResponse
    );
  }
}
