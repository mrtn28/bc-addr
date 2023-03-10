import { BIP32Factory } from 'bip32'
import * as bitcoin from 'bitcoinjs-lib'
import b58 from 'bs58check'
import * as ecc from 'tiny-secp256k1'
import { zpub2addressOptions } from '../defaults'

const bip32 = BIP32Factory(ecc)
const network = bitcoin.networks.bitcoin

const zpub2xpub = (z: string): string => {
  const data = b58.decode(z).subarray(4)
  const n: string = network.bip32.public.toString(16)
  const e = `0${n}`
  const h = Buffer.from(e, 'hex')
  const b = Buffer.concat([h, data])
  return b58.encode(b)
}

const zpub2address = (zpub: string, options = zpub2addressOptions): string | string[] => {
  const xpub = zpub2xpub(zpub)
  const node = bip32.fromBase58(xpub, network)
  const addresses = []
  for (let addressIndex = 0; addressIndex < options.limit; addressIndex++) {
    const pubkey = node.derive(addressIndex).publicKey
    const address = bitcoin.payments.p2wpkh({ pubkey, network }).address
    if (address !== undefined) addresses.push(address)
  }
  const r = addresses.length === 1 ? addresses[0] : addresses
  return r
}

export {
  zpub2xpub,
  zpub2address
}
