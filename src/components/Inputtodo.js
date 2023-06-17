import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
function InputTodos({addTodoItem}){
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('');
  function handleInput(e){
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('Please add item');
    }
  };

    return (
      <>
      <form className="form-container" onSubmit={handleSubmit}>
      <input className="input-text" onChange={handleInput} value={title} type="text" 
      placeholder="Add Todo..." />
      <button onClick={handleSubmit} className="input-submit" type="button"> <FaPlusCircle  className="submit-icon" /></button>
    </form>
      <span className="submit-warning">{message}</span>
      </>
   
        
    )
}
export default InputTodos