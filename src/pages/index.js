import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Restaurants from "../components/Restaurants";

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

      <section className="text-center flex flex-wrap">
        <Restaurants />
      </section>
    </Layout>
  );
}

export default IndexPage;
