import { Client } from '../client';
/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
export declare class Nft {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Supply queries the total supply of a given denom or owner
     * @param denom_id
     * @param owner
     */
    querySupply(denom_id?: string, owner?: string): Promise<object>;
    /**
     * Owner queries the NFTs of the specified owner
     * @param owner
     * @param denom_id
     */
    queryOwner(owner: string, denom_id?: string): Promise<object>;
    /**
     * Collection queries the NFTs of the specified denom
     * @param denom_id
     */
    queryCollection(denom_id: string): Promise<object>;
    /**
     * Denom queries the definition of a given denom
     * @param denom_id
     */
    queryDenom(denom_id: string): Promise<object>;
    /**
     * Denoms queries all the denoms
     */
    queryDenoms(): Promise<object>;
    /**
     * NFT queries the NFT for the given denom and token ID
     * @param denom_id
     * @param token_id
     */
    queryNFT(denom_id: string, token_id: string): Promise<object>;
}
