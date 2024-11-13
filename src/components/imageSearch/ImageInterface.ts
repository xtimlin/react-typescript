export interface UnsplashImage {
  urls: {
    small: string;
  };
  alt_description: string | null;
}

export interface ImageProps {
  name: string;
  url: string;
}
