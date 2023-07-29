import mapboxgl from 'mapbox-gl';

import { useEffect, useState } from 'react';
import { Color } from 'styles/theme/theme.types';

interface MapRouteData {
  id: string;
  data: GeoJSON.FeatureCollection;
  color: Color;
}

export type MapRoutes = {
  [id: string]: { source: GeoJSON.FeatureCollection; layer: mapboxgl.LineLayer };
};

const buildMapRoute = ({ id, data, color }: MapRouteData) => {
  const layer: mapboxgl.LineLayer = {
    id,
    type: 'line',
    source: id,
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': color,
      'line-width': 3
    }
  };

  return { source: data, layer };
};

const useMapRoutes = (defaultRoutes: MapRouteData[] = []) => {
  const [mapRoutes, setMapRoutes] = useState<MapRoutes>({});

  const getDefaultMapRoutes = () => {
    return defaultRoutes.reduce<MapRoutes>((acc, data) => {
      return { ...acc, [data.id]: buildMapRoute(data) };
    }, {});
  };

  const addMapRoute = (data: MapRouteData) => {
    setMapRoutes({ ...mapRoutes, [data.id]: buildMapRoute(data) });
  };

  const addMapRoutes = (data: MapRouteData[] = []) => {
    const r = data.reduce<MapRoutes>((acc, item) => {
      return { ...acc, [item.id]: buildMapRoute(item) };
    }, {});
    setMapRoutes({ ...mapRoutes, ...r });
  };

  useEffect(() => {
    setMapRoutes(getDefaultMapRoutes());
  }, []);

  return { mapRoutes, addMapRoute, addMapRoutes };
};

export default useMapRoutes;
