import { zpub2address } from '../src/zpub-to-address.js'

const zpub = 'zpub6tqRFo2yVLzyjQ2Pp1WnWESx5d9uEwUGAYHNAKagZ5rBYVUwQK5vTXFjJQuxBFysKBfjnSH2kWR8Wfu11ff2f3hUTqxZKLPSP4QNPKvscTi'
const addr = 'bc1quv607j0220h57svwnha9wndwfmnutpjt524tvt'

const address = zpub2address(zpub)

console.assert(address === addr)
