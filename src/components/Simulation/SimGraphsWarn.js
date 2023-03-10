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
import { respRW, tempRW, sysRW, diasRW, heartRW } from "./SimDataWarn";
import { getECGvalue } from "./ECG";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);
Chart.register(StreamingPlugin);

export function ECGGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: getECGvalue(),
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

export default function RespGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: respRW,
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

export function TensecRespGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: respRW,
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

export function TenminRespGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: respRW,
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

export function TempGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: tempRW,
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

export function TensecTempGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: tempRW,
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
export function TenminTempGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: tempRW,
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
export function SysGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: sysRW,
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
export function TensecSysGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: sysRW,
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
export function TenminSysGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: sysRW,
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

export function DiasGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 60000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRW,
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
export function TensecDiasGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 10000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRW,
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
export function TenminDiasGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: diasRW,
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

export function HeartRateGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: heartRW,
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
export function TensecHeartRateGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                      y: heartRW,
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

export function TenminHeartRateGraphWarn() {
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
              backgroundColor: "rgba(255, 191, 0, 0.5)",
              borderColor: "rgb(255, 191, 0)",
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
                duration: 600000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: heartRW,
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