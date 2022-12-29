import { GalleryType } from '../Gallery/types';

export type PlaceholderType = 'static' | 'auto' | 'hybrid';

export type IOption = {
  label: string;
  value: string;
};

export interface PixabayProps {
  defaultSearch?: string;
  showOptions?: boolean;
  options?: IOption[];
  placeholderText?: string;
  placeholder?: PlaceholderType;
  style?: Record<string, string | number>;
  inputStyle?: Record<string, string | number>;
  optionsStyle?: Record<string, string | number>;
  defaultSelectedOption?: string;
  searchResultView?: GalleryType;
}

export interface RenderOptionParams {
  options: IOption[];
  defaultSelectedOption?: string;
  handleSearch: (option: string) => void;
  style?: Record<string, string | number>;
}

export interface FormParams {
  defaultSearch?: string;
  showOptions: boolean;
  options: IOption[];
  placeholderValue: string;
  inputStyle: Record<string, string | number>;
  optionsStyle?: Record<string, string | number>;
  defaultSelectedOption?: string;
  handleSearch: (option: string) => void;
}

export interface RenderOptionParams {
  options: IOption[];
  defaultSelectedOption?: string;
  handleSearch: (option: string) => void;
  style?: Record<string, string | number>;
}
