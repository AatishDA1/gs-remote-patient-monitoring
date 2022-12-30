import React from "react";
import Layout from "../components/General/Layout";
import RandomRespRate, {
  RandomTemp,
  RandomSys,
  RandomDias,
  RandomHR } from "../components/Vitals/RandomVitalGen";
import { Line } from "react-chartjs-2";
import Navbar from "../components/General/NavBar";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function Patient2() {
  const respdata = {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Respiratory Rate",
        data: [13, 15, 12, 12, 14, 16, 13],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };
  const respoptions = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 11,
        max: 17,
      },
    },
  };
  const tempdata = {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Temperature",
        data: [36.7, 37, 37.3, 36.9, 37.1, 36.8, 36.6],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };
  const tempoptions = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 36.4,
        max: 37.6,
      },
    },
  };
  const bpsysdata = {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Blood Presure Systolic",
        data: [100, 90, 111, 109, 95, 115, 99],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };
  const bpsysoptions = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 89,
        max: 121,
      },
    },
  };
  const bpdiasdata = {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Blood Pressure Diastolic",
        data: [79, 75, 78, 70, 68, 65, 69],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };
  const bpdiasoptions = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 59,
        max: 81,
      },
    },
  };
  const hrdata = {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Heart Rate",
        data: [80, 85, 84, 90, 96, 92, 89],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };
  const hroptions = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 59,
        max: 101,
      },
    },
  };
  return (
    <Layout>
      <Navbar />
      <div className="kontainer">
        <div className="RespGraph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Respiratory Graph</li>
          <Line data={respdata} options={respoptions}></Line>
        </div>
        <div className="RespRate" >
          <li>Resp Rate:</li>
          <li><RandomRespRate /> bpm </li>
        </div>
        <div className="TempGraph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Temperature Graph</li>
          <Line data={tempdata} options={tempoptions}></Line>
        </div>
        <div className="Temp">
          <li>Temperature:</li>
          <li><RandomTemp /> °C</li>
        </div>
        <div className="BP_Sys_Graph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Blood Pressure Systolic Graph</li>
          <Line data={bpsysdata} options={bpsysoptions}></Line>
        </div>
        <div className="BP_Sys">
          <li>BP Systolic</li>
          <li><RandomSys /> mmHg</li>
        </div>
        <div className="BP_Dias_Graph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Blood Pressure Diastolic Graph</li>
          <Line data={bpdiasdata} options={bpdiasoptions}></Line>
        </div>
        <div className="BP_Dias">
          <li>BP Diastolic:</li>
          <li><RandomDias /> mmHg</li>
        </div>
        <div className="HRGraph">
          <li>Heart Rate Graph</li>
          <Line data={hrdata} options={hroptions}></Line>
        </div>
        <div className="HR">
          <li>Heart Rate:</li>
          <li>
            <RandomHR /> bpm
          </li>
        </div>
        <div className="ECG">ECG</div>
      </div>
    </Layout>
  );
}
