import { Form } from './Form';
import { GiphyProps } from './types';
import { defaultSearchViewType, defaultInputStyle, defaultPlaceholder } from './defaults';
import { useState } from 'react';
import ResultContainer from './ResultContainer';
import { Loader } from '@giphy/react-components';

export const Giphy = ({
  placeholder = defaultPlaceholder,
  inputStyle = defaultInputStyle,
  searchResultViewType = defaultSearchViewType,
  defaultSearch = '',
  trending = false,
  loader = Loader,
}: GiphyProps) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearch);

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  return (
    <>
      <Form
        defaultSearch={defaultSearch}
        placeholder={placeholder}
        style={inputStyle}
        handleSearch={handleSearch}
      />
      <div style={{ marginTop: 20, height: 400, overflowY: 'auto' }}>
        <ResultContainer
          trending={trending}
          searchTerm={searchTerm}
          searchResultViewType={searchResultViewType}
          loader={loader}
        />
      </div>
    </>
  );
};
