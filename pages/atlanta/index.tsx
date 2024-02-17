import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

import logo from '@/public/techstars-atlanta-logo.png'
import hero from '@/public/atlanta-hero.jpg'

export function Header() {
  return (
    <header className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">
      <Link href="/" className="p-2 block relative lg:h-8 lg:w-48 h-6 w-32">
        <Image
          src={logo}
          alt="Techstars Atlanta & Impact Powered by Cox Enterprises"
          priority
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex lg:gap-x-12 gap-x-4">
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

      <section className="min-h-screen">
        <Header />

        <div className="relative">
          <div className="absolute h-full w-full">
            <Image
              src={hero}
              alt="Atlanta skyline"
              sizes="100vw"
              className="object-cover"
              fill
              priority
            />
            <div className="absolute h-full w-full bg-gradient-to-t from-black z-1"></div>
          </div>

          <div className="relative pt-24 mx-auto max-w-7xl px-6 lg:px-8 z-10">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 bg-white text-gray-600 text-nowrap ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-green-600">
                  Applications are open
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a
                  href="https://apply.techstars.com/?accelerator=Techstars%20Atlanta%20Powered%20by%20Cox%20Enterprises"
                  className="flex items-center gap-x-1"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Apply today
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <h1 className="mt-10 text-4xl font-bold leading-2 tracking-tight sm:text-6xl">
              Techstars Atlanta
              <br />
              Techstars Impact
            </h1>
            <h2 className="mt-2 text-xl lg:text-3xl font-semibold leading-8 lg:indent-2">
              Powered by Cox Enterprises
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8">
              Located in the epicenter of startup activity in the Southeast:
              Atlanta, GA. We’re helping entrepreneurs build meaningful
              companies and enduring brands.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://apply.techstars.com/?accelerator=Techstars%20Atlanta%20Powered%20by%20Cox%20Enterprises"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Apply Now
              </a>
              <a
                href="https://www.techstars.com/accelerators/atlanta-cox"
                className="text-sm font-semibold leading-6"
              >
                Visit techstars.com <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
