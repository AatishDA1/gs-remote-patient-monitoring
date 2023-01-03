import React from "react";
import Layout from "../components/General/Layout";
import RandomRespRate, {
  RandomTemp,
  RandomSys,
  RandomDias,
  RandomHR,
} from "../components/Vitals/RandomVitalGen";
import RespGraph, {
  DiasGraph,
  HeartRateGraph,
  SysGraph,
  TempGraph,
} from "../components/Vitals/RandomVitalGraphs";
import Navbar from "../components/Vitals/NavBar";

export default function Patient3() {
  return (
    <Layout>
      <Navbar />
      <h2>Patient 3</h2>
      <div className="kontainer">
        <RespGraph />
        <div className="RespRate">
          <li>Resp Rate:</li>
          <li>
            <RandomRespRate /> bpm{" "}
          </li>
        </div>
        <TempGraph />
        <div className="Temp">
          <li>Temperature:</li>
          <li>
            <RandomTemp /> °C
          </li>
        </div>
        <SysGraph />
        <div className="BP_Sys">
          <li>BP Systolic</li>
          <li>
            <RandomSys /> mmHg
          </li>
        </div>
        <DiasGraph />
        <div className="BP_Dias">
          <li>BP Diastolic:</li>
          <li>
            <RandomDias /> mmHg
          </li>
        </div>
        <HeartRateGraph />
        <div className="HR">
          <li>Heart Rate:</li>
          <li>
            <RandomHR /> bpm
          </li>
        </div>
        <div className="ECG">
          <li>ECG</li>
        </div>
      </div>
    </Layout>
  );
}

