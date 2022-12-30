import { Input } from 'antd';
import { renderOptions } from './helpers';
import { FormParams } from './types';

export const Form = ({
  defaultSearch,
  placeholderValue,
  inputStyle,
  showOptions,
  options,
  defaultSelectedOption,
  optionsStyle,
  handleSearch,
  handleSearchType,
}: FormParams) => (
  <>
    <Input.Group>
      {showOptions &&
      renderOptions({
        options,
        defaultSelectedOption,
        style: optionsStyle,
        handleSearchType,
      })}
      <Input.Search
        allowClear
        defaultValue={defaultSearch}
        placeholder={placeholderValue}
        style={inputStyle}
        onSearch={handleSearch}
      />
    </Input.Group>
  </>
);
