import { ElementType } from 'react';
import { GalleryType } from '../Pixabay/Components/Gallery/types';

export interface GiphyProps {
  trending?: boolean;
  defaultSearch?: string;
  placeholder?: string;
  style?: Record<string, string | number>;
  inputStyle?: Record<string, string | number>;
  searchResultViewType?: GalleryType;
  loader?: ElementType;
}

export interface FormParams {
  defaultSearch?: string;
  placeholder: string;
  style: Record<string, string | number>;
  handleSearch: (query: string) => void;
}
