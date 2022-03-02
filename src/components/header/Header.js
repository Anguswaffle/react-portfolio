import './header.css'
import Navbar from "../navbar/Navbar"
import ProfilePic from '../../assets/portfolio-pic.png'

export default function Header() {

  return (
    <div className="flex-column">
      <Navbar />
      <img alt={'Aidan playing the ukulele while smiling'} src={ProfilePic}/>
    </div>
  )
}