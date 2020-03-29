import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `CantStopDyt`,
          `Dayton Eats`,
          `Contributors`,
          `project details`,
          `COVID-19`
        ]}
        title="About"
      />

      <section className="flex flex-col ">
        <div className=" w-4/5 md:w-1/2 m-auto">
          <h2 className="text-2xl font-bold text-gray-800 py-3">
            About Dayton Eats
          </h2>
          <p className="text-gray-800 leading-loose font-medium">
            Dayton Eats is a guide to allow the community to find information
            about how to order from their favorite local restaurant, bar, and
            coffee during the Stay at Home Order.
          </p>

          <p className="text-gray-800 leading-loose font-medium pt-2">
            Currently, the guide only shows a list of business and how to order
            from them. We are working hard to bring additional features such as:
            <ul className="list-disc pl-6">
              <li>Adding your business to the guide</li>
              <li>
                Various filter options, to help you find businesses faster
              </li>
              <li>A map view</li>
            </ul>
          </p>
          <p className="text-gray-800 leading-loose font-medium pt-2">
            If there are features that you&apos;d find helpful, feel free to
            request them on &nbsp;
            <a
              className="underline font-bold"
              href="https://github.com/CantStopDYT/restaurant_guide_frontend/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
