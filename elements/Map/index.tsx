// eslint-disable-next-line import/no-unresolved
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { PropsWithChildren, useEffect, useImperativeHandle, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { LayoutProps } from 'styles/layout.types';
import { Markers } from 'hooks/useMarkers';
import { MapRoutes } from 'hooks/useMapRoutes';
import Coordinates from 'models/Coordinates';
import { MapContainer } from './styles';

const MAP_CONTAINER = 'map_container';
const SPAIN: mapboxgl.LngLatLike = [-3, 40.4];

export interface MapProps extends LayoutProps {
  height: number | 'full';
  markers: Markers;
  mapRoutes: MapRoutes;
  onClick?: (coord: Coordinates) => void;
}

export type MapRef = {
  loaded: boolean;
  cleanRoutes: (id: string) => void;
  map: mapboxgl.Map | undefined;
};

const Map = React.forwardRef<MapRef, PropsWithChildren<MapProps>>(
  (
    {
      height = 500,
      markers = {},
      mapRoutes = {},
      onClick = () => null,
      children,
      mdMgl,
      mdMgt,
      lgMgl,
      lgMgt,
      mgl,
      mgt,
      hideOnDesktop,
      hideOnMobile,
      hideOnTablet
    },
    ref
  ) => {
    const mapRef = useRef<mapboxgl.Map>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const token = process.env.MAPBOX_TOKEN;

      if (!token) return;

      mapboxgl.accessToken = token;

      mapRef.current = new mapboxgl.Map({
        container: MAP_CONTAINER,
        style: 'https://cdn.theorca.io/map-assets/style/v7/style.json',
        center: SPAIN,
        zoom: 5,
        maxZoom: 10,
        minZoom: 4
      });

      mapRef.current.on('load', () => {
        setLoaded(true);
      });
    }, []);

    useEffect(() => {
      const map = mapRef.current;

      const clickListener = ({ lngLat }: mapboxgl.MapMouseEvent) => {
        onClick({ lat: lngLat.lat, lng: lngLat.lng });
      };

      if (map && loaded) map.on('click', clickListener);

      return () => {
        if (map && loaded) map.off('click', clickListener);
      };
    }, [loaded, onClick]);

    useEffect(() => {
      const map = mapRef.current;
      if (map && loaded) {
        Object.values(markers).forEach((m) => {
          m.addTo(map);
        });
      }
    }, [loaded, markers]);

    useEffect(() => {
      const map = mapRef.current;
      if (map && loaded) {
        Object.entries(mapRoutes).forEach(([id, { source, layer }]) => {
          if (map.getSource(id)) {
            map.removeLayer(id);
            map.removeSource(id);
          }

          if (!map.getSource(id)) {
            map.addSource(id, { type: 'geojson', data: source });
            map.addLayer(layer);
          }
        });
      }
    }, [loaded, mapRoutes]);

    useImperativeHandle(
      ref,
      () => ({
        loaded,
        cleanRoutes: (id: string) => {
          const map = mapRef.current;
          if (map && loaded) {
            if (map.getSource(id)) {
              map.removeLayer(id);
              map.removeSource(id);
            }
          }
        },
        map: mapRef.current
      }),
      [loaded]
    );

    const layoutProps = {
      mdMgl,
      mdMgt,
      mgl,
      mgt,
      lgMgl,
      lgMgt,
      hideOnDesktop,
      hideOnMobile,
      hideOnTablet
    };

    return (
      <MapContainer id={MAP_CONTAINER} height={height} {...layoutProps}>
        {children}
      </MapContainer>
    );
  }
);

Map.displayName = 'Map';
export default Map;
