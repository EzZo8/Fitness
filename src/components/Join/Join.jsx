import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xcvfljm', 'template_m46l1e9', form.current, '4_PEYN0sUrqlhjWye')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='join' id='join'>

      <div className="left-j">
        <hr/>
        <div>
            <span className='uc stroke-text'>ready to</span>
            <span className='uc'> level up</span>
        </div>
        <div>
            <span className='uc'>your body</span>
            <span className='uc stroke-text'> with us?</span>
        </div>
      </div>



      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className='email-container' action="">
            <input type='email' name='user-email' placeholder='Enter your E-mail address..'/>
            <button className='btn btn-j'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
