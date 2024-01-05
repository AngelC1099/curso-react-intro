import React from 'react'
import './TodoTitle.css'

function TodoTitle(props) {
  return (
    <h1 className='TodoTitle'>
        Has completado { props.completed } de { props.total } TODOs
    </h1>
  )
}

export { TodoTitle }