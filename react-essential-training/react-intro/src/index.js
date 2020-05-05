import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial',
}

ReactDOM.render(
  <div style={style}>
    <h1 id='heading-element'>Hello World!</h1>
    <p>Thanks for stopping by.</p>
  </div>,
  document.getElementById('root')
)