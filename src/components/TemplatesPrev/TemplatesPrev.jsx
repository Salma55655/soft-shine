import React, { useContext, useState, useEffect } from "react";
import "./TemplatesPrev.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import Card from "./card"
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import temp1 from "../../img/temp1.jpg"
import temp2 from "../../img/temp2.jpg"
import temp3 from "../../img/temp3.jpg"
import temp4 from "../../img/tem4.jpg"
import temp5 from "../../img/temp5.png"


const TemplatesPrev = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const images =[
    Sidebar,
    MusicApp,
    Ecommerce,
    Sidebar,
    MusicApp,
    Ecommerce,
    Sidebar,
    MusicApp,
  ]
  const templates=[
    temp1,
    temp2,
    temp3,
    temp4,
    temp5,

  ]

  const FAST_DURATION = 35;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);


  return (
    <div className="templatesprev" id="templatesprev">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}} className="header1">Choose a Portfolio</span>
      <span  className="header2">Template</span>
      {/* Moving Templates */}
      <motion.div 
          className="absolute left-0 flex gap-1 logos"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
           {/* will get back to it */}
          {[...images,...images,...images,...images,].map((item, idx)=> (
            <Card image={item} key={idx} />
          ))}
      </motion.div>
      {/* Card Templates Preview */}
      <div  className="flex gap-1 flex-wrap">
          {templates.map((temp,idx)=>(
               <div className="cardp" style={{ backgroundColor: darkMode ? "#1e293b" : "white" }} key={idx}>
                  <div className="card-image-container rounded-xl">             
                    <img src={temp} alt="temp1" className="h-full temp-img"/> 
                  </div>
        
                  <button>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
                          <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                          <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
                      </svg>
                  </button>
                  

             </div>
          ))
          }
        <button className="cta mr-0 " >
                    <span style={{color: darkMode?'white': ''}}>View More</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>

      </div>
    </div>
  );
};

export default TemplatesPrev;
