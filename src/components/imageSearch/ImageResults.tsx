import React, { useState, useEffect } from 'react';
import { sendApi } from '../../api/API';
import { ImageProps, UnsplashImage } from './ImageInterface';

interface ImageResultsProps {
  searchTerm: string;
}

const ImageResults: React.FunctionComponent<ImageResultsProps> = ({
  searchTerm,
}) => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesResult = await sendApi(
          'https://api.unsplash.com/photos/',
          'GET',
          { query: { searchTerm } },
          // { Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y' }
          {
            Authorization:
              'Client-ID 4IL8mpuXW2zNexizaDsMiQVC_5T-MHtEtbABOF1Jnzw',
          },
        );
        console.log(imagesResult?.data);
        setImages(
          imagesResult?.data.map((item: UnsplashImage) => ({
            url: item.urls.small,
            name: item.alt_description ?? 'No description',
          })),
        );
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    if (searchTerm) fetchImages();
  }, [searchTerm]);

  return (
    <div>
      <p>Search Result for (unsplash might return same result): {searchTerm}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image: ImageProps, index) => {
          return (
            <div key={index} className="h-auto max-w-full rounded-lg">
              <img
                src={image.url}
                alt={image.name || 'Image'}
                className="rounded-t-lg object-cover object-center w-full h-96"
              />
              {/*<p>{image.name}</p>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageResults;
