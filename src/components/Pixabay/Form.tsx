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
}: FormParams) => (
  <Input.Group compact>
    <Input
      allowClear
      defaultValue={defaultSearch}
      placeholder={placeholderValue}
      style={inputStyle}
    />
    <>
      {showOptions &&
        renderOptions({
          options,
          defaultSelectedOption,
          style: optionsStyle,
          handleSearch,
        })}
    </>
  </Input.Group>
);
