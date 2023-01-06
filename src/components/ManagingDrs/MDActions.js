import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import { BsSearch } from "react-icons/Bs";
import MDHeader from "./MDheading";
import ADpopup from "./ADocPopUp";
import MDpopup from "./MDocPopUp";
import DDpopup from "./DDocPopUp";

//reference from    https://stackoverflow.com/questions/70051729/how-to-disable-a-button-if-more-than-once-check-box-is-checked-in-react-js
//                  https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
//                  https://blog.logrocket.com/building-custom-checkbox-react/

export default function MPActions() {
  const [edtbtnPopup, setEdtBtnPopup] = useState(false);
  const [delbtnPopup, setDelBtnPopup] = useState(false);
  const [addbtnPopup, setAddBtnPopup] = useState(false);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    db.collection("DoctorsData").onSnapshot((snapshot) => {
      setDoctorsData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // checkbox
  const [checkedState, setCheckedState] = useState(
    Array(doctorsData.length).fill(false)
  );

  useEffect(() => {
    setCheckedState(new Array(doctorsData.length).fill(false));
  }, [doctorsData]);

  const indices = checkedState.reduce(
    (out, bool, index) => (bool ? out.concat(index) : out),
    []
  );
  const [idList, setIdList] = useState([]);
  const [idString, setIdString] = useState([]);
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    if (doctorsData === undefined) {
      console.log("undefineddd");
    } else {
      const list = [];
      const listID = [];
      if (indices.length === 0) {
      } else {
        for (const indx of indices) {
          console.log(doctorsData[indx]);
          list.push(doctorsData[indx]);
          listID.push(doctorsData[indx].id);
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
              placeholder="search doctor name..."
              className="search__input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search__button">
              <BsSearch />
            </button>
          </form>
          <MDHeader />
          <div className="scroll">
            {doctorsData
              .filter((user) => user.data.name.toLowerCase().includes(query))
              .map(({ id, data }, index) => {
                return (
                  <li key={id}>
                    <span className="flex-containerdr">
                      <div>
                        <span className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            id={"custom-checkbox-{index}"}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                            className={checkedState ? "checked" : ""}
                          />
                        </span>
                      </div>
                      <span>{data.name}</span>
                      <p>{data.office}</p>
                      <p>view (patlist)</p>
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
                    setEdtBtnPopup(true);
                  }}
                >
                  EDIT
                </button>
                <MDpopup
                  trigger={edtbtnPopup}
                  setTrigger={setEdtBtnPopup}
                  info={edit}
                ></MDpopup>
                <button
                  className="aedbtnstyle"
                  disabled={deleteDisabled()}
                  onClick={() => {
                    setDelBtnPopup(true);
                  }}
                >
                  DELETE
                </button>
                <DDpopup
                  trigger={delbtnPopup}
                  setTrigger={setDelBtnPopup}
                  info={idString}
                ></DDpopup>
                <button
                  className="aedbtnstyle"
                  // disabled={deleteDisabled()}
                  onClick={() => {
                    setAddBtnPopup(true);
                  }}
                >
                  ADD
                </button>
                <ADpopup
                  trigger={addbtnPopup}
                  setTrigger={setAddBtnPopup}
                ></ADpopup>
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
