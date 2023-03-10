import { useCallback, useEffect, useState } from 'react'

export default function App () {
  const [zpub, setzpub] = useState('zpub6tqRFo2yVLzyjQ2Pp1WnWESx5d9uEwUGAYHNAKagZ5rBYVUwQK5vTXFjJQuxBFysKBfjnSH2kWR8Wfu11ff2f3hUTqxZKLPSP4QNPKvscTi')
  const [addr, setaddr] = useState('bc1quv607j0220h57svwnha9wndwfmnutpjt524tvt')
  const [address, setaddress] = useState<string | string[]>()

  const init = useCallback(async () => {
    const { zpub2address } = await import('bc-addr')

    const address = zpub2address(zpub)
    setaddress(address)

    console.log(address, addr)
  }, [addr, zpub])

  useEffect(() => {
    init()
  }, [init])

  return (
    <>
      <div>{zpub}</div>
      <div>{addr}</div>
      <div>{address}</div>
    </>
  )
}
