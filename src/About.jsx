import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <h1>About Me</h1>
          <p>My name is Ezekiel, but friends call me 'The Face', I'm a Frontend Developer from Nigeria, West Africa</p>
       <p>I always look for opportunities to advance my skills both academically and in the workforce through professional experiences
          such as internships, research projects and job opportunities.
        </p>
        <p>
          To date, I posssess little work experience but I strive to contribute positively to any place I find myself.
        </p>
        <p>One of my objectives is to secure a position in a dynamic organisation where I can use my skills and knowledge to develop my career as well as help the company grow.

        </p>
       <p>I love and welcome creative challenges</p>
        <p>I love networking, and welcome any opportunity to connect, learn and grow</p>
        <Link to="/testimonial">View Testimonials</Link>
    </div>
  )
}

export default About