import React, { useState, useEffect } from "react";
import Layout from "../components/General/Layout";
import RespGraph, {
  DiasGraph,
  ECGGraph,
  HeartRateGraph,
  SysGraph,
  TempGraph,
} from "../components/Vitals/RandomVitalGraphDud";
import "../components/Styles/selectpats.css"
import { name } from "../components/PatSelect/PSDudPage";
import NoSignal from "../components/PatSelect/NoSignal";


export default function PatientDud() {
  const [noSignalPopup, setNoSignalPopup] = useState(true);

  return (
    <Layout>
      {/* <Navbar /> */}
      <h1>Patient: {name}</h1>
      <div className="kontainer">
        <NoSignal trigger = {noSignalPopup} setTrigger = {setNoSignalPopup} />
        <ECGGraph />
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
      </div>
    </Layout>
  );
}
