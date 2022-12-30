import React, { Component, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Layout from "../components/General/Layout";
import "chartjs-adapter-luxon";
import Chart from "chart.js/auto";
import StreamingPlugin from "chartjs-plugin-streaming";
import RandomRespRate,  { RandomTemp, RandomSys, RandomDias, RandomHR } from "../components/Vitals/RandomVitalGen";
import Navbar from "../components/General/NavBar";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";

ChartJS.register( LineElement, CategoryScale, LinearScale, PointElement, Tooltip);
Chart.register(StreamingPlugin);

export default function Patient1() {
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
    responsive:true,
    maintainAspectRatio:false,
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
    responsive:true,
    maintainAspectRatio:false,
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
    responsive:true,
    maintainAspectRatio:false,
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
    responsive:true,
    maintainAspectRatio:false,
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
    responsive:true,
    maintainAspectRatio:false,
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
  
  function u(){
    let a = 90
    return a
  }
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
        <div className="HRGraph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Heart Rate Graph</li>
          <Line
            data={{
              datasets: [
                {
                  label: "Heart Rate",
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  fill: false,
                  data: [],
                },
              ],
            }}
            options={{
              responsive:true,
              maintainAspectRatio:false,
              scales: {
                y:{min: 59,
                max: 101,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 2000, // how much earlier the code finds the next value
                    refresh:5000, // how often the chart plots a point
                    duration: 18000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: u(),
                        });
                      });
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className="HR">
          <li>Heart Rate:</li>
          <li><RandomHR/> bpm</li>
        </div>
        <div className="ECG">
          <li>ECG</li>
        </div>
      </div>
    </Layout>
    
  );
}

