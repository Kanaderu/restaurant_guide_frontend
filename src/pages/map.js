import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../components/Map";
import GeoJsonRestaurants from "../components/GeoJsonRestaurants";

function AboutPage() {
  const [data, setData] = useState(null);

  fetch('https://csd-restaurants.herokuapp.com/geo_restaurants.geojson')
  .then(response => response.json())
  .then(response => setData(response))

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
      <Map center={[-84.1916, 39.7589]} zoom={14}>
        <GeoJsonRestaurants geojson={data} />
      </Map>
    </Layout>
  );
}

export default AboutPage;
