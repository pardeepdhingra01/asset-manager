export type TabTypes = 'UPLOAD' | 'GIPHY' | 'PIXABAY';

export interface ITab {
  key: TabTypes;
  label: string;
  tab: string;
  children: JSX.Element;
}

export interface AssetManagerProps {
  title?: string;
  width?: number;
  open: boolean;
  isUpload?: boolean;
  isPixabay?: boolean;
  isGiphy?: boolean;
  confirmLoading?: boolean;
  tabs?: ITab[];
  defaultTab?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
