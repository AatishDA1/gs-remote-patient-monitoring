import React, { useState } from "react";
import RandomRespRate, {
  RandomTemp,
  RandomSys,
  RandomDias,
  RandomHR,
} from "./SimDataNorm";
import RespGraph, {
  DiasGraph,
  HeartRateGraph,
  SysGraph,
  TempGraph,
  ECGGraph,
} from "./SimGraphsNorm";
import RespGraphWarn, {
  DiasGraphWarn,
  HeartRateGraphWarn,
  SysGraphWarn,
  TempGraphWarn,
  ECGGraphWarn,
} from "./SimGraphsWarn";
import RandomRespRateW, {
  RandomTempW,
  RandomSysW,
  RandomDiasW,
  RandomHRW,
} from "./SimDataWarn";
import "../Styles/Simulation.css";

export default function Simulation() {
  const [Normal, setNormal] = useState(true);
  const [Warning, setWarning] = useState(false);
  const NormalHandler = () => {
    setNormal(true);
    setWarning(false);
  };
  const WarningHandler = () => {
    setNormal(false);
    setWarning(true);
  };

  return (
    <>
      <h2>Simulation Page</h2>
      <button onClick={NormalHandler}>Normal</button>
      <button onClick={WarningHandler}>Warning</button>
      {Normal && (
        <div>
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
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
          </div>
        </div>
      )}
      {Warning && (
        <div>
          <div className="kontainer">
            <div className="ECG">
              <ECGGraphWarn />
            </div>
            <RespGraphWarn />
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRateW /> bpm{" "}
              </li>
            </div>
            <TempGraphWarn />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTempW /> °C
              </li>
            </div>
            <SysGraphWarn />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSysW /> mmHg
              </li>
            </div>
            <DiasGraphWarn />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDiasW /> mmHg
              </li>
            </div>
            <HeartRateGraphWarn />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHRW /> bpm
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
