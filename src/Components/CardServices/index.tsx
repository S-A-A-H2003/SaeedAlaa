import Button from '../Button';
import './style.scss'

interface Props {
  className?:string;
  img:string;
  header:string;
  discribtion:string;
}

export default function CardServices({className,img,header,discribtion}:Props) {
  return (
    <>
      <div className={'CardServices ' + className}>
        <img src={img} alt="" />
        <h1>{header}</h1>
        <p>{discribtion}</p>
        <a href='#Contact'> 
          <Button
            borderradius='15px'
            backgroundcolor='#F266AB'
          >Order Now</Button>
        </a>
      </div>
    </>
  )
}