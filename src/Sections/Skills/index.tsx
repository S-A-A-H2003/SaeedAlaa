import './style.scss'

export default function Skills() {
  return (
    <>
      <div className="Skills" id='Skills'>
        <div className="Skills_Top">
        <p>Skills</p>
        </div>
        <div className="Skills_Down">
          <div className="Skills_Left">
            <p className='Skills_Left_Part1'>TECHNICAL SKILLS 😎</p>
            <ul>
              <li>Programming Languages: Java , PHP , HTML , CSS , Sass , JavaScript , TypeScript. </li> 
              <li>Backend Frameworks: Laravel (PHP). </li>
              <li>Frontend Frameworks: React.js.</li>
              <li>Databases: MySQL, SQL, Oracle.</li>
            </ul>
          </div>
          <div className="Skills_Right">
          <p className='Skills_Right_Part1'>PERSONAL SKILLS 🤗</p>
            <ul>
              <li>Ability to work under pressure.</li> 
              <li>Problem-solving. </li>
              <li>Strong communication skills.</li>
              <li>Presentation skills.</li>
              <li>Teamwork.</li>
            </ul>
          </div>
          </div>
      </div>
    </>
  )
}