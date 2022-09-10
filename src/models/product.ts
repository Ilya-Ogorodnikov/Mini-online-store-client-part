import { IProduct, IQuantityProduct } from '.';

export interface IProductState {
  favoriteProducts: IProduct[],
  productsInBag: IProduct[],
  quantityProductInBag: IQuantityProduct[],
  loading: boolean
}

export enum ProductActionTypes {
  ADD_FAVORITE_PRODUCT = 'ADD_FAVORITE_PRODUCT',
  ADD_PRODUCT_IN_BAG = 'ADD_PRODUCT_IN_BAG',
  REMOVE_FAVORITE_PRODUCT = 'REMOVE_FAVORITE_PRODUCT',
  REMOVE_PRODUCT_FROM_BAG = 'REMOVE_PRODUCT_FROM_BAG',
  REMOVE_ALL_PRODUCT_FROM_BAG = 'REMOVE_ALL_PRODUCT_FROM_BAG',
  CHANGE_QAUNTITY_PRODUCT = 'ADD_QAUNTITY_PRODUCT',
  FETCH_INITIAL_QAUNTITY_PRODUCT = 'FETCH_INITIAL_QAUNTITY_PRODUCT',
  LOADING_CHANGE_QUANTITY = 'LOADING_CHANGE_QUANTITY',
}

interface IAddFavoriteProductAction {
  type: ProductActionTypes.ADD_FAVORITE_PRODUCT,
  payload: IProduct[]
}

interface IAddProductInBagAction {
  type: ProductActionTypes.ADD_PRODUCT_IN_BAG,
  payload: IProduct[]
}

interface IRemoveFavoriteProductAction {
  type: ProductActionTypes.REMOVE_FAVORITE_PRODUCT,
  payload: IProduct[]
}

interface IRemoveProductFromBagAction {
  type: ProductActionTypes.REMOVE_PRODUCT_FROM_BAG,
  payload: IProduct[]
}

interface IRemoveAllProductFromBagAction {
  type: ProductActionTypes.REMOVE_ALL_PRODUCT_FROM_BAG
}

interface IFetchInitialQuantityProduct {
  type: ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT,
  payload: IQuantityProduct[]
}

interface IChangeQuantityProduct {
  type: ProductActionTypes.CHANGE_QAUNTITY_PRODUCT,
  payload: IQuantityProduct[]
}

interface ILoadingChangeQuantity {
  type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
  payload: boolean
}

export type IProductAction = IAddFavoriteProductAction
  | IAddProductInBagAction
  | IRemoveFavoriteProductAction
  | IRemoveProductFromBagAction
  | IRemoveAllProductFromBagAction
  | IChangeQuantityProduct
  | IFetchInitialQuantityProduct
  | ILoadingChangeQuantity
;