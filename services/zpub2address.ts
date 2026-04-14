interface Izpub2address {
  (
    zpub: string,
    options?: {
      limit: number;
    }
  ): string | string[]
}

let ref: Izpub2address

export const zpub2address = async () => {
  if (ref) return ref
  const { zpub2address } = await import('bc-addr')
  ref = zpub2address
  return zpub2address
}
