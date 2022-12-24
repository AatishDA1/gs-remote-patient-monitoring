import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#09369B" : "#077BF1")};
  padding: ${({ big }) => (big ? "20px 50px" : "10px 32px")};
  border-radius: ${({ round }) => (round ? "60px" : "none")};
  font-size: clamp(0.5rem, 2vw, 2rem);
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
    background: ${({ primary }) => (primary ? "#077BF1" : "#09369B")};
    transform: translateY(-2px);
  }
`;
