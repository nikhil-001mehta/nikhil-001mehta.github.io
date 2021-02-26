import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
export default function Portfolio() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Portfolio`} description={siteConfig.tagline}>
      <main>{/* <Box position={[0, 0, 0]} /> */}</main>
    </Layout>
  );
}
