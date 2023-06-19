import Todoitem from './Todoitem';
/* eslint-disable react/prop-types */
function TodoList({
  todosProps, handleChange, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todos) => (
        <Todoitem
          delTodo={delTodo}
          handleChange={handleChange}
          setUpdate={setUpdate}
          key={todos.id}
          itemprop={todos}
        />
      ))}
    </ul>
  );
}
export default TodoList;
