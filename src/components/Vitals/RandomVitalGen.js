import React, { useState, useEffect } from "react";

export default function RandomRespRate() {
  const [currentRR, updatedRR] = useState(RandomRespR());
  useEffect(() => {
      setInterval(() => {
      const RR = RandomRespR();
      updatedRR(RR);
      }, 1000);
  }, []);
return (currentRR)}

function RandomRespR() {
  let min = 12;
  let max = 16;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomTempR() {
  let min = 36.5;
  let max = 37.5;
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export function RandomTemp() {
  const [currentTR, updatedTR] = useState(RandomTempR());
  useEffect(() => {
      setInterval(() => {
      const TR = RandomTempR();
      updatedTR(TR);
      }, 1000);
  }, []);
return (currentTR)}

function RandomSysR() {
  let min = 90;
  let max = 120;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomSys() {
  const [currentSR, updatedSR] = useState(RandomSysR());
  useEffect(() => {
      setInterval(() => {
      const SR = RandomSysR();
      updatedSR(SR);
      }, 1000);
  }, []);
return (currentSR)}

function RandomDiasRate() {
  let min = 60;
  let max = 80;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomDias() {
  const [currentDR, updatedDR] = useState(RandomDiasRate());
  useEffect(() => {
      setInterval(() => {
      const DR = RandomDiasRate();
      updatedDR(DR);
      }, 1000);
  }, []);
return (currentDR)}

function RandomHRate() {
  let min = 60;
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHR() {
  const [currentHR, updatedHR] = useState(RandomHRate());
  useEffect(() => {
      setInterval(() => {
      const HR = RandomHRate();
      updatedHR(HR);
      }, 1000);
  }, []);
return (currentHR)}