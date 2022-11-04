import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';
import { SdkError, CODES } from '../errors';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { generateEndpointAccount } from '../nets/endpoint';

/**
 * Account module is only used to query `Account data`
 *
 * @category Modules
 * @since v0.1
 */
export class Account {
  /** @hidden */
  private client: Client;
  /** @hidden */
  private instance: AxiosInstance;
  /** @hidden */
  private config: AxiosRequestConfig;
  /** @hidden */
  constructor(client: Client,config: AxiosRequestConfig) {
    this.client = client;
    if (is.empty(config)) {
      throw new SdkError('RpcClient Config not initialized');
    }
    if (is.empty(config.baseURL)) {
      throw new SdkError('baseURL of RpcClient cannot be empty');
    }
    if (is.empty(config.timeout)) {
      config.timeout = 2000; // Set default timeout
    }

    config.url = '/'; // Fixed url

    this.config = config;
    this.instance = axios.create(config);
  }

  /**
   * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
   *
   * **NOTE:** The first signature is the fee payer
   *
   * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
   * @param url Rpc address of kynno node
   *
   * @returns
   * @since v0.1
   */

  /**
   * Account returns account details based on address.
   * @param address defines the address to query for.
   */
  queryAccount(address:string): Promise<types.AccountResponse> {
    if (address.split('0x').length == 2) {
      address = this.client.utils.toKynno(address)
    }
    const endpoint = generateEndpointAccount(address)
    return this.request<any>(endpoint)
      .then(res => {
        return res
      });
  }
    
  request<T>(endpoint: string): Promise<T> {
    
    return this.instance
      .get<any>(this.client.config.api+endpoint,this.config)
      .then(response => {
        const res = response.data;
        // Internal error
        if (res.error) {
          throw new SdkError(res.error.message, res.error.code, `api_account`);
        }

        return res;
      });
  }
}
