import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Facts.css";

const Facts = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="fact" id='fact'>
      <div className="feature">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>50+</div>
        <span  style={{color: darkMode?'white':''}}>Customizable</span>
        <span>Templates</span>
      </div>
      <div className="feature">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>Experienced</span>
        <span>Team</span>
      </div>
      <div className="feature">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>Certified </span>
        <span>Security</span>
      </div>
    </div>
  );
};

export default Facts;
 