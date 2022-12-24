import React from "react";
import "../Styles/Btns.css";
import AdminItem from "./DoctorItem";
import PatientArchives from "../../Assets/Images/PatientArchives.jpg";
import PatientSelect from "../../Assets/Images/PatientSelect.jpg";

function AdminBtns() {
  return (
    <div className="btns">
      <h2>Doctor Home Page</h2>
      <div className="btns_container">
        <div className="btns_wrapper">
          <ul className="btns_items">
            <AdminItem
              src={PatientSelect}
              text="Patient Select"
              label="All Users"
              path="/PatientSelect"
            />
            <AdminItem
              src={PatientArchives}
              text="Patient Archives"
              label="All Users"
              path="/PatientArchives"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminBtns;
