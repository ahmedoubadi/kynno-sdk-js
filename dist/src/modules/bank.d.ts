import { Client } from '../client';
/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 *
 * [More Details](https://www.kynno.io/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.1
 */
export declare class Bank {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Balance queries the balance of a single coin for a single account.
     * @param address is the address to query balances for.
     * @param denom is the coin denom to query balances for.
     */
    queryBalance(address: string, denom: string): Promise<object>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @param address is the address to query balances for.
     */
    queryAllBalances(address: string, height?: string): Promise<object>;
    /**
     * TotalSupply queries the total supply of all coins.
     */
    queryTotalSupply(): Promise<object>;
    /**
     * SupplyOf queries the supply of a single coin.
     * @param denom is the coin denom to query balances for.
     */
    querySupplyOf(denom: string): Promise<object>;
    /**
     * Params queries the parameters of x/bank module.
     */
    queryParams(): Promise<object>;
}
