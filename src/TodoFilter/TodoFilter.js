import React from 'react'
import './TodoFilter.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoFilter() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className='TodoFilter'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoFilter }