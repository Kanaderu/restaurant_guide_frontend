import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../components/Map";
import GeoJsonRestaurants from "../components/GeoJsonRestaurants";

function MapPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // TODO: Make this a static fetch during build-time?
    fetch('https://csd-restaurants.herokuapp.com/geo_restaurants.geojson')
    .then(response => response.json())
    .then(response => setData(response))
  }, [])

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
        title="Map"
      />
      <Map center={[-84.1916, 39.7589]} zoom={14}>
        <GeoJsonRestaurants geojson={data} />
      </Map>
    </Layout>
  );
}

export default MapPage;
