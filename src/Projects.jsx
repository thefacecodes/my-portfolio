import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import bookmark from "./assets/bookmark.png";
import blogr from "./assets/blogr.png";
import sunnyside from "./assets/sunnyside.png";
import easybank from "./assets/easybank.png";
import huddle from "./assets/huddle.png";
import manage from "./assets/manage.png";
import shortener from "./assets/shortener.png";
import movies from "./assets/movie.png";
import tracker from "./assets/tracker.png";
import recipe from "./assets/recipes.png";
import advise from "./assets/advise.png";
import todo from "./assets/todo.png";
import country from "./assets/countries.png";
import taskapp from "./assets/taskapp.png";
import downloader from "./assets/downloader.png";
import multipurpose from "./assets/multipurpose.png";
import trasave from "./assets/trasave.png";
import nft from "./assets/nft.png";
import softstore from "./assets/softstore.png";
import jstore from "./assets/jstore.png";
import portfolio from "./assets/portfolio.png";
import audiophille from "./assets/audiophille.png";
import coral from "./assets/coral.png";


import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "./style.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const styles = {
    height: "20em",
    // background: "red",
    // position: "static",
    color: "white",
    width: "100vw",
    margin: "2em 0",
  };

  const extend = {
    // width: "100%",
    height: "100%",
  };

  const each = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    // position: "static"
  };
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Compilations of projects I have built</p>

      <div className="html-css">
        <h2>HTML & CSS</h2>
        <div>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={sunnyside} alt="" />
            <div className="details">
              <h2>Sunnyside Landing Page</h2>
              <p>A Frontend Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/sunnyside">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://sunnysidetheface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={blogr} alt="" />
            <div className="details">
              <h2>Blogr Landing Page</h2>
              <p>A Front end Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/blogr">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefaceblogr.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={bookmark} alt="" />
            <div className="details">
              <h2>Bookmark Landing Page</h2>
              <p>A Front end Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/bookmark">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacebookmark.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={manage} alt="" />
            <div className="details">
              <h2>Manage Landing Page</h2>
              <p>A Front end Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/manage">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacemanage.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={huddle} alt="" />
            <div className="details">
              <h2>Huddle Landing Page</h2>
              <p>A Front end Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/huddle">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacehuddle.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={easybank} alt="" />
            <div className="details">
              <h2>Easy Bank Landing Page</h2>
              <p>A Front end Mentor Challenge</p>
              <a href="https://github.com/thefacecodes/easybank">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://easybanktheface.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="html-css">
        <h2>JavaScript & API</h2>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={shortener} alt="" />
            <div className="details">
              <h2>Shortly Link Shortener</h2>
              <p>A Front end Mentor API consumption Challenge</p>
              <a href="https://github.com/thefacecodes/shortener">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefaceshortener.pages.dev/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={movies} alt="" />
            <div className="details">
              <h2>The Face Movies</h2>
              <p>Built with The MovieDB API</p>
              <a href="https://github.com/thefacecodes/movies">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacemovies.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" style={each}>
            <img src={recipe} alt="" />
            <div className="details">
              <h2>The Face Recipe App</h2>
              <p>Built with Edamam Recipe API</p>
              <a href="https://github.com/thefacecodes/recipe">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacerecipe.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={country} alt="" />
            <div className="details">
              <h2>Where in the world?</h2>
              <p>A Front end Mentor API consumption Challenge</p>
              <a href="https://github.com/thefacecodes/countriesapi">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacecountriesapi.pages.dev/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={tracker} style={extend} alt="" />
            <div className="details">
              <h2>IP Address Tracker</h2>
              <p>
                A Front end Mentor API consumption Challenge built with GeoIP
                API and Open Streets Maps
              </p>
              <a href="https://github.com/thefacecodes/iptracker">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefaceiptracker.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={todo} style={extend} alt="" />
            <div className="details">
              <h2>To Do App</h2>
              <p>A Front end Mentor Javascript Challenge</p>
              <a href="https://github.com/thefacecodes/todoapp">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacetodoapp.pages.dev/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={advise} style={extend} alt="" />
            <div className="details">
              <h2>Advise Generator App</h2>
              <p>A Front end Mentor API consumption Challenge</p>
              <a href="https://github.com/thefacecodes/advice">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefaceadvice.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <div className="html-css">
        <h2>Tailwind CSS</h2>
        <div>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={nft} alt="" />
            <div className="details">
              <h2>NFTs Landing Page</h2>
              <p>An NFTs Marketplace replica</p>
              <a href="https://github.com/thefacecodes/nft">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://nfts-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={trasave} alt="" />
            <div className="details">
              <h2>Trasave Landing Page</h2>
              <p>A Travels Agency Landing Page</p>
              <a href="https://github.com/thefacecodes/trasave">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://trasave-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
      </div>
      <div className="html-css">
        <h2>React</h2>
        <div>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={multipurpose} style={extend} alt="" />
            <div className="details">
              <h2>The Face Multipurpose App</h2>
              <p>A multi-purpose React app</p>
              <a href="https://github.com/thefacecodes/multipurpose">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://multipurpose-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={taskapp} style={extend} alt="" />
            <div className="details">
              <h2>Task App</h2>
              <p>A task/to-do management app</p>
              <a href="https://github.com/thefacecodes/react-todoapp">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://theface-react-todo.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={portfolio} style={extend} alt="" />
            <div className="details">
              <h2>Portfolio</h2>
              <p>My Portfolio</p>
             
              <a href="https://thefacecodes.vercel.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
      </div>
      <div className="html-css">
        <h2>Vue</h2>
        <div>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={downloader} alt="" />
            <div className="details">
              <h2>Movies Library</h2>
              <p>An ads free movies downloader app.</p>
              <a href="https://github.com/thefacecodes/downloader">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://thefacemovies.web.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={softstore} alt="" />
            <div className="details">
              <h2>Soft Store</h2>
              <p>An E-commerce website</p>
              <a href="https://github.com/thefacecodes/softstore">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://softstore-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={jstore} alt="" />
            <div className="details">
              <h2>J Store</h2>
              <p>A full e-commerce website</p>
              <a href="https://github.com/thefacecodes/jstore">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://jstore-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={audiophille} style={extend} alt="" />
            <div className="details">
              <h2>Audiophille</h2>
              <p>A premium Frontend Mentor Challenge <br /><br /> In Progress</p>
              
              <a href="https://github.com/thefacecodes/audiophille">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://audiophille-theface.netlify.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
      </div>
      <div className="html-css">
        <h2>Nuxt JS</h2>
        <div>
        <Swiper
          style={styles}
          // className="swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop= {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" style={each}>
            <img src={coral} alt="" />
            <div className="details">
              <h2>Cora'l Store</h2>
              <p>An E-commerce store</p>
              <a href="https://github.com/thefacecodes/coral-store">
                <FontAwesomeIcon icon={faGithub} /> View Repo
              </a>
              <a href="https://coral-store.web.app/">
                <FontAwesomeIcon icon={faLink} /> Live site
              </a>
            </div>
          </SwiperSlide>        
        </Swiper>
      </div>
      </div>
    </div>
  );
}

export default Projects;
