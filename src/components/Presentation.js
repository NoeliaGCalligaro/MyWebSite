
import React, { useEffect, useState } from "react";
import "./Presentation.css";
import { motion } from "framer-motion";
import mifoto from "../images/mifoto.jpg";
import Button from "./Button";

export default function Presentation() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="container-img">
        <img src={mifoto} alt="Mi foto" />
      </div>

      <p key={animationKey} className="title-presentation">
        <motion.h1
          initial={{ y: 200 }}
          animate={{ y: 50 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Noelia Calligaro
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          Front-end Developer
        </motion.h2>
       
        <Button route="./AboutMe" className="button-next"/> 
      </p>

      
     
    </div>
  );
}
