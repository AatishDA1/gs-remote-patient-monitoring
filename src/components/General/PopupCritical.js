import React  from 'react'
import '../Styles/Popup.css'
import { GlobalStyle } from "../Styles/GlobalStyles";
import RandomRespRateCcrit, {
    RandomTempCcrit,
    RandomSysCcrit,
    RandomDiasCcrit,
    RandomHRCcrit
  } from "../Simulation/SimCritExtract";
import AlertTime from './AlertTime';


function PopupCritical(props) {
  var itemscrit = [{
    WarningType  : 'Critical',
    Name : 'Simulation',
    Time : <AlertTime/>,
    RespRate : <RandomRespRateCcrit/>,
    Temp : <RandomTempCcrit />,
    SysBP  : <RandomSysCcrit/>,
    DiasBP : <RandomDiasCcrit/>,
    HeartRate : <RandomHRCcrit />
  }]
    return (props.trigger) ? (
        <> 
           <GlobalStyle />
           <div className='popup'>
            <div className='popup-inner-critical'>
                <h1> Simulated Patient Warning at Time: {itemscrit.Name} </h1>
                <h2> Respiratory Rate: bpm</h2>
                <h2> Temperature :  °C</h2>
                <h2> Systolic BP :   mmHg</h2>
                <h2> Diastolic BP :  mmHg</h2>
                <h2> Heart Rate : </h2>
               <button className='close-btn' onClick = {() => props.setTrigger(false)}> Dismiss  </button>
               {props.children}
            </div>
               
           </div>   
       </> 
      ) : "";
    }
export default PopupCritical 