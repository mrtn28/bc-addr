import BIP32Factory from 'bip32'
import * as bitcoin from 'bitcoinjs-lib'
import b58 from 'bs58check'
import * as ecc from 'tiny-secp256k1'

const bip32 = BIP32Factory(ecc)
const network = bitcoin.networks.bitcoin

const convert_z = (z: string) => {
  const data = b58.decode(z).subarray(4)
  const a = `0${network.bip32.public.toString(16)}`
  const t = Buffer.from(a, 'hex')
  const b = Buffer.concat([t, data])
  return b58.encode(b)
}

const get = (zpub: string, limit: number = 1) => {
  const xpub = convert_z(zpub)
  const node = bip32.fromBase58(xpub, network)
  const addresses: string[] = []
  for (let addressIndex = 0; addressIndex < limit; addressIndex++) {
    const pubkey = node.derive(addressIndex).publicKey
    const address = bitcoin.payments.p2wpkh({ pubkey, network }).address
    if (address) addresses.push(address)
  }
  const r = addresses.length === 1 ? addresses[0] : addresses
  return r
}

export default get
