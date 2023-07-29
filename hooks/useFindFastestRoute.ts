import { getRoute } from 'api/route';
import Coordinates from 'models/Coordinates';
import { useState } from 'react';

const useFindFastestRoute = () => {
  const [data, setData] = useState<GeoJSON.GeoJSON | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const findFastestRoute = async (startPoint: Coordinates, endPoint: Coordinates) => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await getRoute(startPoint, endPoint);
      if (response) setData(response);
      return response;
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
    return undefined;
  };

  return [findFastestRoute, { data, loading, error }] as const;
};

export default useFindFastestRoute;
