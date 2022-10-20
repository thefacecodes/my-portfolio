import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "font-awesome/css/font-awesome.min.css";
import '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

function Tools() {
  library.add(fab);
  return (
    <div className='tools'>
        <h1>Tools</h1>
        <p>Technologies and languages I use</p>
        <div className="toolsIuse">
          <div className="eachtool">
            <FontAwesomeIcon className='contactIcon' icon={["fab", "html5"]} />
            <div className='bar'>
              <div className="progress"></div>
            </div>
            <p>95%</p>
          </div>
          <div className="eachtool">
           <FontAwesomeIcon className='contactIcon' icon={["fab", "css3"]} />
            <div className='bar'>
              <div className="progress css"></div>
            </div>
            <p>75%</p>
          </div>
          <div className="eachtool">
           <FontAwesomeIcon className='contactIcon' icon={["fab", "js"]} />
            <div className='bar'>
              <div className="progress js"></div>
            </div>
            <p>60%</p>
          </div>
          <div className="eachtool">
             <FontAwesomeIcon className='contactIcon' icon={["fab", "vuejs"]} />
            <div className='bar'>
              <div className="progress vue"></div>
            </div>
            <p>60%</p>
          </div>
          <div className="eachtool">
            <FontAwesomeIcon className='contactIcon' icon={["fab", "react"]} />
            <div className='bar'>
              <div className="progress react"></div>
            </div>
            <p>65%</p>
          </div>
          <div className="eachtool">
           <FontAwesomeIcon className='contactIcon' icon={["fab", "bootstrap"]} />
            <div className='bar'>
              <div className="progress tailwind"></div>
            </div>
            <p>85%</p>
          </div>
          <div className="eachtool">
           <FontAwesomeIcon className='contactIcon' icon={["fab", "wordpress"]} />
            <div className='bar'>
              <div className="progress wordpress"></div>
            </div>
            <p>90%</p>
          </div>
       
       
        
        </div>
      
    </div>
  )
}

export default Tools