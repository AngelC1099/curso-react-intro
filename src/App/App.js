import React from 'react';
import { TodoTitle } from '../TodoTitle/TodoTitle';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  })

  const changeTodoStatus = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text == text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text == text);

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoTitle
        completed={todos.filter(todo => todo.completed == true).length}
        total={todos.length}
      />
      <TodoFilter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
    </div>
  );
}

export default App;
