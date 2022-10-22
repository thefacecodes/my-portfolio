import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <div className='testimonial'>
        <h1>Testimonial</h1>
        <p>What do friends, colleagues and clients have to say about me ? There you go..</p>
        <div className="quote">
            <p>Ezekiel is a cool-headed professional with a great attitude towards learning and taking on new challenges/tasks.</p>
    <h3>Mr. Dennis Yesu</h3>
    <h5>Project Manager, Soft Web Digital</h5>        
        </div>
        <p className='short'>Got a thing or two to say about me or my work ?</p>
        <Link to="/sendtestimonial">Send Testimonial</Link>
    </div>
  )
}

export default Testimonial