import { Dispatch } from 'redux';
import { CatalogActionTypes, ICatalogAction } from '../../models/catalog';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { getAllProducts } from '../../services/catalog-service';

const getProducts = (searchTerm?: string) => async (dispatch: Dispatch<ICatalogAction | IErrorAction>) => {
  try {
    dispatch({
      type: CatalogActionTypes.FETCHING_CATALOG,
      payload: []
    })
    const response = await getAllProducts(searchTerm);
    dispatch({
      type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Ошибка при получении данных'
    });
  }
};

export {
  getProducts
};