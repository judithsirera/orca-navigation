import Map, { MapRef } from 'elements/Map';
import DefaultPin from 'elements/Map/pins/DefaultPin';
import useFindFastestRoute from 'hooks/useFindFastestRoute';
import useMapRoutes from 'hooks/useMapRoutes';
import useMarkers from 'hooks/useMarkers';
import Coordinates from 'models/Coordinates';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import Paragraph from 'elements/typograhpy/Paragraph';
import { RoutePlanningMapContainer, LoaderContainer, InfoCard } from './styles';

enum IDS {
  startPoint = 'startPoint',
  endPoint = 'endPoint',
  route = 'route'
}

const RoutePlanningMap: React.FC<Record<string, never>> = () => {
  const [findFastestRoute, { loading, error }] = useFindFastestRoute();
  const [routePoints, setRoutePoints] = useState<{
    startPoint?: Coordinates;
    endPoint?: Coordinates;
  }>({});
  const { mapRoutes, addMapRoute } = useMapRoutes();
  const { markers, addMarker, removeMarker } = useMarkers();
  const mapRef = useRef<MapRef | null>(null);
  const { colors } = useTheme();

  const cleanMap = () => {
    // Reset markers
    removeMarker(IDS.startPoint);
    removeMarker(IDS.endPoint);

    mapRef.current?.cleanRoutes(IDS.route);
  };

  const handleClickMap = (coordinates: Coordinates) => {
    if (loading) return;

    if (routePoints.startPoint && !routePoints.endPoint) {
      setRoutePoints({ startPoint: routePoints.startPoint, endPoint: coordinates });
      addMarker({
        id: IDS.endPoint,
        coordinates,
        pin: <DefaultPin color={colors.violet} />
      });
    } else {
      cleanMap();

      setRoutePoints({ startPoint: coordinates, endPoint: undefined });

      addMarker({
        id: IDS.startPoint,
        coordinates,
        pin: <DefaultPin color={colors.yellow} />
      });
    }
  };

  const handleFetchRoute = useCallback(async () => {
    if (routePoints.startPoint && routePoints.endPoint) {
      const data = await findFastestRoute(routePoints.startPoint, routePoints.endPoint);
      if (data) addMapRoute({ id: IDS.route, data, color: colors.black });
    }
  }, [routePoints]);

  const getInstructions = () => {
    if (loading) return 'Loading...';
    if (error) return 'An error has ocurred, please try again';
    if (!routePoints.startPoint) return 'Click on the map to select a starting point';
    if (!routePoints.endPoint) return 'Click on the map to select an ending point';
    return 'Select a starting point to create a new route';
  };

  useEffect(() => {
    handleFetchRoute();
  }, [handleFetchRoute]);

  useEffect(() => {
    if (error) {
      cleanMap();
      setRoutePoints({});
    }
  }, [error]);

  return (
    <RoutePlanningMapContainer>
      <Map
        ref={mapRef}
        height="full"
        markers={markers}
        mapRoutes={mapRoutes}
        onClick={handleClickMap}
      />
      {loading && <LoaderContainer />}
      <InfoCard>
        <Paragraph color={error ? colors.red : colors.black}>{getInstructions()}</Paragraph>
      </InfoCard>
    </RoutePlanningMapContainer>
  );
};

export default RoutePlanningMap;
