import Button from '../../Components/Button'
import './style.scss'

export default function Projects() {
  return (
    <>
      <div className="Projects" id='Projects'>
          <div className="Projects_Top">
            <h1 className="Projects_Top_Part1">My Projects</h1>
            <p className="Projects_Top_Part2">My wep projects blend creativity and expertise to deliver  stunning solutions that resonate with audiences.</p>
            <div className="Button">
              <Button
                backgroundcolor='#2DD3E1'
                borderradius='25px'
              ><a href='https://clic0n.netlify.app' target='_blank' rel="noopener noreferrer">Clicon</a></Button>
              <Button
                backgroundcolor='#F266AB'
                borderradius='25px'
              ><a href='https://m-o-v-e.netlify.app' target='_blank' rel="noopener noreferrer">Move</a></Button>
              <Button
                backgroundcolor='#2DD3E1'
                borderradius='25px'
              ><a href='https://halaprestaurant.netlify.app' target='_blank' rel="noopener noreferrer">Halap_Resturant</a></Button>
              <Button
                backgroundcolor='#F266AB'
                borderradius='25px'
              ><a href='https://saeedalaaabuhalima.netlify.app' target='_blank' rel="noopener noreferrer">Protofolio</a></Button>
            </div>
          </div>
      </div>
    </>
  )
}