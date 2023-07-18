export type Coordinates = {
    name: string,
    id: number,
    latitude: number,
    longitude: number,
    altitude: number,
    velocity: number,
    visibility: string,
    footprint: number,
    timestamp: number,
    daynum: number,
    solar_lat: number,
    solar_lon: number,
    units: string
}

export const fetchCoordinates = async () => {
  const response = await fetch(
    'https://api.wheretheiss.at/v1/satellites/25544'
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates`);
    }
  
  const coordinates: Coordinates = await response.json();

  const latitude = Number(coordinates.latitude.toFixed(4));
  const longitude = Number(coordinates.longitude.toFixed(4));

  return { latitude, longitude };
};
