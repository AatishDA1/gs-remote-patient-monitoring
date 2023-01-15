import { useState, useEffect } from "react";
import db from "../General/firebase";

function RandomRespRC() {
  let min = 20;
  let max = 25;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateC() {
  const [currentRRC, updatedRRC] = useState(RandomRespRC());
  let RRClist = []; 
  useEffect(() => {
    setInterval(() => {
      const RRC = RandomRespRC();
      updatedRRC(RRC);
      RRClist.push(RRC)
      db.collection("patientsData").doc('iJhMrZxoYmvoPWf5XPH6').update({
        resp: RRClist
      })
    }, 1000);
  }, []);
  respRC = currentRRC;
  return currentRRC;  
}
export var respRC = 0;
function RandomTempRC() {
  let min = 38.1;
  let max = 43.2;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTempC() {
  const [currentTRC, updatedTRC] = useState(RandomTempRC());
  let TRlist = [];
  useEffect(() => {
    setInterval(() => {
      const TR = RandomTempRC();
      updatedTRC(TR);
      TRlist.push(TR)
      db.collection("patientsData").doc('iJhMrZxoYmvoPWf5XPH6').update({
        temp: TRlist
      })
    }, 1000);
  }, []);
  tempRC = currentTRC;
  return currentTRC;
}

export var tempRC = 0;

function RandomSysRC() {
  let min = 141;
  let max = 169;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSysC() {
  const [currentSRC, updatedSRC] = useState(RandomSysRC());
  let SRClist = [];
  useEffect(() => {
    setInterval(() => {
      const SR = RandomSysRC();
      updatedSRC(SR);
      SRClist.push(SR)
      db.collection("patientsData").doc('iJhMrZxoYmvoPWf5XPH6').update({
        sys: SRClist
      })
    }, 1000);
  }, []);
  sysRC = currentSRC;
  return currentSRC;
}

export var sysRC = 0;

function RandomDiasRateC() {
  let min = 90;
  let max = 109;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDiasC() {
  const [currentDRC, updatedDRC] = useState(RandomDiasRateC());
  let DRlist = [];
  useEffect(() => {
    setInterval(() => {
      const DR = RandomDiasRateC();
      updatedDRC(DR);
      DRlist.push(DR)
      db.collection("patientsData").doc('iJhMrZxoYmvoPWf5XPH6').update({
        dia: DRlist
      })
    }, 1000);
  }, []);
  diasRC = currentDRC;
  return currentDRC;
}

export var diasRC = 0;

function RandomHRateC() {
  let min = 121;
  let max = 174;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHRC() {
  const [currentHRC, updatedHRC] = useState(RandomHRateC());
  let HRClist
  useEffect(() => {
    setInterval(() => {
      const HR = RandomHRateC();
      updatedHRC(HR);
      HRClist.push(HR)
      db.collection("patientsData").doc('iJhMrZxoYmvoPWf5XPH6').update({
        hr: HRClist
      })
    }, 1000);
  }, []);
  heartRC = currentHRC;
  return currentHRC;
}

export var heartRC = 0;
