import React from 'react'
import './TodoTitle.css'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoTitle(props) {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

  return (
    <h1 className='TodoTitle'>
        Has completado { completedTodos } de { totalTodos } TODOs
    </h1>
  )
}

export { TodoTitle }