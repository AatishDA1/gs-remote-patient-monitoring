import React from 'react';
import '../Styles/Popup.css'
import { GlobalStyle } from "../Styles/GlobalStyles";
import RandomRespRateWwarn ,{
   RandomTempWwarn,
   RandomSysWwarn,
   RandomDiasWwarn,
   RandomHRWwarn
 } from '../Simulation/SimWarnExtract'
 import AlertTime from './AlertTime';

function Popup(props) {
    return (props.trigger) ? (
     <> 
        <GlobalStyle />
        <div className='popup'>
         <div className='popup-inner-warning'>
            <h1> Simulated Patient Warning at Time: <AlertTime/> </h1>
            <h2> Respiratory Rate: <RandomRespRateWwarn/> bpm</h2>
            <h2> Temperature : <RandomTempWwarn /> °C</h2>
            <h2> Systolic BP : <RandomSysWwarn/> mmHg</h2>
            <h2> Diastolic BP : < RandomDiasWwarn/> mmHg</h2>
            <h2> Heart Rate : <RandomHRWwarn /> bpm</h2>
            <button className='close-btn' onClick = {() => props.setTrigger(false)}> Dismiss  </button>
            {props.children}

         </div>

        </div>   
    </> 
  ) : "";
}

export default Popup;