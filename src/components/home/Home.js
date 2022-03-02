import './home.css'
import ProfilePic from '../../assets/portfolio-pic.png'

export default function Home() {

  return (
    <div className="flex-column align-center">
            <img className="col-sm-6 col-md-4 col-2" alt={'Aidan playing the ukulele while smiling'} src={ProfilePic}/>
    <article className="text-center">
      <p>
        Hi! I'm Aidan Albano-Bachtell. I'm a fullstack engineer in Palm Springs, CA. In the past, I taught elementary music.
      </p>
    </article>
    </div>
  )
}