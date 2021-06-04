import Link from 'next/link'
function Home() {
  return (
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
            <a className="mt-8 text-2xl font-bold text-center">escape(grid)</a>
          </Link>
        </li>
        <li>
          <Link href="/escape/margin-ver">
            <a className="mt-8 text-2xl font-bold text-center">
              escape(margin)
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
