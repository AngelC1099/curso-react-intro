import React from 'react'
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <span
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onChangeTodoStatus}
        >
          <VscCheck />
        </span>
        <p className={`Todoitem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <span
          className='Icon Icon-delete'
          onClick={props.onDelete}
        >
          <VscChromeClose />
        </span>
      </li>
    );
  }

export { TodoItem }