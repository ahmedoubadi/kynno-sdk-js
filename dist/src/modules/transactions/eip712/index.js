"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require("./messages/base");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _base[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _base[key];
    }
  });
});

var _gov = require("./messages/gov");

Object.keys(_gov).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _gov[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gov[key];
    }
  });
});

var _ibcMsgTransfer = require("./messages/ibcMsgTransfer");

Object.keys(_ibcMsgTransfer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ibcMsgTransfer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ibcMsgTransfer[key];
    }
  });
});

var _msgsend = require("./messages/msgsend");

Object.keys(_msgsend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _msgsend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _msgsend[key];
    }
  });
});

var _staking = require("./messages/staking");

Object.keys(_staking).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _staking[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _staking[key];
    }
  });
});

var _nft = require("./messages/nft");

Object.keys(_nft).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nft[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nft[key];
    }
  });
});