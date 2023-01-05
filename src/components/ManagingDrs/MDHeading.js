import * as React from "react";
import styled from "styled-components";
import "../Styles/styles.css";

const MDHeader = () => {
  return (
    <Nav>
      <div className="mdflex-container">
        <li>yo</li>
          <span>Doctor Name</span>
          <div>Office Number</div>
          <div>Pat. List</div>
      </div>
    </Nav>
  );
};

export default MDHeader;

const Nav = styled.nav`
  background: #09369B;
  color: #ffffff;
  font-size: clamp(0.5rem, 2.5vw, 2.0rem);
  font-weight: bold;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align:center;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;