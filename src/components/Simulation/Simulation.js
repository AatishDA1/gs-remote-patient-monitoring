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
  TensecRespGraph,
  TenminRespGraph,
  TensecDiasGraph,
  TensecHeartRateGraph,
  TensecSysGraph,
  TensecTempGraph,
  TenminDiasGraph,
  TenminHeartRateGraph,
  TenminSysGraph,
  TenminTempGraph,
} from "./SimGraphsNorm";
import RespGraphWarn, {
  DiasGraphWarn,
  HeartRateGraphWarn,
  SysGraphWarn,
  TempGraphWarn,
  ECGGraphWarn,
  TensecRespGraphWarn,
  TensecDiasGraphWarn,
  TensecHeartRateGraphWarn,
  TensecSysGraphWarn,
  TensecTempGraphWarn,
  TenminRespGraphWarn,
  TenminDiasGraphWarn,
  TenminHeartRateGraphWarn,
  TenminSysGraphWarn,
  TenminTempGraphWarn,
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
  TensecRespGraphCrit,
  TensecDiasGraphCrit,
  TensecHeartRateGraphCrit,
  TensecSysGraphCrit,
  TensecTempGraphCrit,
  TensecECGGraphCrit,
  TenminRespGraphCrit,
  TenminDiasGraphCrit,
  TenminHeartRateGraphCrit,
  TenminSysGraphCrit,
  TenminTempGraphCrit,
  TenminECGGraphCrit,
} from "./SimGraphsCrit";
import RandomRespRateC, {
  RandomTempC,
  RandomSysC,
  RandomDiasC,
  RandomHRC,
} from "./SimDataCrit";
import "../Styles/Simulation.css";
import Navbar from "../Vitals/NavBar";

