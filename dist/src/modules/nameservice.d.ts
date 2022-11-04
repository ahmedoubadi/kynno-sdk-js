import { Client } from '../client';
import * as types from '../types';
/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
export declare class NameService {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * create Name
     * @param name string
     * @param value string
     * @returns
     * @since v1.0.0
     */
    createName(name: string, value: string): Promise<types.TxMessage>;
    /**
   * resolve Name data
   * @param name string
   * @returns
   * @since v1.0.0
   */
    resolve(name: string): Promise<types.NameData>;
    ownerOf(name: string): Promise<string>;
    /**
        * transfer ownership of the name
        * @param from string
        * @param to string
        * @param name string
        * @returns
        * @since v1.0.0
    */
    transfer(from: string, to: string, name: string): Promise<types.TxMessage>;
    /**
        * deleting the name
        * @param name string
        * @returns
        * @since v1.0.0
    */
    burn(name: string): Promise<types.TxMessage>;
    /**
        * Changing the value of a name
        * @param name string
        * @param value string
        * @returns
        * @since v1.0.0
    */
    setValue(name: string, value: string): Promise<types.TxMessage>;
}
