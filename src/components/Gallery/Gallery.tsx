import Masonry from 'react-masonry-css';
import { Image } from 'antd';
import { GalleryProps } from './types';
import './Gallery.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = ({ type, images }: GalleryProps) => {
  const childElements = ({
    width = 'auto',
    height = 'auto',
    imageClassName = '',
  }: {
    width?: number | string;
    height?: number | string;
    imageClassName?: string;
  }) =>
    images.map((image) => (
      <Image
        className={imageClassName}
        src={image.urls && image.urls.small}
        alt={image.alt}
        key={image.id}
        height={height}
        width={width}
      />
    ));

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {childElements({})}
    </Masonry>
  );
};

export default Gallery;
