"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typedSignatureHash = typedSignatureHash;
exports.signTypedData = signTypedData;
exports.recoverTypedSignature = recoverTypedSignature;
exports.TypedDataUtils = exports.TYPED_MESSAGE_SCHEMA = exports.SignTypedDataVersion = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _ethjsUtil = require("ethjs-util");

var _util = require("@ethereumjs/util");

var _keccak = require("ethereum-cryptography/keccak");

var _ethereumjsAbiUtils = require("../utils/ethereumjs-abi-utils");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Represents the version of `signTypedData` being used.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on EIP-712, except that arrays and recursive data structures are not supported.
 *
 * V4 is based on EIP-712, and includes full support of arrays and recursive data structures.
 */
var SignTypedDataVersion;
exports.SignTypedDataVersion = SignTypedDataVersion;

(function (SignTypedDataVersion) {
  SignTypedDataVersion["V1"] = "V1";
  SignTypedDataVersion["V3"] = "V3";
  SignTypedDataVersion["V4"] = "V4";
})(SignTypedDataVersion || (exports.SignTypedDataVersion = SignTypedDataVersion = {}));

var TYPED_MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    types: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            type: {
              type: 'string'
            }
          },
          required: ['name', 'type']
        }
      }
    },
    primaryType: {
      type: 'string'
    },
    domain: {
      type: 'object'
    },
    message: {
      type: 'object'
    }
  },
  required: ['types', 'primaryType', 'domain', 'message']
};
/**
 * Validate that the given value is a valid version string.
 *
 * @param version - The version value to validate.
 * @param allowedVersions - A list of allowed versions. If omitted, all versions are assumed to be
 * allowed.
 */

exports.TYPED_MESSAGE_SCHEMA = TYPED_MESSAGE_SCHEMA;

function validateVersion(version, allowedVersions) {
  if (!Object.keys(SignTypedDataVersion).includes(version)) {
    throw new Error("Invalid version: '".concat(version, "'"));
  } else if (allowedVersions && !allowedVersions.includes(version)) {
    throw new Error("SignTypedDataVersion not allowed: '".concat(version, "'. Allowed versions are: ").concat(allowedVersions.join(', ')));
  }
}
/**
 * Encode a single field.
 *
 * @param types - All type definitions.
 * @param name - The name of the field to encode.
 * @param type - The type of the field being encoded.
 * @param value - The value to encode.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns Encoded representation of the field.
 */


function encodeField(types, name, type, value, version) {
  validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);

  if (types[type] !== undefined) {
    // @ts-ignore
    return ['bytes32', version === SignTypedDataVersion.V4 && value == null ? '0x0000000000000000000000000000000000000000000000000000000000000000' : (0, _util.arrToBufArr)((0, _keccak.keccak256)(encodeData(type, value, types, version)))];
  }

  if (value === undefined) {
    throw new Error("missing value for field ".concat(name, " of type ").concat(type));
  }

  if (type === 'bytes') {
    if (typeof value === 'number') {
      value = _utils.Utils.numberToBuffer(value);
    } else if ((0, _ethjsUtil.isHexString)(value)) {
      value = Buffer.from(value.slice(2), 'hex');
    } else {
      value = Buffer.from(value, 'utf8');
    }

    return ['bytes32', (0, _util.arrToBufArr)((0, _keccak.keccak256)(value))];
  }

  if (type === 'string') {
    if (typeof value === 'number') {
      value = _utils.Utils.numberToBuffer(value);
    } else {
      var _value;

      value = Buffer.from((_value = value) !== null && _value !== void 0 ? _value : '', 'utf8');
    }

    return ['bytes32', (0, _util.arrToBufArr)((0, _keccak.keccak256)(value))];
  }

  if (type.lastIndexOf(']') === type.length - 1) {
    if (version === SignTypedDataVersion.V3) {
      throw new Error('Arrays are unimplemented in encodeData; use V4 extension');
    }

    var parsedType = type.slice(0, type.lastIndexOf('['));
    var typeValuePairs = value.map(function (item) {
      return encodeField(types, name, parsedType, item, version);
    });
    return ['bytes32', (0, _util.arrToBufArr)((0, _keccak.keccak256)((0, _ethereumjsAbiUtils.rawEncode)(typeValuePairs.map(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
          t = _ref2[0];

      return t;
    }), typeValuePairs.map(function (_ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          v = _ref4[1];

      return v;
    }))))];
  }

  return [type, value];
}
/**
 * Encodes an object by encoding and concatenating each of its members.
 *
 * @param primaryType - The root type.
 * @param data - The object to encode.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns An encoded representation of an object.
 */


