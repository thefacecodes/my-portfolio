import React from 'react'
import resume from "./assets/myResume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';


function Resume() {
  return (
    <div className="resume">
        <h1>Resume</h1>
        <p>A sneak peek into my educational background, professional career and experiences so far.</p>
        <div className="viewNdownload">
          <a href={resume}><FontAwesomeIcon icon={faEye} /> View</a>
          <a href={resume} download><FontAwesomeIcon icon={faDownload} /> Download</a>
        </div>
    </div>
  )
}

export default Resume