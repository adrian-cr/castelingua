import React from 'react'
import "../styles/components/Spinner.css"

export default function Spinner() {
  return (
    <svg className="spinner" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#344ddb" />
          <stop offset="50%" stop-color="#3498db" />
          <stop offset="100%" stop-color="#48f2bf" />
        </linearGradient>
      </defs>
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="url(#spinnerGradient)"
        stroke-width="5"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="90"
        stroke-dashoffset="0"
      />
    </svg>
  )
}
