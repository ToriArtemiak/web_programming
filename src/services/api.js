import axios from 'axios';

export const fetchItems = async (searchTerm = '', sortOrder = 'desc', color = '', size = '') => {
    return await axios.get('http://localhost:5005/api/products', {
        params: {
            search: searchTerm,
            sort: sortOrder === 'asc' ? 'asc' : 'desc',
            color: color,
            size: size,
        },
    });
};

export const fetchItemById = async (id) => {
    return await axios.get(`http://localhost:5005/api/products/${id}`);
};