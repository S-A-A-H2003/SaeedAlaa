import './style.scss'
import AboutmeImg from '../../assets/Img/Aboutme.png'

export default function Aboutme() {
  return (
    <>
      <div className="Aboutme" id='Aboutme'>
        <div className="Aboutme_Left">
          <img src={AboutmeImg} alt="" />
        </div>
        <div className="Aboutme_Right">
          <h1 className="Aboutme_Right_Part1">About Me</h1>
          <p className="Aboutme_Right_Part2">
            A university student specializing in Full Stack web development  <br/>
            with hands-on experience in both frontend and backend  <br/>
            technologies through academic and personal projects.  <br/>
            Skilled in developing web applications  <br/>
            using React.js, Laravel, and MySQL.  <br/>
            Proficient in problem-solving and teamwork,  <br/>
            with the ability to manage projects under tight deadlines.
          </p>
        </div>
      </div>
    </>
  )
}