import React from "react";
import "../Styles/Btns.css";
import "../Styles/Grids.css";
import AdminItem from "./PatientItem";
//import PatientArchives from "../../Assets/Images/PatientArchives.jpg";
import PatientSelect from "../../Assets/Images/PatientSelect.jpg";

function PatientAddButton() {
  return (
    <div className="smallbutton">
          <ul className="btns_items">
            <AdminItem
              src={PatientSelect}
              text="Add"
              label="All Users"
              path="/PatientAdd"
            />
          </ul>
        </div>
  );
}

export default  PatientAddButton;