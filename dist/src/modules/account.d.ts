import { Client } from '../client';
import * as types from '../types';
import { AxiosRequestConfig } from 'axios';
/**
 * Account module is only used to query `Account data`
 *
 * @category Modules
 * @since v0.1
 */
export declare class Account {
    /** @hidden */
    private client;
    /** @hidden */
    private instance;
    /** @hidden */
    private config;
    /** @hidden */
    constructor(client: Client, config: AxiosRequestConfig);
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
    queryAccount(address: string): Promise<types.AccountResponse>;
    request<T>(endpoint: string): Promise<T>;
}
