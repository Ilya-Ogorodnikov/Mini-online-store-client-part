import { api } from '../api';
import { BACK_URL } from '../constants';

const getAllProducts = (searchTerm: string = '') => api.get(`${BACK_URL}client/catalog/?searchTerm=${searchTerm}`);

export {
  getAllProducts
};
