import React, { useState } from 'react';
import ImageSearch from '../components/imageSearch/ImageSearch';
import ImageResults from '../components/imageSearch/ImageResults';

const ImageSearchPage: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchSubmit = (val: string) => {
    setSearchTerm(val);
  };

  return (
    <>
      <ImageSearch onSearchSubmit={onSearchSubmit} />
      <ImageResults searchTerm={searchTerm} />
    </>
  );
};

export default ImageSearchPage;
