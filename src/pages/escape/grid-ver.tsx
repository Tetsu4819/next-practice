import { useState } from 'react'
import Head from 'next/head'

export default function Grid() {
  const [col, setCol] = useState(1)
  const [row, setRow] = useState(1)
  function changePosision() {
    const number1 = Math.floor(Math.random() * (12 - 1 + 1) + 1)
    const number2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    setCol(number1)
    setRow(number2)
    // console.log(escStyle)
  }
  const escStyle = `col-span-1 row-span-1 px-4 py-2 mt-4 font-bold text-white bg-blue-500 outline-none cursor-pointer hover:bg-blue-600 active:bg-blue-700 focus:outline-none rounded-xl col-start-${col} row-start-${row}`

  return (
    <>
      <Head>
        <title>Escape button(grid)</title>
      </Head>
      <div className="grid w-screen h-screen grid-cols-12 grid-rows-6">
        <button
          className={escStyle}
          onMouseOver={() => changePosision()}
          onClick={() => changePosision()}
        >
          Push me!
        </button>
      </div>
    </>
  )
}
;[
  'row-start-1',
  'row-start-2',
  'row-start-3',
  'row-start-4',
  'row-start-5',
  'row-start-6',
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
  'col-start-8',
  'col-start-9',
  'col-start-10',
  'col-start-11',
  'col-start-12'
]
