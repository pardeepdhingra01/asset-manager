import { Select } from 'antd';
import { RenderOptionParams, PlaceholderType, IOption } from './types';

const { Option } = Select;

export const renderOptions = ({
  defaultSelectedOption,
  options,
  handleImageType,
  style,
}: RenderOptionParams) => (
  <div style={{ width: '100%', paddingBottom: 10 }}>
    <label>Image Type: </label>
    <Select
      defaultValue={defaultSelectedOption}
      style={style}
      onChange={(option) => handleImageType(option)}
    >
      {options.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  </div>
);

export const createPlaceholder = ({
  placeholder,
  placeholderText,
  options,
  selectedOption,
}: {
  placeholder: PlaceholderType;
  placeholderText: string;
  options?: IOption[];
  selectedOption?: string;
}): string => {
  let selectedLabel = '';
  if (options?.length && selectedOption && (placeholder === 'auto' || placeholder === 'hybrid')) {
    selectedLabel = options.filter((option) => option.value === selectedOption)[0].label;
  }
  return placeholderText.replaceAll('{{option}}', selectedLabel);
};
