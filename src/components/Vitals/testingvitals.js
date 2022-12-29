import React, { useEffect, useState } from "react";

function RandomHRate() {
    let min = 60;
    let max = 100;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export default function RandomHR() {
    const [currentHR, updatedHR] = useState(RandomHRate());
    /* Reference 2 - taken from https://github.com/Rinlama/ReactTools/blob/clock/src/components/Clock.js */
    useEffect(() => {
      setInterval(() => {
        console.log("inrandomHR")
        const hr = new RandomHRate();
        updatedHR(hr);
      }, 5000);
    }, []);
    return (currentHR)}