const baseURL = 'https://pixabay.com/api/';

const apiKey = '32438317-904302ec99e28988783090736';

export const search = (searchTerm: string, options: { image_type?: string | null, page: number, per_page: number }) => {
    const { image_type, page, per_page } = options;
    let url = `${baseURL}?key=${apiKey}&q=${encodeURIComponent(searchTerm)}&page=${page}&per_page=${per_page}`;
    if (image_type === 'gifs') url += `&image_type=${image_type}`;
    return fetch(url);
};
