import { useState, useEffect } from "react";

function RandomRespRW() {
  let min = 12;
  let max = 16;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateW() {
  const [currentRRW, updatedRRW] = useState(RandomRespRW());
  useEffect(() => {
    setInterval(() => {
      const RRW = RandomRespRW();
      updatedRRW(RRW);
    }, 1000);
  }, []);
  respRW = currentRRW;
  return currentRRW;
}

export var respRW = 0;

function RandomTempRW() {
  let min = 36.5;
  let max = 37.5;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTempW() {
  const [currentTRW, updatedTRW] = useState(RandomTempRW());
  useEffect(() => {
    setInterval(() => {
      const TR = RandomTempRW();
      updatedTRW(TR);
    }, 1000);
  }, []);
  tempRW = currentTRW;
  return currentTRW;
}

export var tempRW = 0;

function RandomSysRW() {
  let min = 90;
  let max = 120;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSysW() {
  const [currentSRW, updatedSRW] = useState(RandomSysRW());
  useEffect(() => {
    setInterval(() => {
      const SR = RandomSysRW();
      updatedSRW(SR);
    }, 1000);
  }, []);
  sysRW = currentSRW;
  return currentSRW;
}

export var sysRW = 0;

function RandomDiasRateW() {
  let min = 60;
  let max = 80;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDiasW() {
  const [currentDRW, updatedDRW] = useState(RandomDiasRateW());
  useEffect(() => {
    setInterval(() => {
      const DR = RandomDiasRateW();
      updatedDRW(DR);
    }, 1000);
  }, []);
  diasRW = currentDRW;
  return currentDRW;
}

export var diasRW = 0;

function RandomHRateW() {
  let min = 60;
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHRW() {
  const [currentHRW, updatedHRW] = useState(RandomHRateW());
  useEffect(() => {
    setInterval(() => {
      const HR = RandomHRateW();
      updatedHRW(HR);
    }, 1000);
  }, []);
  heartRW = currentHRW;
  return currentHRW;
}

export var heartRW = 0;
