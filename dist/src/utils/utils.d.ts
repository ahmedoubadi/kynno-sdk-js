/// <reference types="node" />
import * as types from '../types';
import { ToBufferInputTypes } from '@ethereumjs/util';
/**
 * KYNNO SDK JS Utils
 * @hidden
 */
export declare class Utils {
    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ab(str: string): Uint8Array;
    /**
     * unarmor Keystore
     * @param string Keystore v1.0
     * @returns types.KeystoreV1
     */
    static unarmor(keystore: string): types.KeystoreV1;
    /**
     * parse Keystore Headers
     * @param string[] KeystoreHeaders string[]
     * @returns types.KeystoreHeader
     */
    static parseKeystoreHeaders(KeystoreHeaders: string[]): types.KeystoreHeader;
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ba(str: string): number[];
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */
    static ab2hexstring(arr: Uint8Array): string;
    /**
     * String to Hex String
     * @param str ASCII string
     * @returns HEX string
     */
    static str2hexstring(str: string): string;
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */
    static obj2hexstring(obj: object): string;
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */
    static int2hex(num: number): string;
    /**
     * Converts a number to a big endian hexstring of a suitable size, optionally little endian
     * @param num Number to convert
     * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
     * @param littleEndian Encode the hex in little endian form
     * @returns HEX string
     */
    static num2hexstring(num: number, size?: number, littleEndian?: boolean): string;
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */
    static num2VarInt(num: number): string;
    /**
     * Reverses an array. Accepts arrayBuffer.
     * @param arr Array to reverse
     * @returns Reversed array
     */
    static reverseArray(arr: Uint8Array): Uint8Array;
    /**
     * Reverses a HEX string, treating 2 chars as a byte.
     * @example
     * reverseHex('abcdef') = 'efcdab'
     * @param hex HEX string
     * @returns HEX string reversed in 2s.
     */
    static reverseHex(hex: string): string;
    /**
     * Checks if input is a hexstring. Empty string is considered a hexstring.
     * @example
     * isHex('0101') = true
     * isHex('') = true
     * isHex('0x01') = false
     * @param str
     * @returns {boolean}
     */
    static isHex(str: string): boolean;
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */
    static ensureHex(str: string): void;
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256ripemd160(hex: string): string;
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256(hex: string): string;
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha3(hex: string): string;
    static sortObject(obj: any): any;
    static base64ToString(b64: string): string;
    static bytesToBase64(bytes: Uint8Array): string;
    /**
     * Decode base64 encoded tags
     * @param tags
     */
    static decodeTags(tags: types.Tag[]): types.Tag[];
    /**
   * get amino prefix from public key encode type.
   * @param public key encode type
   * @returns UintArray
   */
    static getAminoPrefix(prefix: string): Uint8Array;
    /**
     * Pads the front of the given hex string with zeroes until it reaches the
     * target length. If the input string is already longer than or equal to the
     * target length, it is returned unmodified.
     *
     * If the input string is "0x"-prefixed or not a hex string, an error will be
     * thrown.
     *
     * @param hexString - The hexadecimal string to pad with zeroes.
     * @param targetLength - The target length of the hexadecimal string.
     * @returns The input string front-padded with zeroes, or the original string
     * if it was already greater than or equal to to the target length.
     */
    static padWithZeroes(hexString: string, targetLength: number): string;
    /**
     * Returns `true` if the given value is nullish.
     *
     * @param value - The value being checked.
     * @returns Whether the value is nullish.
     */
    static isNullish(value: any): boolean;
    /**
     * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
     * `ethereumjs-util@5.2.1`.
     *
     * @param value - The value to convert to a Buffer.
     * @returns The given value as a Buffer.
     */
    static legacyToBuffer(value: ToBufferInputTypes): Buffer;
    /**
     * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
     *
     * @param v - The 'v' portion of the signature.
     * @param r - The 'r' portion of the signature.
     * @param s - The 's' portion of the signature.
     * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
     */
    static concatSig(v: Buffer, r: Buffer, s: Buffer): string;
    /**
     * Recover the public key from the given signature and message hash.
     *
     * @param messageHash - The hash of the signed message.
     * @param signature - The signature.
     * @returns The public key of the signer.
     */
    static recoverPublicKey(messageHash: Buffer, signature: string): Buffer;
    /**
     * Normalize the input to a lower-cased '0x'-prefixed hex string.
     *
     * @param input - The value to normalize.
     * @returns The normalized value.
     */
    static normalize(input: number | string): string;
    /**
     * Node's Buffer.from() method does not seem to buffer numbers correctly out of the box.
     * This helper method formats the number correct for Buffer.from to return correct buffer.
     *
     * @param num - The number to convert to buffer.
     * @returns The number in buffer form.
     */
    static numberToBuffer(num: number): Buffer;
}
