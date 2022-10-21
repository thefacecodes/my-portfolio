import React, { useEffect, useState } from 'react'
import { send } from 'emailjs-com';
function SendTestimonial() {
  const [userImage, setImage] = useState("")
  const [name, setName] = useState("")
  const [occupation, setOccupation] = useState("")
  const [review, setReview] = useState("")
  const [modal, showModal] = useState(false)
  const [modalConent, setContent] = useState("")

const avatar = React.createRef()
  const swapAvatar = (e) => {
    avatar.current.src = URL.createObjectURL(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]))
    
  }

  const submitForm = (e) => {
    e.preventDefault();
    const Review = {name, occupation, review, userImage}
    console.log(Review);
    send(
      'service_ibssx9r',
      'template_n0qrsc4',
      Review,
      'QKUlhBfAlmWCJAStR'
    )
      .then((response) => {
        showModal(true)
        setContent('Testimonial received')
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        showModal(true)
        setContent("An errror occured!")
        console.log('FAILED...', err);
      });
      setName("")
      setOccupation("")
      setReview("")
      avatar.current.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
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
    <div className='send'>
       <h1>Send Testimonial</h1> 
       <p>Please fill the form below to give your testimonials about my work</p>
       <form onSubmit={submitForm}>
        <label htmlFor="image" className='photo'>
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" ref={avatar} alt="" />
        </label>
        <input type="file" onChange={swapAvatar} style={{display: "none"}} accept='image/*' name="image" id="image" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} required onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
        <label htmlFor="occupation">Who are you ?</label>
        <input type="text" name="occupation" value={occupation} required onChange={(e)=>setOccupation(e.target.value)} id="occupation" placeholder='What do you do ?' />
        <label htmlFor="review">Review</label>
        <textarea name="review" id="review" value={review} required placeholder="A detailed review of your experience of Ezekiel's work" onChange={(e) => setReview(e.target.value)}></textarea>
        {modal && <Modal />}
        <button type="submit">Submit Testimonial</button>
       </form>
    </div>
  )
}

export default SendTestimonial