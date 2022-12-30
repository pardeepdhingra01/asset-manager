const baseURL = 'https://pixabay.com/api';

const apiKey = '32438317-904302ec99e28988783090736';

const prepareURL = (type: string) => {
    return `${baseURL}?key=${apiKey}&image_type=${type}`;
}
export const search = (searchTerm: string, options: { type: string, page: number, per_page: number }) => {
    const { type, page, per_page } = options;
    let url = `${prepareURL(type)}&q=${encodeURIComponent(searchTerm)}&page=${page}&per_page=${per_page}`;
    return fetch(url);
};
