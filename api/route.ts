import Coordinates from 'models/Coordinates';

export const getRoute = (startPoint: Coordinates, endPoint: Coordinates) => {
  const data = {
    serviceUrl: 'https://navigation-demo.theorca.io?',
    timeout: 120000,
    responseFormat: 'geojson',
    locations: [
      {
        lat: startPoint.lat,
        lon: startPoint.lng
      },
      {
        lat: endPoint.lat,
        lon: endPoint.lng
      }
    ]
  };

  return fetch(
    `${process.env.API_URL}/route?json=${JSON.stringify(data)}&api_key=${process.env.API_KEY}`,
    { method: 'GET' }
  ).then<GeoJSON.FeatureCollection>((response) => response.json());
};
