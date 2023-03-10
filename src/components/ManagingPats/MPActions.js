import React, { useState, useEffect } from "react";
import db from "../General/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import { BsSearch } from "react-icons/bs";
import MPHeader from "./MPHeader";
import AddPatPopUp from "./AddPatPopUp";
import DelPatPopUp from "./DelPatPopUp";
import EdiPatPopUp from "./EdiPatPopUp";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
  const [edibtnPopup, setEdiBtnPopup] = useState(false);
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
      console.log("undefined");
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
          <MPHeader />
          <div className="scroll">
            {patientsData
              .filter((user) => user.data.name.toLowerCase().includes(query))
              .map(({ id, data }, index) => {
                return (
                  <li key={id}>
                    <span className="flex-containerpat">
                      <div>
                        <span className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
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
                    setEdiBtnPopup(true);
                  }}
                >
                  EDIT
                </button>
                <EdiPatPopUp
                  trigger={edibtnPopup}
                  setTrigger={setEdiBtnPopup}
                  info={edit}
                />
                <button
                  className="aedbtnstyle"
                  disabled={deleteDisabled()}
                  onClick={() => {
                    setDelBtnPopup(true);
                  }}
                >
                  DELETE
                </button>
                <DelPatPopUp
                  trigger={delbtnPopup}
                  setTrigger={setDelBtnPopup}
                  info={idString}
                />
                <button
                  className="aedbtnstyle"
                  // disabled={deleteDisabled()}
                  onClick={() => {
                    setAddBtnPopup(true);
                  }}
                >
                  ADD
                </button>
                <AddPatPopUp
                  trigger={addbtnPopup}
                  setTrigger={setAddBtnPopup}
                />
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
