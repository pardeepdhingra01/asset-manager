import { ReactNode } from 'react';
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
  loader?: JSX.Element;
  perPage?: number;
}

export interface RenderOptionParams {
  options: IOption[];
  defaultSelectedOption?: string;
  handleSearchType: (option: string) => void;
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
  handleSearch: (q: string) => void;
  handleSearchType: (option: string) => void | null;
}

export type Hit = {
  id: string;
  pageURL: string;
  type: string;
  tags: string[];
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
  fullHDURL?: string;
  imageURL?: string;
  vectorURL?: string;
};
export interface ResultType {
  total: number;
  totalHits: number;
  hits: Hit[];
}
