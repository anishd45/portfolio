import React, {useRef} from 'react'
import './Contact.css'
import mail_icon from '../assets/mail_icon.png'
import location_icon from '../assets/location_icon.png'
import call_icon from '../assets/call_icon.png'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4icag0o', 'template_ccy3nd5', form.current, {
        publicKey: 'zZ018tQ5N2NlxPw8O',
      })
      .then(
        () => {
          console.log('Messsage Sent!');
        },
        (error) => {
          console.log('Message Failed to Sent...!', error.text);
        },
      );
      e.target.reset();
      alert("Your Message Has Been  Sent Successfully!");
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Always available for freelance work if the right project comes along, Feel free to contact me! </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>anishdevkota12@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+977-9869194907</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Gongabu, Kathmandu</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} id='contact' className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your Name' name='name' required/>
          <label htmlFor="">Your Email</label>
          <input type="subject" placeholder='Enter subject' name='subject' required/>
          <label htmlFor="">Write Your Message Here</label>
          <textarea type="message" rows='8' placeholder='Enter your Name' name='name' required ></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}
