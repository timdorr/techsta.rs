import Head from 'next/head'
import Image from 'next/image'

import logo from '@/public/techstars-atlanta-logo.png'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex items-center justify-between p-6 lg:px-8">
      <Link href="/" className="-m-1.5 p-1.5">
        <Image
          src={logo}
          alt="Techstars Atlanta & Impact Powered by Cox Enterprises"
          priority
          height={50}
        />
      </Link>

      <div className="flex lg:gap-x-12">
        <Link href="/companies" className="text-sm font-semibold leading-6">
          Lookbook
        </Link>
        <a
          href="https://atl-mentors.techsta.rs"
          className="text-sm font-semibold leading-6"
        >
          Mentor Login <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </header>
  )
}

export default function Atlanta() {
  return (
    <>
      <Head>
        <title>Techstars Atlanta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Header />
      </section>
    </>
  )
}
