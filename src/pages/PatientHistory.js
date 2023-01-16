import React, { useState, useEffect } from "react";
import Layout from "../components/General/Layout";
import RespGraph, {
  DiasGraph,
  HeartRateGraph,
  SysGraph,
  TempGraph,
} from "../components/Vitals/RandomVitalGraphDud";
import "../components/Styles/selectpats.css"
import { name } from "../components/PatArchive/PAConnect";
import NoHistory from "../components/PatArchive/NoHistory";


export default function PatientHistory() {
  const [noSignalPopup, setNoSignalPopup] = useState(true);

  return (
    <Layout>
      {/* <Navbar /> */}
      <h1>Patient: {name}</h1>
      <div className="kontainer">
        <NoHistory trigger = {noSignalPopup} setTrigger = {setNoSignalPopup} />
        <RespGraph />
        <div className="RespRate">
          <li>Resp Rate:</li>
          <li>
             bpm{" "}
          </li>
        </div>
        <TempGraph />
        <div className="Temp">
          <li>Temperature:</li>
          <li>
             °C
          </li>
        </div>
        <SysGraph />
        <div className="BP_Sys">
          <li>BP Systolic</li>
          <li>
             mmHg
          </li>
        </div>
        <DiasGraph />
        <div className="BP_Dias">
          <li>BP Diastolic:</li>
          <li>
             mmHg
          </li>
        </div>
        <HeartRateGraph />
        <div className="HR">
          <li>Heart Rate:</li>
          <li>
             bpm
          </li>
        </div>
        <div className="ECG">
          <li>ECG</li>
        </div>
      </div>
    </Layout>
  );
}
