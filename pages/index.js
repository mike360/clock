import React from "react"
import Head from "next/head"
import Clock from "../components/Clock"

export default function Index() {
  return (
    <main>
      <Clock />
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
    </main>
  )
}
