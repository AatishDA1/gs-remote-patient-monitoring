import React, { useEffect, useState } from "react";
import db from "../General/firebase";
import RandomRespRate, {RandomDias, RandomHR, RandomSys, RandomTemp} from "./SimDataNorm";


export default function AddSimData(props) {
    const [time, setTime] = useState([]);
    const [respRate, setRespRate] = useState([]);
    const [temp, setTemp] = useState([]);
    const [sysPressure, setSysPressure] = useState([]);
    const [diaPressure, setDiaPressure] = useState([]);
    const [HR, setHR] = useState([]);
    const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
    const [patProps, setPatProps] = useState(props.info);

    setPatProps(props.info)

    // this is likely where the error is coming from cuz i want to update it to the database on and on 
    // but i tried to limit the length so it doesn't go on forever
    // but it seems like the length is not changing 
    
    console.log('length is '+ respRate.length)
    useEffect(() => {
        if (respRate.length < 100000) {
        respRate.push(RandomRespRate())
        temp.push(RandomTemp())
        sysPressure.push(RandomSys())
        diaPressure.push(RandomDias())
        HR.push(RandomHR())} 
        else {
            console.log('too long')
        }
    },[])
    
    
    const submit = (e) => {
        e.preventDefault();
        setDataIdToBeUpdated(patProps.id)
        console.log(dataIdToBeUpdated)
        db.collection("patientsData").ref(dataIdToBeUpdated).update({
          time: time,
          resp: respRate,
          temp: temp,
          sys: sysPressure,
          dia: diaPressure,
          hr: HR,
        });
        setTime([]);
        setRespRate([]);
        setTemp([]);
        setSysPressure([]);
        setDiaPressure([]);
        setHR([]);
        
      };
    
}