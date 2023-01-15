import { useState, useEffect } from "react";
import db from "../General/firebase";

const patientkey = "xu9s02m4Y5n1MadwgaDD"



function RandomRespRW() {
  let min = 16;
  let max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateW() {
  const [currentRRW, updatedRRW] = useState(RandomRespRW());
  let RRWlist = [];
  useEffect(() => {
    setInterval(() => {
      const RRW = RandomRespRW();
      updatedRRW(RRW);
      RRWlist.push(RRW)
      db.collection("patientsData").doc(patientkey).update({
        resp: RRWlist
      })
    }, 1000);
  }, []);
  respRW = currentRRW;
  return currentRRW;
}

export var respRW = 0;

function RandomTempRW() {
  let min = 37.5;
  let max = 38.0;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTempW() {
  const [currentTRW, updatedTRW] = useState(RandomTempRW());
  let TRWlist = [];
  useEffect(() => {
    setInterval(() => {
      const TR = RandomTempRW();
      updatedTRW(TR);
      TRWlist.push(TR)
      db.collection("patientsData").doc(patientkey).update({
        temp: TRWlist
      })
    }, 1000);
  }, []);
  tempRW = currentTRW;
  return currentTRW;
}

export var tempRW = 0;

function RandomSysRW() {
  let min = 130;
  let max = 140;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSysW() {
  const [currentSRW, updatedSRW] = useState(RandomSysRW());
  let SRWlist = [];
  useEffect(() => {
    setInterval(() => {
      const SR = RandomSysRW();
      updatedSRW(SR);
      SRWlist.push(SR)
      db.collection("patientsData").doc(patientkey).update({
        sys: SRWlist
      })
    }, 1000);
  }, []);
  sysRW = currentSRW;
  return currentSRW;
}

export var sysRW = 0;

function RandomDiasRateW() {
  let min = 70;
  let max = 87;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDiasW() {
  const [currentDRW, updatedDRW] = useState(RandomDiasRateW());
  let DRWlist = [];
  useEffect(() => {
    setInterval(() => {
      const DR = RandomDiasRateW();
      updatedDRW(DR);
      DRWlist.push(DR)
      db.collection("patientsData").doc(patientkey).update({
        dia: DRWlist
      })
    }, 1000);
  }, []);
  diasRW = currentDRW;
  return currentDRW;
}

export var diasRW = 0;

function RandomHRateW() {
  let min = 100;
  let max = 120;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHRW() {
  const [currentHRW, updatedHRW] = useState(RandomHRateW());
  let HRWlist = [];
  useEffect(() => {
    setInterval(() => {
      const HR = RandomHRateW();
      updatedHRW(HR);
      HRWlist.push(HR)
      db.collection("patientsData").doc(patientkey).update({
        hr: HRWlist
      })
    }, 1000);
  }, []);
  heartRW = currentHRW;
  return currentHRW;
}

export var heartRW = 0;
