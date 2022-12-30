export type GalleryType = 'Masonry' | 'Carousel';

export type GalleryImage = {
    id: string;
    imageURL: string;
}
export interface GalleryProps {
    type: GalleryType;
    images: GalleryImage[];
    next: () => void;
    hasMore: boolean;
    loader?: JSX.Element
}
