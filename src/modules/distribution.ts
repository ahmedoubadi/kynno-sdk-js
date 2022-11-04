import {Client} from '../client';
import * as types from '../types';
import * as is from 'is_js';
import { Crypto } from '../utils';
import { ModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';


/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.kynno.io/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.1
 */
export class Distribution {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }


  /**
   * Params queries params of the distribution module.
   */
  queryParams(): Promise<object> {
    const request = new types.distribution_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/Params',
      request,
      types.distribution_query_pb.QueryParamsResponse
    );
  }

  /**
   * ValidatorOutstandingRewards queries rewards of a validator address.
   * @param validator_address Bech32 address
   */
  queryValidatorOutstandingRewards(validator_address:string): Promise<object> {
    if (!validator_address) {
      throw new SdkError("validator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryValidatorOutstandingRewardsRequest();
    request.setValidatorAddress(validator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
      request,
      types.distribution_query_pb.QueryValidatorOutstandingRewardsResponse
    );
  }

  /**
   * ValidatorCommission queries accumulated commission for a validator.
   * @param validator_address Bech32 address
   */
  queryValidatorCommission(validator_address:string): Promise<object> {
    if (!validator_address) {
      throw new SdkError("validator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryValidatorCommissionRequest();
    request.setValidatorAddress(validator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
      request,
      types.distribution_query_pb.QueryValidatorCommissionResponse
    );
  }

  /**
   * ValidatorSlashes queries slash events of a validator.
   * @param validator_address defines the validator address to query for.
   * @param starting_height defines the optional starting height to query the slashes.
   * @param ending_height defines the optional ending height to query the slashes.
   * @param page_number 
   * @param page_size 
   */
  queryValidatorSlashes(
    validator_address:string,
    starting_height:number = 0,
    ending_height:number = 0,
    page_number:number = 1,
    page_size:number = 10
    ): Promise<object> {
    if (!validator_address) {
      throw new SdkError("validator_address can ont be empty");
    }
    const pagination = ModelCreator.createPaginationModel(page_number, page_size, true);
    const request = new types.distribution_query_pb.QueryValidatorSlashesRequest();
    request.setValidatorAddress(validator_address);
    request.setPagination(pagination);
    if (starting_height) {request.setStartingHeight(starting_height);}
    if (ending_height) {request.setEndingHeight(ending_height);}

    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
      request,
      types.distribution_query_pb.QueryValidatorSlashesResponse
    );
  }

  /**
   * DelegationRewards queries the total rewards accrued by a delegation.
   * @param validator_address defines the validator address to query for
   * @param delegator_address defines the delegator address to query for
   */
  queryDelegationRewards(validator_address:string, delegator_address:string): Promise<object> {
    if (!validator_address) {
      throw new SdkError("validator_address can ont be empty");
    }
    if (!delegator_address) {
      throw new SdkError("delegator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryDelegationRewardsRequest();
    request.setValidatorAddress(validator_address);
    request.setDelegatorAddress(delegator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/DelegationRewards',
      request,
      types.distribution_query_pb.QueryDelegationRewardsResponse
    );
  }

  /**
   * DelegationTotalRewards queries the total rewards accrued by a each validator.
   * @param delegator_address defines the delegator address to query for
   */
  queryDelegationTotalRewards(delegator_address:string): Promise<object> {
    if (!delegator_address) {
      throw new SdkError("delegator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryDelegationTotalRewardsRequest();
    request.setDelegatorAddress(delegator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
      request,
      types.distribution_query_pb.QueryDelegationTotalRewardsResponse
    );
  }

  /**
   * DelegatorValidators queries the validators of a delegator.
   * @param delegator_address defines the delegator address to query for
   */
  queryDelegatorValidators(delegator_address:string): Promise<object> {
    if (!delegator_address) {
      throw new SdkError("delegator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryDelegatorValidatorsRequest();
    request.setDelegatorAddress(delegator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
      request,
      types.distribution_query_pb.QueryDelegatorValidatorsResponse
    );
  }

  /**
   * DelegatorWithdrawAddress queries withdraw address of a delegator.
   * @param delegator_address defines the delegator address to query for
   */
  queryDelegatorWithdrawAddress(delegator_address:string): Promise<object> {
    if (!delegator_address) {
      throw new SdkError("delegator_address can ont be empty");
    }
    const request = new types.distribution_query_pb.QueryDelegatorWithdrawAddressRequest();
    request.setDelegatorAddress(delegator_address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
      request,
      types.distribution_query_pb.QueryDelegatorWithdrawAddressResponse
    );
  }

  /**
   * CommunityPool queries the community pool coins.
   */
  queryCommunityPool(): Promise<object> {
    const request = new types.distribution_query_pb.QueryCommunityPoolRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.distribution.v1beta1.Query/CommunityPool',
      request,
      types.distribution_query_pb.QueryCommunityPoolResponse
    );
  }

}
