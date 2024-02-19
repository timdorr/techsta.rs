import Head from 'next/head'
import { Header } from '.'

export default function Companies() {
  return (
    <>
      <Head>
        <title>Techstars Atlanta - Lookbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-h-screen">
        <Header />

        <div className="mx-auto max-w-7xl mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Companies
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            Introducing the recent graduate companies of Techstars Atlanta and
            Techstars Impact. These talented founders are leading the way in
            addressing a diverse range of challenges across various verticals.
          </p>
        </div>
      </section>
    </>
  )
}
