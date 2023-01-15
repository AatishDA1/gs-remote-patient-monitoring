import React, { useState, useEffect } from "react";
import db from "../General/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import SimHeader from "./SimHeader"
//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function CritActions() {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    db.collection("patientsData").onSnapshot((snapshot) => {
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
      <div className="ChangeBtnState">
        <ul className="doctors-list">
         
          <SimHeader />
          <div className="scroll">
            {patientsData
              .map(({ id, data }) => {
                return (
                  <li key={id}>
                    <span className="flex-container">
                      <div>
                        
                      </div>
                      <span>{data.name}</span>
                      <p>{data.age}</p>
                      <p>{data.gender}</p>
                      <p>{data.bedNO}</p>
                      <p>{data.time}</p>
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
          <li>
            <div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}


