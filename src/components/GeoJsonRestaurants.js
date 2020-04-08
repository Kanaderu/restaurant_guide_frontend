import React, { useEffect } from 'react';
import PropsType from "prop-types";
import mapboxgl from "mapbox-gl";
import { useMap } from './Map';

function GeoJsonRestaurants(props) {
  const map = useMap()

  useEffect(() => {
    map.addSource('restaurants-source', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
    })

    map.addLayer({
      id: 'restaurants-layer',
      type: 'symbol',
      source: 'restaurants-source',
      layout: {
        'icon-image': 'restaurant-15',
        'icon-allow-overlap': true
      }
    })

    map.on('click', 'restaurants-layer', function(e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var restaurant = JSON.parse(e.features[0].properties.restaurant)

      var renderHtml = restaurant.name + '<br/>' +
                       restaurant.status + '<br/>' +
                       restaurant.website_url + '<br/>' +
                       restaurant.menu_url + '<br/>' +
                       restaurant.order_methods

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(renderHtml)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'restaurants-layer', function() {
    map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'restaurants-layer', function() {
    map.getCanvas().style.cursor = '';
    });

    return () => {
      map.removeLayer('restaurants-layer')
      map.removeSource('restaurants-source')
    }
  }, [map])

  useEffect(() => {
    map.getSource('restaurants-source').setData(props.geojson)
  }, [props.geojson])

  return (
    <div className="map-overlay top">
        <div className="map-overlay-inner">
            <fieldset>
                <label htmlFor="map-search">Search Restaurant</label>
                <input type="text" placeholder="Name"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="map-filter">Filters</label>
                  <input type="checkbox" value="carry-out" /> Carry-Out<br/>
                  <input type="checkbox" value="delivery" /> Delivery<br/>
                  <div id="swatches"></div>
            </fieldset>
        </div>
    </div>
  );
}

GeoJsonRestaurants.propTypes = {
  geojson: PropsType.node
};

export default GeoJsonRestaurants
