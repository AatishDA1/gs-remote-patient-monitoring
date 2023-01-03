import React from "react";
import { Link } from "gatsby";

/* Reference 4 - taken from https://github.com/briancodex/react-website-v1/blob/master/src/components/CardItem.js*/

function PatientItem(props) {
  return (
    <>
      <li className="btns_item">
        <Link className="btns_link" to={props.path}>
          <div className="btns_info">
            <h5 className="btns_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PatientItem;

/* End of Reference 4 */
