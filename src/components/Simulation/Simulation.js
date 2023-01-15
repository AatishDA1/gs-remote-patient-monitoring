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
import RespGraphCrit, {
  DiasGraphCrit,
  HeartRateGraphCrit,
  SysGraphCrit,
  TempGraphCrit,
  ECGGraphCrit,
} from "./SimGraphsCrit";
import RandomRespRateC, {
  RandomTempC,
  RandomSysC,
  RandomDiasC,
  RandomHRC,
} from "./SimDataCrit";
import "../Styles/Simulation.css";



export default function Simulation() {
  const [Normal, setNormal] = useState(true);
  const [Warning, setWarning] = useState(false);
  const [Critical, setCritical] = useState(false);
  const setZoomIn = useState(false)
  const setOriginal = useState(true)
  const setZoomOut = useState(false)

  const ZoomInHandler = () => {
    setZoomIn(true)
    setOriginal(false)
    setZoomOut(false)
  }
  const ZoomOutHandler = () => {
    setZoomIn(false)
    setOriginal(false)
    setZoomOut(true)
  }
  const OriginalHandler = () => {
    setZoomIn(false)
    setOriginal(true)
    setZoomOut(false)
  }

  const NormalHandler = () => {
    setNormal(true);
    setWarning(false);
    setCritical(false);
  };
  const WarningHandler = () => {
    setNormal(false);
    setWarning(true);
    setCritical(false);
  };
  const CriticalHandler = () => {
    setNormal(false);
    setWarning(false);
    setCritical(true);
  };
  // if (setOriginal(true)) {
  //   ECGduration = 100000
  //   Respduration = 10000
  //   Tempduration = 10000
  //   Sysduration = 10000
  //   Diasduration = 10000
  //   Heartduration = 10000
  // }
  // else if (setZoomIn(true)) {
  //   ECGduration = 100000
  //   Respduration = 1000
  //   Tempduration = 1000
  //   Sysduration = 1000
  //   Diasduration = 1000
  //   Heartduration = 1000
  // }
  // else if (setZoomOut(true)){
  //   ECGduration = 100000
  //   Respduration = 10000
  //   Tempduration = 10000
  //   Sysduration = 10000
  //   Diasduration = 10000
  //   Heartduration = 10000
  // }
  return (
    <>
      <h2>Simulation Page</h2>
      <div className="button_holder">
        <button onClick={NormalHandler}>Normal</button>
        <button onClick={WarningHandler}>Warning</button>
        <button onClick={CriticalHandler}>Critical</button>
      </div>
      <div className="button_holder">
        <button onClick={ZoomInHandler}>Zoom in</button>
        <button onClick={OriginalHandler}>Original</button>
        <button onClick={ZoomOutHandler}>Zoom out</button>
      </div>
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
      {Critical && (
        <div>
          <div className="kontainer">
            <div className="ECG">
              <ECGGraphCrit />
            </div>
            <RespGraphCrit />
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRateC /> bpm{" "}
              </li>
            </div>
            <TempGraphCrit />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTempC /> °C
              </li>
            </div>
            <SysGraphCrit />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSysC /> mmHg
              </li>
            </div>
            <DiasGraphCrit />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDiasC /> mmHg
              </li>
            </div>
            <HeartRateGraphCrit />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHRC /> bpm
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export var ECGduration = 100000
export var Respduration = 10000
export var Tempduration = 10000
export var Sysduration = 10000
export var Diasduration = 10000
export var Heartduration = 10000