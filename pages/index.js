import Head from 'next/head'
import Image from 'next/future/image'

import logo from '../public/techstars-logo.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techstars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="Techstars" priority />
      </main>
    </div>
  )
}
