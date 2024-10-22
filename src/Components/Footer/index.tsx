import './style.scss'
import Logo from '../../assets/Img/Logo.png'
import LinkedIn from '../../assets/Img/LinkedIn.png'
import GitHub from '../../assets/Img/github.png'
import Linkedtree from '../../assets/Img/LinkedIn.png'

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer_Top">
          <img className="Logo" src={Logo} alt="" />
          <ul>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#Aboutme'>Aboutme</a></li>
              <li><a href='#Services'>Services</a></li>
              <li><a href='#Projects'>Projects</a></li>
              <li><a href='#Testimonials'>Testimonials</a></li>
              <li><a href='#Contact'>Contact</a></li>
          </ul>
          <ul>
              <li><a href='#'><img src={LinkedIn} alt="GitHub" /></a></li>
              <li><a href='#'><img src={GitHub} alt="LinkedIn" /></a></li>
              <li><a href='#'><img src={Linkedtree} alt="Linkedtr.ee" /></a></li>
          </ul>
        </div>
        <div className="Footer_Down">
          <p>© 2023 <span>SaeedAlaa</span> All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}