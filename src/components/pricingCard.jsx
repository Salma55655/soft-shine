import React, {useContext} from "react";
import { themeContext } from "../Context.js";

const PricingCard = ({ title, price, description, features, buttonText, mostPopular }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className={`w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg bg-white ${mostPopular ? 'relative z-10' : 'md:-mr-4'}`} style={{ backgroundColor: darkMode ? "#1e1b4b" : "" }}>
    {mostPopular && <div className= {`text-sm leading-none rounded-t-lg  ${darkMode ?'bg-gray-500 ':' bg-gray-200 '}  font-semibold uppercase py-4 text-center tracking-wide`}> Most Popular</div>}

      <div className={`bg-white  ${mostPopular ?'rounded-b-lg':'rounded-lg' } shadow-inner overflow-hidden`} style={{ backgroundColor: darkMode ? "#1e293b" : "" }}>
        <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2  px-8 lg:px-6">
          <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">{title}</h1>
          <h2 className= {`text-sm text-center pb-6 `} style={{color:darkMode? "#d1d5db": "#6b7280" }}>{price}</h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap mt-3 px-6">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="rounded-full p-2 fill-current text-green-700">
                  <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className={` text-lg ml-3 ${darkMode ?'text-gray-300 ':'text-gray-700 '}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center p-8 uppercase">
          <button className= {`mt-3 text-lg font-semibol  rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700  ${darkMode ?'text-black w-full bg-slate-400':'bg-black w-full text-white' }`}>
            {buttonText}
          </button>
          

        </div>
      </div>
    </div>
  );
};

export default PricingCard;
