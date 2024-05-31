import React, {useContext} from "react";
import { themeContext } from "../Context.js";
import Navbar from "../components/Navbar/Navbar";
import PricingCard from "../components/pricingCard.jsx";
import Footer from "../components/Footer/Footer";
import back from "../img/background.jpg"
import bgp from "../img/bgp.jpg"

const pricingData = [
    {
      title: 'Hobby',
      price: 'FREE',
      description: 'Fill a Template with your Data',
      features: ['No setup', 'No setups', 'Speed'],
      buttonText: 'Select',
      mostPopular: false,
    },
    {
      title: 'Expert',
      price: '$19 /mo',
      description: 'Add your own Code 😉',
      features: ['No setup', 'Hidden fees', 'Original'],
      buttonText: 'Select',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$39 /mo',
      description: 'Much More excessiblity, and a unique Domain name',
      features: ['Electric', 'Monthly', 'No setup'],
      buttonText: 'Select',
      mostPopular: false,
    },
  ];

  
const Pricing = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div 
    style={{
        background: darkMode ? "#0f172a" : "",
        color: darkMode ? "white" : "",
        // backgroundImage: `url(${back})`,
        // backgroundSize: 'cover', // This will ensure that your image covers the whole area
        // backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
        // height: '100vh', // Set the height of the div to be full viewport height
        // width: '100vw' // Set the width of the div to be full viewport width
    }}
    className="ml-0">
        <Navbar />

        <section>
            <div className="container max-w-full mx-auto pt-[75px] pb-40 px-6">
                <h1 className="text-center text-4xl font-bold leading-snug tracking-wider text-fuchsia-800">Pricing</h1>
                <p className="text-center text-lg text-gray-700 mt-2 px-6" style={{ color: darkMode ? "#e2e8f0" : "" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu
                </p>
                <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
                <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                    <div className="relative flex flex-col md:flex-row items-center">
                        {pricingData.map((card, index) => (
                        <PricingCard
                            key={index}
                            title={card.title}
                            price={card.price}
                            description={card.description}
                            features={card.features}
                            buttonText={card.buttonText}
                            mostPopular={card.mostPopular}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* <Footer /> */}


   </div>
  );
};

export default Pricing;
