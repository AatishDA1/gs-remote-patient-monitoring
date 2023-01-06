import React, { useState, useEffect } from "react";
import db from "../../pages/firebase";
// import "../Styles/firebasestyle.css";
import "../Styles/styles.css";
import "../Styles/Popup.css";

function MDpopup(props) {
  const [updatedDoctorName, setUpdatedDoctorName] = useState("");
  const [updatedDoctorOffice, setUpdatedDoctorOffice] = useState("");
  const [updatedPatientList, setUpdatedPatientList] = useState([]);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  const [docProps, setDocProps] = useState(props.info);

  useEffect(() => {
    props.info === undefined
      ? console.log("props notdefined")
      : setDocProps(props.info);
  });

  useEffect(() => {
    if (docProps.data === undefined) {
      console.log("pat not defined");
    } else {
      setDataIdToBeUpdated(docProps.id);
      setUpdatedDoctorName(docProps.data.name);
      setUpdatedDoctorOffice(docProps.data.office);
      setUpdatedPatientList(docProps.data.patientList);
    }
  }, [docProps]);

  const updateData = (e) => {
    db.collection("DoctorsData").doc(dataIdToBeUpdated).update({
      name: updatedDoctorName,
      office: updatedDoctorOffice,
      patientList: updatedPatientList,
    });

    setUpdatedDoctorOffice("");
    setUpdatedDoctorName("");
    setUpdatedPatientList([]);
    setDataIdToBeUpdated("");
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-addpersonnel">
        <div className="App">
          {!dataIdToBeUpdated ? (
            <div>
              ERROR
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                BACK
              </button>
            </div>
          ) : (
            <div>
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                BACK
              </button>
              <div className="App__Updateform">
                <input
                  type="text"
                  placeholder="Name"
                  value={updatedDoctorName}
                  onChange={(e) => setUpdatedDoctorName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Office #"
                  value={updatedDoctorOffice}
                  onChange={(e) => setUpdatedDoctorOffice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Pat. List"
                  value={updatedPatientList}
                  onChange={(e) => setUpdatedPatientList(e.target.value)}
                />
              </div>
              <button className="aedbtnstyle" onClick={updateData}>
                UPDATE
              </button>
              <button
                className="aedbtnstyle"
                onClick={() => props.setTrigger(false)}
              >
                CANCEL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MDpopup;
