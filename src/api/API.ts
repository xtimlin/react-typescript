import axios from 'axios';

import type {
  Place,
  SearchResponse,
} from '../components/locationSearch/LocationSearchInterface';

export const locationSearch = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`,
  );
  const data: SearchResponse = await res.json();

  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  return places;
};

export const sendApi = async (
  url: string,
  method: string,
  params: object,
  headers?: object,
  token?: string,
) => {
  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (method === 'GET') {
    return await axios.get(url, { headers, params });
  }
};
