import { ICatalogAction, ICatalog, CatalogActionTypes } from '../../models/catalog';

const initialState: ICatalog = {
  products: [],
  isLoading: false
};

export const catalogReducer = (state = initialState, action: ICatalogAction): ICatalog => {
  switch (action.type) {
    case CatalogActionTypes.FETCHING_CATALOG:
      return { isLoading: true, products: action.payload };
    case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
      return { isLoading: false, products: action.payload };
    default:
      return state;
  };
};