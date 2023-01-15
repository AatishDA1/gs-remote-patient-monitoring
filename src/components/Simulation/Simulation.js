import React, { useState } from "react";
import useSound from "use-sound";
import tindeck_1 from "../../Assets/Sounds/tindeck_1.mp3";
import Popup from "../General/Popup";
import PopupCritical from "../General/PopupCritical";
import AlertTime from "../General/AlertTime";
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
import RandomRespRateCcrit, {
  RandomTempCcrit,
  RandomSysCcrit,
  RandomDiasCcrit,
  RandomHRCcrit,
} from "./SimCritExtract";
import RandomRespRateWwarn, {
  RandomTempWwarn,
  RandomSysWwarn,
  RandomDiasWwarn,
  RandomHRWwarn
} from './SimWarnExtract';
import SimAddActions from "./SimAddActions";
import SimWarnActions from "./SimWarnActions";

export default function Simulation() {
  const [Normal, setNormal] = useState(true);
  const [Warning, setWarning] = useState(false);
  const [Critical, setCritical] = useState(false);
  const setZoomIn = useState(false);
  const setOriginal = useState(true);
  const setZoomOut = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submitwarnPopup, setsubmitwarnPopup] = useState(false);
  const [buttonCritPopup, setButtonCritPopup] = useState(false);
  const [submitbtnPopup, setsubmitBtnPopup] = useState(false);
  const [play] = useSound(tindeck_1);

  const ZoomInHandler = () => {
    setZoomIn(true);
    setOriginal(false);
    setZoomOut(false);
  };
  const ZoomOutHandler = () => {
    setZoomIn(false);
    setOriginal(false);
    setZoomOut(true);
  };
  const OriginalHandler = () => {
    setZoomIn(false);
    setOriginal(true);
    setZoomOut(false);
  };

  const NormalHandler = () => {
    setNormal(true);
    setWarning(false);
    setCritical(false);
  };
  const WarningHandler = () => {
    setNormal(false);
    setWarning(true);
    setCritical(false);
    setTimeout(() => {
      setButtonPopup(true),play(),setsubmitwarnPopup(true);
    },10000);
    ;
  };
  const CriticalHandler = () => {
    setNormal(false);
    setWarning(false);
    setCritical(true);

    setTimeout(() => {
      setButtonCritPopup(true),play(),setsubmitBtnPopup(true);
    },10000);
  
  };
// Button triggers popups, calls functions 
  return (
    <>
      <h2>Simulation Page</h2>
      <div className="button_holder">
        <button onClick={NormalHandler}>Normal</button>
        <button onClick={WarningHandler}>Warning</button>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <h1> Simulated Patient Warning at Time: <AlertTime/> </h1>
            <h2> Respiratory Rate: <RandomRespRateWwarn/> bpm</h2>
            <h2> Temperature : <RandomTempWwarn /> °C</h2>
            <h2> Systolic BP : <RandomSysWwarn/> mmHg</h2>
            <h2> Diastolic BP : < RandomDiasWwarn/> mmHg</h2>
            <h2> Heart Rate : <RandomHRWwarn /> bpm</h2>
            <h2><SimWarnActions trigger = {submitwarnPopup} setTrigger = {setsubmitwarnPopup}> </SimWarnActions></h2>
        </Popup>
        <button onClick={CriticalHandler}>Critical</button>
        <PopupCritical trigger = {buttonCritPopup} setTrigger = {setButtonCritPopup}>
                <h1> Simulated Patient Warning at Time: <AlertTime/> </h1>
                <h2> Respiratory Rate: <RandomRespRateCcrit/> bpm</h2>
                <h2> Temperature : <RandomTempCcrit /> °C</h2>
                <h2> Systolic BP : <RandomSysCcrit/> mmHg</h2>
                <h2> Diastolic BP : <RandomDiasCcrit/> mmHg</h2>
                <h2> Heart Rate : <RandomHRCcrit /> bpm</h2>
                <h2><SimAddActions trigger = {submitbtnPopup} setTrigger = {setsubmitBtnPopup}> </SimAddActions> </h2>

        </PopupCritical>
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

export var ECGduration = 100000;
export var Respduration = 10000;
export var Tempduration = 10000;
export var Sysduration = 10000;
export var Diasduration = 10000;
export var Heartduration = 10000;
