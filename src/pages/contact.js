import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`Contact`, `Dayton Eats`]} title="Contact" />
      <section className="flex, flex-col">
        <div className=" w-4/5 md:w-1/2 m-auto">
          <h2 className="text-2xl font-bold text-gray-800 py-4">
            Contact Dayton Eats
          </h2>
          <p className="text-gray-800 leading-loose font-medium">
            There are several ways to get in contact with Dayton Eats:
            <ul className="list-disc pl-6">
              <li>
                For feature requests use &nbsp;
                <a
                  className="underline font-bold"
                  href="https://github.com/CantStopDYT/restaurant_guide_frontend/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                Join the discussion and collaboration on &nbsp;
                <a
                  className="underline font-bold"
                  href="https://cantstopdyt.slack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Slack
                </a>
              </li>
              <li>
                CanStopDyt on &nbsp;
                <a
                  className="underline font-bold"
                  href="https://twitter.com/cantstopdyt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                Front-end dev Romeo K. on &nbsp;
                <a
                  className="underline font-bold"
                  href="https://twitter.com/kwiromeo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>Back-end dev David F.</li>
            </ul>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
