import { Client } from '../client';
import { Utils as Extended } from '../utils/utils';
import * as utils from '../utils';
import { types } from '..';
import { ToBufferInputTypes } from '@ethereumjs/util';

/**
 * Utils for the KYNNO SDK
 * @category Modules
 * @since v0.1
 */
export class Utils {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }
  toKynno(address:string){
    return utils.ethToKynno(address)
  }
  toEth(address:string){
    return utils.kynnoToEth(address)
  }
  toCosmos(address:string){
    return utils.ethToCosmos(address)
  }
  toOsmosis(address:string){
    return utils.ethToOsmosis(address)
  }
  /**
   * Packs non-standard encoded values packed according to their respective type in types in a buffer.
   *
   * @param types - Array of types of each value to encode.
   * @param values - Array of values to encode.
   * @returns A buffer containing the packed values.
   */
  solidityPack(types: string[], values: any[]){
    return utils.solidityPack(types,values)
  }
  /**
   * Parse a number for determining a solidity hexvalue.
   *
   * @param arg - Number to parse.
   * @returns Parsed value.
   */
  parseNumber(arg:any) {
    return utils.parseNumber(arg)
  }

  /**
   * Checks if a value is an array (represented as a string).
   *
   * @param type - The value to check whether it is an array.
   * @returns A boolean indicating whether the passed value is an array.
   */
  isArray(type:any) {
    return utils.isArray(type)
  }
  /**
   * Recover the public key from the given signature and message hash.
   *
   * @param messageHash - The hash of the signed message.
   * @param signature - The signature.
   * @returns The public key of the signer.
   */
  recoverPublicKey(messageHash: Buffer,signature: string):Buffer{
    return Extended.recoverPublicKey(messageHash,signature)
  }

  /**
   * String to ArrayBuffer
   * @param str ASCII string
   * @returns Uint8Array
   */
   str2ab(str: string): Uint8Array {
    return Extended.str2ab(str)
  }

  /**
   * unarmor Keystore
   * @param string Keystore v1.0
   * @returns types.KeystoreV1
   */
  unarmor(keystore: string): types.KeystoreV1 {
    return Extended.unarmor(keystore)
  }

  /**
   * parse Keystore Headers
   * @param string[] KeystoreHeaders string[]
   * @returns types.KeystoreHeader
   */
  parseKeystoreHeaders(KeystoreHeaders: string[]): types.KeystoreHeader {
    
    return Extended.parseKeystoreHeaders(KeystoreHeaders);
  }

  /**
   * String to Byte Array
   * @param str ASCII string
   * @returns Uint8Array
   */
  str2ba(str: string): number[] {
    return Extended.str2ba(str)
  }

  /**
   * ArrayBuffer to String
   * @param arr Uint8Array
   * @returns HEX string
   */
  ab2hexstring(arr: Uint8Array): string {
    return Extended.ab2hexstring(arr);
  }

  /**
   * String to Hex String
   * @param str ASCII string
   * @returns HEX string
   */
  str2hexstring(str: string): string {
    return Extended.str2hexstring(str);
  }

  /**
   * Object to Hex String
   * @param obj Json Object
   * @returns HEX string
   */
  obj2hexstring(obj: object): string {
    return Extended.obj2hexstring(obj);
  }

  /**
   * Convert an integer to big endian hex and add leading zeros
   * @param num The number to be converted
   * @returns HEX string
   */
  int2hex(num: number) {
    return Extended.int2hex(num);
  }

  /**
   * Converts a number to a big endian hexstring of a suitable size, optionally little endian
   * @param num Number to convert
   * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
   * @param littleEndian Encode the hex in little endian form
   * @returns HEX string
   */
  num2hexstring(num: number, size = 1, littleEndian = false) {
    return Extended.num2hexstring(num,size,littleEndian);
  }

  /**
   * Converts a number to a variable length Int. Used for array length header
   * @param num Number to convert
   * @returns HEX string of the variable Int.
   */
  num2VarInt(num: number) {
    return Extended.num2VarInt(num);
  }

  /**
   * Reverses an array. Accepts arrayBuffer.
   * @param arr Array to reverse
   * @returns Reversed array
   */
  reverseArray(arr: Uint8Array): Uint8Array {
    return Extended.reverseArray(arr);
  }

  /**
   * Reverses a HEX string, treating 2 chars as a byte.
   * @example
   * reverseHex('abcdef') = 'efcdab'
   * @param hex HEX string
   * @returns HEX string reversed in 2s.
   */
  reverseHex(hex: string): string {
    return Extended.reverseHex(hex);
  }

  /**
   * Checks if input is a hexstring. Empty string is considered a hexstring.
   * @example
   * isHex('0101') = true
   * isHex('') = true
   * isHex('0x01') = false
   * @param str
   * @returns {boolean}
   */
  isHex(str: string): boolean {
    return Extended.isHex(str);
  }

  /**
   * Throws an error if input is not hexstring.
   * @param str
   */
  ensureHex(str: string) {
    return Extended.ensureHex(str);
  }

  /**
   * Computes a SHA256 followed by a RIPEMD160.
   * @param hex Message to hash
   * @returns Hash output
   */
  sha256ripemd160(hex: string): string {
    return Extended.sha256ripemd160(hex);
  }

  /**
   * Computes a single SHA256 digest.
   * @param hex Message to hash
   * @returns Hash output
   */
  sha256(hex: string): string {
    return Extended.sha256(hex);
  }

  /**
   * Computes a single SHA3 (Keccak) digest.
   * @param hex Message to hash
   * @returns Hash output
   */
  sha3(hex: string): string {
    return Extended.sha3(hex);
  }

  sortObject(obj: any): any {
    return Extended.sortObject(obj);
  }

  base64ToString(b64: string): string {
    return Extended.sortObject(b64);
  }

  bytesToBase64(bytes:Uint8Array):string{
    return Extended.bytesToBase64(bytes);
  }

  /**
   * Decode base64 encoded tags
   * @param tags
   */
  decodeTags(tags: types.Tag[]): types.Tag[] {
    return Extended.decodeTags(tags);
  }

    /**
   * get amino prefix from public key encode type.
   * @param public key encode type
   * @returns UintArray
   */
  getAminoPrefix(prefix:string):Uint8Array{
    return Extended.getAminoPrefix(prefix);
  }
  
  
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
  padWithZeroes(hexString: string, targetLength: number): string {
    return Extended.padWithZeroes(hexString, targetLength);
  }
  
  /**
   * Returns `true` if the given value is nullish.
   *
   * @param value - The value being checked.
   * @returns Whether the value is nullish.
   */
  isNullish(value:any) {
    return Extended.isNullish(value);
  }
  
  /**
   * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
   * `ethereumjs-util@5.2.1`.
   *
   * @param value - The value to convert to a Buffer.
   * @returns The given value as a Buffer.
   */
  legacyToBuffer(value: ToBufferInputTypes) {
    return Extended.legacyToBuffer(value);
  }
  
  /**
   * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
   *
   * @param v - The 'v' portion of the signature.
   * @param r - The 'r' portion of the signature.
   * @param s - The 's' portion of the signature.
   * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
   */
  concatSig(v: Buffer, r: Buffer, s: Buffer): string {
    return Extended.concatSig(v,r,s);
  }
  
  /**
   * Normalize the input to a lower-cased '0x'-prefixed hex string.
   *
   * @param input - The value to normalize.
   * @returns The normalized value.
   */
  normalize(input: number | string): string {
    return Extended.normalize(input);
  }
  
  /**
   * Node's Buffer.from() method does not seem to buffer numbers correctly out of the box.
   * This helper method formats the number correct for Buffer.from to return correct buffer.
   *
   * @param num - The number to convert to buffer.
   * @returns The number in buffer form.
   */
  numberToBuffer(num: number) {
    return Extended.numberToBuffer(num);
  }
}
