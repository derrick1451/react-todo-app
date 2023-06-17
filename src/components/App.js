import { Route , Routes } from "react-router-dom";
import Home from "./home";
import TodoApp from "./todoApp";
import About from "./About";
import NotMatch from "./noMatch";
import Layout from "./Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="todolist" element ={<TodoApp/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  )
 
}

export default  App;
