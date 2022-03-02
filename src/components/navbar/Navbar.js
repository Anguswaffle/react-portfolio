import { NavLink } from "react-router-dom";
import { SmileOutlined, ProjectOutlined, PhoneOutlined, FileTextOutlined } from "@ant-design/icons/lib/icons";


export default function Navbar() {

  return (
    // <div className="display-flex justify-flex-end">
      <nav className="display-flex justify-space-around">
        <NavLink to='/'><SmileOutlined />About Me</NavLink>
        <NavLink to='/projects'><ProjectOutlined /> Projects</NavLink>
        <NavLink to='/contact'><PhoneOutlined /> Contact</NavLink>
        <NavLink to='/resume'><FileTextOutlined /> Resume</NavLink>
      </nav>
    // </div>
  );
}