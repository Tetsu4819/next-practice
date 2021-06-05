import React, { useState } from 'react'
import Head from 'next/head'

export default function Grid() {
  const [mh, setMh] = useState(3)
  const [ml, setMl] = useState(3)
  function changePosision() {
    const number1 = Math.floor(Math.random() * (90 - 5 + 1) + 5)
    const number2 = Math.floor(Math.random() * (90 - 5 + 1) + 5)
    setMh(number1)
    setMl(number2)
    // console.log(style)
  }
  const style = {
    marginLeft: `${mh}vw`,
    marginTop: `${ml}vh`,
    transitionDuration: `0.5s`
  }

  return (
    <>
      <Head>
        <title>Escape button(margin)</title>
      </Head>
      <div className="w-full h-auto ">
        <button
          style={style}
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 outline-none cursor-pointer hover:bg-blue-600 active:bg-blue-700 focus:outline-none rounded-xl"
          onMouseOver={() => changePosision()}
          onClick={() => changePosision()}
        >
          Push me!
        </button>
      </div>
    </>
  )
}
