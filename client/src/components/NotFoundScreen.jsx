import React from 'react'
import "../styles/components/NotFoundScreen.css"

export default function NotFoundScreen({type, word}) {
  const headerMap = {
    search: `No hay resultados para «${word}».`
  }
  const messageMap = {
    search: "Intenta usar sinónimos o palabras relacionadas."
  }
  return (
    <div className="not-found-container">
      <h2 className="not-found-header">{headerMap[type]} :(</h2>
      <p className="not-found-message">{messageMap[type]}</p>
    </div>
  )
}
