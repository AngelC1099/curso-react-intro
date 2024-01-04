import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true
  },
  {
    text: "Cortar ajo",
    completed: true
  },
  {
    text: "Calentar comida",
    completed: false
  },
  {
    text: "Comer con ganas",
    completed: false
  },
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  })

  const changeTodoStatus = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text == text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text == text);

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
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
