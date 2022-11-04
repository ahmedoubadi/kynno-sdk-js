"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ethers = require("ethers");

var _abi = require("../helper/abi");

/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.1
 */
var NameService = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function NameService(client) {
    (0, _classCallCheck2["default"])(this, NameService);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * create Name
   * @param name string
   * @param value string
   * @returns
   * @since v1.0.0
   */


  (0, _createClass2["default"])(NameService, [{
    key: "createName",
    value: function () {
      var _createName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, value) {
        var signer, address, contract, tx, receipt;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context.next = 5;
                return contract.createName(name, value);

              case 5:
                tx = _context.sent;
                _context.next = 8;
                return tx.wait();

              case 8:
                receipt = _context.sent;

                if (!(receipt && receipt.blockNumber && receipt.status === 1)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: true
                });

              case 13:
                if (!(receipt && receipt.blockNumber && receipt.status === 0)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to create, check your balance and try again"
                });

              case 17:
                return _context.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to create, check your balance and try again"
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createName(_x, _x2) {
        return _createName.apply(this, arguments);
      }

      return createName;
    }()
    /**
    * resolve Name data
    * @param name string
    * @returns
    * @since v1.0.0
    */

  }, {
    key: "resolve",
    value: function () {
      var _resolve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name) {
        var signer, address, contract, nameData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context2.next = 5;
                return contract.resolve(name);

              case 5:
                nameData = _context2.sent;
                return _context2.abrupt("return", nameData);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function resolve(_x3) {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    }()
  }, {
    key: "ownerOf",
    value: function () {
      var _ownerOf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(name) {
        var signer, address, contract, owner;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context3.next = 5;
                return contract.ownerOf(name);

              case 5:
                owner = _context3.sent;
                return _context3.abrupt("return", owner);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ownerOf(_x4) {
        return _ownerOf.apply(this, arguments);
      }

      return ownerOf;
    }()
    /**
        * transfer ownership of the name
        * @param from string
        * @param to string
        * @param name string
        * @returns
        * @since v1.0.0
    */

  }, {
    key: "transfer",
    value: function () {
      var _transfer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(from, to, name) {
        var signer, address, contract, tx, receipt;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context4.next = 5;
                return contract.transfer(from, to, name);

              case 5:
                tx = _context4.sent;
                _context4.next = 8;
                return tx.wait();

              case 8:
                receipt = _context4.sent;

                if (!(receipt && receipt.blockNumber && receipt.status === 1)) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: true
                });

              case 13:
                if (!(receipt && receipt.blockNumber && receipt.status === 0)) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to transfer, check your balance and try again"
                });

              case 17:
                return _context4.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to transfer, check your balance and try again"
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function transfer(_x5, _x6, _x7) {
        return _transfer.apply(this, arguments);
      }

      return transfer;
    }()
    /**
        * deleting the name
        * @param name string
        * @returns
        * @since v1.0.0
    */

  }, {
    key: "burn",
    value: function () {
      var _burn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(name) {
        var signer, address, contract, tx, receipt;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context5.next = 5;
                return contract.burn(name);

              case 5:
                tx = _context5.sent;
                _context5.next = 8;
                return tx.wait();

              case 8:
                receipt = _context5.sent;

                if (!(receipt && receipt.blockNumber && receipt.status === 1)) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: true
                });

              case 13:
                if (!(receipt && receipt.blockNumber && receipt.status === 0)) {
                  _context5.next = 17;
                  break;
                }

                return _context5.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to burn, check your balance and try again"
                });

              case 17:
                return _context5.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to burn, check your balance and try again"
                });

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function burn(_x8) {
        return _burn.apply(this, arguments);
      }

      return burn;
    }()
    /**
        * Changing the value of a name
        * @param name string
        * @param value string
        * @returns
        * @since v1.0.0
    */

  }, {
    key: "setValue",
    value: function () {
      var _setValue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(name, value) {
        var signer, address, contract, tx, receipt;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                signer = this.client.config.provider.getSigner();
                address = this.client.config.nameContractAddress;
                contract = new _ethers.ethers.Contract(address, _abi.nameserviceabi, signer);
                _context6.next = 5;
                return contract.setValue(name, value);

              case 5:
                tx = _context6.sent;
                _context6.next = 8;
                return tx.wait();

              case 8:
                receipt = _context6.sent;

                if (!(receipt && receipt.blockNumber && receipt.status === 1)) {
                  _context6.next = 13;
                  break;
                }

                return _context6.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: true
                });

              case 13:
                if (!(receipt && receipt.blockNumber && receipt.status === 0)) {
                  _context6.next = 17;
                  break;
                }

                return _context6.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to change, check your balance and try again"
                });

              case 17:
                return _context6.abrupt("return", {
                  txHash: receipt.transactionHash,
                  success: false,
                  message: "Your name has been failed to change, check your balance and try again"
                });

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function setValue(_x9, _x10) {
        return _setValue.apply(this, arguments);
      }

      return setValue;
    }()
  }]);
  return NameService;
}();

exports.NameService = NameService;