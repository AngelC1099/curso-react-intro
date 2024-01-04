import React from 'react'
import './TodoFilter.css'

function TodoFilter(props) {
  return (
    <input
      placeholder="Cortar cebolla"
      className='TodoFilter'
      value={props.searchValue}
      onChange={(event) => {
        props.setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoFilter }