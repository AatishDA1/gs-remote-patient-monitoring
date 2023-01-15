import * as React from "react";
import Seo from "../components/General/seo";
import { GlobalStyle } from "../components/Styles/GlobalStyles";
import HPHeader from "../components/HomePages/HPHeader";
import HPFooter from "../components/HomePages/HPFooter";
import AdminBtns from "../components/HomePages/AdminBtns";
import PopupTest from "../components/HomePages/PopupTest";

const AdminHome = () => (
  <>
    <GlobalStyle />
    <HPHeader />
    <Seo title="AdminHome" />
    <AdminBtns />
    <HPFooter />
  </>
);

export default AdminHome;
