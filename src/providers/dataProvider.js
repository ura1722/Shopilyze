import { fetchUtils } from 'react-admin';

const apiUrl = 'https://www.apishka.somee.com/api';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = `_sort=${field || 'id'}&_order=${order?.toLowerCase() || 'asc'}&_start=${(page - 1) * perPage}&_end=${page * perPage}`;
        
        const url = `${apiUrl}/product?${query}`;
        console.log('Requesting URL:', url);

        return httpClient(url).then(({ headers, json }) => ({
            data: json.map(product => ({
                ...product,
                title: product.title?.uk || product.title?.ru,
                description: product.description?.uk || product.description?.ru,
                categoryName: product.category?.name,
                commentsCount: product.comments?.length || 0
            })),
            total: parseInt(headers.get('x-total-count'), 10),
        }));
    },

    getOne: (resource, params) => {
        const url = `${apiUrl}/product/${params.id}`;
        return httpClient(url).then(({ json }) => ({
            data: {
                ...json,
                title: json.title?.uk || json.title?.ru,
                description: json.description?.uk || json.description?.ru,
                categoryName: json.category?.name,
                commentsCount: json.comments?.length || 0
            }
        }));
    },

    
};

export default dataProvider;
