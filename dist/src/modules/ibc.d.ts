import { Client } from '../client';
/**
 * This module implements IBC related functions
 *
 *
 * @category Modules
 * @since v0.1
 */
export declare class Ibc {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * DenomTrace queries a denomination trace information.
     * @param hash (in hex format) of the denomination trace information.
     */
    queryDenomTrace(hash: string): Promise<object>;
    /**
     * DenomTraces queries all denomination traces.
     */
    queryDenomTraces(page_number?: number, page_size?: number): Promise<object>;
    /**
     * Params queries all parameters of the ibc-transfer module.
     */
    queryParams(): Promise<object>;
    /**
     * Channels queries all the IBC channels of a chain.
     */
    queryChannels(page_number?: number, page_size?: number): Promise<object>;
}
