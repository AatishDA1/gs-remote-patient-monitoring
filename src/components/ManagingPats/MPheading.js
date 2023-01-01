import * as React from "react";
import styled from "styled-components";
import "../ManagingDrs/styles.css";

const MPHeader = () => {
  return (
    <div>
        <Nav>
                <div className="left-section">
                    Patient Name
                </div>
                <div className="center-section">
                    Room
                </div>
                <div className="right-section">
                    Assigned Doctor
                </div>
        </Nav>
    </div>
  );
};

export default MPHeader;

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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  width: 60%;
  margin: 0 auto;
`;
