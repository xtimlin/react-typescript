import React, { useState } from 'react';
import type { Place } from '../components/locationSearch/LocationSearchInterface';
import Map from '../components/locationSearch/Map';
import LocationSearch from '../components/locationSearch/LocationSearch';

const LocationSearchPage: React.FunctionComponent = () => {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-2 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>

      <div className="col-span-10">
        <Map place={place} />
      </div>
    </div>
  );
};

export default LocationSearchPage;
