import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError, CODES } from '../errors';

/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 *
 * [More Details](https://www.kynno.io/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.1
 */
export class Bank {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }


  /**
   * Balance queries the balance of a single coin for a single account.
   * @param address is the address to query balances for.
   * @param denom is the coin denom to query balances for.
   */
  queryBalance(address:string, denom:string): Promise<object> {
    if (!address) {
      throw new SdkError("address can ont be empty");
    }
    if (!denom) {
      throw new SdkError("denom can ont be empty");
    }
    const request = new types.bank_query_pb.QueryBalanceRequest();
    request.setAddress(address);
    request.setDenom(denom);

    return this.client.rpcClient.protoQuery(
      '/cosmos.bank.v1beta1.Query/Balance',
      request,
      types.bank_query_pb.QueryBalanceResponse
    );
  }

  /**
   * AllBalances queries the balance of all coins for a single account.
   * @param address is the address to query balances for.
   */
  queryAllBalances(address:string,height?: string): Promise<object> {
    if (!address) {
      throw new SdkError("address can ont be empty");
    }
    const request = new types.bank_query_pb.QueryAllBalancesRequest();
    request.setAddress(address);

    return this.client.rpcClient.protoQuery(
      '/cosmos.bank.v1beta1.Query/AllBalances',
      request,
      types.bank_query_pb.QueryAllBalancesResponse,
      height
    );
  }

  /**
   * TotalSupply queries the total supply of all coins.
   */
  queryTotalSupply(): Promise<object> {
    const request = new types.bank_query_pb.QueryTotalSupplyRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.bank.v1beta1.Query/TotalSupply',
      request,
      types.bank_query_pb.QueryTotalSupplyResponse
    );
  }

  /**
   * SupplyOf queries the supply of a single coin.
   * @param denom is the coin denom to query balances for.
   */
  querySupplyOf(denom:string): Promise<object> {
    if (!denom) {
      throw new SdkError("denom can ont be empty");
    }
    const request = new types.bank_query_pb.QuerySupplyOfRequest();
    request.setDenom(denom);
    return this.client.rpcClient.protoQuery(
      '/cosmos.bank.v1beta1.Query/SupplyOf',
      request,
      types.bank_query_pb.QuerySupplyOfResponse
    );
  }

  /**
   * Params queries the parameters of x/bank module.
   */
  queryParams(): Promise<object> {
    const request = new types.bank_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.bank.v1beta1.Query/Params',
      request,
      types.bank_query_pb.QueryParamsResponse
    );
  }
}
