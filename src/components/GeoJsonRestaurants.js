import { useEffect } from 'react';
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
      type: 'circle',
      source: 'restaurants-source',
      paint: {
        'circle-color': 'black',
      },
    })

    return () => {
      map.removeLayer('restaurants-layer')
      map.removeSource('restaurants-source')
    }
  }, [map])

  useEffect(() => {
    map.getSource('restaurants-source').setData(props.geojson)
  }, [props.geojson])

  return null
}

export default GeoJsonRestaurants
