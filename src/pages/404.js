/*Reference 1 -  taken from https://github.com/gatsbyjs/gatsby-starter-default/tree/master/src */
import * as React from "react";

import Layout from "../components/General/Layout";
import Seo from "../components/General/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesnt exist... the sadness.</p>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
/* End of Reference 1 */
