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
      type: 'symbol',
      source: 'restaurants-source',
      layout: {
        'icon-image': 'restaurant-15',
        'icon-allow-overlap': true
      }
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
