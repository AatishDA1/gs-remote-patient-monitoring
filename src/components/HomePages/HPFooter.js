import * as React from "react";
import styled from "styled-components";
import logo from "../../Assets/Images/GilbertSolutionsLogo.svg";
import { LOButton } from "./LOButton";

const HPFooter = () => {
  return (
    <Foot>
      <Logo>
        <img
          style={{ width: 90, height: 90 }}
          src={logo}
          alt="GilbertSolutionsLogo"
        />
        GILBERT SOLUTIONS
      </Logo>
      <LOBtn>
        <LOButton primary="true" big="true" round="true" to="/index">
          Logout
        </LOButton>
      </LOBtn>
    </Foot>
  );
};

export default HPFooter;

const Foot = styled.nav`
  background: rgba(8, 8, 8, 0.9);
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 100;
  position: relative;
`;

const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  font-style: italic;
  padding: 0 1rem;
`;

const LOBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-weight: bold;
`;
