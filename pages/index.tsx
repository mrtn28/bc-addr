import Head from 'next/head'
import App from '@/components/App'

export default function Home () {
  return (
    <>
      <Head>
        <title>bc-addr</title>
        <meta name='description' content='Create bitcoin mnemonic and generate addresses from zpub' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <App />
      </main>
    </>
  )
}
