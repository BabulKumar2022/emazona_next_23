
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Head>
        <title>emazona</title>
      </Head>
      <h1>emazona-23</h1>
    </div>
  )
}
