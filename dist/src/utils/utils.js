"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var hexEncoding = _interopRequireWildcard(require("crypto-js/enc-hex"));

var SHA3 = _interopRequireWildcard(require("crypto-js/sha3"));

var SHA256 = _interopRequireWildcard(require("crypto-js/sha256"));

var RIPEMD160 = _interopRequireWildcard(require("crypto-js/ripemd160"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../errors");

var types = _interopRequireWildcard(require("../types"));

var _util = require("@ethereumjs/util");

var _ethjsUtil = require("ethjs-util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * KYNNO SDK JS Utils
 * @hidden
 */
var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }

  (0, _createClass2["default"])(Utils, null, [{
    key: "str2ab",
    value:
    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */
    function str2ab(str) {
      if (typeof str !== 'string') {
        throw new _errors.SdkError('str2ab expects a string', _errors.CODES.Internal);
      }

      var result = new Uint8Array(str.length);

      for (var i = 0, strLen = str.length; i < strLen; i++) {
        result[i] = str.charCodeAt(i);
      }

      return result;
    }
    /**
     * unarmor Keystore
     * @param string Keystore v1.0
     * @returns types.KeystoreV1
     */

  }, {
    key: "unarmor",
    value: function unarmor(keystore) {
      var keystoreTest = new RegExp("^(".concat(types.keystoreStructure.prefix, ")([\\s\\S]*)(").concat(types.keystoreStructure.suffix, ")$"));

      if (keystoreTest.test(keystore)) {
        var clearTest = new RegExp("^(".concat(types.keystoreStructure.prefix, ")|(").concat(types.keystoreStructure.suffix, ")$"), 'g');
        keystore = keystore.replace(clearTest, '');
        var datas = keystore.split('\n');

        if (!datas || !datas.length) {
          throw new _errors.SdkError('Invalid keystore', _errors.CODES.InvalidType);
        }

        datas = datas.filter(function (item) {
          return item.trim().length;
        });
        var headers = datas.filter(function (item) {
          return item.indexOf(':') != -1;
        });
        var contents = datas.filter(function (item) {
          return item.indexOf(':') == -1;
        });

        if (/^=/.test(contents[contents.length - 1])) {
          delete contents[contents.length - 1];
        }

        var header = Utils.parseKeystoreHeaders(headers);
        var content = contents.join('');
        return {
          header: header,
          data: content
        };
      } else {
        throw new _errors.SdkError('Invalid keystore', _errors.CODES.InvalidType);
      }
    }
    /**
     * parse Keystore Headers
     * @param string[] KeystoreHeaders string[]
     * @returns types.KeystoreHeader
     */

  }, {
    key: "parseKeystoreHeaders",
    value: function parseKeystoreHeaders(KeystoreHeaders) {
      var header = {};

      if (KeystoreHeaders && KeystoreHeaders.length) {
        KeystoreHeaders.forEach(function (item) {
          var contents = item.split(':');

          if (contents.length == 2) {
            header[contents[0]] = contents[1].trim();
          }
        });
      }

      return header;
    }
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */

  }, {
    key: "str2ba",
    value: function str2ba(str) {
      if (typeof str !== 'string') {
        throw new _errors.SdkError('str2ba expects a string', _errors.CODES.Internal);
      }

      var result = [];

      for (var i = 0, strLen = str.length; i < strLen; i++) {
        result[i] = str.charCodeAt(i);
      }

      return result;
    }
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */

  }, {
    key: "ab2hexstring",
    value: function ab2hexstring(arr) {
      if ((0, _typeof2["default"])(arr) !== 'object') {
        throw new _errors.SdkError('ab2hexstring expects an array', _errors.CODES.Internal);
      }

      var result = '';

      for (var i = 0; i < arr.length; i++) {
        var str = arr[i].toString(16);
        str = str.length === 0 ? '00' : str.length === 1 ? '0' + str : str;
        result += str;
      }

      return result;
    }
    /**
     * String to Hex String
     * @param str ASCII string
     * @returns HEX string
     */

  }, {
    key: "str2hexstring",
    value: function str2hexstring(str) {
      return Utils.ab2hexstring(Utils.str2ab(str));
    }
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */

  }, {
    key: "obj2hexstring",
    value: function obj2hexstring(obj) {
      return Utils.str2hexstring(JSON.stringify(obj));
    }
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */

  }, {
    key: "int2hex",
    value: function int2hex(num) {
      if (typeof num !== 'number') {
        throw new _errors.SdkError('int2hex expects a number', _errors.CODES.Internal);
      }

      var h = num.toString(16);
      return h.length % 2 ? '0' + h : h;
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
      if (typeof num !== 'number') throw new _errors.SdkError('num must be numeric');
      if (num < 0) throw new RangeError('num is unsigned (>= 0)');
      if (size % 1 !== 0) throw new _errors.SdkError('size must be a whole integer');

      if (!Number.isSafeInteger(num)) {
        throw new RangeError("num (".concat(num, ") must be a safe integer"));
      }

      size = size * 2;
      var hexstring = num.toString(16);
      hexstring = hexstring.length % size === 0 ? hexstring : ('0'.repeat(size) + hexstring).substring(hexstring.length);
      if (littleEndian) hexstring = Utils.reverseHex(hexstring);
      return hexstring;
    }
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */

  }, {
    key: "num2VarInt",
    value: function num2VarInt(num) {
      if (num < 0xfd) {
        return Utils.num2hexstring(num);
      } else if (num <= 0xffff) {
        // uint16
        return 'fd' + Utils.num2hexstring(num, 2, true);
      } else if (num <= 0xffffffff) {
        // uint32
        return 'fe' + Utils.num2hexstring(num, 4, true);
      } else {
        // uint64
        return 'ff' + Utils.num2hexstring(num, 8, true);
      }
    }
    /**
     * Reverses an array. Accepts arrayBuffer.
     * @param arr Array to reverse
     * @returns Reversed array
     */

  }, {
    key: "reverseArray",
    value: function reverseArray(arr) {
      if ((0, _typeof2["default"])(arr) !== 'object' || !arr.length) {
        throw new _errors.SdkError('reverseArray expects an array', _errors.CODES.Internal);
      }

      var result = new Uint8Array(arr.length);

      for (var i = 0; i < arr.length; i++) {
        result[i] = arr[arr.length - 1 - i];
      }

      return result;
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
      Utils.ensureHex(hex);
      var out = '';

      for (var i = hex.length - 2; i >= 0; i -= 2) {
        out += hex.substr(i, 2);
      }

      return out;
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
      try {
        var hexRegex = /^([0-9A-Fa-f]{2})*$/;
        return hexRegex.test(str);
      } catch (err) {
        return false;
      }
    }
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */

  }, {
    key: "ensureHex",
    value: function ensureHex(str) {
      if (!Utils.isHex(str)) {
        throw new _errors.SdkError("Expected a hexstring but got ".concat(str), _errors.CODES.Internal);
      }
    }
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256ripemd160",
    value: function sha256ripemd160(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha256ripemd160 expects a string', _errors.CODES.Internal);
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex), _errors.CODES.Internal);
      }

      var hexEncoded = typeof hexEncoding === 'function' ? hexEncoding.parse(hex) : hexEncoding["default"].parse(hex);
      var programSha256 = typeof SHA256 === 'function' ? SHA256(hexEncoded) : SHA256["default"](hexEncoded);
      return typeof RIPEMD160 === 'function' ? RIPEMD160(programSha256).toString() : RIPEMD160["default"](programSha256).toString();
    }
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256",
    value: function sha256(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha256 expects a hex string', _errors.CODES.Internal);
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex), _errors.CODES.Internal);
      }

      var hexEncoded = typeof hexEncoding === 'function' ? hexEncoding.parse(hex) : hexEncoding["default"].parse(hex);
      return typeof SHA256 === 'function' ? SHA256(hexEncoded).toString() : SHA256["default"](hexEncoded).toString();
    }
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha3",
    value: function sha3(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha3 expects a hex string', _errors.CODES.Internal);
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex), _errors.CODES.Internal);
      }

      var hexEncoded = typeof hexEncoding === 'function' ? hexEncoding.parse(hex) : hexEncoding["default"].parse(hex);
      return typeof SHA3 === 'function' ? SHA3(hexEncoded).toString() : SHA3["default"](hexEncoded).toString();
    }
  }, {
    key: "sortObject",
    value: function sortObject(obj) {
      if (obj === null) return null;
      if (is.not.object(obj)) return obj;
      if (is.array(obj)) return obj.map(Utils.sortObject);
      var sortedKeys = Object.keys(obj).sort();
      var result = {};
      sortedKeys.forEach(function (key) {
        result[key] = Utils.sortObject(obj[key]);
      });
      return result;
    }
  }, {
    key: "base64ToString",
    value: function base64ToString(b64) {
      return Buffer.from(b64, 'base64').toString();
    }
  }, {
    key: "bytesToBase64",
    value: function bytesToBase64(bytes) {
      return Buffer.from(bytes).toString('base64');
    }
    /**
     * Decode base64 encoded tags
     * @param tags
     */

  }, {
    key: "decodeTags",
    value: function decodeTags(tags) {
      var decodedTags = [];

      if (!tags || tags.length === 0) {
        return decodedTags;
      }

      tags.forEach(function (tag) {
        decodedTags.push({
          key: Utils.base64ToString(tag.key),
          value: Utils.base64ToString(tag.value)
        });
      });
      return decodedTags;
    }
    /**
    * get amino prefix from public key encode type.
    * @param public key encode type
    * @returns UintArray
    */

  }, {
    key: "getAminoPrefix",
    value: function getAminoPrefix(prefix) {
      var b = Array.from(Buffer.from((typeof SHA256 === 'function' ? SHA256 : SHA256["default"])(prefix).toString(), 'hex'));

      while (b[0] === 0) {
        b = b.slice(1);
      }

      b = b.slice(3);

      while (b[0] === 0) {
        b = b.slice(1);
      }

      b = b.slice(0, 4);
      return b;
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
      if (hexString !== '' && !/^[0-9a-f]+$/i.test(hexString)) {
        throw new Error("Expected an unprefixed hex string. Received: ".concat(hexString));
      }

      if (targetLength < 0) {
        throw new Error("Expected a non-negative integer target length. Received: ".concat(targetLength));
      }

      return String.prototype.padStart.call(hexString, targetLength, '0');
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
      return value === null || value === undefined;
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
      return typeof value === 'string' && !(0, _ethjsUtil.isHexString)(value) ? Buffer.from(value) : (0, _util.toBuffer)(value);
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
      var rSig = (0, _util.fromSigned)(r);
      var sSig = (0, _util.fromSigned)(s);
      var vSig = (0, _util.bufferToInt)(v);
      var rStr = this.padWithZeroes((0, _util.toUnsigned)(rSig).toString('hex'), 64);
      var sStr = this.padWithZeroes((0, _util.toUnsigned)(sSig).toString('hex'), 64);
      var vStr = (0, _ethjsUtil.stripHexPrefix)((0, _ethjsUtil.intToHex)(vSig));
      return (0, _util.addHexPrefix)(rStr.concat(sStr, vStr));
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
      var sigParams = (0, _util.fromRpcSig)(signature);
      return (0, _util.ecrecover)(messageHash, sigParams.v, sigParams.r, sigParams.s);
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
      if (!input) {
        return "";
      }

      if (typeof input === 'number') {
        if (input < 0) {
          return '0x';
        }

        var buffer = (0, _util.toBuffer)(input);
        input = (0, _util.bufferToHex)(buffer);
      }

      if (typeof input !== 'string') {
        var msg = 'eth-sig-util.normalize() requires hex string or integer input.';
        msg += " received ".concat((0, _typeof2["default"])(input), ": ").concat(input);
        throw new Error(msg);
      }

      return (0, _util.addHexPrefix)(input.toLowerCase());
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
      var hexVal = num.toString(16);
      var prepend = hexVal.length % 2 ? '0' : '';
      return Buffer.from(prepend + hexVal, 'hex');
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;