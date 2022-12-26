import Navbar from "./NavBar"
import CenteredGrid from "./pages/Patient1Vitals"
import Patient2 from "./pages/Patient2"
import Patient3 from "./pages/Patient3"
import Patient4 from "./pages/Patient4"
import Patient5 from "./pages/Patient5"
import Patient1Graph from "./pages/Patient1Graph"
import Home from "./pages/Home"

function App() {
    let component
    let graph
    switch(window.location.pathname){
        case "/":
            component = <Home/>
            break
            case "/Patient_1":
                component = <CenteredGrid/>
                graph = <Patient1Graph/>
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
        <div className="graph">{graph}</div>
    </>
    )
}

export default App