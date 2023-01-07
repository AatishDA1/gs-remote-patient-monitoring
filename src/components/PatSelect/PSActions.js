import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import db from "../../pages/firebase";
import styled from "styled-components";
import "../Styles/styles.css";
import "../Styles/firebasestyle.css";
import { BsSearch } from "react-icons/Bs";
import MPHeader from "../ManagingPats/MPheading";
import PSDudpage from "../../pages/PSDudPage";
import PatientDud from "../../pages/PatientDud";

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

    
//   const [readData, setreadData] = useState("");
//   const [getName, setGetName] = useState("");
//   const [getResp, setGetResp] = useState("");
//   const [getHR, setGetHR] = useState("");
//   const [getSys, setGetSys] = useState("");
//   const [getDia, setGetDia] = useState("");
//   const [getTemp, setGetTemp] = useState("");

//   const getData = (e) => {
//     e.preventDefault();
//     const please = db.collection("patientsData").doc(readData);

//     const doc = please.get({
//       name: getName,
//       resp: getResp,
//       temp: getTemp,
//       sys: getSys,
//       dia: getDia,
//       hr: getHR,
//     });

//     if (!doc.exists) {
//       <>'No such document!'</>;
//     } else {
//       setGetName(doc.name);
//       setGetResp(doc.resp);
//       setGetTemp(doc.temp);
//       setGetSys(doc.sys);
//       setGetDia(doc.dia);
//       setGetHR(doc.hr);
//       setreadData("");
//     }
//   };

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
                      navigate("/PatientDud/")
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
// export default PatientSelect;
      {/* <div className="App">
        {!readData ? (
          <div>
            <button
              className="aedbtnstyle"
              onClick={() => {
                setAddBtnPopup(true);
              }}
            >
              ADD
            </button>
            <APpopup
              trigger={addbtnPopup}
              setTrigger={setAddBtnPopup}
            ></APpopup>
          </div>
        ) : (
          PLOT GRAPHS UNDER HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          <div className="App__Updateform">
            <h2>Patient Vitals</h2>
            <button onClick={getData}>fetch</button>
            Name : {getName}
            Resp : {getResp}
            Temp : {getTemp}
            Sys : {getSys}
            Dia : {getDia}
            HR : {getHR}
          </div>
        )}

        <div className="App__DataDisplay">
          <table>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>BED NUMBER</th>
              <th>View Details</th>
              <th>Select</th>
            </tr>

            {patientsData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.bedNO}</td>
                <td>
                  <>
                    <button
                      onClick={() => {
                        setreadData(id);
                        setGetName(data.name);
                        setGetResp(data.resp);
                        setGetTemp(data.temp);
                        setGetSys(data.sys);
                        setGetDia(data.dia);
                        setGetHR(data.hr);
                      }}
                    >
                      {" "}
                      View Details{" "}
                    </button>
                  </>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div> */}
  //   </>
  // );
// }

// export default PatientSelect;


const AEDBtn = styled.div`
  margin: 5px;
  margin-right: 5px;
`;


// export default function PatientName() {
// const [patProps, setPatProps] = useState(props.info);
// const [patName, setPatName] = useState("")
// useEffect(() => {
//     props.info === undefined
//       ? console.log("props notdefined")
//       : setPatProps(props.info);
//   });

//   useEffect(() => {
//     if (patProps.data === undefined) {
//       console.log("pat not defined");
//     } else {
//       setPatName(patProps.data.name)
//     }
//   }, [patProps]);
//   return(patName)
// }