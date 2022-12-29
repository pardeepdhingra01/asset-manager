import { useState } from 'react';
import { PixabayProps } from './types';

import { Form } from './Form';
import { createPlaceholder } from './helpers';
import Gallery from '../Gallery';
import { result } from '../Common/defaults';
import {
  defaultOptions,
  defaultInputStyle,
  defaultOptionsStyle,
  defaultOption,
  defaultPlaceholderText,
  defaultPlaceholder,
  defaultSearchViewType,
} from './defaults';

export const Pixabay = ({
  showOptions = true,
  options = defaultOptions,
  inputStyle = defaultInputStyle,
  optionsStyle = defaultOptionsStyle,
  defaultSelectedOption = defaultOption,
  defaultSearch,
  placeholderText = defaultPlaceholderText,
  placeholder = defaultPlaceholder,
  searchResultView = defaultSearchViewType,
}: PixabayProps) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(
    createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption: defaultSelectedOption,
      options,
    }),
  );

  const handleSearch = (selectedOption: string) => {
    const placeholderValue = createPlaceholder({
      placeholder,
      placeholderText,
      selectedOption,
      options,
    });
    setPlaceholderValue(placeholderValue);
  };
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
      />
      <div style={{ marginTop: 20 }}>
        <Gallery images={result.images} type={defaultSearchViewType} />
      </div>
    </>
  );
};
