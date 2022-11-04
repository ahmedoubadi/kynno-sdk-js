"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solidityPack = solidityPack;
exports.isArray = isArray;
exports.parseNumber = parseNumber;
exports.rawEncode = rawEncode;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _util = require("@ethereumjs/util");

var _ethjsUtil = require("ethjs-util");

var _bn = _interopRequireDefault(require("bn.js"));

/* eslint jsdoc/require-description: 0 */

/* eslint jsdoc/require-returns: 0 */

/* eslint jsdoc/match-description: 0 */

/* eslint jsdoc/require-param-description: 0 */
// @ts-nocheck
//
// Methods borrowed and somewhat adapted from ethereumjs-abi@0.6.8:
// https://npmfs.com/package/ethereumjs-abi/0.6.8/lib/index.js
//

/**
 * Packs non-standard encoded values packed according to their respective type in types in a buffer.
 *
 * @param types - Array of types of each value to encode.
 * @param values - Array of values to encode.
 * @returns A buffer containing the packed values.
 */
function solidityPack(types, values) {
  if (types.length !== values.length) {
    throw new Error('Number of types are not matching the values');
  }

  var ret = [];

  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i]);
    var value = values[i];
    ret.push(solidityHexValue(type, value, null));
  }

  return Buffer.concat(ret);
}
/**
 * Checks if a value is an array (represented as a string).
 *
 * @param type - The value to check whether it is an array.
 * @returns A boolean indicating whether the passed value is an array.
 */


function isArray(type) {
  return type.lastIndexOf(']') === type.length - 1;
}
/**
 * Parse array type for packing solidity values.
 *
 * @param type - A string that may be an array to parse.
 * @returns A parsed value from the array.
 */


function parseTypeArray(type) {
  var tmp = type.match(/((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\[((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\]$/);

  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10);
  }

  return null;
}
/**
 * Parse N from type<N>.
 *
 * @param type - Value to parse.
 * @returns Parsed value.
 */


function parseTypeN(type) {
  return parseInt(/^(?:[\0-\/:-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+([0-9]+)$/.exec(type)[1], 10);
}
/**
 * Parse a number for determining a solidity hexvalue.
 *
 * @param arg - Number to parse.
 * @returns Parsed value.
 */


function parseNumber(arg) {
  var type = (0, _typeof2["default"])(arg);

  if (type === 'string') {
    if ((0, _util.isHexPrefixed)(arg)) {
      return new _bn["default"]((0, _ethjsUtil.stripHexPrefix)(arg), 16);
    }

    return new _bn["default"](arg, 10);
  } else if (type === 'number') {
    return new _bn["default"](arg);
  } else if (arg.toArray) {
    // assume this is a BN for the moment, replace with BN.isBN soon
    return arg;
  }

  throw new Error('Argument is not a number');
}
/**
 * Get solidity hex value from type, value and bitsize inputs for packing these values in a buffer.
 *
 * @param type - The type of the value to encode.
 * @param value - The value to encode.
 * @param bitsize - The bitsize of the value to encode.
 * @returns The encoded soldity hex value.
 */


function solidityHexValue(type, value, bitsize) {
  // pass in bitsize = null if use default bitsize
  var size, num;

  if (isArray(type)) {
    var subType = type.replace(/\[(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\]/, '');

    if (!isArray(subType)) {
      var arraySize = parseTypeArray(type);

      if (arraySize !== 'dynamic' && arraySize !== 0 && value.length > arraySize) {
        throw new Error("Elements exceed array size: ".concat(arraySize));
      }
    }

    var arrayValues = value.map(function (v) {
      return solidityHexValue(subType, v, 256);
    });
    return Buffer.concat(arrayValues);
  } else if (type === 'bytes') {
    return value;
  } else if (type === 'string') {
    return Buffer.from(value, 'utf8');
  } else if (type === 'bool') {
    bitsize = bitsize || 8;
    var padding = Array(bitsize / 4).join('0');
    return Buffer.from(value ? "".concat(padding, "1") : "".concat(padding, "0"), 'hex');
  } else if (type === 'address') {
    var bytesize = 20;

    if (bitsize) {
      bytesize = bitsize / 8;
    }

    return (0, _util.setLengthLeft)((0, _util.toBuffer)(value), bytesize);
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type);

    if (size < 1 || size > 32) {
      throw new Error("Invalid bytes<N> width: ".concat(size));
    }

    if (typeof value === 'number') {
      value = Utils(value);
    }

    return (0, _util.setLengthRight)((0, _util.toBuffer)(value), size);
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type);

    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid uint<N> width: ".concat(size));
    }

    num = parseNumber(value);

    if (num.bitLength() > size) {
      throw new Error("Supplied uint exceeds width: ".concat(size, " vs ").concat(num.bitLength()));
    }

    bitsize = bitsize || size;
    return num.toArrayLike(Buffer, 'be', bitsize / 8);
  } else if (type.startsWith('int')) {
    size = parseTypeN(type);

    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid int<N> width: ".concat(size));
    }

    num = parseNumber(value);

    if (num.bitLength() > size) {
      throw new Error("Supplied int exceeds width: ".concat(size, " vs ").concat(num.bitLength()));
    }

    bitsize = bitsize || size;
    return num.toTwos(size).toArrayLike(Buffer, 'be', bitsize / 8);
  } // FIXME: support all other types


  throw new Error("Unsupported or invalid type: ".concat(type));
}
/**
 * Gets the correct solidity type name.
 *
 * @param name - The type name for which we want the corresponding solidity type name.
 * @returns The solidity type name for the input value.
 */


function elementaryName(name) {
  if (name.startsWith('int[')) {
    return "int256".concat(name.slice(3));
  } else if (name === 'int') {
    return 'int256';
  } else if (name.startsWith('uint[')) {
    return "uint256".concat(name.slice(4));
  } else if (name === 'uint') {
    return 'uint256';
  } else if (name.startsWith('fixed[')) {
    return "fixed128x128".concat(name.slice(5));
  } else if (name === 'fixed') {
    return 'fixed128x128';
  } else if (name.startsWith('ufixed[')) {
    return "ufixed128x128".concat(name.slice(6));
  } else if (name === 'ufixed') {
    return 'ufixed128x128';
  }

  return name;
}
/**
 * @param types
 * @param values
 */


function rawEncode(types, values) {
  var output = [];
  var data = [];
  var headLength = 0;
  types.forEach(function (type) {
    if (isArray(type)) {
      var size = parseTypeArray(type); // eslint-disable-next-line no-negated-condition

      if (size !== 'dynamic') {
        headLength += 32 * size;
      } else {
        headLength += 32;
      }
    } else {
      headLength += 32;
    }
  });

  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i]);
    var value = values[i];
    var cur = encodeSingle(type, value); // Use the head/tail method for storing dynamic data

    if (isDynamic(type)) {
      output.push(encodeSingle('uint256', headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output.push(cur);
    }
  }

  return Buffer.concat(output.concat(data));
} // Encodes a single item (can be dynamic array)
// @returns: Buffer

