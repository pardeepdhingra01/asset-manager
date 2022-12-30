import { Hit } from '../../types';

export type GalleryType = 'Masonry' | 'Carousel';

export interface GalleryProps {
    type: GalleryType;
    images: Hit[];
    next: () => void;
    hasMore: boolean;
    loader?: JSX.Element
}
