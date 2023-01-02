import { useState, useEffect } from "react";

function RandomRespRC() {
  let min = 12;
  let max = 16;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateC() {
  const [currentRRC, updatedRRC] = useState(RandomRespRC());
  useEffect(() => {
    setInterval(() => {
      const RRC = RandomRespRC();
      updatedRRC(RRC);
    }, 1000);
  }, []);
  respRC = currentRRC;
  return currentRRC;
}

export var respRC = 0;

function RandomTempRC() {
  let min = 36.5;
  let max = 37.5;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTempC() {
  const [currentTRC, updatedTRC] = useState(RandomTempRC());
  useEffect(() => {
    setInterval(() => {
      const TR = RandomTempRC();
      updatedTRC(TR);
    }, 1000);
  }, []);
  tempRC = currentTRC;
  return currentTRC;
}

export var tempRC = 0;

function RandomSysRC() {
  let min = 90;
  let max = 120;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSysC() {
  const [currentSRC, updatedSRC] = useState(RandomSysRC());
  useEffect(() => {
    setInterval(() => {
      const SR = RandomSysRC();
      updatedSRC(SR);
    }, 1000);
  }, []);
  sysRC = currentSRC;
  return currentSRC;
}

export var sysRC = 0;

function RandomDiasRateC() {
  let min = 60;
  let max = 80;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDiasC() {
  const [currentDRC, updatedDRC] = useState(RandomDiasRateC());
  useEffect(() => {
    setInterval(() => {
      const DR = RandomDiasRateC();
      updatedDRC(DR);
    }, 1000);
  }, []);
  diasRC = currentDRC;
  return currentDRC;
}

export var diasRC = 0;

function RandomHRateC() {
  let min = 60;
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHRC() {
  const [currentHRC, updatedHRC] = useState(RandomHRateC());
  useEffect(() => {
    setInterval(() => {
      const HR = RandomHRateC();
      updatedHRC(HR);
    }, 1000);
  }, []);
  heartRC = currentHRC;
  return currentHRC;
}

export var heartRC = 0;