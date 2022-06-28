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

var mathjs = _interopRequireWildcard(require("mathjs"));

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Utils for the KYNNO SDK
 * @category Modules
 * @since v0.17
 */
var Utils = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Utils(client) {
    (0, _classCallCheck2["default"])(this, Utils);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "mathConfig", {
      number: 'BigNumber',
      // Choose 'number' (default), 'BigNumber', or 'Fraction'
      precision: 64 // 64 by default, only applicable for BigNumbers

    });
    (0, _defineProperty2["default"])(this, "math", void 0);
    this.client = client;
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }

  (0, _createClass2["default"])(Utils, [{
    key: "toKynno",
    value: function toKynno(address) {
      return (0, _utils.ethToKynno)(address);
    }
  }, {
    key: "toEth",
    value: function toEth(address) {
      return (0, _utils.kynnoToEth)(address);
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;