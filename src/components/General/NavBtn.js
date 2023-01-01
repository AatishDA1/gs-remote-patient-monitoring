import styled from "styled-components";
import { Link } from "gatsby";



export const NavButton = styled(Link)`
  background-color: ${({ primary }) => (primary ? "#1f1f1f" : "#b4b4b4")};
  padding: ${({ big }) => (big ? "20px 20px" : "10px 15px")};
  border-radius: ${({ round }) => (round ? "40px" : "none")};
  color: #fff;
  font-size: clamp(0.5rem, 2.5vw, 2.0rem);
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 100px;
  text-align: center;

  &:hover {
    background: ${({ primary }) => (primary ? "#b4b4b4" : "#1f1f1f")};
    transform: translateY(-2px);
  }
`;
