import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../components/Map";
import GeoJsonRestaurants from "../components/GeoJsonRestaurants";

function MapPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // TODO: Make this a static fetch during build-time?
    fetch("https://csd-restaurants.herokuapp.com/locations/?format=json")
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

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

      <div>
        <h2 className="text-lg font-semibold text-gray-800 py-2">
          Map View <sup>(BETA)</sup>
        </h2>
        <p className="pb-2">The current map view is a work in progress</p>

        <Map center={[-84.1916, 39.7589]} zoom={14}>
          <GeoJsonRestaurants geojson={data} />
        </Map>
      </div>
    </Layout>
  );
}

export default MapPage;
