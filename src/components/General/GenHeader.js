import * as React from "react";
import styled from "styled-components";
import GenClock from "./GenClock";
import { NavButton } from "./NavBtn";
import { LOButton } from "../HomePages/LOButton";
import {FaHome} from "react-icons/fa";
import {RiArrowGoBackFill} from "react-icons/ri"
import { navigate } from "@gatsbyjs/reach-router";
import "../Styles/styles.css";


const GenHeader = () => {
  
  return (
    <Nav>
      <div className="left-section">
        <NavButton primary round to="/AdminHome">
          <FaHome/>
        </NavButton>
        {/* reference: https://www.appsloveworld.com/reactjs/100/16/how-do-i-go-to-previous-page-in-gatsby-history-goback */}
        <button className="btnstyle" onClick={() => navigate(-1)}>
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
  background: #1f1f1f;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  text-align: center;
`;
