export * as types from './types';
export * as utils from './utils';
export { Client, ClientConfig, KeyDAO } from './client';
export { Crypto } from "./utils";
import { Client, ClientConfig } from './client';
/**
 * Initialize Kynno SDK
 *
 * @param config Kynno SDK [[ClientConfig]]
 *
 * @returns New Kynno SDK Instance
 */
export declare function newClient(config: ClientConfig): Client;
