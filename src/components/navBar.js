import { NavLink } from "react-router-dom";
const links = [
  { path: '/', text: 'Home' },
  { path: 'todolist', text: 'Todolist' },
  { path: 'about', text: 'About' },
];

function NavBar(){
return (
  <header className="header" >
    <h2>todo App</h2>
    <nav>
      <ul className="link-item">
      {links.map((link) => {
        return (
          <li key={link.text}>
           <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
      </ul>
    </nav>
  </header>
)
    
}
export default NavBar