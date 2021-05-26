import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Business Card App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  items-center justify-center bg-purple-700 w-full flex-1 px-20 text-center">
        <div className="h-1/2 w-1/2 bg-pink-400 divide-x-2 ">
          <Link href='/add'>
            <a className="bg-gray-400 text-xl "> Add your business card</a>
          </Link>
          <Link href='/search'>
             <a className="flex-item"> Find people</a>
            </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} rashmi a graphql projects
        </a>
      </footer>
    </div>
  )
}
