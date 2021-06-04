import { useState } from 'react'

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
