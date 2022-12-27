import React from "react";
import Navbar from "../General/NavBar"
import Patient1 from "../PatientDisplayTabs/Patient1"
import Patient2 from "../PatientDisplayTabs/Patient2"
import Patient3 from "../PatientDisplayTabs/Patient3"
import Patient4 from "../PatientDisplayTabs/Patient4"
import Patient5 from "../PatientDisplayTabs/Patient5"
import Home from "../PatientDisplayTabs/Home"

function App() {
    let component
    switch(window.location.pathname){
        case "/":
            component = <Home/>
            break
            case "/Patient_1":
                component = <Patient1/>
                break
            case "/Patient_2":
                component = <Patient2/>
                break  
            case "/Patient_3":
                component = <Patient3/>
                break
            case "/Patient_4":
                component = <Patient4/>
                break
            case "/Patient_5":
                component = <Patient5/>
                break
    }
    return (
    <>
        <Navbar/>
        <div className="container">{component}</div>
    </>
    )
}

export default App