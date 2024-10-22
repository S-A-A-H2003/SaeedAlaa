import './App.scss'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Aboutme from './Sections/Aboutme'
import Contact from './Sections/Contact'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Services from './Sections/Services'
import Skills from './Sections/Skills'
import Testimonials from './Sections/Testimonials'

//Styles
import { GlobalStyle } from './Styles/GlobalStyle/Style'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
