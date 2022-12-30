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
  handleImageType,
}: FormParams) => (
  <>
    {showOptions &&
      renderOptions({
        options,
        defaultSelectedOption,
        style: optionsStyle,
        handleImageType,
      })}
    <Input.Group compact>
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
