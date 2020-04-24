import React from "react"

export default function Clock({ time }) {
  return (
    <div className="face">
      <div className="big hand"></div>
      <div className="little hand"></div>
      <div className="second hand"></div>

      <style jsx>{`
        .face {
          border: 0.5rem solid #000;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          position: relative;
          margin: 0;
        }
        .hand {
          background: black;
          position: absolute;
          height: 0.25rem;
          left: calc(50% - 0.125rem);
          top: calc(50% - 0.125rem);
          transform-origin: center left;
          width: 9rem;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
        }
        .second {
          background: red;
          transform: rotate(${time.getSeconds() / 60 - 0.25}turn);
        }
        .big {
          transform: rotate(${time.getMinutes() / 60 - 0.25}turn);
        }
        .little {
          width: 7rem;
          transform: rotate(${time.getHours() / 12 - 0.25}turn);
        }
      `}</style>
    </div>
  )
}
