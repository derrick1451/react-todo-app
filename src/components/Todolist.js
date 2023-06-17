import Todoitem from "./Todoitem"
function TodoList({todosProps,handleChange,delTodo,setUpdate}){
    return (
        <ul>
           {todosProps.map((todos)=>{
            return(
                <Todoitem delTodo={delTodo} handleChange={handleChange} setUpdate={setUpdate}  key={todos.id} itemprop={todos}/>
           )})}
        </ul>
    )
}
export default TodoList