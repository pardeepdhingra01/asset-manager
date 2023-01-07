export type GalleryType = 'Masonry' | 'Carousel';

export type GalleryImage = {
    id: string | number;
    imageURL?: string;
    alt?: string;
    status?: string;
    percent?: number;
}
export interface GalleryProps {
    type: GalleryType;
    images: GalleryImage[];
    next: () => void;
    hasMore: boolean;
    loader?: JSX.Element
}
