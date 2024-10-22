import { useState } from 'react'
import Button from '../../Components/Button'
import './style.scss'
import  emailjs  from 'emailjs-com'
export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',content:''})
  const [status,setStatus] = useState<boolean | null>(null)

  const HandleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setForm({
     ...form,[e.target.id]:e.target.value
    })

    console.log(form);
    
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
      <div className="Contact" id='Contact'>
        <h1 className="Contact_Part1">Lets Work Together</h1>
        <p className="Contact_Part2">Ready to elevate your brand with captivating Web Site? Let's collaborate and create something extraordinary together.</p>
        <form onSubmit={HandleSubmit}>
          <input type='name' id='name' value={form.name} onChange={HandleChange} placeholder='Name' required></input>
          <input type='email' id='email' value={form.email} onChange={HandleChange} placeholder='Email' required></input>
          <textarea id='content' value={form.content} onChange={HandleChange} placeholder='Content' required></textarea>
          <Button
            borderradius='15px'
            backgroundcolor={status===true?'#37ff00':status===false?'#ff0000':status===null?'#F266AB':'#F266AB'}
          >Contact My</Button>
        </form>
      </div>
    </>
  )
}