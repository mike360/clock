import React from "react"

export default function Clock({ time }) {
  return (
    <div className="face">
      <div className="big hand"></div>
      <div className="little hand"></div>
      <div className="second hand"></div>
      <div className="nose"></div>
      <style jsx>{`
        .nose {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: red;
          border: 0.25rem solid #000;
          position: absolute;
          top: calc(50% - 0.5rem);
          left: calc(50% - 0.5rem);
        }
        .face {
          background: #fff url(/face.svg) center center no-repeat;
          background-size: contain;
          width: 22rem;
          height: 22rem;
          border-radius: 50%;
          position: relative;
          margin: 0;
          box-shadow: inset 0 12px 32px rgba(0, 0, 0, 0.5),
            0 12px 42px rgba(0, 0, 0, 0.2);
        }
        .hand {
          background: black;
          position: absolute;
          height: 0.25rem;
          left: 50%;
          top: 50%;
          transform-origin: center left;
          width: 9rem;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
        }
        .second {
          background: red;
          height: 0.15rem;
          transform: rotate(${time.getSeconds() / 60 - 0.25}turn);
        }
        .big {
          transform: rotate(${time.getMinutes() / 60 - 0.25}turn);
        }
        .little {
          width: 6rem;
          transform: rotate(
            ${time.getHours() / 12 + time.getMinutes() / 60 / 12 - 0.25}turn
          );
        }
      `}</style>
    </div>
  )
}
