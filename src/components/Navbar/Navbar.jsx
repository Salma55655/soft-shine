/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar= () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (

    <div>
      <header className="header">
        <div>
          <a href="/" className="logo">Logo</a>
          <a className="ml-4"><Toggle /></a>
        </div>
        

        <FontAwesomeIcon 
          icon={menuActive ? "times" : "bars"} 
          size="2x"
          id="menu-icon"
          onClick={toggleMenu} 
        />

        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/">Templates</a>
            <a href="/pricing">Pricing</a>
            <a href="/">DashBoard</a>
        </nav>
        
        <button class="cursor-pointer transition-all bg-[#86198f] text-white px-4 py-1 rounded-lg
        border-[#701a75]
        border-b-[3px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[1px] active:brightness-90 active:translate-y-[2px]">
          Sign In
        </button>
    </header>
    <div className={`nav-bg ${menuActive ? 'active' : ''}`}></div>
    </div>
  );
};

export default Navbar;
