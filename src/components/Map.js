import React, { useState, useRef, useEffect, createContext, useContext }  from 'react';
import mapboxgl from 'mapbox-gl';
import PropsType from 'prop-types';
import '../css/map.css';

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_TOKEN;

const MapContext = createContext(undefined);

const Map = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: props.center,
      zoom: props.zoom
    });

    map.on('load', () => {
      map.resize();
      setMap(map);
    });
  }, []);

  return (
    <div ref={mapContainer} className='map'>
      {map != null &&
        <MapContext.Provider value={map}> {props.children} </MapContext.Provider>
      }
    </div>
  );
};

Map.propTypes = {
  children: PropsType.node,
  center: PropsType.array,
  zoom: PropsType.number
};

export default Map;
export const useMap = () => useContext(MapContext);
