import React from "react";
import "../Styles/AdminBtns.css";
import AdminItem from "./AdminItem";

function AdminBtns() {
  return (
    <div className="btns">
      <h1>Admin Home Page</h1>
      <div className="btns_container">
        <div className="btns_wrapper">
          <ul className="btns_items">
            <AdminItem
              src="../../Assets/Images/GilbertSolutionsLogo.svg"
              text="Patient Select"
              label="All Users"
              path="/asdasd"
            />
            <AdminItem
              src="https://github.com/AatishDA1/gs-remote-patient-monitoring/blob/master/src/Assets/Images/PatientArchives.jpg"
              text="Patient Archives"
              label="All Users"
              path="/asdasd"
            />
          </ul>
          <ul className="btns_items">
            <AdminItem
              src="../../Assets/Images/GilbertSolutionsLogo.svg"
              text="Patient Select"
              label="Admin Only"
              path="/asdasd"
            />
            <AdminItem
              src="../../Assets/Images/GilbertSolutionsLogo.svg"
              text="Patient Select"
              label="Admin Only"
              path="/asdasd"
            />
            <AdminItem
              src="../../Assets/Images/GilbertSolutionsLogo.svg"
              text="Patient Select"
              label="Admin Only"
              path="/asdasd"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminBtns;
