import InfiniteScroll from 'react-infinite-scroller';
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

const Gallery = ({ type, next, images, hasMore, loader }: GalleryProps) => {
  let scrollParentRef: HTMLElement | null = null;
  const childElements =
    images.map((image) => (
      <Image
        placeholder
        src={image.imageURL && image.imageURL}
        alt={`${image.alt ?? image.id}`}
        key={image.id}
        preview={false}
        onClick={(e) => {
          console.log('image', image);
          e.preventDefault();
        }}
      />
    ));

  return (
    <div className='gallery-container' ref={(ref) => scrollParentRef = ref}>
      <InfiniteScroll
        pageStart={0}
        loadMore={next}
        initialLoad
        hasMore={hasMore}
        loader={loader}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {childElements}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default Gallery;
