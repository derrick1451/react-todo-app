import { useEffect, useState } from "react";
import InputTodos from "./Inputtodo";
import TodoList from "./Todolist";
import { v4 as uuidv4 } from "uuid";
export default function TodoLogic(){
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
    const [todos ,setTodos] = useState(getInitialTodos())
        useEffect(()=>{
          const temp = JSON.stringify(todos)
          localStorage.setItem('todos',temp)

        },[todos])
      
        const handleChange = (id) => {
            setTodos((prevState) =>
              prevState.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                }
                return todo;
              })
            );
          };
          function delTodo(id){
            setTodos([
                ...todos.filter((todo) => {
                  return todo.id !== id;
                }),
              ]);
          }
          const setUpdate = (updatedTitle, id) => {
            // update state
            setTodos(
              todos.map((todo) => {
                if (todo.id === id) {
                  todo.title = updatedTitle;
                }
                return todo;
              })
            );
          };
          function addTodoItem(title){
            const newTodo = {
                id:uuidv4(),
                title,
                completed:false 
            }
          return  setTodos([...todos,newTodo])
          }
    
    return (
        <div>
        <InputTodos addTodoItem={addTodoItem}/>
        <TodoList setUpdate={setUpdate} todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
        </div>
    )
}