function encodeData(primaryType, data, types, version) {
  validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
  var encodedTypes = ['bytes32'];
  var encodedValues = [hashType(primaryType, types)];

  var _iterator = _createForOfIteratorHelper(types[primaryType]),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;

      if (version === SignTypedDataVersion.V3 && data[field.name] === undefined) {
        continue;
      }

      var _encodeField = encodeField(types, field.name, field.type, data[field.name], version),
          _encodeField2 = (0, _slicedToArray2["default"])(_encodeField, 2),
          type = _encodeField2[0],
          value = _encodeField2[1];

      encodedTypes.push(type);
      encodedValues.push(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return (0, _ethereumjsAbiUtils.rawEncode)(encodedTypes, encodedValues);
}
/**
 * Encodes the type of an object by encoding a comma delimited list of its members.
 *
 * @param primaryType - The root type to encode.
 * @param types - Type definitions for all types included in the message.
 * @returns An encoded representation of the primary type.
 */


function encodeType(primaryType, types) {
  var result = '';
  var unsortedDeps = findTypeDependencies(primaryType, types);
  unsortedDeps["delete"](primaryType);
  var deps = [primaryType].concat((0, _toConsumableArray2["default"])(Array.from(unsortedDeps).sort()));

  var _iterator2 = _createForOfIteratorHelper(deps),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var type = _step2.value;
      var children = types[type];

      if (!children) {
        throw new Error("No type definition specified: ".concat(type));
      }

      result += "".concat(type, "(").concat(types[type].map(function (_ref5) {
        var name = _ref5.name,
            t = _ref5.type;
        return "".concat(t, " ").concat(name);
      }).join(','), ")");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}
/**
 * Finds all types within a type definition object.
 *
 * @param primaryType - The root type.
 * @param types - Type definitions for all types included in the message.
 * @param results - The current set of accumulated types.
 * @returns The set of all types found in the type definition.
 */


function findTypeDependencies(primaryType, types) {
  var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

  var _primaryType$match = primaryType.match(/^[0-9A-Z_a-z]*/);

  var _primaryType$match2 = (0, _slicedToArray2["default"])(_primaryType$match, 1);

  primaryType = _primaryType$match2[0];

  if (results.has(primaryType) || types[primaryType] === undefined) {
    return results;
  }

  results.add(primaryType);

  var _iterator3 = _createForOfIteratorHelper(types[primaryType]),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var field = _step3.value;
      findTypeDependencies(field.type, types, results);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return results;
}
/**
 * Hashes an object.
 *
 * @param primaryType - The root type.
 * @param data - The object to hash.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the object.
 */


function hashStruct(primaryType, data, types, version) {
  validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
  return (0, _util.arrToBufArr)((0, _keccak.keccak256)(encodeData(primaryType, data, types, version)));
}
/**
 * Hashes the type of an object.
 *
 * @param primaryType - The root type to hash.
 * @param types - Type definitions for all types included in the message.
 * @returns The hash of the object type.
 */


function hashType(primaryType, types) {
  var encodedHashType = Buffer.from(encodeType(primaryType, types), 'utf-8');
  return (0, _util.arrToBufArr)((0, _keccak.keccak256)(encodedHashType));
}
/**
 * Removes properties from a message object that are not defined per EIP-712.
 *
 * @param data - The typed message object.
 * @returns The typed message object with only allowed fields.
 */


function sanitizeData(data) {
  var sanitizedData = {};

  for (var key in TYPED_MESSAGE_SCHEMA.properties) {
    if (data[key]) {
      sanitizedData[key] = data[key];
    }
  }

  if ('types' in sanitizedData) {
    sanitizedData.types = _objectSpread({
      EIP712Domain: []
    }, sanitizedData.types);
  }

  return sanitizedData;
}
/**
 * Hash a typed message according to EIP-712. The returned message starts with the EIP-712 prefix,
 * which is "1901", followed by the hash of the domain separator, then the data (if any).
 * The result is hashed again and returned.
 *
 * This function does not sign the message. The resulting hash must still be signed to create an
 * EIP-712 signature.
 *
 * @param typedData - The typed message to hash.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the typed message.
 */


function eip712Hash(typedData, version) {
  validateVersion(version, [SignTypedDataVersion.V3, SignTypedDataVersion.V4]);
  var sanitizedData = sanitizeData(typedData);
  var parts = [Buffer.from('1901', 'hex')];
  parts.push(hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, version));

  if (sanitizedData.primaryType !== 'EIP712Domain') {
    parts.push(hashStruct( // TODO: Validate that this is a string, so this type cast can be removed.
    sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, version));
  }

  return (0, _util.arrToBufArr)((0, _keccak.keccak256)(Buffer.concat(parts)));
}
/**
 * A collection of utility functions used for signing typed data.
 */


