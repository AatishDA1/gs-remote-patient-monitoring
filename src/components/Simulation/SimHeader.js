import * as React from "react";
import styled from "styled-components";
import "../Styles/styles.css";

const MPHeader = () => {
  return (
    <Nav>
      <div className="mpflex-container">
        <li> Name</li>
        <span>Age</span>
        <div> Gender </div>
        <div> Bed # </div>
        <div> Time </div>
        <div> Resp Rate </div>
        <div> Sys BP </div>
        <div> Dias BP </div>
        <div> Temp </div>
        <div> Heart Rate </div>
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
