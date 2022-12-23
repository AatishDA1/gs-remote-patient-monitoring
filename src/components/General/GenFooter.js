import * as React from "react";
import styled from "styled-components";
import logo from "../../Assets/Images/GilbertSolutionsLogo.svg";

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
    </Foot>
  );
};

export default HPFooter;

const Foot = styled.nav`
  background: rgba(8, 8, 8, 0.9);
  padding: 1rem calc((100vw - 1300px) / 2) 30rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
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
  letter-spacing: 3px;
  font-weight: bold;
  font-style: italic;
  padding: 0 1rem;
`;

