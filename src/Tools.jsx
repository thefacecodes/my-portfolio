import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Tools() {
  library.add(fab);
  return (
    <div className="tools">
      <h1>Tools</h1>
      <p>Technologies and languages I use</p>
      <div className="toolsIuse">
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "html5"]} />&nbsp;
            HTML
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "css3"]} />&nbsp;
            CSS
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon
              className="contactIcon"
              icon={["fab", "js"]}
            />&nbsp;
            JavaScript
          </button>
        </div>
        <div className="eachtool">
            <button>Tailwind CSS</button>
          </div>
          <div className="eachtool">
            <button>Firebase</button>
          </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "vuejs"]} />&nbsp;
            Vue JS
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "react"]} />&nbsp;
            React JS
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "ts"]} />&nbsp;
            TypeScript
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon className="contactIcon" icon={["fab", "nuxt"]} />&nbsp;
            Nuxt JS
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon
              className="contactIcon"
              icon={["fab", "bootstrap"]}
            />&nbsp;
            Bootstrap
          </button>
        </div>
        <div className="eachtool">
          <button>
            <FontAwesomeIcon
              className="contactIcon"
              icon={["fab", "wordpress"]}
            />&nbsp;
            WordPress
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tools;
