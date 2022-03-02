import './navbar.css'
import { NavLink } from "react-router-dom";
import { SmileOutlined, SmileFilled, ProjectOutlined, ProjectFilled, PhoneOutlined, PhoneFilled, FileTextOutlined, FileTextFilled } from "@ant-design/icons/lib/icons";


export default function Navbar() {

  return (
    <nav className="display-flex justify-space-evenly">
      <NavLink to='/'>
        <span className='about-me'>
          <SmileOutlined className='default-smile' />
          <SmileFilled className='hover-smile' />
          About Me
        </span>
      </NavLink>
      <NavLink to='/projects'>
        <span className='project'>
          <ProjectOutlined className='default-project' />
          <ProjectFilled className='hover-project' />
          Projects
        </span>
      </NavLink>
      <NavLink to='/contact'>
        <span className='contact'>
          <PhoneOutlined className='default-contact' />
          <PhoneFilled className='hover-contact' />
          Contact
        </span>
      </NavLink>
      <NavLink to='/resume'>
        <span className='resume'>
          <FileTextOutlined className='default-resume' />
          <FileTextFilled className='hover-resume' />
          Resume
        </span>
      </NavLink>
    </nav>
  );
}