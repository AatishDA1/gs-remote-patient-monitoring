import * as React from "react";
import styled from "styled-components";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import Header from "../components/Index/Header";

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <h2>404: Not Found</h2>
    <Unlucky>Nothing exists here sadly... maybe next time.</Unlucky>
  </>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

const Unlucky = styled.div`
  text-align: center;
  font-size: clamp(0.5rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  margin-top: 3rem;
  padding: 0 2rem;
  font-weight: bold;
`;
