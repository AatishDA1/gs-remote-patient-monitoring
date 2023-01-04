import { useState, useEffect } from "react";

function RandomRespRC() {
  let min = 20;
  let max = 25;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateC() {
  const [currentRRCcrit, updatedRRC] = useState(RandomRespRC());
  useEffect(() => {
    setTimeout(() => {
      const RRC = RandomRespRC();
      updatedRRC(RRC);
    }, 2500);
  }, []);
  respRCcrit = currentRRCcrit;
  return currentRRCcrit

}

export var respRCcrit = 0;
console.log(respRCcrit)

function RandomTempRC() {
  let min = 38.1;
  let max = 43.2;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTempC() {
  const [currentRRCcrit, updatedTRC] = useState(RandomTempRC());
  useEffect(() => {
    setTimeout(() => {
      const TR = RandomTempRC();
      updatedTRC(TR);
    }, 1000);
  }, []);
  tempRCcrit = currentRRCcrit;
  return currentRRCcrit;
}

export var tempRCcrit = 0;

function RandomSysRC() {
  let min = 141;
  let max = 169;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSysC() {
  const [currentSRCcrit, updatedSRC] = useState(RandomSysRC());
  useEffect(() => {
    setTimeout(() => {
      const SR = RandomSysRC();
      updatedSRC(SR);
    }, 1000);
  }, []);
  sysRCcrit = currentSRCcrit;
  return currentSRCcrit;
}

export var sysRCcrit = 0;

function RandomDiasRateC() {
  let min = 90;
  let max = 109;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDiasC() {
  const [currentDRCcrit, updatedDRC] = useState(RandomDiasRateC());
  useEffect(() => {
    setTimeout(() => {
      const DR = RandomDiasRateC();
      updatedDRC(DR);
    }, 1000);
  }, []);
  diasRCcrit = currentDRCcrit;
  return currentDRCcrit;
}

export var diasRCcrit = 0;

function RandomHRateC() {
  let min = 121;
  let max = 174;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHRC() {
  const [currentHRCcrit, updatedHRC] = useState(RandomHRateC());
  useEffect(() => {
    setTimeout(() => {
      const HR = RandomHRateC();
      updatedHRC(HR);
    }, 1000);
  }, []);
  heartRCcrit = currentHRCcrit;
  return currentHRCcrit;
}

export var heartRCcrit = 0;
