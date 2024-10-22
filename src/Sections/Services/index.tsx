import CardServices from '../../Components/CardServices'
import './style.scss'

import  Services1  from '../../assets/Img/Services1.webp'
import  Services2  from '../../assets/Img/Services2.webp'
export default function Services() {
  return (
    <>
      <div className="Services" id='Services'>
        <div className="Services_Top">
          <h1 className="Services_Top_Part1">Services</h1>
          <p className="Services_Top_Part2"> I offer innovative and tailored web site that fuse creativity, functionality, and aesthetics to bring impactful and visually captivating web site to life.</p>
        </div>
        <div className="Services_Down">
          <CardServices
            className='Services_Down_Card1'
            img={Services2}
            header='Build Portfolio 👌'
            discribtion='Own your own personal website now 😎'
          ></CardServices>
          <CardServices
            className='Services_Down_Card2'
            img={Services1}
            header='From Figma To WebSite 🤩'
            discribtion=' With React TypeScript Sass😎'
          ></CardServices>
        </div>
      </div>
    </>
  )
}