export type GalleryType = 'Masonry' | 'Carousel';

export type IImage = {
  id: string;
  urls: {
    small: string;
    medium: string;
    large: string;
    thumbnail: string;
  };
  alt?: string;
};

export interface GalleryProps {
  type: GalleryType;
  images: IImage[];
}
