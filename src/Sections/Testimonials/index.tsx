import { useState } from 'react'
import Button from '../../Components/Button'
import './style.scss'
import CardTestimonials from '../../Components/CardTestimonials'
import  emailjs  from 'emailjs-com'
export default function Testimonials() {
  const testimonials = [{name:'Not Found Testimonials Yet 😢',email:'Please Add Testimonial 😄',testimonials:''}]
  const [form,setForm] = useState({name:'',email:'',content:''})
  const [status,setStatus] = useState<boolean | null>(null)

  const HandleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setForm({
     ...form,[e.target.id]:e.target.value
    })
    
  }
  const HandleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    emailjs.send('service_0qw2u7y', 'template_w7tg4kk', {
      name: form.name,
      email: form.email,
      content: form.content,
    }, 'RPmTYMNy-QPzRBpGV')
    .then(() => {
      setStatus(true)
      window.alert('sent successfully!');
      setForm({name:'',email:'',content:''})
    })
    .catch(() => {
      setStatus(false)
      window.alert('Error sending');
    });
  }

  return (
    <>
      <div className="Testimonials" id='Testimonials'>
        <div className="Testimonials_Top">
          <h1 className="Testimonials_Top_Part1">Testimonials</h1>
          <p className="Testimonials_Top_Part2">My web projects blend creativity and expertise to deliver  stunning solutions that resonate with audiences.</p>
          <p className="Testimonials_Top_Part3">Sent my Testimonial</p>
          <form onSubmit={HandleSubmit}>
            <input type='name' id='name' value={form.name} onChange={HandleChange} placeholder='Name' required></input>
            <input type='email' id='email' value={form.email} onChange={HandleChange} placeholder='Email' required></input>
            <textarea id='content' value={form.content} onChange={HandleChange} placeholder='Testimonial' required></textarea>
            <Button
              borderradius='15px'
              backgroundcolor={status===true?'#37ff00':status===false?'#ff0000':status===null?'#F266AB':'#F266AB'}
            >Sent</Button>
          </form>
        </div>
        <div className="Testimonials_Down">
          <div className="Swiper">
            {Array.isArray(testimonials)&&testimonials?.map((item,index)=>
              <CardTestimonials key={index} name={item.name} email={item.email} testimonials={item.testimonials} ></CardTestimonials>
            )}
          </div>
        </div>
      </div>
    </>
  )
}