import React from "react";
import "../Styles/Btns.css";
import "../Styles/Grids.css";
import AdminItem from "./DoctorItem";
import PatientSelect from "../../Assets/Images/PatientSelect.jpg";

function DoctorAddButton() {
  return (
    
    <div className="smallbutton">
      
          <ul className="btns_items">
            <AdminItem
              src={PatientSelect}
              text="Add"
              label="All Users"
              path="/DoctorAdd"
            />
          </ul>
        </div>
  );
}

export default  DoctorAddButton;