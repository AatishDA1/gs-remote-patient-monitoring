import * as React from "react";
import styled from "styled-components";
import GenClock from "./GenClock";

const GenHeader = () => {
  return (
    <Nav>
      <GenClock />
    </Nav>
  );
};

export default GenHeader;

const Nav = styled.nav`
  background: rgba(8, 8, 8, 0.9);
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;
