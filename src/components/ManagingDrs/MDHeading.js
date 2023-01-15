import * as React from "react";
import styled from "styled-components";
import "../Styles/styles.css";

const MDHeading = () => {
  return (
    <Nav>
      <div className="mdflex-container">
        <li>Select</li>
        <span>Doctor Name</span>
        <div>Office Number</div>
        <div>Pat. List</div>
      </div>
    </Nav>
  );
};

export default MDHeading;

const Nav = styled.nav`
  background: #09369b;
  color: #ffffff;
  font-size: clamp(0.5rem, 2.5vw, 2rem);
  font-weight: bold;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
