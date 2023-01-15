import * as React from "react";
import styled from "styled-components";
import "../Styles/styles.css";

const MPHeader = () => {
  return (
    <Nav>
      <div className="mpflex-container">
        <li>Select</li>
        <span>Patient Name</span>
        <div> Age </div>
        <div> Gender </div>
        <div> Bed #</div>
      </div>
    </Nav>
  );
};

export default MPHeader;

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
