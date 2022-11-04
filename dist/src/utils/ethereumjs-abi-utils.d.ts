/// <reference types="node" />
/**
 * Packs non-standard encoded values packed according to their respective type in types in a buffer.
 *
 * @param types - Array of types of each value to encode.
 * @param values - Array of values to encode.
 * @returns A buffer containing the packed values.
 */
export declare function solidityPack(types: string[], values: any[]): Buffer;
/**
 * Checks if a value is an array (represented as a string).
 *
 * @param type - The value to check whether it is an array.
 * @returns A boolean indicating whether the passed value is an array.
 */
export declare function isArray(type: any): boolean;
/**
 * Parse a number for determining a solidity hexvalue.
 *
 * @param arg - Number to parse.
 * @returns Parsed value.
 */
export declare function parseNumber(arg: any): any;
/**
 * @param types
 * @param values
 */
export declare function rawEncode(types: any, values: any): Buffer;
