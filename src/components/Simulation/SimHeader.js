import * as React from "react";
import styled from "styled-components";
import "../Styles/AlertTableStyle.css";

const MPHeader = () => {
  return (
    <Nav>
      <div className="critflex-container">
        <span> Name</span>
        <p>Age</p>
        <p> Gender </p>
        <p> Bed# </p>
        <span> Time </span>
        <p> Resp Rate </p>
        <p> Sys BP </p>
        <p> Dias BP </p>
        <p> Temp </p>
        <p> Heart Rate </p>
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
