import Head from 'next/head'
import Image from 'next/image'

import logo from '../public/techstars-logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Techstars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-screen flex justify-center items-center text-[20vw]">
        <Image src={logo} alt="Techstars" priority />
      </section>
    </>
  )
}
