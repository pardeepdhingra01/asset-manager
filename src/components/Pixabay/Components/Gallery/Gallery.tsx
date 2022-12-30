import InfiniteScroll from 'react-infinite-scroll-component';
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

const Gallery = ({ type, next, images, total, loader }: GalleryProps) => {
  const childElements =
    images.map((image) => (
      <Image
        src={image.webformatURL && image.webformatURL}
        alt={image.id}
        key={image.id}
      />
    ));

  return (
    <InfiniteScroll
      dataLength={total}
      loader={loader}
      next={next}
      hasMore
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {childElements}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Gallery;
