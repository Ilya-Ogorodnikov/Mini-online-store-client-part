import { Dispatch } from 'redux';
import { IProduct, IQuantityProduct } from '../../models';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { IProductAction, ProductActionTypes } from '../../models/product';
import {
  addFavoriteProduct,
  addOneProductInBag,
  changeQuantityOneProduct,
  deleteAllFromBag,
  deleteFavoriteProduct,
  deleteProductFromBag,
  favoriteProductsFromDb,
  getQuantityProductsUser,
  prosuctsInBagUserFromDb,
  syncFavoriteProductsWithDb,
  syncProductsInBagWithDb
} from '../../services/product-service';
import { FunActionTypes, IFunAction } from '../reducers/funReducer';

const addFavoriteProducts = (product: IProduct, isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    if (isAuth) {
      await addFavoriteProduct(product._id);
    };

    const allFavoriteProductsInLocalStorage: IProduct[] = JSON.parse(localStorage.getItem('allFavoriteProducts')!) || [];
    allFavoriteProductsInLocalStorage.push(product);
    localStorage.setItem('allFavoriteProducts', JSON.stringify(allFavoriteProductsInLocalStorage));

    dispatch({
      type: ProductActionTypes.ADD_FAVORITE_PRODUCT,
      payload: JSON.parse(localStorage.getItem('allFavoriteProducts')!)
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось добавить в избранное'
    });
  };
};

const addProductInBag = (product: IProduct, isAuth?: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    
    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: true
    });
    if (isAuth) {
      await addOneProductInBag(product._id, 1);
    };

    const allProductsInLocalStorage: IProduct[] = JSON.parse(localStorage.getItem('allProductsInBag')!) || [];
    allProductsInLocalStorage.push(product);
    localStorage.setItem('allProductsInBag', JSON.stringify(allProductsInLocalStorage));

    const allProductsQuantityInLocalStorage: IQuantityProduct[] = JSON.parse(localStorage.getItem('quantityProducts')!) || [];
    allProductsQuantityInLocalStorage.push({ _id: product._id, quantity: 1 });
    localStorage.setItem('quantityProducts', JSON.stringify(allProductsQuantityInLocalStorage));

    dispatch({
      type: ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT,
      payload: JSON.parse(localStorage.getItem('quantityProducts')!)
    });

    dispatch({
      type: ProductActionTypes.ADD_PRODUCT_IN_BAG,
      payload: JSON.parse(localStorage.getItem('allProductsInBag')!)
    });

    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: false
    });

  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось добавить в корзину'
    });
  };
};

const removeFavoriteProduct = (product: IProduct, isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    
    if (isAuth) {
      await deleteFavoriteProduct(product._id);
    };

    localStorage.setItem('allFavoriteProducts', JSON.stringify(JSON
      .parse(localStorage.getItem('allFavoriteProducts')!)
      .filter((item: IProduct) => item._id !== product._id))
    );

    dispatch({
      type: ProductActionTypes.REMOVE_FAVORITE_PRODUCT,
      payload: JSON.parse(localStorage.getItem('allFavoriteProducts')!)
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось удалить из избранного'
    });
  };
};

const removeProductFromBag = (product: IProduct, isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    if (isAuth) {
      await deleteProductFromBag(product._id);
    };
  
    localStorage.setItem('allProductsInBag', JSON.stringify(JSON
      .parse(localStorage.getItem('allProductsInBag')!)
      .filter((item: IProduct) => item._id !== product._id))
    );

    localStorage.setItem('quantityProducts', JSON.stringify(JSON
      .parse(localStorage.getItem('quantityProducts')!)
      .filter((item: IProduct) => item._id !== product._id))
    );
  
    dispatch({
      type: ProductActionTypes.REMOVE_PRODUCT_FROM_BAG,
      payload: JSON.parse(localStorage.getItem('allProductsInBag')!)
    });

    dispatch({
      type: ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT,
      payload: JSON.parse(localStorage.getItem('quantityProducts')!)
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось удалить товар'
    });
  };
};

const removeAllProductsFromBag = (isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    if (isAuth) {
      await deleteAllFromBag();
    };

    localStorage.removeItem('allProductsInBag');
    localStorage.removeItem('quantityProducts');

    dispatch({
      type: ProductActionTypes.REMOVE_ALL_PRODUCT_FROM_BAG
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось удалить все товары'
    });
  };
};

