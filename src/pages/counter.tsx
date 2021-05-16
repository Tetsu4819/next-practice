// useStateの勉強がしたかった

import React, { useState } from 'react'

export default function counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div className="pt-16 text-center">
      <p className="text-xl">You clicked {count} times</p>
      <button
        className=" bg-blue-500 hover:bg-blue-600 active:bg-blue-700 outline-none cursor-pointer focus:outline-none text-white font-bold  mt-4 py-2 px-4  rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p className=" mt-12 cursor-pointer hover:font-bold">
        <a
          href="https://ja.reactjs.org/docs/hooks-overview.html"
          target="_blank"
          rel="noopener"
        >
          参考ページ:https://ja.reactjs.org/docs/hooks-overview.html
        </a>
      </p>
    </div>
  )
}