export default function Simulation() {
  const [Normal, setNormal] = useState(true);
  const [Warning, setWarning] = useState(false);
  const [Critical, setCritical] = useState(false);
  const [ZoomIn,setZoomIn] = useState(false);
  const [Original,setOriginal] = useState(true)
  const [ZoomOut,setZoomOut] = useState(false)

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
  // function ZoomIning(){
  //   ECGduration = 100000
  //   Respduration = 10000
  //   Tempduration = 10000
  //   Sysduration = 10000
  //   Diasduration = 10000
  //   Heartduration = 10000
  //   console.log("zoom in func")
  //   return true
  // }
  
  // function changestate(){
  //   Respduration = 100000
  //   console.log('respduration is '+Respduration)
  // }

  // function getgraph(){
  //   return <sixtyRespGraph/>
  // }
  return (
    <>
      
      <h2>Simulation Page</h2>
      <div className="button_holder">
        <div className="middle">Simulation Options:</div>
        <button onClick={NormalHandler}>Normal</button>
        <button onClick={WarningHandler}>Warning</button>
        <button onClick={CriticalHandler}>Critical</button>
      </div>
      
      {Normal && (
        <div>
        <div className="zoombuttons">
          <div className="middle">Zoom Options:</div>
          <button onClick={ZoomInHandler}>10 secs</button>
          <button onClick={OriginalHandler}>1 min</button>
          <button onClick={ZoomOutHandler}>10 min</button>
        </div>
          {ZoomIn && (
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
            <TensecRespGraph/>
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRate /> bpm{" "}
              </li>
            </div>
            <TensecTempGraph />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTemp /> °C
              </li>
            </div>
            <TensecSysGraph />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSys /> mmHg
              </li>
            </div>
            <TensecDiasGraph />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDias /> mmHg
              </li>
            </div>
            <TensecHeartRateGraph />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHR /> bpm
              </li>
            </div>
          </div>
          )}    
          {Original && (
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
            <RespGraph/>
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
          )}
          {ZoomOut && (
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
            <TenminRespGraph/>
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRate /> bpm{" "}
              </li>
            </div>
            <TenminTempGraph />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTemp /> °C
              </li>
            </div>
            <TenminSysGraph />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSys /> mmHg
              </li>
            </div>
            <TenminDiasGraph />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDias /> mmHg
              </li>
            </div>
            <TenminHeartRateGraph />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHR /> bpm
              </li>
            </div>
          </div>
          )}
        </div>
        
      )}
      {Critical  && (
        <div>
        <div className="zoombuttons">
          <div className="middle">Zoom Options:</div>
          <button onClick={ZoomInHandler}>10 secs</button>
          <button onClick={OriginalHandler}>1 min</button>
          <button onClick={ZoomOutHandler}>10 min</button>
        </div>
          {ZoomIn && (
          <div className="kontainer">
            <div className="ECG">
              <ECGGraphCrit />
            </div>
            <TensecRespGraphCrit/>
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRateC /> bpm{" "}
              </li>
            </div>
            <TensecTempGraphCrit />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTempC /> °C
              </li>
            </div>
            <TensecSysGraphCrit />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSysC /> mmHg
              </li>
            </div>
            <TensecDiasGraphCrit />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDiasC /> mmHg
              </li>
            </div>
            <TensecHeartRateGraphCrit />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHRC /> bpm
              </li>
            </div>
          </div>
          )}    
          {Original && (
          <div className="kontainer">
          <div className="ECG">
            <ECGGraphCrit />
          </div>
          <RespGraphCrit/>
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
          )}
          {ZoomOut && (
          <div className="kontainer">
          <div className="ECG">
            <ECGGraphCrit />
          </div>
          <TenminRespGraphCrit/>
          <div className="RespRate">
            <li>Resp Rate:</li>
            <li>
              <RandomRespRateC /> bpm{" "}
            </li>
          </div>
          <TenminTempGraphCrit />
          <div className="Temp">
            <li>Temperature:</li>
            <li>
              <RandomTempC /> °C
            </li>
          </div>
          <TenminSysGraphCrit />
          <div className="BP_Sys">
            <li>BP Systolic</li>
            <li>
              <RandomSysC /> mmHg
            </li>
          </div>
          <TenminDiasGraphCrit />
          <div className="BP_Dias">
            <li>BP Diastolic:</li>
            <li>
              <RandomDiasC /> mmHg
            </li>
          </div>
          <TenminHeartRateGraphCrit />
          <div className="HR">
            <li>Heart Rate:</li>
            <li>
              <RandomHRC /> bpm
            </li>
          </div>
        </div>
          )}
        </div>
      )}
      {Warning  && (
        <div>
        <div className="zoombuttons">
          <div className="middle">Zoom Options:</div>
          <button onClick={ZoomInHandler}>10 secs</button>
          <button onClick={OriginalHandler}>1 min</button>
          <button onClick={ZoomOutHandler}>10 min</button>
        </div>
          {ZoomIn && (
          <div className="kontainer">
            <div className="ECG">
              <ECGGraphWarn />
            </div>
            <TensecRespGraphWarn/>
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRateW /> bpm{" "}
              </li>
            </div>
            <TensecTempGraphWarn />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTempW /> °C
              </li>
            </div>
            <TensecSysGraphWarn />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSysW /> mmHg
              </li>
            </div>
            <TensecDiasGraphWarn />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDiasW /> mmHg
              </li>
            </div>
            <TensecHeartRateGraphWarn />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHRW /> bpm
              </li>
            </div>
          </div>
          )}    
          {Original && (
          <div className="kontainer">
          <div className="ECG">
            <ECGGraphWarn />
          </div>
          <RespGraphWarn/>
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
          )}
          {ZoomOut && (
          <div className="kontainer">
          <div className="ECG">
              <ECGGraphWarn />
            </div>
            <TenminRespGraphWarn/>
            <div className="RespRate">
              <li>Resp Rate:</li>
              <li>
                <RandomRespRateW /> bpm{" "}
              </li>
            </div>
            <TenminTempGraphWarn />
            <div className="Temp">
              <li>Temperature:</li>
              <li>
                <RandomTempW /> °C
              </li>
            </div>
            <TenminSysGraphWarn />
            <div className="BP_Sys">
              <li>BP Systolic</li>
              <li>
                <RandomSysW /> mmHg
              </li>
            </div>
            <TenminDiasGraphWarn />
            <div className="BP_Dias">
              <li>BP Diastolic:</li>
              <li>
                <RandomDiasW /> mmHg
              </li>
            </div>
            <TenminHeartRateGraphWarn />
            <div className="HR">
              <li>Heart Rate:</li>
              <li>
                <RandomHRW /> bpm
            </li>
          </div>
        </div>
          )}
        </div>
      )}
</>
);
}
      // /</>/   <div>
      //   <div className="zoombuttons">
      //     <div className="middle">Zoom Options:</div>
      //     <button onClick={ZoomInHandler}>10 secs</button>
      //     <button onClick={OriginalHandler}>1 min</button>
      //     <button onClick={ZoomOutHandler}>10 min</button>
      //   </div>
      //     {Original && (
      //       <div className="kontainer">
      //         <div className="ECG">
      //           <ECGGraphWarn />
      //         </div>
      //         <RespGraphWarn />
      //         <div className="RespRate">
      //           <li>Resp Rate:</li>
      //           <li>
      //             <RandomRespRateW /> bpm{" "}
      //           </li>
      //         </div>
      //         <TempGraphWarn />
      //         <div className="Temp">
      //           <li>Temperature:</li>
      //           <li>
      //             <RandomTempW /> °C
      //           </li>
      //         </div>
      //         <SysGraphWarn />
      //         <div className="BP_Sys">
      //           <li>BP Systolic</li>
      //           <li>
      //             <RandomSysW /> mmHg
      //           </li>
      //         </div>
      //         <DiasGraphWarn />
      //         <div className="BP_Dias">
      //           <li>BP Diastolic:</li>
      //           <li>
      //             <RandomDiasW /> mmHg
      //           </li>
      //         </div>
      //         <HeartRateGraphWarn />
      //         <div className="HR">
      //           <li>Heart Rate:</li>
      //           <li>
      //             <RandomHRW /> bpm
      //           </li>
      //         </div>
      //       </div>
      //       )}
      //       {ZoomIn && (
      //       <div className="kontainer">
      //         <div className="ECG">
      //           <ECGGraphWarn />
      //         </div>
      //         <RespGraphWarn />
      //         <div className="RespRate">
      //           <li>Resp Rate:</li>
      //           <li>
      //             <RandomRespRateW /> bpm{" "}
      //           </li>
      //         </div>
      //         <TempGraphWarn />
      //         <div className="Temp">
      //           <li>Temperature:</li>
      //           <li>
      //             <RandomTempW /> °C
      //           </li>
      //         </div>
      //         <SysGraphWarn />
      //         <div className="BP_Sys">
      //           <li>BP Systolic</li>
      //           <li>
      //             <RandomSysW /> mmHg
      //           </li>
      //         </div>
      //         <DiasGraphWarn />
      //         <div className="BP_Dias">
      //           <li>BP Diastolic:</li>
      //           <li>
      //             <RandomDiasW /> mmHg
      //           </li>
      //         </div>
      //         <HeartRateGraphWarn />
      //         <div className="HR">
      //           <li>Heart Rate:</li>
      //           <li>
      //             <RandomHRW /> bpm
      //           </li>
      //         </div>
      //       </div>
      //       )}
      //   </div>
      // )}
      // {Critical && (
      //   <div>
      //     <div className="kontainer">
      //       <div className="ECG">
      //         <ECGGraphCrit />
      //       </div>
      //       <RespGraphCrit />
      //       <div className="RespRate">
      //         <li>Resp Rate:</li>
      //         <li>
      //           <RandomRespRateC /> bpm{" "}
      //         </li>
      //       </div>
      //       <TempGraphCrit />
      //       <div className="Temp">
      //         <li>Temperature:</li>
      //         <li>
      //           <RandomTempC /> °C
      //         </li>
      //       </div>
      //       <SysGraphCrit />
      //       <div className="BP_Sys">
      //         <li>BP Systolic</li>
      //         <li>
      //           <RandomSysC /> mmHg
      //         </li>
      //       </div>
      //       <DiasGraphCrit />
      //       <div className="BP_Dias">
      //         <li>BP Diastolic:</li>
      //         <li>
      //           <RandomDiasC /> mmHg
      //         </li>
      //       </div>
      //       <HeartRateGraphCrit />
      //       <div className="HR">
      //         <li>Heart Rate:</li>
      //         <li>
      //           <RandomHRC /> bpm
      //         </li>
      //       </div>
      //     </div>
      //   </div>
      /* {Normal & ZoomIn && (
        <div>
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
            < fiveminRespGraph/>
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
      {Warning & ZoomIn && (
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
      {Critical & ZoomIn && (
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
      {Normal & ZoomOut && (
        <div>
          <div className="kontainer">
            <div className="ECG">
              <ECGGraph />
            </div>
            <RespGraph/>
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
      {Warning & ZoomOut && (
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
      {Critical & ZoomOut && (
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
      )} */

// export var ECGduration = 100000
// export var Respduration = 1000
// export var Tempduration = 10000
// export var Sysduration = 10000
// export var Diasduration = 10000
// export var Heartduration = 10000
// export var zoomstate = false
// console.log('right now it is '+ zoomstate)
// console.log('respduration out side of function is '+Respduration)