import './style.scss'

import LinkedIn from '../../assets/Img/LinkedIn.png'
import GitHub from '../../assets/Img/github.png'
import Linkedtree from '../../assets/Img/LinkedIn.png'
import List from '../../assets/Img/List.png'

//assets
import Logo from "../../assets/Img/Logo.png"
import { useState } from 'react'

export default function Header() {

    const [value,setValue] = useState<boolean>(false)
  return (
    <>
        <div className="Header">
                <div className="Header_Left">
                    <img src={Logo} className="Header_Left_Part1" alt="Saeed Alaa" />
                    <div className="Header_Left_Part2">
                        <ul>
                            <li><a href='#Home'><img src={LinkedIn} alt="GitHub" /></a></li>
                            <li><a href='#Aboutme'><img src={GitHub} alt="LinkedIn" /></a></li>
                            <li><a href='#Services'><img src={Linkedtree} alt="Linkedtr.ee" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="Header_Right">
                    <ul className={value?'List Open':'List'}>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#Aboutme'>Aboutme</a></li>
                        <li><a href='#Skills'>Skills</a></li>
                        <li><a href='#Services'>Services</a></li>
                        <li><a href='#Projects'>Projects</a></li>
                        <li><a href='#Testimonials'>Testimonials</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                        <li className="CloseImg" onClick={()=>setValue(false)}>❌</li>
                    </ul>
                    <div className="ListImg" onClick={()=>setValue(!value)}><img src={List} alt="" /></div>
                </div>
        </div>
    </>
  )
}