import React, { useContext } from "react";
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeContext } from "../../Context";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
  
    <div className="feat  pt-5 pb-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="section-head w-full sm:w-full mb-6">
            <h4 className="text-2xl font-bold mb-2"><span className="text-indigo-500" style={{ color: darkMode ? "white" : "" }}>Why Choose</span> Us?</h4>
            <p className="text-gray-200" style={{ color: darkMode ? "#e2e8f0" : "" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br/>standard dummy text ever since the 1500s, when an unknown book.</p>
          </div>
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2 ">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-indigo-500 mb-4 inline-block"> <FontAwesomeIcon icon="globe" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2 "  >Modern Design</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-green-500 mb-4 inline-block"> <FontAwesomeIcon icon="anchor" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2">Creative Design</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-yellow-500 mb-4 inline-block"><FontAwesomeIcon icon="hourglass-half" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2">Easy & Fast</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-red-500 mb-4 inline-block"><FontAwesomeIcon icon="database" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2">Business Growth</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-blue-500 mb-4 inline-block">        <FontAwesomeIcon icon="upload" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2">Market Strategy</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div> 
          <div className="w-full lg:w-1/3 sm:w-1/2 mb-6 px-2">
            <div className="item bg-white p-6 rounded-lg shadow-md"  style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
              <span className="icon text-purple-500 mb-4 inline-block">  <FontAwesomeIcon icon="camera" size="2x" /></span>
              <h6 className="text-lg font-semibold mb-2">Retina Ready</h6>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Services;
