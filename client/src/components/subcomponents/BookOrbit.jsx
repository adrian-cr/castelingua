import React from 'react'
import "../../styles/components/subcomponents/BookOrbit.css"

export default function BookOrbit() {
  return (
    <div className="book-orbiter">
      <img
        src="/images/imagotype_indigo_seethrough.png"
        className="bo-center-img"
      />
      <img
        src="/images/book.png"
        className="bo-orbiter bo-orbiter1"
      />
      <img
        src="/images/book.png"
        className="bo-orbiter bo-orbiter2"
      />
      <img
        src="/images/book.png"
        className="bo-orbiter bo-orbiter3"
      />
      <img
        src="/images/book.png"
        className="bo-orbiter bo-orbiter4"
      />
    </div>
  )
}
