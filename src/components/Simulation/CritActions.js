import React, { useState, useEffect } from "react";
import db from "../General/firebase";
import styled from "styled-components";
import "../Styles/AlertTableStyle.css";
import SimHeader from "./SimHeader"
//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function CritActions() {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    db.collection("simAlertData").onSnapshot((snapshot) => {
      setPatientsData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  

  return (
    <>
      <div className="CritStyle">
        <ul className="personnel-list">
          <SimHeader />
          <div className="scroll">
            {patientsData
              .map(({ id, data }) => {
                return (
                  <li key={id}>
                    <span className="flex-container">
                      <span>{data.name}</span>
                      <p>{data.age}</p>
                      <p>{data.gender}</p>
                      <p>{data.bedNO}</p>
                      <span>{data.time}</span>
                      <p>{data.resp}</p>
                      <p>{data.sys}</p>
                      <p>{data.dia}</p>
                      <p>{data.temp}</p>
                      <p>{data.hr}</p>
                    </span>
                  </li>
                );
              })}
          </div>
        </ul>
      </div>
    </>
  );
}


