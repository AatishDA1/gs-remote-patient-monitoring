import * as React from "react";
import styled from "styled-components";
import "./styles.css";

const HPHeader = () => {
  return (
    <Nav>
            <div className="left-section">
                Doctor Name
            </div>
            <div className="right-section">
                Office Number
            </div>
    </Nav>
  );
};

export default HPHeader;

const Nav = styled.nav`
  background: #09369B;
  color: #ffffff;
  font-size: clamp(0.5rem, 2.5vw, 2.5rem);
  font-weight: bold;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align:center;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  width: 60%;
  margin: 0 auto;
`;
