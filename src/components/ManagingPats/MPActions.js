import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import { BsSearch } from "react-icons/bs";
import MPHeading from "./MPHeading";
import APatPopUp from "./APatPopUp";
import DPatPopUp from "./DPatPopUp";
import MPatPopUp from "./MPatPopUp";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [delbtnPopup, setDelBtnPopup] = useState(false);
  const [addbtnPopup, setAddBtnPopup] = useState(false);
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

  // checkbox
  const [checkedState, setCheckedState] = useState(
    Array(patientsData.length).fill(false)
  );

  useEffect(() => {
    setCheckedState(new Array(patientsData.length).fill(false));
  }, [patientsData]);

  const indices = checkedState.reduce(
    (out, bool, index) => (bool ? out.concat(index) : out),
    []
  );
  const [idList, setIdList] = useState([]);
  const [idString, setIdString] = useState([]);
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    if (patientsData === undefined) {
      console.log("undefineddd");
    } else {
      const list = [];
      const listID = [];
      if (indices.length === 0) {
      } else {
        for (const indx of indices) {
          console.log(patientsData[indx]);
          list.push(patientsData[indx]);
          listID.push(patientsData[indx].id);
        }
      }
      setIdList(list);
      setIdString(listID);
    }
  }, [checkedState]);

  useEffect(() => {
    if (idList.length === 1) {
      for (const data of idList) {
        console.log(data);
        setEdit(data);
      }
    }
  });

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  //AEDButton disabled
  function editDisabled() {
    return indices.length === 0 || indices.length > 1;
  }
  function deleteDisabled() {
    return indices.length === 0;
  }

  //search
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="ChangeBtnState">
        <ul className="doctors-list">
          <form className="search">
            <input
              type="text"
              placeholder="search patient name..."
              className="search__input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search__button">
              <BsSearch />
            </button>
          </form>
          <MPHeading />
          <div className="scroll">
            {patientsData
              .filter((user) => user.data.name.toLowerCase().includes(query))
              .map(({ id, data }, index) => {
                return (
                  <li key={id}>
                    <span className="flex-container">
                      <div>
                        <span className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            cbid={`custom-checkbox-${index}`}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                            className={checkedState ? "checked" : ""}
                          />
                        </span>
                      </div>
                      <span>{data.name}</span>
                      <p>{data.age}</p>
                      <p>{data.gender}</p>
                      <p>{data.bedNO}</p>
                    </span>
                  </li>
                );
              })}
          </div>
          <li>
            <div>
              <AEDBtn>
                <button
                  className="aedbtnstyle"
                  disabled={editDisabled()}
                  onClick={() => {
                    setButtonPopup(true);
                  }}
                >
                  EDIT
                </button>
                <MPatPopUp
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                  info={edit}
                ></MPatPopUp>
                <button
                  className="aedbtnstyle"
                  disabled={deleteDisabled()}
                  onClick={() => {
                    setDelBtnPopup(true);
                  }}
                >
                  DELETE
                </button>
                <DPatPopUp
                  trigger={delbtnPopup}
                  setTrigger={setDelBtnPopup}
                  info={idString}
                ></DPatPopUp>
                <button
                  className="aedbtnstyle"
                  // disabled={deleteDisabled()}
                  onClick={() => {
                    setAddBtnPopup(true);
                  }}
                >
                  ADD
                </button>
                <APatPopUp
                  trigger={addbtnPopup}
                  setTrigger={setAddBtnPopup}
                ></APatPopUp>
              </AEDBtn>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

const AEDBtn = styled.div`
  margin: 5px;
  margin-right: 5px;
`;

// const Listbox = styled.nav`
//   background: #A9A9A9;
//   color: rgb(0,0,0);
//   font-weight: bold;
//   display: inline;
//   justify-content: space-between;
//   text-align:left;
//   position: relative;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 3.2rem;
//   padding-right: 3.2rem;
//   width: 100px;
//   margin: 0 auto;
// `;
