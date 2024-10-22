import './style.scss'

interface Props {
  className?:string;
  name:string;
  email:string;
  testimonials:string;
}

export default function CardTestimonials({className,name,email,testimonials}:Props) {
  return (
    <>
      <div className={'CardTestimonials ' + className}>
        <h1>{name}</h1>
        <h2><a>{email}</a></h2>
        <p>{testimonials}</p>
      </div>
    </>
  )
}