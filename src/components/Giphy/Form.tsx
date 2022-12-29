import Search from 'antd/es/input/Search';
import { FormParams } from './types';

export const Form = ({ defaultSearch, placeholder, style, handleSearch }: FormParams) => (
  <Search
    placeholder={placeholder}
    onSearch={handleSearch}
    defaultValue={defaultSearch}
    enterButton
    allowClear
    style={style}
  />
);
