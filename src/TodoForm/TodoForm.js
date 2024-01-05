import React from 'react'
import './TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  return (
    <form action="">
      <label>
        Escribe tu nuevo TODO
      </label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={(event) => {
          setNewTodoValue(event.target.value);
        }}
      >

      </textarea>
      <div
        className="TodoForm-buttonContainer"
      >
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => {
            setOpenModal(state => !state)
          }}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          onClick={() => {
            addTodo(newTodoValue)
            setOpenModal(state => !state)
          }}
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }