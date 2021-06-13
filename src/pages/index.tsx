import Link from 'next/link'
import Head from 'next/head'
function Home() {
  return (
    <>
      <Head>
        <title>Next Practice</title>
      </Head>
      <div>
        <h1 className="pt-16 text-6xl font-bold text-center">Next.js</h1>
        <h2 className="pt-8 text-4xl font-bold text-center">samples</h2>
        <ul className="pt-4 text-center">
          <li>
            <Link href="/counter">
              <a className="mt-8 text-2xl font-bold text-center">counter</a>
            </Link>
          </li>
          <li>
            <Link href="/escape/grid-ver">
              <a className="mt-8 text-2xl font-bold text-center">
                Escape button(grid)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/escape/margin-ver">
              <a className="mt-8 text-2xl font-bold text-center">
                Escape button(margin)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/FlyBalloons">
              <a className="mt-8 text-2xl font-bold text-center">FlyBalloons</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
