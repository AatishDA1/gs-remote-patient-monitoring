import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import Chart from "chart.js/auto";
import React from "react";
import { respR, tempR, sysR, diasR,heartR, } from "./RandomVitalGen";
import { ECGy } from "./ECG";
import { getyvalue } from "./ECG";
ChartJS.register( LineElement, CategoryScale, LinearScale, PointElement, Tooltip);
Chart.register(StreamingPlugin); 

export default function RespGraph(){
    return(
        <div className="RespGraph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Respiratory Graph</li>
          <Line
            data={{
              datasets: [
                {
                  label: "Respiratory Rate",
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
                y:{min: 0,
                max: 30,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 1000, // how much earlier the code finds the next value
                    refresh:1000, // how often the chart plots a point
                    // duration: 18000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: respR,
                        });
                      });
                    },
                  },
                },
              },
            }}
            />
        </div>
    )
}

export function ECG(){
  return(
      <div className="ECG" style={{position: "relative" ,height:"40vh", width: "97vw" }}>
        {/* <li>ECG Graph</li> */}
        <Line
          data={{
            datasets: [
              {
                pointRadius: 0,
                label: "ECG",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
                // borderWidth:0,
                // pointBorderWidth:0,
                // pointBackgroundColor:"rgb(54, 162, 235)",
                showLine:true,
                fill: false,
                data: [],
              },
            ],
          }}
          options={{
            
            responsive:true,
            maintainAspectRatio:false,
            scales: {
              y:{min: -1600,
              max: 1000,},
              x: {
                type: "realtime",
                realtime: {
                  delay: 0, // how much earlier the code finds the next value
                  refresh:0.001, // how often the chart plots a point
                  duration: 100000, // time axis and the amount of time the code takes to generate the first value
                  onRefresh: (chart) => {
                    chart.data.datasets.forEach((dataset) => {
                      dataset.data.push({
                        x: Date.now(),
                        y: getyvalue(),
                      });
                    });
                  },
                },
              },
            },
          }}
          />
      </div>
  )
}

export function TempGraph(){
    return(
        <div className="TempGraph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Temperature Graph</li>
          <Line
            data={{
              datasets: [
                {
                  label: "Temperature",
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
                y:{min: 30,
                max: 45,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 1000, // how much earlier the code finds the next value
                    refresh:1000, // how often the chart plots a point
                    // duration: 1800000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: tempR,
                        });
                      });
                    },
                  },
                },
              },
            }}
            />
        </div>
    )
}

export function SysGraph(){
    return(
        <div className="BP_Sys_Graph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Blood Pressure Systolic Graph</li>
          <Line
            data={{
              datasets: [
                {
                  label: "Blood Pressure Systolic",
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
                y:{min: 70,
                max: 170,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 1000, // how much earlier the code finds the next value
                    refresh:1000, // how often the chart plots a point
                    // duration: 1800000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: sysR,
                        });
                      });
                    },
                  },
                },
              },
            }}
            />
        </div>
    )
}

export function DiasGraph(){
    return(
        <div className="BP_Dias_Graph" style={{position: "relative" ,height:"40vh", width: "80vw" }}>
          <li>Blood Pressure Diastolic Graph</li>
          <Line
            data={{
              datasets: [
                {
                  label: "Blood Pressure Diastolic",
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
                y:{min: 50,
                max: 110,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 1000, // how much earlier the code finds the next value
                    refresh:1000, // how often the chart plots a point
                    // duration: 1800000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: diasR,
                        });
                      });
                    },
                  },
                },
              },
            }}
            />
        </div>
    )
}

export function HeartRateGraph(){
    return(
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
                y:{min: 0,
                max: 200,},
                x: {
                  type: "realtime",
                  realtime: {
                    delay: 1000, // how much earlier the code finds the next value
                    refresh:1000, // how often the chart plots a point
                    // duration: 1800000, // time axis and the amount of time the code takes to generate the first value
                    onRefresh: (chart) => {
                      chart.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                          x: Date.now(),
                          y: heartR,
                        });
                      });
                    },
                  },
                },
              },
            }}
          />
        </div>
    )
}