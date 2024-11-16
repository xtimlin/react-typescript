export interface Place {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

export interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}
