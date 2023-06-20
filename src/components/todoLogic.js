import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodos from './Inputtodo';
import TodoList from './Todolist';

const TodoLogic = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  function delTodo(id) {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  }
  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  function addTodoItem(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    return setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <InputTodos addTodoItem={addTodoItem} />
      <TodoList
        setUpdate={setUpdate}
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </div>
  );
};
export default TodoLogic;