const changeQauntityProduct = (id: string, increment: boolean, isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction | IFunAction>) => {
  try {
    dispatch({
      type: FunActionTypes.CHANGE_LOADING,
      payload: true
    });

    const allProductsWithQauntity: IQuantityProduct[] = JSON.parse(localStorage.getItem('quantityProducts')!);
    const allProductsWithChangeQauntity = allProductsWithQauntity.map(item => {
      const newItem = {...item};
      if (newItem._id === id && increment) {
        newItem.quantity = newItem.quantity + 1
      };
  
      if (newItem._id === id && !increment) {
        newItem.quantity = newItem.quantity - 1
      };
      return newItem;
    });
    
    if (isAuth) {
      const currentQauntity = allProductsWithChangeQauntity.find(item => item._id === id)?.quantity;
      await changeQuantityOneProduct(id, currentQauntity!);
    };

    localStorage.setItem('quantityProducts', JSON.stringify(allProductsWithChangeQauntity));

    dispatch({
      type: ProductActionTypes.CHANGE_QAUNTITY_PRODUCT,
      payload: JSON.parse(localStorage.getItem('quantityProducts')!)
    });

    dispatch({
      type: FunActionTypes.CHANGE_LOADING,
      payload: false
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось изменить количество товара'
    });
  };
};

const rewriteFavoriteProductsInLocalStorage = (isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    if (!isAuth) {
      return;
    };

    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: true
    });

    const allFavoriteProductsInLocalStorage: IProduct[] = JSON.parse(localStorage.getItem('allFavoriteProducts')!) || [];
    if (allFavoriteProductsInLocalStorage.length === 0) {
      const allFavoriteProductsFromDb = await favoriteProductsFromDb();
      localStorage.setItem('allFavoriteProducts', JSON.stringify(allFavoriteProductsFromDb.data.favorites));

      dispatch({
        type: ProductActionTypes.ADD_FAVORITE_PRODUCT,
        payload: JSON.parse(localStorage.getItem('allFavoriteProducts')!)
      });

      dispatch({
        type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
        payload: false
      });
      return;
    };

    const allId = allFavoriteProductsInLocalStorage.map(item => ({ _id: item._id }))
    await syncFavoriteProductsWithDb(allId);
    const allFavoriteProductsFromDb = await favoriteProductsFromDb();
    localStorage.setItem('allFavoriteProducts', JSON.stringify(allFavoriteProductsFromDb.data.favorites));

    dispatch({
      type: ProductActionTypes.ADD_FAVORITE_PRODUCT,
      payload: JSON.parse(localStorage.getItem('allFavoriteProducts')!)
    });

    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: false
    });

  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось обновить избранное'
    });
  };
};

const rewriteBagInLocalStorage = (isAuth: boolean) => async (dispatch: Dispatch<IProductAction | IErrorAction>) => {
  try {
    if (!isAuth) {
      return
    };

    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: true
    });

    const allProductsInLocalStorage: IProduct[] = JSON.parse(localStorage.getItem('allProductsInBag')!) || [];
    if (allProductsInLocalStorage.length === 0) {
      const allProductsUserFromDb = await prosuctsInBagUserFromDb();
      const qauntity = await getQuantityProductsUser();

      localStorage.setItem('allProductsInBag', JSON.stringify(allProductsUserFromDb.data.cart));
      localStorage.setItem('quantityProducts', JSON.stringify(qauntity.data.cart));

      dispatch({
        type: ProductActionTypes.ADD_PRODUCT_IN_BAG,
        payload: JSON.parse(localStorage.getItem('allProductsInBag')!)
      });

      dispatch({
        type: ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT,
        payload: JSON.parse(localStorage.getItem('quantityProducts')!)
      });

      dispatch({
        type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
        payload: false
      });
      return;
    };

    const allProductsWithQuantity = JSON.parse(localStorage.getItem('quantityProducts')!) || []
    await syncProductsInBagWithDb(allProductsWithQuantity);
    const allProductsUserFromDb = await prosuctsInBagUserFromDb();
    const qauntity = await getQuantityProductsUser();
    
    localStorage.setItem('allProductsInBag', JSON.stringify(allProductsUserFromDb.data.cart));
    localStorage.setItem('quantityProducts', JSON.stringify(qauntity.data.cart));

    dispatch({
      type: ProductActionTypes.ADD_PRODUCT_IN_BAG,
      payload: JSON.parse(localStorage.getItem('allProductsInBag')!)
    });

    dispatch({
      type: ProductActionTypes.FETCH_INITIAL_QAUNTITY_PRODUCT,
      payload: JSON.parse(localStorage.getItem('quantityProducts')!)
    });

    dispatch({
      type: ProductActionTypes.LOADING_CHANGE_QUANTITY,
      payload: false
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Не удалось обновить корзину'
    });
  };
};

export {
  addFavoriteProducts,
  addProductInBag,
  removeFavoriteProduct,
  removeProductFromBag,
  removeAllProductsFromBag,
  changeQauntityProduct,
  rewriteFavoriteProductsInLocalStorage,
  rewriteBagInLocalStorage
};