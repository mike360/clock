import React, { useState, useEffect } from "react"
import Head from "next/head"
import Clock from "../components/Clock"

export default function Index() {
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
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
    </main>
  )
}
