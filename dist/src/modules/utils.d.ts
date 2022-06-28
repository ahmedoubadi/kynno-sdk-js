import { Client } from '../client';
/**
 * Utils for the KYNNO SDK
 * @category Modules
 * @since v0.17
 */
export declare class Utils {
    /** @hidden */
    private client;
    /** @hidden */
    private mathConfig;
    /** @hidden */
    private math;
    /** @hidden */
    constructor(client: Client);
    toKynno(address: string): any;
    toEth(address: string): string;
}