var TypedDataUtils = {
  encodeData: encodeData,
  encodeType: encodeType,
  findTypeDependencies: findTypeDependencies,
  hashStruct: hashStruct,
  hashType: hashType,
  sanitizeData: sanitizeData,
  eip712Hash: eip712Hash
};
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The '0x'-prefixed hex encoded hash representing the type of the provided message.
 */

exports.TypedDataUtils = TypedDataUtils;

function typedSignatureHash(typedData) {
  var hashBuffer = _typedSignatureHash(typedData);

  return (0, _util.bufferToHex)(hashBuffer);
}
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The hash representing the type of the provided message.
 */


function _typedSignatureHash(typedData) {
  var error = new Error('Expect argument to be non-empty array');

  if ((0, _typeof2["default"])(typedData) !== 'object' || !('length' in typedData) || !typedData.length) {
    throw error;
  }

  var data = typedData.map(function (e) {
    if (e.type !== 'bytes') {
      return e.value;
    }

    return _utils.Utils.legacyToBuffer(e.value);
  });
  var types = typedData.map(function (e) {
    return e.type;
  });
  var schema = typedData.map(function (e) {
    if (!e.name) {
      throw error;
    }

    return "".concat(e.type, " ").concat(e.name);
  });
  return (0, _util.arrToBufArr)((0, _keccak.keccak256)((0, _ethereumjsAbiUtils.solidityPack)(['bytes32', 'bytes32'], [(0, _keccak.keccak256)((0, _ethereumjsAbiUtils.solidityPack)(new Array(typedData.length).fill('string'), schema)), (0, _keccak.keccak256)((0, _ethereumjsAbiUtils.solidityPack)(types, data))])));
}
/**
 * Sign typed data according to EIP-712. The signing differs based upon the `version`.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), except that arrays and
 * recursive data structures are not supported.
 *
 * V4 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), and includes full support of
 * arrays and recursive data structures.
 *
 * @param options - The signing options.
 * @param options.privateKey - The private key to sign with.
 * @param options.data - The typed data to sign.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex encoded signature.
 */


function signTypedData(_ref6) {
  var privateKey = _ref6.privateKey,
      data = _ref6.data,
      version = _ref6.version;
  validateVersion(version);

  if (_utils.Utils.isNullish(data)) {
    throw new Error('Missing data parameter');
  } else if (_utils.Utils.isNullish(privateKey)) {
    throw new Error('Missing private key parameter');
  }

  var messageHash = version === SignTypedDataVersion.V1 ? _typedSignatureHash(data) : TypedDataUtils.eip712Hash(data, version);
  var sig = (0, _util.ecsign)(messageHash, privateKey);
  return _utils.Utils.concatSig((0, _util.toBuffer)(sig.v), sig.r, sig.s);
}
/**
 * Recover the address of the account that created the given EIP-712
 * signature. The version provided must match the version used to
 * create the signature.
 *
 * @param options - The signature recovery options.
 * @param options.data - The typed data that was signed.
 * @param options.signature - The '0x-prefixed hex encoded message signature.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex address of the signer.
 */


function recoverTypedSignature(_ref7) {
  var data = _ref7.data,
      signature = _ref7.signature,
      version = _ref7.version;
  validateVersion(version);

  if (_utils.Utils.isNullish(data)) {
    throw new Error('Missing data parameter');
  } else if (_utils.Utils.isNullish(signature)) {
    throw new Error('Missing signature parameter');
  }

  var messageHash = version === SignTypedDataVersion.V1 ? _typedSignatureHash(data) : TypedDataUtils.eip712Hash(data, version);

  var publicKey = _utils.Utils.recoverPublicKey(messageHash, signature);

  var sender = (0, _util.publicToAddress)(publicKey);
  return (0, _util.bufferToHex)(sender);
}