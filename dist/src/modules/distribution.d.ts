import { Client } from '../client';
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
export declare class Distribution {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Params queries params of the distribution module.
     */
    queryParams(): Promise<object>;
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @param validator_address Bech32 address
     */
    queryValidatorOutstandingRewards(validator_address: string): Promise<object>;
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @param validator_address Bech32 address
     */
    queryValidatorCommission(validator_address: string): Promise<object>;
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @param validator_address defines the validator address to query for.
     * @param starting_height defines the optional starting height to query the slashes.
     * @param ending_height defines the optional ending height to query the slashes.
     * @param page_number
     * @param page_size
     */
    queryValidatorSlashes(validator_address: string, starting_height?: number, ending_height?: number, page_number?: number, page_size?: number): Promise<object>;
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @param validator_address defines the validator address to query for
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegationRewards(validator_address: string, delegator_address: string): Promise<object>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegationTotalRewards(delegator_address: string): Promise<object>;
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegatorValidators(delegator_address: string): Promise<object>;
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegatorWithdrawAddress(delegator_address: string): Promise<object>;
    /**
     * CommunityPool queries the community pool coins.
     */
    queryCommunityPool(): Promise<object>;
}
