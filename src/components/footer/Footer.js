import './footer.css'
import { GithubFilled, LinkedinFilled } from "@ant-design/icons/lib/icons"


export default function Footer() {

  return (
    <div className='display-flex justify-center footer'>
      <a href='https://github.com/Anguswaffle'>
        <GithubFilled />
      </a>
      <a href='https://www.linkedin.com/in/aidan-a-6899a1220/'>
        <LinkedinFilled/>
      </a>
    </div>
  )
}