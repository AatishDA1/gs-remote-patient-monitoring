import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import db from "../General/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import "../Styles/firebasestyle.css";
import { BsSearch } from "react-icons/bs";
import PSDudpage from "./PSDudPage";
import MPHeader from "../ManagingPats/MPHeader";

export default function PSActions() {
  const [buttonPopup, setButtonPopup] = useState(false);
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

  //AEDButton disabled
  function editDisabled() {
    return indices.length === 0 || indices.length > 1;
  }

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
                    navigate("/PatientDud/");
                  }}
                >
                  VIEW
                </button>
                <PSDudpage
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                  info={edit}
                ></PSDudpage>
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
