import {
  IProductAction,
  IProductState,
  ProductActionTypes
} from '../../models/product';

const initialState: IProductState = {
  favoriteProducts: JSON.parse(localStorage.getItem('allFavoriteProducts')!) || [],
  productsInBag: JSON.parse(localStorage.getItem('allProductsInBag')!) || [],
  quantityProductInBag: JSON.parse(localStorage.getItem('quantityProduct')!) || [],
  loading: false
};

export const productReducer = (state = initialState, action: IProductAction): IProductState => {
  switch (action.type) {
    case ProductActionTypes.LOADING_CHANGE_QUANTITY:
      return {...state, loading: action.payload };
    case ProductActionTypes.ADD_FAVORITE_PRODUCT:
      return {...state, favoriteProducts: action.payload };
    case ProductActionTypes.ADD_PRODUCT_IN_BAG:
      return { ...state, productsInBag: action.payload };
    case ProductActionTypes.CHANGE_QAUNTITY_PRODUCT:
      return { ...state, quantityProductInBag: action.payload };
    case ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT:
      return { ...state, quantityProductInBag: action.payload };
    case ProductActionTypes.REMOVE_FAVORITE_PRODUCT:
      return { ...state, favoriteProducts: action.payload };
    case ProductActionTypes.REMOVE_PRODUCT_FROM_BAG:
      return { ...state, productsInBag: action.payload };
    case ProductActionTypes.REMOVE_ALL_PRODUCT_FROM_BAG:
      return { ...state, productsInBag: [], quantityProductInBag: [] }
    default:
      return state;
  };
};