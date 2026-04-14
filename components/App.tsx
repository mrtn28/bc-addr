import { ChangeEvent, useEffect, useState } from 'react'

export default function App () {
  const [zpub, setzpub] = useState('zpub6tqRFo2yVLzyjQ2Pp1WnWESx5d9uEwUGAYHNAKagZ5rBYVUwQK5vTXFjJQuxBFysKBfjnSH2kWR8Wfu11ff2f3hUTqxZKLPSP4QNPKvscTi')
  const [address, setaddress] = useState<string | string[]>()

  const zpubChange = async () => {
    const { zpub2address } = await import('bc-addr')

    const address = zpub2address(zpub)
    setaddress(address)
  }

  const zpubInputOnChange = (e: ChangeEvent<HTMLInputElement>) => setzpub(e.target.value)

  useEffect(() => {
    zpubChange()
  }, [zpub])

  return (
    <section>
      <h2>bc-addr</h2>
      <form>
        <div>
          <input value={zpub} onChange={zpubInputOnChange} type="text" name="zpub" placeholder="zpub" aria-label="zpub" required />
        </div>
      </form>
    </section>
  )
}
