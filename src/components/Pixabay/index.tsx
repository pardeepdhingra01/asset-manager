import { useEffect, useState } from 'react';
import { Hit, PixabayProps, ResultType } from './types';

import { Form } from './Form';
import { createPlaceholder } from './helpers';
import {
  defaultOptions,
  defaultInputStyle,
  defaultOptionsStyle,
  defaultOption,
  defaultPlaceholderText,
  defaultPlaceholder,
  defaultSearchViewType,
  defaultPerPage,
} from './defaults';
import { search } from './services';
import Gallery from './Components/Gallery';

export const Pixabay = ({
  showOptions = true,
  options = defaultOptions,
  inputStyle = defaultInputStyle,
  optionsStyle = defaultOptionsStyle,
  defaultSelectedOption = defaultOption,
  defaultSearch = '',
  placeholderText = defaultPlaceholderText,
  placeholder = defaultPlaceholder,
  searchResultView = defaultSearchViewType,
  perPage = defaultPerPage,
  loader = <>Loading...</>,
}: PixabayProps) => {
  const [imageType, setImageType] = useState<string | null>(
    showOptions ? defaultSelectedOption : null,
  );
  const [searchTerm, setSearchTerm] = useState(defaultSearch);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState<Hit[]>([]);
  const [totalImages, setTotalImages] = useState(0);
  const [placeholderValue, setPlaceholderValue] = useState<string>(
    createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption: defaultSelectedOption,
      options,
    }),
  );

  const handleImageType = (selectedOption: string) => {
    const placeholderValue = createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption,
      options,
    });
    setPlaceholderValue(placeholderValue);
    setImageType(selectedOption);
  };

  const handleSearch = (st: string) => {
    setSearchTerm(st);
    setHits([]);
    search(st, { image_type: imageType, page, per_page: perPage })
      .then((response) => response.json())
      .then((result: ResultType) => {
        setTotalImages(result.totalHits);
        setHits(result.hits);
      });
  };

  useEffect(() => {
    handleSearch(defaultSearch);
  }, [defaultSearch]);

  const next = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    search(searchTerm, { image_type: imageType, page: nextPage, per_page: perPage })
      .then((response) => response.json())
      .then((result: ResultType) => {
        setTotalImages(result.totalHits);
        setHits((hits) => hits.concat(result.hits));
      });
  }
  return (
    <>
      <Form
        defaultSearch={defaultSearch}
        placeholderValue={placeholderValue}
        inputStyle={inputStyle}
        showOptions={showOptions}
        options={options}
        defaultSelectedOption={defaultSelectedOption}
        optionsStyle={optionsStyle}
        handleSearch={handleSearch}
        handleImageType={handleImageType}
      />
      <div style={{ marginTop: 20 }}>
        <Gallery 
          images={hits} 
          total={totalImages}
          type={searchResultView} 
          loader={loader} 
          next={next} 
        />
      </div>
    </>
  );
};
