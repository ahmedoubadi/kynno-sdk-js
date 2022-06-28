"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _web3Extension = require("./web3Extension");

describe('web3Extension tests', function () {
  it('valid', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var chain, sender, signature, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            chain = {
              chainId: 9000,
              cosmosChainId: 'evmos_9000-1'
            };
            sender = {
              accountAddress: 'ethm1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm',
              sequence: 1,
              accountNumber: 9,
              pubkey: 'AgTw+4v0daIrxsNSW4FcQ+IoingPseFwHO1DnssyoOqZ'
            };
            signature = '0xee543cc5a50d25a5bab4da0609bf63095804282aeb82f3fd16e03784db19723a727f515b8d8e7b52c6f059f324ec5a651c92829f15e38e4d0db3788e230318a41c';
            res = (0, _web3Extension.signatureToWeb3Extension)(chain, sender, signature);
            expect(res.path).toBe('ethermint.types.v1.ExtensionOptionsWeb3Tx');
            expect(Buffer.from(res.message.serializeBinary()).toString('base64')).toBe('CKhGEitldGhtMXRmZWdmNTBuNXhsMGhkNWN4ZnpqY2EzeWxzZnBnMGZuZWQ1Z3FtGkHuVDzFpQ0lpbq02gYJv2MJWAQoKuuC8/0W4DeE2xlyOnJ/UVuNjntSxvBZ8yTsWmUckoKfFeOOTQ2zeI4jAxikHA==');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});