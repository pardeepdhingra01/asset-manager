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
import { Loader } from '@giphy/react-components';

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
  loader = <Loader/>
}: PixabayProps) => {
  const [type, setType] = useState<string>(defaultSelectedOption);
  const [searchTerm, setSearchTerm] = useState(defaultSearch);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState<Hit[]>([]);
  const [pages, setPages] = useState(0);
  const [placeholderValue, setPlaceholderValue] = useState<string>(
    createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption: defaultSelectedOption,
      options,
    }),
  );

  const handleSearchType = (selectedOption: string) => {
    const placeholderValue = createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption,
      options,
    });
    setPlaceholderValue(placeholderValue);
    setType(selectedOption);
  };

  const handleSearch = (st: string) => {
    setSearchTerm(st);
    setHits([]);
    search(st, { type, page, per_page: perPage })
      .then((response) => response.json())
      .then((result: ResultType) => {
        setPages(result.totalHits / perPage);
        setHits(result.hits);
      });
  };

  useEffect(() => {
    handleSearch(defaultSearch);
  }, [defaultSearch]);

  const next = () => {
    if (page<pages) {
      const nextPage = page + 1;
      setPage(nextPage);
      search(searchTerm, { type, page: nextPage, per_page: perPage })
        .then((response) => response.json())
        .then((result: ResultType) => {
          setHits((hits) => hits.concat(result.hits));
        });
    }
  }
  return (
    <>
      <Form
        defaultSearch={defaultSearch}
        placeholderValue={placeholderValue}
        showOptions={showOptions}
        options={options}
        defaultSelectedOption={defaultSelectedOption}
        inputStyle={inputStyle}
        optionsStyle={optionsStyle}
        handleSearch={handleSearch}
        handleSearchType={handleSearchType}
      />
      <Gallery 
        images={hits} 
        hasMore={page !== pages}
        type={searchResultView} 
        loader={loader} 
        next={next} 
      />
    </>
  );
};
