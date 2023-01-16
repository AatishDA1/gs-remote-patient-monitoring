import { useState, useEffect } from "react";
import db from "../General/firebase";

const patientkey = "6a19KWPh2Kg7tor6IBjD";


function RandomRespR() {
  let min = 12;
  let max = 16;
  let ret = [];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRate(patient) {

  const [currentRR, updatedRR] = useState(RandomRespR());
  /* create empty list and append every new data to it and then override it everytime in the db*/
  let resplist = [];
  let timelist = [];
  useEffect(() => {
    setInterval(() => {
      const RR = RandomRespR();
      updatedRR(RR);
      //const strtime = timevar.toLocaleDateString
      timelist.push((new Date).getSeconds())
      resplist.push(RR);

      db.collection("patientsData").doc(patientkey).update({
        resp: resplist,
        time: timelist
      });
    }, 1000);
  }, []);
  respR = currentRR;
  return currentRR;
}

export var respR = 0;

function RandomTempR() {
  let min = 36.5;
  let max = 37.8;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTemp() {
  const [currentTR, updatedTR] = useState(RandomTempR());
  let templist = [];
  useEffect(() => {
    setInterval(() => {
      const TR = RandomTempR();
      updatedTR(TR);
      templist.push(TR);
      db.collection("patientsData").doc(patientkey).update({
        temp: templist,
      });
    }, 1000);
  }, []);
  tempR = currentTR;
  return currentTR;
}

export var tempR = 0;

function RandomSysR() {
  let min = 100;
  let max = 110;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSys() {
  let syslist = [];
  const [currentSR, updatedSR] = useState(RandomSysR());
  useEffect(() => {
    setInterval(() => {
      const SR = RandomSysR();
      updatedSR(SR);
      syslist.push(SR);
      db.collection("patientsData").doc(patientkey).update({
        sys: syslist,
      });
    }, 1000);
  }, []);
  sysR = currentSR;
  return currentSR;
}

export var sysR = 0;

function RandomDiasRate() {
  let min = 70;
  let max = 80;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDias() {
  const [currentDR, updatedDR] = useState(RandomDiasRate());
  let dialist = [];
  useEffect(() => {
    setInterval(() => {
      const DR = RandomDiasRate();
      updatedDR(DR);
      dialist.push(DR);
      db.collection("patientsData").doc(patientkey).update({
        dia: dialist,
      });
    }, 1000);
  }, []);
  diasR = currentDR;
  return currentDR;
}

export var diasR = 0;

function RandomHRate() {
  let min = 60;
  let max = 70;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHR() {
  const [currentHR, updatedHR] = useState(RandomHRate());
  let HRlist = [];
  useEffect(() => {
    setInterval(() => {
      const HR = RandomHRate();
      updatedHR(HR);
      HRlist.push(HR);
      db.collection("patientsData").doc(patientkey).update({
        hr: HRlist,
      });
    }, 1000);
  }, []);
  heartR = currentHR;
  return currentHR;
}

export var heartR = 0;