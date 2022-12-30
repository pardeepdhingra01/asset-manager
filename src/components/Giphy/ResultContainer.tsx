import React, { ElementType, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ResizeObserver from 'react-resize-observer';
import { Carousel, Grid } from '@giphy/react-components';
import { GalleryType } from '../Pixabay/Components/Gallery/types';

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh');

const ResultContainer = ({
  trending,
  searchTerm,
  searchResultViewType,
  loader,
}: {
  trending: boolean;
  searchTerm: string;
  searchResultViewType: GalleryType;
  loader: ElementType;
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const fetchGifs = (offset: number) =>
    searchTerm === '' && trending
      ? giphyFetch.trending({ offset, limit: 10 })
      : giphyFetch.search(searchTerm, { offset, limit: 10 });

  if (searchResultViewType === 'Masonry') {
    return (
      <>
        <Grid
          fetchGifs={fetchGifs}
          width={width}
          columns={3}
          gutter={6}
          key={searchTerm}
          onGifClick={(gif, e) => {
            console.log('gif', gif);
            e.preventDefault();
          }}
          loader={loader}
        />
        <ResizeObserver onResize={({ width }) => setWidth(width)} />
      </>
    );
  }

  return (
    <Carousel
      fetchGifs={fetchGifs}
      gifHeight={200}
      gutter={6}
      key={searchTerm}
      onGifClick={(gif, e) => {
        console.log('gif', gif);
        e.preventDefault();
      }}
    />
  );
};

export default ResultContainer;
