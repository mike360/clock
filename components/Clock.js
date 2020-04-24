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
          box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.7);
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
          transform: rotate(${time.getSeconds() / 60 - 0.25}turn);
          transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44);
        }
        .big {
          transform: rotate(${time.getMinutes() / 60 - 0.25}turn);
        }
        .little {
          width: 7rem;
          transform: rotate(
            ${time.getHours() / 12 + time.getMinutes() / 60 / 12 - 0.25}turn
          );
        }
      `}</style>
    </div>
  )
}
