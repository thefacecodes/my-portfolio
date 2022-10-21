import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <div className='testimonial'>
        <h1>Testimonial</h1>
        <p>What do friends, colleagues and clients have to say about me ? There you go..</p>
        <div className="quote">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum inventore autem assumenda odit non fuga temporibus quas. Quisquam soluta in eum molestias quas tempora illum, accusantium culpa, facilis, incidunt exercitationem?</p>
    <h3>Mr. Dennis Yesu</h3>
    <h5>Project Manager, Soft Web Digital</h5>        
        </div>
        <p className='short'>Got a thing or two to say about my work ?</p>
        <Link to="/sendtestimonial">Send Testimonial</Link>
    </div>
  )
}

export default Testimonial