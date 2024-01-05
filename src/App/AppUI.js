import React from 'react'
import { TodoTitle } from '../TodoTitle/TodoTitle';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';

function AppUI() {
  const {
    loading,
    error,
    todos,
    searchedTodos,
    changeTodoStatus,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <div className="App">
      <TodoTitle />
      <TodoFilter />
      <TodoList>
        {loading && (
          <React.Fragment>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </React.Fragment>
        )}
        {error && <TodosError />}
        {(!loading && todos.length == 0) && <TodosEmpty />}
        {searchedTodos.map(todo => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onChangeTodoStatus={
                () => {
                  return changeTodoStatus(todo.text);
                }
              }
              onDelete={
                () => {
                  return deleteTodo(todo.text);
                }
              }
            />
          )
        })}
      </TodoList>
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppUI }