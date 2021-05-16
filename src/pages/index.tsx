import Link from 'next/link'
function Home() {
  return (
    <div>
      <p className="pt-16 text-6xl font-bold text-center">HelloNext </p>
      <p className="pt-8 text-4xl font-bold text-center">samples</p>
      <ul className="text-center pt-4">
        <li>
          <Link href="counter">
            <a className="pt-8 text-2xl font-bold text-center">counter</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
