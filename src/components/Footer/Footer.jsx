import React, {useContext} from "react";
import "./Footer.css";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import { themeContext } from "../../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   
    <footer className="footer"  style={{backgroundColor: darkMode? '#1e1b4b': '#4a044e'}}>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="/">about us</a></li>
              <li><a href="/">our services</a></li>
              <li><a href="/">privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Templates</a></li>
              <li><a href="/">Your Templates</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            </div>
          </div>
        </div>
      </div>
   </footer>
  );
};

export default Footer;
