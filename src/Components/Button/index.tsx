import { ButtonStyle } from '../../Styles/StyleComponents/ButttonStyle'
import './style.scss'

interface Props {
  className?:string;
  width?: number;      
  height?: number;        
  color?: string;        
  backgroundcolor?: string; 
  border?: string;       
  borderradius?: string; 
  children?:React.ReactNode;
  onClick?:()=>void;
}

export default function Button({width,height,backgroundcolor,color,border,borderradius,className,children,onClick}:Props) {
  return (
    <>
      <ButtonStyle
        className={'ButtonComponent '+ className}
        width={width}
        height={height}
        backgroundcolor={backgroundcolor}
        color={color}
        border={border}
        borderradius={borderradius}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  )
}