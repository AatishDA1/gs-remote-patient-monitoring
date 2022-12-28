import React, { useEffect, useState } from "react";

export default function RandomRespRate(){
    let min = 12
    let max = 16
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function RandomTemp(){
    let min = 36.5
    let max = 37.5
    return Math.round((Math.random() * (max - min )  + min) * 10)/10 ;
}

export function RandomSys(){
    let min = 90
    let max = 120
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function RandomDias(){
    let min = 60
    let max = 80
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function RandomHR(){
    let min = 60
    let max = 100
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

