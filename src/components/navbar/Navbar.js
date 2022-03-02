import { NavLink } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons/lib/icons";


export default function Navbar() {

  return (
    <nav>
      <NavLink to='/'><SmileTwoTone />About Me</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
    </nav>
  );
}