/**
 * @param type
 * @param arg
 */


function encodeSingle(type, arg) {
  var size, num, ret, i;

  if (type === 'address') {
    return encodeSingle('uint160', parseNumber(arg));
  } else if (type === 'bool') {
    return encodeSingle('uint8', arg ? 1 : 0);
  } else if (type === 'string') {
    return encodeSingle('bytes', Buffer.from(arg, 'utf8'));
  } else if (isArray(type)) {
    // this part handles fixed-length ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    if (typeof arg.length === 'undefined') {
      throw new Error('Not an array?');
    }

    size = parseTypeArray(type);

    if (size !== 'dynamic' && size !== 0 && arg.length > size) {
      throw new Error("Elements exceed array size: ".concat(size));
    }

    ret = [];
    type = type.slice(0, type.lastIndexOf('['));

    if (typeof arg === 'string') {
      arg = JSON.parse(arg);
    }

    for (i in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, i)) {
        ret.push(encodeSingle(type, arg[i]));
      }
    }

    if (size === 'dynamic') {
      var length = encodeSingle('uint256', arg.length);
      ret.unshift(length);
    }

    return Buffer.concat(ret);
  } else if (type === 'bytes') {
    arg = Buffer.from(arg);
    ret = Buffer.concat([encodeSingle('uint256', arg.length), arg]);

    if (arg.length % 32 !== 0) {
      ret = Buffer.concat([ret, (0, _util.zeros)(32 - arg.length % 32)]);
    }

    return ret;
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type);

    if (size < 1 || size > 32) {
      throw new Error("Invalid bytes<N> width: ".concat(size));
    }

    if (typeof arg === 'number') {
      arg = normalize(arg);
    }

    return (0, _util.setLengthRight)((0, _util.toBuffer)(arg), 32);
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type);

    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid uint<N> width: ".concat(size));
    }

    num = parseNumber(arg);

    if (num.bitLength() > size) {
      throw new Error("Supplied uint exceeds width: ".concat(size, " vs ").concat(num.bitLength()));
    }

    if (num < 0) {
      throw new Error('Supplied uint is negative');
    }

    return num.toArrayLike(Buffer, 'be', 32);
  } else if (type.startsWith('int')) {
    size = parseTypeN(type);

    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid int<N> width: ".concat(size));
    }

    num = parseNumber(arg);

    if (num.bitLength() > size) {
      throw new Error("Supplied int exceeds width: ".concat(size, " vs ").concat(num.bitLength()));
    }

    return num.toTwos(256).toArrayLike(Buffer, 'be', 32);
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type);
    num = parseNumber(arg);

    if (num < 0) {
      throw new Error('Supplied ufixed is negative');
    }

    return encodeSingle('uint256', num.mul(new _bn["default"](2).pow(new _bn["default"](size[1]))));
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type);
    return encodeSingle('int256', parseNumber(arg).mul(new _bn["default"](2).pow(new _bn["default"](size[1]))));
  }

  throw new Error("Unsupported or invalid type: ".concat(type));
} // Is a type dynamic?

/**
 * @param type
 */


function isDynamic(type) {
  // FIXME: handle all types? I don't think anything is missing now
  return type === 'string' || type === 'bytes' || parseTypeArray(type) === 'dynamic';
} // Parse N,M from type<N>x<M>

/**
 * @param type
 */


function parseTypeNxM(type) {
  var tmp = /^(?:[\0-\/:-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+([0-9]+)x([0-9]+)$/.exec(type);
  return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
}