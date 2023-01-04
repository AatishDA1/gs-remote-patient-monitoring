import React from "react";
import "../Styles/Btns.css";
import "../Styles/Grids.css";
import AdminItem from "./PatientItem";

import PatientSelect from "../../Assets/Images/PatientSelect.jpg";

function DoctorManagePage() {
  return (
    
    <div className="smallbutton">
      
          <ul className="btns_items">
            <AdminItem
              src={PatientSelect}
              text="Back"
              label="All Users"
              path="/DoctorManage"
            />
          </ul>
        </div>
  );
}

export default  DoctorManagePage;