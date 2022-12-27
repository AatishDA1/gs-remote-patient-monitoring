import React from 'react';
import RandomRespRate from '../General/RandomVitalGen';
import { RandomTemp, RandomSys, RandomDias, RandomHR } from '../General/RandomVitalGen';
// https://www.youtube.com/watch?v=sA_glquejwE // reference for grid

export default function Patient1(){
  return(
    <div className='kontainer'>
      <div className='RespGraph'>RespGraph</div>
      <div className='RespRate'> 
        <li>Resp Rate:</li>
        <li><RandomRespRate/> bpm</li>
      </div>
      <div className='TempGraph'>TempGraph</div>
      <div className='Temp'>
        <li>Temperature:</li>
        <li><RandomTemp/> °C</li>
      </div>
      <div className='BP_Sys_Graph'>BP_Sys_Graph</div>
      <div className='BP_Sys'>
        <li>BP Systolic</li>
        <li><RandomSys/> mmHg</li>
      </div>
      <div className='BP_Dias_Graph'>BP_Dias_Graph</div>
      <div className='BP_Dias'>
        <li>BP Diastolic:</li>
        <li><RandomDias/> mmHg</li>
      </div>
      <div className='HRGraph'>HRGraph</div>
      <div className='HR'>
        <li>Heart Rate:</li>
        <li><RandomHR/> bpm</li>
      </div>
      <div className='ECG'>ECG</div>
    </div>
  )
}

