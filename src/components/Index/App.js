import React from "react";
import Navbar from "../General/NavBar"
import Patient1 from "../PatientDisplayTabs/Patient1"
import Patient2 from "../../pages/Patient2"
import Patient3 from "../../pages/Patient3"
import Patient4 from "../../pages/Patient4"
import Patient5 from "../../pages/Patient5"
import Home from "../PatientDisplayTabs/Home"

function App() {
    let component
    switch(window.location.pathname){
        case "/":
            component = <Home/>
            break
            case "/Patient1":
                component = <Patient1/>
                break
            case "/Patient2":
                component = <Patient2/>
                break  
            case "/Patient3":
                component = <Patient3/>
                break
            case "/Patient4":
                component = <Patient4/>
                break
            case "/Patient5":
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