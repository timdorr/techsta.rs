import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-black text-white ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
