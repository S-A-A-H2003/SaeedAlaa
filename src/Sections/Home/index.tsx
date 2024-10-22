import './style.scss'

//assets
import HomeImg from '../../assets/Img/Home.png'
import Button from '../../Components/Button'
import Cv from '../../assets/Cv/Saeed Alaa Abu Halima _Cv.pdf'

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = Cv;
  link.download = 'Saeed Alaa Abu Halima_Cv.pdf';
  link.click();
};

export default function Home() {
  return (
    <>
      <div className="Home" id='Home'>
        <div className="Home_Left">
          <p className="Home_Left_Part1">Hi I am </p>
          <p className="Home_Left_Part2">Saeed Alaa <div className='Animation'>😊</div></p>
          <p className="Home_Left_Part3">Full Stack</p>
          <p className="Home_Left_Part4">Web Developer</p>
          <p className="Home_Left_Part5">Transforming your vision into a digital<br/> reality with stunning and innovative<br/> designs, utilizing comprehensive web<br/> development technologies.</p>
          <Button
            className="Home_Left_Part6"
            backgroundcolor='#F266AB'
            onClick={()=>handleDownload()}
          >Cv</Button>
        </div>
        <div className="Home_Right">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </>
  )
}