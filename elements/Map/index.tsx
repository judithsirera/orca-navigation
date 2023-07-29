// eslint-disable-next-line import/no-unresolved
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { LayoutProps } from 'styles/layout.types';
import { Markers } from 'hooks/useMarkers';
import { MapContainer } from './styles';

const MAP_CONTAINER = 'map_container';
const SPAIN: mapboxgl.LngLatLike = [-3, 40.4];

export interface MapProps extends LayoutProps {
  height: number | 'full';
  markers: Markers;
}

const Map = ({
  height = 500,
  markers = {},
  mdMgl,
  mdMgt,
  lgMgl,
  lgMgt,
  mgl,
  mgt,
  hideOnDesktop,
  hideOnMobile,
  hideOnTablet
}: MapProps) => {
  const mapRef = useRef<mapboxgl.Map>();

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
  }, []);

  useEffect(() => {
    if (mapRef.current?.loaded()) {
      const map = mapRef.current;
      Object.values(markers).forEach((m) => {
        m.addTo(map);
      });
    }
  }, [markers]);

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

  return <MapContainer id={MAP_CONTAINER} height={height} {...layoutProps} />;
};

export default Map;
