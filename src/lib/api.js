import axiosInstance from './axios';

const API_URLS = {
  PRODUCTS: {
    LIST: '/products',
  },
};

export const ProductsAPI = {
  getProducts: async () => {
    const { data } = await axiosInstance.get(API_URLS.PRODUCTS.LIST);
    return data;
  },
};
