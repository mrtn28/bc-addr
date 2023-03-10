"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zpub2address = exports.zpub2xpub = void 0;
const bip32_1 = require("bip32");
const bitcoin = __importStar(require("bitcoinjs-lib"));
const bs58check_1 = __importDefault(require("bs58check"));
const ecc = __importStar(require("tiny-secp256k1"));
const bip32 = (0, bip32_1.BIP32Factory)(ecc);
const network = bitcoin.networks.bitcoin;
const zpub2xpub = (z) => {
    const data = bs58check_1.default.decode(z).subarray(4);
    const n = network.bip32.public.toString(16);
    const e = `0${n}`;
    const h = Buffer.from(e, 'hex');
    const b = Buffer.concat([h, data]);
    return bs58check_1.default.encode(b);
};
exports.zpub2xpub = zpub2xpub;
const zpub2address = (zpub, limit = 1) => {
    const xpub = zpub2xpub(zpub);
    const node = bip32.fromBase58(xpub, network);
    const addresses = [];
    for (let addressIndex = 0; addressIndex < limit; addressIndex++) {
        const pubkey = node.derive(addressIndex).publicKey;
        const address = bitcoin.payments.p2wpkh({ pubkey, network }).address;
        if (address !== undefined)
            addresses.push(address);
    }
    const r = addresses.length === 1 ? addresses[0] : addresses;
    return r;
};
exports.zpub2address = zpub2address;
