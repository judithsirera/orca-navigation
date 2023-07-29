import mapboxgl from 'mapbox-gl';
import Coordinates from 'models/Coordinates';
import { ReactElement, useEffect, useState } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

interface MarkerData {
  id: string;
  location: Coordinates;
  onClick?: (e: HTMLElement) => void;
  onMouseEnter?: (e: HTMLElement) => void;
  onMouseLeave?: (e: HTMLElement) => void;
  infowindow?: ReactElement;
  pin: ReactElement;
}

export type Markers = {
  [id: string]: mapboxgl.Marker;
};

const buildMarker = ({
  location,
  onClick,
  onMouseEnter,
  onMouseLeave,
  infowindow,
  pin
}: MarkerData) => {
  const pinElement = document.createElement('div');
  pinElement.innerHTML = renderToStaticMarkup(pin);

  const marker = new mapboxgl.Marker({
    draggable: false,
    element: pinElement
  }).setLngLat([location.lng, location.lat]);

  const element = marker.getElement();
  if (onClick) element.addEventListener('click', () => onClick(element));

  if (onMouseEnter) element.addEventListener('mouseenter', () => onMouseEnter(element));

  if (onMouseLeave) element.addEventListener('mouseLeave', () => onMouseLeave(element));

  if (infowindow) {
    marker.setPopup(new mapboxgl.Popup().setHTML(renderToString(infowindow)));
  }

  return marker;
};

const useMarkers = (defaultCoordinates: MarkerData[] = []) => {
  const [markers, setMarkers] = useState<Markers>({});

  const getDefaultMarkers = () => {
    return defaultCoordinates.reduce<Markers>((acc, data) => {
      const marker = buildMarker(data);
      return { ...acc, [data.id]: marker };
    }, {});
  };

  const addMarker = (data: MarkerData) => {
    setMarkers({ ...markers, [data.id]: buildMarker(data) });
  };

  const addMarkers = (data: MarkerData[] = []) => {
    const m = data.reduce<Markers>((acc, data) => {
      const marker = buildMarker(data);
      return { ...acc, [data.id]: marker };
    }, {});
    setMarkers({ ...markers, ...m });
  };

  const resetMarkers = () => {
    Object.values(markers).forEach((m) => {
      m.remove();
    });
    setMarkers(getDefaultMarkers());
  };

  useEffect(() => {
    setMarkers(getDefaultMarkers());
  }, []);

  return { markers, addMarker, addMarkers, resetMarkers };
};

export default useMarkers;
