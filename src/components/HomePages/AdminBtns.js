import React from "react";
import "../Styles/AdminBtns.css";
import AdminItem from "./AdminItem";
import PatientArchives from "../../Assets/Images/PatientArchives.jpg";
import PatientSelect from "../../Assets/Images/PatientSelect.jpg";
import ManageDoctors from "../../Assets/Images/ManageDoctors.jpg";
import ManagePatients from "../../Assets/Images/ManagePatients.jpg";
import Simulation from "../../Assets/Images/Simulation.jpg";

function AdminBtns() {
  return (
    <div className="btns">
      <h1>Admin Home Page</h1>
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
          <ul className="btns_items">
            <AdminItem
              src={ManageDoctors}
              text="Manage Doctors"
              label="Admin Only"
              path="/ManageDoctors"
            />
            <AdminItem
              src={ManagePatients}
              text="Patient Select"
              label="Admin Only"
              path="/PatientSelect"
            />
            <AdminItem
              src={Simulation}
              text="Simulation"
              label="Admin Only"
              path="/Simulation"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminBtns;
