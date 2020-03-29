import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <div className="bg-yellow-400 my-8 p-3 rounded-md">
          <p className=" text-xl text-gray-800 font-bold inline-block">
            Oops, this page is not here ...
          </p>
          <p className="text-xl text-gray-800 font-bold inline-block ">
            Checkout the food and drinks on the &nbsp;
            <Link className="underline" to="/">
              home page
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
