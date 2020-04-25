import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Head from "next/head"

const Clock = dynamic(import("../components/Clock"))

export default function Index() {
  const [now, setNow] = useState(new Date(Date.now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date(Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <Clock time={now} />
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background: linear-gradient(#fff, #cacaca);
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
    </main>
  )
}
