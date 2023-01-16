import { useState, useEffect } from "react";

function RandomRespRW() {
  let min = 16;
  let max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomRespRateWwarn() {
  const [currentRRW, updatedRRW] = useState(RandomRespRW());
  useEffect(() => {
    setTimeout(() => {
      const RRW = RandomRespRW();
      updatedRRW(RRW);
    }, 1);
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

export function RandomTempWwarn() {
  const [currentTRW, updatedTRW] = useState(RandomTempRW());
  useEffect(() => {
    setTimeout(() => {
      const TR = RandomTempRW();
      updatedTRW(TR);
    }, 1);
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

export function RandomSysWwarn() {
  const [currentSRW, updatedSRW] = useState(RandomSysRW());
  useEffect(() => {
    setTimeout(() => {
      const SR = RandomSysRW();
      updatedSRW(SR);
    }, 1);
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

export function RandomDiasWwarn() {
  const [currentDRW, updatedDRW] = useState(RandomDiasRateW());
  useEffect(() => {
    setTimeout(() => {
      const DR = RandomDiasRateW();
      updatedDRW(DR);
    }, 1);
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

export function RandomHRWwarn() {
  const [currentHRW, updatedHRW] = useState(RandomHRateW());
  useEffect(() => {
    setTimeout(() => {
      const HR = RandomHRateW();
      updatedHRW(HR);
    }, 1);
  }, []);
  heartRW = currentHRW;
  return currentHRW;
}

export var heartRW = 0;
