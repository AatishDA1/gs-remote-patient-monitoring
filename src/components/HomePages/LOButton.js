import styled from "styled-components";
import { Link } from "gatsby";

export const LOButton = styled(Link)`
  background: ${({ primary }) => (primary ? "#6C0000" : "#A40000")};
  padding: ${({ big }) => (big ? "20px 50px" : "10px 32px")};
  font-size: ${({ big }) => (big ? "20px" : "12px")};
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  color: #fff;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 100px;

  &:hover {
    background: ${({ primary }) => (primary ? "#A40000" : "#6C0000")};
    transform: translateY(-2px);
  }
`;
