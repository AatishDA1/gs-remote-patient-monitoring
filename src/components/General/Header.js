import * as React from "react";
import styled from "styled-components";
import logo from "../../Assets/Images/GilbertSolutionsLogo.svg";
import Clock from "./Clock";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img
          style={{ width: 90, height: 90 }}
          src={logo}
          alt="GilbertSolutionsLogo"
        />
        GILBERT SOLUTIONS
      </Logo>
      <Clock></Clock>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
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
