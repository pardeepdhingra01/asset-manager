import { ReactNode } from 'react';
import { Hit } from '../../types';

export type GalleryType = 'Masonry' | 'Carousel';

export interface GalleryProps {
    type: GalleryType;
    images: Hit[];
    total: number;
    next: () => void;
    loader?: ReactNode;
}
