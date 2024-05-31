import React, { useState } from "react";
// import Image from ""
import {motion, AnimatePresence} from "framer-motion";

const Card = ({image}) => {
    const [showLay, setShowLay] = useState(false)

    return (
        <motion.div 
            className="relative overflow-hidden h-[270px] w-80  rounded-xl flex justify-center items-center"
            onHoverStart={()=> setShowLay(true)}
            onHoverEnd={()=> setShowLay(false)}
        >
            <AnimatePresence>
            <img src={image} alt={image} fill style={{objectFit : "cover"}} className=" h-full"/>

                {showLay && (
                    <motion.div 
                        className="absolute inset-0 z-10 flex justify-center items-center"
                        initial={{opacity:0}}
                        animate ={{opacity : 1}}
                        exit={{opacity:0}}

                    >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
                        <motion.div 
                            className="bg-white font-semibold text-sm  z-10 px-3 py-2 rounded-full  flex items-center gap-[0.5ch] hover:opacity-75"
                            initial={{y:10}}
                            animate={{y:0}}
                            exit={{y:10}}
                        >
                            <button className="button">explore</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Card;