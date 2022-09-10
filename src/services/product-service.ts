import { api } from '../api';
import { IQuantityProduct } from '../models';

const getNewProducts = () => api.get('client/start/products?new=true');

const getAllCategories = () => api.get('client/start/categories');

const getProductsOfSelectCategory = (id: string) => api.get(`client/start/products?categoryId=${id}`);

const getOneProduct = (id: string) => api.get(`client/start/products?productId=${id}`);

const getQuantityProductsUser = () => api.get('client/cart/');

const getAllPickupPoints = () => api.get('client/start/pickups');

const prosuctsInBagUserFromDb = () => api.get('client/cart/?asObjects=true');

const favoriteProductsFromDb = () => api.get('/client/favorites/all?asObjects=true');

const addFavoriteProduct = (id: string) => api.post(`client/favorites/add?productId=${id}`);

const addOneProductInBag = (_id: string, quantity: number) => api.post(`client/cart/add`, { _id, quantity });

const deleteFavoriteProduct = (id: string) => api.post(`client/favorites/delete?productId=${id}`);

const deleteProductFromBag = (id: string) => api.post(`client/cart/delete?productId=${id}`);

const deleteAllFromBag = () => api.post(`client/cart/delete?all=true`);

const changeQuantityOneProduct = (_id: string, quantity: number) => api.post(`client/cart/add`, { _id, quantity });

const syncFavoriteProductsWithDb = (allId: { _id: string }[]) => api.post('/client/favorites/sync', allId);

const syncProductsInBagWithDb = (allProductsWithQuantity: { _id: string, quantity: number }[]) => api.post('/client/cart/sync', allProductsWithQuantity);

const createOrder = (paid: number, items: IQuantityProduct[], pickupPoint: string) => api.post('client/purchase/makePurchase', { paid, items, pickupPoint });

export {
  getNewProducts,
  getAllCategories,
  getProductsOfSelectCategory,
  getOneProduct,
  favoriteProductsFromDb,
  syncFavoriteProductsWithDb,
  addFavoriteProduct,
  addOneProductInBag,
  deleteFavoriteProduct,
  deleteProductFromBag,
  deleteAllFromBag,
  changeQuantityOneProduct,
  prosuctsInBagUserFromDb,
  getQuantityProductsUser,
  syncProductsInBagWithDb,
  createOrder,
  getAllPickupPoints
};