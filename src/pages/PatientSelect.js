import React from "react";
import Navbar from "../components/General/NavBar"
import Patient1 from "./Patient1";
import Patient2 from "./Patient2"
import Patient3 from "./Patient3"
import Patient4 from "./Patient4"
import Patient5 from "./Patient5"
import '../components/Styles/NavBarStyle.css'
import RandomRespRate from '../components/General/RandomVitalGen';
import { RandomTemp, RandomSys, RandomDias, RandomHR } from '../components/General/RandomVitalGen';
import HPHeader from "../components/HomePages/HPHeader";
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip} from 'chart.js'
  
  ChartJS.register(
      LineElement,
      CategoryScale,
      LinearScale,
      PointElement,
      Tooltip
  )

export default function PatientSelect() {
    const respdata = {
        labels: ['0','5','10','15','20','25','30'],
        datasets: [{
            label:"Respiratory Rate",
            data: [13, 15, 12, 12, 14, 16, 13],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
        }]
    }
    const respoptions = {
      plugins:{
          legend:true
      },
      scales:{
          y:{
              min:11,
              max:17
          }
      }
  }
    const tempdata = {
      labels: ['0','5','10','15','20','25','30'],
      datasets: [{
          label:"Temperature",
          data: [36.7, 37, 37.3, 36.9, 37.1, 36.8, 36.6],
          backgroundColor: 'aqua',
          borderColor: 'black',
          pointBorderColor: 'aqua',
      }]
  }
  const tempoptions = {
    plugins:{
        legend:true
    },
    scales:{
        y:{
            min:36.4,
            max:37.6
        }
    }
}
  const bpsysdata = {
    labels: ['0','5','10','15','20','25','30'],
    datasets: [{
        label:"Blood Presure Systolic",
        data: [100, 90, 111, 109, 95, 115, 99],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
    }]
  }
  const bpsysoptions = {
  plugins:{
      legend:true
  },
  scales:{
      y:{
          min:89,
          max:121
      }
  }
  }
  const bpdiasdata = {
    labels: ['0','5','10','15','20','25','30'],
    datasets: [{
        label:"Blood Pressure Diastolic",
        data: [79, 75, 78, 70, 68, 65, 69],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
    }]
  }
  const bpdiasoptions = {
  plugins:{
      legend:true
  },
  scales:{
      y:{
          min:59,
          max:81
      }
  }
  }
  const hrdata = {
    labels: ['0','5','10','15','20','25','30'],
    datasets: [{
        label:"Heart Rate",
        data: [80, 85, 84, 90, 96, 92, 89],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
    }]
  }
  const hroptions = {
  plugins:{
      legend:true
  },
  scales:{
      y:{
          min:59,
          max:101
      }
  }
  }
    let component
    switch(window.location.pathname){
        case "/PatientSelect":
            break
            case "/Patient1":
                component = <Patient1/>
                break
            case "/Patient2":
                component = <Patient2/>
                break  
            case "/Patient3":
                component = <Patient3/>
                break
            case "/Patient4":
                component = <Patient4/>
                break
            case "/Patient5":
                component = <Patient5/>
                break
    }
    return(
        <>
        <HPHeader/>
        <Navbar/>
        <div className='kontainer'>
          <div className='RespGraph' >
            <li>Respiratory Graph</li>
            <Line 
            data = {respdata}
            options = {respoptions}>
            </Line>   
          </div>
          <div className='RespRate'> 
            <li>Resp Rate:</li>
            <li><RandomRespRate/> bpm</li>
          </div>
          <div className='TempGraph' >
          <li>Temperature Graph</li>
            <Line 
            data = {tempdata}
            options = {tempoptions}>
            </Line>   
          </div>
          <div className='Temp'>
            <li>Temperature:</li>
            <li><RandomTemp/> °C</li>
          </div>
          <div className='BP_Sys_Graph'>
          <li>Blood Pressure Systolic Graph</li>
            <Line 
            data = {bpsysdata}
            options = {bpsysoptions}>
            </Line> 
          </div>
          <div className='BP_Sys'>
            <li>BP Systolic</li>
            <li><RandomSys/> mmHg</li>
          </div>
          <div className='BP_Dias_Graph'>
          <li>Blood Pressure Diastolic Graph</li>
            <Line 
            data = {bpdiasdata}
            options = {bpdiasoptions}>
            </Line> 
          </div>
          <div className='BP_Dias'>
            <li>BP Diastolic:</li>
            <li><RandomDias/> mmHg</li>
          </div>
          <div className='HRGraph'>
          <li>Heart Rate Graph</li>
            <Line 
            data = {hrdata}
            options = {hroptions}>
            </Line>  
          </div>
          <div className='HR'>
            <li>Heart Rate:</li>
            <li><RandomHR/> bpm</li>
          </div>
          <div className='ECG'>ECG</div>
        </div>
        </>
      )
}
