import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react'
import { send } from 'emailjs-com';

function Contact() {
  library.add(fab);
  const [modal, showModal] = useState(false)
  const [modalConent, setContent] = useState("")
  const [from_name, setName] = useState("")
  const [reply_to, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

const sendMessage = (e) => {
  e.preventDefault()
  const formMessage = {from_name, reply_to, subject, message}
  console.log(formMessage);

  send(
    'service_ibssx9r',
    'template_494udvi',
    formMessage,
    'QKUlhBfAlmWCJAStR'
  )
    .then((response) => {
      showModal(true)
      setContent('Message received')
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      showModal(true)
      setContent("An errror occured!")
      console.log('FAILED...', err);
    });
  setName("")
  setEmail("")
  setSubject("")
  setMessage("")
}

const Modal =  () => {
  useEffect(()=> {
    setTimeout(()=> showModal(false), 2000)
  })
  return (
    <div className="modal">
      <h3>{modalConent}</h3>
    </div>
  )
}


  return (
    <div className="contact">
        <h1>Contact Me</h1>
        <p>Reach out to me via my social media links below or send a message through the contact form. </p>
        <div className="contact-content">
          <div className="contact-detail">
             <p className='phone'><a href="tel:+2349034872219"><FontAwesomeIcon className='contactIcon'  icon={faPhone} /> (+234)9034872219</a></p>
              <p><a href="mailto:ezekielabolade@gmail.com"><FontAwesomeIcon className='contactIcon'  icon={faEnvelope}/>ezekielabolade@gmail.com</a></p>
              <div className="socials">
              <a href="http://twitter.com/thefacecodes"><FontAwesomeIcon className='contactIcon' icon={["fab", "twitter"]} /></a>
              <a href="https://wa.me/qr/YALRGMUPOL3YK1"><FontAwesomeIcon className='contactIcon' icon={["fab", "whatsapp"]} /></a>
              <a href="https://instagram.com/heistheface"><FontAwesomeIcon className='contactIcon' icon={["fab", "instagram"]} /></a>
              <a href="https://linkedin.com/in/ezekiel-abolade"><FontAwesomeIcon className='contactIcon' icon={["fab", "linkedin"]} /></a>
              <a href="https://github.com/thefacecodes"><FontAwesomeIcon className='contactIcon' icon={["fab", "github"]} /></a>
              </div>
          </div>
          <form onSubmit={sendMessage}>
            <label htmlFor="name">Name :</label>
            <input autoComplete='off' required type="text" value={from_name} name="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' id="name" />
            <label htmlFor="email">Email Address</label>
            <input autoComplete='off' required type="email" value={reply_to}   onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter email address' id="email" />
            <label htmlFor="subject">Subject</label>
            <input autoComplete='off' required type="text" value={subject}  onChange={(e) => setSubject(e.target.value)} name="subject" placeholder='Enter message subject' id="subject" />
            <label htmlFor="subject">Message</label>
            <textarea required name="message" value={message}  onChange={(e) => setMessage(e.target.value)} placeholder='Enter Message' id="message"></textarea>
            {modal && <Modal />}
            <button type="submit">Send Message</button>
          </form>
         
        </div>
    </div>
  )
}

export default Contact