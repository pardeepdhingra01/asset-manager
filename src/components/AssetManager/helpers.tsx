import { UploadContainer } from '../Upload';
import { Giphy } from '../Giphy';
import { Pixabay } from '../Pixabay';

type Params = {
  isUpload: boolean;
  isGiphy: boolean;
  isPixabay: boolean;
};

export function generateTabs({ isUpload, isGiphy, isPixabay }: Params) {
  const items = [];
  if (isUpload) {
    items.push({
      label: 'Upload',
      tab: 'Upload',
      key: 'UPLOAD',
      children: <UploadContainer />,
    });
  }

  if (isGiphy) {
    items.push({
      label: 'Giphy',
      tab: 'Giphy',
      key: 'GIPHY',
      children: <Giphy trending />,
    });
  }

  if (isPixabay) {
    items.push({
      label: 'Pixabay',
      tab: 'Pixabay',
      key: 'PIXABAY',
      children: <Pixabay searchResultView="Masonry" />,
    });
  }

  return items;
}
