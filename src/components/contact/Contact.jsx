import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_imw4co6', 'template_ovps2gj', form.current, 'z2yKoW2vaC3BHxFdI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>aravindprakash2001@gmail.com</h5>
            <a href='mailto:aravindprakash2001@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerFill className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Aravind Prakash</h5>
            <a href='https://m.me/Elisenwolf25/' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <a href='https://wa.me/+918129831054' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact