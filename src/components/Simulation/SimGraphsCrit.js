import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import Chart from "chart.js/auto";
import React from "react";
import { respRC, tempRC, sysRC, diasRC, heartRC } from "./SimDataCrit";
import { getECGvalue } from "./ECG";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);
Chart.register(StreamingPlugin);

export function ECGGraphCrit() {
  return (
    <div
      className="ECGGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "97vw",
        padding: "1rem",
      }}
    >
      <li>ECG</li>
      <Line
        data={{
          datasets: [
            {
              label: "ECG",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
              pointRadius:0,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: -1600, max: 1000 },
            x: {
              type: "realtime",
              realtime: {
                delay: 0, // how much earlier the code finds the next value
                refresh: 0.0001, // how often the chart plots a point
                duration: 100000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: 0,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default function RespGraphCrit() {
  return (
    <div
      className="RespGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Respiratory Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Respiratory Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 30 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: respRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TensecRespGraphCrit() {
  return (
    <div
      className="RespGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Respiratory Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Respiratory Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 30 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 1000, // how often the chart plots a point
                duration: 10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: respRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TenminRespGraphCrit() {
  return (
    <div
      className="RespGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Respiratory Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Respiratory Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 30 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: respRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
console.log(respRC);
export function TempGraphCrit() {
  return (
    <div
      className="TempGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Temperature Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Temperature",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 30, max: 45 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: tempRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TensecTempGraphCrit() {
  return (
    <div
      className="TempGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Temperature Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Temperature",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 30, max: 45 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 1000, // how often the chart plots a point
                duration: 10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: tempRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TenminTempGraphCrit() {
  return (
    <div
      className="TempGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Temperature Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Temperature",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 30, max: 45 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: tempRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export function SysGraphCrit() {
  return (
    <div
      className="BP_Sys_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Systolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Systolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 70, max: 170 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: sysRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TensecSysGraphCrit() {
  return (
    <div
      className="BP_Sys_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Systolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Systolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 70, max: 170 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 1000, // how often the chart plots a point
                duration: 10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: sysRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TenminSysGraphCrit() {
  return (
    <div
      className="BP_Sys_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Systolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Systolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 70, max: 170 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: sysRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export function DiasGraphCrit() {
  return (
    <div
      className="BP_Dias_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Diastolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Diastolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 50, max: 110 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration:60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TensecDiasGraphCrit() {
  return (
    <div
      className="BP_Dias_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Diastolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Diastolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 50, max: 110 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 1000, // how often the chart plots a point
                duration:10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TenminDiasGraphCrit() {
  return (
    <div
      className="BP_Dias_Graph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Blood Pressure Diastolic Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Blood Pressure Diastolic",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 50, max: 110 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export function HeartRateGraphCrit() {
  return (
    <div
      className="HRGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Heart Rate Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Heart Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 200 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration:60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: heartRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TensecHeartRateGraphCrit() {
  return (
    <div
      className="HRGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Heart Rate Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Heart Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 200 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 1000, // how often the chart plots a point
                duration: 10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: heartRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
export function TenminHeartRateGraphCrit() {
  return (
    <div
      className="HRGraph"
      style={{
        position: "relative",
        height: "40vh",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <li>Heart Rate Graph</li>
      <Line
        data={{
          datasets: [
            {
              label: "Heart Rate",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "rgb(255, 0, 0)",
              fill: false,
              data: [],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 200 },
            x: {
              type: "realtime",
              realtime: {
                delay: 1000, // how much earlier the code finds the next value
                refresh: 5000, // how often the chart plots a point
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: heartRC,
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
