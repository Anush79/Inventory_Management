import { NavLink } from "react-router-dom";


export default function Header(){
  return <header>
    <div className="logo">InVent</div>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/inventory'>Inventory</NavLink>
      <NavLink to='/sales'>Sales</NavLink>

    </nav>
  </header>
}