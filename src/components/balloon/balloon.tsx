import React, { useEffect, useState } from 'react'
import BalloonSVG from './bal-svg'

export default function Balloon() {
  const balH = Math.floor(Math.random() * (250 - 100 + 1) + 100)
  const balL = Math.floor(Math.random() * (100 - 0 + 1) + 0)
  const [mh, setMh] = useState(balH)
  const [ml, setMl] = useState(balL)

  useEffect(() => {
    const num1 = mh - 350
    setMh(num1)
    const num2 = Math.floor(Math.random() * (100 + 30 + 1) - 30)
    setMl(num2)
  }, [])

  const style = {
    marginTop: `${mh}vh`,
    marginLeft: `${ml}vw`,
    transitionDuration: `25s`
  }

  return (
    <div style={style} className="absolute">
      <BalloonSVG />
    </div>
  )
}
