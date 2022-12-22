import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#09369B" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 50px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "24px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "60px" : "none")};
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#09369B")};
    transform: translateY(-2px);
  }
`;
