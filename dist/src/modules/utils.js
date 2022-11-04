"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils/utils");

var utils = _interopRequireWildcard(require("../utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Utils for the KYNNO SDK
 * @category Modules
 * @since v0.1
 */
var Utils = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Utils(client) {
    (0, _classCallCheck2["default"])(this, Utils);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }

  (0, _createClass2["default"])(Utils, [{
    key: "toKynno",
    value: function toKynno(address) {
      return utils.ethToKynno(address);
    }
  }, {
    key: "toEth",
    value: function toEth(address) {
      return utils.kynnoToEth(address);
    }
  }, {
    key: "toCosmos",
    value: function toCosmos(address) {
      return utils.ethToCosmos(address);
    }
  }, {
    key: "toOsmosis",
    value: function toOsmosis(address) {
      return utils.ethToOsmosis(address);
    }
    /**
     * Packs non-standard encoded values packed according to their respective type in types in a buffer.
     *
     * @param types - Array of types of each value to encode.
     * @param values - Array of values to encode.
     * @returns A buffer containing the packed values.
     */

  }, {
    key: "solidityPack",
    value: function solidityPack(types, values) {
      return utils.solidityPack(types, values);
    }
    /**
     * Parse a number for determining a solidity hexvalue.
     *
     * @param arg - Number to parse.
     * @returns Parsed value.
     */

  }, {
    key: "parseNumber",
    value: function parseNumber(arg) {
      return utils.parseNumber(arg);
    }
    /**
     * Checks if a value is an array (represented as a string).
     *
     * @param type - The value to check whether it is an array.
     * @returns A boolean indicating whether the passed value is an array.
     */

  }, {
    key: "isArray",
    value: function isArray(type) {
      return utils.isArray(type);
    }
    /**
     * Recover the public key from the given signature and message hash.
     *
     * @param messageHash - The hash of the signed message.
     * @param signature - The signature.
     * @returns The public key of the signer.
     */

  }, {
    key: "recoverPublicKey",
    value: function recoverPublicKey(messageHash, signature) {
      return _utils.Utils.recoverPublicKey(messageHash, signature);
    }
    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */

  }, {
    key: "str2ab",
    value: function str2ab(str) {
      return _utils.Utils.str2ab(str);
    }
    /**
     * unarmor Keystore
     * @param string Keystore v1.0
     * @returns types.KeystoreV1
     */

  }, {
    key: "unarmor",
    value: function unarmor(keystore) {
      return _utils.Utils.unarmor(keystore);
    }
    /**
     * parse Keystore Headers
     * @param string[] KeystoreHeaders string[]
     * @returns types.KeystoreHeader
     */

  }, {
    key: "parseKeystoreHeaders",
    value: function parseKeystoreHeaders(KeystoreHeaders) {
      return _utils.Utils.parseKeystoreHeaders(KeystoreHeaders);
    }
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */

  }, {
    key: "str2ba",
    value: function str2ba(str) {
      return _utils.Utils.str2ba(str);
    }
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */

  }, {
    key: "ab2hexstring",
    value: function ab2hexstring(arr) {
      return _utils.Utils.ab2hexstring(arr);
    }
    /**
     * String to Hex String
     * @param str ASCII string
     * @returns HEX string
     */

  }, {
    key: "str2hexstring",
    value: function str2hexstring(str) {
      return _utils.Utils.str2hexstring(str);
    }
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */

  }, {
    key: "obj2hexstring",
    value: function obj2hexstring(obj) {
      return _utils.Utils.obj2hexstring(obj);
    }
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */

  }, {
    key: "int2hex",
    value: function int2hex(num) {
      return _utils.Utils.int2hex(num);
    }
    /**
     * Converts a number to a big endian hexstring of a suitable size, optionally little endian
     * @param num Number to convert
     * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
     * @param littleEndian Encode the hex in little endian form
     * @returns HEX string
     */

  }, {
    key: "num2hexstring",
    value: function num2hexstring(num) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return _utils.Utils.num2hexstring(num, size, littleEndian);
    }
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */

  }, {
    key: "num2VarInt",
    value: function num2VarInt(num) {
      return _utils.Utils.num2VarInt(num);
    }
    /**
     * Reverses an array. Accepts arrayBuffer.
     * @param arr Array to reverse
     * @returns Reversed array
     */

  }, {
    key: "reverseArray",
    value: function reverseArray(arr) {
      return _utils.Utils.reverseArray(arr);
    }
    /**
     * Reverses a HEX string, treating 2 chars as a byte.
     * @example
     * reverseHex('abcdef') = 'efcdab'
     * @param hex HEX string
     * @returns HEX string reversed in 2s.
     */

  }, {
    key: "reverseHex",
    value: function reverseHex(hex) {
      return _utils.Utils.reverseHex(hex);
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

  }, {
    key: "isHex",
    value: function isHex(str) {
      return _utils.Utils.isHex(str);
    }
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */

  }, {
    key: "ensureHex",
    value: function ensureHex(str) {
      return _utils.Utils.ensureHex(str);
    }
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256ripemd160",
    value: function sha256ripemd160(hex) {
      return _utils.Utils.sha256ripemd160(hex);
    }
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256",
    value: function sha256(hex) {
      return _utils.Utils.sha256(hex);
    }
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha3",
    value: function sha3(hex) {
      return _utils.Utils.sha3(hex);
    }
  }, {
    key: "sortObject",
    value: function sortObject(obj) {
      return _utils.Utils.sortObject(obj);
    }
  }, {
    key: "base64ToString",
    value: function base64ToString(b64) {
      return _utils.Utils.sortObject(b64);
    }
  }, {
    key: "bytesToBase64",
    value: function bytesToBase64(bytes) {
      return _utils.Utils.bytesToBase64(bytes);
    }
    /**
     * Decode base64 encoded tags
     * @param tags
     */

  }, {
    key: "decodeTags",
    value: function decodeTags(tags) {
      return _utils.Utils.decodeTags(tags);
    }
    /**
    * get amino prefix from public key encode type.
    * @param public key encode type
    * @returns UintArray
    */

  }, {
    key: "getAminoPrefix",
    value: function getAminoPrefix(prefix) {
      return _utils.Utils.getAminoPrefix(prefix);
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

  }, {
    key: "padWithZeroes",
    value: function padWithZeroes(hexString, targetLength) {
      return _utils.Utils.padWithZeroes(hexString, targetLength);
    }
    /**
     * Returns `true` if the given value is nullish.
     *
     * @param value - The value being checked.
     * @returns Whether the value is nullish.
     */

  }, {
    key: "isNullish",
    value: function isNullish(value) {
      return _utils.Utils.isNullish(value);
    }
    /**
     * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
     * `ethereumjs-util@5.2.1`.
     *
     * @param value - The value to convert to a Buffer.
     * @returns The given value as a Buffer.
     */

  }, {
    key: "legacyToBuffer",
    value: function legacyToBuffer(value) {
      return _utils.Utils.legacyToBuffer(value);
    }
    /**
     * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
     *
     * @param v - The 'v' portion of the signature.
     * @param r - The 'r' portion of the signature.
     * @param s - The 's' portion of the signature.
     * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
     */

  }, {
    key: "concatSig",
    value: function concatSig(v, r, s) {
      return _utils.Utils.concatSig(v, r, s);
    }
    /**
     * Normalize the input to a lower-cased '0x'-prefixed hex string.
     *
     * @param input - The value to normalize.
     * @returns The normalized value.
     */

  }, {
    key: "normalize",
    value: function normalize(input) {
      return _utils.Utils.normalize(input);
    }
    /**
     * Node's Buffer.from() method does not seem to buffer numbers correctly out of the box.
     * This helper method formats the number correct for Buffer.from to return correct buffer.
     *
     * @param num - The number to convert to buffer.
     * @returns The number in buffer form.
     */

  }, {
    key: "numberToBuffer",
    value: function numberToBuffer(num) {
      return _utils.Utils.numberToBuffer(num);
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;