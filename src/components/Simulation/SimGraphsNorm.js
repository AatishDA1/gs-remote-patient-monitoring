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
import React, { useEffect, useState } from "react";
import { respR, tempR, sysR, diasR, heartR } from "./SimDataNorm";
import { getECGvalue } from "./ECG";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);
Chart.register(StreamingPlugin);

export function ECGGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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

export default function RespGraph() {
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
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
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
                  duration: 60000, // 1 min
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
    );
  } 

export function TensecRespGraph() {

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
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
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
                  duration: 10000, // 10 sec
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
    );
  }

export function TenminRespGraph(){
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
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
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
                  duration: 600000, // 10 mins
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
    );
  }

export function TempGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TensecTempGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}
export function TenminTempGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function SysGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TensecSysGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TenminSysGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function DiasGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TensecDiasGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TenminDiasGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
                duration:600000,
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
  );
}
export function HeartRateGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
                duration: 60000,
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
  );
}
export function TensecHeartRateGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}

export function TenminHeartRateGraph() {
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
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgb(54, 162, 235)",
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
  );
}
