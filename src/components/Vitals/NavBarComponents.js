import React from "react";
import { Link } from "gatsby";

function NavBarComponents(props){
    return(
        <>
            <li className="Nav_item">
                <Link className="Nav_link" to = {props.path}>
                    <h3 className="Nav_text">{props.text}</h3>
                </Link>
            </li>
        </>
    )
}

export default NavBarComponents;