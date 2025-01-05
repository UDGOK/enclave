import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Enclave Bixby</title>
        <meta name="description" content="Enclave Bixby application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Enclave Bixby
        </h1>
      </main>
    </div>
  )
}

export default Home
