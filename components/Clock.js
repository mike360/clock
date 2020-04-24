import React, { useState, useEffect } from "react"

export default function Clock() {
  const [now, setNow] = useState(new Date(Date.now()))

  const getRotation = (val) => val / 60 - 0.25

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date(Date.now()))
      console.log("Updating the time")
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="face">
      <div className="big hand"></div>
      <div className="little hand"></div>
      <div className="second hand"></div>

      <style jsx>{`
        .face {
          border: 0.5rem solid #000;
          width: 32rem;
          height: 32rem;
          border-radius: 50%;
          position: relative;
        }
        .hand {
          background: black;
          position: absolute;
          height: 0.25rem;
          left: calc(50% - 0.125rem);
          top: calc(50% - 0.125rem);
          transform-origin: center left;
          width: 14rem;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
        }
        .second {
          background: red;
          transform: rotate(${now.getSeconds() / 60 - 0.25}turn);
        }
        .big {
          transform: rotate(${now.getMinutes() / 60 - 0.25}turn);
        }
        .little {
          width: 10rem;
          transform: rotate(${now.getHours() / 12 - 0.25}turn);
        }
      `}</style>
    </div>
  )
}
