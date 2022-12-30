import * as React from "react";
import styled from "styled-components";
import GenClock from "./GenClock";
import { NavButton } from "./NavBtn";
import "../ManagingDrs/styles.css";
import { LOButton } from "../HomePages/LOButton";
import {FaHome} from "react-icons/fa";
import {RiArrowGoBackFill} from "react-icons/ri"
import { navigate } from "@gatsbyjs/reach-router";



const GenHeader = () => {
  
  return (
    <Nav>
      <div className="left-section">
        <NavButton primary round to="/AdminHome">
          <FaHome/>
        </NavButton>
        <button onClick={() => navigate(-1)}>
          <RiArrowGoBackFill/>
        </button>
      </div>
      <div className="center-section">
        <GenClock />
      </div>
      <div className="right-section">
        <LOButton primary round to="/">
          Logout
        </LOButton>
      </div>
    </Nav>
  );
};

export default GenHeader;

const Nav = styled.nav`
  background: rgba(8, 8, 8, 0.9);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  text-align: center;
`;
