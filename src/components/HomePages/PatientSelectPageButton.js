import React from "react";
import "../Styles/Btns.css";
import "../Styles/Grids.css";
import AdminItem from "./PatientItem";
import PatientArchives from "../../Assets/Images/PatientArchives.jpg";
import PatientSelect from "../../Assets/Images/PatientSelect.jpg";

function PatientSelectPage() {
  return (
    
    <div className="smallbutton">
      
          <ul className="btns_items">
            <AdminItem
              src={PatientSelect}
              text="Back"
              label="All Users"
              path="/PatientSelect"
            />
          </ul>
        </div>
  );
}

export default  PatientSelectPage;