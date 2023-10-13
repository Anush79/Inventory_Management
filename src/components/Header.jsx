import { NavLink } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
export default function Header(){
  return <header>
    <div className="logo">InVent</div>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/inventory'>Inventory</NavLink>
      <NavLink to='/sales'>Sales</NavLink>
      <NavLink to='https://github.com/Anush79/Inventory_Management'><GitHubIcon/></NavLink>
      <NavLink to='https://replit.com/@AnushkaJaiswal7/inventoryManagement'><StorageIcon/></NavLink>

    </nav>
  </header>
}