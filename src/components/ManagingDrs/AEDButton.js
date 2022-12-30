import styled from "styled-components";
import { Link } from "gatsby";

export const AEDButton = styled(Link)`
  background: ${({ primary }) => (primary ? "#09369B" : "#077BF1")};
  padding: ${({ big }) => (big ? "20px 50px" : "10px 32px")};
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  color: #fff;
  font-size: clamp(0.5rem, 2.5vw, 2.5rem);
  white-space: nowrap;
  outline: none;
  border: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 100px;

  &[disabled] {
    color: #A9A9A9;
    opacity: 0.7;
    cursor: default;
  }

  &:hover, &:active {
    &:not([disabled]){
        background: ${({ primary }) => (primary ? "#077BF1" : "#09369B")};
        transform: translateY(-2px);
    }
  }
`;
