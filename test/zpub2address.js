"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zpub2address_1 = require("../src/zpub2address");
const zpub = 'zpub6tqRFo2yVLzyjQ2Pp1WnWESx5d9uEwUGAYHNAKagZ5rBYVUwQK5vTXFjJQuxBFysKBfjnSH2kWR8Wfu11ff2f3hUTqxZKLPSP4QNPKvscTi';
const addr = 'bc1quv607j0220h57svwnha9wndwfmnutpjt524tvt';
const address = (0, zpub2address_1.zpub2address)(zpub);
console.assert(address === addr);
