import React from 'react';
import "../Styles/NavBarStyle.css"
import { Nav,NavLink,NavMenu } from './NavBarComponents';
import NavBarComponents from './NavBarComponents';
import Simulation from '../Simulation/Simulation';
import AdminBtns from '../HomePages/AdminBtns';
import Patient1 from '../../pages/Patient1';
import Patient2 from '../../pages/Patient2';
import Patient3 from '../../pages/Patient3';
import Patient4 from '../../pages/Patient4';
import Patient5 from '../../pages/Patient5';

export default function Navbar() {
  return (
    <div className='Nav'>
        <div className='Nav_container'>
            <ul className='Home_item'>
            <NavBarComponents
                    src = {AdminBtns}
                    text = "Home"
                    path = "/AdminHome"
                />
               
            </ul>
            <ul className='Nav_items'>
                <NavBarComponents
                    src = {Patient1}
                    text = "Patient 1"
                    path = "/Patient1"
                />
                <NavBarComponents
                    src = {Patient2}
                    text = "Patient 2"
                    path = "/Patient2"
                />
                <NavBarComponents
                    src = {Patient3}
                    text = "Patient 3"
                    path = "/Patient3"
                />
                <NavBarComponents
                    src = {Patient4}
                    text = "Patient 4"
                    path = "/Patient4"
                />
                <NavBarComponents
                    src = {Patient5}
                    text = "Patient 5"
                    path = "/Patient5"
                />
            </ul>
        </div>
    </div>
  );
};



// export default Navbar;

// import React from 'react';

// export default function Navbar() {

//     return (<nav className="nav">
//         <a href="/" className="site-title">Vitals Page</a>
//         <ul>
//             <CustomLink href="/Patient1/" children="Patient 1"/>
//             <CustomLink href="/Patient2/" children="Patient 2"/>
//             <CustomLink href="/Patient3/" children="Patient 3"/>
//             <CustomLink href="/Patient4/" children="Patient 4"/>
//             <CustomLink href="/Patient5/" children="Patient 5"/>
//         </ul>
//     </nav>
//     )
// }
// function CustomLink({ href, children, ...props}) {
//     const path = window.location.pathname
//     return (
//         <li className={path === href ? 'active':''}>
//             <a href={href} {...props}>
//                 {children}
//             </a>
//         </li>
//     )
// }
