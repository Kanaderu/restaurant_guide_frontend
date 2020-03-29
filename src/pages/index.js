import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Restaurant from "../components/Restaurant";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `Dayton`,
          `Local Restaurants`,
          `Ordering Guide`,
          `Food`,
          `Brewery`
        ]}
        title="Food & Drinks Guide"
      />

      <section className="text-center flex flex-col sm:flex-row">
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </section>
    </Layout>
  );
}

export default IndexPage;
