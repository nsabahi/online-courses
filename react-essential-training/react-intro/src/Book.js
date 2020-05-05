import React from 'react'

export const Book = ({title="No author provided", author="No author", pages=0, freeBookmark}) => {
    return(
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free bookmark today: {freeBookmark ? 'yes!' : 'no!'} </p>
      </section>
    )
  }