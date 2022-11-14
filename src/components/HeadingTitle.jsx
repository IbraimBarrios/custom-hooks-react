import React from 'react'

const myComponentStyle = {
    color: 'blue',
    padding: '1.5rem',
}

function HeadingTitle({title}) {
  return (
    <h1 style={myComponentStyle}>{title}</h1>
  )
}

export default HeadingTitle